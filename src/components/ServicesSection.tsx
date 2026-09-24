import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ArrowUpRight, Check, Sparkles, Monitor, Smartphone, LayoutDashboard, Palette, Server, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const [activeBusinessCategory, setActiveBusinessCategory] = useState<'cafe' | 'salon' | 'retail' | 'startup'>('cafe');

  const primaryService = servicesData.find(s => s.isPrimary) || servicesData[0];
  const secondaryServices = servicesData.filter(s => !s.isPrimary);

  const businessShowcases = {
    cafe: {
      type: 'Cafés, Restaurants & Lounges',
      features: ['Interactive dynamic food & beverage menu', 'Direct WhatsApp takeaway / dine-in orders', 'Table reservation booking workflow', 'High-res food gallery & ambiance lookbook'],
      timeline: '7 – 10 Days'
    },
    salon: {
      type: 'Salons, Spas & Wellness Studios',
      features: ['Interactive treatment & package catalog', 'Stylist portfolio & time slot selection', 'Direct WhatsApp / SMS appointment hook', 'Google Maps local reviews highlight'],
      timeline: '8 – 12 Days'
    },
    retail: {
      type: 'Retail Shops & Boutique Brands',
      features: ['Catalog showcase with product categories', 'WhatsApp cart checkout with zero commission', 'Store location, opening hours & contact details', 'Fast mobile search & filter'],
      timeline: '7 – 14 Days'
    },
    startup: {
      type: 'Startups & Professional Services',
      features: ['Lead generation & quote request forms', 'Interactive feature breakdowns & pricing cards', 'High-converting editorial landing page', 'Client inquiry CRM connection'],
      timeline: '10 – 14 Days'
    }
  };

  const currentShowcase = businessShowcases[activeBusinessCategory];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'business-websites': return <Monitor className="w-5 h-5 text-violet-600" />;
      case 'android-apps': return <Smartphone className="w-5 h-5 text-violet-600" />;
      case 'admin-dashboards': return <LayoutDashboard className="w-5 h-5 text-violet-600" />;
      case 'brand-design': return <Palette className="w-5 h-5 text-violet-600" />;
      case 'deployment-setup': return <Server className="w-5 h-5 text-violet-600" />;
      default: return <Sparkles className="w-5 h-5 text-violet-600" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDE6] text-xs font-semibold text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E57C2]" />
              <span>What We Build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#13131A]">
              Crafted digital solutions,{' '}
              <span className="font-editorial italic font-normal text-[#6D28D9]">
                engineered for real business.
              </span>
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              We specialize in custom web development, Android applications, and administrative control panels tailored to your business model.
            </p>
          </div>

          <div className="text-xs font-code text-zinc-500 flex items-center gap-2">
            <span>05 Focused Disciplines</span>
            <span className="text-zinc-300">•</span>
            <span>Jammu, IN</span>
          </div>
        </div>

        {/* FEATURED PRIMARY SERVICE: Business Websites (Large Editorial Bento Box) */}
        <div className="mb-12 bg-white rounded-3xl border border-[#E8E4DC] p-6 sm:p-10 shadow-premium overflow-hidden relative group">
          {/* Subtle violet ambient accent inside featured box */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-100/70 via-purple-50/40 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-code text-xs font-bold text-violet-700 bg-violet-100/80 px-2.5 py-1 rounded-md">
                  {primaryService.number} / PRIMARY SPECIALTY
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                  High Demand
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#13131A] tracking-tight">
                  {primaryService.title}
                </h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  {primaryService.fullDesc}
                </p>
              </div>

              {/* Interactive Industry Selector */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-code">
                  Tailored for your business type:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'cafe', label: 'Café & Dining' },
                    { id: 'salon', label: 'Salons & Wellness' },
                    { id: 'retail', label: 'Retail & Shops' },
                    { id: 'startup', label: 'Startups & Services' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveBusinessCategory(tab.id as any)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        activeBusinessCategory === tab.id
                          ? 'bg-[#13131A] text-white border-[#13131A] shadow-xs'
                          : 'bg-[#FAF8F5] text-zinc-700 border-[#E2DDD3] hover:bg-zinc-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Features Checklist */}
              <div className="bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border border-[#E8E4DC] space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-900 pb-2 border-b border-zinc-200">
                  <span>{currentShowcase.type}</span>
                  <span className="font-code text-violet-700">Timeline: ~{currentShowcase.timeline}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {currentShowcase.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <Check className="w-3.5 h-3.5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectServiceForContact('Business Website')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#13131A] hover:bg-violet-900 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>Build a Website for Your Business</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-zinc-500 font-code">
                  Mobile-first • SSL included
                </span>
              </div>
            </div>

            {/* Right Visual Art Direction */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2DDD3] bg-zinc-950 shadow-xl group/img">
                <img
                  src={primaryService.image || '/images/service-hero-detail.jpg'}
                  alt="Business Website Preview"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-code uppercase text-violet-300">
                        Primary Service
                      </span>
                      <h4 className="text-lg font-bold">
                        Boutique Multi-Device Layouts
                      </h4>
                    </div>
                    <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      Zero Template Clutter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY SERVICES: 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#E8E4DC] p-6 flex flex-col justify-between hover:border-violet-300 hover:shadow-premium transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-code text-xs font-bold text-zinc-400 group-hover:text-violet-600 transition-colors">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-500 bg-[#F0EDE6] px-2 py-0.5 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                  {getServiceIcon(service.id)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#13131A] mb-2 group-hover:text-violet-950 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="pt-2 border-t border-zinc-100 space-y-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 font-code">
                    Included:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-zinc-600">
                      <span className="w-1 h-1 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-zinc-100">
                <button
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-zinc-900 group-hover:text-violet-700 transition-colors cursor-pointer"
                >
                  <span>Inquire for {service.title}</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
