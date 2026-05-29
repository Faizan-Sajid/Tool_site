import { MetadataRoute } from 'next';
import { TOOLS } from '@/constants/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.quickcalcs.app";
  const toolLastModified: Record<string, string> = {
    "ksa-gosi-calculator": "2026-05-23",
    // add other tools here as you update them
  };

  const toolUrls = TOOLS.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: toolLastModified[tool.id]
      ? new Date(toolLastModified[tool.id])
      : new Date("2026-05-01"),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    // Dynamic tool pages (TOOLS array se auto)
    ...toolUrls,
    // Static legal/info pages (manually listed — yeh kabhi dynamic nahi honge)
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
  ];
}