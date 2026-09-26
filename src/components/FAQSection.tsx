'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

// Figures match src/lib/prices.ts and the finance terms in src/lib/finance.ts.
const defaultFaqs: FAQItem[] = [
  {
    question: 'Is it safe to get teeth done in Turkey?',
    answer: 'Dental treatment carries the same clinical risks in Turkey as in the UK; what differs is how easily problems are followed up once you are home. The main safeguards are a clinic licensed by the Turkish Ministry of Health, a named dentist whose qualifications you can check, recognised materials (such as Straumann implants or Ivoclar E-max veneers), a written treatment plan and written guarantee terms. The NHS advises checking what aftercare is available before you travel.',
  },
  {
    question: 'How much do veneers cost in Turkey?',
    answer: 'Porcelain (E-max) veneers in Turkey cost from £190 per tooth, against £800–£1,000 per tooth privately in the UK. A full set of 20 is from £3,800 in Turkey before travel, against £16,000–£20,000 in the UK.',
  },
  {
    question: 'Can I pay monthly for dental treatment?',
    answer: 'Yes. Plans are available over 12, 24 or 36 months. 0% APR representative applies to 12- and 24-month plans, subject to status; 36-month plans carry interest, confirmed when you apply. Pre-qualification is a soft search and does not affect your credit score.',
  },
  {
    question: 'How long do I need to stay in Turkey?',
    answer: 'For veneers or crowns, typically one trip of 5–7 days. Dental implants usually need two trips: 3–5 days for placement, then a second visit 3–6 months later for the permanent crown. All-on-4 and All-on-6 typically need 5–7 days on the first visit.',
  },
  {
    question: 'What happens if something goes wrong after I return home?',
    answer: 'Contact the treating clinic first — partner clinics give written guarantees, but their length and cover vary, and remedial work usually means a return trip. Our UK team coordinates aftercare with the clinic. Some problems may need a UK dentist, whose fees are not covered by the clinic guarantee.',
  },
  {
    question: 'Are the dentists qualified?',
    answer: 'Partner dentists are qualified and licensed in Turkey under the Turkish Ministry of Health. They are not registered with the UK General Dental Council, which only registers dentists practising in the UK. Ask for the treating dentist\'s name, qualifications and clinic licence in writing before you book.',
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
}

export default function FAQSection({ faqs = defaultFaqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">{title}</h2>
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
                  onClick={() => setOpen(isOpen ? null : i)}
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
