import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, savingRange, ukRange } from "@/lib/prices";
import { VENEER_INTENT_OWNERS, veneerFollowUps } from "@/lib/veneer-cluster";
import { monthlyLabel } from "@/lib/finance";

export const revalidate = 86400;

const emax = getPrice("emax-veneer");
const zirconia = getPrice("zirconia-crown");
const composite = getPrice("composite-veneer");
const DESCRIPTION = `E-max veneers in Turkey from ${gbp(emax.turkeyFromGBP)} per tooth, arranged by a UK coordination service. One 5–7 day trip, who it suits, and getting an itemised quote.`;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/veneers-turkey" },
  title: "Veneers Turkey – From £190 Per Tooth",
  description: DESCRIPTION,
};

const faqs = [
  { question: "How long do veneers last in Turkey?", answer: "E-max and porcelain veneers typically last 10–15 years or more with good care; how long depends on oral hygiene, grinding and the quality of the bonding rather than the country. Partner clinics give written guarantees whose length and cover vary — confirm the terms before booking." },
  { question: "How many days do I need in Turkey for veneers?", answer: "You'll typically need 5–7 days for a veneer procedure — 2 days for preparation and temporaries, then 2–3 days later for fitting the final veneers." },
  { question: "Are Turkish veneers the same quality as UK veneers?", answer: "The materials can be the same: partner clinics use Ivoclar E-max, which UK practices also use. Quality depends mainly on the individual dentist's preparation, the lab and the bonding, in either country. Ask for the ceramic brand, the lab and the treating dentist in writing, and look at that dentist's own before-and-after cases." },
  { question: "Will my veneers look natural?", answer: "Well-made E-max veneers can look very close to natural teeth. A digital smile design preview and temporary veneers let you check the shape, length and shade before the permanent set is bonded — ask for changes at that stage, because they are much harder to make afterwards." },
  { question: "Can I pay monthly for veneers in Turkey?", answer: "Yes. 0% APR representative applies to 12- and 24-month plans, and 36-month plans carry interest. A full set of 20 veneers at £3,800 works out at about £159 a month over 24 months at 0%, subject to eligibility. Pre-qualification uses a soft search that does not affect your credit score." },
];

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/treatments/veneers-turkey`;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE_URL}/treatments` },
    { "@type": "ListItem", position: 3, name: "Veneers Turkey", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Veneers Turkey – From £190 Per Tooth",
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: "2026-01-01",
  dateModified: "2026-09-25",
  inLanguage: "en-GB",
  author: { "@type": "Organization", name: "Teeth Done in Turkey", url: SITE_URL },
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: { "@type": "MedicalProcedure", name: "Dental Veneer" },
};

