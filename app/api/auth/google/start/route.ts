import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  // prefer explicit site URL env; fall back to VERCEL_URL (when deployed on Vercel)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') || '';
    return NextResponse.json({ message: 'authorization removed' });
}
