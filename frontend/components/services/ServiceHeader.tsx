"use client";

import { motion } from "framer-motion";

export function ServiceHeader() {
  return (
    <div className="mb-8 text-center lg:mb-10">
      {/* Our Services */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/40 px-5 py-2.5 shadow-[0_10px_30px_rgba(124,58,237,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl backdrop-saturate-150"
      >
        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(124,58,237,0.65)]"
        />

        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-violet-700">
          Our Services
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.45 }}
        className="mt-3 text-[clamp(2.2rem,4.5vw,4rem)] font-black leading-none tracking-[-0.06em] text-zinc-950"
      >
        What We{" "}
        <span className="bg-gradient-to-r from-black to-violet-600 bg-clip-text text-transparent">
          Build.
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-4 flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400"
      >
        <span>Design</span>
        <span className="text-violet-400">•</span>
        <span>Develop</span>
        <span className="text-violet-400">•</span>
        <span>Deploy</span>
      </motion.div>
    </div>
  );
}
