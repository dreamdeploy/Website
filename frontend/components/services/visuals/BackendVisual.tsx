"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, Database, Server, ShieldCheck } from "lucide-react";

function BackendVisual() {
  return (
    <div className="relative flex h-full min-h-[480px] items-center justify-center overflow-hidden">
      <div className="absolute h-[380px] w-[380px] rounded-full bg-indigo-400/15 blur-[120px]" />

      <div className="relative flex h-[330px] w-[330px] items-center justify-center">
        <div className="absolute h-px w-[330px] bg-indigo-200/70" />
        <div className="absolute h-[330px] w-px bg-indigo-200/70" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 flex h-28 w-28 flex-col items-center justify-center rounded-[30px] border border-white/20 bg-zinc-950 shadow-[0_30px_70px_rgba(20,20,50,0.22)]"
        >
          <Server className="h-8 w-8 text-indigo-300" />
          <span className="mt-2 text-[9px] font-bold text-white">API</span>
        </motion.div>

        <div className="absolute -left-3 -top-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white/50 shadow-xl backdrop-blur-2xl">
          <Database className="h-6 w-6 text-indigo-600" />
        </div>

        <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white/50 shadow-xl backdrop-blur-2xl">
          <ShieldCheck className="h-6 w-6 text-indigo-600" />
        </div>

        <div className="absolute -bottom-3 -left-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white/50 shadow-xl backdrop-blur-2xl">
          <Code2 className="h-6 w-6 text-indigo-600" />
        </div>

        <div className="absolute -bottom-3 -right-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white/50 shadow-xl backdrop-blur-2xl">
          <BarChart3 className="h-6 w-6 text-indigo-600" />
        </div>
      </div>
    </div>
  );
}

export default BackendVisual;
