"use client";

import React, { useMemo, Suspense } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { TOOLS } from "@/constants/tools";

const SidebarContent = () => {
  const router = useRouter();
  const { isSidebarOpen, closeSidebar, searchQuery, setSearchQuery } = useSidebar();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const activeFilter = categoryParam || "all";

  const categories = useMemo(() => [
    { id: "all", name: "All Tools", icon: "🏠", count: TOOLS.length },
    { id: "hr", name: "HR & Salary", icon: "👔", count: TOOLS.filter(t => t.category === "hr").length },
    { id: "finance", name: "Islamic Finance", icon: "☪️", count: TOOLS.filter(t => t.category === "finance").length },
    { id: "visa", name: "Visa & Docs", icon: "✈️", count: TOOLS.filter(t => t.category === "visa").length },
    { id: "legal", name: "Legal Docs", icon: "📄", count: TOOLS.filter(t => t.category === "legal").length },
    { id: "business", name: "Business Tools", icon: "💼", count: TOOLS.filter(t => t.category === "business").length },
  ], []);

  const countries = [
    { id: "uae", name: "UAE", href: "/tools/uae-gratuity-calculator", icon: "🇦🇪" },
    { id: "sa", name: "Saudi Arabia", href: "/tools/ksa-gosi-calculator", icon: "🇸🇦" },
    { id: "kw", name: "Kuwait", href: "/#all-tools", icon: "🇰🇼" },
    { id: "uk", name: "United Kingdom", href: "/tools/hajj-umrah-budget-calculator", icon: "🇬🇧" },
  ];

  const popularTools = [
    { name: "UAE Gratuity", href: "/tools/uae-gratuity-calculator", icon: "🧮" },
    { name: "Saudi GOSI", href: "/tools/ksa-gosi-calculator", icon: "🛡️" },
    { name: "Gold Price", href: "/tools/gold-calculator", icon: "💰" },
  ];

  const filteredSearchTools = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return TOOLS.filter(
      (tool) =>
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleCountryClick = (href: string) => {
    router.push(href);
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  };

  return (
    <aside
      id="mobile-sidebar"
      className={`fixed left-0 top-[62px] h-[calc(100vh-62px)] w-[230px] bg-[#0c0e16] border-r border-[rgba(255,255,255,0.07)] z-[100] transition-transform duration-300 ease-in-out md:w-[200px] lg:w-[230px] overflow-y-auto p-[20px_14px] custom-scrollbar
        ${isSidebarOpen ? "translate-x-0 shadow-[4px_0_30px_rgba(0,0,0,0.5)]" : "-translate-x-full md:translate-x-0"}
      `}
    >
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1f2438; border-radius: 10px; }
      `}</style>

      <div className="mb-6 px-1">
        <div className="relative group">
          <label htmlFor="sidebar-search" className="sr-only">Search tools</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8b8a87] group-focus-within:text-[#c9a84c] transition-colors" />
          <input
            id="sidebar-search"
            type="text"
            aria-label="Search tools"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1a1e2e] border border-[rgba(255,255,255,0.07)] rounded-[10px] pl-9 pr-8 py-2 text-[12.5px] text-[#e6e3db] placeholder:text-[#8b8a87] focus:outline-none focus:border-[rgba(201,168,76,0.3)] transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-md hover:bg-[#252a41] text-[#8b8a87] hover:text-[#e6e3db] transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {searchQuery.trim() ? (
        <div className="mb-6">
          <h3 className="text-[9.5px] uppercase tracking-[1.4px] text-[#8b8a87] font-bold mb-3 pl-[10px]">Search Results</h3>
          {filteredSearchTools.length > 0 ? (
            <ul className="space-y-1">
              {filteredSearchTools.map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.href}
                    onClick={() => {
                      setSearchQuery("");
                      if (window.innerWidth <= 768) closeSidebar();
                    }}
                    className="flex items-center gap-[9px] w-full p-[7px_10px] rounded-[9px] text-[13px] font-medium transition-all duration-[0.18s] text-[#87847d] hover:bg-[#1a1e2e] hover:text-[#e6e3db] border border-transparent"
                  >
                    <div className="flex items-center justify-center w-[26px] h-[26px] rounded-[6px] bg-[#1a1e2e] text-[12px] flex-shrink-0">{tool.icon}</div>
                    <span className="truncate">{tool.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[11px] text-[#8b8a87] font-medium pl-3 mt-2 italic">No tools found...</p>
          )}
        </div>
      ) : (
        <>
          <div className="mb-2">
            <h3 className="text-[9.5px] uppercase tracking-[1.4px] text-[#8b8a87] font-bold mb-2 pl-[10px] mt-0">Categories</h3>
            <ul className="space-y-1">
              {categories.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.id === "all" ? "/" : `/?category=${item.id}`}
                    onClick={() => { if (window.innerWidth <= 768) closeSidebar(); }}
                    className={`flex items-center gap-[9px] w-full p-[7px_10px] rounded-[9px] text-[13px] font-medium transition-all duration-[0.18s] cursor-pointer border border-transparent
                      ${activeFilter === item.id ? "bg-[rgba(201,168,76,0.11)] text-[#c9a84c] border-[rgba(201,168,76,0.2)]" : "text-[#87847d] hover:bg-[#1a1e2e] hover:text-[#e6e3db]"}
                    `}
                  >
                    <div className={`flex items-center justify-center w-[26px] h-[26px] rounded-[6px] bg-[#1a1e2e] text-[12px] flex-shrink-0
                      ${activeFilter === item.id ? "bg-[rgba(201,168,76,0.14)]" : ""}
                    `}>{item.icon}</div>
                    <span>{item.name}</span>
                    <span className="ml-auto bg-[#1a1e2e] text-[9.5px] font-bold text-[#8b8a87] p-[2px_7px] rounded-full min-w-[22px] text-center">{item.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[22px]">
            <h3 className="text-[9.5px] uppercase tracking-[1.4px] text-[#8b8a87] font-bold mb-2 pl-[10px]">Popular Tools</h3>
            <ul className="space-y-1">
              {popularTools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    onClick={() => { if (window.innerWidth <= 768) closeSidebar(); }}
                    className="flex items-center gap-[9px] w-full p-[7px_10px] rounded-[9px] text-[13px] font-medium transition-all duration-[0.18s] text-[#87847d] hover:bg-[#1a1e2e] hover:text-[#e6e3db] border border-transparent"
                  >
                    <div className="flex items-center justify-center w-[26px] h-[26px] rounded-[6px] bg-[#1a1e2e] text-[12px] flex-shrink-0">{tool.icon}</div>
                    <span>{tool.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[22px]">
            <h3 className="text-[9.5px] uppercase tracking-[1.4px] text-[#8b8a87] font-bold mb-2 pl-[10px]">Countries</h3>
            <ul className="space-y-1">
              {countries.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    data-country={item.id}
                    onClick={() => handleCountryClick(item.href)}
                    className="flex items-center gap-[9px] w-full p-[7px_10px] rounded-[9px] text-[13px] font-medium transition-all duration-[0.18s] cursor-pointer border border-transparent text-[#87847d] hover:bg-[#1a1e2e] hover:text-[#e6e3db]"
                  >
                    <div className="flex items-center justify-center w-[26px] h-[26px] rounded-[6px] bg-[#1a1e2e] text-[12px] flex-shrink-0">{item.icon}</div>
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </aside>
  );
};

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  // Fallback: Structural aside with identical classes to prevent layout shift
  const sidebarFallback = (
    <aside
      className={`fixed left-0 top-[62px] h-[calc(100vh-62px)] w-[230px] bg-[#0c0e16] border-r border-[rgba(255,255,255,0.07)] z-[100] transition-transform duration-300 ease-in-out md:w-[200px] lg:w-[230px] overflow-y-auto p-[20px_14px] custom-scrollbar
        ${isSidebarOpen ? "translate-x-0 shadow-[4px_0_30px_rgba(0,0,0,0.5)]" : "-translate-x-full md:translate-x-0"}
      `}
    >
      <div className="animate-pulse flex flex-col gap-6">
        <div className="h-10 bg-[#1a1e2e] rounded-[10px] w-full" />
        <div className="space-y-3">
          <div className="h-3 bg-[#1a1e2e] rounded w-1/4" />
          {[1,2,3,4,5].map(i => <div key={i} className="h-8 bg-[#1a1e2e] rounded-[9px] w-full" />)}
        </div>
      </div>
    </aside>
  );

  return (
    <Suspense fallback={sidebarFallback}>
      <SidebarContent />
    </Suspense>
  );
};

export default Sidebar;
