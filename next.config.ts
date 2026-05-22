import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force strict URLs without trailing slashes (Sitemap ke sath match karne ke liye)
  trailingSlash: false,

  async headers() {
    return [
      {
        // Global Security Headers for all pages
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
      {
        // 2. Heavy caching for Next.js Static Chunks (CSS, JS, Fonts)
        // Is se Googlebot ko files instantly milengi aur "Other Error" nahi aayega
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