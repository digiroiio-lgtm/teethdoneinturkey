import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Same Day Dental Implants Turkey: What UK Patients Need to Know",
  description: "Everything UK patients need to know about same day dental implants in Turkey. How they work, who is suitable, costs, and what to expect.",
};

export default function SameDayImplantsPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Same Day Dental Implants in Turkey: A UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 6 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>The idea of walking into a clinic with missing or failing teeth and leaving the same day with a complete smile is compelling. Same day dental implants — also known as immediate loading or teeth-in-a-day — are a genuine treatment option available at leading Turkish dental clinics. Here&apos;s everything UK patients need to know.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Same Day Dental Implants?</h2>
          <p>&quot;Same day implants&quot; refers to a protocol where a temporary restoration is placed on the implant immediately or within 24–72 hours of implant surgery — rather than waiting 3–6 months for osseointegration before loading. This means you leave Turkey with functional, aesthetically pleasing teeth, even while the implants are still integrating with your bone.</p>
          <p>It&apos;s important to note that &quot;same day&quot; typically refers to the temporary restoration, not the final permanent one. The permanent crown, bridge, or prosthesis is usually fitted on a second trip once osseointegration is confirmed.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Does It Work?</h2>
          <ol className="space-y-4 my-4">
            {[
              { title: "CBCT Scan & Planning", desc: "A 3D cone beam CT scan is used to precisely plan implant positions, ensuring the implants are placed in the optimal position for immediate loading." },
              { title: "Implant Placement", desc: "Titanium implants are surgically placed under local anaesthetic. The procedure is minimally invasive and typically takes 1–3 hours for multiple implants." },
              { title: "Immediate Temporary Restoration", desc: "A temporary crown, bridge, or full arch prosthesis is attached to the implants — often on the same day or within 24–72 hours. This is a fully functional restoration, though slightly softer foods are recommended initially." },
              { title: "Healing Period", desc: "Over 3–6 months, osseointegration occurs — the bone fuses with the titanium implant, creating a permanent anchor." },
              { title: "Final Restoration (Second Trip)", desc: "You return to Turkey for your permanent, custom-crafted crown or bridge. This is the definitive, long-term restoration." },
            ].map((step, i) => (
              <li key={i} className="flex gap-4 list-none">
                <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Is Suitable for Same Day Implants?</h2>
          <p>Not every patient is suitable for immediate loading. The key factors are:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-bold text-green-700 mb-2">✓ Good candidates</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Adequate bone density and volume</li>
                <li>→ Good overall oral health</li>
                <li>→ Non-smokers or light smokers</li>
                <li>→ No uncontrolled systemic conditions</li>
                <li>→ Implant achieves high primary stability</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <h3 className="font-bold text-red-700 mb-2">✗ May not be suitable</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Significant bone loss (may need grafting first)</li>
                <li>→ Heavy smokers</li>
                <li>→ Uncontrolled diabetes</li>
                <li>→ Active infection in the area</li>
                <li>→ Insufficient primary stability at placement</li>
              </ul>
            </div>
          </div>
          <p>A CBCT scan during your initial consultation determines your suitability. Your Turkish dentist will be very clear about whether immediate loading is appropriate in your case.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Same Day Implants vs All-on-4</h2>
          <p>The All-on-4 protocol (4 implants supporting a full arch, often with immediate loading) is the most common &quot;same day&quot; treatment for patients needing full arch restoration. Walk in on day 1 with failing teeth; walk out within days with a full, confident smile — while the implants integrate over the following months.</p>
          <div className="flex flex-wrap gap-3 my-4">
            <Link href="/treatments/all-on-4-turkey" className="bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">All-on-4 Turkey Guide</Link>
            <Link href="/treatments/all-on-6-turkey" className="border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">All-on-6 Turkey Guide</Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Same Day Implant Costs in Turkey</h2>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 my-4">
            <div className="space-y-2 text-sm">
              {[
                { item: "Single tooth same day implant (incl. temporary)", cost: "From £600" },
                { item: "All-on-4 (immediate loading, full arch)", cost: "From £4,500" },
                { item: "All-on-6 (immediate loading, full arch)", cost: "From £5,500" },
                { item: "Final crown/bridge fitting (second trip)", cost: "Included in package" },
              ].map(row => (
                <div key={row.item} className="flex justify-between">
                  <span className="text-gray-700">{row.item}</span>
                  <span className="font-bold text-[#1e40af]">{row.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Find out if you&apos;re suitable</p>
            <p className="text-gray-600 text-sm mb-4">Share your X-rays with us for a free assessment. We&apos;ll confirm suitability and provide a full treatment plan within 24 hours.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Assessment</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
