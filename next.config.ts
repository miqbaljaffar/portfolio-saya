import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    minimumCacheTTL: 31_536_000,
    dangerouslyAllowSVG: true,
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "framer-motion",
      "class-variance-authority",
    ],
    optimizeServerReact: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/img/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/projects/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/certs/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/cv/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, immutable" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
