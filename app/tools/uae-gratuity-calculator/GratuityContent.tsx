import React from "react";

export default function GratuityContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">
      {/* SECTION 1: What is UAE Gratuity? */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is UAE Gratuity? — End of Service Benefits
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Gratuity is a statutory end-of-service benefit paid to expatriate employees in the UAE. It serves as a financial thank-you for the years of service provided to an employer. Under the Federal Decree-Law No. 33 of 2021 (the UAE Labour Law), all eligible workers are entitled to this payment upon the termination or completion of their employment contract.
          </p>
          <p>
            As of 2026, the law applies to all private sector employees, ensuring a unified system for calculating benefits across all emirates, including Dubai, Abu Dhabi, and Sharjah. This benefit is calculated based on your last received basic salary, excluding allowances like housing, transport, or utilities.
          </p>
        </div>
      </div>

      {/* SECTION 2: Official 2026 Gratuity Rules */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          UAE Labour Law 2026: Gratuity Calculation Rules
        </h2>
        <p className="mb-4 text-sm">
          The calculation of gratuity depends on the length of your continuous service. Here are the official rates for employees who have completed at least one year of service:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Service Period</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Calculation Rate</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Less than 1 Year</td>
                <td className="px-4 text-[#3e3c38]">No Entitlement</td>
                <td className="px-4 text-xs italic">Service must exceed 1 year to qualify.</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">1 to 5 Years</td>
                <td className="px-4 text-[#c9a84c]">21 Days of Basic Salary</td>
                <td className="px-4 text-xs">Per each year of service.</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">More than 5 Years</td>
                <td className="px-4 text-[#c9a84c]">30 Days of Basic Salary</td>
                <td className="px-4 text-xs">For each year exceeding 5 years.</td>
              </tr>
              <tr className="border-t-2 border-[rgba(255,255,255,0.07)]">
                <td className="py-4 pr-4 font-bold text-[#e6e3db]">Maximum Cap</td>
                <td colSpan={2} className="px-4 font-bold text-[#2dd4a0]">
                  Total gratuity cannot exceed 2 years' worth of salary.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: How to Use This Calculator */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Use the UAE Gratuity Calculator
        </h2>
        <div className="space-y-6">
          {[
            { step: 1, title: "Enter Basic Salary", desc: "Input your monthly basic salary in AED. Ensure you exclude any allowances like housing or transport." },
            { step: 2, title: "Select Dates", desc: "Choose your exact joining and end dates as per your labor contract or visa cancellation." },
            { step: 3, title: "Choose Reason", desc: "Select whether you resigned or your employment was terminated, as this can affect historical contract types." },
            { step: 4, title: "Review Breakdown", desc: "See your total service days, the rate applied (21 or 30 days), and the final AED amount." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
                {item.step}
              </span>
              <div>
                <strong className="text-[#e6e3db]">{item.title}</strong>
                <p className="mt-1 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: Important Compliance Notes */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Important Compliance Rules
        </h2>
        <div className="rounded-[12px] bg-[#131620] border border-[rgba(201,168,76,0.2)] p-6 space-y-4 text-sm">
          <p className="text-[#e6e3db]">
            ✅ Updated for 2026: The tool follows the unified UAE Labour Law regarding limited contracts.
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li><strong>Unpaid Leave:</strong> Days of unpaid leave are excluded from the service period calculation.</li>
            <li><strong>Notice Period:</strong> Usually included if the employee worked through it.</li>
            <li><strong>DIFC & ADGM:</strong> Note that free zones like DIFC have their own separate savings schemes (DEWS).</li>
          </ul>
          <p className="text-[#87847d] text-xs pt-2">
            * This tool is for informational purposes only. For legal matters, consult with MOHRE (Ministry of Human Resources & Emiratisation).
          </p>
        </div>
      </div>
    </section>
  );
}
