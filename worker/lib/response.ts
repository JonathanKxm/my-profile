import type { ApiResponse } from '../types/index.ts';
import { corsHeaders } from './cors.ts';

export function jsonResponse<T>(
  data: ApiResponse<T>,
  status = 200
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

export function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ success: false, error: message }, status);
}

export function successResponse<T>(
  data: T,
  status = 200,
  message?: string
): Response {
  return jsonResponse({ success: true, data, ...(message && { message }) }, status);
}
