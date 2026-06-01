import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep canonical URLs strict and aligned with sitemap entries.
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'quickcalcs.app',
          },
        ],
        destination: 'https://www.quickcalcs.app/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Global security headers for all pages.
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
      {
        // Long-term caching for Next.js static chunks.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
