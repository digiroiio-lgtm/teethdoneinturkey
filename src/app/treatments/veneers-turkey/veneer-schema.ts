import { veneerFaqs, veneerSections, veneerSources, VENEER_DESCRIPTION, VENEER_TITLE, VENEER_UPDATED } from "./veneer-content";
const site = "https://www.teethdoneinturkey.co.uk";
const url = `${site}/treatments/veneers-turkey`;

export const veneerGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article", "@id": `${url}#article`, url,
      headline: VENEER_TITLE, description: VENEER_DESCRIPTION,
      datePublished: "2026-01-01", dateModified: VENEER_UPDATED, inLanguage: "en-GB",
      author: { "@id": `${site}/#organization` }, publisher: { "@id": `${site}/#organization` },
      mainEntityOfPage: url, image: `${site}/opengraph-image`,
      about: { "@type": "MedicalProcedure", name: "Dental veneer" },
      articleBody: veneerSections.flatMap(section => [section.title, section.answer, ...section.paragraphs,
        ...(section.table ? [section.table.caption, section.table.columns.join(": "), ...section.table.rows.map(row => row.join(": "))] : []),
        ...(section.quote ? [section.quote.text, `${section.quote.name}, ${section.quote.role}. Public statement, ${section.quote.date}.`] : []),
      ]).join("\n\n"),
      citation: [...Object.values(veneerSources).map(source => source.href), `${site}/prices/veneers-turkey-cost`],
    },
    {
      "@type": "FAQPage", "@id": `${url}#faq`,
      mainEntity: veneerFaqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
        { "@type": "ListItem", position: 2, name: "Treatments", item: `${site}/treatments` },
        { "@type": "ListItem", position: 3, name: "Veneers Turkey", item: url },
      ],
    },
  ],
};
