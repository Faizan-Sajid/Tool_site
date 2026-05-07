import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-[#0c0e16] px-6 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.1)]">
        <AlertTriangle className="h-12 w-12 text-[#c9a84c]" />
      </div>
      
      <h1 className="mb-4 font-[family-name:var(--font-serif)] text-5xl italic text-white md:text-6xl">
        404 — <span className="text-[#c9a84c]">Lost in the Gulf?</span>
      </h1>
      
      <p className="mb-10 max-w-md text-sm leading-relaxed text-[#87847d]">
        The tool or page you're looking for doesn't exist or has been moved. 
        Don't worry, our other professional utilities are ready to help.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#c9a84c] px-8 text-sm font-bold text-[#0c0e16] transition-all hover:bg-[#e2bd56] active:scale-[0.98]"
        >
          <Home className="h-4 w-4" /> Back to Home
        </Link>
        <Link
          href="/#all-tools"
          className="flex h-12 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.07)] px-8 text-sm font-bold text-[#87847d] transition-all hover:text-white hover:bg-[#1a1e2e]"
        >
          Browse All Tools
        </Link>
      </div>
    </main>
  );
}
