"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  strength?: number;
  className?: string;
  disabled?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  strength = 0.35,
  className = "",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
    mass: 0.35,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
    mass: 0.35,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const commonClass = `
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    transition-all
    duration-300
    ${className}
  `;

  if (href) {
    return (
      <motion.div style={{ x: springX, y: springY }} className="inline-block">
        <Link
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={commonClass}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={commonClass}
    >
      {children}
    </motion.button>
  );
}
