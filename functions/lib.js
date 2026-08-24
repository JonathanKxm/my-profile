// CORS headers
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export function handleOptions() {
  return new Response(null, { headers: corsHeaders });
}

// Response helpers
export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

export function errorResponse(message, status = 400) {
  return jsonResponse({ success: false, error: message }, status);
}

export function successResponse(data, status = 200, message) {
  const response = { success: true, data };
  if (message) response.message = message;
  return jsonResponse(response, status);
}
