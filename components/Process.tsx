
"use client";
import { useState, useEffect, useRef } from "react";
import { phases } from "@/data/constants";
export default function Process() {
  const [activePhase, setActivePhase] = useState("01");
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const prog = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight * 0.5), 0), 1);
      setProgress(prog);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="process" ref={ref} className="border-y border-black/10 bg-ink text-white">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10 py-16 md:py-28">
        <div className="flex flex-wrap gap-8 justify-between items-start"><div><div className="font-sans2 text-[11px] tracking-[0.14em] uppercase text-white/50">Process</div><h2 className="mt-4 font-display text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-[560px]">A clear path from dream to deploy.</h2></div><div className="font-sans2 text-[15.5px] leading-[1.7] text-white/60 max-w-[380px]">We ship in 5 phases. No surprises. You see working builds every week, not decks.</div></div>
        <div className="mt-12 h-[1px] bg-white/10 relative overflow-hidden"><div className="absolute left-0 top-0 h-full bg-white transition-all duration-200" style={{ width: progress * 100 + "%" }} /></div>
        <div className="mt-12 -mx-6 md:mx-0 overflow-x-auto md:overflow-visible"><div className="flex md:grid md:grid-cols-5 gap-5 px-6 md:px-0 min-w-[860px] md:min-w-0">
          {phases.map((ph) => {
            const active = activePhase === ph.id;
            return (
              <button key={ph.id} onClick={() => setActivePhase(ph.id)} className={"text-left rounded-[20px] border p-7 transition-all " + (active ? "bg-white text-ink border-white" : "bg-white/5 border-white/10 hover:bg-white/10")}>
                <div className="flex items-center justify-between"><span className={"font-sans2 text-[11px] tracking-[0.12em] " + (active ? "text-muted" : "text-white/50")}>{ph.id}</span><span className={"text-[11px] px-2.5 py-1 rounded-full " + (active ? "bg-[#F7F3EE] text-ink" : "bg-white/10 text-white/70")}>{ph.dur}</span></div>
                <div className="mt-4 font-creative text-[20px] leading-[1.25] font-semibold">{ph.title}</div><div className={"mt-3.5 font-sans2 text-[14px] leading-[1.7] " + (active ? "text-[#52525b]" : "text-white/60")}>{ph.desc}</div>
                {active && <div className="mt-6 space-y-2.5">{ph.deliverables.map((d) => <div key={d} className="flex gap-2 text-[12px] font-sans2"><span className="text-accent">✓</span><span>{d}</span></div>)}</div>}
              </button>
            );
          })}
        </div></div>
      </div>
    </section>
  );
}
