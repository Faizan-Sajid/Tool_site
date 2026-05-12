import React from "react";
import Link from "next/link";

export default function GosiContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">

      {/* Authority Hook */}
      <article className="mb-8">
        <p className="text-sm leading-relaxed">
          <strong>Based on the latest Saudi Labour Law and Royal Decree M/33 (2026)</strong>, this calculator provides precise KSA GOSI contributions for both Saudi nationals and expatriates.
        </p>
      </article>

      {/* SECTION: What is GOSI (Royal Decree M/33)? */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is GOSI (Royal Decree M/33)?
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          GOSI (General Organization for Social Insurance) is mandated by <strong>Royal Decree M/33</strong>, which governs the Saudi Social Insurance Law. It collects mandatory contributions to fund pensions, occupational‑hazard insurance, and the <strong>SANED</strong> unemployment scheme.
        </p>
        <p className="text-sm leading-relaxed">
          The system applies to all private‑sector employees – Saudi nationals and expatriates alike – and the rates were updated for 2026.
        </p>
      </article>

      {/* SECTION: 2026 Contribution Breakdown (Saudi vs Expat) */}
      <article className="mt-8">
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          2026 Contribution Breakdown (Saudi vs Expat)
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Component</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Saudi (Employee)</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Saudi (Employer)</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Expat (Employer)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Annuity (Pension)</td>
                <td className="text-center px-4 text-[#c9a84c]">9%</td>
                <td className="text-center px-4 text-[#c9a84c]">9%</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">SANED (Unemployment)</td>
                <td className="text-center px-4 text-[#c9a84c]">1%</td>
                <td className="text-center px-4 text-[#c9a84c]">1%</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Occupational Hazards</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
                <td className="text-center px-4 text-[#c9a84c]">2%</td>
                <td className="text-center px-4 text-[#2dd4a0]">2%</td>
              </tr>
              <tr className="border-t-2 border-[rgba(255,255,255,0.07)]">
                <td className="py-4 pr-4 font-bold text-[#e6e3db]">TOTAL</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">10%</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">12%</td>
                <td className="text-center px-4 font-bold text-[#2dd4a0]">2%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          Saudi nationals pay a combined 10 % (employee) and 12 % (employer) contribution, while expatriates are only subject to the 2 % employer‑only hazard rate.
        </p>
      </article>

      {/* SECTION: Why use QuickCalcs for GOSI? */}
      <article className="mt-8">
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Why use QuickCalcs for GOSI?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Instant client‑side calculations – no data ever leaves the browser.</li>
          <li>Powered by the official 2026 rates from Royal Decree M/33, ensuring full compliance.</li>
          <li>Designed for GCC professionals – seamlessly switch to the <Link href="/tools/uae-gratuity-calculator" className="underline hover:text-[#c9a84c]">UAE Gratuity Calculator</Link> for cross‑border payroll planning.</li>
          <li>Accessible UI with properly labelled form controls and accessible emojis (role="img" aria‑label).</li>
          <li>Continuous SEO audits keep schema, breadcrumbs, and keyword density up‑to‑date.</li>
        </ul>
      </article>

      {/* ===== Explore Other Tools ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Explore Other QuickCalcs Tools</h2>
        <nav aria-label="Related tools navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/tools/gold-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <p className="font-semibold text-white">Gold Price Calculator</p>
                <p className="text-sm text-gray-300 mt-1">Live 24K, 22K, 21K, 18K rates for UAE & GCC. Includes Zakat and unit converter.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/zakat-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">☪️</span>
              <div>
                <p className="font-semibold text-white">Zakat Calculator</p>
                <p className="text-sm text-gray-300 mt-1">Calculate Zakat on savings, gold, investments & business assets. Nisab auto‑updated.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/uae-gratuity-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧮</span>
              <div>
                <p className="font-semibold text-white">UAE Gratuity Calculator</p>
                <p className="text-sm text-gray-300 mt-1">End‑of‑service benefits as per UAE Labour Law 2026. Limited & unlimited contracts.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/pakistan-freelancer-tax-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧾</span>
              <div>
                <p className="font-semibold text-white">Pakistan Freelancer Tax Calculator</p>
                <p className="text-sm text-gray-300 mt-1">FBR income tax for freelancers. Supports PSEB 0.25%, non‑PSEB 1%, non‑filer 2%.</p>
              </div>
            </div>
          </Link>
        </nav>
      </section>
    </section>
  );
}
