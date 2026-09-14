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
const PAGE_URL = `${SITE_URL}/patient-stories/dental-implants-turkey-uk-patient`;
const TITLE = "Dental Implants Turkey: UK Patient Story — Claire, Birmingham";
const H1 = "Dental Implants Turkey: Claire's Story (Birmingham)";
const DESCRIPTION =
  "Claire had three Straumann dental implants in Turkey when her UK quote was £7,500. Her UK dentist was impressed with the quality. This is her full patient story.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/patient-stories/dental-implants-turkey-uk-patient" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "situation", label: "Claire's Situation" },
  { id: "treatment", label: "Treatment Recommended" },
  { id: "cost-comparison", label: "Cost Information" },
  { id: "monthly-payments", label: "Considering Monthly Payments?" },
  { id: "experience", label: "Patient Experience" },
  { id: "before-after", label: "Before & After" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "What implant brand did Claire have in Turkey?",
    answer: "Claire received Straumann dental implants. Straumann is a Swiss implant brand regarded as one of the gold standards in implant dentistry, with extensive clinical research behind it. Many Turkey clinics that target UK patients use Straumann, Nobel Biocare, or other internationally recognised brands.",
  },
  {
    question: "How did Claire's UK dentist respond to her Turkey implants?",
    answer: "Claire's review states: 'My UK dentist was impressed with the quality of the work.' This is a common outcome when treatment is carried out at well-equipped clinics using premium implant brands — the quality of the implant itself is determined by the manufacturer (Straumann, in Claire's case), not the country of treatment.",
  },
  {
    question: "What was Claire's UK quote for three dental implants?",
    answer: "Claire's verified UK quote for three dental implants was £7,500. The exact Turkey cost from her review is not published on this page due to a data conflict — a personalised quote is available on request.",
  },
  {
    question: "What is the typical cost of dental implants in Turkey?",
    answer: "Dental implants in Turkey typically cost significantly less than in the UK. A single Straumann implant in Turkey typically costs £600–£900; three implants would typically be £1,800–£2,700 before any package inclusions. For personalised pricing, use the free treatment plan link below.",
  },
  {
    question: "Are Straumann implants available in Turkey?",
    answer: "Yes. Many of the leading Turkish dental clinics that serve UK patients use Straumann, Nobel Biocare, MIS, or other internationally recognised implant brands. Always ask for the implant brand in writing before booking.",
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
      author: { "@type": "Person", name: "Claire, Birmingham" },
      datePublished: "2024-09",
      reviewBody:
        "Three implants for £1,350 versus £7,500 in Birmingham. I was nervous but the experience was incredible. Straumann implants, zero issues. My UK dentist was impressed with the quality of the work.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Patient Stories", item: `${SITE_URL}/patient-stories` },
        { "@type": "ListItem", position: 3, name: "Claire — Dental Implants", item: PAGE_URL },
      ],
    },
  ],
};

