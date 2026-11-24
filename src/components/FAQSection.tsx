'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  introduction?: string;
  emitSchema?: boolean;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions', introduction, emitSchema = true }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section className="py-16 bg-white">
      {emitSchema && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">{title}</h2>
        {introduction && <p className="text-gray-600 leading-relaxed mb-6">{introduction}</p>}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-xl overflow-hidden border transition-colors ${
                  isOpen ? 'border-blue-200 shadow-md shadow-blue-900/5' : 'border-gray-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    if (!isOpen) trackEvent('faq_open', { question: faq.question.slice(0, 80), position: i + 1 });
                    setOpen(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-[#1e40af] text-white' : 'bg-gray-100 text-[#1e40af]'
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="faq-answer px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
