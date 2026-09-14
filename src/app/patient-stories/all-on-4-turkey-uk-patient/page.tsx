import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";
import SourcesList from "@/components/SourcesList";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/patient-stories/all-on-4-turkey-uk-patient`;
const TITLE = "All-on-4 Turkey: UK Patient Story — James, London";
const H1 = "All-on-4 Turkey: James's Story (London)";
const DESCRIPTION =
  "James had been embarrassed by his teeth for years. He flew to Istanbul for All-on-4 implants in 5 days, saving approximately £10,500 versus his UK quote. This is his story.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/patient-stories/all-on-4-turkey-uk-patient" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "situation", label: "James's Situation" },
  { id: "treatment", label: "Treatment Recommended" },
  { id: "cost-comparison", label: "Cost Comparison" },
  { id: "monthly-payments", label: "Considering Monthly Payments?" },
  { id: "experience", label: "Patient Experience" },
  { id: "before-after", label: "Before & After" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "How much did James's All-on-4 implants cost in Turkey versus the UK?",
    answer: "James paid approximately £4,500 in Turkey for his All-on-4 dental implants. His UK private quote was approximately £15,000 — a saving of approximately £10,500 (70%). These figures are sourced from our patient data.",
  },
  {
    question: "How long did All-on-4 treatment take for James?",
    answer: "James's review states he had his All-on-4 completed in 5 days in Istanbul. All-on-4 typically requires a first visit for implant placement and a temporary arch, then a return visit after healing (usually 3–6 months) for the permanent arch fitting. The 5-day reference relates to the first treatment visit.",
  },
  {
    question: "What is the NHS waiting list situation for implants?",
    answer: "The NHS does not routinely provide dental implants; it provides basic dentures in certain clinical cases. James's review references a 3-year NHS waiting list, which typically refers to NHS general dental services, not implant treatment specifically. Private implant treatment in the UK is not available via the NHS.",
  },
  {
    question: "What is All-on-4 dental treatment?",
    answer: "All-on-4 uses four titanium implants per jaw to support a full arch of fixed teeth. It is a proven solution for patients who have lost all or most teeth in an arch. Turkey offers All-on-4 at a fraction of UK private costs, and the treatment process is largely the same — CBCT scan, implant placement, temporary arch, then permanent arch after healing.",
  },
  {
    question: "Can I finance All-on-4 treatment in Turkey from the UK?",
    answer: "Yes. UK-based dental finance is available for treatment abroad, including Turkey. Monthly payment plans are available across 12, 24 and 36-month terms. See our finance and monthly payment pages for representative examples.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: PAGE_URL,
      inLanguage: "en-GB",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      image: `${SITE_URL}/opengraph-image`,
      author: { "@type": "Organization", name: "Teeth Done in Turkey", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Review",
      "@id": `${PAGE_URL}#review`,
      itemReviewed: {
        "@type": "MedicalClinic",
        name: "Teeth Done in Turkey",
        url: SITE_URL,
      },
      author: { "@type": "Person", name: "James, London" },
      datePublished: "2024-10",
      reviewBody:
        "I'd been embarrassed by my teeth for years and the NHS waiting list was 3 years long. I flew to Istanbul and had my All-on-4 done in 5 days. The hotel was brilliant, the clinic was state of the art, and the team were incredible. My new smile has changed my life.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Patient Stories", item: `${SITE_URL}/patient-stories` },
        { "@type": "ListItem", position: 3, name: "James — All-on-4", item: PAGE_URL },
      ],
    },
  ],
};

