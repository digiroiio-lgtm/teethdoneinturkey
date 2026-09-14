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
const PAGE_URL = `${SITE_URL}/patient-stories/veneers-turkey-uk-patient`;
const TITLE = "Veneers Turkey: UK Patient Story — Sarah, Manchester";
const H1 = "Veneers Turkey: Sarah's Story (Manchester)";
const DESCRIPTION =
  "Sarah had 20 porcelain veneers in Turkey for £3,800 — the same treatment was quoted at £18,000 in Manchester. A saving of £14,200 (79%). This is her full patient story.";
const DATE_PUBLISHED = "2026-09-13";
const DATE_MODIFIED = "2026-09-13";

export const metadata: Metadata = {
  alternates: { canonical: "/patient-stories/veneers-turkey-uk-patient" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const toc = [
  { id: "situation", label: "Sarah's Situation" },
  { id: "treatment", label: "Treatment Recommended" },
  { id: "cost-comparison", label: "Cost Comparison" },
  { id: "monthly-payments", label: "Considering Monthly Payments?" },
  { id: "experience", label: "Patient Experience" },
  { id: "before-after", label: "Before & After" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "How much did Sarah's 20 veneers cost in Turkey versus the UK?",
    answer: "Sarah paid £3,800 in Turkey for 20 porcelain veneers — a treatment quoted at £18,000 in Manchester. Her saving was £14,200, or 79% of the UK price.",
  },
  {
    question: "What are porcelain veneers?",
    answer: "Porcelain veneers are thin ceramic shells bonded to the front surface of teeth to change their shape, colour, or size. They require some enamel preparation — typically 0.3–0.7mm is removed — which is an irreversible process. The result is a natural-looking, durable smile transformation that can last 10–15 years with proper care.",
  },
  {
    question: "How long does veneer treatment in Turkey take?",
    answer: "For 20 veneers, treatment typically takes 5–7 days in Turkey. This includes consultation, preparation, temporary veneers, laboratory fabrication, and fitting of the permanent veneers — all within one visit. The laboratory work is carried out by the clinic's own lab or a local partner lab on-site.",
  },
  {
    question: "Are porcelain veneers available on the NHS?",
    answer: "No. Cosmetic veneers are not available on the NHS. The NHS provides tooth-coloured composite bonding in certain clinical cases but not full porcelain veneer treatment. Private UK veneers typically cost £500–£1,000 per tooth; 20 veneers would be £10,000–£20,000.",
  },
  {
    question: "What should I check when getting veneers in Turkey?",
    answer: "Key checks: confirm whether you are being quoted for veneers or crowns (crowns remove more tooth structure); ask whether the material is E-max porcelain or zirconia; request before-and-after photos from previous patients; ask about the laboratory that will fabricate your veneers; and check what aftercare and guarantee is provided. For a full safety guide, see Turkish Veneers Safety.",
  },
  {
    question: "Can I finance veneers in Turkey from the UK?",
    answer: "Yes. UK-based dental finance is available for treatment abroad, including Turkey. For £3,800 over 24 months at 0% representative APR, that would be approximately £158/month. See our finance and monthly payment pages for full representative examples.",
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
      author: { "@type": "Person", name: "Sarah, Manchester" },
      datePublished: "2024-11",
      reviewBody:
        "I spent months researching dental work in Turkey and I'm so glad I went ahead. My 20 veneers cost £3,800 all-in — the same thing was quoted at £18,000 in Manchester. The clinic was spotless, the dentist spoke perfect English, and I'm absolutely over the moon with the results.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Patient Stories", item: `${SITE_URL}/patient-stories` },
        { "@type": "ListItem", position: 3, name: "Sarah — Veneers", item: PAGE_URL },
      ],
    },
  ],
};

