import { handleOptions, jsonResponse, errorResponse, successResponse } from './lib.js';

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const method = request.method;

  // Handle CORS preflight
  if (method === 'OPTIONS') {
    return handleOptions();
  }

  // API routes
  if (pathname.startsWith('/api/')) {
    try {
      return await handleApi(pathname, method, request, env);
    } catch (err) {
      console.error('[API Error]', err);
      return errorResponse('服务器错误', 500);
    }
  }

  // Non-API routes - let static assets handle them
  return new Response(null, { status: 404 });
}

async function handleApi(pathname, method, request, env) {
  // GET /api/applications — list
  if (method === 'GET' && /^\/api\/applications\/?$/.test(pathname)) {
    return listApplications(request, env);
  }

  // POST /api/applications — create
  if (method === 'POST' && /^\/api\/applications\/?$/.test(pathname)) {
    return createApplication(request, env);
  }

  // GET /api/applications/:id
  if (method === 'GET' && /^\/api\/applications\/(\d+)$/.test(pathname)) {
    const id = pathname.match(/^\/api\/applications\/(\d+)$/)[1];
    return getApplication(id, env);
  }

  // PUT /api/applications/:id
  if (method === 'PUT' && /^\/api\/applications\/(\d+)$/.test(pathname)) {
    const id = pathname.match(/^\/api\/applications\/(\d+)$/)[1];
    return updateApplication(request, id, env);
  }

  // DELETE /api/applications/:id
  if (method === 'DELETE' && /^\/api\/applications\/(\d+)$/.test(pathname)) {
    const id = pathname.match(/^\/api\/applications\/(\d+)$/)[1];
    return deleteApplication(id, env);
  }

  return errorResponse('未找到 API', 404);
}

async function listApplications(request, env) {
  const url = new URL(request.url);
  const status = url.searchParams.get('status');
  const search = url.searchParams.get('search');

  let query = 'SELECT * FROM applications WHERE 1=1';
  const bindings = [];

  if (status) {
    query += ' AND status = ?';
    bindings.push(status);
  }

  if (search) {
    query += ' AND (company_name LIKE ? OR job_title LIKE ? OR notes LIKE ?)';
    const searchPattern = `%${search}%`;
    bindings.push(searchPattern, searchPattern, searchPattern);
  }

  query += ' ORDER BY applied_date DESC, created_at DESC';

  const result = await env.DB.prepare(query).bind(...bindings).all();

  return jsonResponse({
    success: true,
    data: result.results,
    count: result.results.length,
  });
}

async function createApplication(request, env) {
  const body = await request.json();

  if (!body.company_name) {
    return errorResponse('公司名称不能为空');
  }

  const now = new Date().toISOString();
  const appliedDate = body.applied_date || now.split('T')[0];

  const result = await env.DB
    .prepare(`
      INSERT INTO applications (
        company_name, job_title, job_url, location, status,
        applied_date, salary_range, cover_letter, notes, source,
        created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      body.company_name,
      body.job_title || null,
      body.job_url || null,
      body.location || null,
      body.status || 'applied',
      appliedDate,
      body.salary_range || null,
      body.cover_letter || null,
      body.notes || null,
      body.source || 'manual',
      now,
      now,
    )
    .run();

  if (result.success) {
    const newRecord = await env.DB
      .prepare('SELECT * FROM applications WHERE id = ?')
      .bind(result.meta.last_row_id ?? 0)
      .first();

    return successResponse(newRecord, 201);
  }

  return errorResponse('创建失败', 500);
}

async function getApplication(id, env) {
  const numericId = parseInt(id, 10);

  const existing = await env.DB
    .prepare('SELECT * FROM applications WHERE id = ?')
    .bind(numericId)
    .first();

  if (!existing) {
    return errorResponse('记录不存在', 404);
  }

  return successResponse(existing);
}

async function updateApplication(request, id, env) {
  const numericId = parseInt(id, 10);
  const body = await request.json();
  const now = new Date().toISOString();

  const updates = [];
  const bindings = [];

  const allowedFields = [
    'company_name', 'job_title', 'job_url', 'location', 'status',
    'applied_date', 'salary_range', 'cover_letter', 'notes', 'source',
  ];

  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      updates.push(`${field} = ?`);
      bindings.push(body[field]);
    }
  }

  if (updates.length === 0) {
    return errorResponse('没有需要更新的字段');
  }

  updates.push('updated_at = ?');
  bindings.push(now);
  bindings.push(numericId);

  const result = await env.DB
    .prepare(`UPDATE applications SET ${updates.join(', ')} WHERE id = ?`)
    .bind(...bindings)
    .run();

  if (result.success) {
    const updated = await env.DB
      .prepare('SELECT * FROM applications WHERE id = ?')
      .bind(numericId)
      .first();

    return successResponse(updated);
  }

  return errorResponse('更新失败', 500);
}

async function deleteApplication(id, env) {
  const numericId = parseInt(id, 10);

  const result = await env.DB
    .prepare('DELETE FROM applications WHERE id = ?')
    .bind(numericId)
    .run();

  if (result.success) {
    return successResponse(null, 200, '删除成功');
  }

  return errorResponse('删除失败', 500);
}
