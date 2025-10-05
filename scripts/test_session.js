const http = require('http');

(async () => {
  // First request to set cookie
  const set = await fetch('http://localhost:3000/api/auth/test-login');
  const cookies = set.headers.get('set-cookie');
  console.log('set-cookie header:', cookies);

  // Use cookie to call session endpoint
  const session = await fetch('http://localhost:3000/api/auth/session', { headers: { Cookie: cookies } });
  console.log('session status', session.status);
  console.log('session body', await session.text());
})();
