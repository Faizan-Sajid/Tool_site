import type { Metadata } from "next";
import GoldCalculator from "./GoldCalculator";
import FAQ from "@/components/FAQ";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Gold Price Calculator UAE 2026 — Live Rates, Zakat & Unit Converter | QuickCalcs",
  description:
    "Live gold prices for UAE & GCC. Calculate gold value, Zakat, and convert units (grams, tola, ounces) instantly with real-time 24K, 22K, 21K, 18K rates.",
  keywords: [
    "gold price UAE today",
    "gold calculator UAE",
    "gold rate Dubai today",
    "24K gold price AED",
    "zakat calculator gold 2026",
    "gold tola to gram converter",
    "gold price SAR",
    "22K gold price UAE",
    "gold nisab calculator",
    "gold value calculator AED",
  ],
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/gold-calculator",
  },
  openGraph: {
    title: "Gold Calculator UAE 2026 — Live Prices & Zakat | QuickCalcs",
    description:
      "Live gold prices in AED, SAR & KWD. Gold value calculator, Zakat calculator with Nisab, and unit converter. Free, no login.",
    url: "https://www.quickcalcs.app/tools/gold-calculator",
    siteName: "QuickCalcs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Calculator UAE 2026 | QuickCalcs",
    description: "Live gold prices + value calculator + Zakat + unit converter. Free for GCC.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
};

const goldFAQ = [
  {
    question: "How is the live gold price in UAE calculated?",
    answer: "The UAE gold price is derived from the international XAU/USD spot price. This global rate is converted into AED using the fixed exchange rate (approx. 3.6725) and then adjusted to reflect the price per gram for various karats (24K, 22K, 21K, 18K). Retailers may add a small margin and making charges."
  },
  {
    question: "What is the difference between 24K, 22K, and 18K gold?",
    answer: "The 'K' stands for Karat, measuring gold purity. 24K is 99.9% pure gold and is very soft, typically used for bars and coins. 22K contains 91.6% gold (mixed with other metals for strength) and is standard for jewelry. 18K is 75% pure gold, often used for diamond-studded or durable jewelry."
  },
  {
    question: "How do I calculate Zakat on my jewelry in 2026?",
    answer: "First, determine the total weight of gold in each karat. Calculate the total '24K equivalent' weight. If this total exceeds the Nisab (87.48g), multiply the current 24K gold rate by the total weight and then apply 2.5% to find your Zakat amount."
  },
  {
    question: "Does this tool include VAT or making charges?",
    answer: "Our Live Prices tab shows the raw market rate. In the Value Calculator, you can optionally input 'Making Charges' as a percentage. In the UAE, a 5% VAT is applicable on the total price of gold jewelry, though the gold itself is often VAT-exempt in investment forms."
  },
  {
    question: "How many grams are in 1 Tola of gold?",
    answer: "In the modern metric standard used in the UAE and South Asia, 1 Tola is equal to 11.664 grams. However, some regional variations exist where a 'Tola' might be rounded to 11.7 grams or 12 grams in informal trade."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.quickcalcs.app/tools/gold-calculator",
      "url": "https://www.quickcalcs.app/tools/gold-calculator",
      "name": "Gold Price Calculator UAE 2026",
      "description": "Live gold prices, value calculator, Zakat & unit converter for GCC.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.quickcalcs.app/" },
          { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.quickcalcs.app/tools/" },
          { "@type": "ListItem", "position": 3, "name": "Gold Calculator", "item": "https://www.quickcalcs.app/tools/gold-calculator" }
        ]
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "Gold Calculator UAE",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
        "@type": "FAQPage",
        "mainEntity": goldFAQ.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    }
  ],
};

export default function GoldCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#0c0e16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumbs - CLS Optimized */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 md:px-9 pt-8 sm:pt-12"
      >
        <ol className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b8a87]">
          <li><a href="/" className="hover:text-[#c9a84c] transition-colors">Home</a></li>
          <li aria-hidden="true" className="text-[#1a1c24]">/</li>
          <li><a href="/?category=finance" className="hover:text-[#c9a84c] transition-colors">Tools</a></li>
          <li aria-hidden="true" className="text-[#1a1c24]">/</li>
          <li className="text-[#c9a84c]">Gold Calculator</li>
        </ol>
      </nav>

      <GoldCalculator />

      {/* Server-Rendered SEO Content (Instant Indexing) */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-9 pb-20">
        <div className="mt-16 md:mt-24 max-w-[860px]">
            <div className="flex items-center gap-4 mb-8">
                <TrendingUp className="w-5 h-5 text-[#c9a84c]" />
                <h2 className="text-xl md:text-2xl font-medium text-[#e6e3db]">Live Gold Price UAE & Dubai Market Analysis</h2>
            </div>
            <div className="space-y-6 text-[15px] md:text-[16px] text-[#87847d] leading-relaxed font-light">
                <p>
                    Stay updated with the <strong>Live Gold Price UAE</strong> and <strong>Today Gold Rate Dubai</strong>. Our real-time tracker provides the most accurate data for investors and jewelry buyers across the GCC region. The gold market in the United Arab Emirates is globally renowned for its transparency and competitive pricing, making it a hub for gold trade.
                </p>
                <p>
                    Local prices are primarily influenced by the international spot price (XAU/USD), which represents the price of one troy ounce of gold in US Dollars. When the global spot price fluctuates due to economic factors, central bank policies, or currency changes, local markets in the UAE, Saudi Arabia, and Kuwait adjust their rates accordingly. By monitoring these trends, you can make informed decisions whether you're buying 24K bullion or 22K jewelry.
                </p>
                <p>
                    Our professional calculator helps you navigate market volatility by providing instant conversions for 24K, 22K, 21K, and 18K gold. Whether you are calculating Zakat based on the 2026 Nisab thresholds or estimating the resale value of a family heirloom, QuickCalcs ensures precision and reliability.
                </p>
                <div className="pt-8">
                    <h3 className="text-lg font-medium text-[#e6e3db] mb-4">Gold Tola to Gram Converter & Unit Precision</h3>
                    <p>
                        Precision is paramount in the gold industry, which is why our <strong>Gold Tola to Gram Converter</strong> is an essential tool for traders across borders. Different regions use different units of measurement: while the international market operates on <strong>Troy Ounces to Grams</strong>, the South Asian markets (India, Pakistan, Bangladesh) frequently use the <strong>Tola</strong> and <strong>Masha</strong>.
                    </p>
                    <p className="mt-4">
                        One standard Tola is equivalent to 11.664 grams, and one Troy Ounce is 31.103 grams. Small discrepancies in weight can lead to significant price differences given the high value of gold. Our converter ensures that you can bridge these regional standards accurately, whether you are dealing with kilograms for bulk trade or grains for micro-measurements.
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-20">
            <FAQ items={goldFAQ} />
        </div>
      </div>
    </main>
  );
}
