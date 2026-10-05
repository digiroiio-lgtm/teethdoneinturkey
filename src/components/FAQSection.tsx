'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'Is it safe to get teeth done in Turkey?',
    answer: 'Safety depends far more on the clinic you choose than on the country. Turkey has clinics working to a high standard and many UK patients have good outcomes, but standards vary considerably between practices, so "is Turkey safe" is the wrong question — "is this clinic safe" is the right one. The risks worth weighing are over-treatment (healthy teeth crowned or filed when they did not need to be), treatment plans compressed into too few days, and the practical difficulty of getting corrective work done once you are back in the UK. Our guide to the risks of Turkey teeth sets these out in full, and is worth reading before you commit to a clinic.',
  },
  {
    question: 'How much do veneers cost in Turkey?',
    answer: 'Veneers in Turkey start from around £190 per tooth, against roughly £900 per tooth privately in the UK — about 79% less. On that basis a full set of 20 units is in the region of £3,800 in Turkey versus about £18,000 in the UK. The final figure depends on the material (composite, porcelain or zirconia), how many teeth are actually treated and the individual clinic, so treat these as starting prices rather than a quote.',
  },
  {
    question: 'Can I pay monthly for dental treatment?',
    answer: 'Monthly payment plans are available from £82/month with 0% APR representative over 12, 24 or 36 months, subject to an affordability and credit assessment. A soft-search pre-qualification lets you check your eligibility without affecting your credit score. Finance is provided by a third-party lender: approval is not guaranteed and not everyone will qualify.',
  },
  {
    question: 'How long do I need to stay in Turkey?',
    answer: 'For veneers, you typically need 5–7 days. Dental implants require two trips: the first for implant placement (3–5 days) and a second trip 3–6 months later for the crowns (3–4 days). All-on-4/All-on-6 treatments typically take 5–7 days for the initial visit.',
  },
  {
    question: 'What happens if something goes wrong after I return home?',
    answer: 'Partner clinics provide a written guarantee on their own work — commonly 5–10 years on implants, and shorter on crowns and veneers. Ask for the exact terms in writing before you commit, because what is covered varies by clinic and by material. A guarantee of this kind covers the clinic’s workmanship; it is not a clinical guarantee that treatment will never fail, and it does not normally cover flights or accommodation for a return visit. We co-ordinate UK-based aftercare and remote follow-up, but corrective work under guarantee usually has to be carried out by the clinic that did the original treatment.',
  },
  {
    question: 'Are the dentists qualified?',
    answer: 'Turkish dentists qualify through a five-year dental degree and are regulated in Turkey by the Ministry of Health and the Turkish Dental Association. They are not registered with the UK General Dental Council, and Turkish qualifications are not interchangeable with GDC registration, which is a UK statutory status. That difference matters mainly for recourse: you cannot complain to the GDC about a dentist practising in Turkey. Ministry of Health licensing is also a legal requirement for every Turkish clinic rather than a mark of quality, so ask separately about the individual dentist’s experience, how often they do your specific treatment, and any international accreditation they hold.',
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
