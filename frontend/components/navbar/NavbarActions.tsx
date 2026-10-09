"use client";

import Link from "next/link";

interface NavbarActionsProps {
  scrolled: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export function NavbarActions({ scrolled, onNavClick }: NavbarActionsProps) {
  return (
    <div className="hidden items-center gap-3 sm:flex">
      {/* Search */}
      <button
        type="button"
        aria-label="Search"
        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-white/50 bg-white/25 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl hover:bg-white/45"
            : "border-white/30 bg-transparent text-black hover:bg-white/10"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
      </button>

      {/* Enquire */}
      <Link
        href="#contact"
        onClick={(e) => onNavClick(e, "contact")}
        className="rounded-full bg-[#13131A] px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:bg-[#252532]"
      >
        ENQUIRE NOW
      </Link>
    </div>
  );
}
