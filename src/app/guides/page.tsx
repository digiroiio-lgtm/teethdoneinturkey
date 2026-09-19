import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideCard from "@/components/GuideCard";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: { absolute: "Dental Treatment Turkey Guides for UK Patients" },
  description: "Evergreen patient guides on dental treatment in Turkey: treatments, costs, safety, finance and clinic selection for UK patients.",
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
    href: "/prices/turkey-teeth-cost",
  },
  {
    category: "Treatment",
    title: "Turkey Teeth: Veneers or Crowns, and How Much Tooth Is Removed?",
    description:
      "The difference between a veneer and a crown, how much enamel each removes, what cannot be undone, and how to tell which one you are actually being quoted.",
    readingTime: "8 min",
    updated: "4 September 2026",
    href: "/guides/turkey-teeth-veneers-or-crowns",
  },
  {
    category: "Cost & Finance",
    title: "Can't Afford Dental Treatment in the UK? Your Options",
    description:
      "NHS charges, private costs, payment plans, dental finance and treatment abroad, laid out step by step so you can work out what you can actually afford.",
    readingTime: "9 min",
    updated: "3 September 2026",
    href: "/guides/cant-afford-dental-treatment-uk",
  },
  {
    category: "Cost & Finance",
    title: "How Much Does It Cost to Get Your Teeth Done in Turkey?",
    description:
      "Total patient trip cost — treatment, flights, hotel, transfers, scans and second-visit costs for implant patients. What you actually spend from door to door.",
    readingTime: "10 min",
    updated: "13 September 2026",
    href: "/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey",
  },
  {
    category: "Cost & Finance",
    title: "Full Set of Teeth in Turkey Cost: Prices, Options & UK Patient Guide 2026",
    description:
      "What 'full set' means for UK patients — and what each option costs: crowns, veneers, All-on-4, All-on-6 and full mouth implants compared.",
    readingTime: "11 min",
    updated: "13 September 2026",
    href: "/guides/full-set-of-teeth-turkey-cost",
  },
  {
    category: "Cost & Finance",
    title: "Turkey Teeth Packages: What Is Included and What Does It Really Cost?",
    description:
      "Package price vs treatment price vs total trip cost — exactly what Turkey dental packages include, what they leave out, and what to check before booking.",
    readingTime: "8 min",
    updated: "13 September 2026",
    href: "/guides/turkey-teeth-packages",
  },
  {
    category: "Cost & Finance",
    title: "Turkey Teeth Cost in Pounds: 2026 GBP Price Guide for UK Patients",
    description:
      "A GBP budgeting guide — what dental treatment you can realistically get in Turkey for £2,500, £3,500, £5,000 and £7,500 in 2026.",
    readingTime: "7 min",
    updated: "13 September 2026",
    href: "/guides/turkey-teeth-cost-in-pounds",
  },
  {
    category: "Cost & Finance",
    title: "How Much Are Turkey Teeth Per Month? UK Dental Finance & Payment Examples",
    description:
      "Monthly payment examples for Turkey dental treatment from £3,000 to £8,000 — across 12, 18, 24 and 36-month plans with 0% representative APR finance.",
    readingTime: "8 min",
    updated: "13 September 2026",
    href: "/guides/turkey-teeth-monthly-payments",
  },
  {
    category: "Treatment",
    title: "Full Mouth Dental Implants Turkey Cost: All-on-4, All-on-6 & Full Arch Prices 2026",
    description:
      "Full arch and full mouth implant costs in Turkey — All-on-4, All-on-6, titanium bar options, the two-visit process, and total package cost for UK patients.",
    readingTime: "12 min",
    updated: "13 September 2026",
    href: "/guides/full-mouth-dental-implants-turkey-cost",
  },
  {
    category: "Destination",
    title: "Antalya Teeth Prices: Complete 2026 Dental Cost Guide for UK Patients",
    description:
      "Treatment prices at Antalya clinics — veneers, crowns, implants and full mouth — with UK price comparisons, travel information and total trip cost.",
    readingTime: "9 min",
    updated: "13 September 2026",
    href: "/guides/antalya-teeth-prices",
  },
  {
    category: "Destination",
    title: "Turkey Teeth Antalya: The Complete UK Patient Guide",
    description:
      "What it is actually like to go to Antalya for dental treatment — why UK patients choose it, the patient journey day by day, clinic selection, hotels, travel logistics and recovery.",
    readingTime: "15 min",
    updated: "13 September 2026",
    href: "/guides/turkey-teeth-antalya",
  },
  {
    category: "Treatment",
    title: "Best Veneers in Turkey: E-max vs Zirconia vs Composite Compared",
    description:
      "Which veneer type gives the most natural result, requires least tooth preparation and offers the best value — with a full comparison table and how to choose the right dentist.",
    readingTime: "12 min",
    updated: "13 September 2026",
    href: "/guides/best-veneers-turkey",
  },
  {
    category: "Cost & Finance",
    title: "Veneers Turkey Packages: What Is Included and What Does It Really Cost?",
    description:
      "Treatment-only vs veneer package vs total trip cost — exactly what Turkey veneer packages include, what they leave out, and what to confirm before booking.",
    readingTime: "9 min",
    updated: "13 September 2026",
    href: "/guides/veneers-turkey-packages",
  },
  {
    category: "Treatment",
    title: "Turkish Veneers Safety: Risks, Red Flags and How to Stay Safe",
    description:
      "Are Turkish veneers safe? This guide covers why problems happen, the risks of excessive tooth preparation, lab quality, dentist experience, and how to protect yourself.",
    readingTime: "11 min",
    updated: "13 September 2026",
    href: "/guides/turkish-veneers-safety",
  },
  {
    category: "UK Access & Affordability",
    title: "Can't Find an NHS Dentist? Your Step-by-Step Options",
    description:
      "No NHS dentist accepting patients near you? NHS 111 dental access, emergency services, Community Dental Services, dental schools and realistic alternatives for UK patients in 2026.",
    readingTime: "8 min",
    updated: "17 September 2026",
    href: "/guides/no-nhs-dentist-what-to-do",
  },
  {
    category: "UK Access & Affordability",
    title: "Can't Afford a Root Canal in the UK? What to Do",
    description:
      "Root canal on the NHS costs £76.60. Private treatment costs £500–£1,500 plus a crown. NHS access, Band 2 costs, extraction comparison, payment plans and Turkey cost comparison.",
    readingTime: "9 min",
    updated: "17 September 2026",
    href: "/guides/cant-afford-root-canal-uk",
  },
  {
    category: "UK Access & Affordability",
    title: "Tooth Abscess and Can't Afford a Dentist? Act Now",
    description:
      "A tooth abscess is a dental emergency. NHS 111 can refer you to emergency treatment at no upfront cost. Red flag warning signs requiring A&E, antibiotics guidance and follow-up costs.",
    readingTime: "8 min",
    updated: "17 September 2026",
    href: "/guides/tooth-abscess-cant-afford-dentist",
  },
  {
    category: "UK Access & Affordability",
    title: "Severe Toothache and Can't Afford a Dentist? What to Do",
    description:
      "NHS 111 can refer you to an emergency dentist at no upfront cost. Causes of severe toothache explained, temporary pain relief, and what treatments cost on NHS, UK private and in Turkey.",
    readingTime: "8 min",
    updated: "17 September 2026",
    href: "/guides/severe-toothache-cant-afford-dentist",
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
              <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Prices</Link>.
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
