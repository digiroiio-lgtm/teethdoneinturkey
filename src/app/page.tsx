import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import TreatmentCard from "@/components/TreatmentCard";
import PriceTable from "@/components/PriceTable";
import MonthlyPaymentTable from "@/components/MonthlyPaymentTable";
import TestimonialCard from "@/components/TestimonialCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import SourcesList from "@/components/SourcesList";
import ExpertQuote from "@/components/ExpertQuote";
import { REVIEWER_NAME, REVIEWER_TITLE, REVIEWER_HREF, REVIEWER_PERSON } from "@/lib/reviewer";

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
    description: "Transform your smile with zirconia crowns & full veneers crafted by expert Turkish dentists using world-class materials.",
    price: "From £130/tooth",
    ukPrice: "£900–£1,200/tooth",
    href: "/prices/hollywood-smile-turkey-package",
    icon: "👑",
  },
  {
    title: "Veneers Turkey",
    description: "Transform your smile with porcelain or E-max veneers crafted by expert Turkish dentists using world-class materials.",
    price: "From £190/tooth",
    ukPrice: "£900/tooth",
    href: "/treatments/veneers-turkey",
    icon: "✨",
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement with titanium implants. Same Straumann and Nobel Biocare brands as UK — at a fraction of the cost.",
    price: "From £250",
    ukPrice: "£2,500",
    href: "/treatments/dental-implants-turkey",
    icon: "🦷",
  },
  {
    title: "All-on-4 Implants",
    description: "Full arch restoration with just 4 implants. Walk in with failing teeth, walk out with a full smile in days.",
    price: "From £4,500",
    ukPrice: "£15,000+",
    href: "/treatments/all-on-4-turkey",
    icon: "💪",
  },
  {
    title: "All-on-6 Implants",
    description: "Enhanced full arch restoration with 6 implants for superior stability and load distribution.",
    price: "From £5,600",
    ukPrice: "£18,000+",
    href: "/treatments/all-on-6-turkey",
    icon: "🏆",
  },
  {
    title: "Full Smile Makeover",
    description: "Combine veneers, whitening, and other treatments for a complete transformation. The ultimate smile package.",
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

const SITE_URL = "https://www.teethdoneinturkey.co.uk";

// Bump only when the page content is genuinely reviewed or changed.
const LAST_UPDATED = "2026-10-19";
const LAST_UPDATED_LABEL = "19 October 2026";
const LAST_REVIEWED = "2026-10-19";

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

// GEO-friendly page graph: WebPage with speakable spec so voice/AI answer
// surfaces can safely lift Q&A. `isPartOf` ties the page to the site entity
// declared in the root layout. FAQPage schema for the on-page FAQs is emitted
// separately by <FAQSection>, which sources it from the same visible Q&A
// content it renders.
const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Turkey Teeth Guide: Veneers, Implants & Costs for UK Patients",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-GB",
      primaryImageOfPage: `${SITE_URL}/opengraph-image`,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".faq-answer"],
      },
      dateModified: LAST_UPDATED,
      lastReviewed: LAST_REVIEWED,
      reviewedBy: REVIEWER_PERSON,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Rendered as a plain server-side <script> so the graph is present in
          the initial HTML for crawlers and generative engines, rather than
          injected client-side by next/script. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }} />
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
          reviewedDate={LAST_UPDATED_LABEL}
        />
      </div>

      {/* Treatment Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Our Dental Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World-class dental care in Turkey at a fraction of UK prices. All treatments carried out by fully qualified, English-speaking dentists.
            </p>
          </div>
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
        heading="How much cheaper is dental treatment in Turkey than in the UK?"
        answer="Dental treatment in Turkey typically costs 69% to 90% less than UK private prices for the same procedure, based on the prices listed on this site. Porcelain veneers start from £190 per tooth against around £900 in the UK, and a single dental implant starts from £250 against around £2,500."
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

      <PriceTable />
      <MonthlyPaymentTable />


      <AnswerSection
        id="monthly"
        tint="gray"
        heading="Can I pay for dental treatment in Turkey monthly?"
        answer="Yes, monthly payment plans start from £82 per month and run over 12, 24 or 36 months for treatments such as veneers and implants. You can pre-qualify online in under 60 seconds without affecting your credit score, although approval and terms depend on your circumstances."
      >
        <p>
          The table above shows typical examples. A full set of 20 veneers at £3,800 works out at £106 per month over 36 months or £158 per month over 24 months, and All-on-4 at £4,500 works out at £125 or £188. Shorter terms cost more each month but clear the balance sooner.
        </p>
        <p>
          Read the finance terms carefully before you sign, including the total amount repayable and any early repayment rules. Our{" "}
          <Link href="/monthly-payment" className={linkClass}>monthly payment page</Link>{" "}
          explains the pre-qualification process, and the{" "}
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
          The partner clinics described on this site are accredited by JCI or approved by the Turkish Ministry of Health, and use brand-name materials such as Straumann implants and Ivoclar veneers. Accreditation is a useful starting point, but it is not a guarantee of your individual result.
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
          for practical tips on flights, hotels and transfers.
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
        answer="Contact your Turkish clinic first, because most guarantees depend on it, then see a UK dentist if the problem is urgent. Many UK dentists will treat pain or infection but may decline to redo or adjust work they did not carry out themselves."
      >
        <p>
          Keep your treatment plan, invoices, X-rays, photographs and written guarantee. These make any remote review or return visit faster and help a UK dentist understand what was done. Our partner clinics offer guarantees of up to 10 years and UK-based aftercare coordination, but you should confirm the exact terms for your treatment in writing.
        </p>
        <p>
          Read{" "}
          <Link href="/blog/will-uk-dentists-fix-turkey-teeth" className={linkClass}>whether UK dentists will fix Turkey teeth</Link>{" "}
          and our{" "}
          <Link href="/blog/aftercare-for-dental-work-in-turkey" className={linkClass}>aftercare guide</Link>{" "}
          for what to expect in the first weeks and which symptoms need prompt attention.
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
        answer="Akdeniz Dental Clinic in Antalya, where our two quoted dentists work, shows a 5.0 rating from 1,197 Google reviews and a 4.8 rating from 97 Trustpilot reviews, checked in October 2026. Both platforms warn that they do not verify every review, so treat the scores as one signal."
      >
        <p>
          Google states that its reviews are not verified. Trustpilot shows the profile as claimed, says it does not fact-check reviews, and notes that the clinic has not invited customers to review recently, so the ratings may not represent every patient. These figures describe a single clinic, not every clinic we may coordinate.
        </p>
        <p>
          A high average is a starting point, not proof of a good result for you. Read the lower-rated reviews, check whether reviewers describe the treatment you want, and ask for before-and-after photos of similar cases. Our{" "}
          <Link href="/reviews" className={linkClass}>reviews page</Link>{" "}
          shows how we present patient feedback.
        </p>
      </AnswerSection>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What Our UK Patients Say</h2>
            <p className="text-gray-600">Real reviews from real patients — no filters, no fake reviews.</p>
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
          Pages on this site are marked as medically reviewed only where a named reviewer and a review date are recorded. This homepage was last reviewed by Dt. Mustafa Akça on {LAST_UPDATED_LABEL}. Read our{" "}
          <Link href="/editorial-policy" className={linkClass}>editorial and medical review policy</Link>{" "}
          for how content is written, checked and corrected.
        </p>
      </AnswerSection>


      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
            { label: "General Dental Council: Dental tourism guidance", href: "https://www.gdc-uk.org/patients/dental-tourism" },
            { label: "Trustpilot: Akdeniz Dental Clinic (4.8, 97 reviews, checked October 2026)", href: "https://www.trustpilot.com/review/akdenizdental.com" },
            { label: "Google Maps: Antalya Akdeniz Dental Clinic (5.0, 1,197 reviews, checked October 2026)", href: "https://www.google.com/maps/place/Antalya+Akdeniz+Dental+Clinic/@36.8881905,30.7220551,17z" },
            { label: "Akdeniz Dental Clinic: our team", href: "https://akdenizdental.com/our-team" },
          ]}
        />
      </div>

      <FAQSection />

      <CTASection
        title="Ready to Transform Your Smile?"
        subtitle="Join thousands of UK patients who've saved up to 70% on premium dental treatments in Turkey. Free consultation — no obligation."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
