import { MetadataRoute } from 'next';
import { TOOLS } from '@/constants/tools';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.quickcalcs.app";

  // Individual tools ki real modification dates (taake fuzool re-crawl ruke)
  const toolLastModified: Record<string, string> = {
    "ksa-gosi-calculator": "2026-06-01",
    "malaysia-epf-calculator": "2026-05-28",
    "hajj-umrah-budget-calculator": "2026-06-01",
    "pakistan-freelancer-tax-calculator": "2026-06-23",
    "gold-calculator": "2026-06-03",
    "uae-gratuity-calculator": "2026-05-31",
    "zakat-calculator": "2026-05-31",
  };

  // Latest global fallback date
  const siteLastUpdated = new Date("2026-06-23");

  // Saare tools ko equal treat karne ke liye map function
  const toolUrls = TOOLS.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: toolLastModified[tool.id]
      ? new Date(toolLastModified[tool.id])
      : siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.95, // ✅ SAF CORRECTION: Sabhi tools ko equal aur high priority de di!
  }));

  const posts = getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Homepage sab se top par rahegi
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...blogUrls,
    ...toolUrls, // Saare equal tools yahan list honge
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date("2026-05-07"),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-05-21"),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
  ];
}