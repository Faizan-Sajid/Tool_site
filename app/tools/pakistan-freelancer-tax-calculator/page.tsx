import type { Metadata } from "next";
import FreelancerTaxCalculator from "./FreelancerTaxCalculator";
import FreelancerTaxContent from "./FreelancerTaxContent";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────
// METADATA — fully updated, robots included
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pakistan Freelancer Tax Calculator 2026 | FBR 0.25%, 1% & 2% Rates",
  description:
     "Calculate your 2026 FBR freelancer tax instantly. Supports 0.25% PSEB rates, 1% filers, 2% non-filers, and Section 154S for Upwork, Fiverr & Payoneer.",
  keywords: [
    "Pakistan freelancer tax calculator 2026",
    "FBR tax on Upwork income Pakistan",
    "freelancer tax Pakistan 2026",
    "PSEB tax rate 0.25 percent",
    "non filer tax rate Pakistan freelancer",
    "Section 154S income tax ordinance",
    "Fiverr tax Pakistan 2026",
    "how to calculate freelancer tax Pakistan",
    "FBR tax on Fiverr earnings Pakistan",
    "income tax on remittance Pakistan 2026",
    "freelancer ATL registration Pakistan",
    "Payoneer income tax Pakistan",
    "IT export tax rate Pakistan",
    "freelancer tax rate Pakistan 1 percent",
    "PSEB registered freelancer tax",
    "proceeds realization certificate PRC Pakistan",
    "FBR active taxpayer list freelancer",
    "Pakistan IT export income tax",
    "how to file tax as freelancer Pakistan",
    "Section 65F income tax ordinance Pakistan",
    "80 percent remittance rule Pakistan",
    "FBR freelancer income tax 2025-26",
  ],
  openGraph: {
    title: "Pakistan Freelancer Tax Calculator 2026 | FBR 0.25%, 1% & 2% Rates",
    description:
      "Free FBR tax calculator for Pakistani freelancers. PSEB registered 0.25% | Non-PSEB filer 1% | Non-filer 2%. Covers Upwork, Fiverr, Payoneer and direct client income. Instant results.",
    url: "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
    siteName: "QuickCalcs",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/og-freelancer-tax.png",
        width: 1200,
        height: 630,
        alt: "Pakistan Freelancer Tax Calculator 2026 — FBR Rates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Freelancer Tax Calculator 2026 | FBR 0.25%, 1% & 2%",
    description:
      "Calculate your FBR tax on Upwork, Fiverr and Payoneer income. PSEB 0.25% | Non-PSEB 1% | Non-Filer 2%. Free, instant, updated 2026.",
    images: ["https://www.quickcalcs.app/og-freelancer-tax.png"],
  },
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
  },
  // ✅ FIX: robots meta was missing — added now
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// ─────────────────────────────────────────────
// FAQ DATA — matches FreelancerTaxContent.tsx exactly
// ─────────────────────────────────────────────
const faqItems = [
  {
    question: "What is the freelancer tax rate in Pakistan for 2026?",
    answer:
      "For the tax year 2026, FBR applies three rates based on your status. PSEB-registered freelancers pay 0.25% on foreign remittances. Non-PSEB filers pay 1% under Section 154S of the Income Tax Ordinance. Non-filers pay 2% — double the standard rate. These are fixed withholding tax rates on IT export income, not standard income tax slabs.",
  },
  {
    question: "How can I qualify for the 0.25% reduced tax rate?",
    answer:
      "To qualify for the 0.25% PSEB rate, you need two things: first, active registration with the Pakistan Software Export Board (PSEB) at pseb.org.pk. Second, you must be on the FBR Active Taxpayer List (ATL) by filing your annual income tax return. Additionally, at least 80% of your total business receipts must come into Pakistan through formal banking channels.",
  },
  {
    question: "Do I need to be an Active Taxpayer (ATL) to get these reduced rates?",
    answer:
      "Yes, being on the Active Taxpayer List (ATL) is mandatory for both the 0.25% and 1% rates. Non-filers are automatically charged double the standard withholding rate. You can check your ATL status on the FBR Iris portal at iris.fbr.gov.pk.",
  },
  {
    question: "Is a Proceeds Realization Certificate (PRC) necessary?",
    answer:
      "Yes. A PRC is the legal document from your bank confirming your income is foreign-sourced IT exports. Without it, FBR cannot verify your export status during an audit. Request a PRC for every remittance from your bank and keep them safe for your annual tax filing.",
  },
  {
    question: "What is the tax rate for local or domestic freelance projects?",
    answer:
      "The fixed 0.25% and 1% rates only apply to foreign income remitted to Pakistan. Local projects for Pakistani clients are taxed under the standard FBR progressive income tax slabs — starting at 5% for income above PKR 600,000 and going up to 35% for very high incomes.",
  },
  {
    question: "What is the tax on Upwork or Fiverr income in Pakistan 2026?",
    answer:
      "Upwork and Fiverr income qualifies as IT export income if remitted to your Pakistani bank account through formal channels. PSEB-registered freelancers pay 0.25%. Regular filers (non-PSEB) pay 1%. Non-filers pay 2%. For example, PKR 150,000 per month from Upwork: a PSEB filer pays PKR 375/month tax; a non-PSEB filer pays PKR 1,500/month; a non-filer pays PKR 3,000/month.",
  },
  {
    question: "Is Payoneer or Wise income taxable in Pakistan?",
    answer:
      "Yes, Payoneer and Wise income is taxable once it enters Pakistan. The key is to withdraw directly to your Pakistani bank account and ensure the remittance is tagged under IT Export Code 9062. Leaving funds in a foreign Payoneer balance and not remitting means they fall outside the IT export tax regime.",
  },
  {
    question: "What happens if I do not file taxes as a freelancer?",
    answer:
      "Non-filers face double withholding tax rates — 2% instead of 1% on every foreign remittance. They are also excluded from the Active Taxpayer List. FBR can issue notices and audit income retrospectively. At PKR 150,000 per month income, being a non-filer costs an extra PKR 18,000 per year compared to being a regular filer.",
  },
  {
    question: "What is Section 154S and how does it affect freelancers?",
    answer:
      "Section 154S of the Income Tax Ordinance is the legal basis for the reduced IT export tax rates. It makes the withholding tax on IT export remittances a final tax — once deducted by the bank, you do not owe additional income tax on that amount under normal slabs. The bank deducts the tax automatically when your remittance arrives.",
  },
  {
    question: "How do I register with PSEB to get the 0.25% rate?",
    answer:
      "Visit pseb.org.pk and apply for freelancer registration. You need your CNIC, a bank account, and proof of IT-related work such as a Fiverr or Upwork profile or client contracts. PSEB registration is free for individual freelancers. Once registered, inform your bank so future remittances are processed at 0.25%.",
  },
];

