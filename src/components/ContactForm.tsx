import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Send, CheckCircle, MessageSquare, Phone, Mail, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactFormProps {
  preFillData?: {
    service?: string;
    estimatedRange?: string;
    features?: string[];
  };
}

export const ContactForm: React.FC<ContactFormProps> = ({ preFillData }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: preFillData?.service || 'Business Website',
    budgetRange: preFillData?.estimatedRange ? `${preFillData.estimatedRange} (from Estimator)` : '₹15,000 – ₹30,000',
    timeline: 'Standard (7 – 14 Days)',
    preferredContact: 'whatsapp',
    message: preFillData?.features
      ? `Estimated Scope: ${preFillData.estimatedRange}\nFeatures: ${preFillData.features.join(', ')}`
      : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const services = [
    'Business Website',
    'Android Application',
    'Admin Panel / Dashboard',
    'Logo & Brand Design',
    'Deployment & Technical Setup',
    'Not Sure Yet'
  ];

  const budgetRanges = [
    '₹10,000 – ₹20,000',
    '₹20,000 – ₹40,000',
    '₹40,000 – ₹80,000',
    '₹80,000+',
    'Flexible / Seeking Consultation'
  ];

  const validate = () => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for verification.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() && !preFillData?.features) {
      errs.message = 'Please share a brief note about your project.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7E57C2', '#8B5CF6', '#A78BFA', '#10B981']
        });
      } catch (err) {
        console.log('Confetti effect triggered');
      }
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dreamdeploy.in@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const generateWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hi DreamDeploy team! I am reaching out from Dreamdeploy.in.\n\n*Name:* ${formData.name || 'Client'}\n*Business:* ${formData.businessName || 'N/A'}\n*Service:* ${formData.service}\n*Budget:* ${formData.budgetRange}\n*Note:* ${formData.message || 'Looking to discuss a new build.'}`
    );
    return `https://wa.me/917006394236?text=${text}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC] p-6 sm:p-10 shadow-premium">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-[#13131A]">
              Inquiry Received
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Thank you, <span className="font-semibold text-zinc-900">{formData.name}</span>. Our team in Jammu will review your project details and respond within 24 hours.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DC] max-w-md mx-auto space-y-3 text-left text-xs">
            <div className="font-bold text-zinc-800">Your Inquiry Summary:</div>
            <div className="flex justify-between text-zinc-600">
              <span>Service:</span>
              <span className="font-semibold text-zinc-900">{formData.service}</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>Preferred Contact:</span>
              <span className="capitalize font-semibold text-zinc-900">{formData.preferredContact}</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>Phone / WhatsApp:</span>
              <span className="font-semibold text-zinc-900">{formData.phone}</span>
            </div>
          </div>

          {/* Quick Immediate Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={generateWhatsAppDirectLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-emerald-900 bg-emerald-100/90 hover:bg-emerald-200/90 rounded-full transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Continue on WhatsApp Now</span>
            </a>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  businessName: '',
                  email: '',
                  phone: '',
                  service: 'Business Website',
                  budgetRange: '₹15,000 – ₹30,000',
                  timeline: 'Standard (7 – 14 Days)',
                  preferredContact: 'whatsapp',
                  message: '',
                });
              }}
              className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
            <div>
              <h3 className="text-xl font-bold text-[#13131A]">
                Start Your Project Inquiry
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5">
                Tell us about your brand, requirements, or concept.
              </p>
            </div>

            <span className="text-[11px] font-code text-violet-700 bg-violet-50 px-2.5 py-1 rounded-full">
              Response &lt; 24h
            </span>
          </div>

          {/* Name & Business Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Your Name *</span>
                {errors.name && <span className="text-red-500 text-[11px]">{errors.name}</span>}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all ${
                  errors.name ? 'border-red-400' : 'border-[#E2DDD3] focus:border-violet-500'
                }`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700">
                Business or Brand Name
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Aura Café Jammu"
                className="w-full px-4 py-3 rounded-xl border border-[#E2DDD3] text-sm text-zinc-900 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Phone / WhatsApp Number *</span>
                {errors.phone && <span className="text-red-500 text-[11px]">{errors.phone}</span>}
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 7006394236"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all ${
                    errors.phone ? 'border-red-400' : 'border-[#E2DDD3] focus:border-violet-500'
                  }`}
                />
                <Phone className="w-4 h-4 text-zinc-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 flex items-center justify-between">
                <span>Email Address</span>
                {errors.email && <span className="text-red-500 text-[11px]">{errors.email}</span>}
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rahul@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all ${
                    errors.email ? 'border-red-400' : 'border-[#E2DDD3] focus:border-violet-500'
                  }`}
                />
                <Mail className="w-4 h-4 text-zinc-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Service Selector & Budget Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700">
                Service Required *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E2DDD3] text-sm text-zinc-900 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700">
                Estimated Budget Range
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E2DDD3] text-sm text-zinc-900 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
              >
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-700">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                { id: 'email', label: 'Email', icon: Mail },
                { id: 'call', label: 'Phone Call', icon: Phone },
              ].map((m) => {
                const Icon = m.icon;
                const isSelected = formData.preferredContact === m.id;
                return (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setFormData({ ...formData, preferredContact: m.id as any })}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-violet-600 bg-violet-50 text-violet-950 font-semibold ring-1 ring-violet-600/30'
                        : 'border-[#E8E4DC] bg-[#FAF8F5] text-zinc-600 hover:bg-zinc-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Message / Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 flex items-center justify-between">
              <span>Tell us about your project & goals *</span>
              {errors.message && <span className="text-red-500 text-[11px]">{errors.message}</span>}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. We are launching a new café in Jammu and need an interactive food & drink menu with direct WhatsApp order placement and Google Maps SEO."
              className={`w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all ${
                errors.message ? 'border-red-400' : 'border-[#E2DDD3] focus:border-violet-500'
              }`}
            />
          </div>

          {/* Form Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-zinc-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Direct communication • Confidential scope</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold text-white bg-[#13131A] hover:bg-[#2A2A38] rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-glow-violet cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Project Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Direct Verified Agency Contact Footer Strip */}
      <div className="mt-8 pt-6 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-600">
        <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
          <span className="font-code">Email Studio:</span>
          <button
            onClick={handleCopyEmail}
            className="font-semibold text-zinc-900 hover:text-violet-700 flex items-center gap-1 cursor-pointer"
            title="Click to copy email"
          >
            <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
            {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-zinc-400" />}
          </button>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
          <span className="font-code">Direct Phone:</span>
          <a
            href="tel:7006394236"
            className="font-semibold text-zinc-900 hover:text-violet-700"
          >
            7006394236
          </a>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
          <span className="font-code">HQ Studio:</span>
          <span className="font-semibold text-zinc-900">Jammu, India</span>
        </div>
      </div>
    </div>
  );
};
