import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FAQSection from "@/components/FAQSection";
import { REVIEWER_PERSON } from "@/lib/reviewer";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/hollywood-smile-turkey-cost" },
  title: "Hollywood Smile Turkey Cost 2026",
  description: "Hollywood Smile cost in Turkey: zirconia crown packages from £2,800, what is included, and how the price compares with UK private dentistry.",
};

const faqs = [
  {
    question: "How much is a Hollywood smile in Turkey?",
    answer: "A Hollywood smile with 20 zirconia crowns starts at £2,800 in Turkey and a 24-crown package with Digital Smile Design is £3,100, both including hotel and VIP transfers. Individual zirconia crowns are £130 per tooth. The UK private equivalent for 20 zirconia crowns is £15,000 or more. Prices checked 29 October 2026 and confirmed in your personalised quote.",
  },
  {
    question: "Is a Hollywood smile made of veneers or crowns?",
    answer: "The term is not a single procedure. The packages on this page use zirconia crowns, which cover the whole tooth. Some clinics use veneers instead, which need less enamel removed. Ask your dentist which is clinically suitable for your teeth before you choose on price alone.",
  },
  {
    question: "Does a Hollywood smile in Turkey include hotel and flights?",
    answer: "The package prices include hotel accommodation and VIP airport transfers. Flights, food and travel insurance are not included. Check exactly what your written quote covers, including temporary crowns and any gum contouring.",
  },
  {
    question: "Can I pay monthly for a Hollywood smile in Turkey?",
    answer: "Some patients spread the cost with credit arranged in the UK, subject to the lender's approval, which is never guaranteed. The monthly payment depends on the offer you receive, so we do not publish monthly figures.",
  },
  {
    question: "Will a Hollywood smile look natural?",
    answer: "It can. Shade and shape are chosen with your dentist, and Digital Smile Design lets you preview the result before treatment. The very white, uniform look associated with early dental tourism was a shade choice, not a requirement.",
  },
];

