"use client";

import { motion } from "framer-motion";
import { Palette } from "lucide-react";

function DesignVisual() {
  return (
    <div className="relative flex h-full min-h-[480px] items-center justify-center overflow-hidden">
      <div className="absolute h-[380px] w-[380px] rounded-full bg-pink-300/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, rotate: -5, scale: 0.94 }}
        animate={{ opacity: 1, rotate: -4, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[86%] max-w-[570px] rounded-[30px] border border-white/80 bg-white/50 p-8 shadow-[0_40px_90px_rgba(120,40,110,0.13),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pink-500">
              Brand System
            </p>

            <h4 className="mt-3 text-3xl font-black tracking-tight">
              Visual Identity
            </h4>
          </div>

          <Palette className="h-7 w-7 text-pink-500" />
        </div>

        <div className="mt-8 grid grid-cols-4 gap-3">
          <div className="h-28 rounded-2xl bg-zinc-950" />
          <div className="h-28 rounded-2xl bg-violet-500" />
          <div className="h-28 rounded-2xl bg-pink-300" />
          <div className="h-28 rounded-2xl border border-white/70 bg-white/45 backdrop-blur-xl" />
        </div>

        <div className="mt-7 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full border border-white/80 bg-pink-100/70" />

          <div>
            <div className="h-3 w-36 rounded-full bg-zinc-800" />
            <div className="mt-2 h-2.5 w-24 rounded-full bg-zinc-200" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DesignVisual;
