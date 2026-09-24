import React, { useState } from 'react';
import { processStages } from '../data/processData';
import { Clock, CheckCircle, FileCheck, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#E8E4DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD8CD] text-xs font-semibold text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E57C2]" />
              <span>Step-by-Step Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#13131A]">
              A disciplined four-stage{' '}
              <span className="font-editorial italic font-normal text-[#6D28D9]">
                path to launch.
              </span>
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              We eliminate guesswork with a predictable, transparent workflow from discovery through live deployment.
            </p>
          </div>

          <div className="text-xs font-code text-zinc-500 bg-white/70 px-4 py-2 rounded-xl border border-[#E2DDD3]">
            Estimated Total Sprint: ~10 to 18 Days
          </div>
        </div>

        {/* 4 Process Step Cards in a Horizontal Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {processStages.map((stage, idx) => {
            const isSelected = selectedStage === idx;
            return (
              <div
                key={stage.number}
                onClick={() => setSelectedStage(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  isSelected
                    ? 'bg-white border-violet-500 shadow-premium ring-2 ring-violet-500/20'
                    : 'bg-white/70 hover:bg-white border-[#E8E4DC]'
                }`}
              >
                {/* Step Number & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-code text-sm font-bold px-2.5 py-1 rounded-lg ${
                      isSelected
                        ? 'bg-[#13131A] text-white'
                        : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {stage.number}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-code text-zinc-500">
                    <Clock className="w-3 h-3 text-violet-600" />
                    {stage.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#13131A] mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-normal line-clamp-2">
                  {stage.tagline}
                </p>

                {/* Active Indicator Arrow */}
                {isSelected && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b border-r border-violet-500 transform rotate-45" />
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase Box */}
        <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 sm:p-10 shadow-premium relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Stage Description & Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-code text-violet-700 font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Stage {processStages[selectedStage].number} Deep Dive</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#13131A]">
                  {processStages[selectedStage].title}: {processStages[selectedStage].tagline}
                </h3>
                <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {processStages[selectedStage].description}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-code">
                  Stage Milestones & Activities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {processStages[selectedStage].details.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DE]">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Deliverable Card */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8E4DC] space-y-5">
              <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm">
                <FileCheck className="w-5 h-5 text-violet-600" />
                <span>Stage Output & Handover</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-zinc-200 space-y-1">
                <div className="text-[11px] font-code text-zinc-400 uppercase">
                  Tangible Deliverable:
                </div>
                <div className="text-base font-bold text-violet-950">
                  {processStages[selectedStage].deliverable}
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-zinc-200 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-code">Typical Stage Time:</span>
                <span className="font-bold text-zinc-900">{processStages[selectedStage].duration}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedStage((prev) => (prev + 1) % processStages.length)}
                  className="w-full py-3 text-xs font-semibold text-zinc-800 hover:text-black bg-white hover:bg-zinc-100 rounded-xl border border-zinc-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>
                    {selectedStage === processStages.length - 1
                      ? 'Back to Stage 01 (Discover)'
                      : `Proceed to Stage 0${selectedStage + 2} (${processStages[selectedStage + 1].title})`}
                  </span>
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
