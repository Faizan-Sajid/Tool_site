"use client";

import React, { useState } from "react";
import { Calculator, RotateCcw, Calendar, Banknote, HelpCircle, MinusCircle, CheckCircle } from "lucide-react";

export default function GratuityCalculator() {
  // Form State
  const [basicSalary, setBasicSalary] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [unpaidLeaves, setUnpaidLeaves] = useState<string>("0");
  const [contractType, setContractType] = useState<string>("limited"); // "limited" | "unlimited"
  const [exitReason, setExitReason] = useState<string>("resigned"); // "resigned" | "terminated" | "completed" | "mutual"

  // Error State
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Results State
  const [results, setResults] = useState<{
    totalDays: number;
    years: number;
    months: number;
    remainingDays: number;
    amount21Days: number;
    amount30Days: number;
    totalAmount: number;
    isCapped: boolean;
    note?: string;
    isCalculated: boolean;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!basicSalary || parseFloat(basicSalary) <= 0) newErrors.basicSalary = "Please enter a valid basic salary.";
    if (!startDate) newErrors.startDate = "Start date is required.";
    if (!endDate) newErrors.endDate = "End date is required.";
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (end <= start) newErrors.endDate = "End date must be after start date.";
    }
    const leaves = parseInt(unpaidLeaves) || 0;
    if (leaves < 0) newErrors.unpaidLeaves = "Unpaid leaves cannot be negative.";
    if (startDate && endDate && !newErrors.endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = end.getTime() - start.getTime();
      const rawTotalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (leaves > rawTotalDays) newErrors.unpaidLeaves = "Unpaid leaves cannot exceed total service period.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateGratuity = () => {
    if (!validate()) { setResults(null); return; }
    const start = new Date(startDate);
    const end = new Date(endDate);
    const leaves = parseInt(unpaidLeaves) || 0;
    const diffTime = end.getTime() - start.getTime();
    const rawTotalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalDays = rawTotalDays - leaves;
    if (totalDays < 365) { alert("Employee is not entitled to gratuity if service is less than 1 year (365 days)."); setResults(null); return; }
    const salary = parseFloat(basicSalary);
    const dailyRate = salary / 30;
    const DAYS_IN_YEAR = 365.25;
    const FIVE_YEARS_DAYS = 5 * DAYS_IN_YEAR;
    const daysInFirstFive = Math.min(totalDays, FIVE_YEARS_DAYS);
    const daysBeyondFive = Math.max(0, totalDays - FIVE_YEARS_DAYS);
    const amount21Days = dailyRate * 21 * (daysInFirstFive / DAYS_IN_YEAR);
    const amount30Days = dailyRate * 30 * (daysBeyondFive / DAYS_IN_YEAR);
    let fullGratuity = amount21Days + amount30Days;
    // Unlimited contract sliding scale
    let note: string | undefined = undefined;
    if (contractType === "unlimited" && exitReason === "resigned") {
      const yearsOfService = totalDays / DAYS_IN_YEAR;
      if (yearsOfService < 1) { fullGratuity = 0; note = "Less than 1 year – no gratuity entitled."; }
      else if (yearsOfService <= 3) { fullGratuity *= 1 / 3; note = "Legacy unlimited contract – resignation 1‑3 years: 1/3 of full gratuity applied."; }
      else if (yearsOfService <= 5) { fullGratuity *= 2 / 3; note = "Legacy unlimited contract – resignation 3‑5 years: 2/3 of full gratuity applied."; }
      else { note = "Legacy unlimited contract – resignation 5+ years: full gratuity applied."; }
    }
    const capLimit = salary * 24;
    const isCapped = fullGratuity > capLimit;
    if (isCapped) fullGratuity = capLimit;
    const years = Math.floor(totalDays / DAYS_IN_YEAR);
    const remainingDaysAfterYears = totalDays % DAYS_IN_YEAR;
    const months = Math.floor(remainingDaysAfterYears / 30.4375);
    const finalDays = Math.round(remainingDaysAfterYears % 30.4375);
    setResults({ totalDays, years, months, remainingDays: finalDays, amount21Days, amount30Days, totalAmount: fullGratuity, isCapped, note, isCalculated: true });
  };

  const handleInputChange = (field: string, value: string) => {
    if (errors[field]) { const newErrors = { ...errors }; delete newErrors[field]; setErrors(newErrors); }
    switch (field) {
      case "basicSalary": setBasicSalary(value); break;
      case "startDate": setStartDate(value); break;
      case "endDate": setEndDate(value); break;
      case "unpaidLeaves": setUnpaidLeaves(value); break;
      case "contractType": setContractType(value); break;
      case "exitReason": setExitReason(value); break;
      default: break;
    }
  };

  const handleReset = () => {
    setBasicSalary("");
    setStartDate("");
    setEndDate("");
    setUnpaidLeaves("0");
    setContractType("limited");
    setExitReason("resigned");
    setErrors({});
    setResults(null);
  };

  return (
    <div className="max-w-[860px] px-[20px] sm:px-[36px] py-10">
      <div className="bg-[#131620] border border-[rgba(255,255,255,0.07)] rounded-[24px] p-8 shadow-2xl">
        {/* INPUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Basic Salary */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <Banknote className="w-4 h-4 text-[#c9a84c]" />Monthly Basic Salary
            </label>
            <div className="relative group">
              <input type="number" value={basicSalary} onChange={(e) => handleInputChange('basicSalary', e.target.value)} placeholder="0.00"
                className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 pr-14 text-[#e6e3db] focus:outline-none transition-all group-hover:border-[rgba(255,255,255,0.15)] ${errors.basicSalary ? 'border-red-500' : 'border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]'}`} />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#3e3c38]">AED</span>
            </div>
            {errors.basicSalary && <p className="text-[10px] text-red-500">{errors.basicSalary}</p>}
            <p className="text-[10px] text-[#3e3c38]">Exclude all allowances as per UAE Labour Law</p>
          </div>
          {/* Contract Type */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#c9a84c]" />Contract Type
            </label>
            <select value={contractType} onChange={(e) => handleInputChange('contractType', e.target.value)}
              className="w-full h-14 bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] rounded-[14px] px-5 text-[#e6e3db] focus:outline-none focus:border-[#c9a84c]">
              <option value="limited">Limited (Fixed‑Term)</option>
              <option value="unlimited">Unlimited (Legacy)</option>
            </select>
            <p className="text-[10px] text-[#3e3c38]">All contracts after Feb 2022 are Limited.</p>
          </div>
          {/* Reason for Leaving */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#c9a84c]" />Reason for Leaving
            </label>
            <select value={exitReason} onChange={(e) => handleInputChange('exitReason', e.target.value)}
              className="w-full h-14 bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] rounded-[14px] px-5 text-[#e6e3db] focus:outline-none focus:border-[#c9a84c]">
              <option value="resigned">Resigned</option>
              <option value="terminated">Terminated by Employer</option>
              <option value="completed">Contract Completed</option>
              <option value="mutual">Mutual Agreement</option>
            </select>
            <p className="text-[10px] text-[#3e3c38]">Reason affects the calculation for unlimited contracts.</p>
          </div>
          {/* Unpaid Leaves */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <MinusCircle className="w-4 h-4 text-[#c9a84c]" />Unpaid Leaves (Days)
            </label>
            <div className="relative group">
              <input type="number" value={unpaidLeaves} onChange={(e) => handleInputChange('unpaidLeaves', e.target.value)} placeholder="0"
                className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 text-[#e6e3db] focus:outline-none transition-all ${errors.unpaidLeaves ? 'border-red-500' : 'border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]'}`} />
            </div>
            {errors.unpaidLeaves && <p className="text-[10px] text-red-500">{errors.unpaidLeaves}</p>}
            <p className="text-[10px] text-[#3e3c38]">Will be subtracted from service period.</p>
          </div>
          {/* Joining Date */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#c9a84c]" />Joining Date
            </label>
            <input type="date" value={startDate} onChange={(e) => handleInputChange('startDate', e.target.value)}
              className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 text-[#e6e3db] focus:outline-none transition-all ${errors.startDate ? 'border-red-500' : 'border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]'}`} />
            {errors.startDate && <p className="text-[10px] text-red-500">{errors.startDate}</p>}
          </div>
          {/* End Date */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#c9a84c]" />End of Service Date
            </label>
            <input type="date" value={endDate} onChange={(e) => handleInputChange('endDate', e.target.value)}
              className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 text-[#e6e3db] focus:outline-none transition-all ${errors.endDate ? 'border-red-500' : 'border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]'}`} />
            {errors.endDate && <p className="text-[10px] text-red-500">{errors.endDate}</p>}
          </div>
        </div>
        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={calculateGratuity} className="flex-1 h-14 bg-[#c9a84c] hover:bg-[#b89844] text-black font-bold rounded-[14px] flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-[#c9a84c]/10">
            <Calculator className="w-5 h-5" />Calculate Gratuity
          </button>
          <button onClick={handleReset} className="px-8 h-14 bg-transparent border border-[rgba(255,255,255,0.07)] text-[#87847d] hover:text-[#e6e3db] hover:bg-[rgba(255,255,255,0.02)] font-medium rounded-[14px] flex items-center justify-center gap-2 transition-all">
            <RotateCcw className="w-4 h-4" />Reset
          </button>
        </div>
        {/* RESULTS */}
        {results && (
          <div className="mt-12 pt-10 border-t border-[rgba(255,255,255,0.07)] animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0c0e16] p-6 rounded-[20px] border border-[rgba(255,255,255,0.03)] relative overflow-hidden">
                <p className="text-[11px] uppercase tracking-wider text-[#3e3c38] font-bold mb-2">First 5 Years (21 Days/Yr)</p>
                <div className="flex items-baseline gap-2"><span className="text-[#e6e3db] text-2xl font-bold">{results.amount21Days.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span><span className="text-[#3e3c38] text-xs font-medium">AED</span></div>
              </div>
              <div className="bg-[#0c0e16] p-6 rounded-[20px] border border-[rgba(255,255,255,0.03)] relative overflow-hidden">
                <p className="text-[11px] uppercase tracking-wider text-[#3e3c38] font-bold mb-2">Beyond 5 Years (30 Days/Yr)</p>
                <div className="flex items-baseline gap-2"><span className="text-[#e6e3db] text-2xl font-bold">{results.amount30Days.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span><span className="text-[#3e3c38] text-xs font-medium">AED</span></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="text-center py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]"><p className="text-[10px] text-[#3e3c38] font-bold uppercase mb-1">Total Service</p><p className="text-[#87847d] text-sm">{results.years}y {results.months}m {results.remainingDays}d</p></div>
              <div className="text-center py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]"><p className="text-[10px] text-[#3e3c38] font-bold uppercase mb-1">Active Days</p><p className="text-[#87847d] text-sm">{results.totalDays} Days</p></div>
              <div className="text-center py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]"><p className="text-[10px] text-[#3e3c38] font-bold uppercase mb-1">Status</p><p className="text-[#2dd4a0] text-sm font-semibold">Eligible</p></div>
            </div>
            <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[20px] p-8 text-center relative overflow-hidden group">
              {results.isCapped && (<div className="absolute top-4 left-4 px-2 py-1 bg-[#c9a84c] text-black text-[9px] font-bold uppercase rounded tracking-tighter">Capped at 2Y Salary</div>)}
              {results.note && (<p className="text-[12px] text-[#c9a84c] italic mb-2">{results.note}</p>)}
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.2em] mb-3">Total Estimated Gratuity</p>
              <div className="flex items-baseline justify-center gap-2"><span className="text-4xl md:text-6xl font-bold text-[#e6e3db] tabular-nums tracking-tighter">{results.totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span><span className="text-xl font-medium text-[#c9a84c]">AED</span></div>
              <p className="mt-4 text-[10px] text-[#3e3c38] italic">Calculated per UAE Labour Law (2021 Decree)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
