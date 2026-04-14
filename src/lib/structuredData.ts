export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Teeth Done in Turkey",
    url: "https://www.teethdoneinturkey.co.uk",
    logo: "https://www.teethdoneinturkey.co.uk/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-20-1234-5678",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/teethdoneinturkey",
      "https://www.instagram.com/teethdoneinturkey",
    ],
  };
}

export function medicalProcedureSchema({
  name,
  description,
  url,
  preparation,
  followup,
}: {
  name: string;
  description: string;
  url: string;
  preparation?: string;
  followup?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    procedureType: "https://schema.org/TherapeuticProcedure",
    ...(preparation && { preparation }),
    ...(followup && { followup }),
    provider: {
      "@type": "Organization",
      name: "Teeth Done in Turkey",
      url: "https://www.teethdoneinturkey.co.uk",
    },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName || "Teeth Done in Turkey Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Teeth Done in Turkey",
      url: "https://www.teethdoneinturkey.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
