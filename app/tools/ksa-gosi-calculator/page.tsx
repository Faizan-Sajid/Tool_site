import type { Metadata } from "next";
import GosiCalculator from "./GosiCalculator";
import GosiContent from "./GosiContent";
import FAQ from "@/components/FAQ";

// ✅ UPDATED: Title & description — click-worthy, tool-intent focused, broader keywords
export const metadata: Metadata = {
  title: "GOSI Calculator 2026 — Saudi Nationals & Non-Saudi Expats | KSA Deductions",
  description:
    "Free GOSI calculator updated May 2026. Calculate exact deductions for Saudi nationals (10.75%) and non-Saudi expats (2% employer only). SAR 45,000 cap applied automatically. No login required.",
  keywords: [
    "GOSI calculator",
    "GOSI salary calculator",
    "GOSI calculator Saudi Arabia 2026",
    "net salary after GOSI deduction",
    "GOSI calculator for non Saudi nationals",
    "GOSI calculation for non Saudi nationals",
    "GOSI deduction calculator KSA",
    "GOSI calculation in KSA",
    "Saudi salary calculator GOSI",
    "GOSI contribution rates Saudi Arabia employee employer 2026",
    "Saudi Arabia GOSI employee contribution rate 2026",
    "GOSI employee contribution rate Saudi Arabia 2026",
    "GOSI saudi arabia contribution rates 2026",
    "GOSI saudi arabia contribution rates employee employer 2026",
    "GOSI Saudi Arabia pension calculation formula 2026",
    "GOSI pension calculation formula Saudi Arabia 2026",
    "Saudi GOSI calculator",
    "KSA GOSI contribution calculator",
    "GOSI for expats Saudi Arabia",
    "GOSI calculation",
    "how to calculate GOSI Saudi Arabia",
    "SANED calculator Saudi Arabia",
    "GOSI contributory wage",
    "SAR 45000 GOSI cap",
    "Saudi social insurance calculator",
  ],
  openGraph: {
    title: "GOSI Calculator 2026 — Saudi Nationals & Non-Saudi Expats | KSA Deductions",
    description:
      "Not sure what GOSI will deduct from your salary? Enter your basic and housing allowance — get your exact net salary instantly. Free, no login. Saudi & expat rates included.",
    url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
    siteName: "QuickCalcs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOSI Calculator 2026 — Saudi & Non-Saudi Expat Deductions | QuickCalcs",
    description:
      "Enter your salary and get your exact GOSI deduction instantly. Saudi nationals and non-Saudi expats. Free, updated 2026 rates.",
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
      "To find your net salary after GOSI: take your total monthly salary, subtract the GOSI employee deduction (10% of contributory wage for Saudi nationals, or 0% for expats). For example, if your basic salary is SAR 12,000 and housing allowance is SAR 3,000, your contributory wage is SAR 15,000. A Saudi national would have SAR 1,612.50 deducted (10.75%), leaving a net salary of SAR 13,387.50. Use the free GOSI salary calculator at the top of this page for instant results.",
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
      name: "GOSI Calculator 2026 — Saudi Nationals & Non-Saudi Expats | KSA Deductions",
      description:
        "Calculate your exact net salary after GOSI deductions. Covers Saudi nationals (10.75%/12.75%) and non‑Saudi expats (2%). Free, instant, updated for 2026 KSA rates.",
      dateModified: "2026-05-23",
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

      {/* ✅ UPDATED: H1 + subheading — broader keyword + clear value prop */}
      <header className="max-w-[860px] px-[20px] pt-[40px] sm:px-[36px]">
        <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-1px] text-[#e6e3db]">
          GOSI Calculator 2026 — Saudi Nationals & Non-Saudi Expats
        </h1>
        <p className="max-w-[640px] text-[15px] leading-[1.6] text-[#87847d]">
          Enter your basic salary and housing allowance to see your exact GOSI deduction and net salary instantly. Free, accurate, and updated for May 2026 KSA rates — for Saudi nationals and non-Saudi expats.
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