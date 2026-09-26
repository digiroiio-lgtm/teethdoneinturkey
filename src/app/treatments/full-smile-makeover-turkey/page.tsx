import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import PageFreshness from "@/components/geo/PageFreshness";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { HOLLYWOOD_INTENT_OWNERS, hollywoodFollowUps } from "@/lib/hollywood-cluster";
import { monthlyLabel } from "@/lib/finance";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, savingRange, ukRange } from "@/lib/prices";

export const revalidate = 86400;

const makeover = getPrice("smile-makeover");
const h20 = getPrice("hollywood-20");
const monthly = (months: 12 | 24) => monthlyLabel(makeover.turkeyFromGBP, months);

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/full-smile-makeover-turkey" },
  title: { absolute: "Smile Makeover Turkey: Full Transformation £3,500" },
  description: "Full smile makeover in Turkey from £3,500: veneers, whitening and gum contouring in one trip, against £12,000+ in the UK.",
};

const faqs = [
  { question: "What's included in a smile makeover?", answer: "A smile makeover is entirely bespoke. Most packages include porcelain veneers (typically 16–20 teeth), teeth whitening, gum contouring, and any crown work needed to complete the look. Your dentist designs the plan after a digital smile design consultation and photo assessment." },
  { question: "How long does a smile makeover take in Turkey?", answer: "A typical full smile makeover takes 6–8 days: Day 1 is your consultation and digital smile preview, Days 2–3 for tooth preparation and temporaries, Days 4–5 for the lab to craft your veneers, and Days 6–7 for fitting and final adjustments before you fly home with your new smile." },
  { question: "Can I see my new smile before treatment starts?", answer: "Yes. Digital Smile Design (DSD) software creates a high-resolution 3D preview of your proposed smile before any preparation begins. You can request adjustments until you are 100% happy." },
  { question: "How long do smile makeover results last?", answer: "E-max porcelain veneers — the most common component — typically last 10–15 years with proper care. Partner clinics give written guarantees whose length and cover vary — confirm the terms before booking. Teeth whitening results typically last 2–3 years before a top-up is needed." },
  { question: "Can I pay monthly for a smile makeover?", answer: "Yes. Finance is available over 12, 24, or 36 months. 0% APR representative applies to 12- and 24-month plans, and 36-month plans carry interest. A £3,500 smile makeover works out at about £146 a month over 24 months at 0%, subject to eligibility. Pre-qualification uses a soft search that does not affect your credit score." },
];

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/treatments/full-smile-makeover-turkey`;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE_URL}/treatments` },
    { "@type": "ListItem", position: 3, name: "Full Smile Makeover Turkey", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Full Smile Makeover Turkey – From £3,500",
  description: "Full smile makeover in Turkey from £3,500 — veneers, whitening and gum contouring in one trip. UK price comparison and how to book.",
  url: PAGE_URL,
  datePublished: "2026-01-01",
  dateModified: "2026-09-25",
  inLanguage: "en-GB",
  author: { "@type": "Organization", name: "Teeth Done in Turkey", url: SITE_URL },
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: { "@type": "MedicalProcedure", name: "Smile Makeover" },
};

