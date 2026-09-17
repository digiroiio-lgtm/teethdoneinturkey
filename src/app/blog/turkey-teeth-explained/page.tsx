import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import SourcesList from "@/components/SourcesList";

export const revalidate = 86400;

// Expanded 2026-09-17 on recorded demand. This is the site's second-largest page
// by impressions (97 over 2026-09-10..09-16 at average position 35.2) and owns
// the definitional "turkey teeth" cluster. Three query families it ranked for
// without actually answering:
//
//   do turkey teeth look fake?   17 impr @ 32.35   <- the page's single biggest query
//   turkey teeth colour chart     2 impr @ 35.5
//   teeth colour chart turkey     1 impr @ 34
//
// The page discussed the look qualitatively ("bright white, opaque, uniform")
// but never answered the question as asked and contained no shade terminology at
// all — no VITA, no BL1-BL4 — while the competitor page ranking for it
// (yoursmileturkey.com, "Do Turkey Teeth Look Fake?") is built entirely around
// shade selection and translucency. Added: a direct question-and-answer section,
// a shade-chart explainer, FAQs with FAQPage schema (the page had none), and
// sources.
const TITLE = "Turkey Teeth Explained – UK Guide";
const DESCRIPTION =
  "What are 'Turkey teeth', do they look fake, and which shade is which? An honest explanation of the term, the look, and what UK patients should expect.";

