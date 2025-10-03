import { getSessionServer } from './session';

export async function getSession() {
  return await getSessionServer();
}
