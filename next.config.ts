import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ── Canonical URL Consistency ──────────────────────────────────────────────
  // Enforce no trailing slash so /about and /about/ resolve to one canonical.
  trailingSlash: false,

  // ── Image Optimisation ────────────────────────────────────────────────────
  images: {
    // Allow next/image to optimise images served from the same origin
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nachiket.kodeneurons.in',
      },
    ],
    // Serve WebP where supported, AVIF where possible
    formats: ['image/avif', 'image/webp'],
  },

  // ── HTTP Security / SEO Headers ───────────────────────────────────────────
  async headers() {
    return [
      {
        // Apply to every route
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Long-cache for static assets in /public
        source: '/:path((?!_next).*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
