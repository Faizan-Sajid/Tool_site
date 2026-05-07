"use client";

import React, { useState } from "react";
import { Calculator, RotateCcw, Wallet, Coins, TrendingUp, Briefcase, MinusCircle, Info, Banknote, Globe } from "lucide-react";

type Currency = "AED" | "SAR" | "USD" | "PKR";

interface CurrencyConfig {
  label: string;
  nisab: number;
  locale: string;
  symbol: string;
}

const CURRENCY_MAP: Record<Currency, CurrencyConfig> = {
  AED: { label: "AED", nisab: 22000, locale: "en-AE", symbol: "AED" },
  SAR: { label: "SAR", nisab: 22000, locale: "en-SA", symbol: "SAR" },
  USD: { label: "USD", nisab: 6000, locale: "en-US", symbol: "$" },
  PKR: { label: "PKR", nisab: 1650000, locale: "en-PK", symbol: "Rs" },
};

export default function ZakatCalculator() {
  // Settings State
  const [currency, setCurrency] = useState<Currency>("AED");

  // Asset State
  const [cash, setCash] = useState<string>("");
  const [goldSilver, setGoldSilver] = useState<string>("");
  const [investments, setInvestments] = useState<string>("");
  const [business, setBusiness] = useState<string>("");
  const [liabilities, setLiabilities] = useState<string>("");

  // Error State
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Results State
  const [results, setResults] = useState<{
    totalAssets: number;
    netAssets: number;
    zakatDue: number;
    isEligible: boolean;
    isCalculated: boolean;
  } | null>(null);

  const config = CURRENCY_MAP[currency];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const fields = { cash, goldSilver, investments, business, liabilities };

    Object.entries(fields).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrors[key] = "This field is required";
      } else if (parseFloat(value) < 0) {
        newErrors[key] = "Amount cannot be negative";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateZakat = () => {
    if (!validate()) {
      setResults(null);
      return;
    }

    const vCash = parseFloat(cash) || 0;
    const vGold = parseFloat(goldSilver) || 0;
    const vInv = parseFloat(investments) || 0;
    const vBiz = parseFloat(business) || 0;
    const vDebt = parseFloat(liabilities) || 0;

    const totalAssets = vCash + vGold + vInv + vBiz;
    const netAssets = totalAssets - vDebt;
    
    const isEligible = netAssets >= config.nisab;
    const zakatDue = isEligible ? netAssets * 0.025 : 0;

    setResults({
      totalAssets,
      netAssets,
      zakatDue,
      isEligible,
      isCalculated: true,
    });
  };

  const handleReset = () => {
    setCash("");
    setGoldSilver("");
    setInvestments("");
    setBusiness("");
    setLiabilities("");
    setErrors({});
    setResults(null);
  };

  const handleInputChange = (setter: (v: string) => void, field: string, value: string) => {
    setter(value);
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const formatValue = (val: number) => {
    return new Intl.NumberFormat(config.locale, {
      style: "currency",
      currency: currency === "PKR" ? "PKR" : currency,
      minimumFractionDigits: 2,
    }).format(val);
  };

  return (
    <div className="max-w-[860px] px-[20px] sm:px-[36px] py-10">
      
      {/* CURRENCY SWITCHER */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-[#87847d] text-xs font-bold uppercase tracking-wider mr-2">
          <Globe className="w-3.5 h-3.5" /> Select Currency:
        </div>
        <div className="flex bg-[#131620] p-1 rounded-xl border border-[rgba(255,255,255,0.07)]">
          {(Object.keys(CURRENCY_MAP) as Currency[]).map((cur) => (
            <button
              key={cur}
              onClick={() => {
                setCurrency(cur);
                setResults(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all
                ${currency === cur 
                  ? "bg-[#c9a84c] text-black shadow-lg" 
                  : "text-[#87847d] hover:text-[#e6e3db]"}
              `}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      {/* NISAB REFERENCE BOX */}
      <div className="mb-8 p-4 rounded-xl bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center flex-shrink-0">
          <Info className="w-5 h-5 text-[#c9a84c]" />
        </div>
        <div>
          <p className="text-[#c9a84c] text-[10px] font-bold uppercase tracking-wider">Current Nisab Reference ({currency})</p>
          <p className="text-[#e6e3db] text-xs mt-1 leading-relaxed">
            The estimated Gold Nisab for {currency} is approximately <span className="font-bold text-[#c9a84c]">{formatValue(config.nisab)}</span>. 
            Zakat is due if your net wealth exceeds this for a full Hijri year.
          </p>
        </div>
      </div>

      <div className="bg-[#131620] border border-[rgba(255,255,255,0.07)] rounded-[24px] p-8 shadow-2xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Cash & Savings */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <Wallet className="w-4 h-4 text-[#c9a84c]" />
              Cash & Savings ({currency})
            </label>
            <div className="relative group">
              <input
                type="number"
                value={cash}
                onChange={(e) => handleInputChange(setCash, "cash", e.target.value)}
                placeholder="0.00"
                className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 pr-14 text-[#e6e3db] focus:outline-none transition-all
                  ${errors.cash ? "border-red-500" : "border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]"}
                `}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#3e3c38]">{config.symbol}</span>
            </div>
            {errors.cash && <p className="text-[10px] text-red-500 font-medium">{errors.cash}</p>}
          </div>

          {/* Gold & Silver */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <Coins className="w-4 h-4 text-[#c9a84c]" />
              Gold & Silver ({currency})
            </label>
            <div className="relative group">
              <input
                type="number"
                value={goldSilver}
                onChange={(e) => handleInputChange(setGoldSilver, "goldSilver", e.target.value)}
                placeholder="0.00"
                className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 pr-14 text-[#e6e3db] focus:outline-none transition-all
                  ${errors.goldSilver ? "border-red-500" : "border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]"}
                `}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#3e3c38]">{config.symbol}</span>
            </div>
            {errors.goldSilver && <p className="text-[10px] text-red-500 font-medium">{errors.goldSilver}</p>}
          </div>

          {/* Investments */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#c9a84c]" />
              Investments ({currency})
            </label>
            <div className="relative group">
              <input
                type="number"
                value={investments}
                onChange={(e) => handleInputChange(setInvestments, "investments", e.target.value)}
                placeholder="0.00"
                className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 pr-14 text-[#e6e3db] focus:outline-none transition-all
                  ${errors.investments ? "border-red-500" : "border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]"}
                `}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#3e3c38]">{config.symbol}</span>
            </div>
            {errors.investments && <p className="text-[10px] text-red-500 font-medium">{errors.investments}</p>}
          </div>

          {/* Business Assets */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#c9a84c]" />
              Business Assets ({currency})
            </label>
            <div className="relative group">
              <input
                type="number"
                value={business}
                onChange={(e) => handleInputChange(setBusiness, "business", e.target.value)}
                placeholder="0.00"
                className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 pr-14 text-[#e6e3db] focus:outline-none transition-all
                  ${errors.business ? "border-red-500" : "border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]"}
                `}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#3e3c38]">{config.symbol}</span>
            </div>
            {errors.business && <p className="text-[10px] text-red-500 font-medium">{errors.business}</p>}
          </div>

          {/* Liabilities */}
          <div className="space-y-3 md:col-span-2">
            <label className="text-sm font-medium text-[#87847d] flex items-center gap-2">
              <MinusCircle className="w-4 h-4 text-red-500/50" />
              Liabilities & Debts ({currency})
            </label>
            <div className="relative group">
              <input
                type="number"
                value={liabilities}
                onChange={(e) => handleInputChange(setLiabilities, "liabilities", e.target.value)}
                placeholder="0.00"
                className={`w-full h-14 bg-[#0c0e16] border rounded-[14px] px-5 pr-14 text-[#e6e3db] focus:outline-none transition-all
                  ${errors.liabilities ? "border-red-500" : "border-[rgba(255,255,255,0.07)] focus:border-[#c9a84c]"}
                `}
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#3e3c38]">{config.symbol}</span>
            </div>
            {errors.liabilities && <p className="text-[10px] text-red-500 font-medium">{errors.liabilities}</p>}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={calculateZakat}
            className="flex-1 h-14 bg-[#c9a84c] hover:bg-[#b89844] text-black font-bold rounded-[14px] flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-[#c9a84c]/10"
          >
            <Calculator className="w-5 h-5" />
            Calculate Zakat
          </button>
          <button
            onClick={handleReset}
            className="px-8 h-14 bg-transparent border border-[rgba(255,255,255,0.07)] text-[#87847d] hover:text-[#e6e3db] hover:bg-[rgba(255,255,255,0.02)] font-medium rounded-[14px] flex items-center justify-center gap-2 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* RESULTS SECTION */}
        {results && (
          <div className="mt-12 pt-10 border-t border-[rgba(255,255,255,0.07)] animate-in fade-in slide-in-from-top-4 duration-500">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0c0e16] p-6 rounded-[20px] border border-[rgba(255,255,255,0.03)]">
                <p className="text-[11px] uppercase tracking-wider text-[#3e3c38] font-bold mb-2">Gross Wealth</p>
                <p className="text-[#e6e3db] text-2xl font-bold">
                  {formatValue(results.totalAssets)}
                </p>
              </div>
              <div className="bg-[#0c0e16] p-6 rounded-[20px] border border-[rgba(255,255,255,0.03)]">
                <p className="text-[11px] uppercase tracking-wider text-[#3e3c38] font-bold mb-2">Net Zakatable Wealth</p>
                <p className={`text-2xl font-bold ${results.isEligible ? "text-[#2dd4a0]" : "text-[#87847d]"}`}>
                  {formatValue(results.netAssets)}
                </p>
              </div>
            </div>

            <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[20px] p-8 text-center relative overflow-hidden group">
              {!results.isEligible && (
                <div className="absolute top-4 left-4 px-2 py-1 bg-[#1a1c24] border border-[rgba(255,255,255,0.07)] text-red-500/80 text-[9px] font-bold uppercase rounded tracking-tighter">
                  Below {currency} Nisab
                </div>
              )}
              <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                 <Banknote className="w-24 h-24 text-[#c9a84c] rotate-12" />
              </div>
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.2em] mb-3">Total Zakat Due (2.5%)</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl md:text-6xl font-bold text-[#e6e3db] tabular-nums tracking-tighter">
                  {results.zakatDue.toLocaleString(config.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-xl font-medium text-[#c9a84c]">{currency}</span>
              </div>
              <p className="mt-4 text-[10px] text-[#3e3c38] italic italic-font">
                {results.isEligible 
                  ? `Your wealth exceeds the ${currency} Nisab threshold. Calculation based on 2.5% of net wealth.`
                  : `Your wealth is below the ${currency} Nisab threshold (${formatValue(config.nisab)}). Zakat is not mandatory.`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
