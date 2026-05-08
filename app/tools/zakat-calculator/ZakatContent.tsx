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
          Nisab Threshold for 2026
        </h2>
        <p className="mb-4 text-sm">
          Nisab is the minimum amount of wealth a Muslim must possess for a full lunar year before Zakat becomes obligatory. It is calculated based on the current market value of gold or silver:
        </p>
        <div className="overflow-x-auto">
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
                <td className="py-4 pr-4">Gold Nisab</td>
                <td className="px-4 text-[#c9a84c]">87.48 grams</td>
                <td className="px-4 text-xs">Based on 24k Gold value.</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Silver Nisab</td>
                <td className="px-4 text-[#c9a84c]">612.36 grams</td>
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
        <p className="mt-4 text-xs italic">
          * Most scholars recommend using the silver standard for Nisab to maximize benefit for the poor, as it has a lower entry threshold.
        </p>
      </div>

      {/* SECTION 3: Qualifying Assets */}
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
    </section>
  );
}
