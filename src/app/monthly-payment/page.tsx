import type { Metadata } from "next";
import Link from "next/link";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Teeth Done in Turkey with Monthly Payment – Dental Finance",
  description: "Pay for your dental treatment in Turkey monthly from £82/month. 0% interest options available over 12, 24 or 36 months. Pre-qualify in 60 seconds.",
};

export default function MonthlyPaymentPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Teeth Done in Turkey with Monthly Payment</h1>
          <p className="text-xl text-blue-200 mb-6">Spread the cost of your new smile from just £82/month</p>
          <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Pre-Qualify in 60 Seconds</Link>
        </div>
      </div>

      <MonthlyPaymentTable />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Does Dental Finance Work?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with UK-based finance providers to let you spread the cost of your Turkish dental treatment over 12, 24, or 36 months. Your treatment is booked and paid for in Turkey, while you repay the finance in manageable monthly instalments from the UK.
            </p>
            <ol className="space-y-4">
              {[
                "Apply online in under 60 seconds — no impact on your credit score for pre-qualification",
                "Get an instant decision — know your options before you commit",
                "Book your treatment with confidence knowing your finance is in place",
                "Fly to Turkey and receive your treatment as planned",
                "Make easy monthly repayments from home",
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <p className="text-gray-600 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Finance FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Is the finance 0% interest?", a: "We offer 0% interest plans for qualifying applicants. Some plans may carry interest depending on your credit profile and term length. Full details provided before you commit." },
                { q: "Does applying affect my credit score?", a: "Pre-qualification uses a soft credit check with no impact on your credit score. Only a full application will show on your credit file." },
                { q: "Can I apply if I have bad credit?", a: "We work with specialist finance providers who consider all credit profiles. Pre-qualify today to see your options." },
                { q: "How quickly can I get finance?", a: "Pre-qualification decisions are instant. Full approval typically takes 24–48 hours." },
              ].map(faq => (
                <div key={faq.q} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Pre-Qualify for Finance in 60 Seconds" subtitle="No impact on your credit score. Instant decision. Get your new smile without the financial stress." buttonText="Pre-Qualify Now" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
