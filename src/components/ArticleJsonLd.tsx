import Link from "next/link";

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
  reviewer?: {
    "@type"?: string;
    "@id"?: string;
    name: string;
    jobTitle: string;
    url?: string;
    sameAs?: string[];
  };
}

export default function ArticleJsonLd({
  id,
  path,
  headline,
  description,
  datePublished,
  dateModified,
  breadcrumbs,
  reviewer,
}: ArticleJsonLdProps) {
  const url = `${SITE_URL}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
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
        ...(reviewer ? { reviewedBy: { "@type": "Person", ...reviewer } } : {}),
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
  // The BreadcrumbList above must match what readers see, so the same trail
  // is rendered as a visible breadcrumb at the top of the article.
  return (
    <>
      <script
        id={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-6">
          <ol className="flex flex-wrap items-center gap-1.5">
            {breadcrumbs.map((item, i) => (
              <li key={item.path} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={item.path} className="hover:text-gray-900 transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-gray-700" aria-current="page">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
  );
}
