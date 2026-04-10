import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/hollywood-smile-uk-vs-turkey" },
  title: "Hollywood Smile Cost: UK vs Turkey 2026",
  description: "Hollywood Smile cost UK vs Turkey compared. 20 E-max veneers from £3,800 in Turkey vs £20,000+ in the UK. What's included, quality, and how to book.",
};

export default function HollywoodSmileUKvsTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Veneers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Hollywood Smile Cost: UK vs Turkey – 2026 Comparison</h1>
          <p className="text-gray-500 text-sm">Published April 2026 · 6 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The Hollywood Smile — a perfectly uniform, brilliantly white full set of veneers — is one of the most sought-after cosmetic dental treatments. In the UK, it&apos;s priced beyond the reach of most patients. In Turkey, the same result is available for a fraction of the cost. This guide breaks down exactly what you get, what you pay, and what to watch out for.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hollywood Smile Price: UK vs Turkey</h2>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-5 text-center border border-red-200">
              <p className="text-sm text-gray-500 mb-1">UK Private (20 veneers)</p>
              <p className="text-3xl font-extrabold text-red-500">£18,000–£22,000</p>
              <p className="text-xs text-gray-500">E-max at £900–£1,100 per tooth</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-200">
              <p className="text-sm text-gray-500 mb-1">Turkey (20 E-max veneers)</p>
              <p className="text-3xl font-extrabold text-green-600">£3,800–£5,000</p>
              <p className="text-xs text-green-600 font-semibold">Save up to £17,200</p>
            </div>
          </div>

          <p>
            Even adding £500–£700 for a week&apos;s flights and hotel in Turkey, the total cost remains around <strong>£4,500–£5,700</strong> — still saving over £12,000 compared to UK prices.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hollywood Smile Package Comparison</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-right">UK Price</th>
                  <th className="px-4 py-3 text-right">Turkey Price</th>
                  <th className="px-4 py-3 text-right">Saving</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pkg: "16 E-max Veneers", uk: "£14,400–£17,600", tr: "£3,040–£4,000", s: "74–79%" },
                  { pkg: "20 E-max Veneers (Hollywood)", uk: "£18,000–£22,000", tr: "£3,800–£5,000", s: "74–79%" },
                  { pkg: "20 Zirconia Veneers", uk: "£18,000–£24,000", tr: "£4,400–£5,600", s: "74–78%" },
                  { pkg: "Hollywood + Gum Contouring", uk: "£19,000–£25,000", tr: "£4,200–£5,500", s: "74–78%" },
                  { pkg: "Hollywood + Whitening", uk: "£19,000–£23,000", tr: "£4,000–£5,200", s: "74–79%" },
                ].map((r, i) => (
                  <tr key={r.pkg} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.pkg}</td>
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

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Is the Quality the Same?</h2>
          <p>
            The materials used at reputable Turkish clinics are identical to those used in the UK&apos;s leading cosmetic dental practices. A Hollywood Smile in Turkey typically uses:
          </p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>Ivoclar E-max</strong> — the world&apos;s leading lithium disilicate ceramic, made in Liechtenstein. Widely considered the gold standard for translucent, natural-looking veneers.</li>
            <li><strong>Digital Smile Design (DSD)</strong> — software that maps the patient&apos;s facial proportions and previews the smile result before any treatment begins.</li>
            <li><strong>In-house CAD/CAM laboratory</strong> — allowing precision milling of veneers to consistent tolerances.</li>
            <li><strong>3Shape or similar digital impressions</strong> — eliminating the need for messy traditional impression materials.</li>
          </ul>
          <p>
            The same tools and materials are available in the UK — but the overheads of running a London or Manchester cosmetic dental practice are many times higher than operating in Istanbul or Antalya.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Does a Hollywood Smile Include in Turkey?</h2>
          <ul className="space-y-2">
            {[
              "Full consultation and Digital Smile Design session",
              "Shade selection — from natural off-white to dramatic bright white",
              "Tooth preparation (minimal enamel reduction)",
              "Temporary veneers while permanent ones are crafted",
              "Permanent E-max veneer fabrication (in-house lab, 3–5 days)",
              "Final fitting, bonding, and bite adjustment",
              "5–10 year written guarantee",
              "Post-treatment aftercare instructions and WhatsApp follow-up",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start list-none"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Does the UK Charge So Much More?</h2>
          <p>
            The price difference is not explained by quality, materials, or clinical skill. It is explained by costs:
          </p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>Dental associate salaries in UK cosmetic practices: £50,000–£150,000+/year</li>
            <li>Prime-location clinic rent in London: £5,000–£30,000/month</li>
            <li>UK laboratory costs: £200–£400 per veneer</li>
            <li>Dental insurance and indemnity costs in the UK</li>
          </ul>
          <p>
            In Turkey, each of these cost items is a fraction of the UK equivalent. The dentist still earns an excellent income relative to local living costs — the patient simply benefits from those economics.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can You Get a Natural-Looking Hollywood Smile in Turkey?</h2>
          <p>
            Absolutely. The term &ldquo;Hollywood Smile&rdquo; encompasses a wide range of aesthetics — from the very white, very uniform result popularised in celebrity culture to a subtler, more natural enhancement. Modern E-max veneers are available in dozens of shades, from bright BL1 to natural-looking A1 or A2. Digital Smile Design technology lets you preview any shade and shape before committing.
          </p>
          <p>
            Our partner clinics specialise in natural-looking results. They advise patients on the shade and shape that will look most harmonious with their skin tone, face shape, and age — not simply the whitest option available.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Long Does the Hollywood Smile Take in Turkey?</h2>
          <p>
            A full Hollywood Smile (20 veneers) is typically completed in <strong>5 days</strong>:
          </p>
          <ol className="list-decimal list-inside space-y-2 my-3">
            <li><strong>Day 1:</strong> Consultation, photos, Digital Smile Design, shade selection</li>
            <li><strong>Day 2:</strong> Tooth preparation, temporary veneers fitted</li>
            <li><strong>Days 3–4:</strong> In-house lab fabricates permanent E-max veneers</li>
            <li><strong>Day 5:</strong> Permanent veneer fitting, bonding, final adjustments</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pay Monthly for Your Hollywood Smile</h2>
          <p>
            A Hollywood Smile (20 E-max veneers) financed over 36 months costs approximately <strong>£106/month</strong> — less than many people spend on subscription services, and far less than UK finance for equivalent treatment.
          </p>
          <Link href="/monthly-payment" className="text-[#1e40af] hover:underline font-semibold">→ See all monthly payment options</Link>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get your Hollywood Smile quote</p>
            <p className="text-blue-200 mb-4">Send us your photos — we&apos;ll prepare a personalised treatment plan with a Digital Smile Design preview and all-inclusive cost estimate within 24 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get Free Quote</Link>
              <Link href="/treatments/full-smile-makeover-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Smile Makeover Guide</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/treatments/veneers-turkey", label: "Veneers Turkey", sub: "Treatment guide & pricing" },
                { href: "/treatments/full-smile-makeover-turkey", label: "Full Smile Makeover", sub: "Veneers + more" },
                { href: "/treatments/dental-implants-turkey", label: "Dental Implants Turkey", sub: "Full treatment guide" },
                { href: "/prices/veneers-turkey-cost", label: "Veneers Cost Guide", sub: "Prices & comparisons" },
                { href: "/prices/turkey-teeth-cost", label: "Turkey Teeth Cost", sub: "All treatment prices" },
                { href: "/monthly-payment", label: "Monthly Payment Plans", sub: "From £82/month" },
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
  );
}
