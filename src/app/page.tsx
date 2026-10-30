import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import TreatmentCard from "@/components/TreatmentCard";
import PriceTable from "@/components/PriceTable";
import TestimonialCard from "@/components/TestimonialCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import SourcesList from "@/components/SourcesList";
import ExpertQuote from "@/components/ExpertQuote";
import { REVIEWER_NAME, REVIEWER_TITLE, REVIEWER_HREF } from "@/lib/reviewer";
import { LAST_UPDATED, LAST_UPDATED_LABEL, LAST_REVIEWED_LABEL, homeFaqs } from "./home-content";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  // Lead with "Turkey teeth" — dominant UK query in Google Trends (last 7 days,
  // interest 78–100 vs 10–18 for procedure-specific variants). Keeps brand at
  // the end so SERP snippet reads well.
  title: { absolute: "Turkey Teeth: Veneers & Implants for UK Patients" },
  description:
    "UK guide to dental treatment in Turkey, covering veneers, implants, treatment costs, clinic selection, travel, aftercare and patient coordination.",
  keywords: [
    "turkey teeth",
    "turkey teeth cost",
    "turkey teeth uk",
    "veneers turkey",
    "dental implants turkey",
    "hollywood smile turkey",
    "all on 4 turkey",
    "monthly payment dental turkey",
  ],
};

const treatments = [
  {
    title: "Crowns & Full Veneers",
    description: "A crown covers a prepared tooth, while a veneer covers its front surface. Ask the dentist which restoration is proposed for each tooth and why, rather than treating these names as interchangeable. Before agreeing to a full smile package, check the material, number of teeth, preparation involved and maintenance requirements. The starting price below is a planning figure; your written quote should specify the actual restoration and any additional treatment needed.",
    price: "From £130/tooth",
    ukPrice: "£900–£1,200/tooth",
    href: "/prices/hollywood-smile-turkey-package",
    icon: "👑",
  },
  {
    title: "Veneers Turkey",
    description: "Veneers change the visible surface of teeth and should be considered alongside other options for the change you want. Ask what preparation is proposed, which material is being used and how the dentist will assess your bite. Bring examples of the shape and colour you prefer, but request a plan for your own teeth rather than a copy of another patient’s result. Confirm the tooth count and final quote before booking.",
    price: "From £190/tooth",
    ukPrice: "£900/tooth",
    href: "/treatments/veneers-turkey",
    icon: "✨",
  },
  {
    title: "Dental Implants",
    description: "Implant treatment replaces a missing tooth using several components and appointments, so ask exactly what the starting price covers. Your plan should distinguish the implant fixture, connecting abutment and final crown, and identify the brand and model. Confirm whether extractions, imaging, temporary teeth or additional procedures are included. The dentist must assess suitability and healing requirements before confirming the schedule. Compare a complete written plan with an equivalent UK quotation.",
    price: "From £250",
    ukPrice: "£2,500",
    href: "/treatments/dental-implants-turkey",
    icon: "🦷",
  },
  {
    title: "All-on-4 Implants",
    description: "All-on-4 describes a full arch restoration supported by four implants. It does not establish that everyone can receive fixed final teeth during one short trip. Ask the dentist whether temporary teeth are proposed, when the final bridge would be fitted and what additional procedures may be needed. Request the price per arch, the materials and the follow-up schedule in writing. Suitability depends on an individual assessment rather than choosing a package name.",
    price: "From £4,500",
    ukPrice: "£15,000+",
    href: "/treatments/all-on-4-turkey",
    icon: "💪",
  },
  {
    title: "All-on-6 Implants",
    description: "All-on-6 describes a full arch restoration supported by six implants. More implants do not automatically make it the right option for every patient. Ask the dentist to explain why this design is recommended for your case and what alternatives were considered. Confirm whether the quoted price covers one arch or both, temporary and final teeth, and all planned visits. Keep a copy of the implant details and written maintenance instructions for future care.",
    price: "From £5,600",
    ukPrice: "£18,000+",
    href: "/treatments/all-on-6-turkey",
    icon: "🏆",
  },
  {
    title: "Full Smile Makeover",
    description: "A smile makeover is an individual plan that may combine several procedures, rather than a standard treatment with the same contents for everyone. Explain whether your priority is colour, shape, alignment, missing teeth or chewing, and ask how each proposed procedure addresses it. Your written quote should name the procedures and tooth numbers, describe alternatives and identify any irreversible preparation. Use the package starting price to begin a discussion, rather than confirm suitability.",
    price: "From £3,500",
    ukPrice: "£12,000+",
    href: "/treatments/full-smile-makeover-turkey",
    icon: "🌟",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Manchester",
    treatment: "20 Porcelain Veneers",
    rating: 5,
    review: "I spent months researching dental work in Turkey and I'm so glad I went ahead. My 20 veneers cost £3,800 all-in — the same thing was quoted at £18,000 in Manchester. The clinic was spotless, the dentist spoke perfect English, and I'm absolutely over the moon with the results. Would recommend 100%.",
    date: "November 2024",
  },
  {
    name: "James O'Brien",
    location: "London",
    treatment: "All-on-4 Implants",
    rating: 5,
    review: "I'd been embarrassed by my teeth for years and the NHS waiting list was 3 years. I flew to Istanbul and had my All-on-4 done in 5 days. The hotel was brilliant, the clinic was state of the art, and the team were incredible. My new smile has changed my life. Cost me £4,500 vs £15,000 quoted in London.",
    date: "October 2024",
  },
  {
    name: "Claire Thompson",
    location: "Birmingham",
    treatment: "Dental Implants x3",
    rating: 5,
    review: "Three implants for £750 versus £7,500 in Birmingham — the maths was obvious. I was nervous about going abroad for dental work but the whole experience was incredible. The clinic used premium implants and I've had zero issues. My UK dentist was impressed with the quality.",
    date: "September 2024",
  },
];

