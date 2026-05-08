import React from "react";
import FAQAccordion from "@/components/FreelancerTaxFAQ";

// FAQ items specific to the Pakistan Freelancer Tax Calculator
const faqItems = [
  {
    question: "What is the tax rate for freelancers in Pakistan in 2025?",
    answer: "PSEB registered + filer: 0.25% | Non‑PSEB filer: 1% | Non‑filer: 2%",
  },
  {
    question: "Does a PSEB‑registered freelancer pay less tax?",
    answer: "Yes. PSEB registration reduces the rate from 1% to 0.25% on export income.",
  },
  {
    question: "Is freelance income from Upwork and Fiverr taxable in Pakistan?",
    answer: "Yes. Once received in a Pakistani bank account, it is subject to withholding tax.",
  },
  {
    question: "What is the difference between a filer and non‑filer for freelancers?",
    answer: "Filers pay lower rates and are on the FBR Active Taxpayer List (ATL). Non‑filers face a higher 2% rate due to penalty provisions.",
  },
  {
    question: "Do I need to register with PSEB to get the 0.25% tax rate?",
    answer: "Yes. PSEB registration plus FBR filer status and receipt via approved banking channels qualify for the 0.25% rate.",
  },
  {
    question: "When is the tax return deadline for freelancers in Pakistan?",
    answer: "September 30 each year. File via the FBR IRIS portal.",
  },
];

export default function FreelancerTaxContent() {
  return (
    <section className="px-[20px] sm:px-[36px] mt-12 space-y-8">
      {/* How to Use */}
      <div>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2 text-[rgba(230,227,219,0.6)]">
          <li>Enter your income and select monthly or yearly.</li>
          <li>Choose your FBR filer status and PSEB registration.</li>
          <li>Click Calculate — your instant tax breakdown appears.</li>
        </ol>
      </div>

      {/* Tool Description */}
      <div>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Pakistan Freelancer Tax Calculator 2025‑26</h2>
        <p className="text-[rgba(230,227,219,0.6)] mb-4">
          Pakistan's freelancing sector is booming, with thousands earning through platforms
          like Upwork, Fiverr, and direct client contracts. Calculating the correct income tax for
          freelance earnings is essential for staying compliant with the Federal Board of Revenue (FBR).
          This <strong>Pakistan Freelancer Tax Calculator</strong> provides an instant estimate based on the latest 2025‑26 tax rules.
        </p>
        <p className="text-[rgba(230,227,219,0.6)] mb-4">
          If you are a PSEB‑registered freelancer and a regular FBR filer, export‑related
          income is taxed at a reduced rate of <strong>0.25 %</strong> under Section 154A.
          Non‑registered filers who are still on the FBR Active Taxpayer List pay <strong>1 %</strong>,
          while non‑filers face a <strong>2 %</strong> rate due to penalty provisions.
          The calculator automatically selects the appropriate rate based on your selections and shows both annual and monthly tax amounts, as well as net income after tax.
        </p>
        <p className="text-[rgba(230,227,219,0.6)]">
          This tool does not store any personal data; it simply performs the calculation
          locally in your browser. For local services (in‑country freelance work) the
          standard FBR progressive slabs apply, which are displayed in the table below.
        </p>
      </div>

      {/* Tax Rate Table */}
      <div>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Freelancer Tax Rates 2025‑26 at a Glance</h2>
        <table className="w-full border-collapse">
          <thead className="bg-[#1a1c24] text-[#e6e3db]">
            <tr>
              <th className="p-2 text-left">Freelancer Type</th>
              <th className="p-2 text-left">FBR Status</th>
              <th className="p-2 text-left">Tax Rate</th>
            </tr>
          </thead>
          <tbody className="text-[rgba(230,227,219,0.6)]">
            <tr className="border-t border-[rgba(255,255,255,0.07)]">
              <td className="p-2">PSEB Registered</td>
              <td className="p-2">Filer</td>
              <td className="p-2">0.25 %</td>
            </tr>
            <tr className="border-t border-[rgba(255,255,255,0.07)]">
              <td className="p-2">Not PSEB Registered</td>
              <td className="p-2">Filer</td>
              <td className="p-2">1 %</td>
            </tr>
            <tr className="border-t border-[rgba(255,255,255,0.07)]">
              <td className="p-2">Not PSEB Registered</td>
              <td className="p-2">Non‑Filer</td>
              <td className="p-2">2 %</td>
            </tr>
            <tr className="border-t border-[rgba(255,255,255,0.07)]">
              <td className="p-2">Local Services</td>
              <td className="p-2">Any</td>
              <td className="p-2">Standard Business Slabs</td>
            </tr>
          </tbody>
        </table>
        <p className="text-[rgba(230,227,219,0.6)] mt-2 text-sm">
          *Rates apply to foreign export income received through approved banking channels (Section 154A, Income Tax Ordinance 2001).*
        </p>
      </div>

      {/* FAQ Accordion */}
      <FAQAccordion items={faqItems} />
    </section>
  );
}
