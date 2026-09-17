
const teamMembers = [
  { initials: "D", role: "Founder — Dikshit", detail: "Business Strategy & Product Design" },
  { initials: "B", role: "Founder — Shivdeep", detail: "Engineering Technology & Leads" },

];

export default function Studio() {
  return (
    <>
      <section id="studio" className="mx-auto max-w-[1360px] px-6 pb-6 pt-6 md:px-10 md:pt-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="pt-2 md:pt-12">
            <div className="flex h-[128px] w-[128px] items-center justify-center rounded-[30px] bg-[#171717] text-[68px] font-creative text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] md:h-[150px] md:w-[150px]">
              DD
            </div>

            <h2 className="mt-10 max-w-[700px] font-display text-[36px] leading-[0.96] tracking-[-0.04em] text-[#171717] md:text-[54px]">
              We are DreamDeploy. We dream, design, build, and deploy — until your dream is live.
            </h2>

            <p className="mt-8 max-w-[620px] text-[15.5px] leading-[1.6] text-[#484848] md:text-[15.5px]">
              DreamDeploy is a full-service technology partner. Not an agency that outsources, not freelancers that disappear. A small senior team that owns design, engineering, and deployment end-to-end. From first sketch to App Store and production domain. Based in India, shipping globally.
            </p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <div className="flex h-[46px] items-center rounded-[14px] border border-black/10 bg-[#f8f5f1] px-4 text-[13px] text-[#3c3c3c]">
                <span className="mr-2 font-medium">Founded</span>
                <span className="text-[#171717]">2025 • DreamDeploy</span>
              </div>
              <div className="flex h-[46px] items-center rounded-[14px] border border-black/10 bg-[#f8f5f1] px-4 text-[13px] text-[#3c3c3c]">
                <span className="mr-2 font-medium">Focus</span>
                <span className="text-[#171717]">Web • Platforms</span>
              </div>
            </div>
          </div>

          <div className="rounded-[26px] border border-[#d9d0c5] bg-[#f4f0eb] p-5 shadow-[0_0_0_1px_rgba(17,17,17,0.02)] md:p-6">
            <div className="font-sans2 text-[11px] uppercase tracking-[0.18em] text-[#636363]">TEAM • PLACEHOLDER</div>

            <h3 className="mt-4 max-w-[380px] font-display text-[28px] leading-[1.08] tracking-[-0.03em] text-[#171717] md:text-[36px]">
              A small team building big digital products.
            </h3>

            <div className="mt-6 space-y-3">
              {teamMembers.map((member) => (
                <div key={member.role} className="flex items-center justify-between rounded-[14px] border border-[#d9d0c5] bg-[#f0eadf] px-4 py-3.5">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-[15px] font-semibold text-white">
                      {member.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-sans2 text-[15px] font-medium text-[#171717]">{member.role}</div>
                      <div className="truncate font-sans2 text-[12px] text-[#666]">{member.detail}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Contact ${member.role}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[18px] text-[#171717] transition hover:border-black/20 hover:bg-white"
                  >
                    →
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-[420px] text-[13px] leading-[1.6] text-[#555]">
              Replace with real LinkedIn, photos, and bios when live. This is intentionally placeholder to avoid fake team claims.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-6 pb-6 md:px-10">
        <div className="rounded-[28px] bg-ink text-white p-8 md:p-12 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-[34px] leading-[1.05] tracking-[-0.02em] md:text-[48px]">
              Have an idea?<br />Let&apos;s deploy it.
            </div>
            <div className="mt-5 max-w-[600px] font-sans2 text-[15.5px] leading-[1.7] text-white/60">
              Tell us what you&apos;re building. We&apos;ll map scope, team, and timeline in 48 hours. No deck, no sales theater — just a real plan.
            </div>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <button className="h-11 rounded-full bg-white px-7 font-sans2 text-[14px] font-medium text-ink">
                Start a Project →
              </button>
              <a href="mailto:dreamdeploy.in@gmail.com" className="flex h-11 items-center rounded-full border border-white/20 px-7 font-sans2 text-[14px] text-white transition hover:bg-white/10">
                dreamdeploy.in@gmail.com
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <div className="font-sans2 text-[11px] uppercase tracking-[0.14em] text-white/50">Contact</div>
            <div className="mt-3 font-sans2 text-[14px] leading-[1.7] text-white/80">
              dreamdeploy.in@gmail.com<br />dreamdeploy.com<br />Available for new projects
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Avg response 48h
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
