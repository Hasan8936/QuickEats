import { NextResponse } from 'next/server';
import qs from 'querystring';
import { signSession } from '@/lib/session';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  if (!code) return NextResponse.redirect('/login');

  const tokenUrl = 'https://oauth2.googleapis.com/token';
  const params = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: `${process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_NEXTAUTH_URL || ''}/api/auth/google/callback`,
    grant_type: 'authorization_code'
  };

  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify(params as any)
  });

  if (!res.ok) return NextResponse.redirect('/login');
  const token = await res.json();

  // decode id_token JWT to extract user info
  const idToken = token.id_token;
  let payload: any = {};
  try {
    const base64 = idToken.split('.')[1];
    const decoded = Buffer.from(base64, 'base64').toString('utf8');
    payload = JSON.parse(decoded);
  } catch (e) {
    // ignore
  }

  const sessionJwt = signSession({ sub: payload.sub, email: payload.email, name: payload.name, picture: payload.picture });

  const resNext = NextResponse.redirect('/');
  // set cookie
  resNext.cookies.set({ name: 'quickeats_session', value: sessionJwt, httpOnly: true, secure: true, path: '/', maxAge: 60 * 60 * 24 * 7 });
  return resNext;
}
