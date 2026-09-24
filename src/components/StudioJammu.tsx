import React from 'react';
import { MapPin, Mail, Phone, Clock, Coffee, ShieldCheck, Sparkles, Laptop } from 'lucide-react';

export const StudioJammu: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#E8E4DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Studio Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD8CD] text-xs font-semibold text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E57C2]" />
              <span>Studio Origin</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#13131A] leading-[1.15]">
              Rooted in Jammu.{' '}
              <span className="font-editorial italic font-normal text-[#6D28D9]">
                Engineered for global standards.
              </span>
            </h2>

            <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p>
                DreamDeploy was founded in <strong>Jammu, India</strong> with a single driving premise: regional and growing businesses deserve the same caliber of design, speed, and reliability as top-tier global product studios.
              </p>
              <p>
                We reject bloated corporate agency layers. When you partner with DreamDeploy, you communicate directly with senior practitioners who architect your visual direction and write your code.
              </p>
            </div>

            {/* Jammu Physical Presence & Remote Availability */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-[#E8E4DC] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <Coffee className="w-4 h-4 text-[#7E57C2]" />
                  <span>Local In-Person Meetings</span>
                </div>
                <p className="text-xs text-zinc-500 leading-normal">
                  Based in Jammu. Available for face-to-face discovery sessions at your venue or café.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#E8E4DC] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <Laptop className="w-4 h-4 text-[#7E57C2]" />
                  <span>Pan-India Collaboration</span>
                </div>
                <p className="text-xs text-zinc-500 leading-normal">
                  Serving clients across India with rapid async updates and video reviews.
                </p>
              </div>
            </div>

            {/* Quick Contact Badges */}
            <div className="pt-4 flex flex-wrap gap-3 text-xs font-code">
              <a
                href="mailto:dreamdeploy.in@gmail.com"
                className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#E2DDD3] text-zinc-800 hover:border-violet-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-violet-600" />
                <span>dreamdeploy.in@gmail.com</span>
              </a>

              <a
                href="tel:7006394236"
                className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#E2DDD3] text-zinc-800 hover:border-violet-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>+91 7006394236</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Card & Atmosphere */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#E2DDD3] bg-[#13131A] text-white shadow-2xl">
              {/* Image visual */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/studio-jammu.jpg"
                  alt="DreamDeploy Studio Jammu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131A] via-black/30 to-transparent" />
              </div>

              {/* Studio Info Panel */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-violet-400 font-code font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>Jammu, Jammu & Kashmir (UT), India</span>
                  </div>
                  <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2.5 py-0.5 rounded-full text-[10px] font-code">
                    Active Studio
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800 text-xs">
                  <div>
                    <div className="text-zinc-500 font-code uppercase text-[10px]">
                      Working Hours
                    </div>
                    <div className="font-semibold text-zinc-200 mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-400" />
                      <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-zinc-500 font-code uppercase text-[10px]">
                      Standard Handover
                    </div>
                    <div className="font-semibold text-zinc-200 mt-0.5 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-violet-400" />
                      <span>100% Code & Asset Ownership</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-zinc-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  <span>Direct founder attention on every client build.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
