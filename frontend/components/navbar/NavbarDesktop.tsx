"use client";

import type { MouseEvent } from "react";

interface NavItem {
  name: string;
  id: string;
  href: string;
}

interface NavbarDesktopProps {
  navItems: NavItem[];
  activeSection: string;
  onNavClick: (e: MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export function NavbarDesktop({
  navItems,
  activeSection,
  onNavClick,
}: NavbarDesktopProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-1
        rounded-full
        border border-white/50
        bg-white/20
        p-1
        shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]
        backdrop-blur-xl
        backdrop-saturate-[160%]
      "
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => onNavClick(e, item.id)}
            className={`
              group
              relative
              flex
              h-9
              items-center
              rounded-full
              px-4
              text-[11px]
              font-semibold
              transition-all
              duration-300
              ${
                isActive
                  ? "text-violet-700"
                  : "text-[#5E5876] hover:text-violet-700"
              }
            `}
          >
            {/* ACTIVE PAGE GLASS */}
            <span
              className={`
                pointer-events-none
                absolute
                inset-0
                rounded-full
                border
                border-white/80
                bg-white/75
                shadow-[0_5px_18px_rgba(109,40,217,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]
                backdrop-blur-xl
                transition-all
                duration-300
                ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                }
              `}
            />

            {/* TEXT */}
            <span className="relative z-10">{item.name}</span>

            {/* PURPLE ACTIVE / HOVER INDICATOR */}
            <span
              className={`
                pointer-events-none
                absolute
                bottom-[5px]
                left-1/2
                z-20
                h-[2px]
                -translate-x-1/2
                rounded-full
                bg-violet-500
                shadow-[0_0_8px_rgba(124,58,237,0.65)]
                transition-all
                duration-300
                ${
                  isActive
                    ? "w-4 opacity-100"
                    : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                }
              `}
            />
          </a>
        );
      })}
    </div>
  );
}
