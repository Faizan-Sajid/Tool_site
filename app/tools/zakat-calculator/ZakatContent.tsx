import Link from "next/link";
import React from "react";

export default function ZakatContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">
      {/* SECTION 1: What is Zakat? */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is Zakat? — The Third Pillar of Islam
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Zakat is a mandatory religious obligation for Muslims, representing the third pillar of Islam. It is a form of almsgiving where individuals donate a fixed portion of their wealth (typically 2.5%) to those in need. Beyond being a charitable act, Zakat is viewed as a means of purifying one's wealth and soul.
          </p>
          <p>
            As of 2026, Zakat remains a fundamental part of the socio-economic system in the Gulf region, providing a social safety net for the vulnerable. Our Zakat calculator helps you accurately determine your dues based on your savings, investments, and precious metals.
          </p>
        </div>
      </div>

      {/* SECTION 2: Understanding Nisab */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Current Zakat Nisab Value 2026 (Gold & Silver Standards)
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Nisab is the minimum amount of wealth a Muslim must possess for a full lunar year before Zakat becomes obligatory. As of 2026, the benchmarks are calculated based on the market value of either gold or silver:
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li><strong>Gold Nisab:</strong> 87.48 grams (equivalent to 7.5 Tolas in some regions).</li>
            <li><strong>Silver Nisab:</strong> 612.36 grams (equivalent to 52.5 Tolas).</li>
          </ul>
          <p>
            For the Pakistani and Indian audience, please note that 1 Tola is approximately 11.66 Grams. If your net wealth (cash, gold, business stock) exceeds the current market value of these weights, Zakat at 2.5% is mandatory. Most modern scholars recommend using the silver standard to maximize charitable reach.
          </p>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Standard</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Weight</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Gold Nisab (87.48g)</td>
                <td className="px-4 text-[#c9a84c]">7.5 Tola</td>
                <td className="px-4 text-xs">Based on 24k Gold value.</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Silver Nisab (612.36g)</td>
                <td className="px-4 text-[#c9a84c]">52.5 Tola</td>
                <td className="px-4 text-xs">Based on pure silver value.</td>
              </tr>
              <tr className="border-t-2 border-[rgba(255,255,255,0.07)]">
                <td className="py-4 pr-4 font-bold text-[#e6e3db]">Zakat Rate</td>
                <td colSpan={2} className="px-4 font-bold text-[#2dd4a0]">
                  2.5% of total qualifying wealth.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: Modern Assets */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Calculate Zakat on Shares, Crypto, and Digital Assets
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            In 2026, digital wealth is a significant part of many portfolios. Zakat is applicable to your <strong>Crypto holdings, NFTs (held for trade), and Stocks</strong>. If you hold shares as a long-term investment, you only pay Zakat on the company's zakatable assets (pro-rata). If you are trading them (day-trading), Zakat is due on the full market value of the shares at the end of your lunar year.
          </p>
          <p>
            Similarly, for <strong>Cryptocurrencies (Bitcoin, Ethereum, Stablecoins)</strong>, Zakat is due on the current market value if they are held as tradeable wealth or savings.
          </p>
        </div>
      </div>

      {/* SECTION 4: Property and Real Estate */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Zakat Calculation on Plots, Real Estate, and Rental Property
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Zakat rules for property depend on your intention:
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li><strong>Personal Residence:</strong> No Zakat is due on the house you live in.</li>
            <li><strong>Rental Property:</strong> Zakat is not due on the value of the building, but it IS due on the <strong>accumulated rental income</strong> if it stays in your possession for a year.</li>
            <li><strong>Plots for Resale:</strong> If you bought a plot with the clear intention of selling it for profit (trading), Zakat is due on its current market value every year.</li>
          </ul>
        </div>
      </div>

      {/* SECTION 5: Qualifying Assets List */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Which Assets are Subject to Zakat?
        </h2>
        <div className="space-y-6">
          {[
            { title: "Cash & Savings", desc: "Money held in bank accounts, cash at home, or money lent to others (that is expected to be repaid)." },
            { title: "Gold & Silver", desc: "Precious metals held as investments or jewelry (scholarly opinions vary on personal jewelry)." },
            { title: "Shares & Stocks", desc: "The market value of shares and stocks held for the purpose of trade or investment." },
            { title: "Business Assets", desc: "Value of stock-in-trade and business cash, excluding fixed assets like machinery or property." },
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <div>
                <strong className="text-[#e6e3db]">{item.title}</strong>
                <p className="mt-1 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: Important Zakat Rules */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Zakat Rules & FAQ
        </h2>
        <div className="rounded-[12px] bg-[#131620] border border-[rgba(201,168,76,0.2)] p-6 space-y-4 text-sm">
          <p className="text-[#e6e3db]">
            ⚖️ **Hawl (Lunar Year):** Zakat is only due after wealth has been held for one full Hijri year.
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li><strong>Debts:</strong> You can subtract immediate liabilities and debts from your total assets.</li>
            <li><strong>Intention (Niyyah):</strong> Intention is required when paying Zakat.</li>
            <li><strong>Distribution:</strong> Zakat must be given to the eight categories of recipients mentioned in the Quran.</li>
          </ul>
          <p className="text-[#87847d] text-xs pt-2">
            * This tool provides an estimate. For complex financial cases, please consult with a qualified Islamic scholar or local Zakat authority.
          </p>
        </div>
      </div>
    
      {/* ===== Explore Other Tools ===== */}
      <section className="mt-12 border-t border-[rgba(255,255,255,0.07)] pt-12">
        <h2 className="text-2xl font-bold mb-8 text-[#e6e3db]">Explore Other QuickCalcs Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/tools/gold-calculator"
            className="group block p-4 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#131620] hover:border-[#c9a84c] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center border border-[rgba(201,168,76,0.1)] flex-shrink-0">
                <span className="text-xl" role="img" aria-label="Gold Price Calculator Icon">💰</span>
              </div>
              <div>
                <p className="font-bold text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">Gold Price Calculator</p>
                <p className="text-xs text-[#87847d] mt-1.5 leading-relaxed">
                  Live 24K, 22K, 21K, 18K rates for UAE & GCC. Includes Zakat and unit converter.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/uae-gratuity-calculator"
            className="group block p-4 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#131620] hover:border-[#c9a84c] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center border border-[rgba(201,168,76,0.1)] flex-shrink-0">
                <span className="text-xl" role="img" aria-label="UAE Gratuity Calculator Icon">🧮</span>
              </div>
              <div>
                <p className="font-bold text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">UAE Gratuity Calculator</p>
                <p className="text-xs text-[#87847d] mt-1.5 leading-relaxed">
                  End-of-service benefits as per UAE Labour Law 2026. Limited & unlimited contracts.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/ksa-gosi-calculator"
            className="group block p-4 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#131620] hover:border-[#c9a84c] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center border border-[rgba(201,168,76,0.1)] flex-shrink-0">
                <span className="text-xl" role="img" aria-label="Saudi GOSI Calculator Icon">🛡️</span>
              </div>
              <div>
                <p className="font-bold text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">Saudi GOSI Calculator</p>
                <p className="text-xs text-[#87847d] mt-1.5 leading-relaxed">
                  GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/pakistan-freelancer-tax-calculator"
            className="group block p-4 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#131620] hover:border-[#c9a84c] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center border border-[rgba(201,168,76,0.1)] flex-shrink-0">
                <span className="text-xl" role="img" aria-label="Pakistan Freelancer Tax Calculator Icon">🧾</span>
              </div>
              <div>
                <p className="font-bold text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">Pakistan Freelancer Tax Calculator</p>
                <p className="text-xs text-[#87847d] mt-1.5 leading-relaxed">
                  FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, non-filer 2%.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/tools/hajj-umrah-budget-calculator"
            className="group block p-4 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#131620] hover:border-[#c9a84c] transition-all duration-300 sm:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center border border-[rgba(201,168,76,0.1)] flex-shrink-0">
                <span className="text-xl" role="img" aria-label="Hajj & Umrah Budget Calculator Icon">🕋</span>
              </div>
              <div>
                <p className="font-bold text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">Hajj & Umrah Budget Calculator</p>
                <p className="text-xs text-[#87847d] mt-1.5 leading-relaxed">
                  Estimate pilgrimage costs – flights, hotels, visas, and food for 2026.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
}
