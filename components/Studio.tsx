
export default function Studio() {
  return (
    <>
      <section id="studio" className="mx-auto max-w-[1360px] px-6 md:px-10 py-16 md:py-28 border-t border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <div className="font-sans2 text-[11px] tracking-[0.14em] uppercase text-muted">Studio</div>
            <h2 className="mt-4 font-display text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.02em]">Why DreamDeploy.</h2>
            <p className="mt-5 font-sans2 text-[15.5px] leading-[1.7] text-[#52525b] max-w-[600px]">We built DreamDeploy to kill the 5-vendor shuffle. Design hands to dev, dev hands to backend, backend hands to DevOps — and your dream dies in handoffs. We keep it in one studio.</p>
            <div className="mt-9 rounded-[16px] bg-[#F7F3EE] border border-black/10 p-5"><div className="font-sans2 text-[12px] font-medium">Our promise</div><div className="mt-2 font-sans2 text-[14px] leading-[1.6] text-[#52525b]">You talk to makers, not managers. Weekly live builds. You own the repo, domain, and data from day one. No lock-in.</div></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { k: "Think", d: "We start with why. Jobs, constraints, and what live really means — not feature lists.", proof: "No handoffs between 5 vendors" },
              { k: "Design", d: "System over screens. We design states, edges, and empty — so build stays fast.", proof: "Figma system devs love" },
              { k: "Build", d: "Parallel tracks — web, mobile, backend. Working software weekly, not monthly.", proof: "Weekly demos, real builds" },
              { k: "Launch", d: "Domain, CI/CD, monitoring, and handoff. Your dream is live, not 'almost live'.", proof: "100% Deployed" },
            ].map((f) => (
              <div key={f.k} className="group rounded-[20px] bg-white border border-black/10 p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-center justify-between"><div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-creative text-[15px] group-hover:scale-110 transition-transform">{f.k[0]}</div><div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center text-[12px] group-hover:rotate-45 transition-transform">↗</div></div>
                <div className="mt-6 font-creative text-[20px] leading-[1.25]">{f.k}</div><div className="mt-3 font-sans2 text-[14px] leading-[1.6] text-[#52525b]">{f.d}</div><div className="mt-5 inline-flex text-[11px] px-2.5 py-1 rounded-full bg-[#F7F3EE] border border-black/5">{f.proof}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1360px] px-6 md:px-10 pb-6">
        <div className="rounded-[28px] bg-ink text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div><div className="font-display text-[34px] md:text-[48px] leading-[1.05] tracking-[-0.02em]">Have an idea?<br />Let&apos;s deploy it.</div><div className="mt-5 font-sans2 text-[15.5px] leading-[1.7] text-white/60 max-w-[600px]">Tell us what you&apos;re building. We&apos;ll map scope, team, and timeline in 48 hours. No deck, no sales theater — just a real plan.</div><div className="mt-7 flex flex-wrap gap-3.5"><button className="h-11 px-7 rounded-full bg-white text-ink font-sans2 text-[14px] font-medium">Start a Project →</button><a href="mailto:dreamdeploy.in@gmail.com" className="h-11 px-7 rounded-full border border-white/20 font-sans2 text-[14px] flex items-center hover:bg-white/10 transition-colors">dreamdeploy.in@gmail.com</a></div></div>
          <div className="md:text-right"><div className="font-sans2 text-[11px] tracking-[0.14em] uppercase text-white/50">Contact</div><div className="mt-3 font-sans2 text-[14px] leading-[1.7] text-white/80">dreamdeploy.in@gmail.com<br />dreamdeploy.com<br />Available for new projects</div><div className="mt-4 inline-flex items-center gap-2 text-[11px] px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Avg response 48h</div></div>
        </div>
      </section>
    </>
  );
}
