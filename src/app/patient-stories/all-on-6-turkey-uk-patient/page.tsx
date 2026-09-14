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
const PAGE_URL = `${SITE_URL}/patient-stories/all-on-6-turkey-uk-patient`;
const TITLE = "All-on-6 Turkey: UK Patient Story — Michael, Edinburgh";
const H1 = "All-on-6 Turkey: Michael's Story (Edinburgh)";
const DESCRIPTION =
  "Michael was quoted £22,000 in Edinburgh. He paid £5,600 in Turkey for All-on-6 implants — a saving of £16,400. This is his full patient story.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/patient-stories/all-on-6-turkey-uk-patient" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "situation", label: "Michael's Situation" },
  { id: "treatment", label: "Treatment Recommended" },
  { id: "cost-comparison", label: "Cost Comparison" },
  { id: "monthly-payments", label: "Considering Monthly Payments?" },
  { id: "experience", label: "Patient Experience" },
  { id: "before-after", label: "Before & After" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "How much did Michael's All-on-6 implants cost in Turkey versus the UK?",
    answer: "Michael paid £5,600 in Turkey for his All-on-6 dental implants. He had been quoted £22,000 in Edinburgh — a saving of £16,400 (75%).",
  },
  {
    question: "What is an All-on-6 dental implant?",
    answer: "All-on-6 uses 6 titanium implants per jaw to support a full arch of fixed teeth. It provides more stability than All-on-4 and is typically recommended for patients with adequate bone density who want the most robust full-arch solution. The result is a permanent, fixed set of teeth that function like natural teeth.",
  },
  {
    question: "Is All-on-6 available on the NHS?",
    answer: "No. Full-arch implant treatment such as All-on-6 is not available on the NHS. NHS dentistry covers basic tooth extractions and dentures but not fixed implant solutions. Private UK costs for All-on-6 typically range from £18,000–£28,000 per jaw.",
  },
  {
    question: "What does All-on-6 treatment involve?",
    answer: "All-on-6 typically requires two visits to Turkey: the first for implant placement (under local anaesthetic or sedation) and a temporary arch fitting; the second — usually 3–6 months later after healing — for fitting the permanent arch. Your Turkish clinic will provide full pre-treatment planning from X-rays and a CBCT scan.",
  },
  {
    question: "Can I finance All-on-6 treatment in Turkey?",
    answer: "Yes. UK-based dental finance is available for treatment abroad, including Turkey. Monthly payment plans typically start from around £150–£250/month depending on the total amount and term. See our finance page for representative examples.",
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
      author: { "@type": "Person", name: "Michael, Edinburgh" },
      datePublished: "2024-07",
      reviewBody:
        "I was quoted £22,000 in Edinburgh. Paid £5,600 in Turkey for All-on-6. The quality is outstanding. The process was smooth from start to finish — the clinic arranged my airport transfer and the patient coordinator was WhatsApp-available throughout.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Patient Stories", item: `${SITE_URL}/patient-stories` },
        { "@type": "ListItem", position: 3, name: "Michael — All-on-6", item: PAGE_URL },
      ],
    },
  ],
};

