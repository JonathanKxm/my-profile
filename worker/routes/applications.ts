import type { Env } from '../lib/index.ts';
import { jsonResponse, errorResponse, successResponse } from '../lib/index.ts';
import type {
  Application,
  CreateApplicationDTO,
  UpdateApplicationDTO,
} from '../types/index.ts';

export async function listApplications(
  request: Request,
  env: Env
): Promise<Response> {
  const url = new URL(request.url);
  const status = url.searchParams.get('status');
  const search = url.searchParams.get('search');

  let query = 'SELECT * FROM applications WHERE 1=1';
  const bindings: (string | null)[] = [];

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
    data: result.results as Application[],
    count: result.results.length,
  });
}

export async function createApplication(
  request: Request,
  env: Env
): Promise<Response> {
  const body = await request.json() as CreateApplicationDTO;

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

    return successResponse(newRecord as Application, 201);
  }

  return errorResponse('创建失败', 500);
}

export async function getApplication(
  id: string,
  env: Env
): Promise<Response | null> {
  const numericId = parseInt(id, 10);

  const existing = await env.DB
    .prepare('SELECT * FROM applications WHERE id = ?')
    .bind(numericId)
    .first();

  if (!existing) {
    return null;
  }

  return successResponse(existing as Application);
}

export async function updateApplication(
  request: Request,
  id: string,
  env: Env
): Promise<Response | null> {
  const numericId = parseInt(id, 10);
  const body = await request.json() as Partial<UpdateApplicationDTO>;
  const now = new Date().toISOString();

  const updates: string[] = [];
  const bindings: (string | number | null)[] = [];

  const allowedFields = [
    'company_name',
    'job_title',
    'job_url',
    'location',
    'status',
    'applied_date',
    'salary_range',
    'cover_letter',
    'notes',
    'source',
  ] as const;

  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      updates.push(`${field} = ?`);
      bindings.push(body[field] as string);
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

    return successResponse(updated as Application);
  }

  return errorResponse('更新失败', 500);
}

export async function deleteApplication(
  id: string,
  env: Env
): Promise<Response> {
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
