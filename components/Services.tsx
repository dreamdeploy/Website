
import { services } from "@/data/constants";
export default function Services() {
  return (
    <section id="services" className="border-t border-black/10 bg-[#F7F3EE]">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10 py-16 md:py-28">
        <div className="flex items-start justify-between gap-8">
          <div><div className="font-sans2 text-[11px] tracking-[0.14em] uppercase text-muted">Capabilities</div><h2 className="mt-4 font-display text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.02em] max-w-[520px]">One partner. From idea to live.</h2></div>
          <div className="hidden md:block font-sans2 text-[15.5px] leading-[1.7] text-muted max-w-[380px]">We don&apos;t sell services — we ship products. One team designs, builds, and deploys. No agency handoffs, no freelancers shuffle.</div>
        </div>
        <div className="mt-12 border-t border-black/10">
          {services.map((s) => (
            <div key={s.n} className="group relative grid grid-cols-[56px_1fr] md:grid-cols-[72px_300px_1fr] gap-4 md:gap-10 py-7 md:py-9 border-b border-black/10 hover:bg-white/60 transition-colors">
              <div className="font-sans2 text-[12px] tracking-[0.08em] text-muted pt-1">{s.n}</div>
              <div className="font-creative text-[19px] md:text-[22px] leading-[1.25] font-semibold pr-4">{s.title}</div>
              <div className="col-span-2 md:col-span-1 font-sans2 text-[15px] leading-[1.7] text-[#52525b] md:pr-12">{s.desc} <span className="hidden md:inline text-muted">— {s.detail}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
