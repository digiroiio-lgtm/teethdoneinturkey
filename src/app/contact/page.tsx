import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Get a Free Consultation",
  description: "Contact our UK team about dental treatment in Turkey. Call, WhatsApp, or fill in our contact form for a response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200">Get in touch — we respond to all enquiries within 24 hours</p>
        </div>
      </div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Other Ways to Reach Us</h2>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp (Fastest)</h3>
                    <p className="text-sm text-gray-600 mb-2">Chat with us directly — usually reply within hours</p>
                    <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors">
                      Open WhatsApp
                    </a>
                  </div>
                </div>
                <hr />
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600">hello@teethdoneinturkey.co.uk</p>
                    <p className="text-xs text-gray-400">Response within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">Prefer a detailed consultation? Book a free video call or phone call with our dental team.</p>
                <a href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Book Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
