import type { Metadata } from "next";
import GosiCalculator from "./GosiCalculator";
import GosiContent from "./GosiContent";
import FAQ from "@/components/FAQ";

// ── SEO METADATA ──
export const metadata: Metadata = {
  title: "GOSI Calculator Saudi Arabia 2026 — Free KSA Contribution Calculator | QuickCalcs",
  description:
    "Calculate Saudi GOSI contributions instantly for 2026. Supports Saudi nationals (10%) and expats (2%). SAR 45,000 cap applied. No login required.",
  keywords: [
    "GOSI calculator",
    "GOSI calculator Saudi Arabia 2026",
    "Saudi GOSI calculator",
    "KSA GOSI contribution calculator",
    "GOSI percentage Saudi national",
    "GOSI for expats Saudi Arabia",
    "GOSI contribution rates 2026",
    "Saudi payroll calculator",
    "SANED calculator",
    "how to calculate GOSI Saudi Arabia",
    "GOSI deduction calculator",
    "Saudi social insurance calculator",
    "GOSI contributory wage",
    "SAR 45000 GOSI cap",
    "Saudi HR payroll tool",
  ],
  openGraph: {
    title: "Saudi GOSI Calculator 2026 | QuickCalcs",
    description:
      "Free GOSI contribution calculator for Saudi nationals and expats. Instant results, no login required.",
    url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
    siteName: "QuickCalcs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudi GOSI Calculator 2026 | QuickCalcs",
    description:
      "Free GOSI contribution calculator updated for 2026 KSA rates.",
  },
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

// ── FAQ DATA ──
const faqItems = [
  {
    question: "What is GOSI and who must pay it?",
    answer:
      "GOSI (General Organization for Social Insurance) is Saudi Arabia's mandatory social insurance scheme. All employers must register and contribute. Saudi nationals also contribute, while expats only have the employer-side 2% hazard contribution applied.",
  },
  {
    question: "What is included in the contributory wage?",
    answer:
      "The contributory wage includes basic salary plus housing allowance, capped at SAR 45,000 per month. Transport, food, and other allowances are excluded.",
  },
  {
    question: "What are the 2026 GOSI rates for Saudi nationals?",
    answer:
      "Employee pays 10% (9% Annuity + 1% SANED). Employer pays 12% (9% Annuity + 2% Hazards + 1% SANED). Total combined contribution is 22% of contributory wage.",
  },
  {
    question: "Do expats pay GOSI in Saudi Arabia?",
    answer:
      "Expats pay 0% employee deduction. Only the employer contributes 2% for occupational hazard insurance. No pension or SANED applies to expats.",
  },
  {
    question: "What happens if salary exceeds SAR 45,000?",
    answer:
      "GOSI is capped at SAR 45,000 contributory wage. Any amount above this is not subject to GOSI deductions for either employee or employer.",
  },
  {
    question: "Is my data safe when using this calculator?",
    answer:
      "Yes. All calculations run in your browser only. No data is sent to any server. QuickCalcs never collects or stores any salary information.",
  },
];

// ── JSON-LD SCHEMA ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      name: "Saudi GOSI Calculator 2026 — Free KSA Contribution Tool",
      description:
        "Calculate GOSI contributions for Saudi nationals and expats. 2026 updated rates.",
      isPartOf: { "@id": "https://www.quickcalcs.app/" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.quickcalcs.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: "https://www.quickcalcs.app/tools/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Saudi GOSI Calculator",
            item: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Saudi GOSI Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function GosiCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="px-[20px] pt-[20px] sm:px-[36px] text-xs text-[#3e3c38]"
      >
        <ol className="flex items-center gap-1.5">
          <li>
            <a href="/" className="hover:text-[#87847d] transition-colors">
              Home
            </a>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <a href="/tools" className="hover:text-[#87847d] transition-colors">
              Tools
            </a>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-[#87847d]">GOSI Calculator</li>
        </ol>
      </nav>
      <GosiCalculator />
      <GosiContent />
      <div className="max-w-[860px] px-[20px] pb-[60px] sm:px-[36px]">
        <FAQ items={faqItems} />
      </div>
    </>
  );
}
