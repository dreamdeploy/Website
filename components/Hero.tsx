
"use client";
import { useRef, useEffect, useState } from "react";
export default function Hero({ onContact }: { onContact: () => void }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        setCursor({ x: (e.clientX - window.innerWidth / 2) / window.innerWidth, y: (e.clientY - window.innerHeight / 2) / window.innerHeight });
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  const t1 = "translate3d(" + cursor.x * -12 + "px," + cursor.y * -10 + "px,0) rotate(-2deg)";
  const t2 = "translate3d(" + cursor.x * 14 + "px," + cursor.y * -8 + "px,0) rotate(3deg)";
  const t3 = "translate3d(" + cursor.x * -8 + "px," + cursor.y * 12 + "px,0) rotate(-1deg)";
  return (
    <section id="hero" ref={heroRef} className="relative mx-auto max-w-[1360px] px-6 md:px-10 pt-10 md:pt-20 pb-14 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-start">
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F3EE] border border-black/5 mb-8"><span className="w-1.5 h-1.5 rounded-full bg-accent" /><span className="font-sans2 text-[11px] tracking-[0.12em] uppercase">Now: DreamDeploy • dreamdeploy.com</span></div>
          <h1 className="font-display text-[44px] md:text-[68px] leading-[0.98] tracking-[-0.02em] max-w-[640px]"><span className="block text-ink">We Build.</span><span className="block text-ink">We Deploy.</span><span className="block font-display-em text-ink mt-1">Your Dream Goes Live.</span></h1>
          <div className="mt-6 font-sans2 text-[17px] md:text-[19px] leading-[1.6] tracking-[-0.01em] font-medium max-w-[560px] text-ink">DreamDeploy turns ideas into designed, engineered, and deployed digital products.</div>
          <p className="mt-8 font-sans2 text-[15.5px] md:text-[16px] leading-[1.7] tracking-[-0.01em] text-[#52525b] max-w-[580px]">DreamDeploy turns ideas into designed, engineered, and deployed digital products — from first sketch to App Store and production. One partner. No handoffs.</p>
          <div className="mt-9 flex flex-wrap gap-3.5"><button onClick={onContact} className="h-[46px] px-7 rounded-full bg-ink text-white font-sans2 text-[14px] font-medium hover:bg-black transition-colors">Start Your Project →</button><a href="#process" className="h-[46px] px-7 rounded-full border border-black/10 bg-white font-sans2 text-[14px] font-medium flex items-center hover:border-black/20 transition-colors">See How We Work</a></div>
          <div className="mt-14 border-y border-black/10 py-3.5 flex gap-6 overflow-x-auto">{["12+ Products Shipped","48h Avg Response","100% Deployed","Projects in production","Design → Build → Ship"].map((t,i)=> <div key={i} className="flex items-center gap-6 shrink-0"><span className="font-sans2 text-[12px] tracking-[0.06em] uppercase text-ink">{t}</span><span className="w-1 h-1 rounded-full bg-black/20" /></div>)}</div>
        </div>
        <div className="relative lg:h-[560px] h-[520px] select-none">
          <div className="absolute left-[2%] md:left-[6%] top-[4%] w-[72%] md:w-[78%] rounded-[18px] bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden" style={{ transform: t1 }}>
            <div className="h-9 flex items-center gap-2 px-4 border-b border-black/10 bg-[#F7F3EE]"><span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" /><span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" /><span className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" /><div className="ml-3 flex-1 h-6 rounded-full bg-white border border-black/10 flex items-center px-3 gap-2"><span className="w-3 h-3 rounded-full bg-black/10" /><span className="font-sans2 text-[11px] text-muted">dreamdeploy.com / timeline</span></div></div>
            <div className="p-5 space-y-3.5"><div className="flex items-center justify-between"><div className="font-sans2 text-[12px] font-semibold">Project Timeline • Live</div><div className="text-[10px] px-2 py-1 rounded-full bg-accent text-white">In Production</div></div>{[{k:"Discover",v:"Done",w:"100%"},{k:"Design",v:"Done",w:"100%"},{k:"Build",v:"In progress",w:"68%"},{k:"Deploy",v:"Next",w:"0%"}].map(f=> <div key={f.k} className="flex items-center gap-3"><div className="w-[64px] font-sans2 text-[11px] text-muted">{f.k}</div><div className="flex-1 h-1.5 rounded-full bg-black/10 overflow-hidden"><div className="h-full bg-ink" style={{ width: f.w }} /></div><div className="w-[64px] text-right font-sans2 text-[11px]">{f.v}</div></div>)}</div>
          </div>
          <div className="absolute right-[4%] md:right-[2%] top-[22%] w-[38%] md:w-[34%] rounded-[28px] bg-ink border-[6px] border-ink shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden" style={{ transform: t2 }}>
            <div className="bg-white rounded-[20px] overflow-hidden"><div className="h-[28px] flex items-center justify-center"><div className="w-12 h-1 rounded-full bg-black/20" /></div><div className="px-3 pb-3"><div className="rounded-[14px] bg-[#F7F3EE] p-3.5"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center font-creative text-[12px]">D</div><div><div className="font-sans2 text-[11px] font-semibold">DreamDeploy App</div><div className="font-sans2 text-[10px] text-muted">• Live preview</div></div></div></div></div></div>
          </div>
          <div className="absolute left-[10%] md:left-[14%] bottom-[6%] w-[68%] md:w-[62%] rounded-[16px] bg-ink text-white border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden" style={{ transform: t3 }}>
            <div className="p-3.5 flex items-center justify-between border-b border-white/10"><div className="font-sans2 text-[11px]">Metrics • Live</div><div className="flex gap-1"><div className="w-1 h-1 rounded-full bg-emerald-400" /><div className="w-1 h-1 rounded-full bg-white/30" /><div className="w-1 h-1 rounded-full bg-white/30" /></div></div><div className="p-3.5 grid grid-cols-[1fr_1fr] gap-3.5"><div><div className="text-[10px] opacity-60">MRR</div><div className="font-sans2 text-[18px] font-semibold">₹2.4L</div><div className="mt-2 flex items-end gap-[3px] h-10">{[40,65,50,80,62,90,75].map((h,i)=> <div key={i} className="flex-1 rounded-full bg-white/90" style={{ height: h + "%" }} />)}</div></div><div className="space-y-2.5"><div className="rounded-lg bg-white/10 p-2.5"><div className="text-[9px] opacity-60">Active users</div><div className="text-[12px] font-medium">1,243</div></div><div className="rounded-lg bg-accent p-2.5"><div className="text-[9px] opacity-80">Deploy status</div><div className="text-[12px] font-medium">Live • 12s ago</div></div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
