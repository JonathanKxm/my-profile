import type { Env } from '../lib/index.ts';
import { errorResponse } from '../lib/index.ts';
import * as applications from './applications.ts';

type RouteHandler = (request: Request, env: Env) => Promise<Response>;

interface Route {
  method: string;
  pattern: RegExp;
  handler: RouteHandler;
  paramNames?: string[];
}

const routes: Route[] = [
  // GET /api/applications — list
  {
    method: 'GET',
    pattern: /^\/api\/applications\/?$/,
    handler: applications.listApplications,
  },
  // POST /api/applications — create
  {
    method: 'POST',
    pattern: /^\/api\/applications\/?$/,
    handler: applications.createApplication,
  },
  // GET /api/applications/:id
  {
    method: 'GET',
    pattern: /^\/api\/applications\/(\d+)$/,
    handler: async (request, env) => {
      const url = new URL(request.url);
      const match = url.pathname.match(/^\/api\/applications\/(\d+)$/);
      if (!match) return errorResponse('无效的请求', 400);
      const response = await applications.getApplication(match[1], env);
      return response ?? errorResponse('记录不存在', 404);
    },
  },
  // PUT /api/applications/:id
  {
    method: 'PUT',
    pattern: /^\/api\/applications\/(\d+)$/,
    handler: async (request, env) => {
      const url = new URL(request.url);
      const match = url.pathname.match(/^\/api\/applications\/(\d+)$/);
      if (!match) return errorResponse('无效的请求', 400);
      const response = await applications.updateApplication(request, match[1], env);
      return response ?? errorResponse('记录不存在', 404);
    },
  },
  // DELETE /api/applications/:id
  {
    method: 'DELETE',
    pattern: /^\/api\/applications\/(\d+)$/,
    handler: async (request, env) => {
      const url = new URL(request.url);
      const match = url.pathname.match(/^\/api\/applications\/(\d+)$/);
      if (!match) return errorResponse('无效的请求', 400);
      return applications.deleteApplication(match[1], env);
    },
  },
];

export function matchRoute(
  method: string,
  pathname: string
): Route | undefined {
  return routes.find(
    (route) => route.method === method && route.pattern.test(pathname)
  );
}

export { routes };
