import { handleOptions, errorResponse } from './lib/index.ts';
import { matchRoute } from './routes/index.ts';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const method = request.method;

    // Handle CORS preflight
    if (method === 'OPTIONS') {
      return handleOptions();
    }

    // Match API routes
    const route = matchRoute(method, pathname);

    if (route) {
      try {
        return await route.handler(request, env);
      } catch (err) {
        console.error('[API Error]', err);
        return errorResponse('服务器错误', 500);
      }
    }

    // For all other routes, return 404
    // (static assets are served separately by the Cloudflare Workers assets binding)
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
