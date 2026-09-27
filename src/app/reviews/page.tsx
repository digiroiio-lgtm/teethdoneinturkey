import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import {
  TRUSTPILOT_URL,
  TRUSTPILOT_RATING,
  TRUSTPILOT_COUNT,
  TRUSTPILOT_COUNT_12M,
  TRUSTPILOT_SUBJECT,
  TRUSTPILOT_BREAKDOWN,
  TRUSTPILOT_VERIFIED_LABEL,
} from "@/lib/trustpilot";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/reviews" },
  title: { absolute: "Turkey Teeth Reviews: Real UK Patient Experiences" },
  description: "Real reviews from UK patients who had veneers, implants and smile makeovers in Turkey. Honest experiences — the process, results, and what they'd do differently.",
};

// UNRESOLVED 2026-09-27 — provenance of the eight entries below is not
// established. They carry full names, cities and dates, and are all 5-star.
// They are NOT the Trustpilot reviews cited in the hero: that score belongs to
// Akdeniz Dental Clinic and lives on Trustpilot, whereas these have no stated
// source. They were left in place rather than deleted because the owner, not
// this agent, should decide whether they are real patient feedback. If they
// are real they need consent and should say where they came from; if they are
// illustrative they must be labelled as such, in the way the Example Treatment
// Scenarios on /monthly-payment are. Under the UK Digital Markets, Competition
// and Consumers Act 2024, publishing invented consumer reviews is unlawful, so
// this cannot stay unresolved.
const reviews = [
  { name: "Sarah Mitchell", location: "Manchester", treatment: "20 Porcelain Veneers", rating: 5, review: "I spent months researching dental work in Turkey and I'm so glad I went ahead. My 20 veneers cost £3,800 all-in — the same thing was quoted at £18,000 in Manchester. The clinic was spotless, the dentist spoke perfect English, and I'm absolutely over the moon with the results.", date: "November 2024" },
  { name: "James O'Brien", location: "London", treatment: "All-on-4 Implants", rating: 5, review: "I'd been embarrassed by my teeth for years and the NHS waiting list was 3 years long. I flew to Istanbul and had my All-on-4 done in 5 days. The hotel was brilliant, the clinic was state of the art, and the team were incredible. My new smile has changed my life.", date: "October 2024" },
  { name: "Claire Thompson", location: "Birmingham", treatment: "Dental Implants x3", rating: 5, review: "Three implants for £1,350 versus £7,500 in Birmingham. I was nervous but the experience was incredible. Straumann implants, zero issues. My UK dentist was impressed with the quality of the work.", date: "September 2024" },
  { name: "David Walsh", location: "Leeds", treatment: "Veneers (16 teeth)", rating: 5, review: "My confidence has completely transformed. I'd been hiding my smile for 15 years. The team in Istanbul were so professional and the results are just perfect. I'd recommend this to anyone. Already told 3 friends who are booking!", date: "August 2024" },
  { name: "Emma Johnson", location: "Bristol", treatment: "Full Smile Makeover", rating: 5, review: "Had 18 veneers plus whitening. The Digital Smile Design preview was incredible — I could see exactly what my new smile would look like before they did anything. The result is even better than I imagined. Istanbul is a beautiful city too, made the whole trip special.", date: "October 2024" },
  { name: "Michael Brown", location: "Edinburgh", treatment: "All-on-6 Implants", rating: 5, review: "I was quoted £22,000 in Edinburgh. Paid £5,600 in Turkey for All-on-6. The quality is outstanding. The process was smooth from start to finish — the clinic arranged my airport transfer and the patient coordinator was WhatsApp-available throughout.", date: "July 2024" },
  { name: "Lisa Chen", location: "London", treatment: "Composite Veneers", rating: 5, review: "Went for composite veneers to start with as a more affordable option. Really pleased with the results. The dentist was honest about what composite could achieve versus porcelain, and the finish is lovely. Would definitely go back for the E-max upgrade.", date: "September 2024" },
  { name: "Paul Harris", location: "Cardiff", treatment: "Dental Implants x2", rating: 5, review: "Two implants came to £900. Same would have cost me £5,000 in Cardiff. The procedure was straightforward, the clinic was brand new and extremely clean. Already planning my return visit for two more implants.", date: "August 2024" },
];

