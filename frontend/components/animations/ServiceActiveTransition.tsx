"use client";

import { motion } from "framer-motion";

export function ServiceActiveTransition() {
  return (
    <motion.div
      layoutId="service-active-glass"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
        mass: 0.75,
      }}
      className="absolute inset-0 z-0 overflow-hidden rounded-[22px] border border-violet-200/70 bg-white/55 shadow-[0_18px_45px_rgba(91,60,150,0.12),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(139,92,246,0.08)] backdrop-blur-3xl backdrop-saturate-150"
    >
      {/* Main glass surface */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.28)_45%,rgba(237,233,254,0.38))]" />

      {/* Violet glass glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-300/20 blur-3xl" />

      {/* Top glass reflection */}
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-100" />

      {/* Left glass reflection */}
      <div className="pointer-events-none absolute bottom-4 left-0 top-4 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent" />

      {/* Moving reflection */}
      <motion.div
        animate={{ x: ["-150%", "180%"] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-md"
      />

      {/* Bottom reflection */}
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </motion.div>
  );
}
