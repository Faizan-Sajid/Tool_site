"use client";

import React, { useState } from "react";
import { RotateCcw, Wallet, Users, Landmark, TrendingUp } from "lucide-react";

export default function EpfCalculator() {
  // EPF Constants
  const EPF_RATES = {
    // Malaysian / PR — under 60 (full standard rates)
    malaysian: {
      employee: 0.11,
      employer_low: 0.13,      // salary <= RM5,000
      employer_high: 0.12,     // salary > RM5,000
      salary_threshold: 5000,
    },

    // Age 60 and above — MANDATORY default rates
    // Employee: 0% (no deduction), Employer: 4% only
    age_60_plus: {
      employee: 0.00,
      employer: 0.04,
    },

    // Foreign worker — Third Schedule Part F, mandatory from October 2025
    foreign: {
      employee: 0.02,
      employer: 0.02,
    },
  } as const;

  // Validation State Type
  interface ValidationState {
    salary: string | null;
    age: string | null;
    balance: string | null;
    salaryWarning: string | null;
    ageTip: string | null;
  }

  // Input State
  const [employeeType, setEmployeeType] = useState<keyof typeof EPF_RATES>("malaysian");
  const [monthlySalary, setMonthlySalary] = useState<string>("");
  const [currentBalance, setCurrentBalance] = useState<string>("");
  const [currentAge, setCurrentAge] = useState<string>("");

  // Calculation Interfaces
  interface EPFResult {
    employeeShare: number;
    employerShare: number;
    totalMonthly: number;
  }

  interface RetirementResult {
    projectedBalance: number;
    yearsToRetirement: number;
    monthsToRetirement: number;
  }

  // ─── HELPERS ──────────────────────────────────────────────────

  // Format as Malaysian Ringgit — no cents, comma-separated thousands
  const formatRM = (amount: number): string => {
    if (amount === 0) return "0";
    return new Intl.NumberFormat("en-MY", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // ─── CALCULATION ENGINE ───────────────────────────────────────

  const calculateEPF = (salary: number, type: keyof typeof EPF_RATES): EPFResult => {
    if (!salary || salary <= 0) {
      return { employeeShare: 0, employerShare: 0, totalMonthly: 0 };
    }

    let employeeShare = 0;
    let employerShare = 0;

    if (type === "malaysian") {
      const ratesMalaysian = EPF_RATES.malaysian;
      employeeShare = Math.ceil(salary * ratesMalaysian.employee);
      const employerRate = salary <= ratesMalaysian.salary_threshold ? ratesMalaysian.employer_low : ratesMalaysian.employer_high;
      employerShare = Math.ceil(salary * employerRate);
    } else if (type === "age_60_plus") {
      const rates60 = EPF_RATES.age_60_plus;
      employeeShare = Math.ceil(salary * rates60.employee);
      employerShare = Math.ceil(salary * rates60.employer);
    } else if (type === "foreign") {
      const ratesForeign = EPF_RATES.foreign;
      employeeShare = Math.max(1, Math.ceil(salary * ratesForeign.employee));
      employerShare = Math.max(1, Math.ceil(salary * ratesForeign.employer));
    }

    return {
      employeeShare,
      employerShare,
      totalMonthly: employeeShare + employerShare,
    };
  };

  const calculateRetirement = (
    balance: number,
    totalMonthly: number,
    age: number
  ): RetirementResult => {
    if (age <= 0 || age >= 55) {
      return {
        projectedBalance: balance,
        yearsToRetirement: 0,
        monthsToRetirement: 0,
      };
    }

    const annualDividend = 0.0615;
    const monthlyRate = annualDividend / 12;
    const yearsToRetirement = 55 - age;
    const n = yearsToRetirement * 12; // total months

    // Future value of existing balance
    const fvCurrentBalance = balance * Math.pow(1 + monthlyRate, n);

    // Future value of monthly contributions (annuity)
    const fvContributions =
      totalMonthly * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate);

    return {
      projectedBalance: Math.round(fvCurrentBalance + fvContributions),
      yearsToRetirement,
      monthsToRetirement: n,
    };
  };

  // ─── LIVE CALCULATION ─────────────────────────────────────────

  const salaryNum = parseFloat(monthlySalary.replace(/,/g, "")) || 0;
  const balanceNum = parseFloat(currentBalance.replace(/,/g, "")) || 0;
  const ageNum = parseInt(currentAge) || 0;

  // Validation Logic
  const validation: ValidationState = {
    salary: null,
    age: null,
    balance: null,
    salaryWarning: null,
    ageTip: null,
  };

  if (!monthlySalary || monthlySalary === "" || salaryNum === 0) {
    validation.salary = "Please enter a monthly salary";
  } else if (salaryNum < 0) {
    validation.salary = "Salary cannot be negative";
  } else if (salaryNum > 999999) {
    validation.salary = "Please enter a valid salary amount";
  } else if (salaryNum < 1700) {
    validation.salaryWarning = "Below Malaysia minimum wage of RM 1,700/month (2026)";
  }

  if (currentAge !== "") {
    if (ageNum < 14) {
      validation.age = "Minimum EPF membership age is 14";
    } else if (ageNum > 75) {
      validation.age = "Maximum EPF contribution age is 75";
    } else if (ageNum >= 55 && ageNum <= 59 && employeeType !== "malaysian") {
      validation.ageTip = "For age 55–59, select Malaysian / PR — rates are unchanged";
    } else if (ageNum >= 60 && employeeType !== "age_60_plus") {
      validation.ageTip = "You entered age 60+. Consider switching to Age 60 & Above.";
    }
  }

  if (currentBalance !== "" && balanceNum < 0) {
    validation.balance = "Balance cannot be negative";
  }

  const isCalculationBlocked = !!validation.salary;
  const epfResult = !isCalculationBlocked ? calculateEPF(salaryNum, employeeType) : { employeeShare: 0, employerShare: 0, totalMonthly: 0 };
  const estimatedTakeHome = salaryNum - epfResult.employeeShare;
  const retirementResult = !isCalculationBlocked ? calculateRetirement(balanceNum, epfResult.totalMonthly, ageNum) : { projectedBalance: 0, yearsToRetirement: 0, monthsToRetirement: 0 };

  const handleReset = () => {
    setEmployeeType("malaysian");
    setMonthlySalary("");
    setCurrentBalance("");
    setCurrentAge("");
  };

  const getEmployerSubtext = () => {
    if (isCalculationBlocked) return "Employer contribution";
    if (employeeType === "foreign") return "2% mandatory — effective Oct 2025";
    if (employeeType === "age_60_plus") return "4% employer only — no employee deduction";
    if (salaryNum <= 5000) return "13% rate — salary ≤ RM5,000";
    return "12% rate — salary > RM5,000";
  };

  return (
    <div
      id="epf-calculator"
      role="region"
      aria-label="Malaysia EPF Contribution Calculator"
      className="max-w-[860px] px-4 sm:px-6 lg:px-8 py-10 mx-auto"
    >
      <div className="bg-[#131620] border border-[rgba(255,255,255,0.07)] rounded-[24px] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#c9a84c]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#c9a84c]/5 rounded-full blur-3xl" />

        <div className="grid grid-cols-1 gap-8 mb-10 relative z-10">
          {/* Employee Type Toggle */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <Users className="w-4 h-4 text-[#c9a84c]" />Employee Type
            </label>
            <div className="flex flex-wrap gap-2 p-1 bg-[#0c0e16] rounded-xl border border-[rgba(255,255,255,0.07)] sm:flex-nowrap">
              {(
                [
                  { id: "malaysian", label: "Malaysian / PR" },
                  { id: "age_60_plus", label: "Age 60 & Above" },
                  { id: "foreign", label: "Foreign Worker" },
                ] as const
              ).map((type) => (
                <button
                  key={type.id}
                  type="button"
                  aria-pressed={employeeType === type.id}
                  onClick={() => setEmployeeType(type.id)}
                  className={`flex-1 min-h-[44px] py-2 px-3 text-[10px] font-bold rounded-lg transition-all ${
                    employeeType === type.id
                      ? "bg-[#c9a84c] text-[#0c0e16]"
                      : "text-[#87847d] hover:text-white"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-[#3e3c38] italic">
              Age 55–59? Select Malaysian / PR — contribution rates only change at age 60.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Monthly Salary */}
            <div className="space-y-3">
              <label htmlFor="monthly-salary" className="text-sm font-medium text-[#87847d] flex items-center gap-2">
                <Wallet className="w-4 h-4 text-[#c9a84c]" />Monthly Salary (RM)
              </label>
              <div className="relative group">
                <input
                  id="monthly-salary"
                  type="number"
                  inputMode="decimal"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(e.target.value)}
                  placeholder="e.g. 5,000"
                  aria-label="Monthly gross salary in Malaysian Ringgit"
                  className={`w-full min-h-[44px] h-14 bg-[#0c0e16] border rounded-[14px] px-5 pr-14 text-[#e6e3db] focus:outline-none transition-all group-hover:border-[rgba(255,255,255,0.15)] ${
                    validation.salary ? "border-red-500 ring-1 ring-red-500/20" : 
                    validation.salaryWarning ? "border-yellow-500 ring-1 ring-yellow-500/20" : 
                    monthlySalary !== "" ? "border-green-500/40" : "border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]"
                  }`}
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#3e3c38]">RM</span>
              </div>
              {validation.salary && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1">⚠ {validation.salary}</p>}
              {validation.salaryWarning && <p className="text-[10px] text-yellow-500 mt-1 flex items-center gap-1">⚠ {validation.salaryWarning}</p>}
              {!validation.salary && !validation.salaryWarning && (
                <p className="text-[10px] text-[#3e3c38]">Enter gross monthly salary in Malaysian Ringgit</p>
              )}
            </div>

            {/* Current EPF Balance */}
            <div className="space-y-3">
              <label htmlFor="current-balance" className="text-sm font-medium text-[#87847d] flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#c9a84c]" />Current EPF Balance (RM)
              </label>
              <div className="relative group">
                <input
                  id="current-balance"
                  type="number"
                  inputMode="decimal"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(e.target.value)}
                  placeholder="e.g. 50,000"
                  className={`w-full min-h-[44px] h-14 bg-[#0c0e16] border rounded-[14px] px-5 pr-14 text-[#e6e3db] focus:outline-none transition-all group-hover:border-[rgba(255,255,255,0.15)] ${
                    validation.balance ? "border-red-500 ring-1 ring-red-500/20" : "border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]"
                  }`}
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#3e3c38]">RM</span>
              </div>
              {validation.balance ? (
                <p className="text-[10px] text-red-500 mt-1">⚠ {validation.balance}</p>
              ) : (
                <p className="text-[10px] text-[#3e3c38]">Optional — used for retirement projection</p>
              )}
            </div>

            {/* Current Age */}
            <div className="space-y-3">
              <label htmlFor="current-age" className="text-sm font-medium text-[#87847d] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#c9a84c]" />Current Age
              </label>
              <div className="relative group">
                <input
                  id="current-age"
                  type="number"
                  inputMode="numeric"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                  placeholder="e.g. 30"
                  className={`w-full min-h-[44px] h-14 bg-[#0c0e16] border rounded-[14px] px-5 text-[#e6e3db] focus:outline-none transition-all group-hover:border-[rgba(255,255,255,0.15)] ${
                    validation.age ? "border-red-500 ring-1 ring-red-500/20" : "border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]"
                  }`}
                />
              </div>
              {validation.age && <p className="text-[10px] text-red-500 mt-1">⚠ {validation.age}</p>}
              {validation.ageTip && <p className="text-[10px] text-blue-400 mt-1">{validation.ageTip}</p>}
              {!validation.age && !validation.ageTip && (
                <p className="text-[10px] text-[#3e3c38]">Used to calculate years to retirement at age 55</p>
              )}
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-10">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-8 h-14 bg-transparent border border-[rgba(255,255,255,0.07)] text-[#87847d] hover:text-[#e6e3db] hover:bg-[rgba(255,255,255,0.02)] font-medium rounded-[14px] flex items-center justify-center gap-2 transition-all min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4" />Reset
          </button>
        </div>

        {/* RESULT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {/* Employee Contribution */}
          <div className="bg-[#0c0e16] p-4 sm:p-6 rounded-[20px] border border-[rgba(255,255,255,0.03)] group hover:border-[#c9a84c]/20 transition-all">
            <p className="text-[10px] uppercase tracking-wider text-[#3e3c38] font-bold mb-2">Employee Contribution</p>
            <div className="flex items-baseline gap-2">
              <span className="text-[#e6e3db] text-2xl sm:text-3xl font-bold">
                {isCalculationBlocked ? "RM —" : `RM ${formatRM(epfResult.employeeShare)}`}
              </span>
            </div>
            <p className="text-[10px] text-[#87847d] mt-2 italic">Deducted from your salary monthly</p>
          </div>

          {/* Estimated Take-Home Salary */}
          <div className="bg-[#0c0e16] p-4 sm:p-6 rounded-[20px] border border-[rgba(255,255,255,0.03)] group hover:border-[#c9a84c]/20 transition-all">
            <p className="text-[10px] uppercase tracking-wider text-[#3e3c38] font-bold mb-2">Estimated Take-Home Salary</p>
            <div className="flex items-baseline gap-2">
              <span className="text-[#e6e3db] text-2xl sm:text-3xl font-bold">
                {isCalculationBlocked ? "RM —" : `RM ${formatRM(estimatedTakeHome)}`}
              </span>
            </div>
            <p className="text-[10px] text-[#87847d] mt-2 italic">Before PCB, SOCSO, EIS and other deductions</p>
          </div>

          {/* Employer Contribution */}
          <div className="bg-[#0c0e16] p-4 sm:p-6 rounded-[20px] border border-[rgba(255,255,255,0.03)] group hover:border-[#c9a84c]/20 transition-all">
            <p className="text-[10px] uppercase tracking-wider text-[#3e3c38] font-bold mb-2">Employer Contribution</p>
            <div className="flex items-baseline gap-2">
              <span className="text-[#e6e3db] text-2xl sm:text-3xl font-bold">
                {isCalculationBlocked ? "RM —" : `RM ${formatRM(epfResult.employerShare)}`}
              </span>
            </div>
            <p className="text-[10px] text-[#87847d] mt-2 italic">{getEmployerSubtext()}</p>
          </div>

          {/* Total Monthly EPF */}
          <div className="bg-[rgba(201,168,76,0.05)] border border-[#c9a84c]/30 p-4 sm:p-6 rounded-[20px] relative overflow-hidden group shadow-lg shadow-[#c9a84c]/5">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#c9a84c]" />
            <p className="text-[10px] uppercase tracking-wider text-[#c9a84c] font-bold mb-2">Total Monthly EPF</p>
            <div className="flex items-baseline gap-2">
              <span className="text-[#e6e3db] text-2xl sm:text-3xl font-bold">
                {isCalculationBlocked ? "RM —" : `RM ${formatRM(epfResult.totalMonthly)}`}
              </span>
            </div>
            <p className="text-[10px] text-[#87847d] mt-2 italic">Combined employee + employer</p>
          </div>

          {/* Projected Balance */}
          <div className="bg-[#0c0e16] p-4 sm:p-6 rounded-[20px] border border-[rgba(255,255,255,0.03)] group hover:border-[#c9a84c]/20 transition-all">
            <p className="text-[10px] uppercase tracking-wider text-[#3e3c38] font-bold mb-2">EPF Balance at 55</p>
            <div className="flex items-baseline gap-2">
              <span className="text-[#e6e3db] text-2xl sm:text-3xl font-bold">
                {isCalculationBlocked || ageNum >= 55 || ageNum < 14 || currentAge === "" ? "RM —" : `RM ${formatRM(retirementResult.projectedBalance)}`}
              </span>
            </div>
            <p className="text-[10px] text-[#87847d] mt-2 italic">
              {isCalculationBlocked ? "Enter salary to project" :
               currentAge === "" ? "Enter age to project" :
               ageNum >= 55 ? "Full withdrawal available" :
               ageNum < 14 ? "Age < 14" :
               `In ${retirementResult.yearsToRetirement} years @ 6.15%`}
            </p>
          </div>
        </div>

        {/* Age 60+ Note */}
        {employeeType === "age_60_plus" && !isCalculationBlocked && (
          <p className="text-[10px] mt-4 text-[#87847d] italic text-center animate-in fade-in slide-in-from-top-1 duration-500">
            Mandatory rate: employer pays 4% only — no salary deduction. 
            Voluntary excess (5.5% employee / 6% employer) available by mutual agreement with employer.
          </p>
        )}

        {/* Disclaimer */}
        <p className="mt-10 text-[10px] leading-relaxed text-[#3e3c38] italic text-center max-w-xl mx-auto">
          Contributions calculated using statutory percentage rates. For monthly salaries under RM20,000, actual payroll amounts follow EPF Third Schedule bracket values and may differ slightly. Always verify with your employer or KWSP official portal.
        </p>
      </div>
    </div>
  );
}
