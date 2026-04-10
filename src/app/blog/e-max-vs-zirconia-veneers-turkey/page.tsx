import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-max vs Zirconia Veneers in Turkey: Which Is Better?",
  description: "Comparing E-max and zirconia veneers in Turkey for UK patients. Durability, aesthetics, cost, and which option is right for you. Full 2026 comparison guide.",
};

export default function EmaxVsZirconiPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Veneers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">E-max vs Zirconia Veneers in Turkey: Which Is Better?</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>When planning veneers in Turkey, the most important material decision you&apos;ll make is between <strong>E-max (lithium disilicate ceramic)</strong> and <strong>zirconia</strong>. Both are used widely by top Turkish dental clinics, both deliver excellent long-term results — but they have genuinely different characteristics that matter for different patients.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is E-max?</h2>
          <p>E-max (made by Ivoclar Vivadent) is a lithium disilicate glass-ceramic — currently considered the gold standard material for dental veneers globally. It is the same product used by top cosmetic dentists in Harley Street, Beverly Hills, and Istanbul.</p>
          <p>E-max is characterised by:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Very high translucency — mimics the light-transmitting quality of natural tooth enamel</li>
            <li>Excellent aesthetics — virtually indistinguishable from natural teeth</li>
            <li>Can be made very thin (0.3–0.5mm), meaning less tooth preparation</li>
            <li>High flexural strength (~360–400 MPa) — strong enough for front teeth</li>
            <li>10–15+ year lifespan with proper care</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is Zirconia?</h2>
          <p>Zirconia (zirconium dioxide) is a ceramic material known for its extreme durability. It is used both for full-coverage crowns and, in its high-translucency form, for veneers. Zirconia is:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Exceptionally strong (~900–1200 MPa) — the strongest dental ceramic available</li>
            <li>Highly opaque in its standard form (less natural-looking)</li>
            <li>High-translucency zirconia variants are available, though still slightly less natural than E-max</li>
            <li>Ideal for patients who grind their teeth (bruxism)</li>
            <li>Requires slightly more tooth reduction than E-max</li>
            <li>Excellent longevity — 15+ years</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">E-max vs Zirconia: Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm mb-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-center">E-max</th>
                  <th className="px-4 py-3 text-center">Zirconia</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "Natural appearance", emax: "⭐⭐⭐⭐⭐", zir: "⭐⭐⭐⭐" },
                  { f: "Strength & durability", emax: "⭐⭐⭐⭐", zir: "⭐⭐⭐⭐⭐" },
                  { f: "Good for bruxism (grinding)", emax: "Moderate", zir: "Excellent" },
                  { f: "Tooth preparation needed", emax: "Minimal (0.3–0.5mm)", zir: "Slightly more" },
                  { f: "Price in Turkey", emax: "From £190/tooth", zir: "From £220/tooth" },
                  { f: "Typical lifespan", emax: "10–15+ years", zir: "15+ years" },
                  { f: "Best suited for", emax: "Front teeth, natural look", zir: "Grinders, maximum durability" },
                ].map((r, i) => (
                  <tr key={r.f} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.f}</td>
                    <td className="px-4 py-3 text-center">{r.emax}</td>
                    <td className="px-4 py-3 text-center">{r.zir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Which Should You Choose?</h2>
          <p><strong>Choose E-max if:</strong></p>
          <ul className="list-disc list-inside space-y-1 my-2">
            <li>You want the most natural-looking result</li>
            <li>You don&apos;t grind your teeth</li>
            <li>You want minimal tooth preparation</li>
            <li>Your priority is aesthetics over absolute maximum strength</li>
          </ul>
          <p><strong>Choose zirconia if:</strong></p>
          <ul className="list-disc list-inside space-y-1 my-2">
            <li>You have a history of bruxism (teeth grinding)</li>
            <li>You want the most durable long-term option</li>
            <li>You prefer a bolder, whiter aesthetic and accept slightly less translucency</li>
            <li>You are covering back teeth as well as front teeth</li>
          </ul>
          <p>For most UK patients seeking a natural-looking smile transformation, <strong>E-max is the most popular and recommended choice</strong>. Your Turkish dentist will make a specific recommendation based on your bite, tooth condition, and aesthetic goals during your consultation.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cost Comparison in Turkey</h2>
          <p>In Turkey, E-max veneers start from £190 per tooth and zirconia from £220 per tooth. For a full set of 20, the total difference is approximately £600 — modest relative to the overall saving vs UK prices.</p>
          <p>Both are a fraction of UK prices, where E-max veneers typically cost £800–£1,000 per tooth and zirconia £900–£1,200.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Not sure which is right for you?</p>
            <p className="text-gray-600 text-sm mb-4">Book a free consultation — our team will review your photos and dental history and make a personalised recommendation.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Get Expert Advice Free</Link>
              <Link href="/prices/veneers-turkey-cost" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Veneers Price Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