const faqs = [
  {
    q: "Do Turkey teeth look fake?",
    a: "They look fake when the shade is too bright, the crowns are too opaque and every tooth is the same size and shape — and that combination is a choice, not an inevitable outcome of treatment in Turkey. The viral look comes from ultra-white bleach shades in a highly opaque material, fitted in a uniform row. Ask for a natural shade, a translucent ceramic such as E-max, and some variation in tooth length and shape, and the result is hard to distinguish from natural teeth. The decision that matters most is the shade you approve before anything is made.",
  },
  {
    q: "What is the Turkey teeth colour chart?",
    a: "It is the standard dental shade guide, most commonly the VITA classical guide, which runs from A1 to D4 across four hue families, plus a separate bleach range labelled BL1 to BL4 that is brighter than anything on the natural scale. BL1 is the brightest shade made and is the one most associated with the 'Turkey teeth' look. Natural adult teeth usually sit around A2 to A3.5. Any reputable clinic will agree your shade against a physical guide, in daylight, before your crowns or veneers are manufactured.",
  },
  {
    q: "Which shade looks most natural?",
    a: "For most UK patients, one or two steps brighter than their current shade — often around A1 or B1 — reads as a noticeably improved but believable smile. Going straight to BL1 from a natural A3 is the jump that gets noticed as dental work. Shade also has to suit your face: the brighter and more opaque the ceramic, the more it contrasts with skin tone and the whites of the eyes.",
  },
  {
    q: "Are Turkey teeth veneers or crowns?",
    a: "Most full-mouth cases marketed as 'Turkey teeth' are crowns rather than veneers. A veneer covers the front surface and needs roughly 0.3–0.5mm of enamel removed; a crown covers the whole tooth and requires reduction on every surface. That distinction matters far more than the shade, because it is irreversible. Confirm in writing which one you are being quoted for before you travel.",
  },
  {
    q: "What are Turkey teeth, exactly?",
    a: "'Turkey teeth' is a UK media term, not a dental procedure. It emerged around 2021–2022 to describe a particular outcome — heavily reduced teeth fitted with very bright, opaque porcelain — that became associated with cheap cosmetic dentistry abroad. The underlying treatments are ordinary crowns and veneers, performed in Turkey and everywhere else.",
  },
  {
    q: "How do they do Turkey teeth?",
    a: "A typical full-set case runs over five to seven days: consultation and X-rays on arrival, tooth preparation and impressions, a set of temporaries to wear while the laboratory works, a trial fit to check shade and bite, then final fitting and adjustment. The shade is agreed at the start and can usually still be changed at the trial-fit stage — which is the last point at which changing your mind is easy.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const metadata: Metadata = {
  alternates: { canonical: "/blog/turkey-teeth-explained" },
  title: TITLE,
  description: DESCRIPTION,
};

export default function TurkeyTeethExplainedPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-turkey-teeth-explained"
        path="/blog/turkey-teeth-explained"
        headline={TITLE}
        description={DESCRIPTION}
        datePublished="2026-01-01"
        dateModified="2026-09-17"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Turkey Teeth Explained – UK Guide", path: "/blog/turkey-teeth-explained" },
        ]}
      />
      <script
        id="faq-schema-turkey-teeth-explained"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Guide</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Turkey Teeth Explained: What UK Patients Need to Know</h1>
          <p className="text-gray-500 text-sm">Published January 2026 · Last updated 17 September 2026 · 9 min read</p>
          <MedicalReviewBadge />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>You&apos;ve heard the term &quot;turkey teeth&quot; — perhaps in a tabloid headline or from a concerned friend. But what does it actually mean, where did it come from, and does it reflect the reality of dental treatment in Turkey today? This guide separates the myths from the facts.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Does &quot;Turkey Teeth&quot; Mean?</h2>
          <p>The term &quot;turkey teeth&quot; emerged in the UK media around 2021–2022, used to describe an aesthetic associated with heavily filed-down teeth and very opaque, oversized porcelain veneers — typically characterised by bright white, uniform teeth that look artificial rather than natural.</p>
          <p>The term became tabloid shorthand after several celebrities publicised dramatically altered smiles following trips abroad. The association with Turkey specifically came from Turkey&apos;s dominance of the dental tourism market at that time.</p>

          <h2 id="look-fake" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Do Turkey Teeth Look Fake?</h2>
          <p>
            They look fake when three things happen together: the shade is too bright, the ceramic is too opaque, and
            every tooth is the same length and shape. Take any one of those away and the result stops announcing itself
            as dental work. None of the three is a consequence of being treated in Turkey — they are choices made in the
            treatment plan, and most of them are made before anything is manufactured.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">What makes them look fake</th>
                  <th className="px-4 py-3 text-left">What looks natural instead</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    fake: "A bleach shade (BL1–BL2) chosen on a screen rather than against a shade guide",
                    real: "One or two steps brighter than your current shade, agreed in daylight against a physical guide",
                  },
                  {
                    fake: "Highly opaque material that reflects light as a flat white block",
                    real: "A translucent ceramic such as E-max, which lets light through the edge the way enamel does",
                  },
                  {
                    fake: "Identical length, width and shape across every tooth",
                    real: "Central incisors slightly longer, natural variation between the pairs either side",
                  },
                  {
                    fake: "Bulky crowns that sit proud of the gum line",
                    real: "Emergence profiles shaped so the crown meets the gum like a tooth would",
                  },
                  {
                    fake: "A shade that ignores skin tone and the whites of the eyes",
                    real: "A shade checked against your own face, not against a stock photograph",
                  },
                ].map((row, i) => (
                  <tr key={row.fake} className={i % 2 === 0 ? "bg-white align-top" : "bg-gray-50 align-top"}>
                    <td className="px-4 py-3 text-gray-600">{row.fake}</td>
                    <td className="px-4 py-3 text-gray-600">{row.real}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The most common regret UK patients describe is not the country they travelled to — it is the shade they
            approved. That decision is reversible only by remaking the work.
          </p>

          <h2 id="shade-chart" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            The Turkey Teeth Colour Chart: What the Shades Actually Mean
          </h2>
          <p>
            There is no Turkey-specific shade chart. Clinics in Turkey use the same guides as UK practices — most often
            the VITA classical guide, which arranges natural tooth shades into four hue families, plus a separate bleach
            range that sits brighter than anything on the natural scale.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                  <th className="px-4 py-3 text-left">Shade range</th>
                  <th className="px-4 py-3 text-left">How it reads</th>
                  <th className="px-4 py-3 text-left">Who it suits</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    range: "BL1 – BL2",
                    reads: "Brighter than any natural tooth. This is the shade the term “Turkey teeth” was coined for.",
                    suits: "Patients who explicitly want a very white, obviously cosmetic smile and are comfortable with it being noticed.",
                  },
                  {
                    range: "BL3 – BL4",
                    reads: "Clearly whitened but still short of the bleach extreme.",
                    suits: "A bright result that photographs well without tipping into the flat-white look.",
                  },
                  {
                    range: "A1 / B1",
                    reads: "The brightest shades on the natural scale — white, but believably so.",
                    suits: "Most UK patients wanting a visible improvement that still reads as their own teeth.",
                  },
                  {
                    range: "A2 – A3.5",
                    reads: "Where most natural adult teeth already sit.",
                    suits: "Matching a single crown or a few veneers to surrounding natural teeth.",
                  },
                ].map((row, i) => (
                  <tr key={row.range} className={i % 2 === 0 ? "bg-white align-top" : "bg-gray-50 align-top"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{row.range}</td>
                    <td className="px-4 py-3 text-gray-600">{row.reads}</td>
                    <td className="px-4 py-3 text-gray-600">{row.suits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Two practical points. First, shade is agreed before manufacture and can usually still be adjusted at the
            trial-fit stage, but not after final cementation — so raise any doubt early. Second, crowns and veneers do
            not respond to whitening later on: whatever shade you choose is the shade you keep for the life of the work.
            If you have natural teeth that will remain visible alongside them, whiten those <em>first</em>, then match
            the new work to the result.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Is the &quot;Turkey Teeth&quot; Look the Only Option?</h2>
          <p><strong>Absolutely not.</strong> The &quot;turkey teeth&quot; look — bright white, opaque, uniform — is a specific aesthetic choice, and one that many patients actively want. It is not the default result of dental treatment in Turkey.</p>
          <p>Modern Turkish dental clinics offer a full spectrum of veneer aesthetics, from naturally translucent E-max veneers that are virtually indistinguishable from natural teeth to bolder, Hollywood-style smiles. Digital Smile Design technology lets you preview your result before any work is done — so what you get is precisely what you agreed to.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Did the Negative Association Develop?</h2>
          <p>The cases that attracted criticism typically involved three factors:</p>
          <ol className="list-decimal list-inside space-y-2 my-3">
            <li><strong>Patients choosing the lowest possible price</strong> — not all clinics are equal, and the very cheapest providers may use less skilled technicians or lower-grade materials.</li>
            <li><strong>Excessive tooth reduction</strong> — some cases involved aggressive preparation (filing down) of healthy teeth, which is unnecessary for modern thin-prep or no-prep veneers.</li>
            <li><strong>Aesthetic mismatch</strong> — patients and dentists not communicating clearly about the desired result, leading to veneers that didn&apos;t match patient expectations.</li>
          </ol>
          <p>None of these issues are inherent to Turkey — they are issues with clinic selection and communication, which affect dental tourism in any country.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Modern Veneers in Turkey Actually Look Like</h2>
          <p>The best Turkish dental clinics offer:</p>
          <ul className="list-disc list-inside space-y-2 my-3">
            <li><strong>Thin-prep veneers</strong> — minimal enamel removal, typically 0.3–0.5mm, preserving more tooth structure</li>
            <li><strong>Crowns</strong> — the whole tooth is reduced on every surface, which is what most full-mouth makeovers actually involve. See <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">veneers or crowns, and how much tooth is removed</Link></li>
            <li><strong>Natural-shade matching</strong> — translucent ceramics that mimic natural tooth colour gradients</li>
            <li><strong>Digital Smile Design previews</strong> — you see your new smile before treatment starts</li>
            <li><strong>Individual customisation</strong> — veneers are hand-finished by skilled ceramists to your specifications</li>
          </ul>
          <p>The days of obviously artificial &quot;chiclet&quot; veneers are largely behind the best Turkish clinics, which now compete on natural aesthetics as much as price.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Avoid a Bad Outcome in Turkey</h2>
          <p>The good news is that avoiding a poor result is straightforward if you follow these principles:</p>
          <ol className="list-decimal list-inside space-y-2 my-3">
            <li>Use a reputable dental tourism co-ordinator who has personally vetted clinics</li>
            <li>Choose a clinic with JCI accreditation or Ministry of Health certification</li>
            <li>Ask for the Digital Smile Design preview before any preparation begins</li>
            <li>Review the clinic&apos;s before-and-after portfolio and international patient reviews</li>
            <li>Confirm which veneer material is being used (E-max or zirconia for best results)</li>
            <li>Don&apos;t select based on price alone — a saving of £50/tooth is not worth compromising quality</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Reality in 2026</h2>
          <p>Turkey&apos;s dental tourism industry has matured significantly. The clinics that have survived and grown are those that deliver consistent, high-quality results — because in an era of social media and Google reviews, poor outcomes destroy reputations quickly. The industry leaders are investing in the best technology, training, and materials to compete on quality, not just price.</p>
          <p>Hundreds of thousands of UK patients have now had dental work done in Turkey with excellent outcomes. When you hear about &quot;turkey teeth&quot; gone wrong, remember that these represent a small minority of cases — typically involving the lowest-price providers — not the mainstream Turkish dental tourism industry.</p>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">Frequently Asked Questions</h2>
          <div className="space-y-5 my-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-5 last:border-0">
                <h3 className="font-semibold text-gray-900 mb-1">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <SourcesList
            sources={[
              { label: "NHS — Going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/" },
              { label: "NHS — Veneers", href: "https://www.nhs.uk/conditions/cosmetic-procedures/cosmetic-dentistry/veneers/" },
              { label: "General Dental Council — Choosing a dental professional", href: "https://www.gdc-uk.org/information-standards-guidance/information-for-patients" },
              { label: "Oral Health Foundation — Veneers and crowns", href: "https://www.dentalhealth.org/veneers" },
            ]}
          />

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">See real patient results</p>
            <p className="text-gray-600 text-sm mb-4">View our before-and-after gallery and read UK patient reviews before making any decisions.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/before-after" className="inline-block bg-[#1e40af] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm">Before &amp; After Gallery</Link>
              <Link href="/reviews" className="inline-block border border-[#1e40af] text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Patient Reviews</Link>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="font-semibold text-gray-900 mb-3">Related reading:</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/blog/is-it-safe-to-get-teeth-done-in-turkey" className="text-[#1e40af] hover:underline">→ Is it safe to get teeth done in Turkey?</Link></li>
              <li><Link href="/blog/risks-of-veneers-in-turkey" className="text-[#1e40af] hover:underline">→ Risks of veneers in Turkey</Link></li>
              <li><Link href="/blog/uk-dentist-vs-turkey-dentist" className="text-[#1e40af] hover:underline">→ UK dentist vs Turkey dentist comparison</Link></li>
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Further</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/treatments/veneers-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Treatment guide & pricing</span>
            </Link>
            <Link href="/treatments/dental-implants-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Dental Implants Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full treatment guide</span>
            </Link>
            <Link href="/treatments/all-on-4-turkey" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All-on-4 Turkey</span>
              <span className="text-xs text-gray-500 mt-0.5">Full arch restoration</span>
            </Link>
            <Link href="/prices/teeth-done-in-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">All Treatment Costs</span>
              <span className="text-xs text-gray-500 mt-0.5">Full price guide</span>
            </Link>
            <Link href="/prices/veneers-turkey-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Veneers Cost Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">Prices & comparisons</span>
            </Link>
            <Link href="/guides/teeth-in-turkey" className="flex flex-col bg-blue-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">📘 Teeth in Turkey Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">The complete patient guide</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
