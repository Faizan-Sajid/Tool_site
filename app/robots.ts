import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/', 
        '/_next/data/',    // Next.js ke internal JSON data pre-fetches ko block rakhen
        '/*?category=*',   // Category filters wale saare dynamic URLs ko block karega
        '/*?s=*',          // Search query variables wale URLs ko block karega
      ],
    },
    sitemap: 'https://www.quickcalcs.app/sitemap.xml',
  };
}