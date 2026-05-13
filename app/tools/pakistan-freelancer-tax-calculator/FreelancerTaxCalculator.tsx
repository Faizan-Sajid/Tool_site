"use client";
import React, { useState, useRef, useEffect } from "react";
import { Calculator, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper to format numbers as PKR with commas
const fmt = (n: number) => new Intl.NumberFormat("en-PK").format(Math.round(n));

export default function FreelancerTaxCalculator() {
  // ----- Input states -----
  const [income, setIncome] = useState<string>(""); // raw user input
  const [isYearly, setIsYearly] = useState<boolean>(false); // false = monthly, true = yearly
  const [isFiler, setIsFiler] = useState<boolean>(true); // FBR filer?
  const [isPSEB, setIsPSEB] = useState<boolean>(false); // PSEB registration?

  // ----- Result handling -----
  const [result, setResult] = useState<null | {
    annualIncome: number;
    taxRate: number; // decimal (e.g., 0.0025)
    annualTax: number;
    monthlyTax: number;
    netAnnual: number;
    netMonthly: number;
  }>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Close modal on Escape key
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) setShowModal(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showModal]);

  const calculate = () => {
    const cleaned = income.replace(/,/g, "");
    const amount = Number(cleaned);
    if (!income || isNaN(amount) || amount <= 0) {
      setError("Please enter a positive numeric amount.");
      setShowModal(false);
      return;
    }
    setError("");

    const annualIncome = isYearly ? amount : amount * 12;
    let taxRate: number;
    if (!isFiler) {
      taxRate = 0.02; // 2% for non‑filers
    } else if (isPSEB) {
      taxRate = 0.0025; // 0.25% for PSEB‑registered filers
    } else {
      taxRate = 0.01; // 1% for regular filers
    }
    const annualTax = annualIncome * taxRate;
    const monthlyTax = annualTax / 12;
    const netAnnual = annualIncome - annualTax;
    const netMonthly = netAnnual / 12;

    setResult({
      annualIncome,
      taxRate,
      annualTax,
      monthlyTax,
      netAnnual,
      netMonthly,
    });
    setShowModal(true);
  };

  const reset = () => {
    setIncome("");
    setIsYearly(false);
    setIsFiler(true);
    setIsPSEB(false);
    setResult(null);
    setShowModal(false);
    setError("");
  };

  // Helper to apply selected style to toggle buttons
  const toggleBtnClass = (selected: boolean) =>
    `w-1/2 min-h-[44px] text-sm md:text-base font-medium transition-colors focus:outline-none active:scale-95 ${
      selected
        ? "bg-green-600 text-white"
        : "bg-white text-gray-600 hover:bg-gray-100"
    }`;

  return (
    // Outer responsive wrapper
    <section className="min-h-screen bg-[#0d0f14] text-[#1e293b] flex items-center justify-center px-4 py-6 md:px-8 md:py-10 lg:py-12">
      {/* Card container – centered, max width, responsive rounding */}
      <div className="w-full max-w-2xl bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <header className="border-b border-gray-200 p-4 md:p-6">
          <h1 className="text-xl md:text-2xl font-bold text-[#0f172a]">Pakistan Freelancer Tax Calculator 2026</h1>
          <p className="mt-1 text-sm md:text-base text-[#64748b]">Instant tax estimate based on FBR & PSEB rules</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">🟢 Updated: Budget 2025–26</span>
        </header>

        {/* Form */}
        <div className="p-4 md:p-6 space-y-5">
          {/* Income input with PKR prefix */}
          <div>
            <label className="block text-sm font-medium text-[#0f172a] mb-1">Income Amount (PKR)</label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">PKR</span>
              <input
                type="text"
                inputMode="numeric"
                value={income}
                onChange={e => setIncome(e.target.value)}
                placeholder="e.g. 150000"
                className={`block w-full pl-12 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 ${error ? "border-red-500" : "border-[#e2e8f0]"}`}          
              />
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          {/* Income Period toggle */}
          <div>
            <span className="block text-sm font-medium text-[#0f172a] mb-1">Income Period</span>
            <div className="flex border rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => setIsYearly(false)}
                className={toggleBtnClass(!isYearly)}
                aria-label="Monthly income"
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsYearly(true)}
                className={toggleBtnClass(isYearly)}
                aria-label="Yearly income"
              >
                Yearly
              </button>
            </div>
          </div>

          {/* FBR Filer toggle */}
          <div>
            <span className="block text-sm font-medium text-[#0f172a] mb-1">FBR Filer</span>
            <div className="flex border rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => setIsFiler(true)}
                className={toggleBtnClass(isFiler)}
                aria-label="Yes, I am an active FBR filer"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setIsFiler(false)}
                className={toggleBtnClass(!isFiler)}
                aria-label="No, I am not a filer"
              >
                No
              </button>
            </div>
          </div>

          {/* PSEB Registered toggle */}
          <div>
            <span className="block text-sm font-medium text-[#0f172a] mb-1">PSEB Registered</span>
            <div className="flex border rounded-full overflow-hidden">
              <button
                type="button"
                onClick={() => setIsPSEB(true)}
                className={toggleBtnClass(isPSEB)}
                aria-label="Yes, I am PSEB registered"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setIsPSEB(false)}
                className={toggleBtnClass(!isPSEB)}
                aria-label="No, I am not PSEB registered"
              >
                No
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-4 mt-4">
            <button
              onClick={calculate}
              className="flex-1 min-h-[48px] bg-green-600 hover:bg-green-700 text-white font-bold rounded-md transition-colors active:scale-95"
            >
              Calculate
            </button>
            <button
              onClick={reset}
              className="flex-1 min-h-[48px] bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md active:scale-95"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      <AnimatePresence>
        {showModal && result && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] relative"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              ref={modalRef}
            >
              {/* Drag handle for mobile bottom sheet */}
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden" />

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ×
              </button>

              <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Tax Summary
              </h2>

              <table className="w-full text-sm sm:text-base">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 font-medium">Annual Income</td>
                    <td className="py-2 text-right text-green-700">PKR {fmt(result.annualIncome)}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Tax Rate Applied</td>
                    <td className="py-2 text-right text-green-700">{(result.taxRate * 100).toFixed(2)}%</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Annual Tax</td>
                    <td className="py-2 text-right text-green-700">PKR {fmt(result.annualTax)}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Monthly Tax</td>
                    <td className="py-2 text-right text-green-700">PKR {fmt(result.monthlyTax)}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Net Annual Income</td>
                    <td className="py-2 text-right text-green-700">PKR {fmt(result.netAnnual)}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Net Monthly Income</td>
                    <td className="py-2 text-right text-green-700">PKR {fmt(result.netMonthly)}</td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-4 text-xs text-gray-500">
                ℹ️ Tax is deducted at source by banks for export‑related earnings. Local income follows standard FBR slabs.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
