import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 4-8-10 Rule for Veneers: Turkey",
  description: "What is the 4-8-10 rule for veneers? A clear explanation for UK patients considering veneers in Turkey, and how it affects your treatment plan.",
};

export default function Rule4810VeneersPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Veneers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">The 4-8-10 Rule for Veneers: What UK Patients Need to Know</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 5 min read</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>If you&apos;ve been researching veneers in Turkey, you may have come across the term &quot;4-8-10 rule.&quot; This refers to a rough guideline in cosmetic dentistry about how many veneers create different levels of smile transformation. Here&apos;s what it means and how it applies to planning your treatment in Turkey.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is the 4-8-10 Rule?</h2>
          <p>The 4-8-10 rule is an informal cosmetic dentistry guideline that describes how the number of veneers affects the visual result:</p>

          <div className="space-y-4 my-6">
            {[
              {
                number: "4 Veneers",
                title: "Subtle Front Correction",
                desc: "Covers the 4 front upper incisors only. Good for correcting specific chips, gaps, or discolouration on the most visible front teeth while keeping a natural look. Most affordable option.",
                cost: "From £760 (E-max)",
                visual: "🦷🦷🦷🦷",
              },
              {
                number: "8 Veneers",
                title: "Visible Smile Transformation",
                desc: "Covers all visible upper teeth when smiling (4 incisors + 2 canines + 2 premolars). The most common choice for patients wanting a noticeably improved smile without treating every tooth. Balanced result.",
                cost: "From £1,520 (E-max)",
                visual: "🦷🦷🦷🦷🦷🦷🦷🦷",
              },
              {
                number: "10 Veneers",
                title: "Full Upper Arch",
                desc: "Covers all 10 upper teeth. The most comprehensive upper arch treatment for a fully uniform, Hollywood-style smile. Popular for those who want complete consistency across the upper row.",
                cost: "From £1,900 (E-max)",
                visual: "🦷🦷🦷🦷🦷🦷🦷🦷🦷🦷",
              },
            ].map(item => (
              <div key={item.number} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.number}</h3>
                    <p className="text-[#1e40af] font-semibold text-sm">{item.title}</p>
                  </div>
                  <span className="text-green-600 font-bold text-sm bg-green-100 px-3 py-1 rounded-full">{item.cost}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What About More Than 10 Veneers?</h2>
          <p>The 4-8-10 rule focuses on the upper arch, but many patients also treat the lower arch for a fully matched smile. Adding veneers to the lower teeth extends the options to 16 or 20 veneers total — treating both upper and lower arches for complete aesthetic consistency.</p>
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 my-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="font-bold text-gray-900">16 Veneers</p>
                <p className="text-sm text-gray-600 mb-1">Upper + lower front teeth</p>
                <p className="text-[#1e40af] font-bold">From £3,040</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">20 Veneers</p>
                <p className="text-sm text-gray-600 mb-1">Full upper + lower treatment</p>
                <p className="text-[#1e40af] font-bold">From £3,800</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Decide How Many Veneers You Need</h2>
          <p>The right number depends on:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>Your smile line:</strong> How many teeth are visible when you smile? Your dentist will assess this specifically for you.</li>
            <li><strong>Your aesthetic goal:</strong> A subtle natural improvement or a dramatic Hollywood transformation?</li>
            <li><strong>Your budget:</strong> Fewer veneers cost less, but more veneers provide greater consistency. The Digital Smile Design preview helps you visualise each option.</li>
            <li><strong>Shade matching:</strong> If you&apos;re treating fewer teeth, shading needs to match the untreated teeth. Your dentist will advise on what looks natural.</li>
          </ul>
          <p>The best approach is to start with a Digital Smile Design consultation, where your dentist designs your ideal smile digitally and recommends the optimal treatment plan for your specific case.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Turkey vs UK: 4-8-10 Savings</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Number</th>
                  <th className="px-4 py-3 text-right">Turkey (E-max)</th>
                  <th className="px-4 py-3 text-right">UK Equivalent</th>
                  <th className="px-4 py-3 text-right">Saving</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "4 veneers", t: "£760", uk: "£3,200–£4,000", s: "~£3,000" },
                  { n: "8 veneers", t: "£1,520", uk: "£6,400–£8,000", s: "~£6,000" },
                  { n: "10 veneers", t: "£1,900", uk: "£8,000–£10,000", s: "~£7,500" },
                  { n: "20 veneers", t: "£3,800", uk: "£16,000–£20,000", s: "~£14,000" },
                ].map((r, i) => (
                  <tr key={r.n} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.n}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.t}</td>
                    <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-bold">{r.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Not sure how many veneers you need?</p>
            <p className="text-gray-600 text-sm mb-4">Book a free Digital Smile Design consultation. We&apos;ll show you exactly how different options look before any decision is made.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
