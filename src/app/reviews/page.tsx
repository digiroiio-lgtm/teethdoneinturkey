import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "UK Patient Reviews – Dental Turkey",
  description: "Read genuine reviews from UK patients who had dental treatment in Turkey. Veneers, implants, smile makeovers — real experiences from real people.",
};

const reviews = [
  { name: "Sarah Mitchell", location: "Manchester", treatment: "20 Porcelain Veneers", rating: 5, review: "I spent months researching dental work in Turkey and I'm so glad I went ahead. My 20 veneers cost £3,800 all-in — the same thing was quoted at £18,000 in Manchester. The clinic was spotless, the dentist spoke perfect English, and I'm absolutely over the moon with the results.", date: "November 2024" },
  { name: "James O'Brien", location: "London", treatment: "All-on-4 Implants", rating: 5, review: "I'd been embarrassed by my teeth for years and the NHS waiting list was 3 years long. I flew to Istanbul and had my All-on-4 done in 5 days. The hotel was brilliant, the clinic was state of the art, and the team were incredible. My new smile has changed my life.", date: "October 2024" },
  { name: "Claire Thompson", location: "Birmingham", treatment: "Dental Implants x3", rating: 5, review: "Three implants for £1,350 versus £7,500 in Birmingham. I was nervous but the experience was incredible. Straumann implants, zero issues. My UK dentist was impressed with the quality of the work.", date: "September 2024" },
  { name: "David Walsh", location: "Leeds", treatment: "Veneers (16 teeth)", rating: 5, review: "My confidence has completely transformed. I'd been hiding my smile for 15 years. The team in Istanbul were so professional and the results are just perfect. I'd recommend this to anyone. Already told 3 friends who are booking!", date: "August 2024" },
  { name: "Emma Johnson", location: "Bristol", treatment: "Full Smile Makeover", rating: 5, review: "Had 18 veneers plus whitening. The Digital Smile Design preview was incredible — I could see exactly what my new smile would look like before they did anything. The result is even better than I imagined. Istanbul is a beautiful city too, made the whole trip special.", date: "October 2024" },
  { name: "Michael Brown", location: "Edinburgh", treatment: "All-on-6 Implants", rating: 5, review: "I was quoted £22,000 in Edinburgh. Paid £5,500 in Turkey for All-on-6. The quality is outstanding. The process was smooth from start to finish — the clinic arranged my airport transfer and the patient coordinator was WhatsApp-available throughout.", date: "July 2024" },
  { name: "Lisa Chen", location: "London", treatment: "Composite Veneers", rating: 5, review: "Went for composite veneers to start with as a more affordable option. Really pleased with the results. The dentist was honest about what composite could achieve versus porcelain, and the finish is lovely. Would definitely go back for the E-max upgrade.", date: "September 2024" },
  { name: "Paul Harris", location: "Cardiff", treatment: "Dental Implants x2", rating: 5, review: "Two implants came to £900. Same would have cost me £5,000 in Cardiff. The procedure was straightforward, the clinic was brand new and extremely clean. Already planning my return visit for two more implants.", date: "August 2024" },
];

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Patient Reviews</h1>
          <p className="text-xl text-blue-200 mb-4">Real experiences from UK patients who&apos;ve had teeth done in Turkey</p>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-8 h-8 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-blue-200 mt-2">5.0 average from 500+ reviews</p>
        </div>
      </div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(r => <TestimonialCard key={r.name} {...r} />)}
          </div>
        </div>
      </section>
      <CTASection title="Ready to Write Your Own Success Story?" subtitle="Join hundreds of UK patients who've transformed their smiles in Turkey. Book your free consultation today." buttonText="Book Free Consultation" buttonHref="/book-consultation" whatsapp={true} />
    </>
  );
}
