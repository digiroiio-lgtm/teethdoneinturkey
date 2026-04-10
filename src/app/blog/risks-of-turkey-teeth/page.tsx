import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/risks-of-turkey-teeth" },
  title: "Risks of Turkey Teeth – What to Know",
  description: "An honest guide to the risks of getting teeth done in Turkey. What can go wrong, how likely it is, and how to protect yourself before booking.",
};

export default function RisksTurkeyTeethPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Safety</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Risks of Turkey Teeth: What UK Patients Should Know</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>This is a guide that takes the risks of getting dental treatment in Turkey seriously — and honestly. Understanding these risks is not a reason to avoid Turkey; it is a reason to approach your treatment with proper knowledge and make decisions that protect you.</p>
          <p>The overwhelming majority of UK patients who have dental treatment at reputable Turkish clinics report excellent experiences. Problems are real but concentrated in preventable scenarios.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 1: Poor Clinic Selection</h2>
          <p><strong>Likelihood:</strong> Moderate — if you don&apos;t do due diligence<br /><strong>Severity:</strong> Can be high</p>
          <p>This is the root cause of the vast majority of negative experiences. Turkey has thousands of dental clinics, ranging from world-class JCI-accredited practices to unregistered providers with no accountability. The price range reflects this spectrum.</p>
          <p><strong>How to avoid:</strong> Never select a clinic based solely on price. Verify JCI accreditation or Ministry of Health registration. Check international patient reviews on Google and Trustpilot. Use a vetted dental tourism co-ordinator.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 2: Unnecessary Tooth Reduction</h2>
          <p><strong>Likelihood:</strong> Low at accredited clinics; higher at budget providers<br /><strong>Severity:</strong> Irreversible</p>
          <p>Some providers have been known to aggressively file down otherwise healthy teeth to &quot;pegs&quot; for veneer placement — far more preparation than is clinically necessary. This is irreversible.</p>
          <p><strong>How to avoid:</strong> Ask explicitly what preparation approach the clinic uses. Modern E-max veneers require only 0.3–0.5mm of enamel removal. Request a no-prep or minimal-prep consultation before any work begins. Obtain a Digital Smile Design preview first.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 3: Communication Barriers</h2>
          <p><strong>Likelihood:</strong> Low at internationally-focused clinics<br /><strong>Severity:</strong> Can affect treatment outcome</p>
          <p>In clinics that don&apos;t specifically cater to UK patients, language barriers can result in misunderstandings about aesthetic goals or treatment consent.</p>
          <p><strong>How to avoid:</strong> Choose a clinic with English-speaking staff and a dedicated international patient co-ordinator. All our partner clinics have English-speaking teams throughout the patient journey.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 4: Post-Treatment Complications at Home</h2>
          <p><strong>Likelihood:</strong> Low — but adds complexity vs local treatment<br /><strong>Severity:</strong> Moderate (resolved at Turkish clinic or locally)</p>
          <p>If a complication arises after returning home — sensitivity, a veneer that doesn&apos;t feel right, post-implant swelling — your treating clinic is thousands of miles away.</p>
          <p><strong>How to avoid:</strong> Choose a clinic with comprehensive remote aftercare (WhatsApp, video call). Use a dental tourism co-ordinator with UK-based support. Ensure you have written aftercare instructions, the clinic&apos;s 24-hour contact, and a local UK dentist who can assess you if needed. Most post-treatment issues are minor and resolvable remotely.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 5: Uninsured Complications</h2>
          <p><strong>Likelihood:</strong> Very low with reputable clinics<br /><strong>Severity:</strong> Can be costly without insurance</p>
          <p>Travel insurance typically covers medical emergencies abroad, but may not cover dental complications arising from elective dental treatment.</p>
          <p><strong>How to avoid:</strong> Purchase specialist dental tourism travel insurance that covers complications from elective dental procedures. Your clinic&apos;s guarantee (5–10 years) covers workmanship issues; travel insurance covers emergencies.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 6: Unrealistic Expectations</h2>
          <p><strong>Likelihood:</strong> Low with proper pre-treatment communication<br /><strong>Severity:</strong> Dissatisfaction</p>
          <p>Patients who don&apos;t communicate their aesthetic goals clearly — or don&apos;t use Digital Smile Design to agree the outcome in advance — may be disappointed even when the dentist has done technically good work.</p>
          <p><strong>How to avoid:</strong> Use Digital Smile Design or a digital wax-up before any preparation. Review your treatment plan in detail. Ask to see before-and-after photos from your specific dentist. Communicate your expectations clearly in writing.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Bottom Line on Risk</h2>
          <p>The honest reality: getting dental treatment in Turkey carries the same fundamental clinical risks as any dental treatment anywhere in the world. The additional factors are distance (complicating follow-up) and clinic selection variability (the market spans excellent to poor).</p>
          <p>Both additional risks are manageable and largely within your control. The thousands of UK patients who have excellent Turkey dental outcomes each year are those who choose wisely.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">We&apos;ve done the risk assessment for you</p>
            <p className="text-gray-600 text-sm mb-4">Every clinic we partner with has been personally visited and vetted against our strict quality criteria. We don&apos;t recommend any clinic we wouldn&apos;t send our own family to.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Book Free Consultation</Link>
              <Link href="/blog/is-it-safe-to-get-teeth-done-in-turkey" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Safety Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
