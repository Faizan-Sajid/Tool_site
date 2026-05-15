import type { Metadata } from "next";
import GosiCalculator from "./GosiCalculator";
import GosiContent from "./GosiContent";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "GOSI Calculator 2026 — Saudi Nationals & Non-Saudi Expats | QuickCalcs",
  description:
    "Free GOSI calculator for Saudi Arabia 2026. Instantly calculate GOSI contributions for Saudi nationals (10%/12%) and non-Saudi expats (2%). Includes pension formula, worked examples, and SAR 45,000 cap.",
  keywords: [
    "GOSI calculator",
    "GOSI calculator for non Saudi nationals",
    "GOSI calculation in KSA",
    "GOSI contribution rates Saudi Arabia employee employer 2026",
    "Saudi Arabia GOSI employee contribution rate 2026",
    "GOSI employee contribution rate Saudi Arabia 2026",
    "GOSI Saudi Arabia pension calculation formula 2026",
    "Saudi GOSI calculator",
    "KSA GOSI contribution calculator",
    "GOSI for expats Saudi Arabia",
    "GOSI calculation",
    "how to calculate GOSI Saudi Arabia",
    "GOSI deduction calculator",
    "Saudi social insurance calculator",
    "GOSI contributory wage",
    "SAR 45000 GOSI cap",
    "SANED calculator Saudi Arabia",
  ],
  openGraph: {
    title: "GOSI Calculator 2026 — Saudi Nationals & Non-Saudi Expats | QuickCalcs",
    description:
      "Free GOSI calculator for Saudi Arabia 2026. Calculate contributions for Saudi nationals (10%/12%) and non-Saudi expats (2%). Instant results, no login.",
    url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
    siteName: "QuickCalcs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOSI Calculator 2026 — Saudi & Expat Rates | QuickCalcs",
    description:
      "Free GOSI calculator for Saudi nationals and non-Saudi expats. Updated 2026 KSA rates with pension formula and worked examples.",
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

const faqItems = [
  {
    question: "How do I use the GOSI calculator for non-Saudi nationals?",
    answer:
      "Select 'Expat (Non-Saudi)' in the nationality toggle at the top of the calculator. Enter your basic salary and housing allowance. The calculator will show zero employee deduction and 2% employer contribution. As a non-Saudi expat, nothing is deducted from your salary — only your employer pays 2% for occupational hazard insurance.",
  },
  {
    question: "What is the GOSI employee contribution rate in Saudi Arabia for 2026?",
    answer:
      "For Saudi nationals, the GOSI employee contribution rate is 10% of the contributory wage — made up of 9% annuity (pension) and 1% SANED (unemployment insurance). For non-Saudi expats, the employee contribution rate is 0%. Only the employer pays 2% for expats.",
  },
  {
    question: "What are the GOSI contribution rates for Saudi Arabia employer and employee in 2026?",
    answer:
      "Saudi national employee: 10% (9% annuity + 1% SANED). Saudi national employer: 12% (9% annuity + 2% occupational hazards + 1% SANED). Non-Saudi expat employee: 0%. Non-Saudi expat employer: 2% (occupational hazards only). All rates are based on Royal Decree M/33.",
  },
  {
    question: "What is the GOSI pension calculation formula in Saudi Arabia?",
    answer:
      "The GOSI Saudi Arabia pension formula is: Monthly Pension = 2.5% x Years of Service x Average Contributory Wage. For example, 20 years of service with an average contributory wage of SAR 10,000 gives a monthly pension of SAR 5,000. The pension is capped at 100% of the average contributory wage, reached after 40 years of service. This applies to Saudi nationals only — expats are not eligible for GOSI pension.",
  },
  {
    question: "How is GOSI calculated in KSA?",
    answer:
      "GOSI calculation in KSA has three steps. First, find the contributory wage by adding basic salary and housing allowance. Second, apply the SAR 45,000 cap if the wage exceeds it. Third, multiply by the applicable rate: 10% for Saudi employee, 12% for Saudi employer, or 2% for non-Saudi expat employer. Our free GOSI calculator handles all three steps automatically.",
  },
  {
    question: "What is included in the GOSI contributory wage?",
    answer:
      "The GOSI contributory wage includes basic salary and housing allowance only. Transport allowance, food allowance, mobile allowance, overtime, and performance bonuses are all excluded. The maximum contributory wage is capped at SAR 45,000 per month.",
  },
  {
    question: "Do non-Saudi expats pay GOSI in Saudi Arabia?",
    answer:
      "No. Non-Saudi nationals (expats) pay zero GOSI deduction from their own salary. Only the employer contributes 2% of the contributory wage for occupational hazard insurance. Expats are not enrolled in the GOSI pension scheme or SANED unemployment insurance.",
  },
  {
    question: "What happens to GOSI if salary exceeds SAR 45,000?",
    answer:
      "GOSI contributions are capped at a contributory wage of SAR 45,000 per month. If your basic salary plus housing allowance exceeds SAR 45,000, the calculation uses SAR 45,000 as the base. Any amount above the cap is not subject to GOSI deductions for either employee or employer.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      name: "GOSI Calculator 2026 — Saudi Nationals & Non-Saudi Expats | QuickCalcs",
      description:
        "Free GOSI calculator for Saudi Arabia 2026. Calculate contributions for Saudi nationals (10%/12%) and non-Saudi expats (2%). Includes pension formula and worked examples.",
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
            name: "GOSI Calculator Saudi Arabia 2026",
            item: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "GOSI Calculator Saudi Arabia 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "SAR",
      },
      brand: { "@type": "Brand", name: "QuickCalcs" },
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
        className="px-[20px] pt-[20px] sm:px-[36px] text-xs text-[#8b8a87]"
      >
        <ol className="flex items-center gap-1.5">
          <li>
            <a href="/" className="hover:text-[#87847d] transition-colors">
              Home
            </a>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <a href="/?category=finance" className="hover:text-[#87847d] transition-colors">
              Tools
            </a>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-[#87847d]">GOSI Calculator</li>
        </ol>
      </nav>

      <header className="max-w-[860px] px-[20px] pt-[40px] sm:px-[36px]">
        <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-1px] text-[#e6e3db]">
          GOSI Calculator 2026 — Saudi Nationals &amp; Non-Saudi Expats
        </h1>
        <p className="max-w-[640px] text-[15px] leading-[1.6] text-[#87847d]">
          Calculate GOSI contributions instantly for Saudi nationals (10% employee, 12% employer) and non-Saudi expats (2% employer only). Free, accurate, and updated for 2026 KSA rates.
        </p>
      </header>

      <GosiCalculator />
      <GosiContent />

      <div className="max-w-[860px] px-[20px] pb-[60px] sm:px-[36px]">
        <FAQ items={faqItems} />
      </div>
    </>
  );
}