import type { Metadata } from "next";
import Link from "next/link";
import GoldCalculator from "./GoldCalculator";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Gold Calculator UAE & Pakistan 2026",
  description:
    "Calculate gold value in AED, PKR, SAR and more. Estimate 24K, 22K, 21K, 18K jewelry value, making charges, and Zakat on gold. Free tool for UAE and Pakistan.",
  keywords: [
    "gold value calculator Pakistan",
    "gold calculator UAE 2026",
    "22k gold price per tola calculator",
    "18k gold price per tola Pakistan",
    "gold making charges calculator Pakistan",
    "gold jewelry price calculator Pakistan",
    "gold zakat calculator UAE AED",
    "zakat on gold per tola 2026",
    "gram to tola gold calculator",
    "gold weight converter tola masha ratti",
    "gold nisab calculator 2026",
    "how much is my gold worth in PKR",
    "gold price per tola in AED",
    "21k gold price per gram UAE",
    "masha to gram gold converter",
  ],
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/gold-calculator",
    languages: {
      "x-default": "https://www.quickcalcs.app/tools/gold-calculator",
      en: "https://www.quickcalcs.app/tools/gold-calculator",
      "en-AE": "https://www.quickcalcs.app/tools/gold-calculator",
      "en-SA": "https://www.quickcalcs.app/tools/gold-calculator",
      "en-PK": "https://www.quickcalcs.app/tools/gold-calculator",
    },
  },
  openGraph: {
    title: "Gold Calculator UAE & Pakistan 2026 | QuickCalcs",
    description:
      "Free gold value calculator for UAE and Pakistan. Calculate 24K, 22K, 21K, 18K gold value in AED, PKR, SAR. Includes making charges and Zakat calculator.",
    url: "https://www.quickcalcs.app/tools/gold-calculator",
    siteName: "QuickCalcs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/gold-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Gold Calculator UAE & Pakistan — QuickCalcs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Calculator UAE & Pakistan 2026 | QuickCalcs",
    description:
      "Calculate gold value, Zakat, and tola/gram conversions for UAE and Pakistan. Free, no login required.",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/gold-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Gold Calculator — QuickCalcs",
      },
    ],
  },
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

