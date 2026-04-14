import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
export const metadata: Metadata = {
  title: "Contact Us — Free Dental Quote | Teeth Done in Turkey",
  description: "Get your free personalised dental quote today. Send photos, ask questions, or WhatsApp us directly. We respond within 24 hours.",
  openGraph: { title: "Contact Teeth Done in Turkey", description: "Get your free personalised dental quote within 24 hours.", url: "https://www.teethdoneinturkey.co.uk/contact", siteName: "Teeth Done in Turkey", type: "website" },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/contact" },
};
export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get Your Free Quote</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">Fill in the form below and we will send you a personalised, no-obligation quote within 24 hours.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Request Free Quote</h2>
              <QuoteForm />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-4">Contact Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3"><span className="text-2xl">📞</span><div><p className="font-semibold">Phone</p><a href="tel:+442012345678" className="text-[#1a6b3c]">+44 20 1234 5678</a></div></div>
                  <div className="flex items-center gap-3"><span className="text-2xl">💬</span><div><p className="font-semibold">WhatsApp</p><a href="https://wa.me/447911123456" className="text-[#1a6b3c]" target="_blank" rel="noopener noreferrer">+44 7911 123456</a></div></div>
                  <div className="flex items-center gap-3"><span className="text-2xl">📧</span><div><p className="font-semibold">Email</p><a href="mailto:info@teethdoneinturkey.co.uk" className="text-[#1a6b3c]">info@teethdoneinturkey.co.uk</a></div></div>
                  <div className="flex items-center gap-3"><span className="text-2xl">⏰</span><div><p className="font-semibold">Response Time</p><p className="text-gray-600">Within 24 hours (usually faster)</p></div></div>
                </div>
              </div>
              <div className="bg-[#1a6b3c]/5 rounded-2xl p-6 border border-[#1a6b3c]/10">
                <h3 className="font-bold text-[#1a1a1a] mb-3">💡 Tip: Send Photos for a Better Quote</h3>
                <p className="text-sm text-gray-700 leading-relaxed">For the most accurate quote, attach clear photos of your teeth (front and side view). This allows our dentists to give you a precise treatment plan. WhatsApp is the easiest way to share photos.</p>
              </div>
              <a href="https://wa.me/447911123456?text=Hi%2C%20I%27d%20like%20a%20free%20dental%20quote" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#22c55e] transition-colors">
                <span className="text-2xl">💬</span> WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
