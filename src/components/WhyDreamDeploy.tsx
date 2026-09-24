import React, { useState } from 'react';
import { Target, Eye, Wrench, LifeBuoy, CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';

export const WhyDreamDeploy: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      number: '01',
      title: 'Business-focused thinking',
      subtitle: 'Designing around real commercial objectives, not vanity metrics.',
      icon: Target,
      description: 'We do not start with templates or buzzwords. We analyze your customer conversion path, inventory flow, or booking friction. Every page structure and call-to-action is engineered to produce real business inquiries.',
      dreamDeployWay: 'Direct WhatsApp integration, custom quick forms, zero-friction booking',
      genericWay: 'Generic template buttons leading to empty contact forms',
      tag: 'Objective Driven'
    },
    {
      number: '02',
      title: 'Thoughtful visual design',
      subtitle: 'Interfaces that are clear, considered, and aligned with your brand.',
      icon: Eye,
      description: 'Visual appeal is not about loud animations or rainbow gradients. We apply disciplined typographic scale, generous whitespace, high-contrast readability, and restrained violet accents that command respect.',
      dreamDeployWay: 'Bespoke editorial layouts, tailored color tokens, intentional spacing',
      genericWay: 'Crowded themes with stock icons and unaligned font sizes',
      tag: 'Brand Elevation'
    },
    {
      number: '03',
      title: 'Practical technology',
      subtitle: 'Useful, lightweight solutions rather than unnecessary complexity.',
      icon: Wrench,
      description: 'You do not need an overpriced 50-plugin monster that breaks every update. We build clean, lightweight React & Vite architectures that achieve 95+ Core Web Vitals and load in less than a second.',
      dreamDeployWay: 'Sub-second load times, clean TypeScript, zero plugin bloat',
      genericWay: 'Heavy WordPress stacks with 30 plugins causing slow loading',
      tag: 'Performance First'
    },
    {
      number: '04',
      title: 'Support beyond development',
      subtitle: 'Moving projects smoothly from initial idea to live launch & handover.',
      icon: LifeBuoy,
      description: 'A website is useless if sitting in a staging folder. We manage the entire deployment journey—domain registration, DNS propagation, free SSL certificates, and Google Maps local indexing.',
      dreamDeployWay: 'Turnkey domain, SSL, edge CDN setup, and complete handover training',
      genericWay: 'Handing over raw zip files with no hosting assistance',
      tag: 'Full Handover'
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDE6] text-xs font-semibold text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7E57C2]" />
            <span>Practical Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#13131A]">
            Why businesses work with{' '}
            <span className="font-editorial italic font-normal text-[#6D28D9]">
              DreamDeploy.
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg">
            No empty buzzwords or inflated claims. Just four grounded, practical commitments that define how we design, code, and deploy digital products.
          </p>
        </div>

        {/* Interactive Master-Detail Principle Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 4 Principle Tabs */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              const isActive = activePrinciple === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActivePrinciple(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-violet-400 shadow-premium'
                      : 'bg-white/60 hover:bg-white border-[#E8E4DC] hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#13131A] text-white shadow-xs'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-code text-xs font-bold text-violet-700">
                          {p.number}
                        </span>
                        <span className="text-[10px] font-code bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-full">
                          {p.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#13131A] mb-1">
                        {p.title}
                      </h3>

                      <p className="text-xs text-zinc-500 leading-normal line-clamp-2">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Card */}
          <div className="lg:col-span-7 bg-[#13131A] text-white rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-code font-bold text-violet-400">
                    PRINCIPLE {principles[activePrinciple].number}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400">DreamDeploy Standard</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Verified Approach</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {principles[activePrinciple].title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {principles[activePrinciple].description}
                </p>
              </div>

              {/* Contrast / Reality Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>The DreamDeploy Standard</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {principles[activePrinciple].dreamDeployWay}
                  </p>
                </div>

                <div className="bg-rose-950/20 border border-rose-500/20 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-rose-300 text-xs font-bold">
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>Typical Agency Shortcut</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {principles[activePrinciple].genericWay}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-8 mt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
              <span className="font-code">
                Motto: IDEAS TO IMPACT
              </span>

              <div className="flex items-center gap-2">
                <span>Next principle</span>
                <button
                  onClick={() => setActivePrinciple((prev) => (prev + 1) % principles.length)}
                  className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Next principle"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