export default function ReviewsPage() {
  return (
    <>
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Patient Reviews</h1>
          <p className="text-xl text-blue-200 mb-4">Real experiences from UK patients who&apos;ve had teeth done in Turkey</p>
          <div className="flex justify-center gap-1" aria-hidden="true">
            {[1, 2, 3, 4, 5].map(i => (
              <svg
                key={i}
                className={`w-8 h-8 ${i <= Math.round(TRUSTPILOT_RATING) ? "text-[#00b67a]" : "text-white/30"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-blue-200 mt-2">
            <strong>{TRUSTPILOT_RATING} out of 5</strong> from {TRUSTPILOT_COUNT} reviews on{" "}
            <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              Trustpilot
            </a>{" "}
            for {TRUSTPILOT_SUBJECT}
          </p>
          <p className="text-blue-300 text-sm mt-1">
            The independent score for our partner clinic in Antalya &mdash; not a rating of this website.
          </p>
        </div>
      </div>
      {/* Independently verifiable score, shown in full so the 4.7 can be checked
          rather than asserted. Linked, attributed and dated. */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Independent Trustpilot Score</h2>
          <p className="text-gray-600 mb-6">
            {TRUSTPILOT_SUBJECT}, our partner clinic in Antalya, holds{" "}
            <strong>{TRUSTPILOT_RATING} out of 5</strong> from {TRUSTPILOT_COUNT} reviews on Trustpilot,
            with {TRUSTPILOT_COUNT_12M} of those posted in the last 12 months. Trustpilot reviews are written by
            reviewers independently of this site and cannot be paid for or removed by the clinic.
          </p>

          <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-extrabold text-gray-900">{TRUSTPILOT_RATING}</span>
              <span className="text-gray-500 text-sm">out of 5 &middot; {TRUSTPILOT_COUNT} reviews</span>
            </div>
            <table className="w-full text-sm">
              <caption className="sr-only">Trustpilot star distribution for {TRUSTPILOT_SUBJECT}</caption>
              <tbody>
                {TRUSTPILOT_BREAKDOWN.map(row => (
                  <tr key={row.stars}>
                    <th scope="row" className="text-left font-medium text-gray-700 py-1 w-20">{row.stars}-star</th>
                    <td className="py-1">
                      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00b67a] rounded-full" style={{ width: `${row.percent}%` }} />
                      </div>
                    </td>
                    <td className="py-1 pl-3 text-right text-gray-600 w-14">{row.percent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-4">
              Figures read from the profile on {TRUSTPILOT_VERIFIED_LABEL} and may have changed since.{" "}
              <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className="text-[#1e40af] font-semibold hover:underline">
                Check the live score on Trustpilot
              </a>
              . This is the clinic&apos;s score, not a rating of this website.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Patient Stories</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Longer write-ups of individual treatment journeys. For an independently verified score, use the
            Trustpilot figure above.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(r => <TestimonialCard key={r.name} {...r} />)}
          </div>
          <p className="text-center text-gray-600 mt-10">
            Want to see the results rather than read about them? Browse our{" "}
            <Link href="/turkey-teeth-before-after" className="text-[#1e40af] font-semibold hover:underline">Turkey teeth before and after case studies</Link>{" "}
            for the treatment, timeline and cost behind each smile.
          </p>
        </div>
      </section>
      <CTASection title="Ready to Write Your Own Success Story?" subtitle="Join hundreds of UK patients who've transformed their smiles in Turkey. Book your free consultation today." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
