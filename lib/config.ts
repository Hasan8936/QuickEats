const config = {
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    key: process.env.API_KEY,
  },
  auth: {
  // secret: process.env.NEXTAUTH_SECRET, // removed
  // url: process.env.NEXTAUTH_URL, // removed
  },
  services: {
    maps: {
      apiKey: process.env.MAPS_API_KEY,
    },
  },
  database: {
    url: process.env.DATABASE_URL,
  },
} as const;

export default config;