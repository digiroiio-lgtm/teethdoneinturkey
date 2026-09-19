import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import KeyTakeaways from "@/components/KeyTakeaways";
import GuideTOC from "@/components/GuideTOC";
import FAQSection from "@/components/FAQSection";
import SourcesList from "@/components/SourcesList";
import RelatedLinksGrid from "@/components/RelatedLinksGrid";

export const revalidate = 86400;

// Repositioned 2026-09-11 onto the intent this URL actually ranks for.
//
// Over 2026-09-04..09-10 this page earned 69 impressions — the whole
// full-mouth-implant cluster lands here, and nowhere else on the site:
//   full mouth dental implants turkey price            13 @ 33.7
//   full mouth dental implant turkey costs             11 @ 30.8
//   full mouth dental implant turkey costs procedures   8 @ 28.0
//   full mouth dental implants cost turkey              8 @ 27.4
//   full set of teeth implants cost turkey              5 @ 38.0
//   full mouth dental implants turkey cost              3 @ 29.7
// Every one of those is a COST query, not a "UK vs Turkey" comparison query,
// but the title led on the comparison framing. Retitled to lead on cost and
// given sections matching the recorded wording ("full set of teeth",
// "procedures", "package"). The URL is deliberately unchanged — it is the
// ranking asset and the 2026-09-08 cost-merge regression is the standing
// reminder not to move demand onto a URL Google has not already picked.
export const metadata: Metadata = {
  alternates: { canonical: "/blog/full-mouth-implants-uk-vs-turkey" },
  title: { absolute: "Full Mouth Dental Implants Turkey Cost 2026" },
  description:
    "Full mouth dental implants in Turkey cost £8,000–£11,000 for All-on-4 (both arches) vs £24,000–£36,000 in the UK. 2026 prices, what's included, finance.",
};

const toc = [
  { id: "short-answer", label: "How much it costs" },
  { id: "price-table", label: "Turkey vs UK price table" },
  { id: "full-set", label: "Full set of teeth: both arches" },
  { id: "treatment-types", label: "All-on-4, All-on-6 or individual" },
  { id: "procedure", label: "The procedure, stage by stage" },
  { id: "included", label: "What's included and what isn't" },
  { id: "brands", label: "Implant brands used" },
  { id: "trips", label: "How many trips" },
  { id: "finance", label: "Paying monthly" },
  { id: "safety", label: "Risks and safety" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "How much do full mouth dental implants cost in Turkey?",
    answer:
      "A full mouth — both arches — costs £8,000–£11,000 for All-on-4 and £10,000–£14,000 for All-on-6 at the partner clinics used on this site, all-inclusive of hotel and airport transfers. A single arch starts from £4,500 (All-on-4) or £5,600 (All-on-6). The equivalent UK private cost is £24,000–£36,000 for All-on-4 and £30,000–£44,000 for All-on-6 across both arches.",
  },
  {
    question: "What does a full set of teeth implants cost in Turkey?",
    answer:
      "“A full set of teeth” normally means both arches restored. On implants that is a full-arch bridge on 4 or 6 posts per arch, so £8,000–£14,000 in Turkey depending on whether you have All-on-4 or All-on-6. Note that a full set of implants is a different treatment — and several times the price — of a full set of crowns or veneers, which starts at £2,800 for a 20-unit package.",
  },
  {
    question: "Is the full mouth implant price in Turkey a package price?",
    answer:
      "Yes. The quoted price covers the consultation, CBCT scan, extractions, implant placement, sedation, the temporary bridge, the permanent zirconia bridge on your second trip, hotel accommodation and airport and clinic transfers. Flights are never included. Bone grafting or a sinus lift, if your scan shows you need one, is quoted separately.",
  },
  {
    question: "How many implants do I need for a full mouth?",
    answer:
      "Between 8 and 12 in total for most patients — 4 or 6 per arch supporting a fixed bridge. One implant per missing tooth is rarely recommended for a full mouth: it costs considerably more, takes longer, and full-arch bridges on 4–6 implants have a long clinical track record. Your CBCT scan and bone density determine what is actually appropriate.",
  },
  {
    question: "Can I pay monthly for full mouth implants in Turkey?",
    answer:
      "Payment plans are available over 12, 24 or 36 months. As an illustration, a £9,000 All-on-4 case with a £1,000 deposit leaves £8,000 to finance — about £222 a month over 36 months at a 0% APR representative rate. Finance is not guaranteed: it is subject to a credit check and to the lender's approval, and your rate and available term depend on that assessment.",
  },
  {
    question: "How long does full mouth implant treatment take in Turkey?",
    answer:
      "Two trips for most patients. The first is 5–7 days for the scan, extractions, implant placement and a temporary fixed bridge you fly home with. You then heal for 3–6 months while the implants integrate with the bone. The second trip is 3–4 days for the permanent zirconia bridge. Some cases with favourable bone density can be completed in one longer visit.",
  },
];

