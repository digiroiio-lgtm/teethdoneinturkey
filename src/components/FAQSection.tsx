'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'Is it safe to get teeth done in Turkey?',
    answer: 'Yes, Turkey has world-class JCI-accredited dental clinics with highly trained dentists, many of whom have trained or practised in Europe. The clinics use the same brand-name materials as UK practices (Straumann implants, Ivoclar veneers) and follow strict sterilisation protocols. Hundreds of thousands of international patients visit Turkey for dental work each year with excellent outcomes.',
  },
  {
    question: 'How much do veneers cost in Turkey?',
    answer: 'Veneers in Turkey cost from £190 per tooth, compared to £900+ in the UK — a saving of around 79%. A full set of 20 veneers costs £3,800 in Turkey vs £18,000 in the UK.',
  },
  {
    question: 'Can I pay monthly for dental treatment?',
    answer: 'Yes, we offer monthly payment plans starting from £82/month. Plans are available over 12, 24, or 36 months. You can pre-qualify online in under 60 seconds with no impact on your credit score.',
  },
  {
    question: 'How long do I need to stay in Turkey?',
    answer: 'For veneers, you typically need 5–7 days. Dental implants require two trips: the first for implant placement (3–5 days) and a second trip 3–6 months later for the crowns (3–4 days). All-on-4/All-on-6 treatments typically take 5–7 days for the initial visit.',
  },
  {
    question: 'What happens if something goes wrong after I return home?',
    answer: 'All our partner clinics offer guarantees of up to 10 years on their work. We also provide UK-based aftercare co-ordination, and any issues can be addressed either remotely or on a return visit. Our patient support team is available throughout your recovery.',
  },
  {
    question: 'Are the dentists qualified?',
    answer: 'Yes. All our partner dentists hold Turkish Dental Association qualifications equivalent to UK GDC registration, and many hold international accreditations. Many have trained in Germany, the UK, or the USA. We only work with clinics accredited by JCI or the Turkish Ministry of Health.',
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
}

export default function FAQSection({ faqs = defaultFaqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#1e40af] transition-transform flex-shrink-0 ml-3 ${open === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
