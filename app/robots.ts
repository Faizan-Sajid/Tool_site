import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/_next/static/', // Ye line CSS aur JS files ko allow karegi
      ],
      disallow: [
        '/api/', 
        '/_next/', // Ye baqi internal folders ko block rakhega
      ],
    },
    sitemap: 'https://www.quickcalcs.app/sitemap.xml',
  };
}