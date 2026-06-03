import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import FeaturedToolsSection from "@/components/FeaturedToolsSection";
import FAQ from "@/components/FAQ";
import { TOOLS } from "@/constants/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free 2026 Financial Calculators for EPF, GOSI, Gratuity, Zakat & Tax | QuickCalcs",
  description:
    "Use free 2026 calculators for Malaysia EPF/KWSP, Saudi GOSI, UAE gratuity, Zakat, gold value, Pakistan freelancer tax, and Hajj or Umrah budgets. No login required.",
  keywords: [
    "free financial calculators 2026",
    "Malaysia EPF calculator 2026",
    "KWSP calculator 2026",
    "Saudi GOSI calculator 2026",
    "UAE gratuity calculator 2026",
    "Zakat calculator 2026",
    "gold value calculator UAE Pakistan",
    "Pakistan freelancer tax calculator 2026",
    "Hajj Umrah cost calculator 2026",
    "QuickCalcs",
  ],
  alternates: {
    canonical: "https://www.quickcalcs.app/",
  },
  openGraph: {
    title: "Free 2026 Financial Calculators for EPF, GOSI, Gratuity, Zakat & Tax | QuickCalcs",
    description:
      "Use free 2026 calculators for Malaysia EPF/KWSP, Saudi GOSI, UAE gratuity, Zakat, gold value, Pakistan freelancer tax, and Hajj or Umrah budgets. No login required.",
    url: "https://www.quickcalcs.app/",
    siteName: "QuickCalcs",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "QuickCalcs free 2026 financial calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 2026 Financial Calculators for EPF, GOSI, Gratuity, Zakat & Tax | QuickCalcs",
    description:
      "Use free 2026 calculators for Malaysia EPF/KWSP, Saudi GOSI, UAE gratuity, Zakat, gold value, Pakistan freelancer tax, and Hajj or Umrah budgets. No login required.",
    images: ["/opengraph-image"],
  },
};

