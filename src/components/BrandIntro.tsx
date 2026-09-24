import React from 'react';
import { Compass, Code2, Sparkles, Layers } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F3EF] border-y border-[#E8E4DC] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-100/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Brand Statement & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD8CD] text-xs font-semibold text-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E57C2]" />
              <span>Studio Manifesto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#13131A] leading-[1.15]">
              We turn ideas into{' '}
              <span className="font-editorial italic font-normal text-[#6D28D9]">
                purposeful digital experiences.
              </span>
            </h2>

            <div className="space-y-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
              <p>
                DreamDeploy helps businesses establish a stronger digital presence through thoughtful design, practical technology, and reliable implementation.
              </p>
              <p className="text-sm sm:text-base text-zinc-500">
                Based in Jammu, India, we bridge the gap between creative ambition and dependable technical execution. Every project is crafted with intention—built to load fast, look distinct, and genuinely work for your business.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs font-code text-zinc-600">
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-[#E2DDD3]">
                <span className="font-semibold text-zinc-900">Tagline:</span>
                <span className="italic">Your Dream goes live.</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-[#E2DDD3]">
                <span className="font-semibold text-zinc-900">Motto:</span>
                <span className="text-[#7E57C2] font-bold">IDEAS TO IMPACT</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Editorial Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#E8E4DC] shadow-xs hover:border-violet-300 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-[#7E57C2] mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#13131A] mb-2">
                Business-First Architecture
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                We do not build technology for the sake of complexity. Every layout, button, and database schema exists to solve an operational or commercial need.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8E4DC] shadow-xs hover:border-violet-300 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-[#7E57C2] mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#13131A] mb-2">
                Restrained Modern Aesthetics
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Clean typography, balanced whitespace, and purposeful micro-interactions that elevate your brand without chasing fleeting design fads.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8E4DC] shadow-xs hover:border-violet-300 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-[#7E57C2] mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#13131A] mb-2">
                High-Performance Code
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Built with modern web standards, lightweight codebases, and sub-second asset delivery so your customers never experience lag.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8E4DC] shadow-xs hover:border-violet-300 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-[#7E57C2] mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#13131A] mb-2">
                Direct Jammu Accountability
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                You work directly with the creators building your digital product. Clear communication, transparent progress, and local presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
