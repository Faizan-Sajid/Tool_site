import React from "react";
import Link from "next/link";

export default function GosiContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">

      <div className="rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-5 text-xs leading-relaxed text-[#87847d]">
        <p>
          <strong className="text-[#e6e3db]">Last updated:</strong> June 2026. Calculation basis: Saudi GOSI employee/employer contribution rates, SANED, occupational hazard insurance, and SAR 45,000 monthly contributory wage cap. This tool provides payroll estimates for informational purposes. Confirm final deductions with your employer or the official GOSI portal.
        </p>
      </div>

      {/* AI OVERVIEW / FEATURED SNIPPET BOX */}
      <div className="gosi-quick-answer rounded-[14px] border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] p-5 text-sm leading-relaxed">
        <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">
          GOSI Quick Answer — Saudi Arabia 2026
        </p>
        <ul className="space-y-2 text-[#e6e3db]">
          <li>
            <strong>Saudi national employee:</strong> 10.75% of contributory wage deducted from salary (10% pension + 0.75% SANED)
          </li>
          <li>
            <strong>Saudi national employer:</strong> 12.75% paid additionally (10% pension + 2% occupational hazards + 0.75% SANED)
          </li>
          <li>
            <strong>Non-Saudi expat employee:</strong> 0% — nothing deducted from your salary
          </li>
          <li>
            <strong>Non-Saudi expat employer:</strong> 2% for occupational hazards only
          </li>
          <li>
            <strong>Contributory wage:</strong> Basic salary + housing allowance, capped at SAR 45,000/month
          </li>
        </ul>
      </div>

      {/* SECTION 1: What is GOSI */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is GOSI and How Does It Work in Saudi Arabia?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            <strong className="text-[#e6e3db]">GOSI (General Organization for Social Insurance)</strong> — 
            التأمينات الاجتماعية — is Saudi Arabia&apos;s mandatory social insurance system under Royal Decree M/33. 
            Every private sector employer must register employees and pay monthly contributions through payroll. 
            The system has three branches: pension (annuity), occupational hazard insurance, and SANED 
            (unemployment insurance). Saudi nationals are enrolled in all three. Non-Saudi expats are covered 
            only for occupational hazards — paid entirely by the employer.
          </p>
          <p>
            GOSI is calculated on the <strong className="text-[#e6e3db]">monthly contributory wage</strong>, which is your basic salary and housing allowance. The maximum contributory wage is capped at SAR 45,000 per month — anything above that is not included in the GOSI calculation.
          </p>
        </div>
      </article>

      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Official Source and Calculation Basis
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            This calculator estimates the Saudi payroll deduction using GOSI contribution concepts for Saudi nationals and non-Saudi expats, including the annuity branch, SANED, occupational hazard insurance, and the SAR 45,000 monthly contributory wage cap.
          </p>
          <p>
            Your final payroll estimate can depend on nationality, GOSI registration date, employer records, and whether the old GOSI rate or new GOSI rate applies to your case. Confirm final deductions with your employer or the official GOSI portal.
          </p>
          <p>
            Official source: {" "}
            <a
              href="https://www.gosi.gov.sa/en"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="underline hover:text-[#c9a84c]"
            >
              General Organization for Social Insurance (Official Portal)
            </a>
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
                <td className="text-center px-4 text-[#c9a84c]">10%</td>
                <td className="text-center px-4 text-[#c9a84c]">10%</td>
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
                <td className="text-center px-4 text-[#c9a84c]">2%</td>
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
            The <strong className="text-[#e6e3db]">Saudi Arabia GOSI employee contribution rate in 2026</strong> is 10.75% of the contributory wage — 10% goes to the pension fund and 0.75% to SANED (unemployment insurance). This amount is taken directly from the employee&apos;s monthly salary as a Saudi payroll deduction.
          </p>
          <p>
            The <strong className="text-[#e6e3db]">Saudi Arabia GOSI employer contribution rate in 2026</strong> is 12.75% — covering 10% pension, 2% occupational hazards, and 0.75% SANED. The employer pays this separately and it does not come out of the employee&apos;s take-home salary.
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
            This is one of the most common questions about GOSI. If you are a non-Saudi expat working in Saudi Arabia&apos;s private sector, here is exactly what applies to you — in plain terms:
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
              <strong className="text-[#e6e3db]">The SAR 45,000 cap still applies.</strong> If your basic salary plus housing allowance is above SAR 45,000, the employer&apos;s 2% is still calculated on SAR 45,000 only.
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
            Use the <strong className="text-[#e6e3db]">GOSI calculator for non-Saudi nationals</strong> at the top of this page. Select &quot;Expat (Non-Saudi)&quot; and enter your basic salary and housing allowance to see the employer contribution instantly.
          </p>
        </div>
      </article>

      {/* NEW: GOSI Deduction by Salary Range */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI Deduction by Salary — How Much Does GOSI Take From Your KSA Salary?
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-6">
          <p>
            The exact SAR amount GOSI deducts depends on your contributory wage (basic salary + housing 
            allowance). The table below shows employee and employer GOSI deductions at common salary 
            levels in Saudi Arabia for 2026.
          </p>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Contributory Wage</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Saudi Employee (10.75%)</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Saudi Employer (12.75%)</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Net Salary (Saudi)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { wage: "SAR 5,000",  emp: "SAR 537.50",   er: "SAR 637.50",   net: "SAR 4,462.50" },
                { wage: "SAR 8,000",  emp: "SAR 860.00",   er: "SAR 1,020.00", net: "SAR 7,140.00" },
                { wage: "SAR 10,000", emp: "SAR 1,075.00", er: "SAR 1,275.00", net: "SAR 8,925.00" },
                { wage: "SAR 12,000", emp: "SAR 1,290.00", er: "SAR 1,530.00", net: "SAR 10,710.00" },
                { wage: "SAR 15,000", emp: "SAR 1,612.50", er: "SAR 1,912.50", net: "SAR 13,387.50" },
                { wage: "SAR 20,000", emp: "SAR 2,150.00", er: "SAR 2,550.00", net: "SAR 17,850.00" },
                { wage: "SAR 25,000", emp: "SAR 2,687.50", er: "SAR 3,187.50", net: "SAR 22,312.50" },
                { wage: "SAR 30,000", emp: "SAR 3,225.00", er: "SAR 3,825.00", net: "SAR 26,775.00" },
                { wage: "SAR 45,000 (cap)", emp: "SAR 4,837.50", er: "SAR 5,737.50", net: "SAR 40,162.50" },
                { wage: "SAR 50,000+", emp: "SAR 4,837.50 (capped)", er: "SAR 5,737.50 (capped)", net: "Varies" },
              ].map((row) => (
                <tr key={row.wage} className="border-b border-[rgba(255,255,255,0.03)]">
                  <td className="py-3 pr-4 text-[#e6e3db] font-medium">{row.wage}</td>
                  <td className="text-center px-4 text-[#c9a84c]">{row.emp}</td>
                  <td className="text-center px-4">{row.er}</td>
                  <td className="text-center px-4 text-[#e6e3db]">{row.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#3e3c38]">
          * Based on 2026 GOSI rates for employees registered on or after July 3, 2024. 
          Contributory wage = basic salary + housing allowance only. 
          Non-Saudi expats: employer pays 2% for occupational hazards only — no employee deduction.
        </p>
      </article>

      {/* NEW: GCC Nationals and GOSI */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI for GCC Nationals Working in Saudi Arabia
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            If you are a citizen of a GCC country (Bahrain, Kuwait, Oman, Qatar, UAE) working in Saudi 
            Arabia&apos;s private sector, your GOSI treatment differs from both Saudi nationals and non-GCC expats.
          </p>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">
              GCC Nationals — GOSI Rules at a Glance
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-[#c9a84c] flex-shrink-0">→</span>
                <span>
                  <strong className="text-[#e6e3db]">Social security handled by home country:</strong> GCC 
                  nationals typically contribute to their home country&apos;s social insurance system under the 
                  GCC Social Insurance Agreement (Riyadh Agreement). Saudi GOSI pension rules do not apply.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a84c] flex-shrink-0">→</span>
                <span>
                  <strong className="text-[#e6e3db]">Occupational hazard insurance still applies:</strong> 
                  Your Saudi employer pays 2% for occupational hazard insurance — same as non-Saudi expats.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a84c] flex-shrink-0">→</span>
                <span>
                  <strong className="text-[#e6e3db]">Practical result:</strong> Like non-Saudi expats, 
                  GCC nationals see 0% deducted from their own salary in most cases. Confirm with your 
                  HR department and the official GOSI portal as rules can vary by employment contract.
                </span>
              </li>
            </ul>
          </div>
          <p>
            Use the non-Saudi option in the GOSI calculator above as a starting point for GCC national 
            estimates. For official guidance, consult the{" "}
            <a
              href="https://www.gosi.gov.sa/en"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="underline hover:text-[#c9a84c]"
            >
              GOSI official portal
            </a>{" "}
            or your employer&apos;s HR department.
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
                <p>Saudi nationals: Employee pays 10.75%, employer pays 12.75%.<br />Non-Saudi expats: Employer pays 2%, employee pays 0%.</p>
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
            SANED (Saudi Unemployment Insurance) is part of the GOSI system. It gives Saudi nationals financial support if they lose their job. Both the employee and the employer pay 0.75% each toward SANED — this is already included in the 10.75% employee rate and 12.75% employer rate shown above.
          </p>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">SANED at a Glance</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-[#c9a84c] text-2xl font-bold">0.75%</p>
                <p className="text-[#87847d] mt-1">Employee pays</p>
              </div>
              <div className="text-center">
                <p className="text-[#c9a84c] text-2xl font-bold">0.75%</p>
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

      {/* NEW: GOSI and Your Job Offer — Gross vs Net Salary */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI and Your Job Offer — Gross Salary vs Net Salary in Saudi Arabia
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            When you receive a job offer in Saudi Arabia, the salary figure in your contract is your
            <strong className="text-[#e6e3db]"> gross salary</strong> — before any GOSI deductions. 
            As a Saudi national, your take-home pay will be lower. As a non-Saudi expat, you receive 
            the full amount because GOSI is not deducted from your salary.
          </p>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">
              Job Offer Example — Saudi National vs Expat (SAR 20,000 gross)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(255,255,255,0.07)]">
                    <th className="text-left py-3 pr-4 text-xs text-[#3e3c38] font-bold">Item</th>
                    <th className="text-center py-3 px-4 text-xs text-[#3e3c38] font-bold">Saudi National</th>
                    <th className="text-center py-3 px-4 text-xs text-[#3e3c38] font-bold">Non-Saudi Expat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Gross Salary (Contract)", saudi: "SAR 20,000", expat: "SAR 20,000" },
                    { item: "GOSI Employee Deduction", saudi: "− SAR 2,150", expat: "SAR 0" },
                    { item: "Net Take-Home Pay", saudi: "SAR 17,850", expat: "SAR 20,000" },
                    { item: "Employer GOSI Cost (extra)", saudi: "SAR 2,550", expat: "SAR 400" },
                  ].map((row) => (
                    <tr key={row.item} className="border-b border-[rgba(255,255,255,0.03)]">
                      <td className="py-3 pr-4 text-[#87847d]">{row.item}</td>
                      <td className="text-center px-4 text-[#c9a84c]">{row.saudi}</td>
                      <td className="text-center px-4 text-[#e6e3db]">{row.expat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p>
            Before accepting a Saudi job offer, always run the numbers through the GOSI calculator above. 
            If your contract states SAR 15,000 basic + SAR 5,000 housing = SAR 20,000 contributory wage, 
            your actual net salary as a Saudi national will be approximately SAR 17,850 after the 10.75% 
            GOSI deduction of SAR 2,150.
          </p>

          {/* Payslip Verification sub-section */}
          <div className="mt-4 p-4 rounded-[12px] border border-[rgba(255,255,255,0.07)] bg-[#131620]">
            <p className="text-[#e6e3db] font-bold text-sm mb-2">
              How to Verify Your GOSI Deduction on Your Payslip
            </p>
            <p className="text-sm">
              If the GOSI amount on your payslip looks wrong, check these three things: 
              (1) confirm whether the deduction is based on basic salary + housing allowance only — 
              transport allowance should NOT be included; 
              (2) check whether your employer is using the old GOSI rate (9.75%) or new rate (10.75%) 
              based on your GOSI registration date — employees registered before July 3, 2024 may still 
              be on the old schedule; 
              (3) verify the deduction is not calculated on more than SAR 45,000 — any amount above this 
              is a payroll error. Report discrepancies directly to the official GOSI portal or your HR department.
            </p>
          </div>
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
            <span><strong className="text-[#e6e3db]">Accurate 2026 rates:</strong> Built on the official rates from Royal Decree M/33 — 10.75% employee and 12.75% employer for Saudi nationals, 2% employer for expats.</span>
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

      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Common GOSI Terms in Arabic
        </h2>
        <div className="overflow-x-auto rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Arabic Search Term</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ar: "حاسبة التأمينات الاجتماعية", en: "GOSI Calculator" },
                { ar: "حساب التأمينات من الراتب", en: "Calculate GOSI from salary" },
                { ar: "نسبة التأمينات الاجتماعية", en: "Social insurance contribution rate" },
                { ar: "نسبة التأمينات الاجتماعية للسعوديين", en: "GOSI rate for Saudi nationals" },
                { ar: "نسبة التأمينات الاجتماعية لغير السعوديين", en: "GOSI rate for non-Saudi expats" },
              ].map((term) => (
                <tr key={term.ar} className="border-b border-[rgba(255,255,255,0.03)] last:border-b-0">
                  <td dir="rtl" className="py-3 pr-4 text-right text-[#e6e3db]">{term.ar}</td>
                  <td className="py-3 px-4">{term.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* Arabic Bilingual FAQ Section */}
      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          أسئلة شائعة عن حاسبة التأمينات الاجتماعية — GOSI FAQ in Arabic
        </h2>
        <div className="space-y-5 text-sm" dir="auto">
          
          <div className="border-b border-[rgba(255,255,255,0.05)] pb-4">
            <p className="font-bold text-[#e6e3db] mb-2" dir="rtl">
              كم يُخصم من الراتب للتأمينات الاجتماعية في السعودية 2026؟
            </p>
            <p dir="rtl" className="text-[#87847d]">
              للموظف السعودي: يُخصم 10.75% من الأجر الخاضع للاشتراك (الراتب الأساسي + بدل السكن، بحد أقصى 45,000 ريال شهرياً). للموظف غير السعودي: لا يُخصم من الراتب أي مبلغ — فقط صاحب العمل يدفع 2% عن الأخطار المهنية.
            </p>
          </div>

          <div className="border-b border-[rgba(255,255,255,0.05)] pb-4">
            <p className="font-bold text-[#e6e3db] mb-2" dir="rtl">
              ما هو الأجر الخاضع للاشتراك في التأمينات الاجتماعية؟
            </p>
            <p dir="rtl" className="text-[#87847d]">
              الأجر الخاضع للاشتراك هو الراتب الأساسي مضافاً إليه بدل السكن فقط. لا تُحتسب بدلات النقل أو الطعام أو الهاتف أو المكافآت في هذا الوعاء. الحد الأقصى للأجر الخاضع للاشتراك هو 45,000 ريال شهرياً.
            </p>
          </div>

          <div className="border-b border-[rgba(255,255,255,0.05)] pb-4">
            <p className="font-bold text-[#e6e3db] mb-2" dir="rtl">
              هل يُخصم من راتب المقيم (غير السعودي) تأمينات اجتماعية؟
            </p>
            <p dir="rtl" className="text-[#87847d]">
              لا. المقيم غير السعودي لا يُخصم من راتبه أي اشتراك تأمينات اجتماعية. فقط صاحب العمل يدفع 2% عن الأخطار المهنية، ولا يظهر هذا المبلغ في كشف الراتب.
            </p>
          </div>

          <div className="border-b border-[rgba(255,255,255,0.05)] pb-4">
            <p className="font-bold text-[#e6e3db] mb-2" dir="rtl">
              ما هي نسب اشتراكات التأمينات الاجتماعية 2026 للسعوديين وغير السعوديين؟
            </p>
            <p dir="rtl" className="text-[#87847d]">
              للسعودي: الموظف 10.75% وصاحب العمل 12.75% (المجموع 23.5%). لغير السعودي: الموظف 0% وصاحب العمل 2% فقط (أخطار مهنية).
            </p>
          </div>

          <div>
            <p className="font-bold text-[#e6e3db] mb-2" dir="rtl">
              كيف يُحسب معاش التقاعد في التأمينات الاجتماعية السعودية؟
            </p>
            <p dir="rtl" className="text-[#87847d]">
              معادلة حساب معاش التقاعد: 2.5% × عدد سنوات الخدمة × متوسط الأجر الخاضع للاشتراك. مثال: 20 سنة خدمة بأجر 10,000 ريال = معاش 5,000 ريال شهرياً. يُشترط الحد الأدنى 10 سنوات للحصول على المعاش.
            </p>
          </div>
        </div>
        <p className="text-xs text-[#3e3c38] mt-4">
          For the English version of all FAQs, see the full GOSI Calculator FAQ section above. 
          حاسبة التأمينات الاجتماعية متاحة باللغة الإنجليزية أعلاه.
        </p>
      </article>

      <article>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI Calculator FAQs
        </h2>
        <div className="space-y-6 text-sm leading-relaxed">
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">How much is GOSI deduction from salary in Saudi Arabia?</h3>
            <p>For Saudi nationals under the 2026 rate, the employee GOSI deduction is 10.75% of the contributory wage. That wage is basic salary plus housing allowance, capped at SAR 45,000 per month. Non-Saudi expats have no employee deduction from salary.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">How is GOSI calculated for non-Saudi employees?</h3>
            <p>For non-Saudi employees, GOSI is calculated only as a 2% employer contribution for occupational hazard insurance. The employee pays 0%, and the 2% is applied to the contributory wage up to the SAR 45,000 monthly cap.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">Is GOSI deducted from expat salary in Saudi Arabia?</h3>
            <p>No. GOSI is not deducted from a non-Saudi expat&apos;s salary in Saudi Arabia. Only the employer pays 2% for occupational hazard insurance, while SANED and pension contributions do not apply to expats.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">Is GOSI deduction based on basic salary or gross salary?</h3>
            <p>GOSI is based on the contributory wage, not the full gross salary. The contributory wage normally includes basic salary and housing allowance, while transport allowance, food allowance, overtime, and bonuses are excluded.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">Is housing allowance included in GOSI calculation?</h3>
            <p>Yes. Housing allowance is included with basic salary when calculating the GOSI contributory wage. If basic salary plus housing allowance exceeds SAR 45,000, GOSI is calculated only on SAR 45,000.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">What is the GOSI salary cap of SAR 45,000?</h3>
            <p>The GOSI salary cap means monthly contributions are calculated on a maximum contributory wage of SAR 45,000. Any basic salary and housing allowance above that amount is not included in the GOSI calculation.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">What are GOSI employee and employer contribution rates in 2026?</h3>
            <p>For Saudi nationals registered under the new schedule, the 2026 employee rate is 10.75% and the employer rate is 12.75%. For non-Saudi expats, the employee rate is 0% and the employer pays 2% for occupational hazards only.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">How does SANED deduction percentage work in Saudi Arabia?</h3>
            <p>SANED is unemployment insurance for Saudi nationals. In 2026, the SANED portion is 0.75% from the employee and 0.75% from the employer, already included in the 10.75% employee and 12.75% employer GOSI rates.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">What is the difference between old GOSI rate and new GOSI rate?</h3>
            <p>The old GOSI rate for employees registered before July 3, 2024 is 9.75% employee and 11.75% employer. The new GOSI rate for employees registered on or after July 3, 2024 is 10.75% employee and 12.75% employer in 2026, with phased increases continuing through 2028.</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-[#e6e3db]">How do I use a Saudi payroll GOSI deduction calculator?</h3>
            <p>Enter your basic salary and housing allowance, then choose Saudi national or non-Saudi expat. The calculator applies the correct GOSI rate, SAR 45,000 cap, SANED treatment, and employer contribution to estimate your payroll deduction and net salary.</p>
          </div>
        </div>
      </article>

      {/* INTERNAL LINKS */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Other GCC Financial Calculators — Related to GOSI
        </h2>
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
                <p className="text-sm text-gray-300 mt-1">Calculate annual Zakat obligation on savings, gold, and investments. Relevant for Saudi nationals managing post-GOSI net salary.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/uae-gratuity-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧮</span>
              <div>
                <p className="font-semibold text-white">UAE Gratuity Calculator</p>
                <p className="text-sm text-gray-300 mt-1">End-of-service gratuity for UAE. Expats working across KSA and UAE — use alongside the GOSI calculator to plan full compensation.</p>
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
          <Link href="/tools/malaysia-epf-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🇲🇾</span>
              <div>
                <p className="font-semibold text-white">Malaysia EPF Calculator</p>
                <p className="text-sm text-gray-300 mt-1">Calculate EPF contributions for employees and employers in Malaysia. Includes 2026 contribution rates and take-home salary breakdown.</p>
              </div>
            </div>
          </Link>
        </nav>
      </section>

    </section>
  );
}