import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FAQSection from "@/components/FAQSection";
import SourcesList from "@/components/SourcesList";
import { REVIEWER_PERSON } from "@/lib/reviewer";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/implants-cost-uk-vs-turkey" },
  title: { absolute: "Turkey Dental Implants Cost vs UK: 2026 Prices" },
  description: "Dental implant cost in Turkey vs UK: a single implant with crown is £250–£600 in Turkey by brand vs £2,000–£3,000 UK private. What is included and full-arch prices.",
};

const faqs = [
  {
    question: "How much do dental implants cost in Turkey vs the UK?",
    answer: "A single implant with crown costs £250–£600 in Turkey depending on the implant brand (entry-level brands such as Osstem at the lower end, premium brands at the upper end), compared with £2,000–£3,000 at a UK private clinic. An All-on-4 arch is £4,500–£5,500 in Turkey vs £12,000–£18,000 in the UK. UK figures are indicative private ranges and vary by clinic and city. Turkey prices were checked on 29 October 2026 and are confirmed in a personalised quote.",
  },
  {
    question: "Are Turkish dental implants cheaper because they are lower quality?",
    answer: "Not necessarily. Clinics can use the same international implant brands as UK practices, so ask which brand and system will be used and get it in writing. The lower price mainly reflects lower local costs and overheads. Quality still depends on the dentist, the planning and the aftercare, so compare those as well as the price.",
  },
  {
    question: "What is included in the Turkey implant price?",
    answer: "Typically the CBCT scan and consultation, implant placement, anaesthetic and sedation, a temporary crown and the final crown at a return visit. Bone grafts and sinus lifts may be extra, so check your written quote. Flights and hotel are separate.",
  },
  {
    question: "How many trips to Turkey do dental implants need?",
    answer: "Most patients make two visits. The first (3–5 days) covers assessment, scan and implant placement. The second (2–3 days, after 3–6 months of healing) fits the permanent crown. Your dentist sets the healing time for your case.",
  },
  {
    question: "Can I pay monthly for dental implants in Turkey?",
    answer: "Some patients spread the cost with credit arranged in the UK, subject to the lender's approval, which is never guaranteed. The monthly payment depends on the offer you receive, so we do not publish monthly figures. Lenders may have minimum borrowing amounts, which a single implant can fall below.",
  },
];

