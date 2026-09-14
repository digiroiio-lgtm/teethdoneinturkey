import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { patientCases } from "@/lib/patientCases";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/patient-stories`;

export const metadata: Metadata = {
  alternates: { canonical: "/patient-stories" },
  title: { absolute: "UK Patient Stories: Real Dental Treatment in Turkey | Teeth Done in Turkey" },
  description:
    "Real UK patient journeys — treatment received, Turkey cost, UK price comparison, saving and what to expect. Verified case studies from patients who have been.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Patient Stories", item: PAGE_URL },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#collection`,
  url: PAGE_URL,
  name: "UK Patient Stories: Real Dental Treatment in Turkey",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
  hasPart: patientCases.map((c) => ({
    "@type": "Article",
    headline: `${c.displayName} — ${c.treatment} in Turkey`,
    url: `${SITE_URL}/patient-stories/${c.slug}`,
  })),
};

function fmt(n: number) {
  return n.toLocaleString("en-GB");
}

export default function PatientStoriesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Patient Stories" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">Patient Stories</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">UK Patient Stories: Real Dental Treatment in Turkey</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Case studies from real UK patients — what treatment they had, what it cost in Turkey versus the UK, and what the experience was actually like.
          </p>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-gray-700 leading-relaxed mb-4">
              These case studies are drawn from verified patient reviews collected by Teeth Done in Turkey. Each one covers a real UK patient: the treatment they needed, why they chose Turkey, what they paid versus the UK equivalent, and what the experience was actually like from consultation to return home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Only verified information is included. Where data is missing or conflicting, it is omitted rather than estimated. For the full review library, see{" "}
              <Link href="/reviews" className="text-[#1e40af] font-semibold hover:underline">Patient Reviews</Link>. For visual results, see{" "}
              <Link href="/turkey-teeth-before-after" className="text-[#1e40af] font-semibold hover:underline">Before &amp; After Gallery</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patientCases.map((c) => (
              <Link
                key={c.slug}
                href={`/patient-stories/${c.slug}`}
                className="block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1e40af] font-extrabold text-lg">
                    {c.displayName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{c.displayName}</p>
                    <p className="text-sm text-gray-500">{c.reviewDate}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-blue-800 mb-3">{c.treatment}</p>
                {(c.turkeyCost || c.ukQuote || c.savingGBP) && (
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    {c.turkeyCost && (
                      <div className="bg-blue-50 rounded-lg p-2">
                        <p className="text-xs text-gray-500 mb-0.5">Turkey cost</p>
                        <p className="text-sm font-bold text-gray-900">£{fmt(c.turkeyCost)}</p>
                      </div>
                    )}
                    {c.ukQuote && (
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-xs text-gray-500 mb-0.5">UK quote</p>
                        <p className="text-sm font-bold text-gray-900">£{fmt(c.ukQuote)}</p>
                      </div>
                    )}
                    {c.savingGBP && c.savingPct && (
                      <div className="bg-green-50 rounded-lg p-2">
                        <p className="text-xs text-gray-500 mb-0.5">Saving</p>
                        <p className="text-sm font-bold text-green-700">£{fmt(c.savingGBP)} ({c.savingPct}%)</p>
                      </div>
                    )}
                  </div>
                )}
                <p className="text-xs text-[#1e40af] font-semibold">Read full story →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want a Personalised Cost Estimate?"
        subtitle="Tell us about your treatment needs and we'll send a free, written treatment plan with an accurate cost estimate — no obligation."
        buttonText="Get My Free Treatment Plan"
        buttonHref="/free-treatment-plan"
        whatsapp={true}
      />
    </>
  );
}
