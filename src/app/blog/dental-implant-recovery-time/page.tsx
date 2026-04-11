import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/dental-implant-recovery-time" },
  title: "Implant Recovery Time in Turkey",
  description: "How long does dental implant recovery take? A complete timeline for UK patients having implants in Turkey — from surgery day through to final crown fitting.",
};

export default function ImplantRecoveryPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Implant Recovery Time: A Complete Timeline for UK Patients</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>One of the most common questions from UK patients planning dental implants in Turkey is: <strong>how long will recovery take?</strong> The full answer involves two phases — post-surgical recovery and osseointegration — and understanding both helps you plan your treatment and travel effectively.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phase 1: Immediate Post-Surgery (Days 1–7)</h2>
          <p>The first week after implant placement is the most active recovery period. Here&apos;s what to expect:</p>
          <div className="space-y-3 my-4">
            {[
              { day: "Day 1", title: "Surgery Day", desc: "The implant procedure itself is performed under local anaesthetic and typically takes 30–90 minutes per implant. Mild sedation is available for anxious patients. You&apos;ll feel numb for several hours after; take prescribed painkillers before this wears off." },
              { day: "Days 1–3", title: "Swelling & Discomfort", desc: "Some swelling of the gum and face is normal, particularly peaking at 48–72 hours. Prescribed antibiotics and anti-inflammatories manage this effectively. Ice packs (wrapped in a cloth) help with swelling in the first 24 hours." },
              { day: "Days 2–4", title: "Soft Food Only", desc: "Stick to soft foods: soup, yoghurt, mashed potato, scrambled eggs. No hard, crunchy, or sticky foods. Avoid the surgical site when chewing." },
              { day: "Days 3–7", title: "Improving Comfort", desc: "By day 3–4, most patients feel significantly more comfortable. Swelling reduces substantially. Many UK patients who travel to Turkey continue sightseeing or relaxing during this period." },
              { day: "Day 7", title: "Post-Op Check", desc: "A follow-up appointment confirms healing is progressing correctly. Sutures may be removed at this point (or may be dissolvable). Most patients are comfortable to fly home after day 5–7." },
            ].map(item => (
              <div key={item.day} className="flex gap-4">
                <div className="bg-[#1e40af] text-white rounded-lg px-3 py-1 h-fit text-xs font-bold flex-shrink-0 mt-1">{item.day}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phase 2: Osseointegration (Months 1–6)</h2>
          <p>Osseointegration — the process by which your jawbone fuses with the titanium implant — occurs gradually over 3–6 months. During this period:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>You&apos;ll have a temporary crown or healing cap in place — you can eat normally within reasonable limits</li>
            <li>The site continues to heal internally with no external signs</li>
            <li>Most patients have no discomfort during this period</li>
            <li>You return for a check-up (often remotely via photos/X-rays, or with a local UK dentist)</li>
            <li>At 3–6 months, a follow-up CBCT scan confirms osseointegration is complete</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phase 3: Final Restoration (Second Trip to Turkey)</h2>
          <p>Once osseointegration is confirmed, you return to Turkey for your second trip — typically 3–4 days. This visit covers:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>Removal of the temporary crown/cap</li>
            <li>Fitting of the abutment (connector piece)</li>
            <li>Digital impression for the final crown</li>
            <li>Final crown placement and bite adjustment</li>
          </ul>
          <p>The permanent crown is typically a zirconia or porcelain-fused crown designed to match your natural teeth precisely.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Recovery Timeline Summary</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Timeline</th>
                  <th className="px-4 py-3 text-left">Milestone</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "Day 0", m: "Implant placement surgery" },
                  { t: "Days 1–3", m: "Peak swelling; soft food diet" },
                  { t: "Days 3–7", m: "Significant improvement; most patients resume light activities" },
                  { t: "Day 5–7", m: "Post-op check; suitable to fly home" },
                  { t: "Week 2", m: "Sutures dissolved; eating mostly normally" },
                  { t: "Month 1–3", m: "Osseointegration progressing; no visible healing" },
                  { t: "Month 3–6", m: "CBCT scan confirms osseointegration" },
                  { t: "Month 4–7", m: "Second trip to Turkey; final crown fitted" },
                  { t: "Ongoing", m: "Implant maintained like natural tooth" },
                ].map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-[#1e40af]">{r.t}</td>
                    <td className="px-4 py-3">{r.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips for a Smooth Recovery</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Follow all aftercare instructions provided by your Turkish clinic</li>
            <li>Take prescribed antibiotics for the full course</li>
            <li>Avoid smoking — it significantly increases the risk of implant failure</li>
            <li>Maintain excellent oral hygiene around the site</li>
            <li>Avoid strenuous exercise for the first 48–72 hours</li>
            <li>Contact the clinic immediately if you experience increasing (not decreasing) pain after day 3</li>
          </ul>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Plan your treatment around your lifestyle</p>
            <p className="text-gray-600 text-sm mb-4">Our team will help you schedule your Turkey trip at a time that works with your commitments. Book a free consultation to plan your timeline.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Book Free Consultation</Link>
              <Link href="/treatments/dental-implants-turkey" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Implants Turkey Guide</Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Dental Implants Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full treatment guide</span>
            </Link>
            <Link href="/treatments/all-on-4-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All-on-4 Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full arch restoration</span>
            </Link>
            <Link href="/treatments/all-on-6-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All-on-6 Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">6-implant full arch</span>
            </Link>
            <Link href="/prices/dental-implants-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Implant Costs</span>
              <span className="text-xs text-gray-500 mt-0.5">All implant prices</span>
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
