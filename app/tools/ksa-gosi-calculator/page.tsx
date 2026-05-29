import type { Metadata } from "next";
import Link from "next/link";
import GosiCalculator from "./GosiCalculator";
import GosiContent from "./GosiContent";
import FAQ from "@/components/FAQ";

// ✅ UPDATED: Title & description — click-worthy, tool-intent focused, broader keywords
export const metadata: Metadata = {
  title: "Saudi GOSI Calculator 2026 | Net Salary After GOSI",
  description:
    "Calculate exact GOSI deductions for Saudi nationals (10.75%) and expats. Includes housing allowance, SAR 45,000 cap, SANED & employer contribution. Free, instant, no login.",
  keywords: [
    "GOSI calculator",
    "Saudi GOSI calculator",
    "GOSI calculator 2026",
    "GOSI salary calculator",
    "GOSI deduction calculator KSA",
    "net salary after GOSI",
    "GOSI for expats Saudi Arabia",
    "GOSI contribution rates Saudi Arabia",
    "SANED calculator Saudi Arabia",
    "GOSI contributory wage",
    "old GOSI rate new GOSI rate",
    "GOSI registration date Saudi Arabia",
    "social insurance contribution Saudi Arabia",
    "Saudi payroll deduction calculator",
  ],
  openGraph: {
    title: "Saudi GOSI Calculator 2026 | Net Salary After GOSI",
    description:
      "Calculate exact GOSI deductions for Saudi nationals (10.75%) and expats. Includes housing allowance, SAR 45,000 cap, SANED & employer contribution. Free, instant, no login.",
    url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
    siteName: "QuickCalcs",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Saudi GOSI Calculator | QuickCalcs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOSI Calculator 2026 — Saudi & Non-Saudi Expat Deductions | QuickCalcs",
    description:
      "Enter your salary and get your exact GOSI deduction instantly. Saudi nationals and non-Saudi expats. Free, updated 2026 rates.",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Saudi GOSI Calculator | QuickCalcs",
      },
    ],
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

const visibleFaqItems = [
  {
    question: "How do I use the GOSI calculator for non-Saudi nationals?",
    answer:
      "Select 'Expat (Non-Saudi)' in the nationality toggle at the top of the calculator. Enter your basic salary and housing allowance. The calculator will show zero employee deduction and 2% employer contribution. As a non-Saudi expat, nothing is deducted from your salary — only your employer pays 2% for occupational hazard insurance.",
  },
  {
    question: "What is the GOSI employee contribution rate in Saudi Arabia for 2026?",
    answer:
      "For Saudi nationals, the GOSI employee contribution rate is 10.75% of the contributory wage — 10% goes to the pension (annuity) fund and 0.75% to SANED (unemployment insurance). For non‑Saudi expats, the employee rate is 0%. Only the employer pays 2% for expats.",
  },
  {
    question: "What are the GOSI contribution rates for Saudi Arabia employer and employee in 2026?",
    answer:
      "Saudi national employee: 10.75% (10% annuity + 0.75% SANED). Saudi national employer: 12.75% (10% annuity + 2% occupational hazards + 0.75% SANED). Non-Saudi expat employee: 0%. Non-Saudi expat employer: 2% (occupational hazards only). All rates are based on Royal Decree M/33.",
  },
  {
    question: "What is the GOSI pension calculation formula in Saudi Arabia?",
    answer:
      "The GOSI Saudi Arabia pension formula is: Monthly Pension = 2.5% × Years of Service × Average Contributory Wage. For example, 20 years of service with an average contributory wage of SAR 10,000 gives a monthly pension of SAR 5,000. The pension is capped at 100% of the average contributory wage, reached after 40 years of service. This applies to Saudi nationals only — expats are not eligible for GOSI pension.",
  },
  {
    question: "How is GOSI calculated in KSA?",
    answer:
      "GOSI calculation in KSA follows three steps. First, find the contributory wage by adding basic salary and housing allowance. Second, apply the SAR 45,000 cap if the wage exceeds it. Third, multiply by the correct rate: 10.75% for the Saudi employee, 12.75% for the Saudi employer, or 2% for a non‑Saudi expat employer. Our free GOSI calculator handles all three steps automatically.",
  },
  {
    question: "What is included in the GOSI contributory wage?",
    answer:
      "The GOSI contributory wage includes basic salary and housing allowance only. Transport allowance, food allowance, mobile allowance, overtime, and performance bonuses are all excluded. The maximum contributory wage is capped at SAR 45,000 per month.",
  },
  {
    question: "Do non-Saudi expats pay GOSI in Saudi Arabia?",
    answer:
      "No. Non-Saudi nationals pay zero GOSI deduction from their own salary. Only the employer contributes 2% of the contributory wage for occupational hazard insurance. Expats are not enrolled in the GOSI pension scheme or SANED unemployment insurance.",
  },
  {
    question: "What happens to GOSI if my salary exceeds SAR 45,000?",
    answer:
      "GOSI contributions are capped at a contributory wage of SAR 45,000 per month. If your basic salary plus housing allowance exceeds SAR 45,000, the GOSI calculation still uses SAR 45,000 as the base. Any amount above the cap is not subject to GOSI deductions for either employee or employer.",
  },
  {
    question: "What is SANED and does it affect my GOSI deduction?",
    answer:
      "SANED is Saudi Arabia's unemployment insurance program. It is part of the GOSI contribution — Saudi nationals pay 0.75% and employers also pay 0.75% toward SANED. These amounts are already included in the 10.75% employee rate and 12.75% employer rate shown above. Non-Saudi expats are not covered by SANED and do not pay into it.",
  },
  {
    question: "How do I calculate my net salary after GOSI deduction?",
    answer:
      "To find your net salary after GOSI: take your total monthly salary, subtract the GOSI employee deduction (10.75% of contributory wage for Saudi nationals, or 0% for expats). For example, if your basic salary is SAR 12,000 and housing allowance is SAR 3,000, your contributory wage is SAR 15,000. A Saudi national would have SAR 1,612.50 deducted (10.75%), leaving a net salary of SAR 13,387.50. Use the free GOSI salary calculator at the top of this page for instant results.",
  },
];