// ─────────────────────────────────────────────
// SCHEMA — WebPage + SoftwareApplication + HowTo + FAQPage + BreadcrumbList
// All matched with content above
// ─────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
      url: "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
      name: "Pakistan Freelancer Tax Calculator 2026 | FBR 0.25%, 1% & 2% Rates",
      description:
        "Calculate your exact FBR freelancer tax for 2026. PSEB 0.25%, non-PSEB filer 1%, non-filer 2%. Covers Upwork, Fiverr, Payoneer income under Section 154S.",
      dateModified: "2026-05-18",
      isPartOf: { "@id": "https://www.quickcalcs.app/" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.quickcalcs.app/" },
          { "@type": "ListItem", position: 2, name: "Finance Tools", item: "https://www.quickcalcs.app/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pakistan Freelancer Tax Calculator",
            item: "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Pakistan Freelancer Tax Calculator 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
      description:
        "Free online FBR tax calculator for Pakistani freelancers. Calculates IT export withholding tax for PSEB registered (0.25%), non-PSEB filers (1%), and non-filers (2%). Covers Upwork, Fiverr, Payoneer, and direct client income.",
      featureList: [
        "PSEB registered rate: 0.25% on foreign remittance",
        "Non-PSEB active filer rate: 1% under Section 154S",
        "Non-filer penalty rate: 2%",
        "Monthly and yearly income modes",
        "Net income after tax calculation",
        "Annual and monthly tax breakdown",
        "Section 154S compliant — Budget 2025-26 updated",
      ],
      offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
      brand: { "@type": "Brand", name: "QuickCalcs" },
    },
    {
      "@type": "HowTo",
      name: "How to Calculate Freelancer Tax in Pakistan 2026",
      description:
        "Step by step guide to calculate FBR income tax on freelance IT export income in Pakistan using the correct PSEB, non-PSEB, and non-filer rates under Section 154S.",
      totalTime: "PT2M",
      tool: [
        {
          "@type": "HowToTool",
          name: "Pakistan Freelancer Tax Calculator",
          url: "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
        },
      ],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Enter your income amount",
          text: "Input the total amount you receive in your Pakistani bank account from foreign clients via Upwork, Fiverr, Payoneer, Wise, or direct transfers. Select monthly or yearly based on how you track your income.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Select your FBR filer status",
          text: "Choose Yes if you are on the FBR Active Taxpayer List (ATL). Non-filers are charged 2% withholding tax automatically by banks. Being a filer reduces your rate to 1% or 0.25%.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Select your PSEB registration status",
          text: "If you are registered with the Pakistan Software Export Board (PSEB), select Yes. PSEB-registered freelancers pay 0.25% on foreign remittances — the lowest possible rate. Non-PSEB filers pay 1%.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "View your tax and net income",
          text: "The calculator instantly shows your annual tax, monthly tax, and net take-home income. For example, a PSEB-registered freelancer earning PKR 150,000 per month pays only PKR 375 in monthly tax and takes home PKR 149,625.",
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

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function PakistanFreelancerTaxPage() {
  return (
    <>
      {/* ✅ Single merged JSON-LD with @graph — WebPage + SoftwareApplication + HowTo + FAQPage + Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0d0f14] text-[#e6e3db]">
        <div className="max-w-[860px] mx-auto pt-8 pb-16">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="px-[20px] sm:px-[36px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8b8a87] mb-8"
          >
            <Link href="/" className="hover:text-[#c9a84c] flex items-center gap-1.5 transition-colors">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
            <Link href="/?category=finance" className="hover:text-[#c9a84c] transition-colors">
              Finance
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
            <span className="text-[#c9a84c]">Freelancer Tax Calculator</span>
          </nav>

          {/* Header — ✅ Only ONE H1 on the entire page */}
          <header className="px-[20px] sm:px-[36px] mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.1)] text-[#c9a84c] text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              Finance · Pakistan 2026
            </div>

            {/* ✅ THE ONLY H1 — FreelancerTaxCalculator.tsx uses h2 now */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#e6e3db] leading-[1.1] mb-6">
              Pakistan Freelancer Tax Calculator 2026
            </h1>
            <p className="text-[#87847d] text-sm max-w-2xl leading-relaxed">
              Calculate your exact FBR tax on Upwork, Fiverr, Payoneer, and direct client income.
              Supports PSEB registered (0.25%), non-PSEB filers (1%), and non-filers (2%) under Section 154S.
              Free, instant, updated for Budget 2026–27.
            </p>
          </header>

          {/* Calculator */}
          <FreelancerTaxCalculator />

          {/* Long-form SEO content + FAQ */}
          <FreelancerTaxContent />

        </div>
      </main>
    </>
  );
}