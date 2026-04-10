import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/hollywood-smile-turkey-cost" },
  title: "Hollywood Smile Turkey Cost 2026",
  description: "How much does a Hollywood Smile cost in Turkey for UK patients? Full cost breakdown, what's included, and how to get a naturally glamorous result.",
};

export default function HollywoodSmilePage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Treatments</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Hollywood Smile Turkey Cost 2026 – UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>The &quot;Hollywood Smile&quot; — a complete, dazzling, perfectly uniform smile — has become one of the most sought-after aesthetic dental treatments in Turkey. For UK patients, Turkey offers the same world-class aesthetic results at a fraction of UK private dental prices.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is a Hollywood Smile?</h2>
          <p>A Hollywood Smile is a comprehensive cosmetic dental treatment that creates a uniform, bright, perfectly shaped smile covering all visible teeth. It typically combines:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Porcelain veneers (usually E-max) on upper and lower front teeth</li>
            <li>Digital Smile Design to preview the result before treatment</li>
            <li>Shade selection tailored to your skin tone and preferences</li>
            <li>Sometimes teeth whitening of back teeth not covered by veneers</li>
            <li>Gum contouring if needed for symmetry</li>
          </ul>
          <p>A standard Hollywood Smile involves 20 veneers (10 upper + 10 lower), though the exact number varies by patient.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hollywood Smile Cost in Turkey vs UK</h2>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-5 text-center border border-red-200">
              <p className="text-sm text-gray-500 mb-1">UK Private Price</p>
              <p className="text-3xl font-extrabold text-red-500 line-through">£20,000+</p>
              <p className="text-xs text-gray-500">20 E-max veneers, London</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-200">
              <p className="text-sm text-gray-500 mb-1">Turkey All-Inclusive</p>
              <p className="text-3xl font-extrabold text-green-600">£3,800–£5,000</p>
              <p className="text-xs text-green-600 font-semibold">Save up to £16,000</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hollywood Smile Price Breakdown</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-right">Turkey Price</th>
                  <th className="px-4 py-3 text-right">Included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pkg: "Standard (16 E-max veneers)", price: "£3,040", inc: "Upper 10 + Lower 6" },
                  { pkg: "Full Hollywood (20 E-max)", price: "£3,800", inc: "Full upper + lower" },
                  { pkg: "Premium (20 Zirconia)", price: "£4,400", inc: "Max durability" },
                  { pkg: "Hollywood + Gum Contouring", price: "£4,200–£5,000", inc: "Veneers + gum symmetry" },
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
              { title: "Preparation", desc: "A minimal layer of enamel (0.3–0.5mm) is removed to make space for the veneers. Temporary veneers are placed immediately." },
              { title: "Laboratory Fabrication", desc: "Your permanent E-max veneers are crafted in an in-house laboratory by specialist ceramists. This typically takes 3–5 days." },
              { title: "Final Fitting", desc: "Permanent veneers are bonded with dental adhesive. Each tooth is checked for shade match, fit, and bite. Fine adjustments ensure a perfect result." },
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
          <p>This is entirely your choice. Modern Hollywood Smiles range from naturally beautiful (translucent E-max, shade A1 or A2, mimicking natural teeth) to bold and dramatic (brighter shades like B0 or BL1). Digital Smile Design lets you preview any shade and shape option before committing.</p>
          <p>The &quot;fake-looking&quot; Hollywood Smile associated with early Turkish dental tourism was typically a specific aesthetic choice (very white, very uniform) made by patients wanting that exact look. Today&apos;s patients can choose a natural-looking result that no one would identify as dental work.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pay Monthly for Your Hollywood Smile</h2>
          <p>A Hollywood Smile in Turkey, financed over 36 months, costs from approximately £106/month — making a genuinely transformative treatment accessible at a fraction of UK costs.</p>
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
            <Link href="/prices/teeth-done-in-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All Treatment Costs</span>
              <span className="text-xs text-gray-500 mt-0.5">Full price guide</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
