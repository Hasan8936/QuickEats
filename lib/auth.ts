import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/nextauth';

export async function getSession() {
  return await getServerSession(authOptions as any);
}
