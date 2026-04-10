import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/full-mouth-implants-uk-vs-turkey" },
  title: "Full Mouth Implants Cost: UK vs Turkey 2026",
  description: "Full mouth dental implants cost UK vs Turkey. All-on-4 from £9,000 (both arches) in Turkey vs £24,000–£44,000 in the UK. Complete breakdown for UK patients.",
};

export default function FullMouthImplantsUKvsTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Full Mouth Implants Cost: UK vs Turkey – 2026 Guide</h1>
          <p className="text-gray-500 text-sm">Published April 2026 · 8 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Full mouth dental implants are one of the most transformative dental procedures available — and in the UK, one of the most expensive. UK patients quoted £30,000–£44,000 for a full mouth reconstruction are discovering that the same procedure, using the same implant brands, is available in Turkey for £9,000–£14,000. This guide explains exactly what that means in practice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Full Mouth Implants Cost: UK vs Turkey</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">UK Price</th>
                  <th className="px-4 py-3 text-right">Turkey Price</th>
                  <th className="px-4 py-3 text-right">Saving</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "All-on-4 (single arch)", uk: "£12,000–£18,000", tr: "£4,000–£5,500", s: "67–72%" },
                  { t: "All-on-6 (single arch)", uk: "£15,000–£22,000", tr: "£5,000–£7,000", s: "66–71%" },
                  { t: "All-on-4 (both arches)", uk: "£24,000–£36,000", tr: "£8,000–£11,000", s: "67–72%" },
                  { t: "All-on-6 (both arches)", uk: "£30,000–£44,000", tr: "£10,000–£14,000", s: "66–70%" },
                  { t: "Individual implants (full mouth, 20)", uk: "£40,000–£60,000", tr: "£8,400–£12,000", s: "78–80%" },
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

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is a Full Mouth Implant Treatment?</h2>
          <p>
            &ldquo;Full mouth implants&rdquo; means replacing all teeth in one or both dental arches using implant-supported fixed restorations. There are several approaches:
          </p>

          <div className="space-y-4 my-4">
            {[
              {
                name: "All-on-4",
                desc: "Four implants support a full arch of fixed teeth. The two posterior implants are angled to avoid the sinus and maximise bone contact. Often possible without bone grafting, meaning lower cost and faster treatment.",
                best: "Best for: Most patients with adequate bone density",
              },
              {
                name: "All-on-6",
                desc: "Six implants provide greater load distribution and stability. Better for patients with higher bite forces, those who grind their teeth, or where maximum longevity is the priority.",
                best: "Best for: Patients with good bone volume wanting maximum durability",
              },
              {
                name: "Individual Implants (Full Mouth)",
                desc: "Each missing tooth gets its own implant. Provides the most natural feel and look. Higher cost and longer treatment time, but the gold standard in terms of outcome.",
                best: "Best for: Patients with strong bone density wanting the closest to natural teeth",
              },
            ].map(item => (
              <div key={item.name} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                <p className="text-xs text-[#1e40af] font-semibold">{item.best}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is Included in the Turkey Price?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">🇹🇷 Turkey — Typically Included:</h3>
              <ul className="space-y-1 text-xs text-gray-600">
                {[
                  "Full consultation and CBCT 3D scan",
                  "All extractions and surgical preparation",
                  "Implant placement (all posts)",
                  "Temporary arch on day of surgery",
                  "All anaesthetic and sedation",
                  "Follow-up during your stay",
                  "Return trip: permanent zirconia bridge",
                  "10-year implant guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex gap-1.5"><span className="text-green-500">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">🇬🇧 UK — Often Charged Separately:</h3>
              <ul className="space-y-1 text-xs text-gray-600">
                {[
                  "CBCT scan (£200–£500)",
                  "Extractions (£100–£300 each)",
                  "Bone grafting (£500–£2,000 per site)",
                  "Sinus lift (£1,000–£2,500 per side)",
                  "Sedation (£300–£800)",
                  "Temporary prosthetic (£500–£1,500)",
                  "Each follow-up appointment",
                ].map((item, i) => (
                  <li key={i} className="flex gap-1.5"><span className="text-red-400">✗</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p>
            When all these UK add-ons are accounted for, the real cost of All-on-4 (both arches) in the UK frequently exceeds <strong>£40,000–£50,000</strong> for complex cases. The same treatment in Turkey remains all-in for £9,000–£14,000.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implant Brands Used in Turkey</h2>
          <p>
            The biggest misconception in dental tourism is that lower prices mean inferior implants. The implant brand is crucial — it affects long-term success rates, guarantee terms, and compatibility with future prosthodontic work. Our partner clinics use only internationally certified implant systems:
          </p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>Straumann (Switzerland)</strong> — the world&apos;s most researched and trusted implant. 10-year guarantee, global research backing.</li>
            <li><strong>Nobel Biocare (Sweden)</strong> — the brand most associated with All-on-4 development. Extensive full-arch restoration heritage.</li>
            <li><strong>Astra Tech (Dentsply)</strong> — a premium European implant known for osseospeed surface technology.</li>
            <li><strong>Osstem (South Korea)</strong> — extensively used across Europe. A cost-effective option when Straumann-level pricing is not the priority.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Many Trips to Turkey Are Needed?</h2>
          <p>
            Most full-mouth implant patients require two trips:
          </p>
          <ol className="list-decimal list-inside space-y-3 my-3">
            <li>
              <strong>First trip (5–7 days):</strong> Consultation, CBCT scan, any necessary extractions, implant placement surgery, and temporary bridge or denture to take home
            </li>
            <li>
              <strong>Second trip (3–4 days, 3–6 months later):</strong> Osseointegration has occurred; permanent zirconia bridge is fitted and adjusted
            </li>
          </ol>
          <p>
            Some cases — particularly where all teeth are already missing and bone density is favourable — may allow the permanent bridge to be delivered in a single extended trip. Your dentist will assess this after reviewing your CBCT scan.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Happens With the NHS Waiting List?</h2>
          <p>
            Full mouth implant treatment is not available on the NHS. NHS provision covers only basic extractions and basic dentures for patients with complete tooth loss. UK private quotes for All-on-4 typically come with 6–18 month waiting times at established practices. In Turkey, treatment can typically begin within 2–4 weeks of enquiry.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Monthly Payment Options</h2>
          <p>
            All-on-4 (both arches) financed over 36 months costs from approximately <strong>£250/month</strong> — making life-changing treatment genuinely accessible without a large upfront payment.
          </p>
          <Link href="/monthly-payment" className="text-[#1e40af] hover:underline font-semibold">→ View all monthly payment plans</Link>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Is Full Mouth Implant Treatment Safe in Turkey?</h2>
          <p>
            When performed at an accredited clinic by a specialist implantologist using certified implant systems, full mouth implant treatment in Turkey carries the same level of clinical risk as equivalent treatment in the UK — which is to say, very low. Our partner clinics hold JCI accreditation or equivalent Ministry of Health certification and provide full written guarantees.
          </p>
          <p>
            We only work with clinics our team has personally assessed. We do not recommend clinics based on price alone.
          </p>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Get a free full mouth implant quote</p>
            <p className="text-blue-200 mb-4">Send us your X-rays or a panoramic scan. We&apos;ll prepare a detailed All-on-4 / All-on-6 treatment plan and all-inclusive cost estimate within 24 hours.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get Free Quote</Link>
              <Link href="/treatments/all-on-4-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">All-on-4 Guide</Link>
              <Link href="/treatments/all-on-6-turkey" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">All-on-6 Guide</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/treatments/all-on-4-turkey", label: "All-on-4 Turkey", sub: "Full arch restoration" },
                { href: "/treatments/all-on-6-turkey", label: "All-on-6 Turkey", sub: "6-implant full arch" },
                { href: "/treatments/dental-implants-turkey", label: "Dental Implants Turkey", sub: "Full treatment guide" },
                { href: "/prices/dental-implants-turkey-cost", label: "Implant Costs", sub: "All implant prices" },
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
