"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

function WebsiteVisual() {
  return (
    <div className="relative flex h-full min-h-[480px] items-center justify-center overflow-hidden">
      <div className="absolute h-[420px] w-[420px] rounded-full bg-violet-400/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 35, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-[84%] max-w-[650px] overflow-hidden rounded-[28px] border border-white/90 bg-white/65 shadow-[0_40px_100px_rgba(71,45,130,0.18),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl"
      >
        <div className="flex h-11 items-center gap-2 border-b border-white/70 bg-white/50 px-5 backdrop-blur-xl">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />

          <div className="mx-auto h-6 w-[48%] rounded-full border border-white/80 bg-white/55" />
        </div>

        <div className="relative min-h-[380px] overflow-hidden bg-[#f7f5ff]/80 p-9">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="text-[12px] font-bold tracking-tight text-zinc-900">
                DREAMDEPLOY
              </div>

              <div className="hidden items-center gap-5 text-[8px] text-zinc-400 sm:flex">
                <span>Home</span>
                <span>Services</span>
                <span>Work</span>
                <span>About</span>

                <span className="rounded-full bg-zinc-900 px-4 py-2 text-white">
                  Contact
                </span>
              </div>
            </div>

            <div className="mt-20 max-w-[330px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-violet-600">
                Digital Experience
              </p>

              <h4 className="mt-4 text-[38px] font-black leading-[0.9] tracking-[-0.055em] text-zinc-950">
                Modern
                <br />
                <span className="text-violet-600">Digital Products.</span>
              </h4>

              <p className="mt-5 max-w-[260px] text-[9px] leading-5 text-zinc-500">
                Digital experiences designed to help ambitious businesses grow
                faster.
              </p>

              <div className="mt-7 flex gap-2">
                <div className="rounded-full bg-zinc-950 px-5 py-2.5 text-[8px] font-semibold text-white">
                  Get Started
                </div>

                <div className="rounded-full border border-white/80 bg-white/60 px-5 py-2.5 text-[8px] font-semibold text-zinc-600 backdrop-blur-xl">
                  Explore
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-65px] right-[-35px] h-60 w-60 rounded-[55px] bg-gradient-to-br from-violet-300 via-purple-400 to-indigo-600 opacity-75"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="absolute bottom-[8%] right-[2%] z-20 rounded-2xl border border-white/80 bg-white/45 px-5 py-4 shadow-[0_20px_45px_rgba(70,40,140,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/80 bg-violet-100/70">
            <Zap className="h-4 w-4 text-violet-600" />
          </span>

          <div>
            <p className="text-[10px] font-bold text-zinc-900">
              Fast Performance
            </p>

            <p className="mt-1 text-[8px] text-zinc-400">Built for speed</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default WebsiteVisual;
