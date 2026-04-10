import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/about-us" },
  title: "About Us – Dental Tourism Turkey",
  description: "Learn about Teeth Done in Turkey — helping UK patients access premium dental care in Turkey at up to 70% less than UK prices.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Teeth Done in Turkey</h1>
          <p className="text-xl text-blue-200">Helping UK patients access world-class dental care at affordable prices</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Teeth Done in Turkey is a UK-based dental tourism service dedicated to helping British patients access premium dental treatments in Turkey at a fraction of UK prices. We connect UK patients with rigorously vetted, JCI-accredited dental clinics in Istanbul and Antalya.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team has personally visited every clinic we recommend. We only work with practices that meet our strict criteria for quality, hygiene, and patient care — clinics that use the same world-class materials as top UK dentists (Straumann implants, Ivoclar E-max veneers) but charge a fraction of the UK price.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Turkey for Dental Treatment?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💰", title: "Save Up to 70%", desc: "Lower cost of living and operational costs mean significant savings without compromising quality." },
                { icon: "🏆", title: "World-Class Clinics", desc: "JCI-accredited clinics with state-of-the-art equipment and highly trained specialists." },
                { icon: "🇬🇧", title: "English-Speaking Staff", desc: "All our partner clinics have English-speaking dentists and patient co-ordinators." },
                { icon: "✈️", title: "Short Flight", desc: "Istanbul is just 3.5 hours from London. Combine your treatment with a city break." },
                { icon: "🔬", title: "Same Materials", desc: "Straumann, Nobel Biocare, Ivoclar — the same premium brands used in top UK practices." },
                { icon: "📞", title: "UK Aftercare", desc: "Our UK team supports you before, during, and after your treatment." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Clinic Partners</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We partner exclusively with dental clinics that have achieved JCI accreditation or equivalent international certification. Our partner clinics are located in Istanbul (European side) and Antalya, offering modern facilities, CBCT scanning, digital smile design, and same-day temporaries.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All partner dentists hold qualifications equivalent to UK GDC registration, and many have completed advanced training in Germany, the United States, or Italy. We personally inspect every clinic annually to ensure standards are maintained.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <ol className="space-y-4">
              {[
                "Book a free consultation with our UK team — by phone, video call, or WhatsApp.",
                "Send us your photos and any dental records. We'll prepare a personalised treatment plan and quote.",
                "Choose your clinic, confirm your treatment, and book your flights. We help with hotel recommendations too.",
                "Fly to Turkey. Your clinic will meet you at the airport and handle all logistics.",
                "Complete your treatment and return home with a brand-new smile.",
                "Our UK team stays in touch throughout your recovery, co-ordinating any follow-up care.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">{i + 1}</span>
                  <p className="text-gray-600 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Book your free consultation today and get a personalised treatment plan within 24 hours."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
