import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TrackedLink from "@/components/TrackedLink";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ExpertQuote from "@/components/ExpertQuote";
import FinanceDisclosure from "@/components/FinanceDisclosure";

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
// Bump only when the page content is genuinely reviewed or changed.
const LAST_UPDATED = "2026-10-30";
const LAST_UPDATED_LABEL = "30 October 2026";

export const revalidate = 86400;

// Differentiated 2026-09-11, softened 2026-10-30. This URL stays separate from
// /finance-options-uk because it is the most-cited landing page in AI search
// (GA4, Aug-Sep 2026): /finance-options-uk answers the generic UK
// dental-finance question, and this page is the Turkey vs UK price comparison
// plus what decides a monthly payment.
//
// This site is an Introducer Appointed Representative of a credit broker, so it
// does not quote APRs, monthly instalments, approval odds or decision speed.
// Those are lender and broker terms, and finance promotions need the
// principal's sign-off. Do not add rates, monthly figures or approval claims
// here without the principal's written approval.
export const metadata: Metadata = {
  alternates: { canonical: "/monthly-payment" },
  title: { absolute: "Paying Monthly for Turkey Teeth: What to Know" },
  description: "Turkey and UK treatment prices side by side, and what decides a monthly payment if you borrow. Terms come from the lender and approval is not guaranteed.",
};

const ukVsTurkeyComparison = [
  { treatment: "Porcelain Veneers (per tooth)", uk: "£800–£1,000", turkey: "£190–£250" },
  { treatment: "Full Smile Makeover (20 veneers)", uk: "£16,000–£20,000", turkey: "£3,800–£5,000" },
  { treatment: "Single Dental Implant", uk: "£2,000–£3,000", turkey: "£250–£600" },
  { treatment: "All-on-4 (per arch)", uk: "£12,000–£18,000", turkey: "£4,500–£5,500" },
  { treatment: "All-on-6 (per arch)", uk: "£15,000–£22,000", turkey: "From £5,600" },
  { treatment: "Hollywood Smile (20 zirconia crowns, inc. hotel)", uk: "£18,000–£22,000", turkey: "£2,800" },
];

