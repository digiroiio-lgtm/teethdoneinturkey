import type { Metadata } from "next";
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import KeyTakeaways from "@/components/KeyTakeaways";
import FAQSection from "@/components/FAQSection";
import SourcesList from "@/components/SourcesList";

export const revalidate = 86400;

const faqs = [
  {
    question: "Is it safe to get teeth done in Turkey?",
    answer: "Yes — provided you choose an accredited clinic. Turkey's top dental clinics hold JCI (Joint Commission International) accreditation, the same international standard used globally. Clinical risks are broadly comparable to equivalent UK private dentistry when you verify credentials, confirm implant brands, and have a written treatment plan and guarantee.",
  },
  {
    question: "What accreditation should I look for in a Turkish dental clinic?",
    answer: "Look for JCI (Joint Commission International) accreditation or Turkish Ministry of Health (Sağlık Bakanlığı) registration. JCI is the most widely recognised international healthcare standard; Ministry of Health registration is a legal requirement for all Turkish clinics. Ask the clinic to provide their accreditation certificate, not just a badge on their website.",
  },
  {
    question: "Are Turkish dentists qualified?",
    answer: "Turkish dentists hold a five-year university degree in dentistry, regulated by the Turkish Ministry of Health. Many dentists at clinics serving international patients have completed additional postgraduate training in Germany, Italy, the USA, or the UK, and hold international specialist certifications. Always ask for the named dentist's qualifications before booking.",
  },
  {
    question: "What are the risks of dental treatment in Turkey?",
    answer: "The risks — infection, sensitivity, implant complications, unsatisfactory aesthetics — are the same as with dental treatment anywhere. The added complexity is distance: if something goes wrong after you return home, you are further from your treating dentist. Choose a clinic with a written guarantee, English-speaking aftercare support, and a clear process for UK patients.",
  },
  {
    question: "How do I verify a Turkish dental clinic is legitimate?",
    answer: "Check for JCI accreditation or Turkish Ministry of Health registration directly (not just from the clinic's own website). Look for verified reviews on Google or Trustpilot. Ask for the treating dentist's qualifications, the brand of materials to be used, and a written treatment plan with guarantee terms before paying any deposit.",
  },
];

const sources = [
  {
    label: "JCI — Accreditation standards for international healthcare organisations",
    href: "https://www.jointcommissioninternational.org/",
  },
  {
    label: "NHS — Having treatment abroad (NHS Choices)",
    href: "https://www.nhs.uk/using-the-nhs/healthcare-abroad/going-abroad-for-medical-treatment/",
  },
  {
    label: "GDC — Dental treatment overseas guidance (General Dental Council)",
    href: "https://www.gdc-uk.org/",
  },
  {
    label: "Turkish Ministry of Health — International health services (Sağlık Bakanlığı)",
    href: "https://www.saglik.gov.tr/EN/",
  },
  {
    label: "USHAŞ — Turkish state health tourism agency",
    href: "https://ushas.com.tr/en",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/blog/is-it-safe-to-get-teeth-done-in-turkey" },
  title: "Is Getting Teeth Done in Turkey Safe?",
  description: "The honest answer to whether it's safe to get dental treatment in Turkey. Accreditation, risk factors, how to choose safely, and what patients say.",
};

export default function SafetyBlogPage() {
  return (
    <article className="py-16 bg-white">
      <ArticleJsonLd
        id="article-schema-is-it-safe-to-get-teeth-done-in-turkey"
        path="/blog/is-it-safe-to-get-teeth-done-in-turkey"
        headline="Is Getting Teeth Done in Turkey Safe?"
        description="The honest answer to whether it's safe to get dental treatment in Turkey. Accreditation, risk factors, how to choose safely, and what patients say."
        datePublished="2024-11-01"
        dateModified="2026-09-18"
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
          <p className="text-gray-500 text-sm">Published November 2024 · Updated September 2026 · 6 min read</p>
          {/* CLINICAL REVIEW REQUIRED: Add reviewer name, title, and date when an actual dental professional has reviewed this page */}
        </div>

        {/* Quick Answer — AI/GEO direct extraction */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-2">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Yes, it is safe to get teeth done in Turkey when you choose a JCI-accredited or Turkish Ministry of Health-registered clinic, verify the treating dentist&apos;s qualifications, confirm the brand of materials used, and obtain a written treatment plan and guarantee before travelling. Clinical risks are broadly comparable to equivalent UK private dentistry. The main added complexity is distance — aftercare depends on a clinic with strong UK patient support.
          </p>
        </div>

        <KeyTakeaways
          items={[
            "Turkey's top dental clinics hold JCI accreditation — the same international healthcare standard recognised globally.",
            "Turkish dentists hold a five-year regulated university degree; many have additional postgraduate training in Germany, Italy, or the USA.",
            "Clinical risks (infection, sensitivity, implant failure) are the same as with dental treatment anywhere in the world.",
            "The key variable is clinic quality, not country — verify JCI or Ministry of Health registration before booking.",
            "Choose clinics using internationally recognised brands (Straumann, Nobel Biocare, Ivoclar E-max) for continuity of UK aftercare.",
            "Always get a written guarantee: minimum 5 years for veneers and 10 years for implants.",
          ]}
        />

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

          <FAQSection faqs={faqs} title="Safety Questions Answered" />

          <SourcesList sources={sources} />
        </div>
      </div>
    </article>
  );
}
