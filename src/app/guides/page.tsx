import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideCard from "@/components/GuideCard";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "Dental Treatment in Turkey Guides for UK Patients",
  description:
    "The Teeth Done in Turkey patient guide library: evergreen, medically reviewed guides on treatments, costs and safety for UK patients considering dental treatment in Turkey.",
};

const guides = [
  {
    category: "Getting Started",
    title: "Teeth in Turkey: The Complete UK Patient Guide",
    description:
      "The primary resource in this library — treatments, process, costs, safety, clinic evaluation and travel, covering everything a UK patient needs before booking.",
    readingTime: "18 min",
    updated: "3 September 2026",
    href: "/guides/teeth-in-turkey",
    featured: true,
  },
  {
    category: "Treatment",
    title: "Dental Implants in Turkey: Complete Guide for UK Patients",
    description:
      "Implant brands, the surgical process, healing timelines, single vs full-mouth options (All-on-4/All-on-6), costs, risks and aftercare.",
    readingTime: "14 min",
    updated: "3 September 2026",
    href: "/guides/dental-implants-turkey",
  },
  {
    category: "Cost & Finance",
    title: "Turkey Teeth Cost: Complete 2026 Price Guide",
    description:
      "What drives treatment price, a full UK-vs-Turkey cost comparison, package pricing, and how to get an accurate personalised quotation.",
    readingTime: "12 min",
    updated: "3 September 2026",
    href: "/guides/turkey-teeth-cost",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/guides#collection`,
  url: `${SITE_URL}/guides`,
  name: "Dental Treatment in Turkey Guides for UK Patients",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
  hasPart: guides.map((g) => ({
    "@type": "Article",
    headline: g.title,
    url: `${SITE_URL}${g.href}`,
  })),
};

export default function GuidesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Treatment in Turkey Guides</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            A permanent, medically reviewed patient guide library — not a blog archive — for UK patients researching dental treatment in Turkey.
          </p>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              This resource centre helps UK patients understand dental treatment in Turkey — the treatment options available, realistic costs, safety and accreditation, how to evaluate a clinic, what to expect during your trip, and how to plan a smooth recovery. Each guide is a standalone, evergreen reference designed to answer your next question directly, without sending you back to search.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Guides are reviewed against the site&apos;s own verified pricing and treatment data and are kept up to date as that information changes. For treatment-specific pages with live pricing, see{" "}
              <Link href="/treatments" className="text-[#1e40af] font-semibold hover:underline">Treatments</Link>{" "}
              and{" "}
              <Link href="/prices/teeth-done-in-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">Prices</Link>.
              For patient stories and specific questions, see the{" "}
              <Link href="/blog" className="text-[#1e40af] font-semibold hover:underline">Blog</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <GuideCard key={g.href} {...g} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Where to Start?"
        subtitle="Tell us about your teeth and goals and we'll send a free, personalised treatment plan with an accurate cost estimate — no obligation."
        buttonText="Get My Personalised Treatment Plan"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
