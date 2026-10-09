"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Logo } from "@/components/Logo";
import { NavbarDesktop } from "@/components/navbar/NavbarDesktop";
import { NavbarActions } from "@/components/navbar/NavbarActions";
import { NavbarMobile } from "@/components/navbar/NavbarMobile";

export const navItems = [
  { name: "Services", id: "services", href: "#services" },
  { name: "Work", id: "work", href: "/work" },
  { name: "Why Us", id: "why-us", href: "/why_us" },
  { name: "Process", id: "process", href: "#process" },
  { name: "Calculator", id: "calculator", href: "#calculator" },
  { name: "About", id: "about", href: "/about" },
  { name: "Contact", id: "contact", href: "#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 50);

      // Separate Work page
      if (pathname === "/work") {
        setActiveSection("work");
        return;
      }

      // About page
      if (pathname === "/about") {
        setActiveSection("about");
        return;
      }

      // Why Us page
      if (pathname === "/why_us") {
        setActiveSection("why-us");
        return;
      }

      // Other pages
      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

      // Keep hash-based active state near top
      if (scrollY < 180) {
        if (!window.location.hash) {
          setActiveSection("");
        }
        return;
      }

      const checkPosition = scrollY + 150;
      let currentSection = "";

      for (const item of navItems) {
        if (item.href.startsWith("/")) continue;

        const section = document.getElementById(item.id);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (checkPosition >= sectionTop && checkPosition < sectionBottom) {
          currentSection = item.id;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();

    const item = navItems.find((navItem) => navItem.id === id);

    if (!item) return;

    // Separate page
    if (item.href.startsWith("/")) {
      setActiveSection(id);
      router.push(item.href);
      return;
    }

    // Section from another page
    if (pathname !== "/") {
      router.push(`/${item.href}`);
      return;
    }

    // Immediately show clicked item as active
    setActiveSection(id);

    const section = document.getElementById(id);

    if (!section) return;

    const navbarOffset = 85;

    const targetPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.history.pushState(null, "", `#${id}`);

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const handleLogoClick = () => {
    setActiveSection("");

    if (pathname !== "/") {
      router.push("/");
      return;
    }

    window.history.pushState(null, "", "/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`
        fixed
        left-1/2
        z-[999]
        -translate-x-1/2
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          scrolled
            ? "top-3 w-[calc(100%-28px)] max-w-[1180px]"
            : "top-0 w-[calc(100%-32px)] max-w-[1240px]"
        }
      `}
    >
      <nav
        className={`
          relative
          flex
          items-center
          justify-between
          overflow-visible
          border
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            scrolled
              ? `
                h-[64px]
                rounded-full
                border-white/70
                bg-white/30
                px-5
                shadow-[0_15px_45px_rgba(76,45,140,0.13),inset_0_1px_0_rgba(255,255,255,0.95)]
                backdrop-blur-3xl
                backdrop-saturate-[180%]
              `
              : `
                h-[72px]
                rounded-[28px]
                border-transparent
                bg-transparent
                px-6
                shadow-none
                backdrop-blur-0
              `
          }
        `}
      >
        {/* Glass ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-[inherit]">
          <div
            className="
              absolute
              -left-16
              top-1/2
              size-32
              -translate-y-1/2
              rounded-full
              bg-violet-400/10
              blur-[55px]
            "
          />

          <div
            className="
              absolute
              -right-16
              top-1/2
              size-32
              -translate-y-1/2
              rounded-full
              bg-fuchsia-300/10
              blur-[55px]
            "
          />

          {/* Top glass reflection */}
          <div
            className="
              absolute
              inset-x-8
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              opacity-90
            "
          />

          {/* Bottom subtle reflection */}
          <div
            className="
              absolute
              inset-x-20
              bottom-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-violet-200/40
              to-transparent
            "
          />
        </div>

        {/* Logo */}
        <div className="relative z-20 shrink-0">
          <Logo size="md" theme="light" onClick={handleLogoClick} />
        </div>

        {/* Desktop navigation */}
        <div className="relative z-20 hidden lg:block">
          <NavbarDesktop
            navItems={navItems}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />
        </div>

        {/* Actions */}
        <div className="relative z-20 hidden lg:block">
          <NavbarActions scrolled={scrolled} onNavClick={handleNavClick} />
        </div>

        {/* Mobile */}
        <div className="relative z-30 lg:hidden">
          <NavbarMobile scrolled={scrolled} />
        </div>
      </nav>
    </header>
  );
}
