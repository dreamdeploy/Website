"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function PageReveal({
  children,
  delay = 0,
  className,
}: PageRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
