// Headless FAQPage structured data for pages that lay out their own FAQ markup.
//
// Why this exists: the 2026-09-21 schema audit (fe2f1ed, "Fix B") removed the
// hand-written FAQPage JSON-LD from 10 pages on the stated basis that each one
// also rendered <FAQSection>, which emits its own FAQPage block and would have
// made the manual node a duplicate. That was true for 2 of them. The other 8 —
// /finance-options-uk, /monthly-payment, /prices/dental-implants-turkey-cost,
// /prices/all-on-6-dental-implants-turkey-package,
// /prices/hollywood-smile-turkey-package, /turkey-teeth-clinic,
// /free-treatment-plan and /contact — lay out their FAQs inline and never
// imported FAQSection, so they lost their structured data outright and nothing
// replaced it. Restored 2026-10-04 through this component instead of eight more
// copies of the same literal, so the next de-duplication pass has one place to
// look and one rule to apply.
//
// The rule: a page emits its FAQPage block EITHER by rendering <FAQSection>
// (which carries its own) OR by rendering <FaqJsonLd>. Never both — that is the
// duplicate Fix B was right to remove.
//
// Note on expectations: Google restricted FAQ rich results to authoritative
// government and health sites in August 2023, so this is not an SERP-snippet
// play. It is entity/answerability coverage for AI answer engines and parity
// with the comparable pages that kept their schema.

interface FaqJsonLdItem {
  q: string;
  a: string;
}

interface FaqJsonLdProps {
  /** Unique element id, e.g. "faq-schema-finance-options-uk". */
  id: string;
  faqs: FaqJsonLdItem[];
}

export default function FaqJsonLd({ id, faqs }: FaqJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
