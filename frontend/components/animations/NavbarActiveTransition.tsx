"use client";

import { motion } from "framer-motion";

interface NavbarActiveTransitionProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function NavbarActiveTransition({
  x,
  y,
  width,
  height,
}: NavbarActiveTransitionProps) {
  return (
    <motion.div
      animate={{
        x,
        y,
        width,
        height,
      }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 32,
        mass: 0.7,
      }}
      className="pointer-events-none absolute left-0 top-0 z-0 overflow-hidden rounded-full border border-violet-200/80 bg-white/35 shadow-[0_10px_30px_rgba(124,58,237,0.12),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(124,58,237,0.08)] backdrop-blur-3xl backdrop-saturate-150"
    >
      {/* Top glass reflection */}
      <span className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Left violet glow */}
      <span className="absolute -left-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-violet-300/20 blur-xl" />

      {/* Right purple glow */}
      <span className="absolute -right-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-purple-300/20 blur-xl" />

      {/* Soft inner highlight */}
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%,rgba(221,214,254,0.12))]" />
    </motion.div>
  );
}
