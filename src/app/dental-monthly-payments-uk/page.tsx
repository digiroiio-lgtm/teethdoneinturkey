import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/dental-monthly-payments-uk" },
  title: "Dental Monthly Payments UK: Complete Guide 2026",
  description:
    "Complete guide to dental monthly payments in the UK: pay monthly dentist options, 0% finance, eligibility, monthly examples, and application steps.",
};

const monthlyExamples = [
  { treatment: "Single dental implant", total: "£650", m12: "£54/mo", m24: "£27/mo", m36: "£18/mo" },
  { treatment: "10 veneers", total: "£1,900", m12: "£158/mo", m24: "£79/mo", m36: "£53/mo" },
  { treatment: "20 veneers", total: "£3,800", m12: "£317/mo", m24: "£158/mo", m36: "£106/mo" },
  { treatment: "All-on-4 (one arch)", total: "£4,500", m12: "£375/mo", m24: "£188/mo", m36: "£125/mo" },
  { treatment: "Full mouth implants", total: "£9,000", m12: "£750/mo", m24: "£375/mo", m36: "£250/mo" },
];

export default function DentalMonthlyPaymentsUkPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Finance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Dental Monthly Payments UK: Complete Guide 2026</h1>
          <p className="text-gray-500 text-sm">Published May 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Dental monthly payments let UK patients spread treatment costs into manageable instalments. Instead of paying in one lump sum, you can choose
            12, 24, or 36 months and get clear, fixed monthly repayments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Dental Monthly Payments?</h2>
          <p>
            Dental payment plans are finance agreements that help you access treatment now and pay monthly later. They are commonly used for cosmetic and
            restorative care, including veneers, implants, full smile makeovers, and full-mouth rehabilitation.
          </p>
          <p>
            Many patients search for <strong>pay monthly dentist</strong> options to avoid delaying treatment. A structured plan makes high-value treatment more
            affordable without compromising quality.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Can Apply?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>UK residents aged 18+</li>
            <li>Applicants with regular income (employed, self-employed, or pension)</li>
            <li>Applicants with a UK bank account and debit setup</li>
            <li>Credit profile assessed by lender criteria</li>
          </ul>
          <p>
            Approval depends on lender assessment. Pre-qualification is usually a soft check, so you can explore options before committing to a full
            application.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How 0% Dental Finance Works</h2>
          <p>
            <strong>0% dental finance</strong> means you repay only the treatment amount over the agreed term, with no added interest. These plans are usually
            available for qualifying applicants and specific term lengths.
          </p>
          <p>
            If 0% is not available, low-APR plans may still offer affordable monthly payments. Always review APR, total repayable amount, and any admin fees
            before signing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Monthly Payment Examples</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">Total</th>
                  <th className="px-4 py-3 text-right">12 months</th>
                  <th className="px-4 py-3 text-right">24 months</th>
                  <th className="px-4 py-3 text-right">36 months</th>
                </tr>
              </thead>
              <tbody>
                {monthlyExamples.map((item, i) => (
                  <tr key={item.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{item.treatment}</td>
                    <td className="px-4 py-3 text-right">{item.total}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{item.m12}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{item.m24}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{item.m36}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Representative examples. Exact terms depend on credit checks and lender offers.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Application Process</h2>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Get your treatment plan and total price</li>
            <li>Complete a 60-second pre-qualification form</li>
            <li>Compare available dental payment plans</li>
            <li>Submit full application and ID details</li>
            <li>Sign agreement and schedule treatment</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FAQs</h2>
          <div className="space-y-3">
            {[
              {
                q: "Can I get dental finance with bad credit?",
                a: "Some specialist lenders consider a wide range of profiles. Approval is never guaranteed, but pre-qualification helps you check options quickly.",
              },
              {
                q: "Is there a minimum or maximum amount?",
                a: "Most lenders set limits. Your available amount depends on provider criteria and affordability checks.",
              },
              {
                q: "Can I settle early?",
                a: "Many plans allow early settlement. Check your agreement terms for any early repayment conditions.",
              },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</p>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Check your monthly payment options</p>
            <p className="text-blue-200 mb-4">Soft credit check. Instant decision. No obligation.</p>
            <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Pre-Qualify Free
            </Link>
          </div>

          <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Finance Cluster Links:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/finance-options-uk" className="text-[#1e40af] hover:underline">→ Dental Finance UK</Link></li>
              <li><Link href="/blog/finance-dental-implants-turkey-uk-patients" className="text-[#1e40af] hover:underline">→ Dental Implants Finance</Link></li>
              <li><Link href="/blog/can-you-pay-monthly-for-veneers-turkey" className="text-[#1e40af] hover:underline">→ Veneers Finance</Link></li>
              <li><Link href="/blog/can-you-pay-monthly-for-teeth-in-turkey" className="text-[#1e40af] hover:underline">→ Turkey Teeth Finance</Link></li>
              <li><Link href="/price-calculator" className="text-[#1e40af] hover:underline">→ Dental Payment Calculator</Link></li>
              <li><Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] hover:underline">→ 0% Dental Finance UK Explained</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
