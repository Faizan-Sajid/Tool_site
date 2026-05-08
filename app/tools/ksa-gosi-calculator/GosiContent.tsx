import React from "react";

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
            GOSI (General Organization for Social Insurance — المؤسسة العامة للتأمينات الاجتماعية) is Saudi Arabia's official government body that manages mandatory social insurance for all private-sector employees. Established in 1973, GOSI protects workers and their families through structured monthly contributions from both employers and employees.
          </p>
          <p>
            As of 2026, GOSI covers approximately 12.9 million contributors in Saudi Arabia. Every company operating in the Kingdom — local or foreign — must register with GOSI and make monthly contributions on behalf of their employees. Failure to comply results in financial penalties of 2% per month on unpaid amounts.
          </p>
          <p>
            This free GOSI calculator uses the official 2026 contribution rates published by GOSI. All calculations run entirely in your browser — no data is stored or shared by QuickCalcs.
          </p>
        </div>
      </div>

      {/* SECTION 2: Official 2026 GOSI Rates Table */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Official 2026 GOSI Contribution Rates
        </h2>
        <p className="mb-4 text-sm">
          The following rates are the official GOSI contribution percentages for 2026, as published by the General Organization for Social Insurance, Kingdom of Saudi Arabia.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Component</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Saudi National (Employee)</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Saudi National (Employer)</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Expat Employee</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Expat Employer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Annuity (Pension)</td>
                <td className="text-center px-4 text-[#c9a84c]">9%</td>
                <td className="text-center px-4 text-[#c9a84c]">9%</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">SANED (Unemployment)</td>
                <td className="text-center px-4 text-[#c9a84c]">1%</td>
                <td className="text-center px-4 text-[#c9a84c]">1%</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Occupational Hazards</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
                <td className="text-center px-4 text-[#c9a84c]">2%</td>
                <td className="text-center px-4 text-[#3e3c38]">—</td>
                <td className="text-center px-4 text-[#2dd4a0]">2%</td>
              </tr>
              <tr className="border-t-2 border-[rgba(255,255,255,0.07)]">
                <td className="py-4 pr-4 font-bold text-[#e6e3db]">TOTAL</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">10%</td>
                <td className="text-center px-4 font-bold text-[#c9a84c]">12%</td>
                <td className="text-center px-4 font-bold text-[#2dd4a0]">0%</td>
                <td className="text-center px-4 font-bold text-[#2dd4a0]">2%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#3e3c38]">
          * Contributory wage capped at SAR 45,000/month. Source: General Organization for Social Insurance (GOSI), Kingdom of Saudi Arabia, 2026.
        </p>
      </div>

      {/* SECTION 3: How This Calculator Works */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Use the GOSI Calculator — Step by Step
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <strong className="text-[#e6e3db]">Select Nationality</strong>
              <p className="mt-1 text-sm">Choose Saudi National if the employee holds Saudi citizenship. Select Expat (Non-Saudi) for all foreign nationals including GCC citizens working in the private sector.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <strong className="text-[#e6e3db]">Enter Basic Salary (SAR)</strong>
              <p className="mt-1 text-sm">Input the employee's basic salary as stated in the employment contract. Do not include allowances here. Basic salary must be at least 40% of total salary per Saudi Labor Law.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <strong className="text-[#e6e3db]">Enter Housing Allowance (SAR)</strong>
              <p className="mt-1 text-sm">Add the monthly housing allowance if applicable. GOSI is calculated on Basic Salary + Housing Allowance combined. Transport and food allowances are excluded from GOSI calculation.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
              4
            </span>
            <div>
              <strong className="text-[#e6e3db]">Click Calculate</strong>
              <p className="mt-1 text-sm">The calculator instantly shows: Contributory Wage (capped at SAR 45,000), Employee Deduction, Employer Contribution, Total GOSI, and your Estimated Net Salary.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
              5
            </span>
            <div>
              <strong className="text-[#e6e3db]">Review Your Results</strong>
              <p className="mt-1 text-sm">Use the results for payroll planning, HR budgeting, or to verify your employer is making the correct deductions. All calculations follow the official GOSI formula.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: What Does GOSI Cover? */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What Does GOSI Insurance Cover?
        </h2>
        <p className="mb-6 text-sm">Your monthly GOSI contribution provides protection across three main insurance branches:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-[12px] bg-[#131620] border border-[rgba(255,255,255,0.07)] p-5">
            <div className="text-2xl mb-3">🏦</div>
            <h3 className="font-bold text-[#e6e3db] mb-2">Annuity Branch</h3>
            <p className="text-sm">Monthly retirement pension for Saudi nationals who reach age 60 with minimum 60 monthly contributions. Also covers disability and death benefits for contributors and their families.</p>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-[#c9a84c] bg-[rgba(201,168,76,0.11)]">Saudi Nationals Only</span>
          </div>
          <div className="rounded-[12px] bg-[#131620] border border-[rgba(255,255,255,0.07)] p-5">
            <div className="text-2xl mb-3">🏥</div>
            <h3 className="font-bold text-[#e6e3db] mb-2">Occupational Hazards Branch</h3>
            <p className="text-sm">Covers ALL employees (Saudi + Expat) for work-related injuries, disabilities, and deaths. Medical expenses covered at 100%. Partial disability: up to SAR 165,000. Permanent disability: up to SAR 330,000.</p>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-[#2dd4a0] bg-[rgba(45,212,160,0.1)]">All Employees</span>
          </div>
          <div className="rounded-[12px] bg-[#131620] border border-[rgba(255,255,255,0.07)] p-5">
            <div className="text-2xl mb-3">💼</div>
            <h3 className="font-bold text-[#e6e3db] mb-2">SANED — Unemployment Branch</h3>
            <p className="text-sm">Saudi nationals who lose their job receive 60% of salary for first 3 months (max SAR 9,000/month), then 50% for up to 9 more months (max SAR 7,500/month). Maximum 12 months every 2 years.</p>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-[#c9a84c] bg-[rgba(201,168,76,0.11)]">Saudi Nationals Only</span>
          </div>
        </div>
      </div>

      {/* SECTION 5: Important Rules & Compliance */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          GOSI Compliance Rules for 2026
        </h2>
        <div className="space-y-0">
          <div className="flex gap-3 items-start py-3 border-b border-[rgba(255,255,255,0.05)]">
            <span className="text-base flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <strong className="text-[#e6e3db] text-sm">Registration Deadline</strong>
              <p className="text-xs mt-0.5">Employers must register new employees with GOSI within 15 days of their start date. Late registration can result in backdated contributions plus penalties.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start py-3 border-b border-[rgba(255,255,255,0.05)]">
            <span className="text-base flex-shrink-0 mt-0.5">📅</span>
            <div>
              <strong className="text-[#e6e3db] text-sm">Monthly Payment Deadline</strong>
              <p className="text-xs mt-0.5">GOSI contributions must be paid by the last day of each Gregorian month. Late payments attract a 2% monthly penalty on the outstanding amount.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start py-3 border-b border-[rgba(255,255,255,0.05)]">
            <span className="text-base flex-shrink-0 mt-0.5">💰</span>
            <div>
              <strong className="text-[#e6e3db] text-sm">Wage Cap — SAR 45,000</strong>
              <p className="text-xs mt-0.5">GOSI is calculated only on the first SAR 45,000 of Basic Salary + Housing Allowance. Amounts above this cap are exempt from GOSI deductions.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start py-3 border-b border-[rgba(255,255,255,0.05)]">
            <span className="text-base flex-shrink-0 mt-0.5">🚫</span>
            <div>
              <strong className="text-[#e6e3db] text-sm">Excluded Allowances</strong>
              <p className="text-xs mt-0.5">Transport allowance, food allowance, phone allowance, and other benefits are NOT included in the GOSI base. Only Basic Salary + Housing Allowance counts.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start py-3 border-b border-[rgba(255,255,255,0.05)]">
            <span className="text-base flex-shrink-0 mt-0.5">📋</span>
            <div>
              <strong className="text-[#e6e3db] text-sm">Minimum Salary Rule</strong>
              <p className="text-xs mt-0.5">Under Saudi Labor Law, an employee's basic salary must be at least 40% of their total monthly package for GOSI purposes.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start py-3 border-b border-[rgba(255,255,255,0.05)]">
            <span className="text-base flex-shrink-0 mt-0.5">✅</span>
            <div>
              <strong className="text-[#e6e3db] text-sm">Payment Method</strong>
              <p className="text-xs mt-0.5">GOSI payments are made through the official GOSI e-services portal or via SADAD through your online banking. Companies can generate monthly invoices directly from the GOSI portal.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: Is This Tool Free & Accurate? */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Is This GOSI Calculator Free & Accurate?
        </h2>
        <div className="rounded-[12px] bg-[#131620] border border-[rgba(201,168,76,0.2)] p-6 space-y-4 text-sm">
          <p className="text-[#e6e3db]">
            ✅ Yes — QuickCalcs GOSI Calculator is 100% free. No registration, no login, no hidden fees. It will remain free forever.
          </p>
          <div className="space-y-1">
            <p>The calculation uses the official 2026 GOSI rates published by the General Organization for Social Insurance, Kingdom of Saudi Arabia:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Saudi Employee: 10% (9% Annuity + 1% SANED)</li>
              <li>Saudi Employer: 12% (9% Annuity + 2% Hazards + 1% SANED)</li>
              <li>Expat Employee: 0%</li>
              <li>Expat Employer: 2% (Hazards only)</li>
              <li>Wage Cap: SAR 45,000/month</li>
            </ul>
          </div>
          <p className="text-[#87847d]">
            All calculations run entirely in your browser. QuickCalcs never collects, stores, or transmits any salary or personal data you enter. This tool is for informational and payroll planning purposes. For official GOSI matters, always refer to gosi.gov.sa.
          </p>
          <div className="mt-2">
            <a href="https://www.gosi.gov.sa" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] text-xs hover:underline">
              → Visit Official GOSI Portal: gosi.gov.sa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
