import React from "react";

interface AdSlotProps {
  /** Optional CSS class name for additional sizing/positioning */
  className?: string;
  /** Accessible label for the ad slot region */
  label?: string;
}

/**
 * Ad placeholder slot — reserved for future ad network integration.
 *
 * Currently renders a styled empty container. Replace the inner div
 * with an ad script/code snippet when an ad partner is onboarded.
 */
export default function AdSlot({ className = "", label = "Advertisement" }: AdSlotProps) {
  return (
    <div
      role="region"
      aria-label={label}
      className={`w-full flex items-center justify-center ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex min-h-[90px] w-full max-w-[728px] items-center justify-center rounded-[14px] border border-dashed border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 py-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#5a5a5a] select-none"
      >
        {/* Ad slot — to be filled later */}
        Ad Placeholder
      </div>
    </div>
  );
}
