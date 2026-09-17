
"use client";
import { useState } from "react";
import { featuresList } from "@/data/constants";
export default function Estimator({ onContact }: { onContact: () => void }) {
  const [productType, setProductType] = useState("Full Product");
  const [selectedFeatures, setSelectedFeatures] = useState(["Auth & Profiles","Admin Panel"]);
  const [weeks, setWeeks] = useState(8);
  const base = productType === "Website" ? 4 : productType === "App" ? 6 : 8;
  const extra = Math.floor(selectedFeatures.length * 0.7);
  const total = base + extra;
  const timeline = total + "-" + (total + 3) + " weeks";
  const team = productType === "Website" ? "Design + Frontend" : productType === "App" ? "Design + Android + Backend" : "Design + Frontend + Backend + Mobile";
  let budget = "$$";
  if (selectedFeatures.length <= 2 && productType === "Website") budget = "$";
  else if (selectedFeatures.length >= 5 || productType === "Full Product") budget = weeks > 10 ? "$$$$" : "$$$";
  const budgetLabel = budget === "$" ? "Starter" : budget === "$$" ? "Growth" : budget === "$$$" ? "Scale" : "Full-scale";
  return (
    <section className="mx-auto max-w-[1360px] px-6 md:px-10 py-16 md:py-28">
      <div className="rounded-[24px] bg-[#F7F3EE] border border-black/10 p-7 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div>
            <div className="font-sans2 text-[11px] tracking-[0.14em] uppercase text-muted">Estimator</div>
            <h3 className="mt-4 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-[520px]">What will it take to build your dream?</h3>
            <p className="mt-4 font-sans2 text-[15.5px] leading-[1.7] text-[#52525b] max-w-[600px]">No fake pricing. Just scope guidance — team, timeline, phases, and budget range so you can plan.</p>
            <div className="mt-10 space-y-9">
              <div><div className="font-sans2 text-[12px] font-medium mb-3.5">What are you building?</div><div className="flex flex-wrap gap-2.5">{["App","Website","Full Product"].map((t) => <button key={t} onClick={() => setProductType(t)} className={"h-10 px-5 rounded-full border text-[13px] font-sans2 " + (productType === t ? "bg-ink text-white border-ink" : "bg-white border-black/10")}>{t}</button>)}</div></div>
              <div><div className="font-sans2 text-[12px] font-medium mb-3.5">Features needed</div><div className="flex flex-wrap gap-2.5">{featuresList.map((f) => { const sel = selectedFeatures.includes(f); return <button key={f} onClick={() => setSelectedFeatures((s) => sel ? s.filter((x) => x !== f) : [...s, f])} className={"h-9 px-4 rounded-full border text-[12px] font-sans2 transition-colors " + (sel ? "bg-accent text-white border-accent" : "bg-white border-black/10 text-[#52525b] hover:border-black/20")}>{f}</button>; })}</div></div>
              <div><div className="flex items-center justify-between mb-3.5"><div className="font-sans2 text-[12px] font-medium">Desired timeline</div><div className="font-sans2 text-[12px] text-muted">{weeks} weeks</div></div><input type="range" min={4} max={16} value={weeks} onChange={(e) => setWeeks(Number(e.target.value))} className="w-full accent-ink" /><div className="flex justify-between font-sans2 text-[11px] text-muted mt-1.5"><span>4w • Fast</span><span>16w • Flexible</span></div></div>
            </div>
          </div>
          <div className="lg:sticky lg:top-24 self-start">
            <div className="rounded-[20px] bg-ink text-white p-7 md:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <div className="flex items-center justify-between"><div className="font-sans2 text-[11px] tracking-[0.14em] uppercase text-white/50">Scope Guidance</div><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /></div>
              <div className="mt-7 space-y-5"><div className="flex justify-between gap-4"><span className="font-sans2 text-[13px] text-white/60">Team</span><span className="font-sans2 text-[13px] font-medium text-right max-w-[200px]">{team}</span></div><div className="h-[1px] bg-white/10" /><div className="flex justify-between"><span className="font-sans2 text-[13px] text-white/60">Timeline</span><span className="font-sans2 text-[13px] font-medium">{timeline}</span></div><div className="h-[1px] bg-white/10" /><div className="flex justify-between"><span className="font-sans2 text-[13px] text-white/60">Phases</span><span className="font-sans2 text-[13px] font-medium">5 • Discover → Deploy</span></div><div className="h-[1px] bg-white/10" /><div className="flex justify-between"><span className="font-sans2 text-[13px] text-white/60">Budget range</span><span className="font-sans2 text-[16px] font-semibold tracking-[-0.02em]">{budget} <span className="text-[11px] font-normal text-white/60">{budgetLabel}</span></span></div></div>
              <div className="mt-8 rounded-[12px] bg-white/10 p-3.5 font-sans2 text-[11px] leading-[1.5] text-white/70">We don&apos;t do fixed-price fantasy. We estimate in ranges and ship weekly. You pay for progress, not promises.</div>
              <button onClick={onContact} className="mt-7 w-full h-11 rounded-full bg-white text-ink font-sans2 text-[13px] font-medium hover:bg-[#F7F3EE] transition-colors">Get detailed proposal →</button>
              <div className="mt-3.5 text-center font-sans2 text-[11px] text-white/50">No spam. 48h avg response. You own the code.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
