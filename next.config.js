/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ],
    },    
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
                {
                    key: 'X-DNS-Prefetch-Control',
                    value: 'on'
                },
                {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=63072000; includeSubDomains; preload'
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block'
                },
                {
                    key: 'X-Frame-Options',
                    value: 'SAMEORIGIN'
                },
                {
                    key: 'Permissions-Policy',
                    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                },
                {
                    key: 'Referrer-Policy',
                    value: 'origin-when-cross-origin'
                },
                                              
            ],
          },
        ]
    },
}

module.exports = nextConfig