const goldFAQ = [
  {
    question: "How many grams are in 1 tola of gold?",
    answer:
      "1 tola equals exactly 11.664 grams. This is the standardised conversion used by the Karachi Sarafa Bazaar and all major gold markets in Pakistan. Some informal sources round to 11.66 or 12 grams, but 11.664 is the correct figure for precise gold valuation.",
  },
  {
    question: "What is the difference between 24K, 22K, 21K, and 18K gold?",
    answer:
      "24K gold is 99.9% pure and is used for investment bars and coins. 22K gold is 91.67% pure and is the standard for jewelry in Pakistan. 21K gold is 87.5% pure and is most common in UAE and Gulf markets. 18K gold is 75% pure and is used for durable jewelry that holds gemstones. Lower karat gold is cheaper per gram because it contains less pure gold.",
  },
  {
    question: "How do I calculate gold value per tola in Pakistan?",
    answer:
      "To calculate gold value per tola in Pakistan, use this formula: Value = Tolas × 11.664 × Purity ratio × Price per gram in PKR. For 22K gold, the purity ratio is 0.9167. For 24K, it is 0.999. Enter the weight in the calculator above, select Tola as the unit, choose 22K or 24K, and select PKR as the currency.",
  },
  {
    question: "How is Zakat calculated on gold jewelry?",
    answer:
      "Zakat on gold is 2.5% of the total gold value, paid once per lunar year if your holdings meet the Nisab threshold. The Nisab for gold is 87.48 grams (7.5 tola) of pure 24K gold. For 22K jewelry, convert to pure gold equivalent by multiplying weight by 0.9167. If the result exceeds 87.48 grams, Zakat is due on the full value. According to the Hanafi school, Zakat applies to all gold including personal jewelry.",
  },
  {
    question: "What is the gold Nisab threshold in 2026?",
    answer:
      "The gold Nisab threshold in 2026 is 87.48 grams or 7.5 tola of pure 24K gold. This weight does not change. Only the monetary value of the Nisab changes as gold prices move. Use the Zakat tab in the calculator above to check your Nisab value in AED, PKR, or SAR at today's estimated rate.",
  },
  {
    question: "What are typical gold making charges in Pakistan and UAE?",
    answer:
      "In Pakistan, gold making charges typically range from 5% to 15% of the gold value for standard jewelry, and up to 25% for custom or handcrafted pieces. In Dubai and UAE, making charges are often a flat amount per gram, typically AED 3 to 12 per gram for machine-made pieces. Handcrafted or designer pieces can be significantly higher. Making charges are separate from the gold metal value.",
  },
  {
    question: "Does this calculator show the price I will pay at a jewelry shop?",
    answer:
      "No. This calculator shows the metal value of gold based on weight and purity. The actual shop price is higher because jewellers add making charges (labor fee), VAT (5% in UAE), wastage charges, and dealer margin. Always ask your jeweller for a written breakdown showing gold weight, karat, making charges, and total price before purchasing.",
  },
  {
    question: "How do I convert grams to tola for gold?",
    answer:
      "To convert grams to tola, divide the weight in grams by 11.664. Example: 50 grams ÷ 11.664 = 4.29 tola. To convert tola to grams, multiply by 11.664. Example: 3 tola × 11.664 = 34.99 grams. Use the converter tab in the calculator above for instant conversion.",
  },
  {
    question: "Is gold cheaper in Dubai than Pakistan?",
    answer:
      "Gold in Dubai is typically 5–10% cheaper than in Pakistan. This is because Dubai has lower import duties, a competitive gold market, and the UAE dirham is pegged to the US dollar. In Pakistan, the gold price includes import duties, local taxes, and currency conversion risk (USD/PKR rate). Making charges may also differ significantly between the two markets.",
  },
  {
    question: "What currencies does this gold calculator support?",
    answer:
      "This gold calculator supports AED (UAE Dirham), PKR (Pakistani Rupee), SAR (Saudi Riyal), KWD (Kuwaiti Dinar), QAR (Qatari Riyal), BHD (Bahraini Dinar), and USD (US Dollar). Select your currency from the dropdown in the Value Calculator or Zakat tab.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.quickcalcs.app/tools/gold-calculator#webpage",
      "url": "https://www.quickcalcs.app/tools/gold-calculator",
      "name": "Gold Calculator UAE & Pakistan 2026",
      "description": "Free gold value calculator for UAE and Pakistan. Calculate 24K, 22K, 21K, 18K gold value in AED, PKR, SAR. Includes making charges and Zakat calculator.",
      "isPartOf": { "@type": "WebSite", "@id": "https://www.quickcalcs.app/#website", "name": "QuickCalcs", "url": "https://www.quickcalcs.app" },
      "datePublished": "2026-05-01",
      "dateModified": "2026-06-03",
      "inLanguage": "en",
      "about": [
        { "@type": "Thing", "name": "Gold value calculator" },
        { "@type": "Thing", "name": "Gold Zakat calculator" },
        { "@type": "Thing", "name": "Tola to gram gold converter" },
        { "@type": "Thing", "name": "Gold making charges calculator" },
        { "@type": "Thing", "name": "Gold price in PKR" },
        { "@type": "Thing", "name": "Gold price in AED" }
      ],
      "breadcrumb": { "@id": "https://www.quickcalcs.app/tools/gold-calculator#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.quickcalcs.app/tools/gold-calculator#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.quickcalcs.app/" },
        { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.quickcalcs.app/" },
        { "@type": "ListItem", "position": 3, "name": "Gold Calculator", "item": "https://www.quickcalcs.app/tools/gold-calculator" }
      ]
    },
    {
      "@type": "WebApplication",
      "@id": "https://www.quickcalcs.app/tools/gold-calculator#app",
      "name": "Gold Calculator UAE & Pakistan",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "url": "https://www.quickcalcs.app/tools/gold-calculator",
      "description": "Free gold calculator for estimating 24K, 22K, 21K, and 18K gold value in AED, PKR, SAR, KWD, and USD. Includes making charges, Zakat calculator, and tola-to-gram converter for UAE and Pakistan users.",
      "featureList": [
        "Gold value calculator with making charges",
        "Zakat on gold calculator (Nisab 87.48g / 7.5 tola)",
        "Gram to tola converter",
        "Tola to gram converter",
        "Masha to gram converter",
        "Troy ounce to gram converter",
        "24K, 22K, 21K, 18K purity support",
        "AED, PKR, SAR, KWD, USD, QAR, BHD currency support"
      ],
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "HowTo",
      "@id": "https://www.quickcalcs.app/tools/gold-calculator#howto",
      "name": "How to calculate gold value with making charges",
      "description": "Use weight, karat purity, currency, and making charges to estimate total gold jewelry price.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Enter gold weight", "text": "Enter the weight of your gold in grams, tola, troy ounces, or kilograms. One tola equals 11.664 grams." },
        { "@type": "HowToStep", "position": 2, "name": "Select gold purity", "text": "Choose karat: 24K (99.9% pure), 22K (91.67%), 21K (87.5%), or 18K (75%). Most Pakistan jewelry is 22K." },
        { "@type": "HowToStep", "position": 3, "name": "Select currency", "text": "Choose AED for UAE, PKR for Pakistan, SAR for Saudi Arabia, or KWD for Kuwait." },
        { "@type": "HowToStep", "position": 4, "name": "Enter making charges", "text": "Add making charges as a percentage (5–25%) or leave at 0 for raw metal value only." },
        { "@type": "HowToStep", "position": 5, "name": "Read your estimate", "text": "The calculator shows base gold value, making charge amount, and total estimated price." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": goldFAQ.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer }
      }))
    }
  ]
};

