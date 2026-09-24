import React, { useState } from 'react';
import { faqsData } from '../data/faqsData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Process & Timeline', 'Cost & Payment', 'Technical'];

  const filteredFaqs = activeCategory === 'All'
    ? faqsData
    : faqsData.filter(f => f.category === activeCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EDE6] text-xs font-semibold text-zinc-700">
            <HelpCircle className="w-3.5 h-3.5 text-[#7E57C2]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#13131A]">
            Answers to common questions.
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base">
            Everything you need to know about working with DreamDeploy, our sprint timelines, and project handover.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#13131A] text-white shadow-xs'
                  : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-[#E8E4DC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-violet-400 shadow-premium'
                    : 'bg-white border-[#E8E4DC] hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-code text-xs font-semibold text-violet-600">
                      Q{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#13131A]">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-violet-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-12 text-center p-6 bg-[#F0EDE6] rounded-2xl border border-[#E2DDD3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-bold text-sm text-zinc-900">Have a specific question not covered here?</div>
            <div className="text-xs text-zinc-500 mt-0.5">Reach out directly via WhatsApp for a quick response.</div>
          </div>

          <a
            href="https://wa.me/917006394236?text=Hi%20DreamDeploy,%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-900 bg-white hover:bg-emerald-50 rounded-full border border-emerald-300 shadow-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ask on WhatsApp (+91 7006394236)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
