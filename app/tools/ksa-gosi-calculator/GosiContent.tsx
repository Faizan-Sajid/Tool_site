import React from "react";
import Link from "next/link";

export default function GosiContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">

      {/* SECTION 1: What is GOSI */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is GOSI and How Does It Work in Saudi Arabia?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            GOSI stands for General Organization for Social Insurance. It is Saudi Arabia's mandatory social insurance scheme, governed by Royal Decree M/33. Every private-sector employer in the Kingdom must register with GOSI and make monthly contributions on behalf of their employees.
          </p>
          <p>
            The scheme covers three areas: pension (annuity), occupational hazard insurance, and SANED unemployment protection. Saudi nationals are enrolled in all three components. Non-Saudi nationals (expats) are covered only for occupational hazards — paid entirely by the employer.
          </p>
          <p>
            GOSI contributions are calculated on the <strong>contributory wage</strong>, which includes basic salary plus housing allowance. The wage is capped at SAR 45,000 per month — any amount above this cap is not subject to GOSI deductions.
          </p>
        </div>
      </article>

      {/* SECTION 2: GOSI Contribution Rates 2026 */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI Contribution Rates — Saudi Arabia Employee and Employer 2026
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-6">
          <p>
            The 2026 GOSI contribution rates in Saudi Arabia are set by Royal Decree M/33. The rates differ between Saudi nationals and expatriates. Here is the complete breakdown:
          </p>
        </div>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Component</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Saudi Employee</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Saudi Employer</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Expat Employer</th>
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
                <td className="text-center px-4 text-[#c9a84c]">2%</td>
              </tr>
              <tr className="border-t-2 border-[rgba(255,255,255,0.07)]">
                <td className="py-4 pr-4 font-bold text-[#e6e3db]">Total</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">10%</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">12%</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">2%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-sm leading-relaxed space-y-3">
          <p>
            The <strong>Saudi Arabia GOSI employee contribution rate in 2026</strong> is 10% of the contributory wage. This covers 9% annuity (pension) and 1% SANED (unemployment insurance). The employee deduction is taken directly from the monthly salary.
          </p>
          <p>
            The <strong>Saudi Arabia GOSI employer contribution rate in 2026</strong> is 12% of the contributory wage. This covers 9% annuity, 2% occupational hazards, and 1% SANED. The employer pays this amount on top of the employee's salary — it does not come out of the employee's pocket.
          </p>
          <p>
            Combined, the total GOSI contribution for a Saudi national employee is <strong>22% of the contributory wage</strong> — 10% from the employee and 12% from the employer.
          </p>
        </div>
      </article>

      {/* SECTION 3: GOSI for Non-Saudi Nationals */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI for Non-Saudi Nationals (Expats) — Complete 2026 Guide
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            This is one of the most searched topics on GOSI. If you are a non-Saudi national working in the private sector in Saudi Arabia, here is exactly what applies to you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Employee deduction: 0%</strong> — As a non-Saudi expat, nothing is deducted from your salary for GOSI. Your take-home salary is not affected.
            </li>
            <li>
              <strong>Employer contribution: 2%</strong> — Your employer pays 2% of your contributory wage to GOSI for occupational hazard insurance. You do not pay this.
            </li>
            <li>
              <strong>No pension (annuity):</strong> Expats are not enrolled in the GOSI pension scheme. You do not accumulate GOSI pension points or benefits.
            </li>
            <li>
              <strong>No SANED:</strong> Unemployment insurance does not apply to non-Saudi nationals.
            </li>
            <li>
              <strong>SAR 45,000 cap applies:</strong> The wage cap still applies to expat calculations. If your contributory wage exceeds SAR 45,000, the employer's 2% is calculated on SAR 45,000 only.
            </li>
          </ul>

          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5 mt-4">
            <p className="text-[#c9a84c] text-xs font-bold mb-2 uppercase tracking-wider">Worked Example — Non-Saudi Employee</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Basic Salary</span>
                <span className="text-[#e6e3db]">SAR 8,000</span>
              </div>
              <div className="flex justify-between">
                <span>Housing Allowance</span>
                <span className="text-[#e6e3db]">SAR 2,000</span>
              </div>
              <div className="flex justify-between">
                <span>Contributory Wage</span>
                <span className="text-[#e6e3db]">SAR 10,000</span>
              </div>
              <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-2 mt-2">
                <span>Employee Deduction (0%)</span>
                <span className="text-[#c9a84c] font-bold">SAR 0</span>
              </div>
              <div className="flex justify-between">
                <span>Employer GOSI (2%)</span>
                <span className="text-[#c9a84c] font-bold">SAR 200</span>
              </div>
              <div className="flex justify-between">
                <span>Your Net Salary (unchanged)</span>
                <span className="text-[#e6e3db] font-bold">SAR 10,000</span>
              </div>
            </div>
          </div>

          <p>
            Use the <strong>GOSI calculator for non-Saudi nationals</strong> at the top of this page. Select "Expat (Non-Saudi)" and enter your basic salary and housing allowance to see the employer contribution instantly.
          </p>
        </div>
      </article>

      {/* SECTION 4: How to Calculate GOSI in KSA */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Calculate GOSI in KSA — Step by Step
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            GOSI calculation in KSA follows a simple formula. Here is how to do it manually, or just use our free calculator above for instant results.
          </p>

          <div className="space-y-5">
            <div>
              <p className="font-bold text-[#e6e3db] mb-1">Step 1: Find the contributory wage</p>
              <p>Add basic salary and housing allowance. Do not include transport, food, or other allowances.</p>
              <p className="mt-1 text-[#c9a84c] font-mono text-xs">Contributory Wage = Basic Salary + Housing Allowance</p>
            </div>
            <div>
              <p className="font-bold text-[#e6e3db] mb-1">Step 2: Apply the SAR 45,000 cap</p>
              <p>If the contributory wage is above SAR 45,000, use SAR 45,000 as the base. This is the maximum GOSI base in Saudi Arabia.</p>
            </div>
            <div>
              <p className="font-bold text-[#e6e3db] mb-1">Step 3: Apply the correct rate</p>
              <p>For Saudi nationals: Employee pays 10%, employer pays 12%.<br />For non-Saudi expats: Employer pays 2%, employee pays 0%.</p>
              <p className="mt-1 text-[#c9a84c] font-mono text-xs">GOSI Amount = Contributory Wage × Rate</p>
            </div>
          </div>

          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">Worked Example — Saudi National</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Basic Salary</span>
                <span className="text-[#e6e3db]">SAR 12,000</span>
              </div>
              <div className="flex justify-between">
                <span>Housing Allowance</span>
                <span className="text-[#e6e3db]">SAR 3,000</span>
              </div>
              <div className="flex justify-between">
                <span>Contributory Wage</span>
                <span className="text-[#e6e3db]">SAR 15,000</span>
              </div>
              <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-2 mt-2">
                <span>Employee Deduction (10%)</span>
                <span className="text-[#c9a84c] font-bold">SAR 1,500</span>
              </div>
              <div className="flex justify-between">
                <span>Employer Contribution (12%)</span>
                <span className="text-[#c9a84c] font-bold">SAR 1,800</span>
              </div>
              <div className="flex justify-between">
                <span>Total GOSI (22%)</span>
                <span className="text-[#e6e3db] font-bold">SAR 3,300</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* SECTION 5: GOSI Pension Formula */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI Saudi Arabia Pension Calculation Formula 2026
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            The GOSI pension formula in Saudi Arabia is based on years of service and the average contributory wage. It applies only to Saudi nationals enrolled in the annuity (pension) scheme.
          </p>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">GOSI Pension Formula</p>
            <p className="text-[#e6e3db] font-mono text-sm mb-3">
              Monthly Pension = 2.5% × Years of Service × Average Contributory Wage
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-[#87847d]">Example: 20 years of service, average contributory wage SAR 10,000</p>
              <p className="text-[#c9a84c] font-mono text-xs">2.5% × 20 × SAR 10,000 = SAR 5,000 / month</p>
            </div>
          </div>
          <div className="space-y-3">
            <p>Key points about the GOSI pension in Saudi Arabia:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum service required for pension eligibility is typically 10 years.</li>
              <li>The pension is capped at 100% of the average contributory wage (reached at 40 years of service).</li>
              <li>The average contributory wage is calculated over the last 2 years of service (or the full career in some cases).</li>
              <li>Expats (non-Saudi nationals) are not eligible for GOSI pension — they only have occupational hazard coverage.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* SECTION 6: What is Included in Contributory Wage */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is the GOSI Contributory Wage in Saudi Arabia?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            The contributory wage is the base used for GOSI calculations. Knowing what is included and excluded saves both employees and HR teams from making costly errors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.12)] rounded-[14px] p-4">
              <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">Included in GOSI Base</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Basic salary</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Housing allowance</li>
              </ul>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-4">
              <p className="text-[#87847d] text-xs font-bold mb-3 uppercase tracking-wider">Excluded from GOSI Base</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Transport allowance</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Food allowance</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Mobile / phone allowance</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Performance bonuses</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Overtime pay</li>
              </ul>
            </div>
          </div>
          <p>
            The SAR 45,000 monthly cap means that even if your basic salary plus housing allowance exceeds this amount, GOSI is only calculated on SAR 45,000. This cap applies to both Saudi nationals and non-Saudi expats.
          </p>
        </div>
      </article>

      {/* SECTION 7: Why QuickCalcs */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Why Use This Free GOSI Calculator?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-sm">
          <li>
            <strong className="text-[#e6e3db]">Accurate 2026 rates:</strong> Built on the official rates from Royal Decree M/33. Employee 10%, employer 12% for Saudis. Employer 2% for expats.
          </li>
          <li>
            <strong className="text-[#e6e3db]">Supports both Saudi nationals and non-Saudi expats:</strong> Switch between nationalities in one click. The calculator adjusts rates and deductions automatically.
          </li>
          <li>
            <strong className="text-[#e6e3db]">SAR 45,000 cap applied automatically:</strong> No manual adjustment needed. Enter any salary and the cap is handled correctly.
          </li>
          <li>
            <strong className="text-[#e6e3db]">100% private:</strong> All calculations run in your browser. No data is sent to any server, ever.
          </li>
          <li>
            <strong className="text-[#e6e3db]">Built for GCC professionals:</strong> Also try the{" "}
            <Link href="/tools/uae-gratuity-calculator" className="underline hover:text-[#c9a84c]">
              UAE Gratuity Calculator
            </Link>{" "}
            for cross-border payroll planning.
          </li>
        </ul>
      </article>

      {/* INTERNAL LINKS */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Explore Other QuickCalcs Tools</h2>
        <nav aria-label="Related tools navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/tools/gold-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <p className="font-semibold text-white">Gold Price Calculator</p>
                <p className="text-sm text-gray-300 mt-1">Live 24K, 22K, 21K, 18K rates for UAE &amp; GCC. Includes Zakat and unit converter.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/zakat-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">☪️</span>
              <div>
                <p className="font-semibold text-white">Zakat Calculator</p>
                <p className="text-sm text-gray-300 mt-1">Calculate Zakat on savings, gold, investments &amp; business assets. Nisab auto-updated.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/uae-gratuity-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧮</span>
              <div>
                <p className="font-semibold text-white">UAE Gratuity Calculator</p>
                <p className="text-sm text-gray-300 mt-1">End-of-service benefits as per UAE Labour Law 2026. Limited &amp; unlimited contracts.</p>
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
                <p className="text-sm text-gray-300 mt-1">Estimate pilgrimage costs — flights, hotels, visas, and food for 2026.</p>
              </div>
            </div>
          </Link>
        </nav>
      </section>

    </section>
  );
}