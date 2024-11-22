import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === '/cancel') {
    return NextResponse.redirect(new URL('/#myServices', request.url));
  }

  if (url.pathname === '/success' && !url.searchParams.has('session_id')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/cancel', '/success']
};