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
            GOSI stands for General Organization for Social Insurance. It is Saudi Arabia's mandatory social insurance program, set up under Royal Decree M/33. Every private-sector employer in the Kingdom must register with GOSI and pay monthly contributions for their employees.
          </p>
          <p>
            The scheme has three parts: pension (annuity), occupational hazard cover, and SANED unemployment protection. Saudi nationals are enrolled in all three. Non-Saudi expats are covered only for occupational hazards — and that cost is paid fully by the employer, not the employee.
          </p>
          <p>
            GOSI is calculated on the <strong className="text-[#e6e3db]">contributory wage</strong>, which is your basic salary plus housing allowance. The maximum contributory wage is capped at SAR 45,000 per month — anything above that is not included in the GOSI calculation.
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
            The 2026 GOSI contribution rates are set by Royal Decree M/33. The rates are different for Saudi nationals and expats. Here is the full breakdown:
          </p>
        </div>

        {/* Current Rates Table */}
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
                <td className="text-center px-4 text-[#c9a84c]">9.75%</td>
                <td className="text-center px-4 text-[#c9a84c]">9.75%</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">SANED (Unemployment)</td>
                <td className="text-center px-4 text-[#c9a84c]">0.75%</td>
                <td className="text-center px-4 text-[#c9a84c]">0.75%</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Occupational Hazards</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
                <td className="text-center px-4 text-[#c9a84c]">2.25%</td>
                <td className="text-center px-4 text-[#c9a84c]">2%</td>
              </tr>
              <tr className="border-t-2 border-[rgba(255,255,255,0.07)]">
                <td className="py-4 pr-4 font-bold text-[#e6e3db]">Total</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">10.75%</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">12.75%</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">2%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ✅ NEW: GOSI Rate Schedule 2024–2028 — competitor gap filled */}
        <div className="mb-6">
          <p className="text-sm font-bold text-[#e6e3db] mb-3">GOSI Rate Schedule — Saudi Employee & Employer (2024–2028)</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.07)]">
                  <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Year</th>
                  <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Employee</th>
                  <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Employer</th>
                  <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: "2024", emp: "9.75%", er: "11.75%", total: "21.5%" },
                { year: "2025", emp: "10.25%", er: "12.25%", total: "22.5%" },
                { year: "2026 (Current)", emp: "10.75%", er: "12.75%", total: "23.5%", current: true },
                { year: "2027", emp: "11.25%", er: "13.25%", total: "24.5%" },
                { year: "2028", emp: "11.75%", er: "13.75%", total: "25.5%" },
                ].map((row) => (
                  <tr
                    key={row.year}
                    className={`border-b border-[rgba(255,255,255,0.03)] ${row.current ? "bg-[rgba(201,168,76,0.06)]" : ""}`}
                  >
                    <td className={`py-3 pr-4 ${row.current ? "text-[#c9a84c] font-bold" : ""}`}>{row.year}</td>
                    <td className="text-center px-4">{row.emp}</td>
                    <td className="text-center px-4">{row.er}</td>
                    <td className={`text-center px-4 ${row.current ? "text-[#c9a84c] font-bold" : ""}`}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#3e3c38] mt-2">
            * The 2024–2028 schedule applies to employees registered with GOSI on or after July 3, 2024. Employees registered before this date pay 9.75% employee and 11.75% employer. Rates are based on Royal Decree M/33. Verify with your HR department for the most recent official figures.
          </p>
        </div>

        <div className="text-sm leading-relaxed space-y-3">
          <p>
            The <strong className="text-[#e6e3db]">Saudi Arabia GOSI employee contribution rate in 2026</strong> is 10.75% of the contributory wage — 9.75% goes to the pension fund and 0.75% to SANED (unemployment insurance). This amount is taken directly from the employee's monthly salary.
          </p>
          <p>
            The <strong className="text-[#e6e3db]">Saudi Arabia GOSI employer contribution rate in 2026</strong> is 12.75% — covering 9.75% pension, 2.25% occupational hazards, and 0.75% SANED. The employer pays this separately and it does not come out of the employee's salary.
          </p>
          <p>
            In total, the combined GOSI contribution for a Saudi national is <strong className="text-[#e6e3db]">23.5% of the contributory wage</strong> — 10.75% from the employee and 12.75% from the employer.
          </p>
        </div>
      </article>

      {/* SECTION 3: GOSI for Non-Saudi Nationals */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI for Non-Saudi Nationals (Expats) — 2026 Complete Guide
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            This is one of the most common questions about GOSI. If you are a non-Saudi expat working in Saudi Arabia's private sector, here is exactly what applies to you — in plain terms:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-[#e6e3db]">You pay zero GOSI deduction.</strong> Nothing is taken from your salary. Your take-home pay is not affected at all.
            </li>
            <li>
              <strong className="text-[#e6e3db]">Your employer pays 2%.</strong> The employer covers occupational hazard insurance at 2% of your contributory wage. You do not pay this.
            </li>
            <li>
              <strong className="text-[#e6e3db]">No pension for expats.</strong> Non-Saudi nationals are not enrolled in the GOSI pension scheme. You do not earn pension points.
            </li>
            <li>
              <strong className="text-[#e6e3db]">No SANED for expats.</strong> Unemployment insurance only applies to Saudi nationals.
            </li>
            <li>
              <strong className="text-[#e6e3db]">The SAR 45,000 cap still applies.</strong> If your basic salary plus housing allowance is above SAR 45,000, the employer's 2% is still calculated on SAR 45,000 only.
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
            Use the <strong className="text-[#e6e3db]">GOSI calculator for non-Saudi nationals</strong> at the top of this page. Select "Expat (Non-Saudi)" and enter your basic salary and housing allowance to see the employer contribution instantly.
          </p>
        </div>
      </article>

      {/* SECTION 4: How to Calculate GOSI — Net Salary */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Calculate GOSI in KSA — Step by Step
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            The GOSI formula in Saudi Arabia is straightforward. Follow these three steps to calculate your net salary after GOSI deductions — or use the free calculator at the top of this page.
          </p>

          <div className="space-y-5">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">1</span>
              <div>
                <p className="font-bold text-[#e6e3db] mb-1">Find your contributory wage</p>
                <p>Add your basic salary and housing allowance. Do not include transport allowance, food allowance, or any other allowances — these are excluded from the GOSI base.</p>
                <p className="mt-2 text-[#c9a84c] font-mono text-xs bg-[rgba(201,168,76,0.05)] px-3 py-2 rounded-lg inline-block">Contributory Wage = Basic Salary + Housing Allowance</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">2</span>
              <div>
                <p className="font-bold text-[#e6e3db] mb-1">Apply the SAR 45,000 cap</p>
                <p>If your contributory wage is above SAR 45,000, use SAR 45,000 as the base. This is the maximum amount GOSI is calculated on — the rest of your salary is not subject to GOSI.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">3</span>
              <div>
                <p className="font-bold text-[#e6e3db] mb-1">Apply the right rate</p>
                <p>Saudi nationals: Employee pays 10%, employer pays 12%.<br />Non-Saudi expats: Employer pays 2%, employee pays 0%.</p>
                <p className="mt-2 text-[#c9a84c] font-mono text-xs bg-[rgba(201,168,76,0.05)] px-3 py-2 rounded-lg inline-block">GOSI Amount = Contributory Wage × Rate</p>
              </div>
            </div>
          </div>

          {/* ✅ NEW: Net Salary worked example — competitor gap filled */}
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5 mt-2">
            <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">Worked Example — Saudi National (Net Salary After GOSI)</p>
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
                <span>Transport Allowance (excluded)</span>
                <span className="text-[#3e3c38]">Not counted</span>
              </div>
              <div className="flex justify-between">
                <span>Contributory Wage</span>
                <span className="text-[#e6e3db]">SAR 15,000</span>
              </div>
              <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-2 mt-2">
                <span>Employee GOSI Deduction (10.75%)</span>
                <span className="text-[#c9a84c] font-bold">− SAR 1,612.50</span>
              </div>
              <div className="flex justify-between">
                <span>Employer Contribution (12.75%)</span>
                <span className="text-[#c9a84c] font-bold">SAR 1,912.50</span>
              </div>
              <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-2 mt-2">
                <span className="font-bold text-[#e6e3db]">Net Salary After GOSI</span>
                <span className="text-[#e6e3db] font-bold">SAR 13,387.50</span>
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
            The GOSI pension in Saudi Arabia is based on two things: how many years you worked, and your average salary. It only applies to Saudi nationals enrolled in the annuity (pension) scheme.
          </p>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">GOSI Pension Calculation Formula</p>
            <p className="text-[#e6e3db] font-mono text-sm mb-3">
              Monthly Pension = 2.5% × Years of Service × Average Contributory Wage
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-[#87847d]">Example: 20 years of service, average contributory wage SAR 10,000</p>
              <p className="text-[#c9a84c] font-mono text-xs">2.5% × 20 × SAR 10,000 = SAR 5,000 / month</p>
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>You need at least <strong className="text-[#e6e3db]">10 years of service</strong> to qualify for a GOSI pension.</li>
            <li>The pension is capped at <strong className="text-[#e6e3db]">100% of your average contributory wage</strong>, which you reach after 40 years.</li>
            <li>Your average contributory wage is usually calculated over your last 2 years of service.</li>
            <li>Non-Saudi expats are not eligible for a GOSI pension — only occupational hazard cover applies.</li>
          </ul>
        </div>
      </article>

      {/* SECTION 6: What is Included in Contributory Wage */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What Counts as the GOSI Contributory Wage in Saudi Arabia?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            The contributory wage is the base that GOSI uses for all calculations. A lot of employees and HR teams make mistakes here — knowing what counts and what does not will save you from errors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.12)] rounded-[14px] p-4">
              <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">✓ Included in GOSI Base</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Basic salary</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Housing allowance</li>
              </ul>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-4">
              <p className="text-[#87847d] text-xs font-bold mb-3 uppercase tracking-wider">✗ Not Included in GOSI Base</p>
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
            The monthly cap is SAR 45,000. Even if your basic salary plus housing allowance is higher than this, GOSI is still only calculated on SAR 45,000. This cap applies to both Saudi nationals and non-Saudi expats.
          </p>
        </div>
      </article>

      {/* ✅ NEW SECTION: SANED — fills competitor gap + impression keyword */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is SANED and How Does It Affect Your GOSI Deduction?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            SANED (Saudi Unemployment Insurance) is part of the GOSI system. It gives Saudi nationals financial support if they lose their job. Both the employee and the employer pay 1% each toward SANED — this is already included in the 10% employee rate and 12% employer rate shown above.
          </p>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">SANED at a Glance</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-[#c9a84c] text-2xl font-bold">1%</p>
                <p className="text-[#87847d] mt-1">Employee pays</p>
              </div>
              <div className="text-center">
                <p className="text-[#c9a84c] text-2xl font-bold">1%</p>
                <p className="text-[#87847d] mt-1">Employer pays</p>
              </div>
              <div className="text-center">
                <p className="text-[#e6e3db] text-2xl font-bold">0%</p>
                <p className="text-[#87847d] mt-1">Expats pay</p>
              </div>
            </div>
          </div>
          <p>
            Non-Saudi expats are not covered by SANED and do not contribute to it. If you are a non-Saudi and lose your job, SANED benefits do not apply to you.
          </p>
        </div>
      </article>

      {/* SECTION 7: Why QuickCalcs */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Why Use This Free GOSI Calculator?
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
            <span><strong className="text-[#e6e3db]">Accurate 2026 rates:</strong> Built on the official rates from Royal Decree M/33 — 10% employee and 12% employer for Saudi nationals, 2% employer for expats.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
            <span><strong className="text-[#e6e3db]">Works for Saudis and expats:</strong> Switch between nationalities in one click. The rates and deductions update automatically.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
            <span><strong className="text-[#e6e3db]">SAR 45,000 cap handled for you:</strong> No manual adjustment needed. Enter any salary and the cap is applied correctly.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
            <span><strong className="text-[#e6e3db]">Shows net salary after deduction:</strong> See exactly what you take home each month after GOSI is applied.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
            <span><strong className="text-[#e6e3db]">100% private:</strong> All calculations happen in your browser. No data is sent to any server.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
            <span><strong className="text-[#e6e3db]">Built for GCC professionals:</strong> Also try the{" "}
              <Link href="/tools/uae-gratuity-calculator" className="underline hover:text-[#c9a84c]">
                UAE Gratuity Calculator
              </Link>{" "}
              for end-of-service calculations across the Gulf.</span>
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
          <Link href="/tools/hajj-umrah-budget-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🕋</span>
              <div>
                <p className="font-semibold text-white">Hajj & Umrah Budget Calculator</p>
                <p className="text-sm text-gray-300 mt-1">Estimate pilgrimage costs — flights, hotels, visas, and food for 2026.</p>
              </div>
            </div>
          </Link>
        </nav>
      </section>

    </section>
  );
}