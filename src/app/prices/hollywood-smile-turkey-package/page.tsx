import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import AtAGlance from "@/components/geo/AtAGlance";
import DecisionTree from "@/components/geo/DecisionTree";
import EvidenceBlock from "@/components/geo/EvidenceBlock";
import FactEvidenceDecision from "@/components/geo/FactEvidenceDecision";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import PriceRows from "@/components/geo/PriceRows";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { HOLLYWOOD_INTENT_OWNERS, HOLLYWOOD_PACKAGE_NIGHTS, hollywoodFollowUps } from "@/lib/hollywood-cluster";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice, ukRange } from "@/lib/prices";
import { PACKAGE_TRIP_EXTRAS } from "@/lib/travel";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PATH = HOLLYWOOD_INTENT_OWNERS.cost;
const PAGE_URL = `${SITE_URL}${PATH}`;
const H1 = "Hollywood Smile Turkey Packages";
const DATE_PUBLISHED = "2026-05-29";
const DATE_MODIFIED = "2026-09-25";

const h20 = getPrice("hollywood-20");
const h24 = getPrice("hollywood-24");
const crown = getPrice("zirconia-crown");
const makeover = getPrice("smile-makeover");

const DESCRIPTION = `Hollywood Smile Turkey: 20 zirconia crowns ${gbp(h20.turkeyFromGBP)} or 24 for ${gbp(h24.turkeyFromGBP)}, incl. ${HOLLYWOOD_PACKAGE_NIGHTS} nights' hotel and transfers. What's included and who crowns may not suit.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: { absolute: `Hollywood Smile Turkey: Zirconia Crowns from ${gbp(h20.turkeyFromGBP)}` },
  description: DESCRIPTION,
};

const packages = [
  {
    name: "24 Zirconia Crowns",
    subtitle: "All visible upper and lower teeth",
    price: gbp(h24.turkeyFromGBP),
    highlight: true,
    badge: "Best Value",
    includes: [
      "24 zirconia crowns",
      `${HOLLYWOOD_PACKAGE_NIGHTS} nights hotel accommodation`,
      "VIP airport transfers",
      "Digital smile design",
      "Professional teeth cleaning",
    ],
  },
  {
    name: "20 Zirconia Crowns",
    subtitle: "Typically 10 upper and 10 lower teeth",
    price: gbp(h20.turkeyFromGBP),
    highlight: false,
    badge: null,
    includes: [
      "20 zirconia crowns",
      `${HOLLYWOOD_PACKAGE_NIGHTS} nights hotel accommodation`,
      "VIP airport transfers",
      "Smile design consultation",
    ],
  },
];

const faqs = [
  { q: "What is the difference between the 24 and 20 crown packages?", a: "The 24-crown package covers all visible upper and lower teeth. The 20-crown package covers the teeth that show in most smiles, typically 10 upper and 10 lower — enough if your back lower teeth are less of a concern. The 24-crown package also includes digital smile design and a professional clean." },
  { q: "Are these crowns or veneers?", a: "Crowns. Both packages use full-contour zirconia crowns, which cover the whole tooth. Each tooth is reduced on every surface to make room for the crown, which is more tooth removal than a veneer needs and cannot be reversed. If your teeth are healthy and you mainly want a colour or shape change, ask whether veneers, whitening or bonding would do instead." },
  { q: "Does the price include flights?", a: `No. The package includes hotel and transfers; you book flights yourself. Return flights from the UK to Istanbul or Antalya typically cost £80–£200, and with food and travel insurance a package patient usually spends about ${gbp(PACKAGE_TRIP_EXTRAS.min)}–${gbp(PACKAGE_TRIP_EXTRAS.max)} on top of the package.` },
  { q: "Can I add teeth whitening to the package?", a: "A professional clean is included in the 24-crown package. Whitening of any remaining natural teeth can be added from £250." },
  { q: "Is there a guarantee?", a: "Crown work is covered by a written guarantee from the treating clinic. Its length and what it covers vary by clinic, and remedial work normally means returning to the clinic — get the terms in writing before you pay a deposit." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: H1,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: { "@type": "MedicalProcedure", name: "Dental crowns (Hollywood Smile)" },
      isBasedOn: `${SITE_URL}/turkey-dental-price-index`,
      inLanguage: "en-GB",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Turkey Teeth Cost", item: `${SITE_URL}/prices/turkey-teeth-cost` },
        { "@type": "ListItem", position: 3, name: "Hollywood Smile Packages", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function HollywoodSmilePackagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{H1}</h1>
          <p className="text-xl text-blue-200">Zirconia crown packages with hotel, transfers &amp; digital smile design included</p>
          <div className="mt-4 flex gap-4 flex-wrap">
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <p className="text-blue-200 text-xs">24 Zirconia Crowns</p>
              <p className="text-3xl font-extrabold text-yellow-400">{gbp(h24.turkeyFromGBP)}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3">
              <p className="text-blue-200 text-xs">20 Zirconia Crowns</p>
              <p className="text-3xl font-extrabold text-yellow-400">{gbp(h20.turkeyFromGBP)}</p>
            </div>
          </div>
          <div className="mt-3">
            <PageFreshness published="29 May 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <MedicalReviewBadge />
            <QuickAnswer question="How much is a Hollywood Smile in Turkey?">
              <p>
                A Hollywood Smile package in Turkey costs {gbp(h20.turkeyFromGBP)} for 20 zirconia crowns or{" "}
                {gbp(h24.turkeyFromGBP)} for 24, including {HOLLYWOOD_PACKAGE_NIGHTS} nights&apos; hotel and VIP
                transfers. Flights are extra — with food and insurance, about {gbp(PACKAGE_TRIP_EXTRAS.min)}–
                {gbp(PACKAGE_TRIP_EXTRAS.max)}. The same 20 crowns typically cost {ukRange(h20)} privately in the UK.
                These packages are crowns, not veneers: every tooth is reduced on all surfaces, which cannot be undone.
              </p>
            </QuickAnswer>

            <AtAGlance
              facts={[
                { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
                { label: "20 zirconia crowns", value: gbp(h20.turkeyFromGBP) },
                { label: "24 zirconia crowns", value: gbp(h24.turkeyFromGBP) },
                { label: "Treatment type", value: "Crowns (not veneers)" },
                { label: "Hotel and transfers", value: `Included (${HOLLYWOOD_PACKAGE_NIGHTS} nights)` },
                { label: "Flights", value: "Not included" },
                { label: "Trips to Turkey", value: "1 (about 5 days)" },
                { label: "Reversible", value: "No" },
              ]}
            />
          </div>

          {/* Package cards */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What each package includes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl border-2 p-7 shadow-sm ${pkg.highlight ? "border-[#1e40af] bg-blue-50" : "border-gray-200 bg-white"}`}>
                  {pkg.badge && (
                    <div className="inline-block bg-yellow-400 text-[#1e40af] text-xs font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">{pkg.badge}</div>
                  )}
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{pkg.subtitle}</p>
                  <div className="text-3xl font-extrabold text-[#1e40af] mb-5">{pkg.price}</div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">Package includes:</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-green-500 mt-0.5 font-bold" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book-consultation" className={`block text-center px-6 py-3 rounded-xl font-bold transition-colors ${pkg.highlight ? "bg-[#1e40af] text-white hover:bg-blue-700" : "border-2 border-[#1e40af] text-[#1e40af] hover:bg-blue-50"}`}>
                    Get My Quote
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">Not included in either package: flights, travel insurance, and any treatment needed before crowns can be fitted, such as fillings, root canal work or gum treatment.</p>
          </div>

          {/* What is Hollywood Smile */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a Hollywood Smile?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A Hollywood Smile is a full set of matching crowns or veneers across the teeth that show when you smile,
              giving a uniform shape and colour. On this site&apos;s packages it is made with zirconia crowns. A crown
              caps the whole tooth, which suits teeth that are damaged, worn, heavily filled or badly discoloured; a
              veneer covers only the front surface and removes much less tooth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              More on what the treatment involves, and how to get a natural-looking result, is in{" "}
              <Link href={HOLLYWOOD_INTENT_OWNERS.whatIsIt} className="text-[#1e40af] font-semibold hover:underline">Hollywood Smile Turkey: what it is and what it costs</Link>.
            </p>
          </div>

          <FactEvidenceDecision
            title="A Hollywood Smile package is crown work"
            fact="Both packages use full-contour zirconia crowns, which cover the whole tooth."
            evidence="Crowns are prepared on every surface, typically removing about 1.5–2mm; porcelain veneers remove about 0.3–0.7mm from the front only (see the veneers-or-crowns guide)."
            interpretation="On healthy teeth, a crown package removes far more natural tooth than the look strictly requires, and the teeth will always need crowns afterwards."
            decision="If your teeth are healthy and you mainly want a whiter, more even smile, ask the dentist whether veneers, whitening or bonding would achieve it first."
          />

          {/* UK vs Turkey */}
          <div>
            <h2 id="prices" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Hollywood Smile prices: Turkey vs the UK</h2>
            <PriceRows records={[h20, h24, crown]} caption="Hollywood Smile packages and zirconia crowns: Turkey vs UK private" />
            <p className="text-xs text-gray-500 mt-3">
              Indicative partner-clinic list prices, checked {PRICES_LAST_VERIFIED_LABEL}; UK figures are typical private
              ranges for the same number of crowns, without hotel. See the{" "}
              <Link href="/methodology" className="text-[#1e40af] hover:underline">methodology</Link> and the{" "}
              <Link href={HOLLYWOOD_INTENT_OWNERS.ukComparison} className="text-[#1e40af] hover:underline">full UK vs Turkey comparison</Link>.
            </p>
          </div>

          {/* Treatment journey */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Hollywood Smile trip, day by day</h2>
            <ol className="space-y-4">
              {[
                { step: "1", title: "Digital smile preview (before you travel)", desc: "The dentist designs the proposed shape and shade from your photos so you can approve it before travelling." },
                { step: "2", title: "Arrive in Turkey – Day 1", desc: "Transfer from the airport to your hotel. Consultation, X-rays and clinical assessment at the clinic." },
                { step: "3", title: "Preparation & temporaries – Days 2–3", desc: "Teeth are prepared for crowns, scanned, and temporary crowns are fitted. Check the shape and shade of the temporaries carefully — this is the time to ask for changes." },
                { step: "4", title: "Final fitting – Days 4–5", desc: "The permanent zirconia crowns are cemented, the bite is adjusted, and you fly home." },
              ].map((item) => (
                <li key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-extrabold text-sm">{item.step}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <NotForYou
            title="Who a Hollywood Smile package may not suit"
            items={[
              "People with healthy teeth who mainly want them whiter or more even — veneers, whitening or bonding remove far less tooth.",
              "Anyone with untreated gum disease or decay, which needs treating before crowns are fitted.",
              "Heavy grinders who will not wear a night guard, as grinding can chip or loosen crowns.",
              "Anyone who could not return to Turkey, or pay a UK dentist, if a crown needed attention later.",
            ]}
          />

          <DecisionTree
            title="Is a crown package the right choice?"
            steps={[
              { condition: "most of your visible teeth are heavily filled, broken, worn or badly discoloured", action: "crowns may be the right treatment; the package is usually cheaper than buying 20 crowns individually." },
              { condition: "your teeth are healthy and you want a whiter, more uniform smile", action: `ask about veneers or a smile makeover (from ${gbp(makeover.turkeyFromGBP)}) before agreeing to crowns.` },
              { condition: "only a few teeth bother you", action: "treat those teeth rather than 20; crowning healthy teeth to match cannot be undone." },
              { condition: "you have gum problems or decay", action: "have them treated first — ideally assessed by a UK dentist before you book." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: `${gbp(h20.turkeyFromGBP)} (20 crowns) and ${gbp(h24.turkeyFromGBP)} (24 crowns), incl. hotel and transfers`, basis: "Partner clinic package prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `UK zirconia crown ${ukRange(crown)} each`, basis: "Typical UK private ranges", href: "/methodology#sources", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `Extra trip costs ${gbp(PACKAGE_TRIP_EXTRAS.min)}–${gbp(PACKAGE_TRIP_EXTRAS.max)}`, basis: "Illustrative editorial estimate (flights, food, insurance), not a quote", checked: "September 2026" },
            ]}
          />

          <FollowUpQuestions items={hollywoodFollowUps(PATH)} />

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Free Quote</Link>
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Veneers or Crowns?</Link>
            <Link href="/prices/all-on-6-dental-implants-turkey-package" className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">All-on-6 Package</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Find Out Whether Crowns Are Right for You"
        subtitle="Send your photos and we'll tell you which teeth need crowns, which could have veneers, and the itemised cost — free, no obligation."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
