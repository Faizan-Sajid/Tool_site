"use client";

import React from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const Navbar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar, searchQuery, setSearchQuery } = useSidebar();

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return (
    <header className="fixed top-0 z-[200] h-[62px] w-full bg-[#0c0e16]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-9">
        
        {/* Left: Logo Section */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#a88a3d] font-black text-[#0c0e16] text-lg shadow-[0_0_20px_rgba(201,168,76,0.2)] group-hover:shadow-[0_0_25px_rgba(201,168,76,0.35)] transition-all">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-bold tracking-tight text-white leading-tight">
                QuickCalcs
              </span>
              <span className="text-[9px] font-bold text-[#8b8a87] uppercase tracking-[0.2em] leading-tight">Professional</span>
            </div>
          </Link>
        </div>

        {/* Right Section: Search & Menu */}
        <div className="flex items-center gap-3">
          {/* Unified Search Input (Desktop) */}
          <div className="hidden md:flex relative group">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-colors ${searchQuery ? 'text-[#c9a84c]' : 'text-[#87847d] group-focus-within:text-[#c9a84c]'}`} />
            <input 
              type="text"
              placeholder="Quick search tools..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (!isSidebarOpen && e.target.value) openSidebar();
              }}
              onFocus={() => {
                if (searchQuery) openSidebar();
              }}
              className="h-10 w-48 lg:w-64 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[#131620] pl-9 pr-10 py-2 text-[13px] text-[#e6e3db] placeholder:text-[#8b8a87] focus:outline-none focus:border-[rgba(201,168,76,0.3)] focus:bg-[#1a1e2e] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-[#252a41] text-[#8b8a87] hover:text-[#e6e3db] transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            {!searchQuery && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-5 w-8 rounded bg-[#0c0e16] border border-[rgba(255,255,255,0.03)] text-[10px] text-[#8b8a87] font-bold pointer-events-none uppercase">
                /
              </div>
            )}
          </div>

          {/* Mobile Search Icon (Triggers Sidebar) */}
          <button 
            onClick={() => {
              openSidebar();
              // In a real app, you'd focus the sidebar input here
            }}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-xl bg-[#131620] border border-[rgba(255,255,255,0.05)] text-[#87847d] hover:text-[#c9a84c] transition-colors"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          {/* Sidebar Toggle (Hamburger) */}
          <button
            onClick={toggleSidebar} aria-label="Toggle Menu"
            className={`inline-flex items-center justify-center rounded-xl h-10 w-10 border transition-all duration-300 md:hidden
              ${isSidebarOpen 
                ? "bg-[rgba(201,168,76,0.11)] border-[rgba(201,168,76,0.2)] text-[#c9a84c]" 
                : "bg-[#131620] border-[rgba(255,255,255,0.05)] text-[#87847d] hover:text-white"
              }`}
            aria-expanded={isSidebarOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Desktop "All Tools" Action */}
          <Link
            href="/#all-tools"
            className="hidden lg:flex items-center justify-center h-10 px-6 rounded-xl bg-[#c9a84c] text-[#0c0e16] text-[13px] font-bold hover:bg-[#e2bd56] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all active:scale-[0.98]"
          >
            Explore All
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
