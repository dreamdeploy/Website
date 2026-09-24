import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowUp, MapPin, Mail, Phone, MessageSquare, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setIstTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090D] text-zinc-400 pt-20 pb-12 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet-950/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Brand & Sitemaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-850">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-5">
            <Logo size="lg" theme="dark" showTagline={true} />

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              DreamDeploy creates websites, applications, dashboards, and brand experiences that help businesses move from <strong className="text-white font-medium">ideas to impact</strong>.
            </p>

            {/* Jammu Live Status Pill */}
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 font-code">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1 font-semibold text-white">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                Jammu, IN
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300">{istTime || 'Loading IST...'} IST</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-code">
              Services
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Business Websites (Cafés, Salons, Shops)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Android Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Admin Panels & Dashboards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Logo & Brand Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Deployment & Technical Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio & Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-code">
              Studio
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why DreamDeploy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  4-Stage Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Scope Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Jammu Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-code">
              Direct Contact
            </div>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="mailto:dreamdeploy.in@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-violet-400" />
                  <span>dreamdeploy.in@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7006394236"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+91 7006394236</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917006394236?text=Hi%20DreamDeploy%20team,%20I'd%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Globe className="w-3.5 h-3.5 text-violet-400" />
                  <span className="font-code">Dreamdeploy.in</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Coordinates, Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-zinc-500">
            <span>© {new Date().getFullYear()} DreamDeploy.</span>
            <span>•</span>
            <span className="font-code">Jammu, India (32.7266° N, 74.8570° E)</span>
            <span>•</span>
            <span className="italic text-zinc-400">Your Dream goes live.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-zinc-500 font-code">
              Motto: <span className="text-violet-400 font-semibold">IDEAS TO IMPACT</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
