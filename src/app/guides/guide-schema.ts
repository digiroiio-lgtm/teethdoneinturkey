import { guideGroups, guidesFaqs, guideSources, GUIDES_DESCRIPTION, GUIDES_TITLE, GUIDES_UPDATED } from "./guide-content";
const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const url = `${SITE_URL}/guides`;

export const guidesGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage", "@id": `${url}#collection`, url,
      name: GUIDES_TITLE, description: GUIDES_DESCRIPTION, inLanguage: "en-GB",
      dateModified: GUIDES_UPDATED,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${url}#library` },
      hasPart: [{ "@id": `${url}#reading-guide` }, { "@id": `${url}#faq` }],
    },
    {
      "@type": "ItemList", "@id": `${url}#library`, name: "UK patient guide reading paths",
      numberOfItems: guideGroups.flatMap(group => group.guides).length,
      itemListElement: guideGroups.flatMap(group => group.guides).map((guide, index) => ({
        "@type": "ListItem", position: index + 1,
        item: { "@type": "WebPage", name: guide.title, url: `${SITE_URL}${guide.href}` },
      })),
    },
    {
      "@type": "Article", "@id": `${url}#reading-guide`,
      url: `${url}#guides-reading-guide`, headline: GUIDES_TITLE,
      description: GUIDES_DESCRIPTION, inLanguage: "en-GB", dateModified: GUIDES_UPDATED,
      mainEntityOfPage: { "@id": `${url}#collection` },
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      image: `${SITE_URL}/opengraph-image`,
      articleSection: guideGroups.map(group => group.label),
      articleBody: guideGroups.flatMap(group => [
        group.title, group.answer, ...group.paragraphs,
        ...(group.quote ? [group.quote.text, `${group.quote.name}, ${group.quote.role}. Statement published ${group.quote.date}.`] : []),
        ...group.guides.flatMap(guide => [guide.title, ...guide.paragraphs]),
      ]).join("\n\n"),
      citation: Object.values(guideSources).map(source => source.url),
    },
    {
      "@type": "FAQPage", "@id": `${url}#faq`,
      mainEntity: guidesFaqs.map(faq => ({
        "@type": "Question", name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: url },
      ],
    },
  ],
};
