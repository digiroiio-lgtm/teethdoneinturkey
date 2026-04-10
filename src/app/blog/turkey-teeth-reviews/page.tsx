import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Turkey Teeth Reviews – UK Patients",
  description: "Real patient reviews of dental treatment in Turkey. What UK patients actually experienced — the process, the results, and whether they'd recommend it.",
};

const reviews = [
  { name: "Rachel Davies", location: "Cardiff", treatment: "12 E-max Veneers", rating: 5, review: "I was so nervous but the team put me at ease immediately. My veneers are absolutely stunning. The Digital Smile Design meant I knew exactly what I was getting before they touched a tooth. Paid £2,400 vs £12,000 in Cardiff. Genuinely life-changing." },
  { name: "Tom Pearson", location: "Newcastle", treatment: "All-on-4 Lower Arch", rating: 5, review: "Dentures for 10 years and finally did something about it. The All-on-4 in Istanbul was £4,500 — my local quote was £13,000. The clinic was extraordinary. The surgeon was excellent and the English-speaking co-ordinator was with me the whole time." },
  { name: "Natalie Hughes", location: "London", treatment: "Dental Implants x2 + Veneers x8", rating: 5, review: "Combined implants and veneers in one trip. Total cost £3,200 vs a UK estimate of over £14,000. The efficiency was impressive — everything planned perfectly. Would go back in a heartbeat." },
];

export default function TurkeyTeethReviewsBlogPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Reviews</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Turkey Teeth Reviews: Real UK Patient Experiences 2024</h1>
          <p className="text-gray-500 text-sm">Published October 2024 · 5 min read</p>
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>We&apos;ve compiled real experiences from UK patients who have had dental work done in Turkey — covering the process from start to finish, what they wish they&apos;d known, and whether they&apos;d do it again.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What UK Patients Are Saying</h2>
          <div className="space-y-4">
            {reviews.map(r => <TestimonialCard key={r.name} {...r} />)}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Themes in Positive Reviews</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern, clean clinics that exceeded expectations</li>
            <li>English-speaking staff who made the process seamless</li>
            <li>Significant savings that felt life-changing</li>
            <li>Results that impressed their UK dentist on return</li>
            <li>Friendly, attentive care throughout</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Negative Reviews Tend to Say</h2>
          <p>The minority of negative reviews typically fall into a few categories: patients who chose the cheapest possible option without vetting the clinic, unrealistic expectations not managed before treatment, and complications related to individual medical history rather than clinic quality.</p>
          <p>The lesson from negative reviews is consistent: choose based on quality credentials, not just price. Our role is to make sure this research is done for you.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">Read more patient reviews</p>
            <Link href="/reviews" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">See All Reviews</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
