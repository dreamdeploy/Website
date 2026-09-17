
"use client";
type Props = { active: string; scroll: number; onContact: () => void; mobile: boolean; setMobile: (v: any) => void; };
export default function Header({ active, scroll, onContact, mobile, setMobile }: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent pointer-events-none">
        <div className="h-full bg-accent transition-[width] duration-150" style={{ width: scroll + "%" }} />
      </div>
      <header className="sticky top-0 z-40 backdrop-blur-[14px] bg-paper/80 border-b border-black/[0.06]">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10 h-[68px] flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[10px] bg-ink flex items-center justify-center text-white font-creative text-[16px] leading-none">DD</div>
            <span className="font-creative font-semibold tracking-[-0.015em] text-[15.5px]">DreamDeploy</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { id: "services", label: "Services" },
              { id: "work", label: "Work" },
              { id: "process", label: "Process" },
              { id: "studio", label: "Studio" },
              { id: "journal", label: "Journal" },
            ].map((l) => (
              <a key={l.id} href={"#" + l.id} className={"font-sans2 text-[13.5px] tracking-[-0.01em] transition-colors " + (active === l.id ? "text-ink" : "text-muted hover:text-ink")}>
                <span className="relative">{l.label}{active === l.id && <span className="absolute -bottom-[6px] left-0 right-0 h-[1.5px] bg-ink" />}</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 pr-3"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /><span className="font-sans2 text-[11px] tracking-[0.04em] uppercase text-muted">Available for new projects</span></div>
            <button onClick={onContact} className="hidden md:inline-flex h-10 px-5 rounded-full bg-ink text-white font-sans2 text-[13px] font-medium items-center gap-2 hover:bg-black transition-colors">Start a Project <span>→</span></button>
            <button onClick={() => setMobile((v: boolean) => !v)} className="lg:hidden w-9 h-9 rounded-full border border-black/10 flex items-center justify-center">
              <div className="space-y-1">
                <div className={"w-4 h-[1.5px] bg-black transition-all " + (mobile ? "rotate-45 translate-y-[3.5px]" : "")} />
                <div className={"w-4 h-[1.5px] bg-black transition-all " + (mobile ? "-rotate-45 -translate-y-[3.5px]" : "")} />
              </div>
            </button>
          </div>
        </div>
      </header>
      {mobile && (
        <div className="fixed inset-0 z-[60] bg-paper flex flex-col lg:hidden">
          <div className="h-[64px] flex items-center justify-between px-6 border-b border-black/10">
            <span className="font-creative font-semibold">DreamDeploy</span>
            <button onClick={() => setMobile(false)} className="w-9 h-9 rounded-full border border-black/10">✕</button>
          </div>
          <div className="flex-1 px-6 pt-10 flex flex-col">
            {[
              { id: "services", label: "Services", sub: "Capabilities" },
              { id: "work", label: "Work", sub: "Selected builds" },
              { id: "process", label: "Process", sub: "How we ship" },
              { id: "studio", label: "Studio", sub: "Principles" },
              { id: "journal", label: "Journal", sub: "Notes" },
            ].map((l) => (
              <a key={l.id} href={"#" + l.id} onClick={() => setMobile(false)} className="py-6 border-b border-black/10 flex justify-between items-end">
                <span className="font-display text-[48px] leading-none tracking-[-0.02em]">{l.label}</span>
                <span className="font-sans2 text-[11px] uppercase tracking-[0.08em] text-muted">{l.sub}</span>
              </a>
            ))}
            <div className="mt-auto pb-10">
              <button onClick={() => { setMobile(false); onContact(); }} className="w-full h-12 rounded-full bg-ink text-white font-sans2 text-[14px]">Start a Project →</button>
              <div className="mt-6 font-sans2 text-[13px] text-muted">dreamdeploy.in@gmail.com<br />dreamdeploy.com</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
