"use client";

interface NavbarMobileProps {
  scrolled: boolean;
}

export function NavbarMobile({ scrolled }: NavbarMobileProps) {
  return (
    <div className="relative z-10 flex items-center lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-white/50 bg-white/25 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl"
            : "border-white/30 bg-transparent text-black"
        }`}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      </button>
    </div>
  );
}
