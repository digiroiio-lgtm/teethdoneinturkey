import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import FAQSection from "@/components/FAQSection";
import SourcesList from "@/components/SourcesList";
import { REVIEWER_PERSON, REVIEWER_HREF, REVIEWER_NAME, REVIEWER_TITLE } from "@/lib/reviewer";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/blog/is-it-safe-to-get-teeth-done-in-turkey" },
  title: "Is Getting Teeth Done in Turkey Safe?",
  description: "The honest answer to whether it's safe to get dental treatment in Turkey. Accreditation, risk factors, how to choose safely, and what patients say.",
};

const faqs = [
  {
    question: "Are Turkey teeth safe?",
    answer: "Dental treatment in Turkey can be done safely, but it is not risk-free and outcomes depend on the clinic, the dentist and the treatment. The risks are the same as anywhere (infection, sensitivity, implant failure, poor aesthetics), and being far from your dentist makes follow-up harder. Check the dentist's qualifications, the materials used and the written guarantee before you book.",
  },
  {
    question: "What is the biggest safety risk with Turkey teeth?",
    answer: "Aggressive tooth preparation for crowns or veneers on healthy teeth is the concern UK dentists raise most often, because enamel removal is irreversible. Ask whether less invasive options such as fewer or thinner restorations are suitable, and get a second opinion on the treatment plan if you are unsure.",
  },
  {
    question: "How do I check a Turkish dental clinic is legitimate?",
    answer: "Ask for the dentist's name, qualifications and training history, confirm the clinic's accreditation or Ministry of Health licence directly with the clinic, check independent reviews, and get a written treatment plan with materials, brands and guarantee terms. The UK General Dental Council does not regulate dentists in Turkey.",
  },
  {
    question: "Is it safer to have dental work done in the UK?",
    answer: "UK treatment is regulated by the General Dental Council and follow-up is easier if something goes wrong, but quality still varies between practices. Cost and access are the main reasons patients travel. Compare like for like, including aftercare and what happens if work needs repeating.",
  },
  {
    question: "What happens if something goes wrong after I come home?",
    answer: "Contact your Turkish clinic first, as work under its guarantee should be fixed by that clinic, remotely or on a return visit. A UK dentist can assess, X-ray and treat pain or infection, usually privately. Keep your treatment records, X-rays and guarantee paperwork.",
  },
];

export default function SafetyBlogPage() {
  return (
    <>
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-is-it-safe-to-get-teeth-done-in-turkey"
        path="/blog/is-it-safe-to-get-teeth-done-in-turkey"
        headline="Is Getting Teeth Done in Turkey Safe?"
        description="The honest answer to whether it's safe to get dental treatment in Turkey. Accreditation, risk factors, how to choose safely, and what patients say."
        datePublished="2024-11-01"
        dateModified="2026-10-29"
        reviewer={REVIEWER_PERSON}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Is Getting Teeth Done in Turkey Safe?", path: "/blog/is-it-safe-to-get-teeth-done-in-turkey" },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-[#1e40af] text-xs font-semibold px-2 py-0.5 rounded mb-3">Safety</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Is It Safe to Get Teeth Done in Turkey? Honest 2026 Guide</h1>
          <p className="text-gray-500 text-sm">Published November 2024 · Updated 29 October 2026 · 6 min read</p>
          <MedicalReviewBadge reviewerName={REVIEWER_NAME} reviewerTitle={REVIEWER_TITLE} reviewerHref={REVIEWER_HREF} reviewedDate="September 2026" />
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p><strong>Short answer:</strong> getting teeth done in Turkey can be safe, but it is not risk-free. Outcomes depend on the clinic, the dentist and the treatment, not on the country. The main UK concerns are over-aggressive tooth preparation and harder follow-up if something goes wrong. Check qualifications, materials and the written guarantee before you book.</p>
          <p>As with any medical procedure, anywhere in the world, your choice of provider is everything.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Turkish Dental Accreditation</h2>
          <p>Turkey&apos;s leading dental clinics hold <strong>JCI (Joint Commission International) accreditation</strong>, an international healthcare accreditation. It is voluntary and not every clinic has it, so ask the clinic directly and verify it. The Turkish Ministry of Health also licenses dental practices. The UK General Dental Council does not regulate dentists in Turkey.</p>
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
          <p>Many UK patients report good experiences with modern, clean clinics, but patient accounts are self-reported and not a measure of complication rates. Read independent reviews as well as ours (see our <Link href="/reviews" className="text-[#1e40af] hover:underline font-semibold">patient reviews page</Link> for how to weigh them).</p>
          <p>Negative experiences are often linked to choosing on price alone without checking credentials or the treatment plan. Price is a factor, but it shouldn&apos;t be the only one. For what UK dentists see, read <Link href="/blog/will-uk-dentists-fix-turkey-teeth" className="text-[#1e40af] hover:underline font-semibold">will UK dentists fix Turkey teeth</Link>.</p>

          <SourcesList
            introduction="Regulator and professional-body guidance on dental treatment abroad. These bodies do not endorse this site or any clinic."
            sources={[
              { label: "General Dental Council: going abroad for dental treatment", href: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment" },
              { label: "British Dental Association: UK dentists picking up the pieces from the dental tourism boom", href: "https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/" },
            ]}
          />

          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="font-semibold text-gray-900 mb-2">We only work with clinics we trust.</p>
            <p className="text-gray-600 text-sm mb-4">Every clinic we recommend has been personally visited by our team and meets our strict safety and quality criteria. Book a free consultation to learn more.</p>
            <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
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
            <Link href="/prices/turkey-teeth-cost" className="flex flex-col bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <span className="font-semibold text-gray-900 text-sm">Turkey Teeth Cost Guide</span>
              <span className="text-xs text-gray-500 mt-0.5">All treatment prices &amp; comparisons</span>
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
    <FAQSection faqs={faqs} title="Are Turkey Teeth Safe? FAQs" />
    </>
  );
}
