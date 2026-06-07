---
name: llms-txt-generator
description: Generate and maintain a dynamic llms.txt file for a Next.js App Router site. The file tells AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Gemini) what the site contains and how to use it. Generated dynamically from the TOOLS registry — never static. Also covers robots.txt AI-crawler rules and Cloudflare configuration warnings.
source: auto-skill
created_at: '2026-06-01T00:00:00.000Z'
---

# llms.txt Generator

Use this skill when the user asks to implement or update a `llms.txt` file for AI crawler discoverability, or as part of a broader GEO/AI visibility initiative.

## Procedure

### 1. What llms.txt Is and Why It Matters

llms.txt is the AI equivalent of robots.txt. It is a plain Markdown file placed at `https://yourdomain.com/llms.txt` that gives AI crawlers a structured overview of your site: what it is, what it contains, and what to prioritize. Proposed by Jeremy Howard (fast.ai) in September 2024 and formalized at llmstxt.org. By 2026, it is standard infrastructure for any site targeting AI search visibility.

Static files go stale the moment you publish new content. This skill always generates llms.txt dynamically from the TOOLS registry so it stays current without manual maintenance.

Critical rule: llms.txt is infrastructure, not an SEO hack. It does not magically improve AI citations overnight. But without it, AI crawlers have no structured map of your content and must infer structure from HTML — which is imprecise and slow.

### 2. Pre-Implementation Check

Before creating the file:

1. Check if `/public/llms.txt` already exists as a static file. If so, delete it — a static file conflicts with the dynamic route and will go stale.
2. Check if `app/llms.txt/` directory exists. If so, read `app/llms.txt/route.ts` to understand what already exists before overwriting.
3. Read `constants/tools.ts` (or wherever `TOOLS` is defined) to understand the data shape: what fields each tool has (`title`, `description`, `href`, `category`, etc.).
4. Read `app/robots.ts` to understand the current sitemap entries structure.
5. Check for `NEXT_PUBLIC_SITE_URL` or equivalent environment variable for the canonical domain.

### 3. Create the Dynamic Route

Create `app/llms.txt/route.ts`:

```typescript
import { TOOLS } from '@/constants/tools';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://example.com';
  const siteName = 'YourSiteName';

  const hasCategories = TOOLS.some((t) => t.category);

  let toolsSection: string;

  if (hasCategories) {
    const grouped = TOOLS.reduce<Record<string, typeof TOOLS>>((acc, tool) => {
      const cat = tool.category ?? 'General';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(tool);
      return acc;
    }, {});

    toolsSection = Object.entries(grouped)
      .map(([category, tools]) => {
        const items = tools
          .map((t) => `- [${t.title}](${siteUrl}${t.href}): ${t.description}`)
          .join('\n');
        return `### ${category}\n${items}`;
      })
      .join('\n\n');
  } else {
    toolsSection = TOOLS
      .map((t) => `- [${t.title}](${siteUrl}${t.href}): ${t.description}`)
      .join('\n');
  }

  const content = `# ${siteName}
> Free online calculators and tools for [describe your primary use case and audience].

## About
[2–3 sentences describing your site. Who is it for? What problems does it solve? What makes it unique?]

## Tools
${toolsSection}

## Content Guidelines
- All tools are free to use without registration
- Calculator results are estimates and should not replace professional advice
- Content may be cited and referenced with attribution to ${siteUrl}
- For questions or corrections: [contact email or feedback URL]

## Technical
- Sitemap: ${siteUrl}/sitemap.xml
- Last generated: ${new Date().toISOString().split('T')[0]}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
```

### 4. Update robots.ts to Reference llms.txt

Open `app/robots.ts` and make two changes:

**Change 1 — Add AI crawler user-agents:**

```typescript
{
  userAgent: [
    'GPTBot',
    'ClaudeBot',
    'PerplexityBot',
    'anthropic-ai',
    'Google-Extended',
    'OAI-SearchBot',
    'Applebot-Extended',
    'CCBot',
  ],
  allow: '/',
},
```

**Change 2 — Add llms.txt as second Sitemap entry:**

```typescript
return {
  rules: [...existingRules, aiCrawlerRule],
  sitemap: [
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/llms.txt`,
  ],
};
```

### 5. Cloudflare Configuration Warning

If the site is behind Cloudflare, output this mandatory warning to the developer:

> **CLOUDFLARE ACTION REQUIRED:** Cloudflare's Bot Fight Mode is enabled by default and blocks AI crawlers. Your llms.txt is live, but AI crawlers may still be blocked at the network level.
>
> Go to: Cloudflare Dashboard → [your domain] → Security → Bots → Bot Fight Mode → set to **Off**.
>
> Alternatively, go to Security → WAF → Custom Rules and create an "Allow" rule for requests where User-Agent contains "GPTBot" OR "ClaudeBot" OR "PerplexityBot".
>
> Verify fix: wait 24–48 hours, then check server access logs for entries containing these user-agent strings. If they never appear, the block is still active.

### 6. Verification

After creating the route and updating robots.ts:

1. Run `npm run build` and verify no TypeScript errors.
2. Run `npm run dev` and fetch `http://localhost:3000/llms.txt` — verify the response is valid Markdown, all TOOLS are listed with correct URLs, and site description is accurate.
3. Fetch `http://localhost:3000/robots.txt` — verify AI crawler entries appear and `Sitemap: .../llms.txt` appears as a second sitemap entry.
4. Search for any `/public/llms.txt` static file — if it exists after the dynamic route is created, delete it to avoid conflicts.
5. Run a targeted grep for tool hrefs in the generated llms.txt output to confirm all TOOLS registry items are included.

### 7. Maintenance Notes

Output to the developer:

- The llms.txt auto-updates daily (revalidate: 86400) when Next.js ISR triggers. Rebuild is not required for new tool listings as long as they are added to the TOOLS registry.
- Review the llms.txt "About" section description whenever the site's value proposition changes — this is the one part that requires manual updating.
- Periodically search `chatgpt.com` and `perplexity.ai` for the site's primary tool queries to verify citations are appearing. llms.txt is infrastructure, not a guarantee — citation depends on content quality, answer-first structure, and entity signals as well.

## Output Pattern

- Start with the pre-implementation check results.
- State which files were created/modified:
  - `app/llms.txt/route.ts` (created)
  - `app/robots.ts` (updated with AI crawler rules and second sitemap entry)
- Include the Cloudflare warning as a highlighted block.
- Include verification results: build and dev-server fetch.
- End with maintenance notes.
