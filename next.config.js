/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    productionBrowserSourceMaps: false,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Handle JSON imports
        config.module.rules.push({
            test: /\.json$/,
            type: 'javascript/auto',
            loader: require.resolve('json5-loader')
        });

        return config;
    },
    // Optimize images
    images: {
        domains: [],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Add headers for security
    async headers() {
        return [{
            source: '/:path*',
            headers: [{
                    key: 'X-Frame-Options',
                    value: 'DENY',
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff',
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block',
                },
            ],
        }, ]
    },
}

module.exports = nextConfig