import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Mouth Implants Turkey Cost 2026",
  description: "How much does a full mouth of dental implants cost in Turkey? Complete cost breakdown for All-on-4, All-on-6, and full mouth implants for UK patients.",
};

export default function FullMouthImplantsPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Full Mouth Dental Implants Turkey Cost 2026</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>For patients who need multiple or all teeth replaced, full mouth dental implants in Turkey represent one of the most significant savings available in dental tourism — with total costs that can be £20,000–£40,000 less than equivalent UK treatment.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Full Mouth Dental Implants?</h2>
          <p>Full mouth dental implants refers to replacing all of the teeth in one or both arches using implant-supported restorations. There are several different approaches, each with different costs and treatment timelines:</p>

          <div className="space-y-4 my-6">
            {[
              {
                name: "All-on-4",
                desc: "4 implants support a full arch of permanent teeth. The angled placement of the 2 posterior implants allows treatment even in patients with reduced bone density, often avoiding bone grafting.",
                turkeyPrice: "From £4,500/arch",
                ukPrice: "£12,000–£18,000/arch",
                implants: "4 per arch",
              },
              {
                name: "All-on-6",
                desc: "6 implants support a full arch, offering greater stability and load distribution than All-on-4. Better for patients with good bone volume who want maximum longevity.",
                turkeyPrice: "From £5,500/arch",
                ukPrice: "£15,000–£22,000/arch",
                implants: "6 per arch",
              },
              {
                name: "Individual Implants (Full Mouth)",
                desc: "Each missing tooth is replaced with its own implant and crown. Most like natural teeth. Best outcome but highest cost and longest treatment time.",
                turkeyPrice: "£450/implant",
                ukPrice: "£2,000–£2,800/implant",
                implants: "1 per missing tooth",
              },
            ].map(item => (
              <div key={item.name} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="bg-green-50 rounded-lg p-2 text-center">
                    <p className="text-gray-500">Turkey Price</p>
                    <p className="font-bold text-green-600">{item.turkeyPrice}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2 text-center">
                    <p className="text-gray-500">UK Equivalent</p>
                    <p className="font-bold text-red-500">{item.ukPrice}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2 text-center">
                    <p className="text-gray-500">Implants</p>
                    <p className="font-bold text-[#1e40af]">{item.implants}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Full Mouth Cost: Both Arches</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm mb-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">Turkey (both arches)</th>
                  <th className="px-4 py-3 text-right">UK Equivalent</th>
                  <th className="px-4 py-3 text-right">Saving</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "All-on-4 Full Mouth", turkey: "£9,000", uk: "£24,000–£36,000", save: "~£20,000+" },
                  { t: "All-on-6 Full Mouth", turkey: "£11,000", uk: "£30,000–£44,000", save: "~£25,000+" },
                  { t: "Mixed approach", turkey: "£6,000–£12,000", uk: "£20,000–£40,000+", save: "~£20,000+" },
                ].map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.t}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.turkey}</td>
                    <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-bold">{r.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What&apos;s Included in the Turkey Price?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Full clinical consultation and CBCT 3D scan</li>
            <li>Implant placement surgery (titanium posts)</li>
            <li>Temporary restoration while osseointegration occurs</li>
            <li>Second-trip crown or bridge fitting</li>
            <li>All follow-up appointments during your stay</li>
            <li>10-year implant guarantee</li>
          </ul>
          <p><strong>Not included:</strong> Flights, accommodation, travel insurance, or any bone grafting if required (priced separately and usually available at significantly lower cost than UK).</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Many Trips to Turkey Will I Need?</h2>
          <p>For All-on-4/6 treatments, the process typically involves:</p>
          <ol className="list-decimal list-inside space-y-2 my-3">
            <li><strong>Trip 1 (5–7 days):</strong> Consultation, extractions if needed, implant placement, temporary restoration provided immediately or within days</li>
            <li><strong>Trip 2 (3–4 days):</strong> After 3–6 months of healing, return for permanent bridge fitting, final adjustments</li>
          </ol>
          <p>Some cases with sufficient bone density can receive their permanent restoration in a single extended trip — your dentist will assess this during your initial consultation.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Monthly Payment Options</h2>
          <p>Full mouth implant treatment represents one of the biggest savings available in dental tourism, but it&apos;s still a significant investment. Our monthly payment plans allow you to spread costs from as little as £83/month — making life-changing treatment genuinely accessible.</p>
          <Link href="/monthly-payment" className="text-[#1e40af] hover:underline font-semibold">→ Explore monthly payment plans</Link>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-lg mb-2">Get a personalised full mouth quote</p>
            <p className="text-blue-200 text-sm mb-4">Share your X-rays or photos. We&apos;ll provide a detailed treatment plan and cost estimate within 24 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get Free Quote</Link>
              <Link href="/treatments/all-on-4-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">All-on-4 Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
