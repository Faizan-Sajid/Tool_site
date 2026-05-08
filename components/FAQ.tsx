"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items = [] }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[860px] mx-auto py-12 md:py-20 px-4 md:px-0" aria-labelledby="faq-heading">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-[1px] w-8 md:w-12 bg-[#c9a84c]" />
        <h2
          id="faq-heading"
          className="text-lg md:text-xl font-bold text-[#e6e3db] uppercase tracking-[0.2em]"
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-2">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`group border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden transition-all duration-300 ${
              activeIndex === index 
                ? "bg-[#131620] border-[#c9a84c40] shadow-[0_10px_30px_rgba(0,0,0,0.3)]" 
                : "bg-[#0c0e16] hover:bg-[#131620]/60 hover:border-[rgba(255,255,255,0.1)]"
            }`}
            itemScope
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium text-white text-left focus:outline-none transition-all"
              aria-expanded={activeIndex === index}
            >
              <span className="pr-6 text-[14px] md:text-[16px] leading-snug group-hover:text-[#c9a84c] transition-colors" itemProp="name">
                {item.question}
              </span>
              <div
                className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(255,255,255,0.05)] transition-all duration-500 ${
                  activeIndex === index 
                    ? "bg-[#c9a84c] border-[#c9a84c] rotate-45" 
                    : "bg-[#1a1e2e] group-hover:border-[#c9a84c40]"
                }`}
              >
                <span className={`text-xl font-light ${activeIndex === index ? "text-[#0c0e16]" : "text-[#87847d] group-hover:text-white"}`}>
                  +
                </span>
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
              itemScope
              itemType="https://schema.org/Answer"
            >
              <div className="p-5 md:p-6 pt-0 border-t border-[rgba(255,255,255,0.03)]">
                <p className="text-[14px] md:text-[15px] text-[#87847d] leading-relaxed font-light" itemProp="text">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
