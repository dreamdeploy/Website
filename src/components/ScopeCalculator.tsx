import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface ScopeCalculatorProps {
  onPreFillContact: (scopeData: {
    service: string;
    estimatedRange: string;
    features: string[];
  }) => void;
}

export const ScopeCalculator: React.FC<ScopeCalculatorProps> = ({ onPreFillContact }) => {
  const [serviceType, setServiceType] = useState<'website' | 'app' | 'dashboard' | 'brand'>('website');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'WhatsApp Order / Inquiry Integration',
    'Custom Domain & Free SSL Setup',
    'Mobile-First Responsive Layout'
  ]);

  const serviceOptions = [
    { id: 'website', title: 'Business Website', basePrice: 14999, baseDays: 7, desc: 'Café, salon, shop, or company website' },
    { id: 'app', title: 'Android App', basePrice: 28999, baseDays: 14, desc: 'Order tracking, inventory, or internal tools' },
    { id: 'dashboard', title: 'Admin Dashboard', basePrice: 24999, baseDays: 12, desc: 'Data control panel, roles, metrics' },
    { id: 'brand', title: 'Logo & Brand Identity', basePrice: 9999, baseDays: 5, desc: 'Logo marks, colors, typography system' },
  ];

  const featureOptions = [
    { id: 'whatsapp', label: 'WhatsApp Order / Inquiry Integration', price: 0, included: true },
    { id: 'domain_ssl', label: 'Custom Domain & Free SSL Setup', price: 0, included: true },
    { id: 'responsive', label: 'Mobile-First Responsive Layout', price: 0, included: true },
    { id: 'cms', label: 'Custom Admin CMS for Menu / Photos', price: 5000, included: false },
    { id: 'payment', label: 'Razorpay / UPI Payment Gateway Hook', price: 4500, included: false },
    { id: 'seo_pro', label: 'Jammu Local SEO & Google Business Setup', price: 3500, included: false },
    { id: 'rush_sprint', label: 'Expedited Express Delivery Sprint', price: 6000, included: false },
  ];

  const toggleFeature = (label: string) => {
    if (selectedFeatures.includes(label)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== label));
    } else {
      setSelectedFeatures([...selectedFeatures, label]);
    }
  };

  const currentService = serviceOptions.find(s => s.id === serviceType)!;

  const additionalCost = featureOptions
    .filter(f => !f.included && selectedFeatures.includes(f.label))
    .reduce((sum, f) => sum + f.price, 0);

  const totalPrice = currentService.basePrice + additionalCost;
  const estimatedDays = currentService.baseDays + (additionalCost > 5000 ? 3 : 0);

  const formattedPrice = `₹${totalPrice.toLocaleString('en-IN')}`;

  const handleApplyToContact = () => {
    onPreFillContact({
      service: currentService.title,
      estimatedRange: formattedPrice,
      features: selectedFeatures
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi DreamDeploy team! I used your Project Estimator on Dreamdeploy.in.\n\nService: ${currentService.title}\nScope Estimate: ~${formattedPrice}\nSelected Features: ${selectedFeatures.slice(0, 3).join(', ')}\n\nI'd like to discuss bringing this live.`
  );

  return (
    <section id="calculator" className="py-24 md:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDE6] text-xs font-semibold text-zinc-700">
            <Calculator className="w-3.5 h-3.5 text-[#7E57C2]" />
            <span>Transparent Scope Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#13131A]">
            Estimate your project scope{' '}
            <span className="font-editorial italic font-normal text-[#6D28D9]">
              in seconds.
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg">
            Select your digital requirements below for an instant indicative estimate. No obligation, 100% transparent.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration Pane */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E4DC] shadow-xs space-y-8">
            {/* Step 1: Select Service Type */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-code">
                  1. Select Digital Service
                </label>
                <span className="text-xs text-zinc-400 font-code">Step 1 of 2</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setServiceType(opt.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      serviceType === opt.id
                        ? 'border-violet-600 bg-violet-50/40 ring-1 ring-violet-600/30'
                        : 'border-[#E8E4DC] bg-[#FAF8F5] hover:bg-zinc-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-[#13131A]">
                        {opt.title}
                      </span>
                      {serviceType === opt.id && (
                        <span className="w-2 h-2 rounded-full bg-violet-600" />
                      )}
                    </div>
                    <p className="text-xs text-zinc-500">
                      {opt.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Additional Features */}
            <div className="space-y-3 pt-4 border-t border-zinc-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-code">
                  2. Choose Specific Capabilities
                </label>
                <span className="text-xs text-zinc-400 font-code">Customized Scope</span>
              </div>

              <div className="space-y-2">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.label);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.label)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-violet-50/30 border-violet-300'
                          : 'bg-[#FAF8F5] border-[#E8E4DC] hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-xs transition-colors ${
                            isChecked
                              ? 'bg-violet-600 text-white'
                              : 'border border-zinc-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs font-medium text-zinc-800">
                          {feat.label}
                        </span>
                      </div>

                      <span className="text-xs font-code text-zinc-500">
                        {feat.price === 0 ? 'Included' : `+₹${feat.price.toLocaleString('en-IN')}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary & Action Pane */}
          <div className="lg:col-span-5 bg-[#13131A] text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 pb-4 border-b border-zinc-800">
              <div className="inline-flex items-center gap-2 text-xs font-code text-violet-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Scope Breakdown</span>
              </div>
              <h3 className="text-xl font-bold">
                {currentService.title}
              </h3>
              <p className="text-xs text-zinc-400">
                {selectedFeatures.length} features selected
              </p>
            </div>

            {/* Price & Timeline Metric */}
            <div className="space-y-4">
              <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800">
                <div className="text-xs font-code text-zinc-400 uppercase">
                  Estimated Investment Range:
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 flex items-baseline gap-2">
                  <span>{formattedPrice}</span>
                  <span className="text-xs text-zinc-400 font-normal">approx. base</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs bg-zinc-900/60 px-4 py-3 rounded-xl border border-zinc-800 text-zinc-300">
                <span className="font-code text-zinc-400">Estimated Delivery:</span>
                <span className="font-bold text-white">~{estimatedDays} Business Days</span>
              </div>
            </div>

            {/* Selected features preview */}
            <div className="space-y-2">
              <div className="text-[11px] font-code uppercase text-zinc-400">
                Key Deliverables in Scope:
              </div>
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {selectedFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleApplyToContact}
                className="w-full py-3.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-full transition-all flex items-center justify-center gap-2 shadow-glow-violet cursor-pointer"
              >
                <span>Send Scope to DreamDeploy</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/917006394236?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/80 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Discuss This on WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-zinc-500 text-center font-code">
              *Final quotes are confirmed following discovery alignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
