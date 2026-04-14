import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Teeth Done in Turkey",
  description: "Privacy policy for Teeth Done in Turkey. How we collect, use, and protect your personal data.",
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/privacy-policy" },
};
export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
        <h1 className="text-4xl font-extrabold text-[#1a1a1a] mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: December 2024</p>
        {[
          { title: "1. Who We Are", content: "Teeth Done in Turkey ('we', 'our', 'us') is a dental tourism facilitation service connecting UK patients with accredited dental clinics in Turkey. Our website is https://www.teethdoneinturkey.co.uk. Contact: info@teethdoneinturkey.co.uk." },
          { title: "2. What Data We Collect", content: "We collect personal data you provide when completing our contact/quote form (name, email, phone, treatment interest, message), when communicating with us via WhatsApp or email, and automatically via cookies and analytics (pages visited, device type, IP address)." },
          { title: "3. How We Use Your Data", content: "We use your data to respond to your enquiry and provide a personalised dental quote, to forward your details to partner clinics for treatment assessment, to communicate with you about your enquiry and booking, and to improve our website and services." },
          { title: "4. Legal Basis for Processing", content: "We process your data on the basis of your consent (when you submit a form), legitimate interests (responding to enquiries), and contractual necessity (when a booking is made)." },
          { title: "5. Data Sharing", content: "We share your data with our partner dental clinics in Turkey (for quote and treatment purposes), our IT and website service providers, and our finance partners (if you apply for payment plans). We do not sell your data to third parties." },
          { title: "6. Data Retention", content: "We retain enquiry data for up to 2 years. Booking and treatment records are retained for 7 years for legal and accounting purposes. You may request deletion of your data at any time." },
          { title: "7. Your Rights", content: "Under UK GDPR, you have the right to access your personal data, rectify inaccurate data, request erasure, restrict or object to processing, and data portability. Contact us at info@teethdoneinturkey.co.uk to exercise these rights." },
          { title: "8. Cookies", content: "We use essential cookies for website functionality and analytics cookies (via Google Analytics) to understand how visitors use our site. You can opt out of analytics cookies via our cookie banner. For full details, see our Cookie Policy." },
          { title: "9. Security", content: "We implement appropriate technical and organisational measures to protect your data, including SSL encryption, access controls, and regular security reviews." },
          { title: "10. Contact Us", content: "For privacy-related queries: info@teethdoneinturkey.co.uk or write to Teeth Done in Turkey, London, UK." },
        ].map(s => (
          <div key={s.title} className="mb-6">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">{s.title}</h2>
            <p className="text-gray-700 leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
