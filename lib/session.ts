import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'quickeats_session';
const SECRET = process.env.COOKIE_SECRET || process.env.NEXTAUTH_SECRET || '';

export type SessionPayload = {
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
  exp?: number;
};

export function signSession(payload: SessionPayload, expiresIn = '7d') {
  if (!SECRET) throw new Error('COOKIE_SECRET environment variable is not set');
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifySession(token: string): SessionPayload | null {
  try {
    if (!SECRET) return null;
    const decoded = jwt.verify(token, SECRET) as SessionPayload;
    return decoded;
  } catch (e) {
    return null;
  }
}

export function getSessionServer(): SessionPayload | null {
  try {
    const c = cookies();
    const token = c.get(COOKIE_NAME)?.value;
    if (!token) return null;
    return verifySession(token) as SessionPayload | null;
  } catch (e) {
    return null;
  }
}
