import { NextRequest, NextResponse } from 'next/server';
import slugs from '@/lib/blog-slugs.json';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only handle /blog/[slug] routes
  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (!blogMatch) return NextResponse.next();

  const slug = blogMatch[1];
  const exists = slugs.includes(slug);

  if (!exists) {
    return new Response(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:slug+'],
};
