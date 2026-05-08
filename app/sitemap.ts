import { MetadataRoute } from 'next';
import { TOOLS } from '@/constants/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.quickcalcs.app"; // Updated to include www to match canonicals

  const toolUrls = TOOLS.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...toolUrls,
  ];
}
