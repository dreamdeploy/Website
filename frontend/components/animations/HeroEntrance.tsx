"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroEntranceProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "content" | "visual" | "bottom";
}

const variants = {
  content: {
    initial: { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0 },
  },

  visual: {
    initial: { opacity: 0, y: 45, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },

  bottom: {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
  },
};

export function HeroEntrance({
  children,
  delay = 0,
  className,
  variant = "content",
}: HeroEntranceProps) {
  const animation = variants[variant];

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
