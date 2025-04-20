export default function middleware(request) {
    const url = new URL(request.url);
    const response = new Response();
  
    // Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;");
  
    // Basic rate limiting (example)
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown';
    const requestsLimit = 100;
    const timeWindow = 60000; // 1 minute
    
    // Add your rate limiting logic here
    // This is a placeholder for demonstration
    
    return response;
  }
  
  export const config = {
    matcher: '/(.*)',
  };