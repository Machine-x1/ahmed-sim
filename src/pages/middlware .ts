import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  const token = request.cookies.has('token');
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

  return response;
}