export default function ImplantsCostUKvsTurkeyPage() {
  return (
    <>
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-implants-cost-uk-vs-turkey"
        path="/blog/implants-cost-uk-vs-turkey"
        headline="Dental Implants Cost: UK vs Turkey 2026"
        description="Dental implant cost in Turkey vs UK: a single implant with crown is £250–£600 in Turkey by brand vs £2,000–£3,000 UK private. What is included and full-arch prices."
        datePublished="2026-04-01"
        dateModified="2026-10-29"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Dental Implants Cost: UK vs Turkey 2026", path: "/blog/implants-cost-uk-vs-turkey" },
        ]}
              reviewer={REVIEWER_PERSON}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Implants Cost: UK vs Turkey – 2026 Comparison</h1>
          <p className="text-gray-500 text-sm">Published April 2026 · Last updated 29 October 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>Short answer:</strong> a single dental implant with crown costs £250–£600 in Turkey depending on the implant brand, compared with £2,000–£3,000 at a UK private clinic. One All-on-4 arch is £4,500–£5,500 in Turkey vs £12,000–£18,000 in the UK. UK figures are indicative; Turkey prices were checked on 29 October 2026 and are confirmed in your quote.
          </p>
          <p>
            Dental implants in the UK are among the most expensive dental treatments available. In Turkey, comparable procedures using internationally recognised implant brands are available for a fraction of the cost. This guide gives UK patients a transparent comparison.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Single Dental Implant: UK vs Turkey</h2>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-5 text-center border border-red-200">
              <p className="text-sm text-gray-500 mb-1">UK Private Clinic</p>
              <p className="text-3xl font-extrabold text-red-500">£2,000–£3,000</p>
              <p className="text-xs text-gray-500">per implant (inc. crown)</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-200">
              <p className="text-sm text-gray-500 mb-1">Turkey (by implant brand)</p>
              <p className="text-3xl font-extrabold text-green-600">£250–£600</p>
              <p className="text-xs text-green-600 font-semibold">Save up to £2,750 per implant</p>
            </div>
          </div>

          <p>
            For a patient needing 4 implants, that saving is roughly £5,600 to £11,000, depending on brand and clinic — easily covering multiple trips to Turkey with funds to spare. For full-arch treatments the comparison becomes even more stark.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Full Comparison Table</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">UK Price</th>
                  <th className="px-4 py-3 text-right">Turkey Price</th>
                  <th className="px-4 py-3 text-right">Saving</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "Single Implant (incl. crown)", uk: "£2,000–£3,000", tr: "£250–£600", s: "70–92%" },
                  { t: "Implant + Bone Graft", uk: "£3,000–£4,500", tr: "£700–£1,000", s: "77–79%" },
                  { t: "2 Implants", uk: "£4,000–£6,000", tr: "£500–£1,200", s: "70–92%" },
                  { t: "4 Implants", uk: "£8,000–£12,000", tr: "£1,000–£2,400", s: "70–92%" },
                  { t: "All-on-4 (per arch)", uk: "£12,000–£18,000", tr: "£4,500–£5,500", s: "67–72%" },
                  { t: "All-on-6 (per arch)", uk: "£15,000–£22,000", tr: "From £5,600", s: "66–71%" },
                  { t: "Full Mouth (2 arches All-on-4)", uk: "£24,000–£36,000", tr: "£8,000–£11,000", s: "67–72%" },
                ].map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.t}</td>
                    <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.tr}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.s}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Are the Implant Brands the Same?</h2>
          <p>
            The price difference does not by itself mean inferior implants. Our partner clinics use internationally recognised implant systems also used in UK private practices:
          </p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>Straumann (Switzerland)</strong> — a widely researched premium implant brand</li>
            <li><strong>Nobel Biocare (Sweden/Switzerland)</strong> — used in complex full-arch cases worldwide</li>
            <li><strong>Astra Tech (Dentsply Sirona)</strong> — a premium Swedish implant system</li>
            <li><strong>Osstem (South Korea)</strong> — one of the world&apos;s largest manufacturers, widely used in Europe</li>
          </ul>
          <p>
            The cost difference mainly reflects Turkey&apos;s lower cost of living and lower clinic overheads. Ask which brand and system will be used and get it in writing, as quality also depends on the dentist, planning and aftercare.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Does the Price Include?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">🇬🇧 UK Implant — Often Excluded:</h3>
              <ul className="space-y-1 text-xs text-gray-600">
                {["CBCT 3D scan (billed separately)", "Bone graft (£500–£1,500 extra)", "Sedation or IV sedation", "Follow-up X-rays", "Temporary crown"].map((item, i) => (
                  <li key={i} className="flex gap-1.5"><span className="text-red-400">✗</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">🇹🇷 Turkey Implant — Typically Included:</h3>
              <ul className="space-y-1 text-xs text-gray-600">
                {["CBCT scan and consultation", "Implant placement surgery", "All anaesthetic and sedation", "Temporary crown (during healing)", "Final zirconia crown (return visit)", "5–10 year written guarantee"].map((item, i) => (
                  <li key={i} className="flex gap-1.5"><span className="text-green-500">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Do UK Implant Patients Actually Pay?</h2>
          <p>
            In the UK, the headline implant price rarely includes everything. A typical single implant patient in a UK private clinic will pay:
          </p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Initial consultation: £100–£200</li>
            <li>CBCT scan: £100–£300</li>
            <li>Implant + crown: £2,000–£2,800</li>
            <li>Bone graft (if needed): £500–£1,500</li>
            <li>Sinus lift (if needed): £1,000–£2,000</li>
          </ul>
          <p>
            A single tooth replacement in the UK can therefore cost <strong>£3,000–£5,000</strong> once all items are included. In Turkey, the same treatment — including scan, surgery, and the final crown — is <strong>£250–£700 all-in</strong> depending on brand.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Long Is the Treatment in Turkey?</h2>
          <p>
            Most UK patients complete their implant treatment across two visits:
          </p>
          <ol className="list-decimal list-inside space-y-2 my-3">
            <li><strong>First visit (3–5 days):</strong> Assessment, CBCT scan, implant placement, temporary crown fitted before you fly home</li>
            <li><strong>Second visit (2–3 days, after 3–6 months):</strong> Permanent zirconia or porcelain crown fitted</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Paying Monthly for Implants in Turkey</h2>
          <p>
            Some patients spread the cost of implants with credit arranged in the UK. Borrowing is optional, approval is the lender&apos;s decision and is never guaranteed, and the monthly payment depends on the offer you receive, so we do not publish monthly figures. One All-on-4 arch costs £4,500 and both arches £9,000, and lenders may have minimum borrowing amounts that a single implant can fall below. This is general information, not an offer of credit.
          </p>
          <Link href="/monthly-payment" className="text-[#1e40af] hover:underline font-semibold">→ Paying monthly: what to know</Link>

          <SourcesList
            introduction="UK guidance on treatment abroad. UK prices on this page are indicative private ranges, not figures from these bodies."
            sources={[
              { label: "General Dental Council: going abroad for dental treatment", href: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment" },
              { label: "NHSBSA: NHS England dental charges, April 2026", href: "https://www.nhsbsa.nhs.uk/sites/default/files/2026-03/NHS%20England%20dental%20charges%20poster%20-%20April%202026.pdf" },
            ]}
          />

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Get your personalised implant quote</p>
            <p className="text-gray-600 text-sm mb-4">Send us your X-rays or photos. We&apos;ll prepare a detailed treatment plan and all-inclusive cost estimate within 24 hours — free and no obligation.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get Free Implant Quote</Link>
              <Link href="/treatments/dental-implants-turkey" className="inline-block border border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Implants Treatment Guide</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/guides/dental-implants-turkey", label: "📘 Dental Implants Guide", sub: "Brands, process & timelines" },
                { href: "/prices/turkey-teeth-cost", label: "📘 Turkey Teeth Cost Guide", sub: "Full 2026 price guide" },
                { href: "/treatments/dental-implants-turkey", label: "Dental Implants Turkey", sub: "Full treatment guide" },
                { href: "/treatments/all-on-4-turkey", label: "All-on-4 Turkey", sub: "Full arch restoration" },
                { href: "/treatments/all-on-6-turkey", label: "All-on-6 Turkey", sub: "6-implant full arch" },
                { href: "/prices/turkey-teeth-cost", label: "Turkey Teeth Cost", sub: "All treatment prices" },
                { href: "/monthly-payment", label: "Paying Monthly", sub: "What to know before you borrow" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
    <FAQSection faqs={faqs} title="Implant Cost in Turkey vs UK: FAQs" />
    </>
  );
}