const schemaFaqItems = [
  ...visibleFaqItems,
  {
    question: "How much is GOSI deduction from salary in Saudi Arabia?",
    answer:
      "For Saudi nationals under the 2026 rate, the employee GOSI deduction is 10.75% of the contributory wage. That wage is basic salary plus housing allowance, capped at SAR 45,000 per month. Non-Saudi expats have no employee deduction from salary.",
  },
  {
    question: "How is GOSI calculated for non-Saudi employees?",
    answer:
      "For non-Saudi employees, GOSI is calculated only as a 2% employer contribution for occupational hazard insurance. The employee pays 0%, and the 2% is applied to the contributory wage up to the SAR 45,000 monthly cap.",
  },
  {
    question: "Is GOSI deducted from expat salary in Saudi Arabia?",
    answer:
      "No. GOSI is not deducted from a non-Saudi expat's salary in Saudi Arabia. Only the employer pays 2% for occupational hazard insurance, while SANED and pension contributions do not apply to expats.",
  },
  {
    question: "Is GOSI deduction based on basic salary or gross salary?",
    answer:
      "GOSI is based on the contributory wage, not the full gross salary. The contributory wage normally includes basic salary and housing allowance, while transport allowance, food allowance, overtime, and bonuses are excluded.",
  },
  {
    question: "Is housing allowance included in GOSI calculation?",
    answer:
      "Yes. Housing allowance is included with basic salary when calculating the GOSI contributory wage. If basic salary plus housing allowance exceeds SAR 45,000, GOSI is calculated only on SAR 45,000.",
  },
  {
    question: "What is the GOSI salary cap of SAR 45,000?",
    answer:
      "The GOSI salary cap means monthly contributions are calculated on a maximum contributory wage of SAR 45,000. Any basic salary and housing allowance above that amount is not included in the GOSI calculation.",
  },
  {
    question: "What are GOSI employee and employer contribution rates in 2026?",
    answer:
      "For Saudi nationals registered under the new schedule, the 2026 employee rate is 10.75% and the employer rate is 12.75%. For non-Saudi expats, the employee rate is 0% and the employer pays 2% for occupational hazards only.",
  },
  {
    question: "How does SANED deduction percentage work in Saudi Arabia?",
    answer:
      "SANED is unemployment insurance for Saudi nationals. In 2026, the SANED portion is 0.75% from the employee and 0.75% from the employer, already included in the 10.75% employee and 12.75% employer GOSI rates.",
  },
  {
    question: "What is the difference between old GOSI rate and new GOSI rate?",
    answer:
      "The old GOSI rate for employees registered before July 3, 2024 is 9.75% employee and 11.75% employer. The new GOSI rate for employees registered on or after July 3, 2024 is 10.75% employee and 12.75% employer in 2026, with phased increases continuing through 2028.",
  },
  {
    question: "How do I use a Saudi payroll GOSI deduction calculator?",
    answer:
      "Enter your basic salary and housing allowance, then choose Saudi national or non-Saudi expat. The calculator applies the correct GOSI rate, SAR 45,000 cap, SANED treatment, and employer contribution to estimate your payroll deduction and net salary.",
  },
];

