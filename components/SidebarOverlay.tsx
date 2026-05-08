"use client";

import React from "react";
import { useSidebar } from "@/context/SidebarContext";

const SidebarOverlay = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  if (!isSidebarOpen) return null;

  return (
    <div
      onClick={closeSidebar}
      className="fixed inset-0 bg-black/60 z-[99] md:hidden backdrop-blur-[1px] transition-opacity duration-300 ease-in-out"
      aria-hidden="true"
    />
  );
};

export default SidebarOverlay;
