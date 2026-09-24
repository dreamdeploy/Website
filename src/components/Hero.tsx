import React, { useState } from 'react';
import { MessageSquare, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Laptop, Smartphone, LayoutDashboard, Palette, Eye } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const [activeTab, setActiveTab] = useState<'website' | 'app' | 'dashboard' | 'branding'>('website');

  const previews = {
    website: {
      title: 'Boutique Business Website',
      category: 'Web Platform',
      image: '/images/project-1-web.jpg',
      badge: 'Sub-second Load',
      specs: ['Responsive Grid', 'WhatsApp Ordering', 'CMS Enabled']
    },
    app: {
      title: 'Android Business App',
      category: 'Mobile System',
      image: '/images/project-2-app.jpg',
      badge: 'Native Experience',
      specs: ['Offline Sync', 'Push Alerts', 'Barcode Ready']
    },
    dashboard: {
      title: 'Admin Operations Hub',
      category: 'Data & Workflow',
      image: '/images/project-3-dashboard.jpg',
      badge: 'Real-time Metrics',
      specs: ['Role Matrix', 'CSV Export', 'Audit Trail']
    },
    branding: {
      title: 'Visual Identity & Guidelines',
      category: 'Brand System',
      image: '/images/project-4-brand.jpg',
      badge: 'Vector Geometry',
      specs: ['Color Tokens', 'Typography Scale', 'Asset Suite']
    }
  };

  const currentPreview = previews[activeTab];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#FAF8F5] bg-grid-subtle">
      {/* Controlled Violet Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] violet-glow-hero pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-[-100px] w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-100px] w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow & Positioning line */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2DDD3] shadow-xs text-xs text-zinc-700">
            <span className="w-2 h-2 rounded-full bg-[#7E57C2] animate-pulse" />
            <span className="font-semibold text-zinc-900">DreamDeploy Studio</span>
            <span className="text-zinc-400">|</span>
            <span className="font-code text-zinc-500">Jammu, India</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-zinc-500 font-code tracking-wider">
            <span>Websites</span>
            <span>•</span>
            <span>Applications</span>
            <span>•</span>
            <span>Digital Systems</span>
            <span>•</span>
            <span>Brand Experiences</span>
          </div>
        </div>

        {/* Hero Editorial Headline & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#13131A] leading-[1.08]">
                Your business deserves a digital experience{' '}
                <span className="font-editorial italic font-normal text-[#5B21B6] tracking-normal">
                  built with purpose.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl">
                DreamDeploy creates websites, applications, dashboards, and brand experiences that help businesses move from <span className="font-semibold text-[#13131A]">ideas to impact</span>.
              </p>
            </div>

            {/* CTAs and Direct Touchpoints */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-[#13131A] hover:bg-[#20202C] rounded-full shadow-lg hover:shadow-glow-violet transition-all duration-300 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-violet-300" />
              </button>

              <a
                href="https://wa.me/917006394236?text=Hi%20DreamDeploy%20team,%20I'd%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-emerald-900 bg-white hover:bg-emerald-50/80 border border-emerald-300/80 rounded-full transition-all duration-200 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-4 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 text-zinc-400" />
                <span>Explore Concepts</span>
              </button>
            </div>

            {/* Authentic Trust / Craftsmanship Markers */}
            <div className="pt-6 border-t border-[#E8E4DC] grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-zinc-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#7E57C2]" />
                  <span>Sub-second Speed</span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">Optimized lightweight code</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-zinc-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#7E57C2]" />
                  <span>Transparent Scope</span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">Clear deliverables & fixed milestones</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-zinc-900 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#7E57C2]" />
                  <span>Direct Jammu Team</span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">No outsourcing layers</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition & Interactive Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Decorative Violet Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#7E57C2] via-purple-500 to-indigo-600 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              {/* Showcase Container */}
              <div className="relative bg-[#0D0D12] text-white rounded-2xl border border-zinc-800 p-4 sm:p-5 shadow-2xl">
                {/* Device Frame Top Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-code text-zinc-400 ml-2">preview.dreamdeploy.in</span>
                  </div>

                  <span className="text-[10px] font-code uppercase tracking-wider bg-violet-950/80 text-violet-300 border border-violet-800/60 px-2 py-0.5 rounded-full">
                    {currentPreview.badge}
                  </span>
                </div>

                {/* Interactive Capability Switcher Tabs */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-zinc-900/90 rounded-xl mb-3 text-xs">
                  <button
                    onClick={() => setActiveTab('website')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                      activeTab === 'website'
                        ? 'bg-violet-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Websites</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('app')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                      activeTab === 'app'
                        ? 'bg-violet-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Android</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                      activeTab === 'dashboard'
                        ? 'bg-violet-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Panels</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('branding')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                      activeTab === 'branding'
                        ? 'bg-violet-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Brand</span>
                  </button>
                </div>

                {/* Main Screen Preview Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-950 border border-zinc-800 group">
                  <img
                    src={currentPreview.image}
                    alt={currentPreview.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-code text-violet-300 font-medium">
                          {currentPreview.category}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {currentPreview.title}
                        </h4>
                      </div>
                      <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white font-medium">
                        Crafted by DreamDeploy
                      </span>
                    </div>
                  </div>
                </div>

                {/* Specs breakdown below image */}
                <div className="mt-3 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-2">
                    {currentPreview.specs.map((spec, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-zinc-900 px-2 py-0.5 rounded text-zinc-300 border border-zinc-800">
                        <span className="w-1 h-1 rounded-full bg-violet-400" />
                        {spec}
                      </span>
                    ))}
                  </div>
                  <span className="text-zinc-500 font-code text-[10px]">
                    Live Architecture
                  </span>
                </div>
              </div>

              {/* Floating Accent Card (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md text-[#13131A] p-3.5 rounded-2xl border border-zinc-200/80 shadow-xl items-center gap-3 animate-pulse">
                <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Your Dream goes live.</div>
                  <div className="text-[10px] text-zinc-500 font-code">Verified Agency Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
