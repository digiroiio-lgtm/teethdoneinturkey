'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'Is it safe to get teeth done in Turkey?',
    answer: 'Safety depends on the clinic you choose rather than on the country. Clinics in Turkey are licensed by the Turkish Ministry of Health, and any clinic legally treating international patients also needs a separate health tourism authorisation — that is the status worth checking first, because JCI accreditation is voluntary and most JCI-accredited organisations in Turkey are hospitals rather than dental clinics. A well-run clinic uses the same brand-name materials as UK practices (Straumann implants, Ivoclar veneers) and follows the same sterilisation protocols. Turkey treats a large number of international dental patients each year, and outcomes at registered clinics are broadly comparable to equivalent private treatment in the UK.',
  },
  {
    question: 'How much do veneers cost in Turkey?',
    answer: 'Veneers in Turkey cost from £190 per tooth, compared to £900+ in the UK — a saving of around 79%. A full set of 20 veneers costs £3,800 in Turkey vs £18,000 in the UK.',
  },
  {
    question: 'Can I pay monthly for dental treatment?',
    answer: 'Yes. Monthly payment plans run over 12, 24 or 36 months. The monthly figure depends on the treatment total: 10 E-max veneers (£1,900) work out at £53 a month over 36 months, a 20-crown Hollywood Smile package (£2,800) at £78, and a 20-veneer makeover (£3,800) at £106, all at 0% APR representative. Pre-qualification uses a soft search that does not affect your credit score. These are example calculations rather than a credit offer — finance is subject to status, a credit check and lender approval, and not everyone will qualify.',
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
    answer: 'Yes. All our partner dentists hold Turkish Dental Association qualifications equivalent to UK GDC registration, and many hold international accreditations. Many have trained in Germany, the UK, or the USA. We only work with clinics registered with the Turkish Ministry of Health.',
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
