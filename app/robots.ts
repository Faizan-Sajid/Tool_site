import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/data/',    // Next.js ke internal JSON data pre-fetches ko block rakhen
          '/*?category=*',   // Category filters wale saare dynamic URLs ko block karega
          '/*?s=*',          // Search query variables wale URLs ko block karega
        ],
      },
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'anthropic-ai',
          'Google-Extended',
          'OAI-SearchBot',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: [
      'https://www.quickcalcs.app/sitemap.xml',
      'https://www.quickcalcs.app/llms.txt',
    ],
  };
}