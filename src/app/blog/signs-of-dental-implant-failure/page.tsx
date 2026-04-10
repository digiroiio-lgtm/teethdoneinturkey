import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/signs-of-dental-implant-failure" },
  title: "Signs of Dental Implant Failure",
  description: "How to recognise the signs of dental implant failure. A guide for UK patients who've had implants in Turkey — symptoms, causes, and what to do.",
};

export default function ImplantFailurePage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Signs of Dental Implant Failure: What to Watch For</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Dental implants have a success rate of over 95% over 10 years when placed by skilled surgeons using premium brands. However, complications can occur. Knowing the signs of implant failure — and acting quickly — makes the difference between a minor issue and a significant problem.</p>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 my-4">
            <p className="font-semibold text-amber-800">⚠️ If you&apos;re concerned about your implant</p>
            <p className="text-sm text-amber-700 mt-1">Contact your clinic immediately if you experience any of the warning signs below. Early intervention dramatically improves outcomes.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Normal Post-Surgery Symptoms (Not Failure)</h2>
          <p>First, let&apos;s be clear about what&apos;s expected and normal after implant placement:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>Swelling for 3–5 days, peaking at 48–72 hours</li>
            <li>Bruising around the site</li>
            <li>Mild to moderate pain for 3–7 days, manageable with over-the-counter medication</li>
            <li>Some bleeding from the site in the first 24 hours</li>
            <li>Sensitivity around the area</li>
          </ul>
          <p>These are signs of normal healing, not failure. Symptoms should <strong>decrease over time</strong>. Increasing symptoms after day 3–4 are the key concern.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warning Signs of Early Implant Failure (Within 3–4 Months)</h2>
          <div className="space-y-4 my-4">
            {[
              { sign: "Increasing pain after day 3–4", detail: "Pain that increases (rather than decreases) after the first 72 hours can indicate infection, improper placement, or poor osseointegration. Contact your clinic immediately." },
              { sign: "Implant movement or looseness", detail: "An implant should feel completely stable. Any noticeable movement — even slight — is a significant sign and requires urgent assessment." },
              { sign: "Persistent swelling or pus", detail: "Swelling beyond 5–7 days, especially with discharge or pus, indicates possible infection (peri-implantitis). This requires antibiotic treatment." },
              { sign: "Severe persistent pain", detail: "Pain beyond 2 weeks at a level requiring strong painkillers is not normal. A dental assessment is required urgently." },
              { sign: "Implant site feels numb (beyond 24 hours)", detail: "Some temporary numbness from local anaesthetic is expected. Persistent numbness beyond 24–48 hours can indicate nerve involvement and requires assessment." },
            ].map(item => (
              <div key={item.sign} className="bg-red-50 rounded-xl p-4 border border-red-200">
                <h3 className="font-bold text-red-700 mb-1">⚠️ {item.sign}</h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Signs of Late Implant Failure (Months to Years After Placement)</h2>
          <div className="space-y-4 my-4">
            {[
              { sign: "Implant mobility", detail: "A previously stable implant that starts to feel loose indicates failed osseointegration or peri-implantitis." },
              { sign: "Gum recession around the implant", detail: "Gum tissue pulling away from the implant post can expose the implant surface and increase failure risk." },
              { sign: "Persistent bad taste or smell", detail: "Can indicate chronic infection around the implant site." },
              { sign: "Bone loss visible on X-ray", detail: "More than 1mm of bone loss in the first year, or progressive loss thereafter, indicates implant disease." },
            ].map(item => (
              <div key={item.sign} className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <h3 className="font-bold text-amber-700 mb-1">⚠️ {item.sign}</h3>
                <p className="text-gray-700 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Causes of Implant Failure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Peri-implantitis:</strong> Infection around the implant, analogous to gum disease — the most common cause of late failure</li>
            <li><strong>Poor osseointegration:</strong> The implant fails to fuse with bone, more common in smokers, diabetics, or patients with low bone density</li>
            <li><strong>Overloading:</strong> Too much biting force on the implant before it&apos;s fully integrated</li>
            <li><strong>Smoking:</strong> Significantly increases failure risk by impairing healing</li>
            <li><strong>Poor oral hygiene:</strong> Bacteria accumulation around the implant</li>
            <li><strong>Systemic factors:</strong> Uncontrolled diabetes or autoimmune conditions</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Do If You Suspect Failure</h2>
          <p>If you have had implants in Turkey with one of our partner clinics:</p>
          <ol className="list-decimal list-inside space-y-2 my-3">
            <li>Contact your Turkish clinic immediately via WhatsApp or email with photos/description of symptoms</li>
            <li>Contact our UK patient support team who can assist with communication and advice</li>
            <li>If urgent, see a local UK dentist or dental hospital for assessment — take your treatment records with you</li>
            <li>Do not ignore symptoms hoping they resolve — early intervention saves implants</li>
          </ol>
          <p>All our partner clinics provide written guarantees (typically 10 years). Any implant failure caused by workmanship or materials is covered. A return trip to Turkey for treatment under guarantee may be required but is arranged at our clinic&apos;s expense.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Questions about your implant?</p>
            <p className="text-gray-600 text-sm mb-4">Our UK patient support team is available to help with any post-treatment queries or concerns.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Contact Support</Link>
              <Link href="/treatments/dental-implants-turkey" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Implants Turkey Guide</Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h2>
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