export default function FullMouthImplantsUKvsTurkeyPage() {
  return (
    <>
      <article className="py-16 bg-white">
        <ArticleJsonLd
          id="article-schema-full-mouth-implants-uk-vs-turkey"
          path="/blog/full-mouth-implants-uk-vs-turkey"
          headline="Full Mouth Dental Implants Turkey Cost 2026"
          description="Full mouth dental implants in Turkey cost £8,000–£11,000 for All-on-4 (both arches) vs £24,000–£36,000 in the UK. 2026 prices, what's included, finance."
          datePublished="2026-04-01"
          dateModified="2026-09-11"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Full Mouth Dental Implants Turkey Cost 2026", path: "/blog/full-mouth-implants-uk-vs-turkey" },
          ]}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Implants</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Full Mouth Dental Implants Turkey: Cost and Prices in 2026</h1>
            <p className="text-gray-500 text-sm">Published April 2026 · Updated 11 September 2026 · 10 min read</p>
            <MedicalReviewBadge />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 id="short-answer" className="text-2xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">How Much Do Full Mouth Dental Implants Cost in Turkey?</h2>
            <p>
              <strong>Full mouth dental implants in Turkey cost £8,000–£11,000 for All-on-4 across both arches, or £10,000–£14,000 for All-on-6.</strong>{" "}
              A single arch starts from £4,500 (All-on-4) or £5,600 (All-on-6). Those prices are all-inclusive of the
              hotel and airport transfers, but not flights. The same treatment privately in the UK is £24,000–£36,000
              for All-on-4 and £30,000–£44,000 for All-on-6 across both arches — a saving of roughly two thirds.
            </p>

            <KeyTakeaways
              items={[
                "All-on-4, both arches: £8,000–£11,000 in Turkey vs £24,000–£36,000 in the UK.",
                "All-on-6, both arches: £10,000–£14,000 in Turkey vs £30,000–£44,000 in the UK.",
                "Single arch: from £4,500 (All-on-4) or £5,600 (All-on-6), hotel and transfers included.",
                "Most full mouth cases need two trips: 5–7 days, then 3–4 days after 3–6 months of healing.",
                "Flights, and any bone graft or sinus lift your scan shows you need, are priced separately.",
              ]}
            />

            <GuideTOC items={toc} />

            <h2 id="price-table" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Full Mouth Implant Prices: Turkey vs UK</h2>
            <div className="overflow-x-auto rounded-2xl shadow-sm">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Treatment</th>
                    <th className="px-4 py-3 text-right">UK Price</th>
                    <th className="px-4 py-3 text-right">Turkey Price</th>
                    <th className="px-4 py-3 text-right">Saving</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: "All-on-4 (single arch)", uk: "£12,000–£18,000", tr: "From £4,500", s: "63–75%" },
                    { t: "All-on-6 (single arch)", uk: "£15,000–£22,000", tr: "From £5,600", s: "63–75%" },
                    { t: "All-on-4 (both arches)", uk: "£24,000–£36,000", tr: "£8,000–£11,000", s: "67–69%" },
                    { t: "All-on-6 (both arches)", uk: "£30,000–£44,000", tr: "£10,000–£14,000", s: "67–68%" },
                    { t: "Individual implants (20, full mouth)", uk: "£40,000–£60,000", tr: "£5,000–£16,000", s: "73–88%" },
                  ].map((r, i) => (
                    <tr key={r.t} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">{r.t}</td>
                      <td className="px-4 py-3 text-right text-red-500 line-through">{r.uk}</td>
                      <td className="px-4 py-3 text-right text-[#1e40af] font-bold">{r.tr}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Save {r.s}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">
              The individual-implant row is calculated from this site&apos;s own per-unit prices: 20 implants with crowns at
              £250 each on an entry-level Osstem system, up to £800 each on Straumann. It is shown for completeness —
              see below for why it is rarely the right treatment plan. All figures are indicative until a clinician has
              reviewed your scan.
            </p>

            <h2 id="full-set" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">What Does a Full Set of Teeth Implants Cost in Turkey?</h2>
            <p>
              &ldquo;A full set of teeth&rdquo; almost always means both arches — upper and lower. On implants, that is a
              fixed bridge carried on 4 or 6 posts in each jaw, so <strong>£8,000–£14,000 in Turkey</strong> depending on
              which system you have. Both arches costs close to, and often slightly less than, two single-arch prices:
              the hotel stay, the transfers and much of the surgical time are shared across a single treatment plan
              rather than paid for twice.
            </p>
            <p>
              One distinction is worth making before you compare quotes, because it is the single most common source of
              confusion in Turkish dental pricing. A full set of <em>implants</em> replaces missing teeth at the root.
              A full set of <em>crowns or veneers</em> — what most people mean by &ldquo;Turkey teeth&rdquo; — reshapes
              teeth you still have, and starts from £2,800 for a 20-unit package. They are different treatments at very
              different prices, and a quote that looks unusually cheap for &ldquo;a full mouth&rdquo; is usually quoting
              the second.
            </p>
            <p>
              <Link href="/prices/turkey-teeth-cost" className="text-[#1e40af] font-semibold hover:underline">Compare every treatment price in the 2026 Turkey teeth cost guide →</Link>
            </p>

            <h2 id="treatment-types" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">All-on-4, All-on-6 or Individual Implants?</h2>
            <div className="space-y-4 my-4">
              {[
                {
                  name: "All-on-4 — from £4,500 per arch",
                  desc: "Four implants support a full arch of fixed teeth. The two posterior implants are angled to avoid the sinus and maximise bone contact. Often possible without bone grafting, which means lower cost and faster treatment.",
                  best: "Best for: most patients with adequate bone density",
                },
                {
                  name: "All-on-6 — from £5,600 per arch",
                  desc: "Six implants spread the bite load further and add stability. Usually recommended for patients with higher bite forces, those who grind their teeth, or where maximum longevity is the priority.",
                  best: "Best for: patients with good bone volume wanting maximum durability",
                },
                {
                  name: "Individual implants — £250–£800 each",
                  desc: "Each missing tooth gets its own implant and crown. Across a full mouth this is several times the price of a full-arch bridge, takes longer, and requires enough bone at every site. It is rarely recommended for a full mouth, and is normally reserved for replacing a small number of teeth.",
                  best: "Best for: replacing one or a few teeth, not a whole jaw",
                },
              ].map(item => (
                <div key={item.name} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-xs text-[#1e40af] font-semibold">{item.best}</p>
                </div>
              ))}
            </div>
            <p>
              Which of these is appropriate is a clinical decision, not a budget one. It depends on how much bone you
              have, where it is, and how it is distributed — which is what the CBCT scan on your first day is for.
            </p>

            <h2 id="procedure" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Full Mouth Dental Implant Turkey Costs: The Procedure Stage by Stage</h2>
            <p>
              Because the price is quoted as one package, it is not always obvious what you are paying for at each
              stage. This is the sequence, and where each stage sits against the quoted price:
            </p>
            <div className="overflow-x-auto rounded-2xl shadow-sm my-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                    <th className="px-4 py-3 text-left">Stage</th>
                    <th className="px-4 py-3 text-left">What happens</th>
                    <th className="px-4 py-3 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "1. Online assessment", w: "You send photographs and any recent X-ray or OPG. An indicative treatment plan and quote come back.", c: "Free" },
                    { s: "2. CBCT scan & plan", w: "Day one in Turkey: 3D scan, clinical examination, and the treatment plan confirmed or revised.", c: "Included" },
                    { s: "3. Extractions", w: "Any remaining unsalvageable teeth are removed, usually in the same appointment as surgery.", c: "Included" },
                    { s: "4. Implant placement", w: "4 or 6 posts placed per arch under local anaesthetic, with sedation available.", c: "Included" },
                    { s: "5. Temporary bridge", w: "A fixed temporary arch, same day or within a few days. You fly home with teeth.", c: "Included" },
                    { s: "6. Healing at home", w: "3–6 months of osseointegration, the implants fusing with the bone. Remote check-ins.", c: "No cost" },
                    { s: "7. Permanent bridge", w: "Second trip of 3–4 days: the definitive zirconia bridge is fitted and adjusted.", c: "Included" },
                    { s: "8. Guarantee & aftercare", w: "Written guarantee on the implants, plus UK-side aftercare co-ordination.", c: "Included" },
                    { s: "Bone graft / sinus lift", w: "Only if your scan shows insufficient bone volume at a planned implant site.", c: "Quoted separately" },
                    { s: "Flights", w: "Booked by you, on your own dates.", c: "Not included" },
                  ].map((r, i) => (
                    <tr key={r.s} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium whitespace-nowrap">{r.s}</td>
                      <td className="px-4 py-3 text-gray-600">{r.w}</td>
                      <td className="px-4 py-3 text-right font-semibold text-[#1e40af] whitespace-nowrap">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="included" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">What Is Included in the Turkey Package Price?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">🇹🇷 Turkey — typically included:</h3>
                <ul className="space-y-1 text-xs text-gray-600">
                  {[
                    "Full consultation and CBCT 3D scan",
                    "All extractions and surgical preparation",
                    "Implant placement (all posts)",
                    "Temporary arch on the day of surgery",
                    "All anaesthetic and sedation",
                    "Follow-up during your stay",
                    "Return trip: permanent zirconia bridge",
                    "Hotel accommodation and airport transfers",
                    "10-year implant guarantee",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-1.5"><span className="text-green-500">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">🇬🇧 UK — often charged separately:</h3>
                <ul className="space-y-1 text-xs text-gray-600">
                  {[
                    "CBCT scan (£200–£500)",
                    "Extractions (£100–£300 each)",
                    "Bone grafting (£500–£2,000 per site)",
                    "Sinus lift (£1,000–£2,500 per side)",
                    "Sedation (£300–£800)",
                    "Temporary prosthetic (£500–£1,500)",
                    "Each follow-up appointment",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-1.5"><span className="text-red-400">✗</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p>
              Not included in the Turkey price, and worth budgeting for: <strong>flights</strong> (two return trips),
              travel insurance that covers planned dental treatment abroad, any extra nights beyond the package, and{" "}
              <strong>bone grafting or a sinus lift</strong> if your scan shows you need one. Ask for these to be
              itemised before you pay a deposit rather than after your scan.
            </p>
            <p>
              When the UK add-ons above are counted, the real UK cost of a complex All-on-4 case across both arches
              frequently exceeds <strong>£40,000</strong>.
            </p>

            <h2 id="brands" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Implant Brands Used in Turkey</h2>
            <p>
              The biggest misconception in dental tourism is that a lower price means an inferior implant. The brand
              matters — it affects long-term success rates, guarantee terms, and whether a UK dentist can service the
              work later. Partner clinics used on this site place internationally certified systems:
            </p>
            <ul className="list-disc list-inside space-y-2 my-3">
              <li><strong>Straumann (Switzerland)</strong> — the most researched implant system in the world, with the widest body of long-term outcome data.</li>
              <li><strong>Nobel Biocare (Sweden)</strong> — the brand most associated with the development of the All-on-4 protocol.</li>
              <li><strong>Astra Tech (Dentsply)</strong> — a premium European system known for its OsseoSpeed surface.</li>
              <li><strong>Osstem (South Korea)</strong> — widely used across Europe, and the entry-tier option behind the from-£250 single-implant price.</li>
            </ul>
            <p className="text-sm text-gray-500">
              Ask which system is in your quote and get it in writing. A quote that will not name the implant brand is a
              quote you cannot compare, and it is the detail that most often explains a price gap between two clinics.
            </p>

            <h2 id="trips" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">How Many Trips to Turkey Are Needed?</h2>
            <p>Most full mouth implant patients need two trips:</p>
            <ol className="list-decimal list-inside space-y-3 my-3">
              <li>
                <strong>First trip (5–7 days):</strong> consultation, CBCT scan, any necessary extractions, implant
                placement surgery, and a temporary fixed bridge to take home.
              </li>
              <li>
                <strong>Second trip (3–4 days, 3–6 months later):</strong> once osseointegration has occurred, the
                permanent zirconia bridge is fitted and adjusted.
              </li>
            </ol>
            <p>
              Some cases — particularly where all teeth are already missing and bone density is favourable — may allow
              the permanent bridge to be delivered in a single extended trip. Your dentist will assess this after
              reviewing your CBCT scan, not before.{" "}
              <Link href="/travel-to-turkey/how-long-stay-turkey-dental" className="text-[#1e40af] font-semibold hover:underline">
                How long you need to stay in Turkey
              </Link>{" "}
              goes through the timings in more detail.
            </p>

            <h2 id="finance" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Paying Monthly for Full Mouth Implants</h2>
            <p>
              A full mouth case is the largest single treatment on this site, so it is the one most often spread over a
              payment plan. The worked example below shows how a plan is structured. It is an illustration built from
              the package prices above — not a quote, and not an offer of credit.
            </p>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 my-6">
              <p className="text-sm font-bold uppercase tracking-wide text-[#1e40af] mb-3">Example Treatment Scenario</p>
              <ul className="space-y-1.5 text-sm text-gray-800 mb-4">
                <li><strong>Treatment:</strong> All-on-4, both arches</li>
                <li><strong>Treatment price:</strong> £9,000 (hotel and transfers included, flights not included)</li>
                <li><strong>Deposit:</strong> £1,000</li>
                <li><strong>Balance to finance:</strong> £8,000</li>
              </ul>
              <div className="overflow-x-auto rounded-xl bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                      <th className="px-4 py-2.5 text-left">Term</th>
                      <th className="px-4 py-2.5 text-right">Monthly payment</th>
                      <th className="px-4 py-2.5 text-right">Total repayable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { term: "6 months", m: "£1,333", t: "£9,000" },
                      { term: "12 months", m: "£667", t: "£9,000" },
                      { term: "18 months", m: "£444", t: "£9,000" },
                      { term: "24 months", m: "£333", t: "£9,000" },
                      { term: "36 months", m: "£222", t: "£9,000" },
                    ].map((r, i) => (
                      <tr key={r.term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-2.5 font-medium">{r.term}</td>
                        <td className="px-4 py-2.5 text-right font-bold text-[#1e40af]">{r.m}</td>
                        <td className="px-4 py-2.5 text-right text-gray-600">{r.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                Monthly figures are the £8,000 balance divided by the term at a <strong>0% APR representative</strong>{" "}
                rate, rounded to the nearest pound, and include the £1,000 deposit in the total repayable. They are an
                example calculation, not a credit offer. Finance is <strong>subject to a credit check and to the
                lender&apos;s approval</strong> — approval is not guaranteed and not everyone will qualify. The rate,
                term and deposit you are offered depend on the lender&apos;s assessment of your circumstances, and at any
                APR above 0% the total repayable will be higher than the figures shown.
              </p>
            </div>
            <p>
              For a single arch with no deposit, All-on-4 at £4,500 works out at approximately £125 a month over 36
              months, and All-on-6 at £5,600 at approximately £156 a month, on the same 0% APR representative basis.
            </p>
            <p>
              <Link href="/monthly-payment" className="text-[#1e40af] font-semibold hover:underline">See monthly payment figures for every treatment →</Link>
              <br />
              <Link href="/finance-options-uk" className="text-[#1e40af] font-semibold hover:underline">Dental finance in the UK: payment plans, loans and bad credit →</Link>
            </p>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">Is Full Mouth Implant Treatment Safe in Turkey?</h2>
            <p>
              Full-arch implant treatment is a surgical procedure and carries real risks wherever it is performed:
              implant failure, infection, nerve injury, sinus complications, and the possibility that the bone does not
              integrate as planned. Those risks are not removed by choosing any particular country. What changes between
              clinics is how carefully you are assessed beforehand, which system is placed, and what happens if
              something goes wrong afterwards.
            </p>
            <p>
              Treatment abroad adds one specific complication: you will be back in the UK during the months when
              problems are most likely to show up. Before you book, establish in writing what the guarantee covers, who
              pays for a return flight if a remedial visit is needed, and which UK dentist will see you in the meantime.
              The NHS advises weighing exactly this before arranging dental care abroad.
            </p>
            <p>
              Partner clinics used on this site hold JCI accreditation or Turkish Ministry of Health certification and
              provide written guarantees. We only work with clinics our team has assessed, and we do not recommend
              clinics on price alone.{" "}
              <Link href="/blog/risks-of-turkey-teeth" className="text-[#1e40af] font-semibold hover:underline">
                The risks of getting your teeth done in Turkey
              </Link>{" "}
              covers this in full.
            </p>

            <div className="mt-8 p-6 bg-[#1e40af] text-white rounded-2xl">
              <p className="font-bold text-xl mb-2">Get a free full mouth implant quote</p>
              <p className="text-blue-200 mb-4">Send us your X-rays or a panoramic scan. We&apos;ll prepare a detailed All-on-4 / All-on-6 treatment plan and an itemised cost estimate within 24 hours.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-consultation" className="inline-block bg-white text-[#1e40af] px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors text-sm">Get Free Quote</Link>
                <Link href="/free-treatment-plan" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Free Treatment Plan</Link>
                <Link href="/price-calculator" className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">Price Calculator</Link>
              </div>
            </div>

            <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">FAQs</h2>
          </div>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Full Mouth Implants in Turkey: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SourcesList
          sources={[
            { label: "NHS — Going abroad for dental care", href: "https://www.nhs.uk/live-well/seasonal-health/going-abroad-for-dental-care/" },
            { label: "NHS — Dental implants", href: "https://www.nhs.uk/conditions/dental-implants/" },
            { label: "General Dental Council — Dental treatment abroad", href: "https://www.gdc-uk.org/" },
            { label: "USHAŞ — Turkey Health Tourism Authority", href: "https://ushas.gov.tr/" },
          ]}
        />

        <RelatedLinksGrid
          title="Next Steps"
          links={[
            { title: "Turkey Teeth Cost: 2026 Price Guide", desc: "Every treatment price on one page, with UK comparisons.", href: "/prices/turkey-teeth-cost" },
            { title: "Dental Implants in Turkey: Complete Guide", desc: "Brands, procedure, timelines and single-implant costs.", href: "/guides/dental-implants-turkey" },
            { title: "All-on-4 Turkey", desc: "Full-arch restoration on 4 implants, from £4,500 per arch.", href: "/treatments/all-on-4-turkey" },
            { title: "All-on-6 Turkey", desc: "Full-arch restoration on 6 implants, from £5,600 per arch.", href: "/treatments/all-on-6-turkey" },
            { title: "All-on-6 Package Breakdown", desc: "What the £5,600 all-inclusive package actually covers.", href: "/prices/all-on-6-dental-implants-turkey-package" },
            { title: "Dental Implants Turkey Cost", desc: "Single-implant prices by brand, and add-on costs.", href: "/prices/dental-implants-turkey-cost" },
            { title: "Monthly Payment Plans", desc: "Monthly figures for every treatment, from £82/month.", href: "/monthly-payment" },
            { title: "Dental Finance UK", desc: "Payment plans, dental loans and what bad credit means.", href: "/finance-options-uk" },
            { title: "Complete UK Patient Guide", desc: "Everything about getting teeth done in Turkey — costs, safety, travel.", href: "/guides/teeth-in-turkey" },
          ]}
        />
      </div>
    </>
  );
}