// ✅ UPDATED: Added HowTo schema + improved SoftwareApplication + updated Article schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      name: "Saudi GOSI Calculator 2026 | Net Salary After GOSI",
      description:
        "Calculate exact GOSI deductions for Saudi nationals (10.75%) and expats. Includes housing allowance, SAR 45,000 cap, SANED & employer contribution. Free, instant, no login.",
      dateModified: "2026-05-23",
      reviewedBy: {
        "@type": "Organization",
        name: "QuickCalcs",
      },
      about: [
        { "@type": "Thing", name: "General Organization for Social Insurance" },
        { "@type": "Thing", name: "Saudi GOSI contributions" },
      ],
      citation: ["https://www.gosi.gov.sa/en"],
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
      name: "GOSI Salary Calculator Saudi Arabia 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      description:
        "Free online GOSI calculator for Saudi Arabia. Calculate net salary after GOSI deductions for Saudi nationals and non-Saudi expats. Updated 2026 KSA rates.",
      featureList: [
        "Net salary after GOSI deduction",
        "Saudi national GOSI calculation (10.75% employee, 12.75% employer)",
        "Non-Saudi expat GOSI calculation (2% employer only)",
        "SAR 45,000 contributory wage cap applied automatically",
        "SANED unemployment insurance included (0.75% employee, 0.75% employer, already in rates)",
        "GOSI pension formula calculator",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "SAR",
      },
      brand: { "@type": "Brand", name: "QuickCalcs" },
    },
    // ✅ NEW: HowTo schema — captures "how to calculate GOSI" rich results
    {
      "@type": "HowTo",
      name: "How to Calculate GOSI in Saudi Arabia",
      description:
        "Step-by-step guide to calculate GOSI contributions and net salary after deductions for Saudi nationals and non-Saudi expats in KSA.",
      totalTime: "PT1M",
      tool: [
        {
          "@type": "HowToTool",
          name: "GOSI Salary Calculator",
          url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
        },
      ],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Find your contributory wage",
          text: "Add your basic salary and housing allowance. Do not include transport allowance, food allowance, bonuses, or overtime. Example: SAR 12,000 basic + SAR 3,000 housing = SAR 15,000 contributory wage.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Apply the SAR 45,000 cap",
          text: "If your contributory wage is above SAR 45,000, use SAR 45,000 as the base. GOSI is not calculated on any amount above this cap.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Apply the correct GOSI rate",
          text: "For Saudi nationals: employee pays 10.75%, employer pays 12.75%. For non-Saudi expats: employer pays 2%, employee pays 0%. Multiply the contributory wage by the applicable rate to get the GOSI amount.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Calculate your net salary",
          text: "Subtract the employee GOSI deduction from your gross salary to get your net salary. Example: SAR 15,000 gross − SAR 1,612.50 (10.75% GOSI) = SAR 13,387.50 net salary.",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Saudi GOSI Calculator 2026 — Net Salary for Saudis and Expats",
      dateModified: "2026-05-23",
      datePublished: "2024-01-01",
      author: {
        "@type": "Organization",
        name: "QuickCalcs",
        url: "https://www.quickcalcs.app",
      },
      publisher: {
        "@type": "Organization",
        name: "QuickCalcs",
        url: "https://www.quickcalcs.app",
      },
      mainEntityOfPage: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      citation: "https://www.gosi.gov.sa/en",
    },
    {
      "@type": "FAQPage",
      mainEntity: schemaFaqItems.map((item) => ({
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
            <Link href="/" className="hover:text-[#87847d] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/?category=finance" className="hover:text-[#87847d] transition-colors">
              Tools
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-[#87847d]">GOSI Calculator</li>
        </ol>
      </nav>

      {/* ✅ UPDATED: H1 + subheading — broader keyword + clear value prop */}
      <header className="max-w-[860px] px-[20px] pt-[40px] sm:px-[36px]">
        <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-1px] text-[#e6e3db]">
          Saudi GOSI Calculator 2026 — Net Salary for Saudis & Expats
        </h1>
        <p className="max-w-[640px] text-[15px] leading-[1.6] text-[#87847d]">
          Enter your basic salary and housing allowance to see your exact GOSI deduction and net salary instantly. Free, accurate, and updated for May 2026 KSA rates — for Saudi nationals and non-Saudi expats.
        </p>
      </header>

      <GosiCalculator />
      <GosiContent />

      <div className="max-w-[860px] px-[20px] pb-[60px] sm:px-[36px]">
        <FAQ items={visibleFaqItems} />
      </div>
    </>
  );
}