import { TOOLS } from '@/constants/tools';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  const siteUrl =
    (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')) ??
    'https://www.quickcalcs.app';

  const siteName = 'QuickCalcs';
  const siteDesc =
    'Free 2026 financial calculators for Malaysia EPF/KWSP, Saudi GOSI, UAE gratuity, Zakat, gold value, Pakistan freelancer tax, and Hajj/Umrah budgets.';

  // Group tools by category
  const grouped = TOOLS.reduce<Record<string, typeof TOOLS>>((acc, tool) => {
    const cat = tool.category ?? 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(tool);
    return acc;
  }, {});

  const categoryLabels: Record<string, string> = {
    finance: 'Finance',
    hr: 'HR & Payroll',
    visa: 'Visa & Immigration',
    legal: 'Legal',
    business: 'Business',
  };

  const toolsSection = Object.entries(grouped)
    .map(([cat, tools]) => {
      const label = categoryLabels[cat] ?? cat.charAt(0).toUpperCase() + cat.slice(1);
      const items = tools
        .map(
          (t) =>
            `- [${t.title}](${siteUrl}${t.href}): ${t.description}`
        )
        .join('\n');
      return `### ${label}\n${items}`;
    })
    .join('\n\n');

  const content = `# ${siteName}
> ${siteDesc}

## About
QuickCalcs provides free, privacy-first online calculators for financial and legal computations across the Gulf, South Asia, and Southeast Asia. Every tool is updated for 2026 regulations and official rates. No login required — just enter your numbers and get an instant, itemised result.

## Tools
${toolsSection}

## Content Guidelines
- All tools are free to use without registration
- Calculator results are estimates and should not replace professional financial or legal advice
- Content may be cited and referenced with attribution to ${siteUrl}
- For questions or corrections: feedback@quickcalcs.app

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
