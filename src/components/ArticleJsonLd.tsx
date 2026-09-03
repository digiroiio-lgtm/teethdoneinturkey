const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const SITE_NAME = "Teeth Done in Turkey";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface ArticleJsonLdProps {
  id: string;
  path: string;
  headline: string;
  description: string;
  /** ISO 8601 date (YYYY-MM-DD). Use the 1st of the published month when only month/year is known. */
  datePublished: string;
  dateModified?: string;
  breadcrumbs: BreadcrumbItem[];
}

// Article + BreadcrumbList for a single content page. Deliberately omits any
// `reviewedBy`/`author` Person — attribute authorship to the Organization only,
// since no verifiable individual reviewer identity exists for this content.
export default function ArticleJsonLd({
  id,
  path,
  headline,
  description,
  datePublished,
  dateModified,
  breadcrumbs,
}: ArticleJsonLdProps) {
  const url = `${SITE_URL}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline,
        description,
        url,
        mainEntityOfPage: url,
        inLanguage: "en-GB",
        datePublished,
        dateModified: dateModified || datePublished,
        image: `${SITE_URL}/opengraph-image`,
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      },
    ],
  };

  // Plain <script>, not next/script: next/script defaults to afterInteractive,
  // which injects the tag client-side and leaves it out of the server HTML that
  // crawlers and AI answer engines actually read.
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
