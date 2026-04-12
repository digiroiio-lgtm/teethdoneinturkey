import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/implants-cost-uk-vs-turkey" },
  title: "Dental Implants Cost: UK vs Turkey 2026",
  description: "Dental implants cost UK vs Turkey: full comparison. Single implants from £250 in Turkey vs £2,500+ in the UK. What's included, brand comparison, and tips.",
};

export default function ImplantsCostUKvsTurkeyPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Implants Cost: UK vs Turkey – 2026 Comparison</h1>
          <p className="text-gray-500 text-sm">Published April 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Dental implants in the UK are among the most expensive dental treatments available — often beyond the reach of patients on ordinary incomes. In Turkey, the exact same procedures, using the same implant brands, are available for a fraction of the cost. This guide gives UK patients a completely transparent comparison.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Single Dental Implant: UK vs Turkey</h2>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-2xl p-5 text-center border border-red-200">
              <p className="text-sm text-gray-500 mb-1">UK Private Clinic</p>
              <p className="text-3xl font-extrabold text-red-500">£2,000–£3,000</p>
              <p className="text-xs text-gray-500">per implant (inc. crown)</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-200">
              <p className="text-sm text-gray-500 mb-1">Turkey (Straumann)</p>
              <p className="text-3xl font-extrabold text-green-600">£420–£600</p>
              <p className="text-xs text-green-600 font-semibold">Save up to £2,400 per implant</p>
            </div>
          </div>

          <p>
            For a patient needing 4 implants, that saving is between £6,400 and £9,600 — easily covering multiple trips to Turkey with funds to spare. For full-arch treatments the comparison becomes even more stark.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Full Comparison Table</h2>
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
                  { t: "Single Implant (incl. crown)", uk: "£2,000–£3,000", tr: "£420–£600", s: "78–82%" },
                  { t: "Implant + Bone Graft", uk: "£3,000–£4,500", tr: "£700–£1,000", s: "77–79%" },
                  { t: "2 Implants", uk: "£4,000–£6,000", tr: "£840–£1,200", s: "78–80%" },
                  { t: "4 Implants", uk: "£8,000–£12,000", tr: "£1,680–£2,400", s: "78–80%" },
                  { t: "All-on-4 (per arch)", uk: "£12,000–£18,000", tr: "£4,000–£5,500", s: "67–72%" },
                  { t: "All-on-6 (per arch)", uk: "£15,000–£22,000", tr: "£5,000–£7,000", s: "66–71%" },
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
            Yes. The price difference does <strong>not</strong> mean inferior implants. Our partner clinics use internationally recognised premium implant systems — the same brands used in the UK&apos;s leading private practices:
          </p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>Straumann (Switzerland)</strong> — the world&apos;s most clinically researched implant brand</li>
            <li><strong>Nobel Biocare (Sweden/Switzerland)</strong> — used in complex full-arch cases worldwide</li>
            <li><strong>Astra Tech (Dentsply Sirona)</strong> — a premium Swedish implant system</li>
            <li><strong>Osstem (South Korea)</strong> — one of the world&apos;s largest manufacturers, widely used in Europe</li>
          </ul>
          <p>
            The cost difference reflects Turkey&apos;s lower cost of living, lower overheads for clinics, and a government policy of supporting medical tourism — not any reduction in material quality or clinical skill.
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
            A single tooth replacement in the UK can therefore cost <strong>£3,000–£5,000</strong> once all items are included. In Turkey, the same treatment — including scan, surgery, and the final crown — is <strong>£420–£700 all-in</strong>.
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
            A single dental implant financed over 36 months costs from <strong>£14/month</strong>. An All-on-4 (both arches) financed over 36 months costs from <strong>£250/month</strong> — still significantly less than the monthly cost of NHS or UK private finance for equivalent treatment.
          </p>
          <Link href="/monthly-payment" className="text-[#1e40af] hover:underline font-semibold">→ Explore monthly payment options</Link>

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
                { href: "/treatments/dental-implants-turkey", label: "Dental Implants Turkey", sub: "Full treatment guide" },
                { href: "/treatments/all-on-4-turkey", label: "All-on-4 Turkey", sub: "Full arch restoration" },
                { href: "/treatments/all-on-6-turkey", label: "All-on-6 Turkey", sub: "6-implant full arch" },
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
