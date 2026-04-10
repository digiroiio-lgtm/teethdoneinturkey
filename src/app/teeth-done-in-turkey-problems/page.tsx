import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/teeth-done-in-turkey-problems" },
  title: "Teeth Done in Turkey Problems – What to Know",
  description: "An honest guide to the potential problems with getting teeth done in Turkey — and how to avoid them. Written for UK patients.",
};

export default function TurkeyTeethProblemsPage() {
  return (
    <>
      <div className="bg-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Teeth Done in Turkey: Problems & How to Avoid Them</h1>
          <p className="text-xl text-blue-200">An honest look at the risks — and how to minimise them</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            The majority of UK patients who get dental treatment in Turkey have an excellent experience. However, problems do occasionally occur — and understanding what can go wrong, and how to prevent it, is essential before you commit to travelling abroad for dental care. This guide is written honestly, not to sell you on Turkey, but to help you make an informed decision.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Problems Reported by Patients</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Veneers That Don't Look Natural",
                  desc: "The most commonly reported cosmetic issue is veneers that appear too white, too bulky, or too uniform — what is sometimes called the 'Turkey teeth' look. This typically happens when patients choose very low-cost clinics that cut preparation time, or when patients request an unrealistically bright shade. It is entirely avoidable by working with an experienced aesthetic dentist and viewing Digital Smile Design previews before committing to a shade.",
                },
                {
                  title: "Post-Treatment Sensitivity",
                  desc: "Some patients experience sensitivity after veneer preparation, particularly if a larger amount of enamel was removed. This is usually temporary and resolves within a few weeks. It can also be a sign that veneers were poorly fitted. Always ask your clinic about their enamel preservation approach.",
                },
                {
                  title: "Implant Complications",
                  desc: "Dental implant failure affects approximately 2–5% of implants worldwide, regardless of where they are placed. In Turkey, the risk factors are the same as anywhere: smoking, poor bone density, uncontrolled diabetes, or infection. Using premium implant brands (Straumann, Nobel Biocare) and JCI-accredited clinics significantly reduces this risk. If a problem does occur, you will need to either return to Turkey or find a UK dentist willing to take over the case.",
                },
                {
                  title: "Communication Difficulties",
                  desc: "At lower-tier clinics, language barriers can be a genuine issue. Misunderstandings about treatment plans, consent, or post-care instructions can cause problems. Our partner clinics all have English-speaking staff, and we provide a UK coordinator who communicates with the clinic on your behalf.",
                },
                {
                  title: "UK Dentists Refusing to Continue Treatment",
                  desc: "Some UK dentists are reluctant to take on patients who have had work done abroad, particularly if the treatment appears problematic. This is a real concern if something goes wrong after you return home and your regular dentist declines to help. It is one more reason to choose a reputable clinic with a written guarantee and ongoing support.",
                },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">⚠️ {item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Avoid Problems: A Practical Checklist</h2>
            <div className="space-y-3">
              {[
                { check: "Choose a JCI-accredited or Ministry of Health-certified clinic — not the cheapest option you find on social media.", ok: true },
                { check: "Ask specifically which implant brand will be used. Accept only Straumann, Nobel Biocare, Astra Tech, or Osstem.", ok: true },
                { check: "Request a Digital Smile Design preview before agreeing to shade or shape.", ok: true },
                { check: "Get a written treatment plan and cost estimate before travelling.", ok: true },
                { check: "Ask for a written guarantee — minimum 5 years on veneers, 10 years on implants.", ok: true },
                { check: "Avoid clinics offering deals that seem too good to be true — £50 veneers and £200 implants are red flags.", ok: true },
                { check: "Use a reputable dental tourism facilitator (like Teeth Done in Turkey) with UK-based support.", ok: true },
              ].map(item => (
                <div key={item.check} className="flex gap-3 items-start">
                  <span className="text-green-500 text-lg mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-gray-700">{item.check}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens If Something Goes Wrong?</h2>
            <p className="text-gray-600 mb-4">
              If you experience a problem after returning to the UK, your first step should be to contact the clinic directly. Reputable Turkish clinics will respond promptly to post-treatment concerns. If the issue is covered by your guarantee, they will either arrange a return visit (at their expense) or work with you to resolve it remotely where possible.
            </p>
            <p className="text-gray-600 mb-4">
              For patients who used Teeth Done in Turkey, our UK team acts as an intermediary — we communicate with the clinic, coordinate any necessary follow-up, and help ensure any guarantee claims are honoured.
            </p>
            <p className="text-gray-600">
              In the worst-case scenario, if you cannot return to Turkey and need treatment in the UK, you may face costs to correct the work. Travel insurance does not typically cover dental complications. Some specialist dental insurers offer dental tourism cover — it is worth investigating before you travel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Honest Verdict</h2>
            <p className="text-gray-600 mb-4">
              Getting teeth done in Turkey carries risks — as does all dental treatment, everywhere in the world. The risks are not significantly higher than in the UK when you choose carefully, use verified clinics, and have proper aftercare support in place. The risks are significantly higher when you book the cheapest option available, skip the consultation, or ignore red flags.
            </p>
            <p className="text-gray-600">
              Every partner clinic we recommend has been independently verified. We only refer patients to clinics we would be comfortable using ourselves. If we have any doubts about a clinic&apos;s standards, they are not on our list.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/is-it-safe-to-get-teeth-done-in-turkey" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors block">
              <h3 className="font-bold text-gray-900 mb-1">Is Turkey Dental Treatment Safe?</h3>
              <p className="text-sm text-gray-600">Read our full safety guide for UK patients</p>
            </Link>
            <Link href="/blog/risks-of-turkey-teeth" className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors block">
              <h3 className="font-bold text-gray-900 mb-1">Risks of Turkey Teeth</h3>
              <p className="text-sm text-gray-600">What every UK patient should know before booking</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions About Your Specific Case?"
        subtitle="Book a free consultation with our UK team. We'll give you an honest assessment and only recommend treatment we're confident will deliver the right results for you."
        buttonText="Book Free Consultation"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
