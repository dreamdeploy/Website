import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageSquare, Menu, X, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'process', label: 'Process' },
    { id: 'calculator', label: 'Estimator' },
    { id: 'about', label: 'Studio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DC]/80 shadow-[0_4px_24px_rgba(19,19,26,0.04)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Logo
              size="md"
              theme="light"
              onClick={() => handleLinkClick('hero')}
            />

            {/* Studio Badge - Desktop only */}
            <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-zinc-300 text-xs text-zinc-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </span>
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-violet-600" />
                Jammu, IN
              </span>
              <span className="text-zinc-400">•</span>
              <span className="text-zinc-500">Open for projects</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F0EDE6]/80 p-1.5 rounded-full border border-[#E2DDD3]/90 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-[#13131A] bg-white shadow-xs font-semibold'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7E57C2] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/917006394236?text=Hi%20DreamDeploy%20team,%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 rounded-full transition-all duration-200"
              title="Chat with DreamDeploy on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => handleLinkClick('contact')}
              className="relative inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#13131A] hover:bg-[#20202C] rounded-full shadow-sm hover:shadow-glow-violet transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-xs font-semibold text-white bg-[#13131A] px-3.5 py-1.5 rounded-full"
            >
              Start Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-800 hover:text-black focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-[#E8E4DC] shadow-xl p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs text-zinc-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-600" />
                Jammu, India
              </span>
              <span className="font-code text-zinc-500">Dreamdeploy.in</span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-violet-100/60 text-violet-950 font-semibold'
                    : 'text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-zinc-200 flex flex-col gap-2.5">
              <a
                href="https://wa.me/917006394236?text=Hi%20DreamDeploy%20team,%20I'd%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-emerald-800 bg-emerald-100/70 rounded-xl"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                Chat on WhatsApp (+91 7006394236)
              </a>

              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-[#13131A] rounded-xl"
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
                Start a Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
