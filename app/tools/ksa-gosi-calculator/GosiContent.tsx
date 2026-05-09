import React from "react";
import Link from "next/link";

export default function GosiContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">
      {/* SECTION 1: What is GOSI? */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is GOSI? — General Organization for Social Insurance
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            GOSI (General Organization for Social Insurance) is Saudi Arabia's official government body that manages mandatory social insurance for all private-sector employees. Established in 1973, GOSI protects workers and their families through structured monthly contributions from both employers and employees.
          </p>
          <p>
            As of 2026, GOSI covers approximately 12.9 million contributors in Saudi Arabia. Every company operating in the Kingdom — local or foreign — must register with GOSI and make monthly contributions on behalf of their employees.
          </p>
          <p>
            This free GOSI calculator uses the official 2026 contribution rates. All calculations run entirely in your browser — no data is stored or shared by QuickCalcs.
          </p>
        </div>
      </div>

      {/* SECTION 2: Official 2026 GOSI Rates Table */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Official 2026 GOSI Contribution Rates
        </h2>
        <div className="overflow-x-auto">
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
      </div>

      {/* SECTION 4: What Does GOSI Cover? */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What Does GOSI Insurance Cover?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-[12px] bg-[#131620] border border-[rgba(255,255,255,0.07)] p-5">
            <div className="text-2xl mb-3">🏦</div>
            <h3 className="font-bold text-[#e6e3db] mb-2">Annuity Branch</h3>
            <p className="text-sm">Monthly retirement pension for Saudi nationals who reach age 60.</p>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-[#c9a84c] bg-[rgba(201,168,76,0.11)]">Saudi Only</span>
          </div>
          <div className="rounded-[12px] bg-[#131620] border border-[rgba(255,255,255,0.07)] p-5">
            <div className="text-2xl mb-3">🏥</div>
            <h3 className="font-bold text-[#e6e3db] mb-2">Hazards Branch</h3>
            <p className="text-sm">Covers ALL employees for work-related injuries and medical expenses.</p>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-[#2dd4a0] bg-[rgba(45,212,160,0.1)]">All Employees</span>
          </div>
          <div className="rounded-[12px] bg-[#131620] border border-[rgba(255,255,255,0.07)] p-5">
            <div className="text-2xl mb-3">💼</div>
            <h3 className="font-bold text-[#e6e3db] mb-2">SANED</h3>
            <p className="text-sm">Unemployment support for Saudi nationals who lose their jobs.</p>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-[#c9a84c] bg-[rgba(201,168,76,0.11)]">Saudi Only</span>
          </div>
        </div>
      </div>

      {/* ===== Explore Other Tools ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Explore Other QuickCalcs Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <Link href="/tools/pakistan-freelancer-tax-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧾</span>
              <div>
                <p className="font-semibold text-white">Pakistan Freelancer Tax Calculator</p>
                <p className="text-sm text-gray-300 mt-1">FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, non-filer 2%.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
}