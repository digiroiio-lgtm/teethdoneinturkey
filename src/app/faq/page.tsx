import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
export const metadata: Metadata = {
  title: "Frequently Asked Questions | Teeth Done in Turkey",
  description: "Answers to the most common questions about getting dental treatment in Turkey. Safety, costs, procedures, travel, and aftercare — all covered.",
  openGraph: { title: "FAQ — Teeth Done in Turkey", description: "Common questions about dental treatment in Turkey answered.", url: "https://www.teethdoneinturkey.co.uk/faq", siteName: "Teeth Done in Turkey", type: "website" },
  alternates: { canonical: "https://www.teethdoneinturkey.co.uk/faq" },
};
const faqs = [
  { question: "Is dental treatment in Turkey safe?", answer: "Yes — Turkey has world-class dental clinics with JCI accreditation and highly trained dentists. The key is choosing an accredited clinic with strong verified reviews. All clinics we work with are personally vetted." },
  { question: "How much can I save on dental treatment in Turkey?", answer: "UK patients typically save 60–77% compared to UK private prices. A single veneer costs from £195 in Turkey vs £800–£1,200 in the UK. A Hollywood Smile costs from £2,500 in Turkey vs £8,000–£12,000 in the UK." },
  { question: "What is included in the all-inclusive package?", answer: "All dental procedures, airport transfers, hotel accommodation, a dedicated English-speaking coordinator, and aftercare support. You book your own flights." },
  { question: "Do I need to speak Turkish?", answer: "No. All our partner clinics have English-speaking dentists and dedicated patient coordinators. Communication is never a barrier." },
  { question: "How long do I need to stay in Turkey?", answer: "Most treatments require 5–10 days. Veneers take 5–7 days, implants typically require two trips of 3–4 days each, and All-on-4 requires 10–14 days for the first visit." },
  { question: "Are Turkish dentists qualified?", answer: "Yes. Turkish dental training is a 5-year undergraduate degree plus specialist postgraduate training. Many top Turkish cosmetic dentists trained in Germany, the UK, or USA and are registered with the Turkish Dental Association." },
  { question: "What brand of implants are used?", answer: "Our partner clinics use premium brands including Straumann, Nobel Biocare, Zimmer Biomet, and Osstem — all FDA-approved with 95%+ success rates. We always confirm the brand in writing before treatment." },
  { question: "What happens if something goes wrong after I return to the UK?", answer: "Our clinics provide comprehensive aftercare support remotely via WhatsApp and video call. All treatments come with a written guarantee, and any genuine quality issues are resolved by the clinic at no cost to you." },
  { question: "How do I get started?", answer: "Simply fill in our contact form or WhatsApp us with photos of your teeth. Our dental team will review your case and send you a free personalised quote within 24 hours." },
  { question: "Can I finance my dental treatment?", answer: "Yes. We offer 0% finance over 12 months and low-rate finance up to 60 months for UK patients. A split payment option (deposit + balance on arrival) is also available with no credit check." },
  { question: "What is the best age to get veneers?", answer: "Veneers are suitable for adults over 18 whose teeth have fully developed. There is no upper age limit. The best time is when your teeth are stable, you are in good overall dental health, and you are committed to maintaining them properly." },
  { question: "Will my veneers look natural?", answer: "Yes. Modern porcelain veneers are designed to mimic natural enamel. Using digital smile design, your dentist previews your result before any work begins, ensuring the shade and shape look natural and suit your face." },
  { question: "Can I get treatment on just a few teeth?", answer: "Absolutely. Many patients treat only 2–6 teeth rather than a full Hollywood Smile. Your dentist will advise the minimum number needed for a consistent, natural-looking result." },
  { question: "Is the dental tourism sector regulated in Turkey?", answer: "Turkey's Ministry of Health regulates all dental clinics. JCI accreditation is the international gold standard. Turkey also has dedicated medical tourism regulations ensuring minimum standards for international patient clinics." },
  { question: "How do I fly after dental surgery?", answer: "For simple procedures like veneers and whitening, you can fly the next day. After implant placement, most dentists recommend waiting 2–3 days before flying. For All-on-4, plan to stay 10–14 days to allow proper healing before your return flight." },
  { question: "What about dental insurance?", answer: "Most standard UK dental insurance policies do not cover elective cosmetic treatment in Turkey. However, some specialist medical tourism insurance policies do. Check your policy carefully. The savings in Turkey typically far exceed what insurance would cover in the UK anyway." },
  { question: "Can I visit Turkey as a tourist during my dental trip?", answer: "Absolutely — and most patients do. Istanbul is one of the world's great cities. The treatment gap between preparation and fitting (2–4 days for veneers) is the perfect time to explore the Grand Bazaar, Hagia Sophia, Bosphorus cruises, and the city's world-famous restaurants." },
  { question: "How do I choose between porcelain and composite veneers?", answer: "Porcelain veneers are longer-lasting (10–15 years), more stain-resistant, and look the most natural, but cost more. Composite veneers are applied in one visit, more affordable, and easily repaired but last 5–7 years. Most patients choosing a permanent result opt for porcelain." },
  { question: "Do I need to do anything to prepare before travelling?", answer: "We will send you a pre-treatment checklist once your booking is confirmed. Generally, maintain good oral hygiene, avoid hard foods, note any medications you take, and bring any dental X-rays you have. Your coordinator handles all the logistics." },
  { question: "What payment methods are accepted?", answer: "Bank transfer, debit/credit card, and cash are all accepted. We recommend bank transfer or card for security. Finance payments are set up through our UK finance partners before travel. Never pay the full amount to an overseas account without a signed treatment agreement." },
];
export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f4a28] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">Everything you need to know about dental treatment in Turkey — answered honestly.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
