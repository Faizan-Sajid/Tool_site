"use client";

import React from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  tools: [
    { name: "Gold Calculator", href: "/tools/gold-calculator" },
    { name: "Zakat Calculator", href: "/tools/zakat-calculator" },
    { name: "UAE Gratuity", href: "/tools/uae-gratuity-calculator" },
    { name: "Saudi GOSI", href: "/tools/ksa-gosi-calculator" },
    { name: "Business Tools", href: "/#all-tools" },
  ],
  countries: [
    { name: "UAE Tools", href: "/tools/uae-gratuity-calculator" },
    { name: "Saudi Arabia", href: "/tools/ksa-gosi-calculator" },
    { name: "Gold Price UAE", href: "/tools/gold-calculator" },
    { name: "Global Finance", href: "/tools/zakat-calculator" },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "All Tools", href: "/#all-tools" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
    // { name: "Sitemap", href: "/sitemap.xml" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c0e16] border-t border-[rgba(255,255,255,0.07)] py-16">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-9">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-8">

          {/* Column 1: Brand */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group transition-transform hover:scale-[1.01]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#a88a3d] font-black text-[#0c0e16] text-sm">
                G
              </div>
              <span className="text-lg font-bold tracking-tight text-white leading-tight">
                QuickCalcs
              </span>
            </Link>
            <p className="text-[13px] text-[#87847d] leading-relaxed max-w-[280px]">
              The leading professional utility suite for Finance, HR, and SEO in the Middle East. Delivering precision and Sharia-compliant logic to professionals from Dubai to Riyadh.
            </p>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h3 className="text-[11px] font-bold text-white mb-5 uppercase tracking-[0.2em]">Tools Registry</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#87847d] hover:text-[#c9a84c] transition-colors text-[13px] block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional */}
          <div>
            <h3 className="text-[11px] font-bold text-white mb-5 uppercase tracking-[0.2em]">Regional</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.countries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#87847d] hover:text-[#c9a84c] transition-colors text-[13px] block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Platform */}
          <div>
            <h3 className="text-[11px] font-bold text-white mb-5 uppercase tracking-[0.2em]">Platform</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#87847d] hover:text-[#c9a84c] transition-colors text-[13px] block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.05)] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-medium text-[#8b8a87] tracking-wider uppercase">
            © 2026 QuickCalcs Professional · All Rights Reserved
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="text-[11px] text-[#8b8a87] hover:text-[#87847d] uppercase tracking-widest transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-[11px] text-[#8b8a87] hover:text-[#87847d] uppercase tracking-widest transition-colors">
              Terms of Use
            </Link>
            {/* <Link href="/sitemap.xml" className="text-[11px] text-[#8b8a87] hover:text-[#87847d] uppercase tracking-widest transition-colors">
              Sitemap
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