export default function GoldCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#0c0e16]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="px-4 md:px-9 pt-8 sm:pt-12">
        <ol className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b8a87]">
          <li><a href="/" className="hover:text-[#c9a84c] transition-colors">Home</a></li>
          <li aria-hidden="true" className="text-[#1a1c24]">/</li>
          <li><a href="/" className="hover:text-[#c9a84c] transition-colors">Tools</a></li>
          <li aria-hidden="true" className="text-[#1a1c24]">/</li>
          <li className="text-[#c9a84c]">Gold Calculator</li>
        </ol>
      </nav>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-9 py-10 md:py-16">
        <header className="mb-10 md:mb-16">
          <h1 className="lcp-heading text-[32px] sm:text-[40px] md:text-[64px] lg:text-[72px] leading-[1.1] font-[var(--font-serif)] text-white font-medium mb-6 tracking-tight">
            Gold Calculator{" "}<br className="hidden sm:block" />
            <span className="text-[#c9a84c]">UAE & Pakistan <em className="italic font-light opacity-80">2026</em></span>
          </h1>
          <p className="max-w-[720px] text-[15px] md:text-[17px] leading-[1.6] text-[#87847d] font-light">
            This free gold calculator estimates the value of your gold in AED, PKR, SAR, and other currencies. Enter the weight, choose the karat purity (24K, 22K, 21K, or 18K), and get an instant estimate. The calculator also computes making charges, checks your Zakat obligation, and converts between grams, tola, and other units.
          </p>
          <div className="mt-6 mb-8 rounded-xl border border-[#1a1c24] bg-[#131620] p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8b8a87] mb-3">Quick facts</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#c2c0b6]">
              <li>• 1 tola = 11.664 grams (Pakistan standard)</li>
              <li>• 24K gold = 99.9% pure gold</li>
              <li>• 22K gold = 91.67% pure (most Pakistan jewelry)</li>
              <li>• 21K gold = 87.5% pure (common in UAE/Gulf)</li>
              <li>• 18K gold = 75% pure (durable, designer jewelry)</li>
              <li>• Gold Nisab (Zakat) = 87.48g / 7.5 tola</li>
              <li>• Zakat rate on gold = 2.5% of total value</li>
              <li>• Making charges range: 5–25% of gold value</li>
            </ul>
          </div>
        </header>
      </div>

      <GoldCalculator />

      <div className="max-w-[1280px] mx-auto px-4 md:px-9 pb-20">
        <div className="mt-16 md:mt-24 max-w-[900px] space-y-12 text-[15px] md:text-[16px] text-[#87847d] leading-relaxed font-light">
          <section><h2 className="text-xl md:text-2xl font-medium text-[#e6e3db] mb-5">Gold Price Per Tola in Pakistan and UAE</h2><div className="space-y-4"><p>Gold is measured in tola across Pakistan, India, and the Gulf. One tola equals 11.664 grams exactly. This is the standard used by the Karachi Sarafa Bazaar and gold dealers across Pakistan.</p><p>In Pakistan, the gold rate is announced twice daily by the All Pakistan Sarafa Gems and Jewellers Association (APSGJA). The rate applies equally in Karachi, Lahore, Islamabad, and all other cities.</p><p>In UAE, the rate is set by the Dubai Gold and Jewellery Group. UAE gold is quoted per gram, but Pakistani expatriates often calculate it per tola.</p><p>To find the per-tola price in AED: multiply the per-gram price by 11.664. Example: if 22K gold is AED 501 per gram, then per-tola price is AED 501 × 11.664 = AED 5,844.</p><p>To find the per-tola price in PKR: use the calculator above and select Tola as the weight unit.</p></div></section>
          <section><h2 className="text-xl md:text-2xl font-medium text-[#e6e3db] mb-5">How Gold Value Is Calculated (Methodology)</h2><div className="space-y-4"><p>The gold calculator uses this formula: Gold value = Weight in grams × Purity ratio × Price per gram in your currency.</p><p>Purity ratios: 24K = 0.999 | 22K = 0.9167 | 21K = 0.875 | 18K = 0.75.</p><p>Making charges are added on top of the gold value. In Pakistan, making charges range from 5% to 15% for standard jewelry. In Dubai, making charges are often a flat amount per gram, typically AED 3–12 per gram for plain pieces.</p><ul className="list-disc pl-5 space-y-2"><li>10 grams of 22K gold.</li><li>22K purity = 0.9167.</li><li>Gold value = 10 × 0.9167 × price per gram.</li><li>Add making charges, such as 10%, on top.</li></ul><p>The total price includes gold value plus making charges. VAT (5% in UAE) is added at the retail counter, not in this calculator.</p><p className="text-[12px] text-[#87847d] mt-4 leading-relaxed border-l-2 border-[#1a1c24] pl-3">Calculations are based on estimated market spot prices. Actual shop prices include making charges, VAT, and jeweller margin. Always verify the final price with your jeweller before purchase.</p></div></section>
          <section><h2 className="text-xl md:text-2xl font-medium text-[#e6e3db] mb-5">Gold Purity Guide: 24K, 22K, 21K, and 18K</h2><div className="space-y-4"><p>24 karat gold (24K) is 99.9% pure gold. It is the softest and most valuable karat per gram. In Pakistan, 24K is used for investment bars and coins. It is not used for jewelry because it bends easily.</p><p>22 karat gold (22K) is 91.67% pure gold. This is the standard for jewelry in Pakistan and South Asia. Most bangles, rings, and necklaces sold in Pakistan are 22K. The 22K rate is approximately 8% lower than 24K.</p><p>21 karat gold (21K) is 87.5% pure gold. This karat is most common in UAE and Gulf jewelry markets. Many Dubai Gold Souk pieces are 21K.</p><p>18 karat gold (18K) is 75% pure gold. It is mixed with more alloy metals, making it harder and more durable. In Pakistan, 18K is gaining popularity among younger buyers. International designer brands often use 18K.</p><p>Hallmark stamps to look for: 999 = 24K | 916 = 22K | 875 = 21K | 750 = 18K.</p></div></section>
          <section><h2 className="text-xl md:text-2xl font-medium text-[#e6e3db] mb-5">Gram to Tola Converter — Key Conversions</h2><p>Use the converter tab above to convert any gold weight instantly. Here are the standard conversion values used in Pakistan and UAE gold markets:</p><div className="mt-4 overflow-x-auto"><table className="w-full text-[13px] border-collapse"><thead><tr className="text-[11px] uppercase tracking-[0.08em] text-[#8b8a87]"><th className="text-left py-2 pr-4 font-medium">Unit</th><th className="text-left py-2 pr-4 font-medium">Equals</th><th className="text-left py-2 font-medium">Used in</th></tr></thead><tbody className="text-[#c2c0b6]"><tr className="border-t border-[#1a1c24]"><td className="py-2 pr-4">1 Tola</td><td className="py-2 pr-4">11.664 grams</td><td className="py-2">Pakistan, India, UAE (expats)</td></tr><tr className="border-t border-[#1a1c24]"><td className="py-2 pr-4">1 Masha</td><td className="py-2 pr-4">0.972 grams</td><td className="py-2">Pakistan, India (jewelry)</td></tr><tr className="border-t border-[#1a1c24]"><td className="py-2 pr-4">1 Ratti</td><td className="py-2 pr-4">0.1215 grams</td><td className="py-2">Pakistan, India (gems)</td></tr><tr className="border-t border-[#1a1c24]"><td className="py-2 pr-4">1 Troy Ounce</td><td className="py-2 pr-4">31.1035 grams</td><td className="py-2">International markets</td></tr><tr className="border-t border-[#1a1c24]"><td className="py-2 pr-4">1 Troy Ounce</td><td className="py-2 pr-4">2.667 tola</td><td className="py-2">International to Pakistan</td></tr><tr className="border-t border-[#1a1c24]"><td className="py-2 pr-4">1 Tola</td><td className="py-2 pr-4">12 masha</td><td className="py-2">Pakistan jewelry trade</td></tr></tbody></table></div></section>
          <section><h2 className="text-xl md:text-2xl font-medium text-[#e6e3db] mb-5">Zakat on Gold: Nisab and Calculation Method</h2><div className="space-y-4"><p>Zakat on gold becomes obligatory when two conditions are met: your gold holdings reach or exceed the Nisab threshold and you have held this gold for one full Islamic lunar year (Hawl).</p><p>The Nisab threshold for gold is 87.48 grams (7.5 tola) of pure 24K gold. This amount does not change. Only its monetary value changes as gold prices move.</p><p>How to calculate Zakat on gold: weigh all your gold, convert it to pure gold equivalent, check whether total pure gold exceeds 87.48 grams, then calculate 2.5% of total gold value in your currency.</p><p>Example: 100 grams of 22K gold equals 91.67 grams of pure gold. 91.67g exceeds Nisab (87.48g), so Zakat is due on the full value.</p><p>Hanafi school ruling (majority in Pakistan): Zakat is due on all gold including personal jewelry if it meets the Nisab.</p><p>Shafi'i / Maliki / Hanbali ruling: Gold jewelry worn regularly may be exempt. Only stored or investment gold is zakatable.</p><p>Consult a qualified Islamic scholar for rulings specific to your situation.</p></div></section>
          <section><h2 className="text-xl md:text-2xl font-medium text-[#e6e3db] mb-5">Why Jeweller Prices Differ from This Calculator</h2><div className="space-y-4"><p>This calculator shows the metal value of gold based on weight and purity. The price you pay at a jewelry shop is higher because it includes additional charges.</p><p>Making charges (labor fee): In Pakistan, they are typically 5–15% of gold value for standard pieces and up to 25% for custom work. In Dubai, they are typically AED 3–12 per gram for machine-made pieces, higher for handcrafted items.</p><p>VAT: UAE retail prices include 5% VAT. Tourists can claim a refund at the airport. Pakistan GST applies, so ask your jeweller for the exact current rate.</p><p>Wastage charges: Some jewellers deduct 2–5% for gold lost during manufacturing. Ask if this is included.</p><p>Dealer margin: The difference between spot price and retail price varies by shop, location, and current market conditions.</p><p>Tip: Ask your jeweller for a written breakdown of gold weight, karat, making charges, any wastage, and total price. A transparent jeweller will always provide this.</p></div></section>
        </div>

        <div className="mt-20"><FAQ items={goldFAQ} /></div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Explore Other QuickCalcs Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/tools/zakat-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">☪️</span>
                <div>
                  <p className="font-semibold text-white">Zakat Calculator</p>
                  <p className="text-sm text-gray-300 mt-1">Calculate Zakat on savings, gold, investments & business assets. Nisab auto-updated.</p>
                </div>
              </div>
            </Link>
            <Link href="/tools/uae-gratuity-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧮</span>
                <div>
                  <p className="font-semibold text-white">UAE Gratuity Calculator</p>
                  <p className="text-sm text-gray-300 mt-1">End-of-service benefits as per UAE Labour Law 2026. Limited & unlimited contracts.</p>
                </div>
              </div>
            </Link>
            <Link href="/tools/ksa-gosi-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <p className="font-semibold text-white">Saudi GOSI Calculator</p>
                  <p className="text-sm text-gray-300 mt-1">GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates.</p>
                </div>
              </div>
            </Link>
            <Link href="/tools/pakistan-freelancer-tax-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧾</span>
                <div>
                  <p className="font-semibold text-white">Pakistan Freelancer Tax Calculator</p>
                  <p className="text-sm text-gray-300 mt-1">FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, non-filer 2%.</p>
                </div>
              </div>
            </Link>
            <Link href="/tools/hajj-umrah-budget-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕋</span>
                <div>
                  <p className="font-semibold text-white">Hajj &amp; Umrah Budget Calculator</p>
                  <p className="text-sm text-gray-300 mt-1">Estimate pilgrimage costs – flights, hotels, visas, and food for 2026.</p>
                </div>
              </div>
            </Link>
            <Link href="/tools/malaysia-epf-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇲🇾</span>
                <div>
                  <p className="font-semibold text-white">Malaysia EPF Calculator</p>
                  <p className="text-sm text-gray-300 mt-1">Calculate EPF contributions for employees and employers in Malaysia. Includes 2026 contribution rates and take-home salary breakdown.</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-[#1a1c24] bg-[#131620] p-6">
          <h2 className="text-[18px] font-medium text-[#e6e3db] mb-3">Methodology and Data Sources</h2>
          <p className="text-[13px] text-[#87847d] leading-relaxed">Gold values are estimated from the international XAU/USD spot price. The spot price is converted to local currencies (AED, PKR, SAR, KWD, USD) using standard exchange rates. Karat purity is applied as a multiplier: 24K = 0.999, 22K = 0.9167, 21K = 0.875, 18K = 0.75.</p>
          <p className="text-[13px] text-[#87847d] leading-relaxed mt-3">Exchange rates and spot prices are periodically updated. Retail jewelry prices may differ due to making charges, VAT, dealer margin, and city-level market variation. This tool is for informational and estimation purposes only. It is not financial, investment, tax, or religious advice.</p>
          <p className="text-[11px] text-[#5a5955] mt-4">Last reviewed: June 2026. Zakat rulings are based on the Hanafi school (majority in Pakistan). Consult a qualified Islamic scholar for rulings specific to your situation.</p>
        </section>
      </div>
    </main>
  );
}
