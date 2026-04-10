import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Are Turkey Veneers Worth It? UK Guide",
  description: "Are Turkey veneers worth it for UK patients? An honest assessment of the quality, savings, risks, and overall value. Real patient experiences included.",
};

export default function AreVeneersWorthItPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Veneers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Are Veneers in Turkey Worth It? An Honest UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>It&apos;s the question at the heart of the dental tourism decision: <strong>is it actually worth it?</strong> The savings are clearly real — but what about the quality, the risks, and the overall experience? This guide gives you an honest answer based on thousands of UK patient experiences.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Financial Case</h2>
          <p>The numbers are compelling and unambiguous. E-max veneers in Turkey cost from £190 per tooth; the same material from a comparable UK clinic costs £800–£1,000. A full set of 20 veneers therefore costs approximately £3,800 in Turkey versus £18,000 in the UK — a saving of £14,200.</p>
          <p>Even after adding a week&apos;s travel and accommodation (typically £600–£1,000 all-in), you&apos;re looking at a total all-in cost of around £4,400–£4,800 versus £18,000. For most people, that saving is genuinely life-changing.</p>
          <p>Put differently: if you have 20 veneers done in Turkey, you save enough to buy a car, go on several holidays, or put a deposit on an investment property.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Quality Question</h2>
          <p>This is where many UK patients have doubts, and it&apos;s a fair concern. The honest answer is: <strong>the quality from a top Turkish clinic is genuinely equivalent to a top UK clinic</strong>.</p>
          <p>The evidence for this:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li>The same Ivoclar E-max material is used in both countries</li>
            <li>Turkish ceramist technicians are often highly specialised — many have years of experience with high-volume aesthetic work</li>
            <li>Digital Smile Design technology eliminates aesthetic guesswork</li>
            <li>JCI-accredited clinics follow the same sterilisation and procedural standards as NHS-approved UK facilities</li>
            <li>UK dentists, when examining Turkey veneer work by top clinics, consistently rate it as high quality</li>
          </ul>
          <p>The caveat is clinic selection. Not every clinic in Turkey is equal — just as not every UK dentist delivers the same standard of cosmetic work. The difference is choosing correctly, which is why using a reputable co-ordinator who has vetted clinics personally matters.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What UK Patients Actually Say</h2>
          <div className="space-y-4 my-4">
            {[
              { name: "Sarah M., Manchester", text: "I was nervous for months. My 20 E-max veneers cost £3,800 all in vs £18,000 quoted in Manchester. The clinic was more modern than any UK practice I'd been to. Six months later I still can't believe how natural they look." },
              { name: "James T., London", text: "My London dentist quoted £14,000 for 16 veneers. Did it in Istanbul for £3,100. The Digital Smile Design preview was reassuring — I knew exactly what I was getting. Zero issues." },
              { name: "Claire B., Birmingham", text: "I went three years ago and would do it again without hesitation. My veneers still look perfect. I've had them checked by a UK dentist who said the fit and finish was excellent." },
            ].map(r => (
              <div key={r.name} className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-sm text-gray-700 italic mb-2">&quot;{r.text}&quot;</p>
                <p className="text-xs text-gray-500 font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Trade-Offs to Consider</h2>
          <p>Being honest means acknowledging the genuine trade-offs:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>Proximity:</strong> Your dentist is not local. Minor follow-up questions are handled remotely. A return trip, while covered under your guarantee if needed, requires travelling again.</li>
            <li><strong>Time investment:</strong> You&apos;ll spend 5–7 days in Turkey. This means annual leave and travel effort.</li>
            <li><strong>Research needed:</strong> You must choose your clinic carefully. Poor clinic selection is the root of almost every negative Turkey dental story.</li>
          </ul>
          <p>For the vast majority of patients, these trade-offs are modest compared to the savings. The 5–7 days in Turkey is often enjoyed as a city break in Istanbul or beach holiday in Antalya — and the savings more than justify the effort.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Verdict: Is It Worth It?</h2>
          <p>For UK patients who choose a reputable, accredited clinic with verified reviews and brand-name materials, <strong>veneers in Turkey represent exceptional value</strong>. The quality is genuinely comparable to top UK private dentists; the savings are substantial; and the experience — for patients who choose wisely — is overwhelmingly positive.</p>
          <p>The answer is yes — with the important caveat that &quot;doing it properly&quot; means choosing your clinic based on quality, not just price.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">See if Turkey is right for you</p>
            <p className="text-gray-600 text-sm mb-4">Get a free personalised quote and treatment plan. We only work with clinics we trust personally.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Book Free Consultation</Link>
              <Link href="/treatments/veneers-turkey" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Veneers Turkey Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