export default function SmileMakeoverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments" }, { label: "Smile Makeover" }]} />
          </div>
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Treatments</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Full Smile Makeover Turkey</h1>
          <p className="text-xl text-blue-200 mb-2">Complete smile transformation from £3,500</p>
          <p className="text-blue-300 mb-2">Compare to £12,000+ in the UK — save over 70%</p>
          <div className="mb-6">
            <PageFreshness published="1 January 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/hollywood-smile-turkey-package" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Package Prices</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <QuickAnswer question="What is a smile makeover, and how is it different from a Hollywood Smile?">
            <p>
              A smile makeover is a treatment plan built around your own teeth — usually porcelain veneers on the
              visible teeth, with whitening, gum contouring or bonding where needed — starting from{" "}
              {gbp(makeover.turkeyFromGBP)} in Turkey against {ukRange(makeover)} in the UK. A Hollywood Smile package
              on this site is a set of 20 or 24 zirconia crowns (from {gbp(h20.turkeyFromGBP)}). Veneers cover only the
              front of each tooth, so a veneer-based makeover removes much less natural tooth than crowns; crowns suit
              teeth that are already damaged, worn or heavily filled.
            </p>
          </QuickAnswer>

          {/* Price comparison */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Smile Makeover Cost: UK vs Turkey</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500">UK Price</p>
                <p className="text-3xl font-extrabold text-gray-700">{ukRange(makeover)}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500">Turkey Price</p>
                <p className="text-3xl font-extrabold text-green-600">From {gbp(makeover.turkeyFromGBP)}</p>
                <p className="text-xs text-green-600 font-semibold">{savingRange(makeover)} lower, before travel</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in a Smile Makeover?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A full smile makeover combines multiple cosmetic and restorative treatments tailored to your specific needs. No two smile makeovers are the same — your treatment plan is designed after a detailed consultation and digital smile preview.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Porcelain Veneers", desc: "Ultra-thin shells to correct shape, colour, and alignment (typically 16–20 teeth)" },
                { title: "Teeth Whitening", desc: "Professional laser whitening for a brilliant, uniform shade" },
                { title: "Gum Contouring", desc: "Reshape uneven gumlines for a more symmetrical smile" },
                { title: "Dental Crowns", desc: "Cap damaged or discoloured back teeth to complete the look" },
                { title: "Composite Bonding", desc: "Fill gaps and repair chips for a flawless finish" },
                { title: "Digital Smile Design", desc: "Preview your new smile before any work begins" },
              ].map(item => (
                <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-[#1e40af] font-bold">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Smile Makeover Journey – 6 to 8 Days</h2>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Consultation & Digital Smile Design", desc: "Photos, shade selection, and a 3D preview of your proposed smile." },
                { day: "Days 2–3", title: "Tooth Preparation & Temporaries", desc: "Light preparation of teeth and fitting of temporary veneers while your permanent ones are crafted in the in-house lab." },
                { day: "Days 4–5", title: "Lab Crafting", desc: "Your E-max veneers — and any crowns in the plan — are made to the approved design." },
                { day: "Days 6–7", title: "Final Fitting", desc: "Permanent veneers bonded and bite checked. Fine adjustments made to ensure a perfect fit." },
                { day: "Day 8", title: "Departure", desc: "Full aftercare instructions and clinic contact details for any questions after you return home." },
              ].map((item) => (
                <div key={item.day} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="bg-[#1e40af] text-white px-3 py-1 rounded-lg text-xs font-bold flex-shrink-0 h-fit">{item.day}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Finance */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Spread the Cost – Monthly Finance</h2>
            <p className="text-gray-600 mb-4">Finance your smile makeover at 0% APR representative over 12 or 24 months, or over 36 months with interest, subject to status. Figures are for {gbp(makeover.turkeyFromGBP)}.</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "12 months", price: monthly(12) },
                { label: "24 months", price: monthly(24) },
                { label: "36 months", price: "Interest applies" },
              ].map(p => (
                <div key={p.label} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-1">{p.label}</p>
                  <p className="text-lg font-extrabold text-[#1e40af]">{p.price}</p>
                </div>
              ))}
            </div>
            <Link href="/monthly-payment" className="inline-block text-[#1e40af] font-semibold hover:underline text-sm">→ View all finance options</Link>
          </div>

          <FollowUpQuestions items={hollywoodFollowUps(HOLLYWOOD_INTENT_OWNERS.makeover)} />

          {/* Internal links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "📘 Teeth in Turkey Guide", href: "/guides/teeth-in-turkey", desc: "The complete patient guide to treatments, safety and cost." },
                { title: "Veneers Turkey", href: "/treatments/veneers-turkey", desc: "E-max porcelain veneers from £190 per tooth." },
                { title: "Hollywood Smile Packages", href: "/prices/hollywood-smile-turkey-package", desc: "20 or 24 crown packages with hotel and transfers included." },
                { title: "Veneers Cost Guide", href: "/prices/veneers-turkey-cost", desc: "Full UK vs Turkey price comparison for all veneer types." },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-colors block">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                  <p className="text-xs text-[#1e40af] font-semibold mt-2">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
            <Link href="/reviews" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">Read Patient Reviews</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Smile Makeover Turkey FAQ" />

      <CTASection title="Design Your Dream Smile" subtitle="Book a free consultation and get a digital smile preview within 48 hours." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
