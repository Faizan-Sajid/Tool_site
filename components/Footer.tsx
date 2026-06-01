import React from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  tools: [
    { name: "Gold Calculator", href: "/tools/gold-calculator" },
    { name: "Zakat Calculator", href: "/tools/zakat-calculator" },
    { name: "Hajj & Umrah Budget", href: "/tools/hajj-umrah-budget-calculator" },
    { name: "UAE Gratuity", href: "/tools/uae-gratuity-calculator" },
    { name: "Saudi GOSI", href: "/tools/ksa-gosi-calculator" },
    { name: "Pakistan Freelancer Tax", href: "/tools/pakistan-freelancer-tax-calculator" },
    { name: "Malaysia EPF", href: "/tools/malaysia-epf-calculator" },
    { name: "Business Tools", href: "/#all-tools" },
  ],
  countries: [
    { name: "UAE Tools", href: "/tools/uae-gratuity-calculator" },
    { name: "Saudi Arabia", href: "/tools/ksa-gosi-calculator" },
    { name: "Malaysia EPF", href: "/tools/malaysia-epf-calculator" },
    { name: "Gold Price UAE", href: "/tools/gold-calculator" },
    { name: "Global Finance", href: "/tools/zakat-calculator" },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Tools", href: "/#all-tools" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
    // { name: "Sitemap", href: "/sitemap.xml" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c0e16] border-t border-[rgba(255,255,255,0.07)] py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-9">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8">

          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group transition-transform hover:scale-[1.01] min-h-[44px]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#a88a3d] font-black text-[#0c0e16] text-sm">
                Q
              </div>
              <span className="text-lg font-bold tracking-tight text-white leading-tight">
                QuickCalcs
              </span>
            </Link>
            <p className="text-[13px] text-[#87847d] leading-relaxed max-w-[280px]">
              Free global financial calculators for Malaysia, Saudi Arabia, UAE & Pakistan — EPF/KWSP, GOSI, gratuity, Zakat, gold, Umrah, and freelancer tax tools. Updated for 2026.
            </p>
          </div>

          {/* Column 2: Tools */}
          <div className="col-span-1">
            <h3 className="text-[11px] font-bold text-white mb-5 uppercase tracking-[0.2em]">Tools Registry</h3>
            <ul className="space-y-4 sm:space-y-3">
              {FOOTER_LINKS.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#87847d] hover:text-[#c9a84c] transition-colors text-[13px] block py-1 sm:py-0.5 min-h-[44px] sm:min-h-0 flex items-center sm:block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional */}
          <div className="col-span-1">
            <h3 className="text-[11px] font-bold text-white mb-5 uppercase tracking-[0.2em]">Regional</h3>
            <ul className="space-y-4 sm:space-y-3">
              {FOOTER_LINKS.countries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#87847d] hover:text-[#c9a84c] transition-colors text-[13px] block py-1 sm:py-0.5 min-h-[44px] sm:min-h-0 flex items-center sm:block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Platform */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-[11px] font-bold text-white mb-5 uppercase tracking-[0.2em]">Platform</h3>
            <ul className="space-y-4 sm:space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#87847d] hover:text-[#c9a84c] transition-colors text-[13px] block py-1 sm:py-0.5 min-h-[44px] sm:min-h-0 flex items-center sm:block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.05)] mt-12 sm:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[11px] font-medium text-[#8b8a87] tracking-wider uppercase">
            © {new Date().getFullYear()} QuickCalcs Professional · All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <Link href="/about" className="text-[11px] text-[#8b8a87] hover:text-[#87847d] uppercase tracking-widest transition-colors min-h-[44px] flex items-center">
              About Us
            </Link>
            <Link href="/privacy-policy" className="text-[11px] text-[#8b8a87] hover:text-[#87847d] uppercase tracking-widest transition-colors min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-[11px] text-[#8b8a87] hover:text-[#87847d] uppercase tracking-widest transition-colors min-h-[44px] flex items-center">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
