export interface Tool {
  id: string;
  href: string;
  ariaLabel: string;
  category: "finance" | "hr" | "visa" | "legal" | "business";
  country: "all" | "uae" | "sa" | "kw" | "uk";
  icon: string;
  title: string;
  description: string;
  isTeal?: boolean;
  tags: { text: string; variant?: "default" | "gold" | "teal" }[];
}

export const TOOLS: Tool[] = [
  {
    id: "gold-calculator",
    href: "/tools/gold-calculator",
    ariaLabel: "Gold Price Calculator",
    category: "finance",
    country: "all",
    icon: "💰",
    title: "Gold Price Calculator",
    description: "Live rates, Zakat calculator, and unit converter for UAE & GCC. Real-time 24K, 22K, 21K, and 18K gold rates.",
    tags: [
      { text: "Gold", variant: "gold" },
      { text: "Finance", variant: "default" },
      { text: "New", variant: "teal" },
    ],
  },
  {
    id: "zakat-calculator",
    href: "/tools/zakat-calculator",
    ariaLabel: "Zakat Calculator",
    category: "finance",
    country: "all",
    icon: "☪️",
    title: "Zakat Calculator",
    description: "Calculate your annual Zakat on savings, gold, business assets & investments. Nisab threshold auto-updated with live gold prices.",
    isTeal: true,
    tags: [
      { text: "Islamic", variant: "gold" },
      { text: "Finance", variant: "default" },
      { text: "New", variant: "teal" },
    ],
  },
  {
    id: "uae-gratuity-calculator",
    href: "/tools/uae-gratuity-calculator",
    ariaLabel: "UAE Gratuity Calculator",
    category: "hr",
    country: "uae",
    icon: "🧮",
    title: "UAE Gratuity Calculator",
    description: "Calculate end-of-service gratuity as per UAE Labour Law. Supports limited & unlimited contracts with 2026 updated rates.",
    tags: [
      { text: "UAE", variant: "gold" },
      { text: "HR", variant: "default" },
      { text: "Most Used", variant: "teal" },
    ],
  },
  {
    id: "ksa-gosi-calculator",
    href: "/tools/ksa-gosi-calculator",
    ariaLabel: "Saudi GOSI Calculator (2026)",
    category: "finance",
    country: "sa",
    icon: "🛡️",
    title: "Saudi GOSI Calculator (2026)",
    description: "Calculate GOSI contributions for Saudi nationals and expats based on the latest KSA Labor Law.",
    tags: [
      { text: "KSA", variant: "gold" },
      { text: "Finance", variant: "default" },
      { text: "Official", variant: "gold" },
    ],
  },
  {
    id: "pakistan-freelancer-tax-calculator",
    href: "/tools/pakistan-freelancer-tax-calculator",
    ariaLabel: "Pakistan Freelancer Tax Calculator",
    category: "finance",
    country: "all",
    icon: "🧾",
    title: "Pakistan Freelancer Tax Calculator",
    description: "Calculate your FBR income tax as a freelancer. Supports Upwork, Fiverr & direct clients.",
    tags: [
      { text: "PKR", variant: "default" },
      { text: "Finance", variant: "default" },
      { text: "New", variant: "teal" },
    ],
    isTeal: true,
  },
];