const homeFaqs = [
  {
    question: "What can you calculate on QuickCalcs?",
    answer:
      "QuickCalcs helps you estimate Malaysia EPF/KWSP contributions, Saudi GOSI payroll deductions, UAE end-of-service gratuity, Zakat, gold value, Pakistan freelancer tax, and Hajj or Umrah travel budgets using free 2026 calculators.",
  },
  {
    question: "Is QuickCalcs free to use?",
    answer:
      "Yes. QuickCalcs calculators are free to use and do not require an account, email address, or login.",
  },
  {
    question: "How is Malaysia EPF calculated in 2026?",
    answer:
      "Malaysia EPF/KWSP contributions are estimated from employee and employer statutory rates. The calculator supports Malaysian citizens, permanent residents, age 60+ categories, foreign workers, wage thresholds, employer rates, and upward Ringgit rounding.",
  },
  {
    question: "How much GOSI is deducted from salary in Saudi Arabia?",
    answer:
      "Saudi GOSI deductions depend on nationality, salary components, and contribution caps. Saudi nationals usually have employee pension and SANED deductions, while non-Saudi expats generally do not pay employee GOSI deductions and are covered through employer occupational hazard contributions.",
  },
  {
    question: "How is UAE gratuity calculated?",
    answer:
      "UAE gratuity is generally calculated from basic salary, service length, contract type, and the 21-day or 30-day end-of-service benefit formula under UAE labour rules. The calculator estimates the amount from your salary and service dates.",
  },
  {
    question: "How does the Zakat calculator estimate Nisab and Zakat?",
    answer:
      "The Zakat calculator compares eligible assets with gold and silver Nisab thresholds, subtracts liabilities, and estimates the 2.5% Zakat amount on qualifying wealth.",
  },
  {
    question: "Does the gold calculator fetch prices automatically?",
    answer:
      "No. The gold value calculator is designed for manual price entry. You can enter the gold rate you want to use, then estimate value by purity, weight unit, currency, and making charges.",
  },
  {
    question: "What is the Pakistan freelancer tax calculator for?",
    answer:
      "The Pakistan freelancer tax calculator estimates withholding tax and net PKR take-home income for IT export remittances under Section 154A, including PSEB-registered filer, ATL filer, and non-filer scenarios.",
  },
  {
    question: "How much does Hajj or Umrah cost in 2026?",
    answer:
      "Hajj and Umrah costs vary by departure country, package tier, hotel zone, season, flights, visa, transport, food, and Ramadan premium. The calculator breaks these budget components into an estimated total.",
  },
  {
    question: "Are QuickCalcs results official financial advice?",
    answer:
      "No. QuickCalcs provides educational estimates based on stated inputs and public rule references. Always confirm final payroll, tax, Zakat, travel, or employment decisions with official sources or a qualified adviser.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "QuickCalcs",
  url: "https://www.quickcalcs.app",
  description:
    "Free 2026 financial calculators for Malaysia EPF/KWSP, Saudi GOSI, UAE gratuity, Zakat, gold value, Pakistan freelancer tax, and Hajj or Umrah budgets.",
  inLanguage: "en",
};

const toolsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "QuickCalcs 2026 financial calculators",
  itemListElement: TOOLS.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.title,
    url: `https://www.quickcalcs.app${tool.href}`,
    description: tool.description,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <main className="bg-[#0c0e16] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col w-full">
        <HeroSection />
        <StatsStrip />
        <FeaturedToolsSection searchParams={resolvedSearchParams} />

        <section className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 py-10 lg:py-14">
          <div className="mb-4 flex items-center gap-[10px] text-[11px] font-bold uppercase tracking-[1.3px] text-[#8b8a87]">
            <span>2026 quick reference — Malaysia · UAE · KSA · Pakistan</span>
            <span className="h-[1px] flex-1 bg-[rgba(255,255,255,0.07)]" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                title: "Malaysia EPF/KWSP",
                body: "Estimate employee and employer EPF contributions for Malaysian citizens, permanent residents, age 60+ workers, and foreign workers using 2026 wage categories and Ringgit rounding.",
              },
              {
                title: "UAE gratuity",
                body: "Calculate end-of-service benefits from basic salary, service dates, contract type, and the 21-day or 30-day formula used for UAE gratuity estimates.",
              },
              {
                title: "Saudi GOSI",
                body: "Estimate payroll deductions and net salary after GOSI using nationality, basic salary, housing allowance, SANED, and contribution-cap logic.",
              },
              {
                title: "Zakat, gold, tax, and travel",
                body: "Plan Zakat, estimate gold value from your entered market rate, calculate Pakistan freelancer withholding, and compare Hajj or Umrah budget components.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-5"
              >
                <h2 className="mb-2 text-[16px] font-bold text-[#e6e3db]">{item.title}</h2>
                <p className="text-[14px] leading-relaxed text-[#87847d]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[960px] px-4 sm:px-6 md:px-8 py-8 lg:py-12">
          <div className="rounded-[18px] border border-[rgba(201,168,76,0.18)] bg-[#131620] p-6 sm:p-8">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.3px] text-[#c9a84c]">
              QuickCalcs answer summary
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-serif)] text-2xl sm:text-3xl italic text-[#e6e3db]">
              What can you calculate on QuickCalcs?
            </h2>
            <p className="mb-4 text-[15px] leading-relaxed text-[#87847d]">
              QuickCalcs provides free 2026 financial calculators for Malaysia EPF/KWSP,
              Saudi GOSI, UAE gratuity, Zakat, gold value, Pakistan freelancer tax, and
              Hajj or Umrah budgets. The tools are built for fast estimates, clear inputs,
              and no-login access.
            </p>
            <ul className="grid grid-cols-1 gap-3 text-[14px] leading-relaxed text-[#87847d] sm:grid-cols-2">
              <li>• EPF/KWSP employee and employer contributions</li>
              <li>• Saudi GOSI deductions and net salary</li>
              <li>• UAE end-of-service gratuity estimates</li>
              <li>• Zakat, Nisab, and gold-value planning</li>
              <li>• Pakistan freelancer withholding tax</li>
              <li>• Hajj and Umrah travel budget estimates</li>
            </ul>
          </div>
        </section>

        <FAQ items={homeFaqs} />
      </div>
    </main>
  );
}
