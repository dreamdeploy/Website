import { parallax } from "@/lib/use-pointer-parallax";

const SPARKS = [
  { left: "58%", top: "22%", delay: "0s", size: 4 },
  { left: "72%", top: "14%", delay: "1.4s", size: 3 },
  { left: "88%", top: "40%", delay: "0.7s", size: 5 },
  { left: "64%", top: "62%", delay: "2.1s", size: 3 },
  { left: "94%", top: "70%", delay: "1s", size: 4 },
  { left: "52%", top: "48%", delay: "2.8s", size: 3 },
  { left: "80%", top: "84%", delay: "0.3s", size: 4 },
];

export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-y-15 -z-10 overflow-hidden"
    >
      <div className="absolute -inset-10" style={parallax(-14)}>
        <div
          className="absolute inset-0 bg-cover bg-[70%_center] lg:bg-center"
          style={{ backgroundImage: "url(/images/hero-tech.png)" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#f6f2fc] via-[#f6f2fc]/80 to-transparent lg:via-[#f6f2fc]/55" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#f6f2fc]/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink/60 to-transparent" />

      <div className="absolute inset-0" style={parallax(30)}>
        <div className="absolute top-[18%] right-[10%] size-[42vw] max-w-[620px] rounded-full bg-violet-brand/30 blur-[110px] [animation:drift-a_18s_ease-in-out_infinite]" />
        <div className="absolute right-[30%] bottom-[8%] size-[30vw] max-w-[440px] rounded-full bg-fuchsia-400/25 blur-[100px] [animation:drift-b_22s_ease-in-out_infinite]" />
        <div className="absolute top-[-10%] left-[20%] size-[28vw] max-w-[380px] rounded-full bg-indigo-300/25 blur-[100px] [animation:drift-b_26s_ease-in-out_infinite_reverse]" />
      </div>

      <div
        className="absolute top-[52%] right-[2%] hidden aspect-square w-[62vw] max-w-[900px] -translate-y-1/2 lg:block"
        style={parallax(18)}
      >
        <div className="absolute inset-0 [transform:rotateX(70deg)_rotateZ(-12deg)] [transform-style:preserve-3d]">
          <div className="absolute inset-0 rounded-full border border-violet-400/40 [animation:spin-slow_60s_linear_infinite]">
            <span className="absolute top-1/2 -left-1 size-2 rounded-full bg-violet-400 shadow-[0_0_16px_4px_rgba(167,139,250,0.9)]" />
          </div>
          <div className="absolute inset-[12%] rounded-full border border-dashed border-violet-300/40 [animation:spin-slow_40s_linear_infinite_reverse]">
            <span className="absolute -top-1 left-1/2 size-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_3px_rgba(240,171,252,0.9)]" />
          </div>
        </div>
      </div>

      {SPARKS.map((s) => (
        <span
          key={`${s.left}-${s.top}`}
          className="absolute rounded-full bg-white shadow-[0_0_10px_2px_rgba(196,181,253,0.9)] [animation:twinkle_3.6s_ease-in-out_infinite]"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