export default function VeneersTurkeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments" }, { label: "Veneers Turkey" }]} />
          </div>
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Treatments</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Veneers Turkey – From £190 Per Tooth</h1>
          <p className="text-xl text-blue-200 mb-2">Porcelain veneers at partner clinics in Turkey, arranged from the UK</p>
          <div className="mb-6">
            <PageFreshness published="1 January 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/veneers-turkey-cost" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Full Price Guide</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <QuickAnswer question="How do I get veneers in Turkey through Teeth Done in Turkey?">
            <p>
              Teeth Done in Turkey is a UK patient-coordination service, not a clinic. You send photos of your teeth, we
              return an itemised plan from a partner clinic that states the material and whether each tooth gets a
              veneer or a crown, and the clinic carries out the treatment in one trip of 5–7 days. E-max porcelain
              veneers cost from {gbp(emax.turkeyFromGBP)} per tooth; the final plan is confirmed after an examination
              and X-rays at the clinic.
            </p>
          </QuickAnswer>

          {/* Cost comparison */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Veneers Cost: UK vs Turkey</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl">
                <p className="text-sm text-gray-500 mb-1">UK private (E-max, per tooth)</p>
                <p className="text-2xl font-extrabold text-gray-700">{ukRange(emax)}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Turkey (E-max, per tooth)</p>
                <p className="text-2xl font-extrabold text-green-600">From {gbp(emax.turkeyFromGBP)}</p>
                <p className="text-xs text-green-600 font-semibold">{savingRange(emax)} lower, before travel</p>
              </div>
            </div>
            <p className="text-center mt-4 text-sm text-gray-600">
              Full set of 20 E-max veneers: <strong>from {gbp(emax.turkeyFromGBP * 20)} in Turkey</strong> vs{" "}
              {gbp(emax.ukRangeGBP.min * 20)}–{gbp((emax.ukRangeGBP.max ?? 0) * 20)} in the UK.{" "}
              <Link href={VENEER_INTENT_OWNERS.cost} className="text-[#1e40af] hover:underline">Full price breakdown</Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Dental Veneers?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dental veneers are ultra-thin porcelain or composite shells bonded to the front surface of your teeth. They correct discolouration, chips, gaps, and misalignment to create a perfectly uniform, bright smile. The results are instantly transformative and long-lasting.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Partner clinics in Turkey use the same ceramic systems as UK practices, primarily Ivoclar E-max. The price difference comes mainly from lower clinic overheads and staff costs. What changes for the patient is logistics: treatment is compressed into one trip, and a chipped or loose veneer later means a return visit or a UK dentist.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Veneers Available</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "E-max Veneers", desc: "Thin lithium disilicate ceramic bonded to the front of the tooth. The most natural-looking option for most cosmetic cases.", price: `From ${gbp(emax.turkeyFromGBP)}/tooth` },
                { name: "Zirconia Crowns", desc: "Often sold as \"zirconium veneers\" but fitted as crowns over the whole tooth. Very strong; suits grinders and damaged teeth, but removes more tooth.", price: `${gbp(zirconia.turkeyFromGBP)}/tooth` },
                { name: "Composite Veneers", desc: "Resin applied in a single visit, with little or no tooth removed. Good for minor corrections but wears sooner than porcelain.", price: `From ${gbp(composite.turkeyFromGBP)}/tooth` },
              ].map(v => (
                <div key={v.name} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">{v.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{v.desc}</p>
                  <p className="text-[#1e40af] font-bold text-sm">{v.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Veneer Procedure – Step by Step</h2>
            <ol className="space-y-4">
              {[
                { title: "Digital Smile Design", desc: "Your dentist photographs your smile and creates a digital preview so you can see results before any work begins." },
                { title: "Tooth Preparation", desc: "A thin layer of enamel (0.3–0.5mm) is removed from the tooth surface to make room for the veneer." },
                { title: "Impressions & Temporaries", desc: "Digital impressions are sent to the in-house lab. Temporary veneers protect your teeth while your final ones are crafted." },
                { title: "Final Fitting", desc: "Your permanent veneers are bonded with dental adhesive. Fine adjustments are made until your bite and appearance are perfect." },
                { title: "Aftercare Guidance", desc: "You receive full aftercare instructions and the clinic&apos;s contact details for any questions after you return home." },
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/veneers-turkey-cost" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Full Veneers Price Guide</Link>
          </div>

          {/* Finance section */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Spread the Cost – Monthly Finance</h2>
            <p className="text-gray-600 mb-4">Finance your veneers at 0% APR representative over 12 or 24 months, or over 36 months with interest, subject to status. Figures are for E-max at {gbp(emax.turkeyFromGBP)} per tooth.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { label: "10 Veneers", price: monthlyLabel(emax.turkeyFromGBP * 10, 24), term: "24 months at 0%" },
                { label: "20 Veneers", price: monthlyLabel(emax.turkeyFromGBP * 20, 24), term: "24 months at 0%" },
                { label: "20 Veneers", price: monthlyLabel(emax.turkeyFromGBP * 20, 12), term: "12 months at 0%" },
                { label: "Any", price: "Interest applies", term: "36 months" },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-0.5">{p.label}</p>
                  <p className="text-lg font-extrabold text-[#1e40af]">{p.price}</p>
                  <p className="text-xs text-gray-400">{p.term}</p>
                </div>
              ))}
            </div>
            <Link href="/monthly-payment" className="inline-block text-[#1e40af] font-semibold hover:underline text-sm">→ View all finance options</Link>
          </div>

          <NotForYou
            title="Who veneers in Turkey may not suit"
            items={[
              "People with untreated gum disease or decay, which needs treating before any veneer work.",
              "Heavy grinders who will not wear a night guard.",
              "Anyone wanting only one or two veneers, where the trip can cost more than the saving.",
              "Anyone still undecided on how many teeth to treat — preparing teeth for porcelain is irreversible.",
            ]}
          />

          <FollowUpQuestions items={veneerFollowUps(VENEER_INTENT_OWNERS.service)} />

          {/* Internal linking */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "📘 Teeth in Turkey Guide", href: "/guides/teeth-in-turkey", desc: "The complete patient guide to treatments, safety and cost." },
                { title: "Hollywood Smile Packages", href: "/prices/hollywood-smile-turkey-package", desc: "20 or 24 crown all-inclusive packages with hotel and transfers." },
                { title: "Smile Makeover Turkey", href: "/treatments/full-smile-makeover-turkey", desc: "Full smile transformation including veneers, whitening and more." },
                { title: "Veneers Cost Guide", href: "/prices/veneers-turkey-cost", desc: "Complete UK vs Turkey price breakdown by veneer type." },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-colors block">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                  <p className="text-xs text-[#1e40af] font-semibold mt-2">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Veneers Turkey FAQ" />

      <CTASection
        title="Ready for Your New Smile?"
        subtitle="Get a free veneer consultation and personalised quote within 24 hours."
        buttonText="Get My Free Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
