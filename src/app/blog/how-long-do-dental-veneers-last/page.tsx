import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Do Dental Veneers Last? Turkey vs UK Comparison",
  description: "How long do veneers last? E-max, zirconia and composite lifespan compared. Does getting veneers in Turkey affect how long they last?",
};

export default function VeneersLastBlogPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Veneers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">How Long Do Dental Veneers Last? Turkey vs UK</h1>
          <p className="text-gray-500 text-sm">Published November 2024 · 4 min read</p>
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>One of the most common concerns about getting veneers in Turkey is whether they will last as long as those done in the UK. The honest answer: with the same materials and technique, they last exactly as long. Here&apos;s what you need to know.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Long Do Different Veneers Last?</h2>
          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full text-sm bg-white">
              <thead><tr className="bg-[#1e40af] text-white"><th className="px-4 py-3 text-left">Type</th><th className="px-4 py-3 text-center">Expected Lifespan</th><th className="px-4 py-3 text-left">Notes</th></tr></thead>
              <tbody>
                {[
                  { type: "E-max Porcelain", life: "10–15 years", notes: "Gold standard. Highly resistant to staining." },
                  { type: "Zirconia", life: "15–20 years", notes: "Most durable. Ideal for grinders." },
                  { type: "Composite (direct)", life: "5–7 years", notes: "More affordable but less durable." },
                ].map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.type}</td>
                    <td className="px-4 py-3 text-center font-bold text-[#1e40af]">{r.life}</td>
                    <td className="px-4 py-3 text-gray-600">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Does Location Affect Veneer Longevity?</h2>
          <p>No — the lifespan of your veneers depends on the material, the skill of the dentist, and how you care for them. When the same Ivoclar E-max material is used in Turkey as in the UK, and the bonding technique is equivalent, your veneers will last the same amount of time. The ceramic doesn&apos;t know which country it was fitted in.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Make Veneers Last Longer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Avoid biting hard foods or objects with your front teeth</li>
            <li>Wear a nightguard if you grind your teeth (bruxism)</li>
            <li>Maintain excellent oral hygiene — brush twice daily, floss daily</li>
            <li>Visit a UK dentist for annual check-ups</li>
            <li>Avoid excessive consumption of staining foods and drinks</li>
          </ul>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Get a quote for long-lasting E-max veneers in Turkey</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors mt-2">Get Free Quote</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
