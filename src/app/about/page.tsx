import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
export const metadata: Metadata = {
  title: "About Us | Teeth Done in Turkey",
  description: "Learn about Teeth Done in Turkey — connecting UK patients with accredited Turkish dental clinics since 2015. 10,000+ happy patients, JCI-accredited partners.",
  openGraph: { title: "About Teeth Done in Turkey", description: "Connecting UK patients with world-class Turkish dental clinics.", url: "https://www.teethdoneinturkey.co.uk/about", siteName: "Teeth Done in Turkey", type: "website" },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/about" },
};
export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Teeth Done in Turkey</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">We connect UK patients with the best JCI-accredited dental clinics in Turkey — delivering world-class smiles at prices that actually make sense.</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Teeth Done in Turkey exists to make high-quality dental care accessible to everyone. We believe no one should have to choose between a healthy, beautiful smile and their financial wellbeing. Turkey makes that choice unnecessary.</p>
              <p className="text-gray-700 leading-relaxed">Since 2015, we have helped over 10,000 UK patients access world-class dental treatment in Turkey at 60–77% less than UK prices. Every clinic we work with has been personally vetted by our team for accreditation, materials quality, patient care standards, and English-language support.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "10,000+", label: "Happy Patients" }, { value: "9+ years", label: "Industry Experience" }, { value: "5-Star", label: "Average Rating" }, { value: "15+", label: "Partner Clinics" }].map(s => (
                <div key={s.label} className="bg-[#1a6b3c]/5 rounded-2xl p-6 text-center border border-[#1a6b3c]/10">
                  <p className="text-3xl font-extrabold text-[#1a6b3c]">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 text-center">Our Accreditations & Trust Signals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{ icon: "🏆", title: "JCI-Accredited Partners", desc: "All partner clinics hold or are working towards JCI accreditation — the global gold standard for healthcare quality." }, { icon: "⭐", title: "5-Star Patient Reviews", desc: "Over 10,000 verified reviews on Google and Trustpilot from real UK patients. We share every review, positive or constructive." }, { icon: "🔒", title: "Guaranteed Quality", desc: "All treatments come with a written guarantee. If something is not right, we work with you and the clinic to make it right." }].map(item => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link href="/contact" className="inline-block bg-[#f5a623] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e09415] transition-colors text-lg">Get Your Free Quote Today</Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
