import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Composite vs Porcelain Veneers in Turkey: Which to Choose?",
  description: "Composite vs porcelain veneers in Turkey for UK patients. A clear comparison of cost, durability, appearance, and procedure to help you decide.",
};

export default function CompositeVsPorcelainPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Veneers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Composite vs Porcelain Veneers in Turkey: Which Should You Choose?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Two main types of veneers are offered at Turkish dental clinics: <strong>composite (resin)</strong> and <strong>porcelain (ceramic)</strong>. They differ in material, procedure, durability, aesthetics, and cost. Understanding the difference helps you make the right choice for your goals and budget.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Composite Veneers?</h2>
          <p>Composite veneers are made from a tooth-coloured resin material — the same material used in white tooth fillings. They are applied directly to the tooth surface by the dentist, layer by layer, and sculpted and polished in a single appointment.</p>
          <p><strong>Key characteristics:</strong></p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Applied in a single visit — no lab required</li>
            <li>Reversible in some cases — can be removed without significant tooth alteration</li>
            <li>Good for minor corrections: chips, small gaps, slight discolouration</li>
            <li>Less durable than porcelain — typically lasting 5–7 years before replacement</li>
            <li>Can stain over time with coffee, tea, and red wine</li>
            <li>Less natural translucency than E-max porcelain</li>
            <li>Significantly cheaper — from £80–£120/tooth in Turkey</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Porcelain Veneers?</h2>
          <p>Porcelain veneers (primarily E-max or zirconia) are custom-fabricated in a dental laboratory from ceramic material. They require two appointments — one for tooth preparation and impressions, one for bonding the final veneers.</p>
          <p><strong>Key characteristics:</strong></p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Lab-crafted for precise fit and aesthetics</li>
            <li>Highly translucent — very natural appearance with E-max</li>
            <li>Stain-resistant — ceramic doesn&apos;t absorb coffee, tea, or wine</li>
            <li>Durable — typically lasting 10–15+ years</li>
            <li>Requires minimal tooth preparation (0.3–0.5mm for E-max)</li>
            <li>From £190/tooth (E-max) in Turkey</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm mb-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-center">Composite</th>
                  <th className="px-4 py-3 text-center">Porcelain (E-max)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "Price in Turkey", c: "From £80–120/tooth", p: "From £190/tooth" },
                  { f: "Number of appointments", c: "1", p: "2 (spread over 5–7 days)" },
                  { f: "Durability", c: "5–7 years", p: "10–15+ years" },
                  { f: "Stain resistance", c: "Moderate (can stain)", p: "Excellent (stain-resistant)" },
                  { f: "Natural appearance", c: "Good", p: "Excellent" },
                  { f: "Repairability", c: "Easy to repair", p: "Needs replacement if chipped" },
                  { f: "Tooth preparation", c: "Minimal/none", p: "Minimal (0.3–0.5mm)" },
                  { f: "Best for", c: "Minor corrections, budget", p: "Full transformation, longevity" },
                ].map((r, i) => (
                  <tr key={r.f} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.f}</td>
                    <td className="px-4 py-3 text-center">{r.c}</td>
                    <td className="px-4 py-3 text-center">{r.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Which Is Right for You?</h2>
          <p><strong>Choose composite if:</strong> You want to correct minor imperfections on a limited budget, you&apos;re not ready for permanent veneers (composite is more reversible), or you want results in a single appointment.</p>
          <p><strong>Choose porcelain (E-max) if:</strong> You want a long-lasting, natural-looking smile transformation; stain resistance is important to you; or you want the maximum aesthetic result for a full set of veneers.</p>
          <p>For most UK patients travelling to Turkey specifically for a smile transformation, <strong>E-max porcelain veneers represent the best long-term value</strong>. The additional cost per tooth (£110–£130 more than composite) is modest relative to the superior durability and aesthetics over 10–15 years.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Can I Have Both?</h2>
          <p>Some patients choose porcelain veneers for their most visible teeth and composite for secondary teeth — a cost-effective approach where the highest-visibility teeth get the best material. Your dentist in Turkey will advise on what makes clinical sense for your specific case.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Discuss your options free</p>
            <p className="text-gray-600 text-sm mb-4">Share your photos with us and we&apos;ll provide a personalised recommendation — free, within 24 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Get Free Advice</Link>
              <Link href="/treatments/veneers-turkey" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Veneers Turkey Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
