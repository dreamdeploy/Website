
"use client";
import { useState } from "react";
import { projects } from "@/data/constants";
type Project = typeof projects[number];
export default function Work({ onSelect }: { onSelect: (p: Project) => void }) {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section id="work" className="mx-auto max-w-[1360px] px-6 md:px-10 py-16 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div><div className="font-sans2 text-[11px] tracking-[0.14em] uppercase text-muted">Work</div><h2 className="mt-4 font-display text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.02em]">Products built to launch.</h2><div className="mt-4 font-sans2 text-[14px] leading-[1.6] text-muted">Concept / placeholder builds — to show how we ship, not to claim client work.</div></div>
        <div className="flex gap-2">{["All","Apps","Websites","Platforms"].map((f) => (<button key={f} onClick={() => setFilter(f)} className={"h-9 px-5 rounded-full border text-[12px] font-sans2 font-medium transition-colors " + (filter === f ? "bg-ink text-white border-ink" : "bg-white border-black/10 text-muted hover:text-ink")}>{f}</button>))}</div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((p) => (
          <button key={p.id} onClick={() => onSelect(p)} className="group text-left rounded-[20px] bg-white border border-black/10 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all">
            <div className="aspect-[16/10] p-5" style={{ background: p.color }}>
              <div className="h-full rounded-[14px] bg-white border border-black/10 shadow-sm p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between"><div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-black/20" /><div className="w-2 h-2 rounded-full bg-black/10" /><div className="w-2 h-2 rounded-full bg-black/10" /></div><div className="text-[10px] px-2 py-1 rounded-full bg-[#F7F3EE]">{p.category}</div></div>
                <div className="space-y-2.5"><div className="h-2 w-20 bg-black/10 rounded" /><div className="grid grid-cols-3 gap-2.5"><div className="h-10 bg-[#F7F3EE] rounded-lg" /><div className="h-10 bg-ink rounded-lg" /><div className="h-10 bg-white border rounded-lg" /></div></div>
                <div className="flex items-center justify-between"><div className="text-[10px] text-muted">{p.year}</div><div className="text-[10px] px-2 py-1 rounded-full bg-ink text-white">Open →</div></div>
              </div>
            </div>
            <div className="p-7"><div className="font-sans2 text-[11px] tracking-[0.08em] uppercase text-muted">{p.tags.join(" • ")}</div><div className="mt-3 font-creative text-[19px] leading-[1.25] font-semibold">{p.description}</div><div className="mt-4 flex gap-2 flex-wrap">{p.tags.map((t) => <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-[#F7F3EE] border border-black/5">{t}</span>)}</div></div>
          </button>
        ))}
      </div>
    </section>
  );
}
