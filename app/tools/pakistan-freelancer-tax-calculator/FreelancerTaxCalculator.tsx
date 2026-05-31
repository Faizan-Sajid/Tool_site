"use client";
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fmt = (n: number) => new Intl.NumberFormat("en-PK").format(Math.round(n));

export default function FreelancerTaxCalculator() {
  const [income, setIncome] = useState<string>("");
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [isFiler, setIsFiler] = useState<boolean>(true);
  const [isPSEB, setIsPSEB] = useState<boolean>(false);
  const [result, setResult] = useState<null | {
    annualIncome: number;
    taxRate: number;
    annualTax: number;
    monthlyTax: number;
    netAnnual: number;
    netMonthly: number;
  }>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
      taxRate = 0.02;
    } else if (isPSEB) {
      taxRate = 0.0025;
    } else {
      taxRate = 0.01;
    }
    const annualTax = annualIncome * taxRate;
    const monthlyTax = annualTax / 12;
    const netAnnual = annualIncome - annualTax;
    const netMonthly = netAnnual / 12;

    setResult({ annualIncome, taxRate, annualTax, monthlyTax, netAnnual, netMonthly });
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

  const toggleBtnClass = (selected: boolean) =>
    `w-1/2 min-h-[44px] text-sm md:text-base font-medium transition-colors focus:outline-none active:scale-95 ${
      selected
        ? "bg-[#c9a84c] text-[#0c0e16]"
        : "bg-[#0c0e16] text-[#87847d] hover:text-[#e6e3db]"
    }`;

  return (
    /* ✅ FIX: Removed min-h-screen — was causing Google crawler confusion */
    <section className="bg-[#0d0f14] text-[#1e293b] flex items-center justify-center px-[20px] sm:px-[36px] py-8">
      <div className="w-full max-w-2xl bg-[#131620] border border-[rgba(255,255,255,0.07)] rounded-2xl shadow-xl overflow-hidden">

        {/* ✅ FIX: Changed h1 → h2 to remove duplicate H1 — page.tsx already has the H1 */}
        <header className="border-b border-[rgba(255,255,255,0.07)] p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#e6e3db]">
            Pakistan Freelancer Tax Calculator 2026
          </h2>
          <p className="mt-1 text-sm text-[#87847d]">Instant tax estimate based on FBR &amp; PSEB rules</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-[#2dd4a0] bg-[rgba(45,212,160,0.08)] border border-[rgba(45,212,160,0.15)] rounded-full">
            🟢 Updated: Finance Act 2025-26
          </span>
        </header>

        <div className="p-4 md:p-6 space-y-5">
          {/* Income input */}
          <div>
            <label className="block text-sm font-medium text-[#e6e3db] mb-1">Income Amount (PKR)</label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#3e3c38] text-sm">PKR</span>
              <input
                type="text"
                inputMode="numeric"
                value={income}
                onChange={e => setIncome(e.target.value)}
                placeholder="e.g. 150000"
                className={`block w-full pl-12 pr-3 py-2.5 border rounded-lg bg-[#0c0e16] text-[#e6e3db] placeholder:text-[#3e3c38] focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition-all ${
                  error ? "border-red-500/50" : "border-[rgba(255,255,255,0.1)]"
                }`}
              />
            </div>
            {error && <p className="mt-1 text-sm text-red-400 flex items-center gap-1"><span>⚠</span> {error}</p>}
          </div>

          {/* Income Period */}
          <div>
            <span className="block text-sm font-medium text-[#e6e3db] mb-1">Income Period</span>
            <div className="flex border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden">
              <button type="button" onClick={() => setIsYearly(false)} className={toggleBtnClass(!isYearly)} aria-label="Monthly income">Monthly</button>
              <button type="button" onClick={() => setIsYearly(true)} className={toggleBtnClass(isYearly)} aria-label="Yearly income">Yearly</button>
            </div>
          </div>

          {/* FBR Filer */}
          <div>
            <span className="block text-sm font-medium text-[#e6e3db] mb-1">FBR Filer</span>
            <div className="flex border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden">
              <button type="button" onClick={() => setIsFiler(true)} className={toggleBtnClass(isFiler)} aria-label="Yes I am an active FBR filer">Yes</button>
              <button type="button" onClick={() => setIsFiler(false)} className={toggleBtnClass(!isFiler)} aria-label="No I am not a filer">No</button>
            </div>
          </div>

          {/* PSEB Registered */}
          <div>
            <span className="block text-sm font-medium text-[#e6e3db] mb-1">PSEB Registered</span>
            <div className="flex border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden">
              <button type="button" onClick={() => setIsPSEB(true)} className={toggleBtnClass(isPSEB)} aria-label="Yes I am PSEB registered">Yes</button>
              <button type="button" onClick={() => setIsPSEB(false)} className={toggleBtnClass(!isPSEB)} aria-label="No I am not PSEB registered">No</button>
            </div>
          </div>

          {/* Rate preview box */}
          <div className="rounded-lg bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] p-3 text-xs text-[#87847d] space-y-1.5">
            {!isFiler ? (
              <div className="flex justify-between"><span>Non-Filer Rate</span><span className="text-red-400 font-bold">2%</span></div>
            ) : isPSEB ? (
              <div className="flex justify-between"><span>PSEB Registered Rate</span><span className="text-[#2dd4a0] font-bold">0.25%</span></div>
            ) : (
              <div className="flex justify-between"><span>Non-PSEB Filer Rate</span><span className="text-[#c9a84c] font-bold">1%</span></div>
            )}
            <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-1.5">
              <span>Base</span><span className="text-[#e6e3db] font-bold">Foreign Remittance (PKR)</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-4 mt-4">
            <button
              type="button"
              onClick={calculate}
              className="flex-1 min-h-[48px] bg-[#c9a84c] hover:bg-[#d4b96d] text-[#0c0e16] font-bold rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={reset}
              className="flex-1 min-h-[48px] border border-[rgba(255,255,255,0.07)] text-[#87847d] hover:text-[#e6e3db] hover:border-[rgba(255,255,255,0.15)] font-medium rounded-lg transition-all"
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
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-[#131620] border border-[rgba(255,255,255,0.07)] w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] relative"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="w-12 h-1 bg-[rgba(255,255,255,0.1)] rounded-full mx-auto mb-4 sm:hidden" />
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-[#87847d] hover:text-[#e6e3db] text-xl"
                aria-label="Close"
              >×</button>

              <h3 className="text-xl font-semibold text-[#c9a84c] mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Tax Summary
              </h3>

              <div className="space-y-3">
                {[
                  { label: "Annual Income", value: `PKR ${fmt(result.annualIncome)}` },
                  { label: "Tax Rate Applied", value: `${(result.taxRate * 100).toFixed(2)}%` },
                  { label: "Annual Tax", value: `PKR ${fmt(result.annualTax)}`, highlight: true },
                  { label: "Monthly Tax", value: `PKR ${fmt(result.monthlyTax)}`, highlight: true },
                  { label: "Net Annual Income", value: `PKR ${fmt(result.netAnnual)}` },
                  { label: "Net Monthly Income", value: `PKR ${fmt(result.netMonthly)}` },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.05)]">
                    <span className="text-sm text-[#87847d]">{row.label}</span>
                    <span className={`text-sm font-bold ${row.highlight ? "text-[#c9a84c]" : "text-[#e6e3db]"}`}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-[#0c0e16] p-4 text-center border border-[rgba(255,255,255,0.07)]">
                <span className="block text-[10px] uppercase tracking-widest text-[#87847d] mb-1">Net Monthly Take-Home</span>
                <span className="text-2xl font-bold text-[#2dd4a0]">PKR {fmt(result.netMonthly)}</span>
              </div>

              <p className="mt-4 text-xs text-[#3e3c38] leading-relaxed">
                ℹ️ Tax is withheld at source by banks on export remittances. Local freelance income follows standard FBR income tax slabs. Consult a tax advisor for precise filing.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}