export default function AllOn4PatientStoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Patient Stories", href: "/patient-stories" }, { label: "James — All-on-4" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Patient Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Facing a 3-year NHS waiting list, James flew to Istanbul and had All-on-4 completed in 5 days — saving approximately £10,500 versus his UK private quote.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
            {[
              { label: "Patient", value: "James, London" },
              { label: "Treatment", value: "All-on-4 Implants" },
              { label: "Turkey cost", value: "approx. £4,500" },
              { label: "UK quote", value: "approx. £15,000" },
              { label: "Saving", value: "approx. £10,500 (70%)" },
              { label: "Review date", value: "October 2024" },
            ].map((f) => (
              <div key={f.label} className="bg-white/10 rounded-xl p-3">
                <p className="text-xs text-blue-200 mb-0.5">{f.label}</p>
                <p className="text-sm font-bold">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalReviewBadge />
          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "James saved approximately £10,500 (70%) versus his UK private quote for All-on-4.",
              "Treatment was completed in 5 days in Istanbul on the first visit.",
              "The NHS does not routinely fund dental implants — private UK costs are typically £12,000–£20,000 per arch.",
              "All-on-4 delivers a fixed, permanent set of teeth — not removable dentures.",
              "UK-based dental finance is available for treatment abroad.",
            ]}
          />

          <h2 id="situation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">James&apos;s Situation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            James, based in London, had been living with significant dental problems for years. He had explored NHS options but faced a lengthy waiting period. Private treatment in London carried a price tag that made treatment feel unattainable. After researching dental treatment in Turkey, James arranged his All-on-4 procedure through Teeth Done in Turkey and travelled to Istanbul.
          </p>

          <h2 id="treatment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Recommended</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>All-on-4 dental implants</strong> use four titanium implants per jaw to support a full, fixed arch of prosthetic teeth. The four-implant design makes it possible to restore a full arch even in patients with reduced bone volume, as the posterior implants are angled to maximise available bone contact.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The result is a permanent set of fixed teeth — not a removable denture — that is cared for like natural teeth. For a full explanation of what All-on-4 involves, see{" "}
            <Link href="/treatments/all-on-4-turkey" className="text-[#1e40af] font-semibold hover:underline">All-on-4 Dental Implants in Turkey</Link>.
          </p>

          <h2 id="cost-comparison" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Cost Comparison</h2>
          <div className="overflow-x-auto rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-100 my-6">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Item</th>
                  <th className="px-4 py-3 text-right font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "UK private quote (London)", amount: "approx. £15,000", cls: "text-gray-800" },
                  { item: "Turkey treatment cost", amount: "approx. £4,500", cls: "text-gray-800" },
                  { item: "Saving", amount: "approx. £10,500 (70%)", cls: "text-green-700 font-bold" },
                ].map((r, i) => (
                  <tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-700">{r.item}</td>
                    <td className={`px-4 py-3 text-right ${r.cls}`}>{r.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Approximate figures from patient data. Flights are not included. For total trip cost, see{" "}
            <Link href="/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey" className="text-[#1e40af] font-semibold hover:underline">total trip cost guide</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For full All-on-4 cost information, see the{" "}
            <Link href="/guides/full-mouth-dental-implants-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">full mouth implant cost guide</Link>.
          </p>

          <h2 id="monthly-payments" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Considering Monthly Payments?</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              For a treatment cost of approximately £4,500, representative monthly payment examples (at 0% representative APR) would be approximately:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
              <li>12 months: approx. £375/month</li>
              <li>24 months: approx. £188/month</li>
              <li>36 months: approx. £125/month</li>
            </ul>
            <p className="text-sm text-gray-500">
              These are illustrative figures only. Actual terms depend on your credit profile and the finance provider. James&apos;s review does not confirm whether he used finance.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <Link href="/monthly-payment" className="text-sm text-[#1e40af] font-semibold hover:underline">Monthly payment examples →</Link>
              <Link href="/finance-options-uk" className="text-sm text-[#1e40af] font-semibold hover:underline">Finance options for UK patients →</Link>
            </div>
          </div>

          <h2 id="experience" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Patient Experience</h2>
          <blockquote className="border-l-4 border-[#1e40af] pl-5 py-2 bg-blue-50 rounded-r-xl my-6">
            <p className="text-gray-800 italic leading-relaxed">
              &ldquo;I&apos;d been embarrassed by my teeth for years and the NHS waiting list was 3 years long. I flew to Istanbul and had my All-on-4 done in 5 days. The hotel was brilliant, the clinic was state of the art, and the team were incredible. My new smile has changed my life.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-gray-500">— James, London · October 2024 · Verified review</footer>
          </blockquote>

          <h2 id="before-after" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Before &amp; After</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before-and-after photos for All-on-4 and full-arch implant treatment are available in our gallery. View cases from verified UK patients across a range of treatments.
          </p>
          <Link href="/turkey-teeth-before-after" className="inline-block text-[#1e40af] font-semibold hover:underline">
            View Before &amp; After Gallery →
          </Link>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="All-on-4 Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad — what you need to know", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "All-on-4 Dental Implants in Turkey", desc: "What All-on-4 involves, who it suits, and what to expect.", href: "/treatments/all-on-4-turkey" },
            { title: "Full Mouth Dental Implants Turkey Cost", desc: "All-on-4, All-on-6 and full arch costs compared.", href: "/guides/full-mouth-dental-implants-turkey-cost" },
            { title: "Monthly Payment Options", desc: "Representative payment examples for Turkey dental treatment.", href: "/monthly-payment" },
            { title: "Finance Options for UK Patients", desc: "How UK-based dental finance works for treatment abroad.", href: "/finance-options-uk" },
            { title: "Before & After Gallery", desc: "Verified UK patient results across all treatment types.", href: "/turkey-teeth-before-after" },
            { title: "Patient Reviews", desc: "Read verified reviews from UK patients.", href: "/reviews" },
          ]}
        />
      </div>

      <CTASection
        title="Get a Written All-on-4 Quote"
        subtitle="We'll send a personalised treatment plan with itemised costs, hotel, transfers and monthly payment options — no obligation."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
