import { NextResponse } from 'next/server';

// Common malicious vulnerability scanners and sensitive probe patterns
const BLOCKED_PATTERNS = [
  /\/\.(env|git|svn|htaccess|htpasswd|aws|ssh|ds_store|bak|conf|config)/i,
  /\/(wp-admin|wp-login|xmlrpc|phpinfo|eval-stdin|actuator|cgi-bin|autodiscover|solr|boaform)/i,
  /\.(php|asp|aspx|jsp|cgi|pl|sh|bash|sql|bak|old|orig|swp)$/i,
  /(\.\.|\%2e\%2e)/i, // Path traversal attempts
];

const SECURITY_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob: https://images.unsplash.com https://cdn.21st.dev https://*.google.com https://*.googleusercontent.com https://*.instagram.com",
    "connect-src 'self' https://*.google.com https://*.microsoft.com https://forms.gle https://forms.cloud.microsoft https://alphaace.com.pk",
    "media-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://forms.gle https://forms.cloud.microsoft https://forms.cloud.microsoft.com",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join('; '),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), screen-wake-lock=(), accelerometer=(), gyroscope=()',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-XSS-Protection': '1; mode=block',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
};

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. Check against blocked attack / probe patterns
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse(
        JSON.stringify({
          error: 'Forbidden',
          message: 'Access to this resource is prohibited.',
          status: 403,
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'X-Robots-Tag': 'noindex, nofollow',
            ...SECURITY_HEADERS,
          },
        }
      );
    }
  }

  // 2. Normal requests pass through with security headers
  const response = NextResponse.next();
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (metadata file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
