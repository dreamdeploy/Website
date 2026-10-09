"use client";

import { motion } from "framer-motion";

function MobileVisual() {
  return (
    <div className="relative flex h-full min-h-[480px] items-center justify-center overflow-hidden">
      <div className="absolute h-[380px] w-[380px] rounded-full bg-blue-400/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -7 }}
        animate={{ opacity: 1, y: 0, rotate: -7 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[230px] rounded-[42px] border-[7px] border-zinc-900 bg-zinc-900 p-2 shadow-[0_40px_90px_rgba(30,50,120,0.22)]"
      >
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-b from-blue-50 to-violet-200">
          <div className="mx-auto mt-3 h-5 w-20 rounded-full bg-zinc-900" />

          <div className="px-5 pb-7 pt-10">
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              Mobile Experience
            </p>

            <h4 className="mt-4 text-[28px] font-black leading-[0.92] text-zinc-950">
              Everything
              <br />
              <span className="text-blue-600">In Your Hand.</span>
            </h4>

            <div className="mt-8 h-32 rounded-2xl border border-white/70 bg-white/55 p-4 backdrop-blur-xl">
              <div className="h-2 w-20 rounded-full bg-zinc-200" />
              <div className="mt-4 h-16 rounded-xl bg-gradient-to-br from-blue-300 to-violet-400" />
            </div>

            <div className="mt-3 flex gap-2">
              <div className="h-12 flex-1 rounded-xl border border-white/70 bg-white/55" />
              <div className="h-12 flex-1 rounded-xl border border-white/70 bg-white/55" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MobileVisual;
