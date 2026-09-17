
"use client";
import { useState } from "react";
import { services } from "@/data/constants";
export default function ContactDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ building: "", services: [] as string[], budget: "$$", timeline: "6-8 weeks", details: "", name: "", company: "", email: "", phone: "" });
  const [errors, setErrors] = useState<any>({});
  const [sent, setSent] = useState(false);
  const validate = () => {
    const e: any = {};
    if (step === 1 && !form.building) e.building = "Pick what you are building";
    if (step === 2 && form.services.length === 0) e.services = "Select at least one";
    if (step === 5) {
      if (!form.name.trim()) e.name = "Required";
      if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const next = () => {
    if (!validate()) return;
    if (step < 5) setStep((s) => s + 1);
    else { setSent(true); setTimeout(() => { onClose(); setSent(false); setStep(1); setForm({ building: "", services: [], budget: "$$", timeline: "6-8 weeks", details: "", name: "", company: "", email: "", phone: "" }); }, 3500); }
  };
  return (
    <div className={"fixed inset-0 z-[80] transition-all " + (open ? "visible" : "invisible")}>
      <div className={"absolute inset-0 bg-ink/40 backdrop-blur-[6px] transition-opacity " + (open ? "opacity-100" : "opacity-0")} onClick={onClose} />
      <div className={"absolute right-0 top-0 h-full w-full md:w-[560px] bg-paper border-l border-black/10 shadow-[-20px_0_60px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] " + (open ? "translate-x-0" : "translate-x-full")}>
        <div className="h-full flex flex-col">
          <div className="h-[64px] flex items-center justify-between px-6 border-b border-black/10"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-[10px] bg-ink text-white flex items-center justify-center font-creative text-[13px]">DD</div><span className="font-sans2 text-[13px] font-medium">Start a Project • DreamDeploy</span></div><button onClick={onClose} className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">✕</button></div>
          {!sent ? (
            <>
              <div className="px-6 pt-6"><div className="flex items-center gap-2">{[1,2,3,4,5].map((s) => <div key={s} className="flex items-center gap-2 flex-1"><div className={"w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-sans2 border transition-colors " + (step >= s ? "bg-ink text-white border-ink" : "bg-white border-black/10 text-muted")}>{s}</div>{s < 5 && <div className={"flex-1 h-[1.5px] " + (step > s ? "bg-ink" : "bg-black/10")} />}</div>)}</div><div className="mt-4 flex justify-between font-sans2 text-[10px] uppercase tracking-[0.08em] text-muted"><span>Build</span><span>Services</span><span>Scope</span><span>Details</span><span>Contact</span></div></div>
              <div className="flex-1 overflow-auto px-6 py-8">
                {step === 1 && <div><h4 className="font-creative text-[22px] leading-[1.25]">What are you building?</h4><p className="mt-2 font-sans2 text-[14px] text-[#52525b]">Pick one — we&apos;ll tailor the next steps.</p><div className="mt-6 grid grid-cols-1 gap-3.5">{[{v:"Android App",d:"Kotlin • Jetpack • Play Store"},{v:"Website",d:"Next.js • SEO • High performance"},{v:"Full Product",d:"App + Web + Backend + Admin"},{v:"Admin / Dashboard",d:"Internal tools, ops, analytics"},{v:"Brand + Website",d:"Identity + site that converts"}].map((o) => <button key={o.v} onClick={() => setForm((f) => ({ ...f, building: o.v }))} className={"text-left p-5 rounded-[14px] border transition-all " + (form.building === o.v ? "bg-ink text-white border-ink" : "bg-white border-black/10 hover:border-black/20")}><div className="font-sans2 text-[14px] font-medium">{o.v}</div><div className={"font-sans2 text-[12px] mt-1 " + (form.building === o.v ? "text-white/60" : "text-muted")}>{o.d}</div></button>)}{errors.building && <div className="mt-3 text-[12px] text-red-600">{errors.building}</div>}</div></div>}
                {step === 2 && <div><h4 className="font-creative text-[22px] leading-[1.25]">Services needed</h4><p className="mt-2 font-sans2 text-[14px] text-[#52525b]">Select all that apply — we ship as one team.</p><div className="mt-6 flex flex-wrap gap-2.5">{services.map((s) => { const sel = form.services.includes(s.title); return <button key={s.title} onClick={() => setForm((f) => ({ ...f, services: sel ? f.services.filter((x) => x !== s.title) : [...f.services, s.title] }))} className={"h-10 px-5 rounded-full border text-[13px] font-sans2 " + (sel ? "bg-ink text-white border-ink" : "bg-white border-black/10")}>{s.title}</button>; })}</div>{errors.services && <div className="mt-3 text-[12px] text-red-600">{errors.services}</div>}</div>}
                {step === 3 && <div><h4 className="font-creative text-[22px] leading-[1.25]">Budget & Timeline</h4><p className="mt-2 font-sans2 text-[14px] text-[#52525b]">Ranges only — no fake fixed quotes.</p><div className="mt-8 space-y-8"><div><div className="font-sans2 text-[12px] font-medium mb-3">Budget range</div><div className="grid grid-cols-4 gap-2.5">{["$","$$","$$$","$$$$"].map((b) => <button key={b} onClick={() => setForm((f) => ({ ...f, budget: b }))} className={"h-12 rounded-[12px] border text-[13px] font-sans2 " + (form.budget === b ? "bg-ink text-white border-ink" : "bg-white border-black/10")}>{b}<span className="block text-[10px] opacity-60">{b === "$" ? "Starter" : b === "$$" ? "Growth" : b === "$$$" ? "Scale" : "Full"}</span></button>)}</div></div><div><div className="font-sans2 text-[12px] font-medium mb-3">Timeline</div><div className="grid grid-cols-2 gap-2.5">{["2-4 weeks","6-8 weeks","2-3 months","3+ months"].map((t) => <button key={t} onClick={() => setForm((f) => ({ ...f, timeline: t }))} className={"h-11 rounded-[12px] border text-[13px] font-sans2 " + (form.timeline === t ? "bg-accent text-white border-accent" : "bg-white border-black/10")}>{t}</button>)}</div></div></div></div>}
                {step === 4 && <div><h4 className="font-creative text-[22px] leading-[1.25]">Project details</h4><p className="mt-2 font-sans2 text-[14px] text-[#52525b]">What&apos;s the dream? Goals, users, must-haves.</p><textarea value={form.details} onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))} placeholder="Describe your idea, users, and what 'live' means for you..." className="mt-6 w-full h-[140px] rounded-[14px] border border-black/10 bg-white p-4 font-sans2 text-[14px] outline-none focus:border-ink resize-none" /><div className="mt-7"><div className="font-sans2 text-[12px] font-medium mb-3">Attach files (visual only)</div><div className="rounded-[14px] border border-dashed border-black/20 bg-[#F7F3EE] p-7 text-center"><div className="w-10 h-10 mx-auto rounded-full bg-white border flex items-center justify-center">↑</div><div className="mt-3 font-sans2 text-[12px]">Drag & drop brief, wireframes, or references</div><div className="mt-1 font-sans2 text-[11px] text-muted">PDF, Figma link, or images — visual demo only</div></div></div></div>}
                {step === 5 && <div><h4 className="font-creative text-[22px] leading-[1.25]">Contact info</h4><p className="mt-2 font-sans2 text-[14px] text-[#52525b]">We reply in 48h. You own everything from day one.</p><div className="mt-7 space-y-4"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label className="font-sans2 text-[11px] uppercase tracking-[0.08em] text-muted">Name *</label><input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your name" className="mt-2 w-full h-11 rounded-[12px] border border-black/10 bg-white px-4 font-sans2 text-[13px] outline-none focus:border-ink" />{errors.name && <div className="mt-1 text-[11px] text-red-600">{errors.name}</div>}</div><div><label className="font-sans2 text-[11px] uppercase tracking-[0.08em] text-muted">Company</label><input value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} placeholder="Company / Studio" className="mt-2 w-full h-11 rounded-[12px] border border-black/10 bg-white px-4 font-sans2 text-[13px] outline-none focus:border-ink" /></div></div><div><label className="font-sans2 text-[11px] uppercase tracking-[0.08em] text-muted">Email *</label><input value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="you@company.com" className="mt-2 w-full h-11 rounded-[12px] border border-black/10 bg-white px-4 font-sans2 text-[13px] outline-none focus:border-ink" />{errors.email && <div className="mt-1 text-[11px] text-red-600">{errors.email}</div>}</div><div><label className="font-sans2 text-[11px] uppercase tracking-[0.08em] text-muted">Phone (optional)</label><input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+91 ..." className="mt-2 w-full h-11 rounded-[12px] border border-black/10 bg-white px-4 font-sans2 text-[13px] outline-none focus:border-ink" /></div></div><div className="mt-6 rounded-[12px] bg-[#F7F3EE] border border-black/10 p-3.5 font-sans2 text-[11px] text-[#52525b]">By submitting, you agree we&apos;ll email you a scope plan. No spam, no sales calls. Real proposal in 48h.</div></div>}
              </div>
              <div className="p-6 border-t border-black/10 flex items-center justify-between gap-3"><button onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1} className="h-11 px-5 rounded-full border border-black/10 font-sans2 text-[13px] disabled:opacity-40">Back</button><button onClick={next} className="flex-1 md:flex-none h-11 px-8 rounded-full bg-ink text-white font-sans2 text-[13px] font-medium hover:bg-black transition-colors">{step === 5 ? "Submit → Deploy" : "Continue →"}</button></div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">{Array.from({ length: 30 }).map((_, i) => <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ left: Math.random() * 100 + "%", top: Math.random() * 60 + "%", animationDelay: Math.random() * 0.8 + "s", animationDuration: 0.8 + Math.random() + "s" }} />)}</div>
              <div className="w-16 h-16 rounded-full bg-ink text-white flex items-center justify-center text-[24px]">✓</div>
              <h4 className="mt-6 font-display text-[32px] leading-[1.05] tracking-[-0.02em]">Dream received.<br />We&apos;ll deploy the plan.</h4>
              <p className="mt-4 font-sans2 text-[14px] leading-[1.7] text-[#52525b] max-w-[320px]">We&apos;ve got your details. Real proposal in 48h — scope, team, timeline, and next steps. Check dreamdeploy.in@gmail.com thread.</p>
              <div className="mt-6 font-sans2 text-[11px] text-muted">© 2026 DreamDeploy • dreamdeploy.com</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
