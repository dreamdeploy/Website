"use client";

import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";

function SoftwareVisual() {
  return (
    <div className="relative flex h-full min-h-[480px] items-center justify-center overflow-hidden">
      <div className="absolute h-[400px] w-[400px] rounded-full bg-purple-400/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[86%] max-w-[600px] rounded-[28px] border border-white/80 bg-white/50 p-6 shadow-[0_40px_90px_rgba(70,40,150,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/70 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-purple-600/90 shadow-sm">
              <LayoutDashboard className="h-5 w-5 text-white" />
            </div>

            <span className="text-[12px] font-bold">Business Dashboard</span>
          </div>

          <div className="h-8 w-24 rounded-full border border-white/80 bg-white/45" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/70 bg-purple-50/55 p-5 backdrop-blur-xl">
            <p className="text-[8px] text-zinc-400">Revenue</p>
            <p className="mt-2 text-2xl font-black">₹2.4L</p>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/45 p-5 backdrop-blur-xl">
            <p className="text-[8px] text-zinc-400">Users</p>
            <p className="mt-2 text-2xl font-black">12.8K</p>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/45 p-5 backdrop-blur-xl">
            <p className="text-[8px] text-zinc-400">Growth</p>
            <p className="mt-2 text-2xl font-black">+38%</p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/70 bg-white/35 p-5 backdrop-blur-xl">
          <div className="flex h-40 items-end gap-2">
            {[30, 45, 40, 65, 52, 78, 67, 92, 82].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                className="flex-1 rounded-t-md bg-purple-400/65"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SoftwareVisual;