export default function HollywoodSmilePage() {
  return (
    <>
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-hollywood-smile-turkey-cost"
        path="/blog/hollywood-smile-turkey-cost"
        headline="Hollywood Smile Turkey Cost 2026"
        description="How much does a Hollywood Smile cost in Turkey for UK patients? Full cost breakdown for zirconia crown packages, what's included, and how to get a naturally glamorous result."
        datePublished="2026-01-01"
        dateModified="2026-10-29"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Hollywood Smile Turkey Cost 2026", path: "/blog/hollywood-smile-turkey-cost" },
        ]}
              reviewer={REVIEWER_PERSON}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Treatments</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Hollywood Smile Turkey Cost 2026 – UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · Last updated 29 October 2026 · 6 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p><strong>Short answer:</strong> a Hollywood smile in Turkey costs from £2,800 for 20 zirconia crowns (£3,100 for 24 crowns with Digital Smile Design), including hotel and VIP transfers. The UK private price for 20 zirconia crowns is £15,000 or more. Prices checked 29 October 2026; your quote is confirmed after photo review.</p>

          <p>The &quot;Hollywood Smile&quot; — a complete, dazzling, perfectly uniform smile — has become one of the most sought-after aesthetic dental treatments in Turkey. For UK patients, Turkey offers the same world-class aesthetic results at a fraction of UK private dental prices.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is a Hollywood Smile?</h2>
          <p>A Hollywood Smile is a comprehensive cosmetic dental treatment that creates a uniform, bright, perfectly shaped smile covering all visible teeth. It typically combines:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Zirconia crowns on upper and lower front teeth (20 or 24 crowns)</li>
            <li>Digital Smile Design to preview the result before treatment</li>
            <li>Shade selection tailored to your skin tone and preferences</li>
            <li>Hotel accommodation and VIP airport transfers included</li>
            <li>Gum contouring if needed for symmetry</li>
          </ul>
          <p>A standard Hollywood Smile involves 20 zirconia crowns (10 upper + 10 lower), though the exact number varies by patient. A 24-crown package includes Digital Smile Design.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hollywood Smile Cost in Turkey vs UK</h2>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-5 text-center border border-red-200">
              <p className="text-sm text-gray-500 mb-1">UK Private Price</p>
              <p className="text-3xl font-extrabold text-red-500 line-through">£15,000+</p>
              <p className="text-xs text-gray-500">20 zirconia crowns, London</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-200">
              <p className="text-sm text-gray-500 mb-1">Turkey All-Inclusive</p>
              <p className="text-3xl font-extrabold text-green-600">£2,800–£3,100</p>
              <p className="text-xs text-green-600 font-semibold">Save up to £12,000+</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hollywood Smile Package Breakdown</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-right">Turkey Price</th>
                  <th className="px-4 py-3 text-right">Included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pkg: "Hollywood Smile – 20 Zirconia Crowns", price: "£2,800", inc: "Hotel + VIP transfers" },
                  { pkg: "Hollywood Smile – 24 Zirconia Crowns", price: "£3,100", inc: "Hotel + transfers + DSD" },
                  { pkg: "Zirconia Crown (individual)", price: "£130/tooth", inc: "Per crown" },
                ].map((r, i) => (
                  <tr key={r.pkg} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.pkg}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.price}</td>
                    <td className="px-4 py-3 text-right text-xs text-gray-500">{r.inc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Hollywood Smile Process in Turkey</h2>
          <ol className="space-y-3 my-4">
            {[
              { title: "Digital Smile Design Consultation", desc: "Your dentist photographs your smile and designs your ideal result digitally. You see exactly what your new smile will look like before any treatment begins." },
              { title: "Shade Selection", desc: "You choose your preferred shade from a wide spectrum — from natural-looking off-white to dramatic bright white. Your dentist will advise on what looks most harmonious with your skin tone." },
              { title: "Preparation", desc: "A minimal layer of enamel is removed to prepare teeth for zirconia crowns. Temporary crowns are placed immediately." },
              { title: "Laboratory Fabrication", desc: "Your permanent zirconia crowns are crafted in an in-house laboratory by specialist ceramists. This typically takes 3–5 days." },
              { title: "Final Fitting", desc: "Permanent crowns are bonded with dental adhesive. Each tooth is checked for shade match, fit, and bite. Fine adjustments ensure a perfect result." },
            ].map((step, i) => (
              <li key={i} className="flex gap-3 list-none">
                <span className="bg-[#1e40af] text-white rounded-full w-7 h-7 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Does a Hollywood Smile Look Natural?</h2>
          <p>This is entirely your choice. Modern Hollywood Smiles range from naturally beautiful (natural-looking shades mimicking real teeth) to bold and dramatic (bright white shades). Digital Smile Design lets you preview any shade and shape option before committing.</p>
          <p>The &quot;fake-looking&quot; Hollywood Smile associated with early Turkish dental tourism was typically a specific aesthetic choice (very white, very uniform) made by patients wanting that exact look. Today&apos;s patients can choose a natural-looking result that no one would identify as dental work.</p>

          <p>For a like-for-like breakdown against UK private pricing — what each quote includes, and where the difference actually comes from — see our <Link href="/blog/hollywood-smile-uk-vs-turkey" className="text-[#1e40af] hover:underline font-semibold">Hollywood Smile cost comparison: UK vs Turkey</Link>.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pay Monthly for Your Hollywood Smile</h2>
          <p>If you choose to borrow, the lender decides whether to offer credit and on what terms, and approval is never guaranteed. The monthly payment depends on the amount borrowed, the term, the interest rate and any fees, so we do not publish monthly figures for the £2,800 package.</p>
          <Link href="/monthly-payment" className="text-[#1e40af] hover:underline font-semibold">→ Explore monthly payment options</Link>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your Hollywood Smile quote</p>
            <p className="text-blue-200 mb-4">Share your photos — we&apos;ll prepare a personalised treatment plan and cost estimate within 24 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get Free Quote</Link>
              <Link href="/treatments/full-smile-makeover-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Smile Makeover Guide</Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/treatments/full-smile-makeover-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Full Smile Makeover</span>
              <span className="text-xs text-gray-500 mt-0.5">Veneers + more</span>
            </Link>
            <Link href="/treatments/veneers-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Treatment guide & pricing</span>
            </Link>
            <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Dental Implants Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full treatment guide</span>
            </Link>
            <Link href="/prices/veneers-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Cost Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">Prices & comparisons</span>
            </Link>
            <Link href="/prices/turkey-teeth-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Turkey Teeth Cost Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">All treatment prices &amp; comparisons</span>
            </Link>
            <Link href="/blog/hollywood-smile-uk-vs-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Hollywood Smile: UK vs Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Side-by-side price comparison</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
    <FAQSection faqs={faqs} title="Hollywood Smile in Turkey: FAQs" />
    </>
  );
}
