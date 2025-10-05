import { NextResponse } from 'next/server';

export async function GET() {
  // Authorization removed: always report unauthenticated
  return NextResponse.json({ authenticated: false });
}