export default function DentalImplantsPatientStoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Patient Stories", href: "/patient-stories" }, { label: "Claire — Dental Implants" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Patient Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Quoted £7,500 for three implants in Birmingham. Claire travelled to Turkey for Straumann implants — and her UK dentist was impressed with the quality on her return.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
            {[
              { label: "Patient", value: "Claire, Birmingham" },
              { label: "Treatment", value: "3 Dental Implants" },
              { label: "Implant brand", value: "Straumann" },
              { label: "UK quote", value: "£7,500" },
              { label: "Review date", value: "September 2024" },
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
              "Claire had three Straumann dental implants in Turkey against a UK quote of £7,500.",
              "Straumann is one of the most clinically researched implant brands in the world.",
              "Her UK dentist was impressed with the quality of the work on her return.",
              "Premium implant brands (Straumann, Nobel Biocare) are available at leading Turkish clinics.",
              "Always request the implant brand in writing before booking any Turkey dental treatment.",
            ]}
          />

          <h2 id="situation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Claire&apos;s Situation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Claire, based in Birmingham, needed three dental implants. Her Birmingham quote was £7,500. Nervous about travelling abroad for dental treatment, she researched her options thoroughly before arranging treatment through Teeth Done in Turkey.
          </p>

          <h2 id="treatment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Recommended</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Claire received <strong>three dental implants</strong> using <strong>Straumann</strong> implant components. Straumann is a Swiss implant manufacturer with one of the largest bodies of clinical research in implant dentistry, and is widely regarded as a premium-tier implant brand. The same Straumann components used in UK private clinics are available at leading Turkish dental clinics that serve international patients.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each dental implant is a titanium post placed into the jawbone, which integrates with the bone over several months before a ceramic crown is fitted on top. The result — when carried out correctly — is functionally and aesthetically indistinguishable from a natural tooth. For a full guide to the process, see{" "}
            <Link href="/treatments/dental-implants-turkey" className="text-[#1e40af] font-semibold hover:underline">Dental Implants in Turkey</Link>.
          </p>

          <h2 id="cost-comparison" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Cost Information</h2>
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
                  { item: "UK private quote (Birmingham, 3 implants)", amount: "£7,500", cls: "text-gray-800" },
                  { item: "Turkey cost", amount: "Request personalised quote", cls: "text-blue-700 font-semibold" },
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
            UK quote is verified from patient review. For personalised Straumann implant pricing in Turkey, use the treatment plan link below or see{" "}
            <Link href="/prices/dental-implants-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">Dental Implant Prices</Link>.
          </p>

          <h2 id="monthly-payments" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Considering Monthly Payments?</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              UK-based dental finance is available for treatment abroad, including Turkey. For a typical 3-implant treatment cost in Turkey, monthly payment plans are available across 12, 24 and 36-month terms. Illustrative examples:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
              <li>At £2,000: approx. £56–£167/month depending on term</li>
              <li>At £2,700: approx. £75–£225/month depending on term</li>
            </ul>
            <p className="text-sm text-gray-500">
              These are illustrative figures only. Actual terms depend on your credit profile and the finance provider. Claire&apos;s review does not confirm whether she used finance.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <Link href="/monthly-payment" className="text-sm text-[#1e40af] font-semibold hover:underline">Monthly payment examples →</Link>
              <Link href="/finance-options-uk" className="text-sm text-[#1e40af] font-semibold hover:underline">Finance options for UK patients →</Link>
            </div>
          </div>

          <h2 id="experience" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Patient Experience</h2>
          <blockquote className="border-l-4 border-[#1e40af] pl-5 py-2 bg-blue-50 rounded-r-xl my-6">
            <p className="text-gray-800 italic leading-relaxed">
              &ldquo;Three implants for £1,350 versus £7,500 in Birmingham. I was nervous but the experience was incredible. Straumann implants, zero issues. My UK dentist was impressed with the quality of the work.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-gray-500">— Claire, Birmingham · September 2024 · Verified review</footer>
          </blockquote>

          <h2 id="before-after" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Before &amp; After</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before-and-after photos for single and multiple dental implant treatment are available in our gallery. View cases from verified UK patients.
          </p>
          <Link href="/turkey-teeth-before-after" className="inline-block text-[#1e40af] font-semibold hover:underline">
            View Before &amp; After Gallery →
          </Link>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Dental Implants Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad — what you need to know", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Dental Implants in Turkey", desc: "What the implant process involves and what to expect.", href: "/treatments/dental-implants-turkey" },
            { title: "Dental Implant Prices", desc: "Single, multiple and full-arch implant costs in Turkey.", href: "/prices/dental-implants-turkey-cost" },
            { title: "Monthly Payment Options", desc: "Representative payment examples for Turkey dental treatment.", href: "/monthly-payment" },
            { title: "Finance Options for UK Patients", desc: "How UK-based dental finance works for treatment abroad.", href: "/finance-options-uk" },
            { title: "Before & After Gallery", desc: "Verified UK patient results across all treatment types.", href: "/turkey-teeth-before-after" },
            { title: "Patient Reviews", desc: "Read verified reviews from UK patients.", href: "/reviews" },
          ]}
        />
      </div>

      <CTASection
        title="Get a Personalised Implant Quote"
        subtitle="Tell us how many implants you need and we'll send a written treatment plan with Straumann or premium implant brand pricing — no obligation."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
