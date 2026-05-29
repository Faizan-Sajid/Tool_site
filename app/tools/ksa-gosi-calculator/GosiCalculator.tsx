"use client";

import React, { useState } from "react";

export default function GosiCalculator() {
  const [nationality, setNationality] = useState<"saudi" | "non-saudi">("saudi");
  const [basicSalary, setBasicSalary] = useState<string>("");
  const [housingAllowance, setHousingAllowance] = useState<string>("");
  const [errors, setErrors] = useState<{ basicSalary?: string }>({});

  // Placeholder for calculation results
  const [result, setResult] = useState({
    contributoryWage: 0,
    employeeDeduction: 0,
    employerContribution: 0,
    totalGosi: 0,
    netSalary: 0,
  });

  const calculateGosi = () => {
    // ── ADD 1: VALIDATION ──
    const newErrors: { basicSalary?: string } = {};
    if (!basicSalary || parseFloat(basicSalary) <= 0) {
      newErrors.basicSalary = "Please enter a valid basic salary greater than 0";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const basic = parseFloat(basicSalary) || 0;
    const housing = parseFloat(housingAllowance) || 0;
    const totalWage = basic + housing;

    // Rule 1: Contributory Wage capped at SAR 45,000
    const contributoryWage = Math.min(totalWage, 45000);

    let employeeDeduction = 0;
    let employerContribution = 0;

    if (nationality === "saudi") {
      // Rule 2: Saudi Nationality
      // Employee: 10% Annuity (pension) + 0.75% SANED = 10.75%
      employeeDeduction = contributoryWage * 0.1075;
      // Employer: 10% Annuity + 2% Occupational Hazards + 0.75% SANED = 12.75%
      employerContribution = contributoryWage * 0.1275;
    } else {
      // Rule 3: Non-Saudi (Expat)
      // Employee: 0%
      employeeDeduction = 0;
      // Employer: 2% Hazards only
      employerContribution = contributoryWage * 0.02;
    }

    setResult({
      contributoryWage,
      employeeDeduction,
      employerContribution,
      totalGosi: employeeDeduction + employerContribution,
      netSalary: totalWage - employeeDeduction,
    });
  };

  // ── ADD 2: RESET FUNCTION ──
  const handleReset = () => {
    setNationality("saudi");
    setBasicSalary("");
    setHousingAllowance("");
    setErrors({});
    setResult({
      contributoryWage: 0,
      employeeDeduction: 0,
      employerContribution: 0,
      totalGosi: 0,
      netSalary: 0,
    });
  };

  return (
    <div className="max-w-[860px] px-[20px] py-[36px] sm:px-[36px] sm:py-[56px]">

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Input Section */}
        <section className="space-y-6 rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-6 sm:p-8">
          <div className="space-y-4">
            {/* Nationality Toggle */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#3e3c38]">
                Nationality
              </label>
              <div className="flex gap-2 p-1 bg-[#0c0e16] rounded-lg border border-[rgba(255,255,255,0.07)]">
                <button
                  onClick={() => setNationality("saudi")}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                    nationality === "saudi"
                      ? "bg-[#c9a84c] text-[#0c0e16]"
                      : "text-[#87847d] hover:text-white"
                  }`}
                >
                  Saudi National
                </button>
                <button
                  onClick={() => setNationality("non-saudi")}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                    nationality === "non-saudi"
                      ? "bg-[#c9a84c] text-[#0c0e16]"
                      : "text-[#87847d] hover:text-white"
                  }`}
                >
                  Expat (Non-Saudi)
                </button>
              </div>
            </div>

            {/* ── ADD 3: RATES INFO BOX ── */}
            {nationality === "saudi" ? (
              <>
                <div className="rounded-lg bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] p-3 text-xs text-[#87847d] space-y-1.5">
                  <div className="flex justify-between">
                    <span>Employee (Annuity + SANED)</span>
                    <span className="text-[#c9a84c] font-bold">10.75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Employer (Annuity + Hazards + SANED)</span>
                    <span className="text-[#e6e3db] font-bold">12.75%</span>
                  </div>
                  <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-1.5">
                    <span>Wage Cap</span>
                    <span className="text-[#e6e3db] font-bold">SAR 45,000</span>
                  </div>
                </div>
                <p className="text-[10px] text-[#3e3c38] mt-2 leading-relaxed">
                  Rates apply to employees registered with GOSI on or after July 3, 2024.
                  Employees registered before this date pay 9.75% (employee) and 11.75% (employer).
                </p>
              </>
            ) : (
              <div className="rounded-lg bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] p-3 text-xs text-[#87847d] space-y-1.5">
                <div className="flex justify-between">
                  <span>Employee deduction</span>
                  <span className="text-[#2dd4a0] font-bold">0%</span>
                </div>
                <div className="flex justify-between">
                  <span>Employer (Hazards only)</span>
                  <span className="text-[#e6e3db] font-bold">2%</span>
                </div>
                <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-1.5">
                  <span>Wage Cap</span>
                  <span className="text-[#e6e3db] font-bold">SAR 45,000</span>
                </div>
              </div>
            )}


            {/* Basic Salary Input */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#3e3c38]">
                Basic Salary (SAR)
              </label>
              <input
                type="number"
                value={basicSalary}
                onChange={(e) => setBasicSalary(e.target.value)}
                placeholder="e.g. 10000"
                className={`w-full h-11 rounded-lg border bg-[#0c0e16] px-4 text-sm text-white placeholder:text-[#3e3c38] focus:border-[#c9a84c] focus:outline-none transition-all ${
                  errors.basicSalary ? "border-red-500/50" : "border-[rgba(255,255,255,0.1)]"
                }`}
              />
              {errors.basicSalary && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <span>⚠</span> {errors.basicSalary}
                </p>
              )}
            </div>

            {/* Housing Allowance Input */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#3e3c38]">
                Housing Allowance (SAR)
              </label>
              <input
                type="number"
                value={housingAllowance}
                onChange={(e) => setHousingAllowance(e.target.value)}
                placeholder="e.g. 2500"
                className="w-full h-11 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#0c0e16] px-4 text-sm text-white placeholder:text-[#3e3c38] focus:border-[#c9a84c] focus:outline-none transition-all"
              />
            </div>

            {/* Calculation Button */}
            <button
              onClick={calculateGosi}
              className="w-full h-11 mt-4 rounded-lg bg-[#c9a84c] text-[#0c0e16] text-sm font-bold tracking-tight transition-all hover:bg-[#d4b96d] hover:scale-[1.01] active:scale-[0.99]"
            >
              Calculate Contribution
            </button>

            {/* ── ADD 2: RESET BUTTON ── */}
            <button
              onClick={handleReset}
              type="button"
              className="w-full h-11 mt-2 rounded-lg border border-[rgba(255,255,255,0.07)] text-[#87847d] text-sm font-medium hover:text-[#e6e3db] hover:border-[rgba(255,255,255,0.15)] transition-all"
            >
              Reset
            </button>
          </div>
        </section>

        {/* Result Section */}
        <section className="space-y-6">
          <div className="rounded-[14px] border border-[#c9a84c]/20 bg-[#131620] p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a84c]" />
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-[#c9a84c]">
              Calculation Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.07)]">
                <span className="text-sm text-[#87847d]">Contributory Wage</span>
                <span className="text-sm font-bold text-white">SAR {result.contributoryWage.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.07)]">
                <span className="text-sm text-[#87847d]">Employee Deduction</span>
                <span className="text-sm font-bold text-[#c9a84c]">SAR {result.employeeDeduction.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.07)]">
                <span className="text-sm text-[#87847d]">Employer Contribution</span>
                <span className="text-sm font-bold text-white">SAR {result.employerContribution.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-[#87847d]">Total GOSI Contribution</span>
                <span className="text-sm font-bold text-white">SAR {result.totalGosi.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-[#0c0e16] p-4 text-center border border-[rgba(255,255,255,0.07)]">
              <span className="block text-[10px] uppercase tracking-widest text-[#87847d] mb-1">Estimated Net Salary</span>
              <span className="text-2xl font-bold text-[#c9a84c]">SAR {result.netSalary.toLocaleString()}</span>
            </div>
          </div>
        </section>
      </div>

      {/* SEO Content Section */}
      <section className="mt-20 space-y-12">
        <div>
          <h2 className="mb-6 flex items-center gap-3 text-lg font-bold text-[#e6e3db]">
            <span className="h-[2px] w-8 bg-[#c9a84c]" />
            How it Works
          </h2>
          <div className="prose prose-invert max-w-none text-sm leading-relaxed text-[#87847d] space-y-4">
            <p>
              The GOSI (General Organization for Social Insurance) contribution is calculated based on the contributory wage, which includes the basic salary and housing allowance.
            </p>
            <p>
              For Saudi nationals, the contribution rates are higher as they include pension and unemployment insurance (SANED). Expats contribute only to occupational hazard insurance.
            </p>
            <p>
              The contributory wage is capped at SAR 45,000 per month. Any amount exceeding this cap is not subject to GOSI deductions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
