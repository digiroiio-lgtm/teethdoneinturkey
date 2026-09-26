import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import AtAGlance from "@/components/geo/AtAGlance";
import ComparisonTable from "@/components/geo/ComparisonTable";
import DecisionTree from "@/components/geo/DecisionTree";
import EvidenceBlock from "@/components/geo/EvidenceBlock";
import FollowUpQuestions from "@/components/geo/FollowUpQuestions";
import NotForYou from "@/components/geo/NotForYou";
import PageFreshness from "@/components/geo/PageFreshness";
import PriceRows from "@/components/geo/PriceRows";
import QuickAnswer from "@/components/geo/QuickAnswer";
import { IMPLANT_INTENT_OWNERS, implantFollowUps } from "@/lib/implant-cluster";
import { PRICES_LAST_VERIFIED_LABEL, gbp, getPrice } from "@/lib/prices";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PATH = IMPLANT_INTENT_OWNERS.cost;
const PAGE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Dental Implants Turkey Cost 2026: Prices by Brand";
const H1 = "How Much Do Dental Implants Cost in Turkey? 2026 Prices";
const DATE_PUBLISHED = "2026-05-29";
const DATE_MODIFIED = "2026-09-25";

const osstem = getPrice("implant-osstem");
const medentika = getPrice("implant-medentika");
const straumann = getPrice("implant-straumann");
const boneGraft = getPrice("bone-graft");
const allOn4 = getPrice("all-on-4");
const allOn6 = getPrice("all-on-6");

// UK range for a single implant + crown, entry-level to premium brand.
const UK_SINGLE_RANGE = `${gbp(osstem.ukRangeGBP.min)}–${gbp(straumann.ukRangeGBP.max ?? straumann.ukRangeGBP.min)}`;

const DESCRIPTION = `Dental implants in Turkey: ${gbp(osstem.turkeyFromGBP)} (Osstem) to ${gbp(straumann.turkeyFromGBP)} (Straumann) per implant with crown; All-on-4 from ${gbp(allOn4.turkeyFromGBP)} per arch. UK comparison and what's excluded.`;

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

