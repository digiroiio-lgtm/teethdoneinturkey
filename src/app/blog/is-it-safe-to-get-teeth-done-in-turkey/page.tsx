import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { blogPostingSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Is It Safe to Get Your Teeth Done in Turkey? | Teeth Done in Turkey",
  description: "Everything UK patients need to know about dental safety in Turkey: JCI accreditation, how to choose a clinic, what to check, common concerns addressed.",
  openGraph: {
    title: "Is It Safe to Get Your Teeth Done in Turkey? Everything You Need to Know",
    description: "A comprehensive guide to dental safety in Turkey for UK patients.",
    url: "https://www.teethdoneinturkey.co.uk/blog/is-it-safe-to-get-teeth-done-in-turkey",
    siteName: "Teeth Done in Turkey",
    type: "article",
  },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/blog/is-it-safe-to-get-teeth-done-in-turkey" },
};

export default function BlogPost1() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema({
            title: "Is It Safe to Get Your Teeth Done in Turkey? Everything You Need to Know",
            description: "Everything UK patients need to know about dental safety in Turkey.",
            url: "https://www.teethdoneinturkey.co.uk/blog/is-it-safe-to-get-teeth-done-in-turkey",
            datePublished: "2024-12-01",
          })),
        }}
      />

      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-14 md:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span>Is It Safe?</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Safety & Trust</span>
            <span className="text-green-200 text-sm">December 2024 · 10 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Is It Safe to Get Your Teeth Done in Turkey? Everything You Need to Know</h1>
          <p className="text-xl text-green-100">The honest, detailed answer to the question every UK patient asks before booking dental treatment abroad.</p>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-[#1a6b3c]/5 border-l-4 border-[#1a6b3c] rounded-r-xl p-5 mb-8">
              <p className="text-gray-700 font-medium m-0">
                <strong>Short answer:</strong> Yes — dental treatment in Turkey is safe, provided you choose an accredited clinic with experienced, qualified dentists. Turkey has become one of the world's top dental tourism destinations precisely because its top clinics deliver world-class results at dramatically lower prices.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">The Real Safety Picture in Turkey</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The question of safety is understandably the first thing most UK patients ask. The short answer is: Turkey is safe for dental treatment — but as with any healthcare decision, the key is choosing the right provider.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Turkey has invested heavily in its medical tourism sector over the past two decades. The country treats millions of international patients every year, and dental tourism is one of its fastest-growing sectors. Istanbul alone has hundreds of dental clinics specifically designed to serve international patients, with English-speaking coordinators, Western-standard facilities, and prices that are a fraction of what you would pay at home.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The key to safe dental treatment in Turkey is choosing a clinic that has the right accreditations, uses premium materials, employs fully qualified dentists, and has a strong track record with international patients. The following sections will help you understand exactly what to look for.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Understanding Accreditations: What to Look For</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most important quality indicator for any dental clinic is accreditation. Here are the key accreditations to look for:
            </p>
            <h3 className="text-xl font-bold text-[#1a1a1a] mt-6 mb-3">JCI Accreditation (Joint Commission International)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              JCI is the gold standard in international healthcare accreditation. A JCI-accredited facility has been assessed against the same rigorous standards used by the world's best hospitals. Achieving JCI accreditation requires meeting over 1,200 measurable elements of performance across areas including patient safety, infection control, staff qualifications, medication management, and quality improvement.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fewer than 5% of Turkish dental clinics hold JCI accreditation — it is genuinely difficult to achieve and maintain. When a clinic claims JCI accreditation, you can verify this directly on the JCI website. This is your single best quality indicator.
            </p>
            <h3 className="text-xl font-bold text-[#1a1a1a] mt-6 mb-3">ISO Certification</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ISO 9001 and ISO 13485 certifications indicate that a clinic has management systems in place for consistent quality and safety. While not as rigorous as JCI, ISO certification is a positive indicator of a well-run practice.
            </p>
            <h3 className="text-xl font-bold text-[#1a1a1a] mt-6 mb-3">Turkish Ministry of Health Registration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All legitimate dental clinics in Turkey must be registered with the Turkish Ministry of Health. This registration means the clinic meets minimum legal standards for operation, staffing, and hygiene. You can verify a clinic's registration status through the Ministry&apos;s website.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Are Turkish Dentists Qualified?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yes — dentistry is a highly competitive profession in Turkey, and Turkish dental schools are rigorous and well-regarded. Turkish dental training follows a 5-year undergraduate programme followed by specialist postgraduate training. Many of Turkey&apos;s top cosmetic dentists have completed additional training in Germany, Austria, the UK, or USA.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To practice legally in Turkey, dentists must be registered with the Turkish Dental Association (TDA), which enforces professional standards and continuing education requirements. Turkey&apos;s dentist-to-patient ratio is among the highest in Europe, meaning the profession is genuinely competitive and standards are high.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When researching a clinic, look for information about the lead dentists. Many top Turkish cosmetic dentists have profiles on their clinic websites showing their qualifications, training, specialist areas, and years of experience. Do not be afraid to ask specific questions about your treating dentist before booking.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">What Materials Are Used in Turkish Clinics?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reputable Turkish dental clinics use the same premium materials as UK and European practices. For implants, this means brands like Straumann, Nobel Biocare, Zimmer Biomet, and Osstem — all FDA-approved, internationally certified implant brands with decades of clinical evidence. For veneers and crowns, materials like IPS Emax, Zirconia (from brands like Ivoclar or VITA), and Vita Enamic are standard.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The difference in price between Turkey and the UK is not due to inferior materials — it is due to significantly lower labour costs, lower clinic overheads, and a lower cost of living. A skilled dental technician in Turkey earns a fraction of their UK counterpart&apos;s salary, but their skills and the quality of their work are comparable or equivalent.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you receive your quote, ask specifically which brand of implant is being used, which brand of ceramic for your veneers or crowns, and where the laboratory is located. Reputable clinics will be completely transparent about this information.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">What Are the Risks?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No medical procedure is without risk, and it is important to be realistic about the potential downsides of dental treatment abroad:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { risk: "Complications requiring follow-up", detail: "Any dental procedure can have complications. If you develop an issue after returning to the UK, you will need to visit a UK dentist. Reputable Turkish clinics work with patients on aftercare and can often liaise with your UK dentist to advise on treatment." },
                { risk: "Communication barriers", detail: "While most international clinic staff speak English, some nuances can be lost. Make sure you clearly understand the treatment plan and ask questions. A good clinic will provide everything in writing." },
                { risk: "Choosing the wrong clinic", detail: "Not all Turkish dental clinics are equal. There are lower-quality operations that use inferior materials or less experienced staff. Thorough research and choosing an accredited clinic eliminates most of this risk." },
                { risk: "Travel complications", detail: "Being unwell on a long flight after dental surgery is uncomfortable but rarely dangerous. Follow your dentist's post-operative advice, particularly about flying after implant surgery." },
              ].map((item, i) => (
                <div key={i} className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="font-bold text-yellow-800 mb-1">⚠ {item.risk}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">10 Questions to Ask Before Booking</h2>
            <div className="space-y-2">
              {[
                "Is the clinic JCI-accredited or Ministry of Health registered?",
                "What is the name and qualification of the dentist who will treat me?",
                "Which brand of implants / ceramic materials will be used?",
                "Where is the dental laboratory? (on-site is preferable for veneers)",
                "What is included in the all-inclusive package?",
                "What happens if I need follow-up treatment after returning to the UK?",
                "Can I see before-and-after photos of similar cases?",
                "Do you have Google or Trustpilot reviews from UK patients?",
                "What guarantee do you offer on the work?",
                "Can I speak with a previous patient as a reference?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="bg-[#1a6b3c] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 text-sm">{q}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Red Flags to Watch Out For</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whilst most reputable clinics operate transparently, it is worth knowing what warning signs to look out for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Prices that seem too good to be true (significantly below market rate)",
                "No verifiable patient reviews or only reviews on their own website",
                "Inability to confirm which brand of materials they use",
                "No clear information about dentist qualifications",
                "Pressure tactics to book quickly or accept an incomplete quote",
                "No written treatment plan or guarantee",
                "No patient coordinator or English-speaking contact",
                "Clinic website with no physical address or registration details",
              ].map((flag) => (
                <div key={flag} className="flex items-start gap-2 text-sm text-red-800 bg-red-50 rounded-lg p-3 border border-red-100">
                  <span className="text-red-500 flex-shrink-0">✗</span>
                  <span>{flag}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">The Verdict: Is Turkey Safe for Dental Treatment?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Turkey is one of the world&apos;s safest and most popular destinations for dental treatment — but like any major healthcare decision, the outcome depends heavily on the quality of provider you choose.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The clinics we work with are carefully selected based on accreditation, patient reviews, material quality, dentist qualifications, and aftercare policies. We only recommend clinics that we would confidently send our own family members to.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you work with Teeth Done in Turkey, you benefit from our experience vetting and working with Turkish dental clinics over many years. We handle the research, verify the credentials, and support you through every step of the process — so you can focus on getting the smile you deserve.
            </p>

            <div className="bg-[#1a6b3c] text-white rounded-2xl p-6 mt-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Take the Next Step?</h3>
              <p className="text-green-100 mb-4">Get a free consultation and personalised quote from our accredited partner clinics.</p>
              <Link href="/contact" className="inline-block bg-[#f5a623] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#e09415] transition-colors">Get My Free Quote</Link>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dental Veneers in Turkey", href: "/treatments/dental-veneers" },
                { label: "Dental Implants in Turkey", href: "/treatments/dental-implants" },
                { label: "Hollywood Smile in Turkey", href: "/treatments/hollywood-smile" },
                { label: "Dental Veneers Cost", href: "/prices/dental-veneers-cost" },
                { label: "Dental Implants Cost", href: "/prices/dental-implants-cost" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="border border-gray-200 rounded-xl p-4 hover:border-[#1a6b3c] hover:bg-[#1a6b3c]/5 transition-colors">
                  <p className="font-medium text-[#1a1a1a]">{item.label} →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
