import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
  relatedTool?: string;
  readingTime: string;
  // Optional SEO / E-E-A-T fields
  hasFAQ?: boolean;
  lastModified?: string;
  author?: string;
  authorTitle?: string;
  authorLinkedIn?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  tags?: string[];
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  faqItems?: FaqItem[];
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
}

/**
 * Read all .md files from content/blog/, parse frontmatter,
 * and return them sorted newest-first.
 */
export function getAllPosts(): BlogFrontmatter[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts: BlogFrontmatter[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      slug: data.slug as string,
      category: data.category as string,
      relatedTool: data.relatedTool as string | undefined,
      readingTime: data.readingTime as string,
      hasFAQ: data.hasFAQ === true,
      lastModified: data.lastModified as string | undefined,
      author: data.author as string | undefined,
      authorTitle: data.authorTitle as string | undefined,
      authorLinkedIn: data.authorLinkedIn as string | undefined,
      metaDescription: data.metaDescription as string | undefined,
      canonicalUrl: data.canonicalUrl as string | undefined,
      ogImage: data.ogImage as string | undefined,
      tags: data.tags as string[] | undefined,
      primaryKeyword: data.primaryKeyword as string | undefined,
      secondaryKeywords: data.secondaryKeywords as string[] | undefined,
      faqItems: Array.isArray(data.faqItems) ? data.faqItems as FaqItem[] : undefined,
    };
  });

  // Sort newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Return a single post's frontmatter + raw markdown content by slug.
 * Returns null if the slug doesn't match any post.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) {
    return null;
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    if ((data.slug as string) === slug) {
      return {
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        slug: data.slug as string,
        category: data.category as string,
        relatedTool: data.relatedTool as string | undefined,
        readingTime: data.readingTime as string,
        hasFAQ: data.hasFAQ === true,
        lastModified: data.lastModified as string | undefined,
        author: data.author as string | undefined,
        authorTitle: data.authorTitle as string | undefined,
        authorLinkedIn: data.authorLinkedIn as string | undefined,
        metaDescription: data.metaDescription as string | undefined,
        canonicalUrl: data.canonicalUrl as string | undefined,
        ogImage: data.ogImage as string | undefined,
        tags: data.tags as string[] | undefined,
        primaryKeyword: data.primaryKeyword as string | undefined,
        secondaryKeywords: data.secondaryKeywords as string[] | undefined,
        faqItems: Array.isArray(data.faqItems) ? data.faqItems as FaqItem[] : undefined,
        content,
      };
    }
  }

  return null;
}
