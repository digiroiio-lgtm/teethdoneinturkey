import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Dentist vs Turkey Dentist: Key Differences for UK Patients",
  description: "An honest comparison of UK dentists vs Turkish dentists. Training, materials, technology, costs, and what the differences actually mean for your treatment outcome.",
};

export default function UKvsTurkeyDentistPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Comparison</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">UK Dentist vs Turkey Dentist: Key Differences Explained</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Before booking dental treatment in Turkey, many UK patients want to understand exactly how Turkish dentists compare to UK dentists. Are the qualifications equivalent? Is the technology the same? And what are the real trade-offs?</p>
          <p>Here&apos;s an honest, evidence-based comparison across the factors that matter most.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Training & Qualifications</h2>
          <p>Turkish dentists complete a 5-year undergraduate dental degree at Turkish universities, which are regulated by the Higher Education Council of Turkey. The curriculum is broadly equivalent in scope to UK dental training — covering the same disciplines: oral surgery, prosthodontics, periodontology, and endodontics.</p>
          <p>Many leading Turkish aesthetic dentists have also completed postgraduate training or fellowships in Germany, Italy, the USA, or the UK. It is not uncommon to find dentists at top Istanbul clinics who hold European or American specialist certifications in implantology or cosmetic dentistry — and who see far more aesthetic cases per year than the average UK cosmetic dentist.</p>
          <p><strong>Verdict:</strong> Training is broadly equivalent; many top Turkish aesthetic specialists are more experienced in high-volume cosmetic procedures than their UK counterparts.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Regulatory Framework</h2>
          <p>In the UK, dentists must be registered with the General Dental Council (GDC) and practices registered with the Care Quality Commission (CQC). In Turkey, dentists are regulated by the Turkish Dentists Union and practices by the Turkish Ministry of Health. For internationally-facing clinics, JCI (Joint Commission International) accreditation provides an additional layer of quality assurance recognised globally.</p>
          <p><strong>Verdict:</strong> Different regulators, but top Turkish clinics with JCI accreditation meet internationally recognised standards. Always verify accreditation before booking.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Materials & Technology</h2>
          <p>This is where the comparison is most directly relevant to treatment outcomes. The top Turkish dental clinics use:</p>
          <ul className="list-disc list-inside space-y-1 my-3">
            <li><strong>Ivoclar E-max ceramic</strong> — same brand as UK practices for veneers and crowns</li>
            <li><strong>Straumann, Nobel Biocare, Astra Tech</strong> — same implant brands as premium UK clinics</li>
            <li><strong>3Shape digital impression systems</strong> — used in UK and globally</li>
            <li><strong>CBCT 3D cone beam scanners</strong> — standard for implant planning</li>
            <li><strong>CAD/CAM in-house milling</strong> — often faster turnaround than UK labs</li>
          </ul>
          <p><strong>Verdict:</strong> The materials are the same. Technology is equivalent or in many cases superior due to newer clinic investments.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cost</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm mb-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">UK Dentist</th>
                  <th className="px-4 py-3 text-right">Turkey Dentist</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "Single E-max Veneer", uk: "£800–£1,000", turkey: "£190–£220" },
                  { t: "Single Implant (incl. crown)", uk: "£2,000–£2,800", turkey: "£450–£650" },
                  { t: "All-on-4 Full Arch", uk: "£12,000–£18,000", turkey: "£4,500–£6,500" },
                  { t: "Composite Bonding", uk: "£200–£500/tooth", turkey: "£80–£150/tooth" },
                ].map((r, i) => (
                  <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.t}</td>
                    <td className="px-4 py-3 text-right text-red-500">{r.uk}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-bold">{r.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><strong>Verdict:</strong> Turkey is 70–80% cheaper for the same materials and equivalent skill. The difference is overheads and cost of living, not quality.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Communication & Patient Care</h2>
          <p>A common concern is language. In reality, the top Turkish dental clinics that cater to international patients employ English-speaking staff at every level — from the patient co-ordinator who handles your initial enquiry through to the dentist and treatment team. Many dentists at international-facing clinics speak excellent English.</p>
          <p>Patient experience in Turkish clinics is often remarked upon by UK patients as being warm, attentive, and more personalised than NHS or even private UK dental experiences. The emphasis on international patient care — from airport transfers to hotel partnerships — is a significant part of the offer.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Aftercare</h2>
          <p>The main practical difference is proximity. If you have a question or minor issue after returning to the UK, you can&apos;t pop back to your Turkish clinic the same day. However, our partner clinics offer WhatsApp and video consultation follow-up, and we provide UK-based patient co-ordination throughout your recovery.</p>
          <p>Written guarantees (5–10 years) mean that any significant issue would be covered — and while a return trip for a minor adjustment is rare, it remains a fraction of the overall cost savings.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Bottom Line</h2>
          <p>For routine cosmetic dental treatment — veneers, implants, smile makeovers — the difference between a top Turkish dentist and a top UK dentist is primarily cost. The materials, technology, and skills are comparable. The aftercare proximity is the main trade-off, which is mitigated through good clinic selection and UK-based support.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Compare your treatment options</p>
            <p className="text-gray-600 text-sm mb-4">Get a free personalised treatment plan comparing your options — no obligation to proceed.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Book Free Consultation</Link>
              <Link href="/teeth-done-in-turkey-guide" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Read Full Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