const faqs = [
  {
    q: "Are Turkish dental implants guaranteed?",
    a: "Partner clinics give a written guarantee on implant work, typically 5–10 years depending on the clinic and implant brand. Guarantees usually require a return trip for the clinic to carry out any remedial work, and they do not cover UK dentist fees or travel. Confirm the length, what is covered and the exclusions in writing before booking.",
  },
  {
    q: "Can I get implants on finance?",
    a: "Yes, subject to status. 0% APR representative applies to 12- and 24-month plans — one All-on-4 arch is about £188 a month over 24 months — and 36-month plans carry interest. Finance starts at £500, so a single implant is usually financed with other treatment.",
  },
  {
    q: "Is a bone graft included in the implant price?",
    a: `No. A bone graft is only needed when a scan shows there is not enough jawbone to hold the implant, and it is priced separately, from ${gbp(boneGraft.turkeyFromGBP)}. Whether you need one can only be confirmed from a CBCT scan.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: H1,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: PAGE_URL,
      inLanguage: "en-GB",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      image: `${SITE_URL}/opengraph-image`,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      isBasedOn: `${SITE_URL}/turkey-dental-price-index`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Turkey Teeth Cost", item: `${SITE_URL}/prices/turkey-teeth-cost` },
        { "@type": "ListItem", position: 3, name: "Dental Implants Turkey Cost", item: PAGE_URL },
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

export default function ImplantsCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{H1}</h1>
          <p className="text-xl text-blue-200 mb-3">Prices by implant brand, what a quote includes, and what it leaves out</p>
          <PageFreshness published="29 May 2026" reviewed="25 September 2026" pricingChecked={PRICES_LAST_VERIFIED_LABEL} className="text-blue-200" />
        </div>
      </div>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">
          <MedicalReviewBadge />

          <QuickAnswer question="How much does a dental implant cost in Turkey?">
            <p>
              A single dental implant with crown costs from {gbp(osstem.turkeyFromGBP)} in Turkey with an Osstem implant,
              from {gbp(medentika.turkeyFromGBP)} with Medentika and from {gbp(straumann.turkeyFromGBP)} with Straumann.
              The equivalent UK private price is typically {UK_SINGLE_RANGE}. A full arch of fixed teeth
              costs from {gbp(allOn4.turkeyFromGBP)} (All-on-4) or {gbp(allOn6.turkeyFromGBP)} (All-on-6) per arch,
              including hotel and transfers. The final price depends on the number of implants, the brand, whether a
              bone graft is needed, and flights for the two trips most implant treatment requires.
            </p>
          </QuickAnswer>

          <AtAGlance
            facts={[
              { label: "Pricing checked", value: PRICES_LAST_VERIFIED_LABEL },
              { label: "Single implant + crown", value: `${gbp(osstem.turkeyFromGBP)}–${gbp(straumann.turkeyFromGBP)}` },
              { label: "Typical trips to Turkey", value: "2" },
              { label: "Time between trips", value: "3–6 months" },
              { label: "Hotel included", value: "Full-arch packages only" },
              { label: "Flights included", value: "No" },
              { label: "Bone graft included", value: `No — from ${gbp(boneGraft.turkeyFromGBP)}` },
              { label: "Scan before final price", value: "Yes (CBCT)" },
            ]}
          />

          <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Dental implant prices in Turkey vs the UK</h2>
          <PriceRows
            records={[osstem, medentika, straumann, boneGraft, allOn4, allOn6]}
            caption="Dental implant prices: Turkey vs UK private"
          />
          <p className="text-xs text-gray-500">
            Indicative partner-clinic list prices, checked {PRICES_LAST_VERIFIED_LABEL}. The difference column compares
            treatment fees only and excludes travel. Full dataset:{" "}
            <Link href="/turkey-dental-price-index" className="text-[#1e40af] hover:underline">Turkey Dental Price Index 2026</Link>.
          </p>

          <h2 id="what-is-an-implant" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What the price pays for</h2>
          <p className="mb-4">
            A dental implant is a titanium post placed in the jawbone to act as an artificial tooth root. A connector
            called an abutment sits on top of the implant, and a crown — the visible tooth — is fixed to the abutment.
            The Turkey prices above cover all three parts plus the steps below.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 my-4">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Included in a single-implant price</h3>
              <ul className="space-y-1 text-sm">
                {osstem.includes.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-green-600" aria-hidden="true">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Not included</h3>
              <ul className="space-y-1 text-sm">
                {osstem.excludes.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-red-500" aria-hidden="true">✗</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mb-4">
            The number of implants is not the same as the number of replacement teeth. One implant carries one crown,
            but a bridge can replace three teeth on two implants, and a full-arch restoration such as All-on-4 replaces
            a whole row of 10–14 teeth on four implants. That is why a full arch costs far less than the same number of
            single implants.
          </p>

          <h2 id="total-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">What you will actually spend: the four parts of the total</h2>
          <p className="mb-4">
            The full cost of implant treatment in Turkey is the{" "}
            <Link href="/methodology#total-cost" className="text-[#1e40af] font-semibold hover:underline">Turkey Treatment Total Cost</Link>:
            Clinical Cost + Prosthetic Cost + Travel Cost + Follow-up Risk Allowance. The prices on this page cover the
            first two. For a single implant you also pay for flights, and hotel, for two separate trips — so the travel
            share of the total is largest when only one or two implants are placed. It also pays to set money aside in
            case you need an extra trip or a UK dentist&apos;s appointment after treatment.
          </p>

          <h2 id="brands" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why the brand changes the price</h2>
          <p className="mb-4">
            Implant brand is the biggest single price variable for a single implant: Straumann costs{" "}
            {gbp(straumann.turkeyFromGBP - osstem.turkeyFromGBP)} more than Osstem at partner clinics. The brands on
            this page differ mainly in manufacturer, published research history and how easily a dentist elsewhere can
            source matching parts for later repairs.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Straumann (Switzerland)</strong> — one of the most widely researched implant systems; parts are stocked by many UK practices.</li>
            <li><strong>Medentika (Germany)</strong> — a mid-priced system that is part of the Straumann Group.</li>
            <li><strong>Osstem (South Korea)</strong> — one of the world&apos;s largest implant manufacturers by volume and the entry price point at partner clinics.</li>
          </ul>
          <p className="mb-4">
            Ask for the brand and implant model in writing on your quote. A UK dentist who needs to repair or replace a
            crown later will need to know exactly which system was used.
          </p>

          <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">Why most implants need two trips</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li><strong>First trip (3–5 days):</strong> consultation, CBCT scan and implant placement. A temporary tooth is fitted before you fly home.</li>
            <li><strong>Healing at home (3–6 months):</strong> the implant fuses with the jawbone (osseointegration).</li>
            <li><strong>Second trip (a few days):</strong> the permanent crown is made, fitted and adjusted.</li>
          </ol>
          <p className="mb-4">
            All-on-4 and All-on-6 follow the same pattern: a fixed temporary arch on the first trip, and the final arch
            on the second. The full process is set out in the{" "}
            <Link href={IMPLANT_INTENT_OWNERS.procedure} className="text-[#1e40af] font-semibold hover:underline">dental implants in Turkey guide</Link>.
          </p>

          <ComparisonTable
            id="turkey-vs-uk"
            title="Turkey vs UK implants: the trade-offs beyond price"
            options={["Turkey", "UK private"]}
            rows={[
              { factor: "Treatment fee (single implant + crown)", values: [`${gbp(osstem.turkeyFromGBP)}–${gbp(straumann.turkeyFromGBP)}`, UK_SINGLE_RANGE] },
              { factor: "Travel", values: ["Flights and time off for 2 trips", "Local appointments"] },
              { factor: "Number of appointments", values: ["Compressed into 2 short trips", "Spread over several months, near home"] },
              { factor: "Problems after treatment", values: ["Return trip to the clinic, or pay a UK dentist", "Same practice, a short journey away"] },
              { factor: "Regulator", values: ["Turkish Ministry of Health", "General Dental Council (GDC)"] },
              { factor: "Complaint route", values: ["Via the clinic and Turkish authorities", "Practice, then GDC or the Dental Complaints Service"] },
              { factor: "Best suited to", values: ["Patients with good general health who can travel twice", "Complex medical history or a need for frequent reviews"] },
            ]}
            caption="Turkey fees from the partner-clinic price list; UK ranges are typical private prices. See methodology."
          />

          <NotForYou
            title="Who implant treatment in Turkey may not suit"
            items={[
              "People who cannot travel twice within 3–6 months, or who could not return quickly if a problem appeared.",
              "Patients with uncontrolled diabetes, recent head or neck radiotherapy, or who take bone-affecting medication such as bisphosphonates — these need careful local assessment and monitoring.",
              "Heavy smokers who are not prepared to stop around surgery, because smoking raises the risk of implant failure.",
              "Anyone whose budget has no margin for a bone graft, an extra trip or a UK dentist's fees after treatment.",
            ]}
          />

          <DecisionTree
            title="Is Turkey the right choice for your implants?"
            steps={[
              { condition: "you need one or two implants and live close to a UK practice you trust", action: "compare the Turkey fee plus two trips against a local quote; the saving is smallest here." },
              { condition: "you need several implants or a full arch", action: "the fee difference is large enough to cover travel many times over; get a Turkey and a UK treatment plan and compare them line by line." },
              { condition: "you have a complex medical history or take bone-affecting medication", action: "get a UK dentist's assessment first and treat locally if they advise close monitoring." },
              { condition: "you are unsure whether you have enough bone", action: "you need a CBCT scan before any price is final — ask for one, in the UK or on your first day in Turkey." },
            ]}
          />

          <EvidenceBlock
            items={[
              { claim: `Implant + crown from ${gbp(osstem.turkeyFromGBP)} / ${gbp(medentika.turkeyFromGBP)} / ${gbp(straumann.turkeyFromGBP)}`, basis: "Partner clinic list prices — Turkey Dental Price Index", href: "/turkey-dental-price-index", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: `UK single implant + crown ${UK_SINGLE_RANGE}`, basis: "Typical UK private ranges (surveys and published practice price lists)", href: "/methodology#sources", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: "Percentage differences", basis: "Calculated: 1 − Turkey price ÷ UK price", href: "/methodology#calculation", checked: PRICES_LAST_VERIFIED_LABEL },
              { claim: "Going abroad for dental care: points to check", basis: "NHS — going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/", checked: "September 2026" },
            ]}
          />

          <FollowUpQuestions items={implantFollowUps(PATH)} />

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap mt-10">
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get My Implant Quote</Link>
            <Link href="/prices/all-on-6-dental-implants-turkey-package" className="inline-block border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">All-on-6 Package Details</Link>
          </div>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/guides/dental-implants-turkey", title: "Dental Implants Turkey: Complete Guide", desc: "Brands, procedure, timelines and everything else you need to know." },
            { href: "/guides/teeth-in-turkey", title: "Complete UK Patient Guide to Teeth in Turkey", desc: "Treatments, costs, safety and travel — the full picture." },
            { href: "/blog/full-mouth-implants-uk-vs-turkey", title: "Full Mouth Dental Implants Turkey Cost", desc: "Both arches, stage-by-stage costs and a worked monthly payment example." },
            { href: "/treatments/all-on-4-turkey", title: "All-on-4 Dental Implants Turkey", desc: `Full arch replacement from ${gbp(allOn4.turkeyFromGBP)} per arch.` },
            { href: "/treatments/all-on-6-turkey", title: "All-on-6 Dental Implants Turkey", desc: `Six-implant full arch from ${gbp(allOn6.turkeyFromGBP)} per arch.` },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors">
              <p className="font-semibold text-gray-900 mb-1">{l.title}</p>
              <p className="text-sm text-gray-600">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <CTASection title="Get a Free Implant Consultation" subtitle="Send your X-rays or photos and our team will prepare an itemised implant quote, including brand, within 24 hours." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
