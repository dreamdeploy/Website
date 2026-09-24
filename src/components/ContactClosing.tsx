import React from 'react';
import { ContactForm } from './ContactForm';
import { MessageSquare, Mail, Phone, MapPin, Sparkles, ArrowUpRight, Clock } from 'lucide-react';
import { Logo } from './Logo';

interface ContactClosingProps {
  preFillData?: {
    service?: string;
    estimatedRange?: string;
    features?: string[];
  };
  onScrollToForm: () => void;
}

export const ContactClosing: React.FC<ContactClosingProps> = ({ preFillData }) => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0D0D12] text-white relative overflow-hidden">
      {/* Restrained Violet Volumetric Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-radial from-violet-600/15 via-purple-900/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Closing Narrative */}
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-code text-violet-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Build Something Memorable</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Ready to bring your idea{' '}
            <span className="font-editorial italic font-normal text-violet-400">
              to life?
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Tell us about your business, your idea, or the digital experience you want to build. Let's explore what DreamDeploy can create together.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://wa.me/917006394236?text=Hi%20DreamDeploy%20team,%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-950" />
              <span>Chat on WhatsApp (+91 7006394236)</span>
            </a>

            <a
              href="mailto:dreamdeploy.in@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-full transition-colors"
            >
              <Mail className="w-4 h-4 text-violet-400" />
              <span>dreamdeploy.in@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Main 2-Column Grid: Left Studio Details + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Studio Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-900/80 rounded-3xl border border-zinc-800/90 p-6 sm:p-8 space-y-6">
              {/* Logo in dark treatment */}
              <div className="pb-6 border-b border-zinc-800">
                <Logo size="lg" theme="dark" showTagline={true} />
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-950/60 border border-violet-800/40 flex items-center justify-center text-violet-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-code text-zinc-400 uppercase">Studio Location</div>
                    <div className="font-semibold text-white mt-0.5">Jammu, India</div>
                    <div className="text-xs text-zinc-500">Available for local meetings & pan-India remote builds</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-code text-zinc-400 uppercase">Phone & WhatsApp</div>
                    <a href="tel:7006394236" className="font-semibold text-white hover:text-violet-300 transition-colors block mt-0.5">
                      +91 7006394236
                    </a>
                    <div className="text-xs text-zinc-500">Direct founder line</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-950/60 border border-violet-800/40 flex items-center justify-center text-violet-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-code text-zinc-400 uppercase">Direct Email</div>
                    <a href="mailto:dreamdeploy.in@gmail.com" className="font-semibold text-white hover:text-violet-300 transition-colors block mt-0.5">
                      dreamdeploy.in@gmail.com
                    </a>
                    <div className="text-xs text-zinc-500">Official inquiries & RFPs</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-code text-zinc-400 uppercase">Response Time</div>
                    <div className="font-semibold text-white mt-0.5">Under 24 Hours</div>
                    <div className="text-xs text-zinc-500">Monday to Saturday (IST)</div>
                  </div>
                </div>
              </div>

              {/* Tagline Box */}
              <div className="p-4 bg-zinc-950/80 rounded-2xl border border-zinc-800/80 space-y-1">
                <div className="text-[10px] font-code uppercase text-zinc-500 tracking-wider">
                  DreamDeploy Promise
                </div>
                <div className="text-xs text-zinc-300">
                  Fixed pricing milestones • Clean code ownership • Turnkey deployment
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Card */}
            <div className="bg-gradient-to-r from-emerald-950/40 to-zinc-900 p-6 rounded-3xl border border-emerald-800/40 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold text-emerald-400">Prefer immediate chat?</div>
                <div className="text-xs text-zinc-400">Get a response on WhatsApp in minutes during business hours.</div>
              </div>

              <a
                href="https://wa.me/917006394236?text=Hi%20DreamDeploy%20team,%20I'd%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-zinc-950 flex-shrink-0 transition-all shadow-md"
                aria-label="Direct WhatsApp chat"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form Component */}
          <div className="lg:col-span-7">
            <ContactForm preFillData={preFillData} />
          </div>
        </div>
      </div>
    </section>
  );
};
