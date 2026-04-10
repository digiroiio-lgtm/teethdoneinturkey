import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aftercare for Dental Work in Turkey",
  description: "How to look after your dental work after returning from Turkey. Complete aftercare guide for veneers and implants, including what to expect and when to seek help.",
};

export default function AftercarePage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Aftercare</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Aftercare for Dental Work in Turkey: Complete UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 8 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Good aftercare is essential for the longevity of any dental work — and particularly when your treating clinic is abroad. This guide covers aftercare for the two most popular treatments for UK patients in Turkey: veneers and dental implants.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Veneer Aftercare</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Immediately After Fitting (Days 1–7)</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Expect some sensitivity — normal for 1–4 weeks as teeth adjust</li>
            <li>Avoid very hot or very cold foods and drinks for the first week</li>
            <li>Avoid biting hard foods with front teeth — cut food into pieces</li>
            <li>If local anaesthetic was used, wait until it wears off before eating</li>
            <li>Mild pain or discomfort is normal — take over-the-counter painkillers if needed</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Short-Term Care (Weeks 2–4)</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Resume normal eating gradually as sensitivity reduces</li>
            <li>Brush gently with a soft toothbrush twice daily</li>
            <li>Use non-abrasive toothpaste (avoid whitening pastes with large abrasive particles)</li>
            <li>Floss gently, sliding floss up and down alongside the veneer margin</li>
            <li>Avoid habits that could dislodge veneers: biting nails, chewing pens, opening packages with teeth</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Long-Term Veneer Maintenance</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Book a dental check-up with your UK dentist within 6–8 weeks of returning</li>
            <li>Continue regular 6-monthly check-ups and hygienist appointments</li>
            <li>Avoid very staining foods/drinks in excess (coffee, red wine, cola) — E-max is stain-resistant but gum margins can stain</li>
            <li>Wear a night guard if you grind your teeth — essential for veneer longevity</li>
            <li>E-max veneers: do not use abrasive polishing pastes at the hygienist — notify them you have porcelain veneers</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dental Implant Aftercare</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Surgery Day and Week 1</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Apply ice packs (wrapped in cloth) for 10 minutes on, 10 off during the first 24 hours</li>
            <li>Bite gently on gauze pads if bleeding — change every 30–45 minutes until bleeding stops</li>
            <li>Take prescribed antibiotics for the full course — do not skip doses</li>
            <li>Take prescribed anti-inflammatories as directed</li>
            <li>Eat soft foods only: soup, yoghurt, mashed potato, scrambled eggs</li>
            <li>Keep your head elevated when sleeping for the first 2–3 nights</li>
            <li>Avoid smoking — it significantly increases implant failure risk</li>
            <li>Avoid strenuous exercise for 48–72 hours</li>
            <li>Do not rinse vigorously for 24 hours — light saltwater rinses after 24 hours are fine</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Weeks 2–12: Osseointegration Phase</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Resume normal diet gradually from week 2, avoiding very hard foods near the implant</li>
            <li>Brush the implant site gently with a soft brush</li>
            <li>Use interdental brushes or water flossers around the implant</li>
            <li>Maintain all other oral hygiene habits — healthy gums are essential for implant success</li>
            <li>Attend any follow-up appointments — remotely via photos/X-rays if local assessment confirms progress</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Long-Term Implant Care</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Treat your implant like a natural tooth — brush twice daily, floss daily</li>
            <li>Regular professional hygienist appointments are essential — peri-implantitis is prevented by good oral hygiene</li>
            <li>Annual dental check-ups should include implant assessment</li>
            <li>6-monthly X-rays in the first 2 years to monitor bone levels</li>
            <li>Contact your Turkish clinic immediately if you notice any looseness, pain, or swelling</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warning Signs That Require Attention</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <h3 className="font-bold text-red-700 mb-2">⚠️ Contact your clinic if:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Pain increasing after day 3</li>
                <li>→ Swelling increasing after day 3</li>
                <li>→ Persistent pus or discharge</li>
                <li>→ Implant feels loose</li>
                <li>→ Veneer chips or feels different</li>
                <li>→ Severe sensitivity that doesn&apos;t resolve</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-bold text-green-700 mb-2">✓ Normal to experience:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Some sensitivity (veneers)</li>
                <li>→ Swelling days 1–5 (implants)</li>
                <li>→ Mild discomfort week 1</li>
                <li>→ Minor bleeding day 1</li>
                <li>→ Temporary speech adjustment</li>
                <li>→ Bite feeling slightly different initially</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our UK Aftercare Support</h2>
          <p>All patients who book through us receive ongoing UK-based aftercare support. Our team is available via WhatsApp and email to address any questions or concerns after your return. We liaise with your Turkish clinic on your behalf where needed, and can advise whether a local UK assessment is appropriate.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Book through us for full UK aftercare support</p>
            <p className="text-gray-600 text-sm mb-4">We don&apos;t just book your treatment — we support you throughout your recovery journey.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
