import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID?.() ?? Array.from(
    crypto.getRandomValues(new Uint8Array(16)),
    (b) => b.toString(36).toUpperCase(),
  ).join("");

  const csp = [
    `default-src 'self' https://fundingchoicesmessages.google.com`,
    `base-uri 'self'`,
    `script-src 'nonce-${nonce}' 'strict-dynamic' 'sha256-eMuh8xiwcX72rRYNAGENurQBAcH7kLlAUQcoOri3BIo=' 'unsafe-eval' 'self' *.googletagmanager.com *.googlesyndication.com *.adtrafficquality.google fundingchoicesmessages.google.com *.fundingchoicesmessages.google.com consent.google.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://accounts.google.com https://analytics.ahrefs.com`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    `style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    `img-src 'self' blob: data: https://fundingchoicesmessages.google.com *.googletagmanager.com *.google-analytics.com *.googlesyndication.com *.adtrafficquality.google`,
    `font-src 'self' data: https://fonts.gstatic.com`,
    `connect-src 'self' *.google-analytics.com *.googlesyndication.com *.adtrafficquality.google fundingchoicesmessages.google.com *.fundingchoicesmessages.google.com https://*.firebasedatabase.app https://*.firebaseio.com wss://*.firebaseio.com https://*.googleapis.com https://*.supabase.co https://accounts.google.com https://analytics.ahrefs.com`,
    `frame-src 'self' *.googlesyndication.com *.doubleclick.net *.adtrafficquality.google https://www.google.com/recaptcha/ https://recaptcha.google.com/`,
    `worker-src 'self' blob:`,
    `child-src 'self' blob:`,
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/|.*\\.(?:txt|xml|pdf)$).*)',
  ],
};
