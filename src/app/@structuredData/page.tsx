import { LAST_UPDATED, LAST_REVIEWED, homeFaqs } from "../home-content";
import { REVIEWER_PERSON } from "@/lib/reviewer";

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Turkey Teeth Guide: Veneers, Implants & Costs for UK Patients",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
      dateModified: LAST_UPDATED,
      lastReviewed: LAST_REVIEWED,
      reviewedBy: REVIEWER_PERSON,
      mainEntity: { "@id": `${SITE_URL}/#patient-guide` },
    },
    {
      "@type": "Article",
      "@id": `${SITE_URL}/#patient-guide`,
      headline: "Turkey Teeth Guide: Veneers, Implants & Costs for UK Patients",
      description: "Practical UK patient guidance on comparing dental treatments, written quotes, travel, clinic checks and aftercare in Turkey.",
      mainEntityOfPage: { "@id": `${SITE_URL}/#webpage` },
      inLanguage: "en-GB",
      dateModified: LAST_UPDATED,
      // The service takes responsibility for this editorial guide. Do not
      // invent an individual author or a new medical review for this edit.
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      image: `${SITE_URL}/opengraph-image`,
      citation: [
        "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment",
        "https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: homeFaqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }],
    },
  ],
};

// A root-layout slot places this homepage-only graph in the actual <head>
// of the initial server HTML, without client-side DOM injection.
export default function HomepageStructuredData() {
  return <script id="homepage-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />;
}
