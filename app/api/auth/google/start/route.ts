import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = `${process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_NEXTAUTH_URL || ''}/api/auth/google/callback`;
  const scope = encodeURIComponent('openid email profile');
  const state = encodeURIComponent('quickeats_' + Date.now());
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(clientId || '')}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&state=${state}&access_type=offline&prompt=consent`;
  return NextResponse.redirect(url);
}