export default function AllOn6PatientStoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Patient Stories", href: "/patient-stories" }, { label: "Michael — All-on-6" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Patient Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Quoted £22,000 in Edinburgh. Paid £5,600 in Turkey. A saving of £16,400 — and a result his clinic described as outstanding quality.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
            {[
              { label: "Patient", value: "Michael, Edinburgh" },
              { label: "Treatment", value: "All-on-6 Implants" },
              { label: "Turkey cost", value: "£5,600" },
              { label: "UK quote", value: "£22,000" },
              { label: "Saving", value: "£16,400 (75%)" },
              { label: "Review date", value: "July 2024" },
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
              "Michael saved £16,400 (75%) compared to his Edinburgh quote.",
              "All-on-6 uses 6 implants per arch for a stable, permanent fixed solution.",
              "The clinic arranged airport transfers and provided WhatsApp support throughout.",
              "All-on-6 is not available on the NHS — private UK costs typically range from £18,000–£28,000 per jaw.",
              "UK-based dental finance is available for treatment abroad, including Turkey.",
            ]}
          />

          <h2 id="situation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Michael&apos;s Situation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Michael, based in Edinburgh, needed a full-arch implant solution after losing most of his upper or lower teeth. He consulted a private dental clinic in Edinburgh, where he was quoted £22,000 — a figure that placed treatment out of reach. The NHS does not fund fixed implant solutions such as All-on-6, leaving patients with this level of need either facing very high private fees or seeking alternatives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            After researching dental treatment in Turkey, Michael arranged his treatment through Teeth Done in Turkey and travelled for his procedure.
          </p>

          <h2 id="treatment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Recommended</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>All-on-6 dental implants</strong> use six titanium implants per jaw to anchor a full arch of fixed prosthetic teeth. Compared to All-on-4, All-on-6 provides additional implant points which can improve load distribution and long-term stability, and is typically recommended where bone density and volume support it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The result is a fixed, permanent set of teeth — not a removable denture — that functions and is cared for like natural teeth. For a full breakdown of the treatment, see{" "}
            <Link href="/treatments/all-on-6-turkey" className="text-[#1e40af] font-semibold hover:underline">All-on-6 Dental Implants in Turkey</Link>.
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
                  { item: "UK private quote (Edinburgh)", amount: "£22,000", cls: "text-gray-800" },
                  { item: "Turkey treatment cost", amount: "£5,600", cls: "text-gray-800" },
                  { item: "Saving", amount: "£16,400 (75%)", cls: "text-green-700 font-bold" },
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
            Figures verified from patient review. Flight costs are not included and vary by departure city; see{" "}
            <Link href="/guides/how-much-does-it-cost-to-get-your-teeth-done-in-turkey" className="text-[#1e40af] font-semibold hover:underline">total trip cost guide</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For full All-on-6 package pricing with hotel and transfers, see{" "}
            <Link href="/prices/all-on-6-dental-implants-turkey-package" className="text-[#1e40af] font-semibold hover:underline">All-on-6 Package Prices</Link>{" "}
            and the{" "}
            <Link href="/guides/full-mouth-dental-implants-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">full mouth implant cost guide</Link>.
          </p>

          <h2 id="monthly-payments" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Considering Monthly Payments?</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              UK-based dental finance is available for treatment abroad, including Turkey. For a treatment cost of £5,600, representative monthly payment examples (at 0% representative APR) would be approximately:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
              <li>12 months: approx. £467/month</li>
              <li>24 months: approx. £234/month</li>
              <li>36 months: approx. £156/month</li>
            </ul>
            <p className="text-sm text-gray-500">
              These are illustrative figures only. Actual terms depend on your credit profile and the finance provider. Michael&apos;s review does not confirm whether he used finance.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <Link href="/monthly-payment" className="text-sm text-[#1e40af] font-semibold hover:underline">Monthly payment examples →</Link>
              <Link href="/finance-options-uk" className="text-sm text-[#1e40af] font-semibold hover:underline">Finance options for UK patients →</Link>
            </div>
          </div>

          <h2 id="experience" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Patient Experience</h2>
          <blockquote className="border-l-4 border-[#1e40af] pl-5 py-2 bg-blue-50 rounded-r-xl my-6">
            <p className="text-gray-800 italic leading-relaxed">
              &ldquo;I was quoted £22,000 in Edinburgh. Paid £5,600 in Turkey for All-on-6. The quality is outstanding. The process was smooth from start to finish — the clinic arranged my airport transfer and the patient coordinator was WhatsApp-available throughout.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-gray-500">— Michael, Edinburgh · July 2024 · Verified review</footer>
          </blockquote>

          <h2 id="before-after" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Before &amp; After</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before-and-after photos for All-on-6 and full-arch implant treatment are available in our gallery. View cases from verified UK patients across a range of treatments.
          </p>
          <Link href="/turkey-teeth-before-after" className="inline-block text-[#1e40af] font-semibold hover:underline">
            View Before &amp; After Gallery →
          </Link>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="All-on-6 Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad — what you need to know", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "All-on-6 Dental Implants in Turkey", desc: "What All-on-6 involves, who it suits, and what to expect.", href: "/treatments/all-on-6-turkey" },
            { title: "All-on-6 Package Prices", desc: "Full package pricing with hotel and transfers for UK patients.", href: "/prices/all-on-6-dental-implants-turkey-package" },
            { title: "Full Mouth Dental Implants Turkey Cost", desc: "All-on-4, All-on-6 and full arch costs compared.", href: "/guides/full-mouth-dental-implants-turkey-cost" },
            { title: "Monthly Payment Options", desc: "Representative payment examples for Turkey dental treatment.", href: "/monthly-payment" },
            { title: "Before & After Gallery", desc: "Verified UK patient results across all treatment types.", href: "/turkey-teeth-before-after" },
            { title: "Patient Reviews", desc: "Read verified reviews from UK patients.", href: "/reviews" },
          ]}
        />
      </div>

      <CTASection
        title="Get a Written All-on-6 Quote"
        subtitle="We'll send a personalised treatment plan with itemised costs, hotel, transfers and monthly payment options — no obligation."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