const financeFaqs = [
  { q: "Can I get Turkey teeth on finance from the UK?", a: "Some patients do. Credit is arranged in the UK, in pounds, through a lender, and the clinic in Turkey is paid for your treatment. Whether you are offered credit, and on what terms, is the lender's decision and depends on your circumstances. This site introduces you to a credit broker if you ask; it does not lend." },
  { q: "How much would my monthly payment be?", a: "It depends on the amount borrowed, the term, the interest rate and any fees in the offer you receive, so we do not publish monthly figures. Your written offer shows the monthly payment, the APR and the total repayable. Compare the total repayable, not just the monthly amount." },
  { q: "Does applying affect my credit file?", a: "It depends on the check that is run. Some eligibility checks are soft searches and some applications are recorded on your credit file. Ask the broker which applies before you proceed." },
  { q: "Can I apply if I have a poor credit history?", a: "You can ask, but no one can promise approval. The lender decides based on your circumstances and its own criteria when you apply. A deposit or a smaller treatment total means less is being borrowed." },
  { q: "What if I need to cancel after agreeing to finance?", a: "Your credit agreement sets out your right to withdraw and what it would cost you, for example any interest that has accrued. Read the cancellation terms before you sign and ask the lender if anything is unclear." },
  { q: "Do I have to use the broker you introduce?", a: "No. You can arrange finance independently, through your bank or another broker. Comparing offers before you commit is sensible." },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/monthly-payment#webpage`,
      url: `${SITE_URL}/monthly-payment`,
      name: "Paying Monthly for Turkey Teeth: What to Know",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en-GB",
      dateModified: LAST_UPDATED,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/monthly-payment#faq`,
      mainEntity: financeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function MonthlyPaymentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      {/* ── Hero ── */}
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Paying Monthly for Turkey Teeth: What to Know Before You Borrow</h1>
          <p className="text-xl text-blue-200 mb-2">Turkey and UK treatment prices side by side, and what decides a monthly payment</p>
          <p className="text-blue-300 text-sm mb-8">Free treatment plan · No obligation to book or borrow</p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            {[
              { icon: "⭐", text: "5.0 on Google (1,197 reviews, Akdeniz Dental)" },
              { icon: "★", text: "4.8 on Trustpilot (97 reviews)" },
              { icon: "🇬🇧", text: "UK patient support team" },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-1.5 bg-white/10 rounded-full px-4 py-1.5">
                <span>{item.icon}</span>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Multi-CTA block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <TrackedLink href="/book-consultation" ctaLabel="Get Free Treatment Plan" className="bg-white text-[#1e40af] px-5 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">
              ✅ Get Free Treatment Plan
            </TrackedLink>
            <TrackedLink href="/book-consultation" ctaLabel="Ask About Payment Options" className="bg-green-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-sm">
              📋 Ask About Payment Options
            </TrackedLink>
            <TrackedLink href="/book-consultation" ctaLabel="Upload Dental X-Ray" className="border-2 border-white text-white px-5 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">
              📤 Upload Dental X-Ray
            </TrackedLink>
            <a href="https://wa.me/905353998999" className="bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2">
              💬 WhatsApp a Treatment Coordinator
            </a>
          </div>

          <p className="text-blue-300 text-xs mt-4">Ratings are for Akdeniz Dental Clinic, Antalya, checked October 2026. Google does not verify reviews and Trustpilot does not fact-check them.</p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 py-3 bg-white">
        Last updated: <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
      </p>

      {/* ── UK vs Turkey Comparison ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">UK vs Turkey Dental Cost Comparison</h2>
          <p className="text-gray-800 font-medium mb-6">
            Turkey prices in this table sit well below UK private prices, which means a smaller amount to pay or to borrow. All figures are indicative until you hold a written quote from your clinic.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-md">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Treatment</th>
                  <th className="px-4 py-3 text-right">UK Price</th>
                  <th className="px-4 py-3 text-right">Turkey Price</th>
                </tr>
              </thead>
              <tbody>
                {ukVsTurkeyComparison.map((row, i) => (
                  <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row.treatment}</td>
                    <td className="px-4 py-3 text-right text-red-500 line-through">{row.uk}</td>
                    <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{row.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Prices are treatment prices, not finance quotes. If you borrow, the lender sets the terms and the monthly payment.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Full veneers cost guide</Link>
            <Link href="/blog/implants-cost-uk-vs-turkey" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Full implants cost guide</Link>
            <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ All turkey teeth prices</Link>
          </div>
          <FinanceDisclosure className="mt-8" />
        </div>
      </section>

      {/* ── Content sections ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What &ldquo;Turkey Teeth on Finance&rdquo; Actually Means</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Turkey teeth finance means borrowing arranged in the UK, in pounds, so you do not have to pay the full treatment cost upfront. Where credit is offered, you are assessed and repay in the UK while the clinic is paid for your treatment in Turkey. It is not a loan taken out in Turkey, and nothing is paid in lira.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The same idea appears under several names: &ldquo;Turkey teeth on finance&rdquo;, &ldquo;Turkey dental payment plan&rdquo; and &ldquo;pay monthly for teeth in Turkey&rdquo; all describe UK-arranged borrowing that spreads the cost of one treatment abroad.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Borrowing is optional. For the difference between a payment plan, dental finance, a personal loan and NHS charges, see{" "}
              <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">how dental finance works in the UK</Link>, and if you are weighing up affordability more broadly, read{" "}
              <Link href="/guides/cant-afford-dental-treatment-uk" className="text-[#1e40af] font-semibold hover:underline">what to do if you cannot afford dental treatment in the UK</Link>.
              {" "}Our guide to{" "}
              <Link href="/blog/dental-tourism-finance-explained" className="text-[#1e40af] font-semibold hover:underline">funding dental treatment abroad</Link>{" "}
              lays out the options side by side.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Decides a Monthly Payment</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              A monthly payment depends on the amount you borrow, the length of the agreement, the interest rate and any fees. A longer term usually lowers the monthly amount but can raise the total you repay, so look at the total repayable as well as the monthly figure.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm mb-4">
              {[
                "Amount borrowed: your treatment total minus any deposit you pay",
                "Term: the number of months you agree to repay over",
                "Interest and fees: set by the lender and shown as an APR in the written offer",
                "Your circumstances: the lender decides whether to offer credit and on what terms",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We do not publish monthly figures because they depend on the offer you receive. Treat the treatment prices on this site as a way to compare options, not as a finance quote.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of Dental Treatment in Turkey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Turkish dental treatment is often <strong>65–82% cheaper</strong> than equivalent UK private prices, which is why some patients find it easier to pay in full or to borrow a smaller amount. A full smile makeover that would cost £16,000–£20,000 in the UK is priced from £3,800 in Turkey. Prices and what is included vary by clinic and treatment plan.
            </p>
            <Link href="/teeth-done-in-turkey-guide" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Read our complete Turkey dental guide</Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Veneers in Turkey: What You Would Be Paying For</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Porcelain veneers in Turkey cost <strong>£190–£250 per tooth</strong>, so a full set of 20 costs £3,800–£5,000. If you borrow, the amount, term and rate in your offer decide the monthly payment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The clinics we coordinate use Ivoclar E-max, a lithium-disilicate ceramic also used in UK cosmetic practices. Your treatment plan should list the number of teeth, the materials and what the price includes, so you can borrow only what you need.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your treatment plan from our partner clinics includes a free Digital Smile Design consultation, temporary veneers during fabrication and a written guarantee. Ask for the length and terms of the guarantee before you decide.
            </p>
            <ExpertQuote
              quote="A successful smile makeover is not simply about creating whiter or straighter teeth. It requires a personalised treatment plan that balances natural aesthetics, bite function, and long-term oral health. Every restoration should complement the patient's facial features while preserving healthy tooth structure whenever possible."
              name="Dr. Mustafa Akça"
              href="/medical-reviewers/mustafa-akca"
              role="Dentist, Aesthetic Dentistry & Treatment Planning | Akdeniz Dental, Antalya"
            />
            <div className="mt-3">
              <Link href="/prices/veneers-turkey-cost" className="text-[#1e40af] text-sm font-semibold hover:underline">→ See full veneers cost breakdown</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dental Implants in Turkey: Prices by Treatment</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              A single dental implant in Turkey costs <strong>£250–£600</strong> depending on the implant brand, including consultation, CBCT scan, implant placement and the final zirconia crown. Larger treatments scale up from there:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="px-4 py-3 text-left">Implant Treatment</th>
                    <th className="px-4 py-3 text-right">Turkey Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: "Single Implant (premium brand)", p: "£600" },
                    { t: "4 Implants", p: "£2,000" },
                    { t: "All-on-4 (single arch)", p: "£4,500" },
                    { t: "All-on-4 (both arches)", p: "£9,000" },
                    { t: "All-on-6 (both arches)", p: "£11,000" },
                  ].map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{r.t}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ExpertQuote
              quote="Replacing missing posterior teeth is essential not only for restoring a complete smile but also for maintaining effective chewing function and a stable bite. Dental implants can provide a long-term solution when supported by adequate bone structure, careful surgical planning, and an individual assessment of each patient's oral health."
              name="Dr. Mehmet Onur Merey"
              href="https://akdenizdental.com/mehmet-onur-merey"
              role="Oral & Maxillofacial Surgeon, Clinic Owner | Akdeniz Dental Clinic, Antalya"
            />
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/blog/implants-cost-uk-vs-turkey" className="text-[#1e40af] text-sm font-semibold hover:underline">→ See full implants cost breakdown</Link>
              <Link href="/blog/finance-dental-implants-turkey-uk-patients" className="text-[#1e40af] text-sm font-semibold hover:underline">→ Dedicated implants finance guide</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Things to Weigh Up Before Borrowing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lower treatment prices can make paying in full or borrowing a smaller amount more realistic. Borrowing still has costs and risks, so it is worth thinking through before you commit.
            </p>
            <ul className="space-y-3">
              {[
                { icon: "💷", title: "Credit is arranged in the UK, in pounds", desc: "If you borrow, the agreement is with a UK lender and repaid in GBP, so there is no foreign currency loan." },
                { icon: "📋", title: "Get the written treatment plan first", desc: "We send a written treatment plan, X-ray review and cost breakdown so you know the amount before you apply for anything." },
                { icon: "⚖️", title: "Borrowing is optional", desc: "You can pay in full, use savings, or arrange credit yourself. You are not required to use the broker we introduce." },
                { icon: "⏱️", title: "Don't borrow for more than you need", desc: "A deposit or a smaller treatment reduces the amount borrowed and the total you repay." },
              ].map(item => (
                <li key={item.title} className="flex gap-3 list-none bg-white rounded-xl p-4 border border-gray-200">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Partner Clinic</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The ratings below describe the partner clinic, Akdeniz Dental Clinic in Antalya, as shown on Google and Trustpilot in October 2026. Ratings are not a guarantee of your own result.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { stat: "5.0★", label: "Google rating, 1,197 reviews (Akdeniz Dental, Oct 2026)" },
                { stat: "4.8★", label: "Trustpilot rating, 97 reviews (Oct 2026)" },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <p className="text-3xl font-extrabold text-[#1e40af] mb-1">{item.stat}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How an Introduction to Finance Works</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are an Introducer Appointed Representative of a credit broker, Ideal4Finance. We do not lend or give credit advice. If you ask, we introduce you to the broker, which arranges applications with lenders on its panel. The lender decides whether to offer credit and on what terms.
            </p>
            <ol className="space-y-4">
              {[
                "Receive your free treatment plan and cost estimate",
                "Decide whether you want to borrow, pay in full or arrange credit yourself",
                "If you want to explore finance, ask for an introduction to the broker",
                "The broker and lender assess your application; approval is not guaranteed",
                "Read the written offer and agree only if you understand it",
                "Book your treatment and travel as planned",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 list-none">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <p className="text-gray-600 pt-1">{step}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-gray-500 mt-4">
              For the eligibility checklist and a plain-English comparison of funding routes, see our{" "}
              <Link href="/finance-options-uk#how-to-apply" className="text-[#1e40af] font-semibold hover:underline">dental finance guide</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Should I Check Before Accepting a Finance Offer?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Check the APR, the total amount repayable, any early-repayment charge and the cancellation terms before you sign. Compare the written offer with your treatment plan first.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "The amount borrowed matches the price in your written treatment plan, including any extras such as bone grafts or extra teeth",
                "The monthly payment, term and total repayable are stated in pounds, alongside the APR",
                "You know your right to withdraw from the agreement and what withdrawing would cost",
                "You have kept copies of the agreement, the treatment plan and the clinic's written guarantee",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Can Apply?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Each lender sets its own criteria. Lenders commonly look at whether you are 18 or over, live in the UK, have a UK bank account and have a regular income, and they assess your credit history. Approval is the lender&apos;s decision and is not guaranteed. The broker will tell you what applies to you.
            </p>
          </div>

          {/* Trust layer */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Trust Us With Your Treatment</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { icon: "🇬🇧", title: "UK Patient Support", desc: "Dedicated UK coordinator before, during and after treatment" },
                { icon: "🎓", title: "Qualified Dentists", desc: "Partner dentists qualify under Turkish regulation, not UK GDC registration. Ask for each dentist's credentials" },
                { icon: "🏥", title: "Check Accreditation", desc: "Ask each clinic for current accreditation certificates, such as JCI or Ministry of Health approval, and verify them" },
                { icon: "📋", title: "Written Treatment Plan", desc: "A written plan and cost estimate before you commit to anything" },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-sm">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-bold text-gray-900 text-xs mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Start with a plan, not a commitment:</strong> get a complete written treatment plan, cost estimate and Digital Smile Design preview, free and with no obligation to book or borrow.
              </p>
            </div>
          </div>

          <MedicalReviewBadge />

          {[
            { title: "Finance FAQs: Cost and Credit", items: financeFaqs.slice(0, 3) },
            { title: "Finance FAQs: Approval, Cancelling and Alternatives", items: financeFaqs.slice(3) },
          ].map(group => (
            <div key={group.title}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{group.title}</h2>
              <div className="space-y-4">
                {group.items.map(faq => (
                  <div key={faq.q} className="bg-white rounded-xl p-5 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <FinanceDisclosure />

          {/* Internal links */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-4">Explore Further</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/prices/veneers-turkey-cost", label: "Veneers Turkey Cost", sub: "E-max from £190/tooth" },
                { href: "/blog/implants-cost-uk-vs-turkey", label: "Implants Turkey Cost", sub: "From £250 all-in" },
                { href: "/prices/turkey-teeth-cost", label: "All Turkey Teeth Prices", sub: "Complete price guide" },
                { href: "/treatments/veneers-turkey", label: "Veneers Treatment Guide", sub: "What to expect" },
                { href: "/treatments/dental-implants-turkey", label: "Implants Treatment Guide", sub: "Full implant process" },
                { href: "/guides/teeth-in-turkey", label: "Complete UK Patient Guide", sub: "Treatments, costs, safety & travel" },
                { href: "/finance-options-uk", label: "Dental Finance Options", sub: "Payment plan vs loan vs NHS" },
                { href: "/guides/cant-afford-dental-treatment-uk", label: "Can't Afford Treatment?", sub: "NHS, finance and lower-cost options" },
                { href: "/guides/turkey-teeth-veneers-or-crowns", label: "Veneers or Crowns?", sub: "How much tooth is actually removed" },
              ].map(item => (
                <Link key={item.href} href={item.href} className="flex flex-col bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection
        title="Start Your Free Treatment Plan Today"
        subtitle="No obligation to book or borrow. Chat with a UK patient coordinator who will answer your questions."
        buttonText="Get Free Treatment Plan"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