function AnswerSection({
  id,
  heading,
  answer,
  tint,
  children,
}: {
  id: string;
  heading: string;
  answer: React.ReactNode;
  tint: "white" | "gray";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-14 ${tint === "gray" ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">{heading}</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-4 font-medium">{answer}</p>
        <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
      </div>
    </section>
  );
}

const linkClass = "text-[#1e40af] hover:underline";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <p className="text-center text-sm text-gray-500 py-3 bg-white">
        Last updated: <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
      </p>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 bg-white">
        <MedicalReviewBadge
          reviewerName={REVIEWER_NAME}
          reviewerTitle={REVIEWER_TITLE}
          reviewerHref={REVIEWER_HREF}
          reviewedDate={LAST_REVIEWED_LABEL}
        />
      </div>

      {/* Treatment Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Our Dental Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dental treatment in Turkey may involve veneers, crowns, implants or a combination, depending on your teeth, gums and bite. These options solve different problems and are not interchangeable. Use the summaries below to prepare questions for a qualified dentist, who must examine you before confirming the appropriate treatment and final cost.
            </p>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Starting prices help frame an enquiry. They do not establish a diagnosis, a complete package or a like-for-like UK comparison. Confirm the proposed work, inclusions and alternatives in your own written plan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <TreatmentCard key={t.href} {...t} />
            ))}
          </div>
        </div>
      </section>


      <AnswerSection
        id="cost"
        tint="white"
        heading="How should I compare dental treatment costs in Turkey and the UK?"
        answer="Compare the complete written treatment plans, including materials, appointments, travel and aftercare, before comparing prices. The starting prices below are planning examples from this website, rather than a survey of UK or Turkish clinics. An implant fixture price must not be compared with a complete implant, abutment and crown package."
      >
        <p>
          These figures are starting points, not quotes. The final price depends on the clinic, the materials, how many teeth are treated and how complex your case is. The comparison table below sets eight common treatments side by side so you can see where the biggest differences sit.
        </p>
        <p>
          When you compare a Turkish quote with a UK one, check what each includes. Ask whether flights, hotel nights, airport transfers, X-rays, follow-up visits and the guarantee are covered, because a lower headline price can hide extras. Our{" "}
          <Link href="/prices/turkey-teeth-cost" className={linkClass}>Turkey teeth cost guide</Link>{" "}
          breaks the numbers down treatment by treatment. A written quote based on your own X-rays and examination is the only reliable number for your mouth.
        </p>
      </AnswerSection>

      <PriceTable
        intro="The table below lists this website’s indicative starting prices for eight treatments, alongside its UK comparison figures. It is a budgeting aid, not a current market survey or a personal quotation. Compare equivalent procedures and request dated written quotes before deciding whether the apparent saving applies to your treatment."
        note="Percentage differences use the displayed figures: (UK example minus Turkey example) divided by the UK example, rounded to a whole percentage. They exclude travel and any treatment not specified. Ask whether a price covers the implant fixture alone or also the abutment and crown. Your itemised plan takes precedence over every starting price here."
      />


      <AnswerSection
        id="monthly"
        tint="gray"
        heading="Can I pay for dental treatment in Turkey monthly?"
        answer="Ask the coordination team which payment options are currently available for your written treatment plan. Monthly instalments, interest rates, deposits and eligibility depend on the finance provider and your circumstances. A treatment price divided by the number of months is only arithmetic; it does not establish an approved credit offer or repayment amount."
      >
        <p>
          For a worked budgeting example, £3,000 divided by 24 is £125, before any interest or fees and assuming no deposit. That calculation is not a finance quotation. Compare the total amount repayable, the APR, any deposit and the payment schedule shown by the provider, rather than choosing on the monthly figure alone.
        </p>
        <p>
          Read the finance terms carefully before you sign, including the total amount repayable and any early repayment rules. Our{" "}
          <Link href="/monthly-payment" className={linkClass}>monthly payment page</Link>{" "}
          explains what decides a monthly payment, and the{" "}
          <Link href="/finance-options-uk" className={linkClass}>UK finance options guide</Link>{" "}
          covers the alternatives, including what to expect if your credit history is imperfect.
        </p>
      </AnswerSection>

      <AnswerSection
        id="safety"
        tint="white"
        heading="Is dental treatment in Turkey safe for UK patients?"
        answer="Treatment in Turkey can be safe when you choose an accredited clinic, a named dentist and a written treatment plan, but outcomes vary by clinic, as they do in the UK. The main risks come from rushed or over-aggressive treatment, unclear guarantees and poor follow-up, rather than from the country itself."
      >
        <p>
          Check the treating clinic’s current authorisation, the dentist’s qualifications and the exact materials in your plan. Do not assume that a hospital accreditation applies to every dental practice, or that a familiar implant brand makes every treatment suitable. The General Dental Council explains that regulation and standards vary between countries.
        </p>
        <p>
          Before you travel, ask who will treat you, how many similar cases they have completed, what happens if a veneer or implant fails, and whether your records and X-rays will be sent to you. Our{" "}
          <Link href="/guides/turkish-veneers-safety" className={linkClass}>Turkish veneers safety guide</Link>{" "}
          and the article on{" "}
          <Link href="/blog/is-it-safe-to-get-teeth-done-in-turkey" className={linkClass}>whether it is safe to get teeth done in Turkey</Link>{" "}
          cover the risks in detail, including warning signs that a treatment plan is too aggressive.
        </p>
      </AnswerSection>

      <AnswerSection
        id="duration"
        tint="gray"
        heading="How long do I need to stay in Turkey for dental treatment?"
        answer="Veneers usually need 5 to 7 days in Turkey, and All-on-4 or All-on-6 usually need 5 to 7 days for the first visit. Dental implants normally need two trips: 3 to 5 days for placement, then 3 to 4 days for the crowns about 3 to 6 months later."
      >
        <p>
          The gap between implant visits lets the bone heal around the implant before the final crowns are fitted. Rushing this stage raises the risk of failure, so a clinic that promises a permanent result with no healing period deserves a follow-up question.
        </p>
        <ExpertQuote
          quote="Replacing missing posterior teeth is essential not only for restoring a complete smile but also for maintaining effective chewing function and a stable bite. Dental implants can provide a long-term solution when supported by adequate bone structure, careful surgical planning, and an individual assessment of each patient's oral health."
          name="Dr. Mehmet Onur Merey"
          href="https://akdenizdental.com/mehmet-onur-merey"
          role="Oral & Maxillofacial Surgeon, Clinic Owner | Akdeniz Dental Clinic, Antalya"
        />
        <p>
          These are typical ranges, not promises. Your dentist sets the exact schedule after examining you, and extra procedures such as bone grafts or gum treatment can add time. Plan flights and time off work with some flexibility, and read our{" "}
          <Link href="/travel-to-turkey" className={linkClass}>travel to Turkey guide</Link>{" "}
          for practical tips on flights, hotels and transfers. The <a href="https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know" className={linkClass}>FDA’s implant guidance</a> explains that healing can take several months or longer and recommends retaining the implant brand and model in your records.
        </p>
      </AnswerSection>

      <AnswerSection
        id="choose-clinic"
        tint="white"
        heading="How do I choose a dental clinic in Turkey?"
        answer="Choose a clinic by checking its accreditation, the named dentist who will treat you, an itemised written treatment plan, and the guarantee terms in writing before you pay a deposit. Avoid any clinic that quotes a firm price without seeing your X-rays or pressures you to commit the same day."
      >
        <p>
          Look for real before-and-after photos of the dentist&apos;s own cases, reviews that describe problems as well as praise, and clear answers about materials and brands. Ask whether the person who quotes you is the person who will do the work, and how aftercare is handled once you are home.
        </p>
        <ExpertQuote
          quote="A successful smile makeover is not simply about creating whiter or straighter teeth. It requires a personalised treatment plan that balances natural aesthetics, bite function, and long-term oral health. Every restoration should complement the patient's facial features while preserving healthy tooth structure whenever possible."
          name={REVIEWER_NAME}
          href={REVIEWER_HREF}
          role="Dentist, Aesthetic Dentistry & Treatment Planning | Akdeniz Dental, Antalya"
        />
        <p>
          Our{" "}
          <Link href="/turkey-teeth-clinic" className={linkClass}>Turkey teeth clinic page</Link>{" "}
          explains how we coordinate clinics for UK patients, and the{" "}
          <Link href="/blog/best-dental-clinics-turkey" className={linkClass}>guide to the best dental clinics in Turkey</Link>{" "}
          gives a longer checklist you can use whichever clinic you are considering.
        </p>
      </AnswerSection>

      <AnswerSection
        id="after-care"
        tint="gray"
        heading="What happens if something goes wrong after I return to the UK?"
        answer="Seek urgent local dental or medical assessment for an urgent problem, and notify your treating clinic as well. For a non-urgent concern, contact the clinic with photographs and your records so it can advise on review. UK patient coordination helps communication; it does not replace an examination or guarantee free UK treatment."
      >
        <p>
          Keep your treatment plan, invoices, X-rays, photographs and written guarantee. These make any remote review or return visit faster and help a UK dentist understand what was done. Guarantees differ between implants and crowns, and conditions may apply. Confirm the duration, maintenance requirements, exclusions and who pays for travel or treatment elsewhere before committing.
        </p>
        <p>
          Read{" "}
          <Link href="/blog/will-uk-dentists-fix-turkey-teeth" className={linkClass}>whether UK dentists will fix Turkey teeth</Link>{" "}
          and our{" "}
          <Link href="/blog/aftercare-for-dental-work-in-turkey" className={linkClass}>aftercare guide</Link>{" "}
          for what to expect in the first weeks and which symptoms need prompt attention. Follow your dentist’s personalised cleaning instructions; the <a href="https://www.cdc.gov/oral-health/about/index.html" className={linkClass}>CDC oral health guide</a> recommends regular brushing, flossing and professional dental care.
        </p>
      </AnswerSection>


      <AnswerSection
        id="treatment-types"
        tint="white"
        heading="What is the difference between veneers, crowns and implants?"
        answer="Veneers are thin shells bonded to the front of a tooth to change its look, crowns cover the whole tooth to protect or rebuild it, and implants are titanium posts that replace a missing tooth root. Each solves a different problem, so the right choice depends on your own teeth."
      >
        <p>
          Veneers suit teeth that are healthy but discoloured, chipped, worn or uneven, because they need only a thin layer of enamel to be shaped. Crowns suit teeth that are heavily filled, cracked or root-treated and need full coverage. Implants suit teeth that are missing or cannot be saved, and they need enough healthy bone to hold the post.
        </p>
        <p>
          Many patients need a mix, such as implants at the back and veneers at the front, which is why a full examination and X-rays matter before any price is agreed. Our{" "}
          <Link href="/treatments/veneers-turkey" className={linkClass}>veneers page</Link>,{" "}
          <Link href="/treatments/dental-implants-turkey" className={linkClass}>dental implants page</Link>{" "}
          and{" "}
          <Link href="/guides/turkey-teeth-veneers-or-crowns" className={linkClass}>veneers or crowns guide</Link>{" "}
          explain how each option works and when a dentist is likely to recommend it.
        </p>
      </AnswerSection>

      <AnswerSection
        id="reviews-evidence"
        tint="gray"
        heading="What do public reviews say about the partner clinic?"
        answer="Public reviews can help you assess communication, appointments and patient experiences, but they cannot predict your clinical outcome. Read recent and critical reviews as well as positive ones, and look for cases involving your proposed treatment. Use the linked review profiles for their current ratings and review counts, which change over time."
      >
        <p>
          Akdeniz Dental Clinic is the Antalya clinic associated with the two clinic clinicians quoted on this page. Its Google and Trustpilot profiles are linked in the source list. Reviews describe individual experiences with that clinic; they should not be presented as evidence about every provider or as an independently audited success rate.
        </p>
        <p>
          A high average is a starting point, not proof of a good result for you. Read the lower-rated reviews, check whether reviewers describe the treatment you want, and ask for before-and-after photos of similar cases. Our{" "}
          <Link href="/reviews" className={linkClass}>reviews page</Link>{" "}
          shows how we present patient feedback.
        </p>
      </AnswerSection>

      <AnswerSection
        id="before-you-book"
        tint="white"
        heading="What should I check before paying a dental treatment deposit?"
        answer="Before paying a deposit, obtain a written plan that names the treating dentist, proposed procedures, materials, total price, payment stages and cancellation terms. Confirm which parts remain provisional until examination. Keep the plan and correspondence so you can compare any changes proposed when you arrive with what you originally agreed."
      >
        <p>
          Ask for separate entries for extractions, temporary teeth, implant fixtures, abutments and final restorations where relevant. Record the hotel nights and transfers included, and ask how extra nights or an additional visit would be charged. If the diagnosis changes after scans, request the revised plan and price before consenting to treatment.
        </p>
        <p>
          The <a href="https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment" className={linkClass}>GDC’s patient guidance</a> recommends checking qualifications, insurance, complaints procedures and who pays for remedial care and additional travel. Use that checklist alongside our <Link href="/free-treatment-plan" className={linkClass}>treatment plan enquiry</Link>. There should be time to understand the alternatives and ask questions without pressure to decide immediately.
        </p>
      </AnswerSection>

      <AnswerSection
        id="photo-assessment"
        tint="gray"
        heading="Can photographs confirm my treatment plan before I travel?"
        answer="Photographs can help the team understand your goals and organise an initial discussion, but they cannot confirm everything needed for a final diagnosis. A qualified dentist must assess your dental and medical history and examine you, with imaging where appropriate, before confirming whether the proposed treatment is suitable and what it costs."
      >
        <p>
          Share relevant history through the clinic’s agreed channel, including previous dental work and any existing X-rays requested by the dentist. Describe what you want to improve, such as a missing tooth, chewing difficulty, tooth colour or shape. Ask which assumptions the provisional estimate makes and what findings might change it.
        </p>
        <p>
          The <a href="https://www.nidcr.nih.gov/health-info/gum-disease" className={linkClass}>NIH guide to gum disease</a> describes clinical gum examinations and diagnostic measurements that photographs alone cannot provide. For example, an enquiry about a whiter smile does not establish that crowns are needed. Ask the dentist to explain tooth-preserving alternatives and the consequences of each option. The GDC advises an assessment by a qualified dentist and discussion with your own dentist before travelling. Our <Link href="/book-consultation" className={linkClass}>consultation page</Link> is the starting point for coordination, rather than a substitute for that clinical assessment.
        </p>
      </AnswerSection>

      <AnswerSection
        id="travel-budget"
        tint="white"
        heading="How do I budget for hotel stays, transfers and a second visit?"
        answer="Build your travel budget around the written appointment schedule and every planned visit, rather than the headline treatment price alone. Confirm the hotel nights and transfers included in your package, then add flights, any extra accommodation, companion costs and time away from work. Keep room for changes if the dentist adjusts the schedule."
      >
        <p>
          For an implant plan with two trips, write down the cost and expected length of each trip separately. Ask whether the accommodation allowance applies to both visits, how airport transfers are arranged and whether the final restoration is included in the treatment total. Do not infer these details from the words “all inclusive”.
        </p>
        <p>
          A practical budget has three totals: the clinic’s written treatment quote, the travel costs you arrange yourself and a contingency for extra appointments or a return visit. Check your insurance policy’s actual cover for planned treatment abroad and complications. Read the <Link href="/travel-to-turkey" className={linkClass}>travel guide</Link> before buying flights, and obtain confirmation of the schedule from the clinic.
        </p>
      </AnswerSection>

      <AnswerSection
        id="independent-advice"
        tint="gray"
        heading="What do independent dental experts recommend before treatment abroad?"
        answer="Independent dental guidance recommends understanding the risks, alternatives and follow-up arrangements before agreeing to treatment abroad. Discuss the plan with your own dentist, check the treating clinician’s qualifications and insurance, and establish how problems will be managed after you return. A low price or an attractive photograph cannot answer those questions."
      >
        <ExpertQuote
          quote="Complex courses of treatment typically require detailed preparation and a number of follow-up visits."
          name="Eddie Crouch"
          role="Chair at the British Dental Association, speaking in the BDA’s dental tourism statement"
          href="https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/"
        />
        <p>
          In its survey of 1,000 UK dentists, the BDA reported that 86% of respondents who had examined dental tourists had treated problems after overseas care. This is a survey of dentists’ experiences, not the percentage of overseas patients who suffer complications and not a Turkey-specific failure rate. The <a href="https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/" className={linkClass}>original BDA statement</a> gives the context. Its practical message is to plan continuity of care and possible follow-up costs before travelling.
        </p>
      </AnswerSection>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What Our UK Patients Say</h2>
            <p className="text-gray-600">Patient accounts describe personal experiences and historical prices, rather than a promise about your treatment. Read them alongside independent reviews, a dentist’s assessment and your own written plan. Ask whether the proposed procedure, materials, number of teeth and follow-up arrangements are comparable before using someone else’s result or price as a guide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>


      <AnswerSection
        id="how-this-page-is-written"
        tint="white"
        heading="Who writes this guide and how is it kept up to date?"
        answer="Teeth Done in Turkey is a UK patient guide and coordination service, not a dental clinic. We compile prices from our partner clinics, link to official sources where we can, and show the date this page was last updated so you can judge how current the figures are."
      >
        <p>
          The information here is general and does not replace advice from your own dentist. Clinical decisions belong to the dentist who examines you, and prices are indicative until you hold a written quote.
        </p>
        <p>
          Pages on this site are marked as medically reviewed only where a named reviewer and a review date are recorded. The existing clinical review recorded for this homepage is dated {LAST_REVIEWED_LABEL}. The editorial update on {LAST_UPDATED_LABEL} adds planning guidance and source checks; it does not claim a new clinical sign-off by Dt. Mustafa Akça. Read our{" "}
          <Link href="/editorial-policy" className={linkClass}>editorial and medical review policy</Link>{" "}
          for how content is written, checked and corrected.
        </p>
      </AnswerSection>


      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          introduction="The sources below support the clinic-checking and continuity-of-care guidance on this page, and link to current public review profiles. They do not endorse this coordination service or confirm an individual treatment plan. Prices and travel arrangements must be checked separately against the written quote supplied for your own case."
          sources={[
            { label: "FDA: Dental implants, components, healing and patient records", href: "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know" },
            { label: "NIH / NIDCR: Periodontal disease and clinical assessment", href: "https://www.nidcr.nih.gov/health-info/gum-disease" },
            { label: "CDC: Oral health, self-care and professional dental visits", href: "https://www.cdc.gov/oral-health/about/index.html" },
            { label: "BDA: UK dentists picking up the pieces from dental tourism boom", href: "https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/" },
            { label: "General Dental Council: Dental tourism guidance", href: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment" },
            { label: "Trustpilot: Akdeniz Dental Clinic, current patient reviews", href: "https://www.trustpilot.com/review/akdenizdental.com" },
            { label: "Google Maps: Antalya Akdeniz Dental Clinic, current patient reviews", href: "https://www.google.com/maps/place/Antalya+Akdeniz+Dental+Clinic/@36.8881905,30.7220551,17z" },
            { label: "Akdeniz Dental Clinic: our team", href: "https://akdenizdental.com/our-team" },
          ]}
        />
      </div>

      <FAQSection faqs={homeFaqs} emitSchema={false} introduction="The answers below summarise the practical points UK patients should confirm before booking treatment in Turkey. They are general planning information, rather than a diagnosis or personal quote. Your treating dentist must confirm suitability, timings and aftercare, while any finance provider must confirm its own eligibility rules and terms." />

      <CTASection
        title="Ready to Transform Your Smile?"
        subtitle="Request a no-obligation conversation with the patient coordination team to discuss your goals, travel needs and the information a dentist will need. Ask for an itemised written plan before committing. A consultation enquiry does not confirm your suitability for treatment, reserve a clinical outcome or commit you to borrowing or booking travel."
        detail="Prepare your main questions and any existing records requested by the clinic. The team can explain the next coordination steps, and you can decide whether to continue after receiving the information you need."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
