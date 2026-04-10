import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Risks of Veneers in Turkey: What UK Patients Should Know",
  description: "The honest truth about the risks of getting veneers in Turkey. What can go wrong, how to reduce risk, and what to do if there's a problem after you return home.",
};

export default function RisksVeneersPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Safety</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Risks of Veneers in Turkey: What UK Patients Should Know</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Getting veneers in Turkey can be an excellent decision — but going in with clear, honest information about potential risks is important. This guide covers the real risks, their likelihood, and how to minimise them.</p>
          <p>We should be clear upfront: the vast majority of patients who have veneers done at reputable Turkish clinics report excellent outcomes. The risks discussed here are real but largely avoidable with good clinic selection.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 1: Poor Aesthetic Outcome</h2>
          <p><strong>What can happen:</strong> Veneers that look too white, too opaque, misshapen, or inconsistent with your natural smile.</p>
          <p><strong>How common:</strong> Rare at accredited clinics with Digital Smile Design technology. More common at budget providers without a preview process.</p>
          <p><strong>How to avoid:</strong> Always request Digital Smile Design or a digital mock-up before any teeth are prepared. Confirm you have seen and approved the aesthetic before work begins. View before-and-after photos from the specific dentist who will treat you.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 2: Excessive Tooth Preparation</h2>
          <p><strong>What can happen:</strong> Unnecessary filing down of healthy tooth enamel, sometimes called &quot;drilling down to pegs&quot; — a concern associated with some lower-quality providers.</p>
          <p><strong>How common:</strong> This became associated with Turkey after widely reported cases in 2021–2022, mostly involving the cheapest providers. It is not the standard at accredited clinics.</p>
          <p><strong>How to avoid:</strong> Ask explicitly about tooth preparation: modern E-max veneers require only 0.3–0.5mm removal. Ask your dentist what their preparation approach is and whether no-prep or minimal-prep options are available for your specific case.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 3: Veneer Failure or Debonding</h2>
          <p><strong>What can happen:</strong> A veneer chips, cracks, or comes away from the tooth — typically years after placement if it occurs at all.</p>
          <p><strong>How common:</strong> E-max veneers have a clinical success rate of 95%+ over 10 years when properly placed. Failure is relatively rare but can occur with any veneer, in any country.</p>
          <p><strong>How to avoid:</strong> Ensure your clinic provides a written guarantee (reputable Turkish clinics offer 5–10 years). Avoid chewing hard foods or using teeth as tools. A night guard is recommended if you grind your teeth.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 4: Post-Treatment Sensitivity</h2>
          <p><strong>What can happen:</strong> Tooth sensitivity to hot, cold, or sweet foods for days or weeks after the procedure. This is normal and usually resolves within 2–4 weeks.</p>
          <p><strong>How common:</strong> Very common — experienced by the majority of patients to some degree immediately after veneer placement.</p>
          <p><strong>How to avoid:</strong> Use sensitivity toothpaste in the weeks before and after treatment. Avoid very hot or cold foods for the first week. Your clinic will provide specific aftercare guidance.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 5: Complications After Returning Home</h2>
          <p><strong>What can happen:</strong> You experience an issue after flying home and your dentist is in Turkey.</p>
          <p><strong>How common:</strong> Significant issues requiring in-person attention are rare. Most post-procedure questions can be resolved remotely.</p>
          <p><strong>How to avoid:</strong> Choose a clinic that offers post-treatment remote support (WhatsApp, video call). Use a dental tourism co-ordinator with UK-based aftercare support. Know that any issue covered under your guarantee may require a return trip, which remains a fraction of overall savings.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk 6: Choosing the Wrong Clinic</h2>
          <p><strong>What can happen:</strong> You select a clinic based purely on price without checking credentials, leading to any of the above risks at higher probability.</p>
          <p><strong>How common:</strong> The root cause of the majority of negative Turkey dental experiences.</p>
          <p><strong>How to avoid:</strong> This is the single most important risk-reduction measure. Check for JCI accreditation or Ministry of Health certification. Read verified international reviews. Confirm the brand of materials used. Use a reputable dental tourism co-ordinator who has vetted clinics personally.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Bottom Line on Risk</h2>
          <p>Every dental procedure carries some risk — in any country. The specific risks of veneers in Turkey are largely the same as veneers anywhere: aesthetic, sensitivity, and rare structural issues. The added factor is distance, which is mitigated through good communication, remote support, and written guarantees.</p>
          <p>The risk of a bad outcome is dramatically reduced — virtually to nil — when you choose an accredited clinic with a track record of international patient care. The risks are primarily concentrated in the budget end of the market.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">We only work with clinics we trust</p>
            <p className="text-gray-600 text-sm mb-4">Every clinic we recommend has been personally visited and vetted. We provide UK aftercare support throughout your treatment journey.</p>
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
