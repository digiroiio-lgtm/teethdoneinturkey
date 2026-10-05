import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/prices/dental-implants-turkey-cost" },
  title: "Dental Implants Turkey Cost: UK Guide",
  description: "Dental implants Turkey cost 2026: single implants from £250, All-on-4 from £4,500, All-on-6 from £5,600 per arch. UK price comparison and payment options.",
};

const faqs = [
  { q: "Are Turkish dental implants guaranteed?", a: "Partner clinics provide a written guarantee on their own implant work, commonly 5–10 years, typically covering the implant fixture and the crown. Ask for the exact terms in writing before you commit, because what is covered and for how long varies by clinic and by component. A guarantee of this kind covers the clinic’s workmanship and materials — it is not a clinical guarantee that an implant will never fail, and it does not normally cover flights or accommodation for a return visit." },
  { q: "Can I get implants on finance?", a: "Monthly payment plans are available from £82/month with 0% APR representative over 12, 24 or 36 months, subject to an affordability and credit assessment. A soft-search pre-qualification lets you check your eligibility without affecting your credit score. Finance is provided by a third-party lender: approval is not guaranteed and not everyone will qualify." },
  { q: "What happens if something goes wrong after I return home?", a: "Our UK team co-ordinates aftercare and partner clinics offer remote follow-up by WhatsApp and video call. Where a problem falls within the clinic’s written guarantee, the corrective treatment itself is covered, but it usually has to be carried out by the clinic that did the original work and travel costs are normally yours to meet. Urgent problems should be seen by a UK dentist first; routine NHS or private charges apply for that." },
];

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/prices/dental-implants-turkey-cost`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Dental Implants Turkey Cost: UK Guide",
      description:
        "Dental implants Turkey cost 2026: single implants from £250, All-on-4 from £4,500, All-on-6 from £5,600 per arch. UK price comparison and payment options.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-GB",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Prices", item: `${SITE_URL}/prices/turkey-teeth-cost` },
        { "@type": "ListItem", position: 3, name: "Dental Implants Turkey Cost", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ImplantsCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Dental Implants Turkey Cost – 2026 Guide</h1>
          <p className="text-xl text-blue-200">Complete price breakdown for all implant treatments in Turkey</p>
          <p className="mt-3 text-sm text-blue-300/70">✓ Prices last verified: June 2026</p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dental Implant Prices: Turkey vs UK</h2>
            <div className="overflow-x-auto rounded-2xl shadow-md">
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
                    { t: "Single Osstem Implant + Crown", uk: "£2,000–£3,000", turkey: "£250", s: "88–92%" },
                    { t: "Single Medentika Implant + Crown", uk: "£2,500–£3,500", turkey: "£430", s: "83–88%" },
                    { t: "Single Straumann Implant + Crown", uk: "£3,000–£4,500", turkey: "£930", s: "69–79%" },
                    { t: "All-on-6 Package (per arch, incl. hotel)", uk: "£15,000–£22,000", turkey: "£5,600", s: "63–75%" },
                  ].map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">{r.t}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                      <td className="px-4 py-3 text-right"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.s}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Saving ranges are calculated like-for-like against the UK range shown on the same row (lowest UK price
              against the Turkey price, then highest against the Turkey price), so the lower figure is the saving you
              would make against the cheapest UK quote. UK figures are typical private fees, not NHS band charges.
              Turkey prices are per unit unless stated and exclude flights. Prices last verified June 2026.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in Turkey Implant Prices?</h2>
            <ul className="space-y-2 text-gray-600">
              {["CBCT scan and consultation", "Implant placement (surgery)", "Temporary crown", "Final zirconia or porcelain crown (on return visit)", "All anaesthetic and sedation", "Follow-up appointments during your stay"].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-green-500">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Implant Quote</Link>
            <Link href="/prices/all-on-6-dental-implants-turkey-package" className="inline-block border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">All-on-6 Package Details</Link>
          </div>

          <p className="text-gray-600">
            Replacing every tooth rather than a few? Full-arch treatment is priced per arch, and across both arches
            comes to £8,000–£11,000 for All-on-4 or £10,000–£14,000 for All-on-6. The{" "}
            <Link href="/blog/full-mouth-implants-uk-vs-turkey" className="text-[#1e40af] font-semibold hover:underline">full mouth dental implants Turkey cost guide</Link>{" "}
            sets out the stage-by-stage costs, what the package includes and excludes, and a worked monthly payment
            example.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Are Dental Implants Cheaper in Turkey?</h2>
            <p className="text-gray-600 mb-4">The significant price difference between UK and Turkish dental implants is not a reflection of quality — it is a product of economics. Turkey has a much lower cost of living and lower business operating costs than the UK. A dentist in Turkey can perform the exact same procedure, using the exact same implant brands (Straumann, Nobel Biocare, Astra Tech), with the same materials and equipment, for a fraction of the UK price because their overheads are dramatically lower.</p>
            <p className="text-gray-600">Turkish dental clinics have also benefitted from heavy investment in technology over the past decade. Many now operate with in-house laboratories, CBCT scanners, and digital smile design software — tools that allow them to deliver faster, more accurate results while keeping costs low.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implant Brands Available in Turkey</h2>
            <p className="text-gray-600 mb-4">Our partner clinics use only internationally recognised implant systems, including:</p>
            <ul className="space-y-2 text-gray-600">
              {[
                "Straumann (Switzerland) — the world's most trusted implant brand, used by leading practices globally",
                "Nobel Biocare (Sweden/Switzerland) — premium implants with decades of clinical research",
                "Astra Tech (Dentsply Sirona) — a highly regarded Swedish implant system",
                "Osstem (South Korea) — one of the world's largest implant manufacturers, widely used across Europe",
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-green-500">✓</span>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Does Implant Treatment Take in Turkey?</h2>
            <p className="text-gray-600 mb-4">Most UK patients complete their implant treatment across two visits to Turkey:</p>
            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li><strong>First visit (3–5 days):</strong> Consultation, CBCT scan, implant placement surgery. A temporary crown is fitted so you fly home with a full smile.</li>
              <li><strong>Second visit (2–3 days, after 3–6 months):</strong> The bone has now fully fused with the implant. Your permanent zirconia or porcelain crown is fitted and adjusted to perfection.</li>
            </ol>
            <p className="text-gray-600 mt-4">For All-on-4 and All-on-6 procedures, the complete treatment (including temporary arch) is often completed in a single 5–7 day visit, with a return visit for the final permanent arch.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(item => (
                <div key={item.q} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/guides/dental-implants-turkey", title: "Dental Implants Turkey: Complete Guide", desc: "Brands, procedure, timelines and everything else you need to know." },
            { href: "/guides/teeth-in-turkey", title: "Complete UK Patient Guide to Teeth in Turkey", desc: "Treatments, costs, safety and travel — the full picture." },
            { href: "/treatments/all-on-4-turkey", title: "All-on-4 Dental Implants Turkey", desc: "Full arch replacement from £4,500 — completed in one trip." },
            { href: "/treatments/all-on-6-turkey", title: "All-on-6 Dental Implants Turkey", desc: "Maximum stability full arch from £5,600." },
          ].map(l => (
            <Link key={l.href} href={l.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors">
              <p className="font-semibold text-gray-900 mb-1">{l.title}</p>
              <p className="text-sm text-gray-600">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <CTASection title="Get a Free Implant Consultation" subtitle="Our implant specialists will review your case and provide a detailed quote within 24 hours." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
