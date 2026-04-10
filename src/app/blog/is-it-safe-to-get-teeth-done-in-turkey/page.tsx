import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/is-it-safe-to-get-teeth-done-in-turkey" },
  title: "Is Getting Teeth Done in Turkey Safe?",
  description: "The honest answer to whether it's safe to get dental treatment in Turkey. Accreditation, risk factors, how to choose safely, and what patients say.",
};

export default function SafetyBlogPage() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Safety</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Is It Safe to Get Teeth Done in Turkey? Honest 2024 Guide</h1>
          <p className="text-gray-500 text-sm">Published November 2024 · 6 min read</p>
          <MedicalReviewBadge />
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>The short answer is: <strong>yes, it is safe</strong> — provided you choose the right clinic. Turkey receives over half a million international dental patients every year, and the vast majority have excellent outcomes. But as with any medical procedure, anywhere in the world, your choice of provider is everything.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Turkish Dental Accreditation</h2>
          <p>Turkey&apos;s leading dental clinics hold <strong>JCI (Joint Commission International) accreditation</strong> — the same international healthcare standard recognised globally and equivalent to NHS-quality oversight. The Turkish Ministry of Health also regulates dental practices and requires dentists to hold national qualifications before treating patients.</p>
          <p>Many top Turkish dentists have trained in Germany, the USA, Italy, or other European countries, and hold international specialist certifications in areas like implantology and aesthetic dentistry.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Could Go Wrong?</h2>
          <p>The risks with dental tourism in Turkey are the same risks that exist with dental treatment anywhere — infection, sensitivity, failed implants, poor aesthetics — but these risks are minimised when you choose an accredited clinic with a proven track record. The added complexity is that if something does go wrong, you&apos;re further from your provider.</p>
          <p>This is why aftercare is so important. Our partner clinics offer guarantees (typically 5–10 years on veneers and implants) and are available via WhatsApp and video call to address any concerns after you return home. We also provide UK-based support for our patients.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Choose Safely</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Look for JCI accreditation or Turkish Ministry of Health certification</li>
            <li>Check verified reviews on Google, Trustpilot, or dedicated dental tourism platforms</li>
            <li>Ask for the dentist&apos;s qualifications and training history</li>
            <li>Confirm the brand of implants or veneers being used</li>
            <li>Ensure a written treatment plan and guarantee is provided</li>
            <li>Avoid clinics offering suspiciously cheap prices with no explanation</li>
            <li>Use a reputable dental tourism co-ordinator who has vetted clinics personally</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What UK Patients Say</h2>
          <p>The overwhelming majority of UK patients who have teeth done in Turkey report excellent experiences. The most common surprise is the quality of the clinics — state-of-the-art equipment, very clean, and often more modern than the private practices they&apos;ve visited in the UK.</p>
          <p>Rare negative experiences typically involve patients who chose clinics based purely on the lowest price, without checking credentials. The lesson: price is a factor, but it shouldn&apos;t be the only one.</p>

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">We only work with clinics we trust.</p>
            <p className="text-gray-600 text-sm mb-4">Every clinic we recommend has been personally visited by our team and meets our strict safety and quality criteria. Book a free consultation to learn more.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