export default function VeneersPatientStoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Patient Stories", href: "/patient-stories" }, { label: "Sarah — Veneers" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Patient Story</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Quoted £18,000 in Manchester for 20 veneers. Sarah paid £3,800 in Turkey — a saving of £14,200. Months of research, one decision she calls the right one.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
            {[
              { label: "Patient", value: "Sarah, Manchester" },
              { label: "Treatment", value: "20 Porcelain Veneers" },
              { label: "Turkey cost", value: "£3,800" },
              { label: "UK quote", value: "£18,000" },
              { label: "Saving", value: "£14,200 (79%)" },
              { label: "Review date", value: "November 2024" },
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
              "Sarah saved £14,200 (79%) versus her Manchester quote for 20 porcelain veneers.",
              "Her Turkey cost was £3,800 all-in for 20 veneers.",
              "Veneers are irreversible — enamel preparation cannot be undone, so clinic choice matters.",
              "Private UK veneers typically cost £500–£1,000 per tooth; Turkey veneers are typically £175–£350 per tooth.",
              "UK-based dental finance is available for veneer treatment in Turkey.",
            ]}
          />

          <h2 id="situation" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Sarah&apos;s Situation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sarah, based in Manchester, spent months researching dental treatment in Turkey before committing to treatment. A full-smile veneer makeover (20 veneers) had been quoted at £18,000 by a private Manchester clinic — a price that would have made treatment impractical without substantial savings or a finance arrangement. After thorough research, Sarah arranged treatment through Teeth Done in Turkey.
          </p>

          <h2 id="treatment" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Treatment Recommended</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sarah had <strong>20 porcelain veneers</strong> — a full-mouth smile transformation covering all visible upper and lower teeth. Porcelain veneers are thin ceramic shells bonded to the front face of teeth. They deliver natural-looking colour and translucency and, when well made and correctly fitted, are functionally and aesthetically superior to composite alternatives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Veneers involve removing a small amount of enamel — typically 0.3–0.7mm — to create space for the ceramic shell. This preparation is irreversible, which makes clinic selection important. For a full breakdown of veneer types and what to look for, see{" "}
            <Link href="/guides/best-veneers-turkey" className="text-[#1e40af] font-semibold hover:underline">Best Veneers in Turkey: E-max vs Zirconia vs Composite</Link>{" "}
            and the{" "}
            <Link href="/guides/turkish-veneers-safety" className="text-[#1e40af] font-semibold hover:underline">Turkish Veneers Safety guide</Link>.
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
                  { item: "UK private quote (Manchester, 20 veneers)", amount: "£18,000", cls: "text-gray-800" },
                  { item: "Turkey treatment cost (20 veneers)", amount: "£3,800", cls: "text-gray-800" },
                  { item: "Saving", amount: "£14,200 (79%)", cls: "text-green-700 font-bold" },
                  { item: "Per-tooth Turkey cost", amount: "£190/tooth", cls: "text-gray-500" },
                  { item: "Per-tooth UK cost", amount: "£900/tooth", cls: "text-gray-500" },
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
            Figures verified from patient review. Flights are not included. For total trip cost and veneer package pricing, see{" "}
            <Link href="/guides/veneers-turkey-packages" className="text-[#1e40af] font-semibold hover:underline">Veneers Turkey Packages</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For current veneer prices, see{" "}
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Veneers Cost</Link>.
          </p>

          <h2 id="monthly-payments" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Considering Monthly Payments?</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              For a treatment cost of £3,800, representative monthly payment examples (at 0% representative APR) would be approximately:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
              <li>12 months: approx. £317/month</li>
              <li>24 months: approx. £158/month</li>
              <li>36 months: approx. £106/month</li>
            </ul>
            <p className="text-sm text-gray-500">
              These are illustrative figures only. Actual terms depend on your credit profile and the finance provider. Sarah&apos;s review does not confirm whether she used finance.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <Link href="/monthly-payment" className="text-sm text-[#1e40af] font-semibold hover:underline">Monthly payment examples →</Link>
              <Link href="/finance-options-uk" className="text-sm text-[#1e40af] font-semibold hover:underline">Finance options for UK patients →</Link>
            </div>
          </div>

          <h2 id="experience" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Patient Experience</h2>
          <blockquote className="border-l-4 border-[#1e40af] pl-5 py-2 bg-blue-50 rounded-r-xl my-6">
            <p className="text-gray-800 italic leading-relaxed">
              &ldquo;I spent months researching dental work in Turkey and I&apos;m so glad I went ahead. My 20 veneers cost £3,800 all-in — the same thing was quoted at £18,000 in Manchester. The clinic was spotless, the dentist spoke perfect English, and I&apos;m absolutely over the moon with the results.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-gray-500">— Sarah, Manchester · November 2024 · Verified review</footer>
          </blockquote>

          <h2 id="before-after" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Before &amp; After</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before-and-after photos for full-smile veneer makeovers and individual veneer cases are available in our gallery. View verified UK patient results.
          </p>
          <Link href="/turkey-teeth-before-after" className="inline-block text-[#1e40af] font-semibold hover:underline">
            View Before &amp; After Gallery →
          </Link>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Veneers Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad — what you need to know", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
          ]}
        />

        <RelatedLinksGrid
          title="Related Pages"
          links={[
            { title: "Veneers in Turkey", desc: "What the veneer process involves and what to expect.", href: "/treatments/veneers-turkey" },
            { title: "Turkey Veneers Cost", desc: "Current veneer prices per tooth and full-smile packages.", href: "/prices/veneers-turkey-cost" },
            { title: "Best Veneers in Turkey: E-max vs Zirconia vs Composite", desc: "Which veneer material is right for you.", href: "/guides/best-veneers-turkey" },
            { title: "Turkish Veneers Safety", desc: "Risks, red flags and how to protect yourself.", href: "/guides/turkish-veneers-safety" },
            { title: "Monthly Payment Options", desc: "Representative payment examples for Turkey dental treatment.", href: "/monthly-payment" },
            { title: "Before & After Gallery", desc: "Verified UK patient results across all treatment types.", href: "/turkey-teeth-before-after" },
          ]}
        />
      </div>

      <CTASection
        title="Get a Written Veneer Quote"
        subtitle="Tell us how many veneers you need and we'll send a personalised treatment plan with itemised costs and monthly payment options — no obligation."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
