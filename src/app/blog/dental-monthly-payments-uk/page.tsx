import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const revalidate = 86400;

const canonicalPath = "/blog/dental-monthly-payments-uk";

export const metadata: Metadata = {
  alternates: { canonical: canonicalPath },
  title: "Dental Monthly Payments UK: Complete Guide for 2026",
  description:
    "Your complete 2026 guide to dental monthly payments UK options, including dental finance UK plans, eligibility, examples, and how UK patients fund treatment in Turkey.",
  openGraph: {
    title: "Dental Monthly Payments UK: Complete Guide for 2026",
    description:
      "Learn how dental monthly payments UK plans work, compare payment examples, and choose the right dental treatment finance UK option in 2026.",
    url: canonicalPath,
    type: "article",
    siteName: "Teeth Done in Turkey",
  },
};

const paymentScenarios = [
  {
    treatment: "20 porcelain veneers",
    turkeyCost: "£3,800",
    twelve: "£317/month",
    twentyFour: "£158/month",
    thirtySix: "£106/month",
  },
  {
    treatment: "Single dental implant",
    turkeyCost: "£500",
    twelve: "£42/month",
    twentyFour: "£21/month",
    thirtySix: "£14/month",
  },
  {
    treatment: "All-on-4 (single arch)",
    turkeyCost: "£4,500",
    twelve: "£375/month",
    twentyFour: "£188/month",
    thirtySix: "£125/month",
  },
  {
    treatment: "Full smile makeover",
    turkeyCost: "£5,000",
    twelve: "£417/month",
    twentyFour: "£208/month",
    thirtySix: "£139/month",
  },
];

const faqs = [
  {
    q: "Can I get dental monthly payments UK with bad credit?",
    a: "Often, yes. Some lenders accept non-prime applications, but approval, APR, and deposit requirements vary by profile.",
  },
  {
    q: "Is pre-qualification for dental finance UK a hard credit check?",
    a: "Most pre-check journeys use a soft search. A hard search is usually only completed if you proceed to full application.",
  },
  {
    q: "Can I pay monthly dentist costs for treatment in Turkey?",
    a: "Yes. UK-regulated lenders can provide finance in GBP while treatment is completed abroad through approved partners.",
  },
  {
    q: "What term is best for monthly payment dental treatment?",
    a: "Shorter terms reduce total cost, while longer terms reduce monthly outgoings. The best option depends on your budget and risk tolerance.",
  },
];

export default function DentalMonthlyPaymentsUKPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">
            Finance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Dental Monthly Payments UK: Complete Guide for 2026
          </h1>
          <p className="text-gray-500 text-sm">Published May 2026 · 7 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
          <p>
            Demand for <strong>dental monthly payments UK</strong> plans continues to rise as private treatment costs increase. If you want to spread costs safely, this guide explains how UK dental finance works, what lenders look for, and how to compare options before committing.
          </p>
          <p>
            Whether you need veneers, implants, or a full smile makeover, structured <strong>dental treatment finance UK</strong> options can help you start treatment sooner while keeping monthly costs manageable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Dental Monthly Payments Work</h2>
          <p>
            Most <strong>dental finance UK</strong> plans follow a simple process: pre-qualify, review terms, sign digitally, and begin repayments by direct debit. Typical terms are 12, 24, or 36 months.
          </p>
          <ol className="space-y-2 list-decimal list-inside my-3">
            <li>Receive your written treatment plan and itemised quote.</li>
            <li>Complete a soft-search pre-check to view likely approval options.</li>
            <li>Choose term length based on affordability and total repayable amount.</li>
            <li>Sign your agreement and schedule treatment dates.</li>
          </ol>
          <p className="text-sm text-gray-500">
            Representative examples only. Actual APR, eligibility, and acceptance depend on personal circumstances and lender criteria.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Financing Dental Treatment</h2>
          <ul className="space-y-2 list-disc list-inside my-3">
            <li>Start treatment without waiting years to save a lump sum.</li>
            <li>Use fixed monthly budgeting instead of one large upfront payment.</li>
            <li>Access broader <strong>teeth finance options UK</strong> across multiple providers.</li>
            <li>Combine treatment savings with finance flexibility for better value.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example Monthly Payment Scenarios</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">Cost</th>
                  <th className="px-4 py-3 text-right">12 mo</th>
                  <th className="px-4 py-3 text-right">24 mo</th>
                  <th className="px-4 py-3 text-right">36 mo</th>
                </tr>
              </thead>
              <tbody>
                {paymentScenarios.map((scenario, idx) => (
                  <tr key={scenario.treatment} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{scenario.treatment}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{scenario.turkeyCost}</td>
                    <td className="px-4 py-3 text-right">{scenario.twelve}</td>
                    <td className="px-4 py-3 text-right">{scenario.twentyFour}</td>
                    <td className="px-4 py-3 text-right">{scenario.thirtySix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Illustrative payment examples for guidance only.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Patients Choose Turkey</h2>
          <p>
            UK patients often use <strong>monthly payment dental treatment</strong> plans for Turkey because they can combine lower treatment fees with staged repayment. This can reduce both overall cost and monthly burden compared with many UK private quotes.
          </p>
          <ul className="space-y-2 list-disc list-inside my-3">
            <li>Comparable materials and digital dentistry used in leading UK clinics.</li>
            <li>Transparent package pricing and written plans before travel.</li>
            <li>UK-based support teams for communication and aftercare guidance.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FAQ Section</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Get Started With Your Treatment Plan</h2>
          <div className="mt-2 p-6 bg-[#1e40af] text-white rounded-2xl">
            <p className="font-bold text-xl mb-2">Check your finance options in under 60 seconds</p>
            <p className="text-blue-200 mb-4">
              Get a personalised plan, compare lender terms, and see if you can <strong>pay monthly dentist</strong> costs for your treatment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Get Free Treatment Plan
              </Link>
              <Link href="/monthly-payment" className="inline-block border border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
                View Monthly Payment Options
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/finance-options-uk" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm">Dental Finance Options UK</span>
                <span className="text-xs text-gray-500 mt-0.5">Plan types and eligibility</span>
              </Link>
              <Link href="/blog/dental-treatment-turkey-payment-plans" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm">Turkey Payment Plans</span>
                <span className="text-xs text-gray-500 mt-0.5">How UK patients spread costs</span>
              </Link>
              <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm">Implants Treatment Guide</span>
                <span className="text-xs text-gray-500 mt-0.5">Costs and treatment timeline</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
