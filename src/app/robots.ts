import type { MetadataRoute } from 'next';

// The static public/robots.txt has been deleted so this dynamic handler
// is served at /robots.txt correctly by Next.js.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://nachiket.kodeneurons.in/sitemap.xml',
    host: 'https://nachiket.kodeneurons.in',
  };
}
