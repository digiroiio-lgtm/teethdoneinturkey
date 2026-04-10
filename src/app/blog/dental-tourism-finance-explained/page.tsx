import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/dental-tourism-finance-explained" },
  title: "Dental Tourism Finance Explained – UK",
  description: "How dental tourism finance works for UK patients. A complete explanation of how to fund dental treatment abroad, from monthly payment plans to medical loans.",
};

export default function DentalTourismFinancePage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Tourism Finance Explained: A UK Patient Guide</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>Dental tourism offers remarkable savings — but even the reduced costs of treatment in Turkey can represent a significant sum for many UK patients. Dental tourism finance bridges this gap, making premium dental treatment genuinely accessible through manageable monthly payments.</p>
          <p>This guide explains the different finance options available, how each works, and which might be right for your situation.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 1: Dental Tourism Finance Plans (Our Recommended Route)</h2>
          <p>Specialist dental tourism finance plans are designed specifically for patients funding treatment abroad. These are UK-based credit products arranged through FCA-regulated lenders.</p>
          <p><strong>How it works:</strong> You apply for a personal loan or credit facility in the UK, denominated in GBP. The funds are used to cover your treatment in Turkey. You repay monthly from your UK bank account.</p>
          <div className="bg-green-50 rounded-2xl p-4 border border-green-200 my-4">
            <h3 className="font-bold text-green-800 mb-2">✓ Advantages</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>→ 0% interest options available for qualifying applicants</li>
              <li>→ Soft credit check pre-qualification (no impact on score)</li>
              <li>→ Apply in 60 seconds with instant decision</li>
              <li>→ All repayments in GBP — no currency risk</li>
              <li>→ FCA-regulated process</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 2: Personal Loan</h2>
          <p>A standard personal loan from a UK bank or online lender can be used to fund any purpose, including dental treatment abroad. Rates vary significantly based on your credit profile and the lender.</p>
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 my-4">
            <h3 className="font-bold text-gray-900 mb-2">Key facts</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>→ Loan amounts typically £1,000–£25,000</li>
              <li>→ Terms of 12–60 months</li>
              <li>→ Rates from ~6% APR for good credit, higher for lower scores</li>
              <li>→ Fixed monthly payments throughout the term</li>
              <li>→ Hard credit check required for full application</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 3: Medical Credit Cards</h2>
          <p>Some patients use 0% purchase credit cards to spread the cost of dental treatment. If you can repay within the 0% promotional period (typically 12–24 months), this can be a cost-effective option.</p>
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 my-4">
            <h3 className="font-bold text-gray-900 mb-2">Key facts</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>→ 0% on purchases for 12–24 months on leading cards</li>
              <li>→ Must repay before promotional period ends to avoid high standard rate</li>
              <li>→ Credit limit determines maximum treatment cost coverable</li>
              <li>→ Widely available to those with good credit</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Option 4: Saving Up</h2>
          <p>For patients with time flexibility, saving for treatment is the lowest-cost option as it avoids interest entirely. Given the dramatically lower costs in Turkey compared to the UK, saving for Turkish dental treatment is often far more achievable than for UK private treatment on the same timeline.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Comparing Finance Options</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Option</th>
                  <th className="px-4 py-3 text-center">Speed</th>
                  <th className="px-4 py-3 text-center">0% Available</th>
                  <th className="px-4 py-3 text-center">Bad Credit</th>
                  <th className="px-4 py-3 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { opt: "Dental Finance Plan", speed: "Instant", zero: "✓", bad: "✓", best: "Most patients" },
                  { opt: "Personal Loan", speed: "1–3 days", zero: "✗", bad: "Limited", best: "Good credit / larger amounts" },
                  { opt: "0% Credit Card", speed: "1–2 days", zero: "✓", bad: "✗", best: "Good credit, repaying quickly" },
                  { opt: "Savings", speed: "Months", zero: "N/A", bad: "✓", best: "No urgency, avoid interest" },
                ].map((r, i) => (
                  <tr key={r.opt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{r.opt}</td>
                    <td className="px-4 py-3 text-center">{r.speed}</td>
                    <td className="px-4 py-3 text-center">{r.zero}</td>
                    <td className="px-4 py-3 text-center">{r.bad}</td>
                    <td className="px-4 py-3 text-center text-xs">{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Important Considerations</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Always borrow responsibly</strong> — ensure monthly repayments are comfortable within your budget before committing</li>
            <li><strong>Read the credit agreement</strong> — understand APR, total cost of credit, and early repayment terms before signing</li>
            <li><strong>Your home is not at risk</strong> — dental finance plans are unsecured personal credit, not secured against your property</li>
            <li><strong>Finance does not affect your Turkey treatment</strong> — your clinic in Turkey is paid normally; finance is a UK-side arrangement</li>
          </ul>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Check your finance options for free</p>
            <p className="text-blue-200 mb-4">Pre-qualify in 60 seconds. No impact on your credit score. See what&apos;s available for your situation today.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Pre-Qualify Now</Link>
              <Link href="/monthly-payment" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Monthly Payment Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
