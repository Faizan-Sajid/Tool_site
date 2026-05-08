import React from "react";
import FAQ from "./FAQ";

/**
 * Simple wrapper around the generic FAQ component for the Pakistan Freelancer Tax tool.
 * It accepts the same `items` prop shape as `FAQ` and forwards it.
 */
export default function FreelancerTaxFAQ({ items }: { items: { question: string; answer: string }[] }) {
  return <FAQ items={items} />;
}
