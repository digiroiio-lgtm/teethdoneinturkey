import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GuideTOC from "@/components/GuideTOC";
import KeyTakeaways from "@/components/KeyTakeaways";
import SourcesList from "@/components/SourcesList";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/teeth-done-in-turkey-problems`;
const TITLE = "Turkey Teeth Gone Wrong: Warning Signs & What to Do Next";
const H1 = "Turkey Teeth Gone Wrong: Warning Signs, Your Options, and What It Costs to Put Right";
const DESCRIPTION =
  "What to do if Turkey teeth go wrong: warning signs, how UK dentists treat failed crowns and implants, what remedial work costs, and your real options.";
const DATE_PUBLISHED = "2026-05-29";
const DATE_MODIFIED = "2026-09-24";

export const metadata: Metadata = {
  alternates: { canonical: "/teeth-done-in-turkey-problems" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
};

// This page deliberately owns the *aftermath* intent — "my Turkey teeth have
// gone wrong, what now" — rather than prevention. Prevention is owned by the
// safety cluster hub, /guides/turkish-veneers-safety, which this page links to
// instead of duplicating. Keeping the two separated is what stops the safety
// cluster cannibalising itself.
const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-it-means", label: "What “Gone Wrong” Actually Means" },
  { id: "warning-signs", label: "Warning Signs: Early and Late" },
  { id: "how-common", label: "How Common Is It? The UK Evidence" },
  { id: "common-problems", label: "The Problems Patients Report" },
  { id: "what-to-do-now", label: "What to Do Right Now" },
  { id: "uk-cost", label: "What It Costs to Fix in the UK" },
  { id: "can-it-be-fixed", label: "Can It Be Fixed?" },
  { id: "recourse", label: "Your Rights and Recourse" },
  { id: "avoid", label: "How to Avoid This in the First Place" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    question: "What does “Turkey teeth gone wrong” mean?",
    answer:
      "It is a media shorthand for dental work carried out abroad — most often crowns or veneers fitted over heavily reduced teeth — that later fails or causes problems. In practice it covers a wide range of outcomes: crowns that debond or fracture, persistent pain or sensitivity, gum inflammation around the margins, nerve death requiring root canal treatment, failed implants, and results that simply look wrong. The phrase describes an outcome, not a single clinical condition.",
  },
  {
    question: "How soon after treatment do problems usually appear?",
    answer:
      "It varies. Some problems are immediate: pain on biting, a crown that feels high, or bleeding gums in the first weeks. Others develop over months or years, such as recurrent decay under a crown margin, nerve death in a heavily prepared tooth, or an implant that gradually loses bone support. A comfortable first few weeks is reassuring but not conclusive, which is why a UK check-up a few months after treatment is worth booking.",
  },
  {
    question: "Will a UK dentist fix Turkey teeth?",
    answer:
      "Most will treat pain, infection and other urgent problems — that is a matter of clinical need, not where the original work was done. Many are more reluctant to take over long-term responsibility for restorations they did not place and cannot guarantee, and some will decline to repair rather than replace them. Expect an honest assessment rather than a quick repair, and see our guide on what UK dentists will and will not do.",
  },
  {
    question: "How much does it cost to fix Turkey teeth in the UK?",
    answer:
      "There is no single figure, because it depends entirely on what failed and how much tooth is left. The best available UK evidence is a 2022 British Dental Association survey of 1,000 dentists: 65% said remedial work had cost their patients at least £500, 51% said more than £1,000, and one in five reported cases costing over £5,000. Treat those as indicative ranges reported by dentists, not as a quote — only an examination can establish your own cost.",
  },
  {
    question: "Can I complain to the GDC about a dentist in Turkey?",
    answer:
      "No. The General Dental Council regulates dental professionals practising in the UK, and a dentist working in Turkey is outside its jurisdiction, so it cannot investigate your complaint or take action against them. Your first route is the clinic's own complaints process and any written guarantee you hold. The GDC's own patient guidance on going abroad for treatment sets out what to establish before you travel.",
  },
  {
    question: "Are my Turkey teeth definitely going to fail?",
    answer:
      "No. Most patients who travel for treatment do not experience failure, and problems are concentrated among cases where teeth were heavily reduced, planning was rushed, or the clinic was chosen on price alone. If your teeth are comfortable, your gums are healthy and your bite feels even, there is no reason to assume a problem is coming. Keep up routine UK check-ups so anything developing is caught early.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: PAGE_URL,
      inLanguage: "en-GB",
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      image: `${SITE_URL}/opengraph-image`,
      author: { "@type": "Organization", name: "Teeth Done in Turkey", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Turkey Teeth Gone Wrong", item: PAGE_URL },
      ],
    },
  ],
};
// FAQPage schema is deliberately NOT emitted here: <FAQSection> renders its own
// FAQPage block from the same `faqs` array, and two FAQPage nodes on one URL is
// invalid. This mirrors /prices/turkey-teeth-cost and /guides/turkish-veneers-safety.

// Figures in this table are the BDA's own published survey findings, kept as
// reported percentages rather than converted into a headline "average cost",
// which the survey does not support.
const bdaFindings = [
  { finding: "Had examined a patient treated abroad", share: "94%" },
  { finding: "Had treated complications following treatment abroad", share: "86%" },
  { finding: "Named crowns as most likely to need follow-up work", share: "87%" },
  { finding: "Named implants as most likely to need follow-up work", share: "85%" },
  { finding: "Reported failing or failed treatment as a presenting problem", share: "86%" },
  { finding: "Reported pain as a presenting problem", share: "76%" },
  { finding: "Reported poorly executed treatment as a presenting problem", share: "72%" },
];

const remedialCost = [
  { band: "At least £500", share: "65% of dentists reported cases in this range" },
  { band: "More than £1,000", share: "51% of dentists reported cases in this range" },
  { band: "More than £5,000", share: "1 in 5 dentists reported cases in this range" },
];

const warningSigns = [
  {
    when: "First days to weeks",
    signs: [
      "Pain when biting, or one tooth feeling “high” against the others",
      "Sharp sensitivity to cold or sweet things that is not settling",
      "Gums that stay red, swollen or bleed around the new margins",
      "A crown or veneer that feels loose, clicks, or catches floss",
      "A bite that feels uneven, or new jaw ache and headaches",
    ],
  },
  {
    when: "Months to years",
    signs: [
      "A dull ache or throbbing in a treated tooth — a possible sign the nerve has died",
      "A dark line, grey shadow or visible gap at the gum margin",
      "Recurring bad taste or smell around a specific tooth",
      "A crown that debonds, chips or fractures",
      "Gum recession exposing the edge of a restoration",
      "An implant that feels mobile, or gum swelling around it",
    ],
  },
];

const immediateSteps = [
  {
    step: "Deal with pain, swelling or infection first",
    detail:
      "Facial swelling, fever, difficulty swallowing or spreading infection is urgent and should be seen the same day — contact your dentist, NHS 111, or an urgent dental care service. Regulatory and guarantee questions can wait; a spreading dental infection cannot.",
  },
  {
    step: "Get an independent UK assessment and X-rays",
    detail:
      "Before you accept anyone's diagnosis — including the original clinic's — have a UK dentist examine the work and take radiographs. You need to know which teeth are affected, whether the nerves are vital, and how much natural tooth remains. That assessment governs every option that follows.",
  },
  {
    step: "Collect your records",
    detail:
      "Ask the Turkish clinic for your full treatment record: the written treatment plan, what was done to each tooth, the materials and implant brands used, before and after radiographs, and the guarantee terms. Put the request in writing and keep copies. Records are the single thing that most improves both your clinical options and any claim.",
  },
  {
    step: "Open a formal complaint with the clinic",
    detail:
      "Most reputable clinics have a complaints process and a written guarantee, and many will fund remedial work or a return visit. Do this in writing, set out the problem factually, attach your UK dentist's findings, and keep every reply.",
  },
  {
    step: "Do not rush into replacement",
    detail:
      "Stabilising a problem is not the same as redoing the work. Where teeth have already been heavily reduced, every replacement removes a little more. Get a considered plan — and, for anything extensive, a second opinion — before committing to another full set.",
  },
];

export default function TurkeyTeethProblemsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Turkey Teeth Gone Wrong" }]} />
          </div>
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Honest Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Written for UK patients who already have a problem — and for anyone deciding whether to risk one.
          </p>
          <p className="mt-3 text-sm text-blue-300/70">Last updated: 24 September 2026</p>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quick-answer" className="text-xl font-bold text-gray-900 mb-2 scroll-mt-24">
            Quick Answer: What Should You Do If Your Turkey Teeth Have Gone Wrong?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
            Treat pain, swelling or infection as urgent and get seen in the UK straight away. Once you are stable, get an
            independent UK examination with X-rays to establish what has actually failed and how much natural tooth is
            left, request your full treatment records from the Turkish clinic in writing, and raise a formal complaint
            under your guarantee. Remedial work in the UK is not cheap — in a 2022 British Dental Association survey of
            1,000 dentists, 65% reported cases costing patients at least £500 and 51% more than £1,000 — so establish
            whether the original clinic will fund the repair before you pay for it twice.
          </p>

          <GuideTOC items={toc} />

          <KeyTakeaways
            items={[
              "Most patients treated abroad do not have work fail — but when it does, crowns and implants are the restorations UK dentists most often see needing follow-up.",
              "Urgent symptoms (facial swelling, fever, spreading infection) need same-day UK care, ahead of any complaint or guarantee question.",
              "Get an independent UK assessment with radiographs before agreeing to any replacement — including from the original clinic.",
              "The General Dental Council cannot investigate a dentist practising in Turkey; your guarantee and the clinic's complaints process are your practical routes.",
              "Every redo removes a little more tooth, so replacing a full set again is a clinical decision, not just a cosmetic one.",
            ]}
          />

          <h2 id="what-it-means" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What “Turkey Teeth Gone Wrong” Actually Means
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            “Turkey teeth” began as British media shorthand for the very white, very uniform crowns that UK patients
            were returning with from dental tourism trips. “Turkey teeth gone wrong” is the follow-on phrase, and it
            describes an outcome rather than a diagnosis. It covers everything from a purely cosmetic disappointment —
            teeth that look too bright or too bulky — through to genuine clinical failure: restorations that debond or
            fracture, nerves that die in heavily prepared teeth, gum disease around poorly fitting margins, and implants
            that fail to integrate.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The distinction matters, because the two ends of that range need completely different responses. A shade you
            dislike is a remake conversation. Pain, mobility or infection is a clinical problem that needs examining now.
            One important technical point sits underneath most of the serious cases: much of what is sold as “veneers”
            abroad is in fact <strong>crowns</strong>, which require the tooth to be reduced on all sides rather than
            just the front. That is why some outcomes cannot simply be reversed — there is no unprepared tooth to go
            back to. Our guide to{" "}
            <Link href="/guides/turkey-teeth-veneers-or-crowns" className="text-[#1e40af] font-semibold hover:underline">
              veneers versus crowns
            </Link>{" "}
            sets out how much tooth each one removes.
          </p>

          <h2 id="warning-signs" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Warning Signs: Early and Late
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some problems announce themselves within days. Others are silent for years, which is the reason a
            comfortable first month is reassuring but not proof that everything is sound. These are the signs UK
            dentists most commonly see patients present with.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {warningSigns.map((group) => (
              <div key={group.when} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{group.when}</h3>
                <ul className="space-y-2">
                  {group.signs.map((s) => (
                    <li key={s} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-amber-500 flex-shrink-0">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-red-900 mb-2">Seek same-day care if you have any of these</h3>
            <p className="text-sm text-red-800">
              Facial or neck swelling, fever, difficulty swallowing or opening your mouth, or pain that is rapidly
              worsening. These can indicate spreading infection and are treated as dental emergencies in the UK.
              Contact your dentist, NHS 111 or an urgent dental care service rather than waiting for the Turkish clinic
              to reply.
            </p>
          </div>

          <h2 id="how-common" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            How Common Is It? The UK Evidence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Reliable figures on how often treatment abroad fails are genuinely hard to come by, because nobody tracks
            outcomes across borders. What does exist is UK-side evidence about what dentists here are seeing. In 2022
            the British Dental Association surveyed 1,000 dentists about patients who had travelled abroad for
            treatment:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                    BDA 2022 survey of 1,000 UK dentists
                  </th>
                  <th className="text-right px-4 py-3 font-bold text-gray-900 border-b border-gray-200 whitespace-nowrap">
                    Share of dentists
                  </th>
                </tr>
              </thead>
              <tbody>
                {bdaFindings.map((row) => (
                  <tr key={row.finding} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 text-gray-700">{row.finding}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">{row.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Read that carefully, because it is routinely misquoted. It does <strong>not</strong> mean 86% of dental
            tourism patients have complications. It means 86% of the dentists surveyed had, at some point, treated at
            least one such patient — a measure of how widely spread these cases are across UK practices, not of how
            likely your own treatment is to fail. It is still a meaningful signal: crowns and implants, the two
            treatments most commonly sold in Turkey packages, are precisely the two the survey identified as most
            likely to need follow-up work.
          </p>

          <h2 id="common-problems" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            The Problems Patients Report
          </h2>
          <div className="space-y-5 mb-4">
            {[
              {
                title: "Crowns and veneers that fail mechanically",
                desc: "Debonding, chipping and fracture are the most frequently reported restorative problems. Causes include inadequate tooth preparation, poor margins, a bite that was never properly adjusted, or laboratory work rushed to fit a one-week treatment window. A crown that comes off repeatedly is usually a sign of an underlying fit or bite problem, not bad luck.",
              },
              {
                title: "Nerve death and root canal treatment",
                desc: "Reducing a healthy tooth generates heat and removes protective enamel and dentine. Where preparation was aggressive — particularly on multiple healthy front teeth at once — some nerves do not survive it. That can surface months later as a dull ache, a darkening tooth or an abscess, and the fix is root canal treatment through the new crown, or removing it altogether.",
              },
              {
                title: "Gum inflammation and recession",
                desc: "Crown margins that sit too deep, overhang, or fit imperfectly trap plaque where a toothbrush cannot reach. The result is persistent bleeding, inflammation and eventually recession, which exposes the restoration edge and produces the dark line patients often notice first.",
              },
              {
                title: "Implant complications",
                desc: "Implant failure occurs everywhere, not only abroad, and the risk factors are the same: smoking, insufficient bone, uncontrolled diabetes and infection. What differs with treatment abroad is what happens next — implant systems vary by manufacturer, and a UK dentist needs to know the exact brand and size to source matching components. Without that record, restoring or removing the implant is considerably harder.",
              },
              {
                title: "Results that look wrong",
                desc: "Teeth that are too white, too uniform, too long or too bulky for the face. This is the outcome the phrase was coined for. It is usually a planning failure — no digital preview, no trial smile, a shade chosen from a chart under clinic lighting — rather than a technical one, and it is the category most likely to be remakeable without further tooth loss, provided the underlying teeth are healthy.",
              },
              {
                title: "Aftercare at a distance",
                desc: "The structural weakness of treatment abroad is not the dentistry itself; it is what happens in month seven. Reviewing a healing complication over WhatsApp is not equivalent to being seen, and the practical cost of returning for a small adjustment is high enough that patients often live with problems they would have had corrected locally.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="what-to-do-now" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What to Do Right Now: A Step-by-Step Checklist
          </h2>
          <ol className="space-y-4 mb-4">
            {immediateSteps.map((s, i) => (
              <li key={s.step} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1e40af] text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.step}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="uk-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            What It Costs to Put Right in the UK
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            There is no honest single answer, because the cost depends entirely on what failed and how much natural
            tooth survives underneath. Re-cementing one debonded crown and rebuilding an upper arch where several teeth
            have lost vitality are different orders of magnitude. The most reliable UK reference point remains the BDA
            survey, which asked dentists what remedial work had cost their patients:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                    Reported cost of remedial work
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200">
                    Reported by
                  </th>
                </tr>
              </thead>
              <tbody>
                {remedialCost.map((row) => (
                  <tr key={row.band} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.band}</td>
                    <td className="px-4 py-3 text-gray-700">{row.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Those are dentists&apos; reports of what their patients paid, not a price list, and they are now several
            years old. Use them to understand the scale of the risk rather than to budget. Two practical points the
            figures do not show: NHS treatment is generally limited to restoring oral health rather than redoing
            cosmetic work, so replacing a full set of crowns privately is usually a private cost; and travel insurance
            does not ordinarily cover dental complications arising from elective treatment you travelled for.
          </p>

          <h2 id="can-it-be-fixed" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Can It Be Fixed?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In most cases, yes — but “fixed” usually means rebuilt rather than restored to how things were before. What
            is realistically achievable depends on one thing above all: how much sound natural tooth is left. Where
            teeth were conservatively prepared and the problem is a poorly made restoration, remaking the crowns to a
            proper fit and shade often resolves it well. Where teeth were reduced to small cores and nerves have since
            died, the path is longer — root canal treatment, cores or posts, sometimes crown lengthening, and
            occasionally extraction and replacement with an implant or bridge.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The point worth absorbing before you agree to anything is that each cycle of replacement costs tooth
            structure. A tooth can be re-crowned a finite number of times. That is the real argument for a careful
            assessment and an unhurried plan rather than the fastest available redo — and, if a further set is genuinely
            the right answer, for getting the planning right the second time.
          </p>

          <h2 id="recourse" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            Your Rights and Recourse
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is where UK patients are most often caught out, so it is worth being blunt. The{" "}
            <strong>General Dental Council regulates dental professionals practising in the UK</strong>. A dentist
            working in Turkey is not on its register and is outside its jurisdiction, which means the GDC cannot
            investigate your complaint, cannot take action against that dentist, and cannot order any remedy. The same
            is true of the NHS complaints process, which covers NHS care in the UK. UK dental negligence claims are
            correspondingly difficult where the treatment, the clinician and the records are all in another
            jurisdiction.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">In practice, your realistic routes are:</p>
          <ul className="space-y-2 mb-4">
            {[
              "The clinic's own complaints procedure and its written guarantee — by far the most effective route, and the reason a guarantee in writing matters before you travel rather than after.",
              "The card provider or finance lender you paid through, where UK consumer protections may apply to the transaction depending on how you paid and the amount. Check with your provider what cover, if any, your payment method gave you.",
              "Turkish regulators and the clinic's own accreditation body, which is slow and rarely practical from the UK, but does exist.",
              "Independent UK documentation — a written report and radiographs from a UK dentist substantially strengthens any complaint or claim you do pursue.",
            ].map((r) => (
              <li key={r} className="flex gap-3 items-start">
                <span className="text-[#1e40af] flex-shrink-0 mt-0.5">→</span>
                <span className="text-gray-700">{r}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            The GDC publishes its own patient guidance on going abroad for dental treatment, linked in the sources
            below. It is short, and worth reading before a trip rather than after one. For what to expect from your
            dentist at home, see{" "}
            <Link href="/blog/will-uk-dentists-fix-turkey-teeth" className="text-[#1e40af] font-semibold hover:underline">
              will UK dentists fix Turkey teeth
            </Link>
            .
          </p>

          <h2 id="avoid" className="text-2xl font-bold text-gray-900 mt-10 mb-3 scroll-mt-24">
            How to Avoid This in the First Place
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are still at the research stage, the single most useful thing to understand is that the problems
            above cluster around a small number of avoidable decisions — choosing on price alone, accepting crowns
            described as veneers, and travelling without a written plan or guarantee. A short version of the checklist:
          </p>
          <div className="space-y-3 mb-4">
            {[
              "Establish in writing whether you are being offered veneers or crowns, and how much tooth each option removes.",
              "Get a written treatment plan and itemised cost before you travel, not on arrival.",
              "Ask which implant brand and system will be used, and keep that record — a UK dentist will need it.",
              "Ask for a written guarantee, and read what it actually requires of you, including return travel.",
              "Ask for a digital preview or trial smile before any tooth is prepared.",
              "Treat prices far below the market, and pressure to decide quickly, as the red flags they are.",
              "Plan your UK aftercare before you go, including who will see you if there is a problem.",
            ].map((c) => (
              <div key={c} className="flex gap-3 items-start">
                <span className="text-green-500 text-lg mt-0.5 flex-shrink-0">✓</span>
                <p className="text-gray-700">{c}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The full version — patient suitability, tooth preparation, lab quality, temporaries, warranties and the
            questions to ask a clinic — is in our{" "}
            <Link href="/guides/turkish-veneers-safety" className="text-[#1e40af] font-semibold hover:underline">
              Turkish veneers safety guide
            </Link>
            . If you are choosing a clinic, our guide to{" "}
            <Link href="/blog/best-dental-clinics-turkey" className="text-[#1e40af] font-semibold hover:underline">
              verifying a Turkish clinic
            </Link>{" "}
            covers the registrations to check and the questions to ask before you pay, and{" "}
            <Link href="/blog/risks-of-turkey-teeth" className="text-[#1e40af] font-semibold hover:underline">
              risks of Turkey teeth
            </Link>{" "}
            sets out the risk picture in full.
          </p>

          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Where we stand</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We arrange treatment in Turkey, so take our view with that in mind. Our position is that the risks on this
              page are real, that they are concentrated among the cheapest and fastest options, and that they are
              substantially reduced — not eliminated — by conservative preparation, proper planning, verified clinics
              and aftercare arranged in advance. If treatment is not the right choice for you, we would rather say so at
              the consultation than see you on this page in a year.
            </p>
          </div>

          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
            FAQs
          </h2>
        </div>
      </article>

      <FAQSection faqs={faqs} title="Turkey Teeth Gone Wrong: FAQs" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <SourcesList
            sources={[
              {
                label:
                  "British Dental Association — UK dentists picking up the pieces from dental tourism boom (2022 survey of 1,000 dentists)",
                href: "https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/",
              },
              {
                label: "British Dental Association — Dental tourism: patients need to know the risks",
                href: "https://www.bda.org/news-and-opinion/news/dental-tourism-patients-need-to-know-the-risks/",
              },
              {
                label: "General Dental Council — Going abroad for dental treatment (patient guidance)",
                href: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment",
              },
              {
                label:
                  "British Dental Journal — Contemporary dental tourism: a review of reporting in the UK news media (2025)",
                href: "https://www.nature.com/articles/s41415-025-8330-2",
              },
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/guides/turkish-veneers-safety"
              className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors block"
            >
              <h3 className="font-bold text-gray-900 mb-1">Are Turkish Veneers Safe?</h3>
              <p className="text-sm text-gray-600">The full prevention guide: what to check before you book</p>
            </Link>
            <Link
              href="/blog/will-uk-dentists-fix-turkey-teeth"
              className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors block"
            >
              <h3 className="font-bold text-gray-900 mb-1">Will UK Dentists Fix Turkey Teeth?</h3>
              <p className="text-sm text-gray-600">What your dentist at home will and will not take on</p>
            </Link>
            <Link
              href="/blog/best-dental-clinics-turkey"
              className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors block"
            >
              <h3 className="font-bold text-gray-900 mb-1">How to Verify a Turkish Clinic</h3>
              <p className="text-sm text-gray-600">The registrations to check and the questions to ask before you pay</p>
            </Link>
            <Link
              href="/guides/turkey-teeth-veneers-or-crowns"
              className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors block"
            >
              <h3 className="font-bold text-gray-900 mb-1">Veneers or Crowns?</h3>
              <p className="text-sm text-gray-600">How much tooth each removes, and what cannot be undone</p>
            </Link>
          </div>
        </div>

      <CTASection
        title="Have a Problem, or Want to Avoid One?"
        subtitle="Book a free consultation with our UK team. If you already have work that has failed, we will give you an honest assessment of the options — including telling you when further treatment abroad is not the right answer."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
