import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/cancel') {
    return NextResponse.redirect(new URL('/#myServices', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/cancel'
};