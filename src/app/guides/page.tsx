import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import {
  GUIDES_TITLE, GUIDES_DESCRIPTION, GUIDES_UPDATED, GUIDES_UPDATED_LABEL,
  guideGroups, guideSources, guidesFaqs, faqIntroduction, faqDetail,
  sourcesAnswer, sourcesDetail,
} from "./guide-content";

export const revalidate = 86400;
export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: { absolute: "Dental Treatment Turkey Guides for UK Patients" },
  description: GUIDES_DESCRIPTION,
};
const linkClass = "font-semibold text-[#1e40af] underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600";

export default function GuidesHubPage() {
  return <>
    <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-4"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides" }]} /></div>
        <p className="text-sm font-bold tracking-widest uppercase text-blue-200 mb-3">UK patient reading library</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">{GUIDES_TITLE}</h1>
        <p className="text-xl text-blue-100 max-w-3xl">Choose the guide that answers your next question about treatment, written costs, travel or care at home.</p>
        <p className="mt-6 text-sm text-blue-100">Last updated: <time dateTime={GUIDES_UPDATED}>{GUIDES_UPDATED_LABEL}</time></p>
        <p className="mt-2 text-sm text-blue-100 max-w-3xl">Prepared by the Teeth Done in Turkey editorial team. General planning information; individual clinical advice comes from a qualified dentist. <Link href="/editorial-policy" className="underline underline-offset-4">Editorial and medical-review policy</Link>.</p>
      </div>
    </div>
    <nav aria-label="Choose a guide topic" className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-5xl mx-auto px-4 py-5 flex flex-wrap gap-3">
        {guideGroups.map(group => <a key={group.id} href={`#${group.id}`} className="rounded-full bg-white border border-blue-100 px-4 py-2 text-sm font-semibold text-[#1e40af] hover:border-blue-400">{group.label}</a>)}
      </div>
    </nav>
    <article id="guides-reading-guide" aria-label="Choosing and using the patient guides">
      {guideGroups.map((group, index) => <section id={group.id} key={group.id} className={`py-14 scroll-mt-24 ${index % 2 ? "bg-slate-50" : "bg-white"}`} aria-labelledby={`${group.id}-heading`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-8">
            <p className="text-sm font-bold text-teal-700 tracking-wider uppercase mb-2">{String(index + 1).padStart(2, "0")} / {group.label}</p>
            <h2 id={`${group.id}-heading`} className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">{group.title}</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">{group.answer}</p>
            {group.paragraphs.map(paragraph => <p key={paragraph} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>)}
            {group.quote && <figure className="my-5 border-l-4 border-teal-600 rounded-r-xl bg-teal-50 px-5 py-4">
              <blockquote cite={guideSources[group.quote.source].url}><p className="italic text-gray-800">&ldquo;{group.quote.text}&rdquo;</p></blockquote>
              <figcaption className="text-sm text-gray-600 mt-3">{group.quote.name}, {group.quote.role}. <a href={guideSources[group.quote.source].url} className={linkClass}>Statement published {group.quote.date}</a>.</figcaption>
            </figure>}
            <p className="text-sm text-gray-600">Sources: {group.sources.map((id, i) => <span key={id}>{i > 0 && "; "}<a href={guideSources[id].url} className={linkClass}>{guideSources[id].title}</a></span>)}</p>
          </div>
          <div className={`grid gap-6 ${group.guides.length > 1 ? "md:grid-cols-2" : "max-w-4xl"}`}>
            {group.guides.map(guide => <section key={guide.href} className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-7 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{guide.title}</h3>
              {guide.paragraphs.map(paragraph => <p key={paragraph} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>)}
              {guide.sources && <p className="text-sm text-gray-600 mb-4">Check: {guide.sources.map((id, i) => <span key={id}>{i > 0 && "; "}<a href={guideSources[id].url} className={linkClass}>{guideSources[id].title}</a></span>)}</p>}
              <Link href={guide.href} className={linkClass}>Read the full guide <span aria-hidden="true">→</span></Link>
            </section>)}
          </div>
        </div>
      </section>)}
    </article>
    <section className="py-14 bg-blue-50" aria-labelledby="guides-faq-heading" id="guides-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="guides-faq-heading" className="text-3xl font-extrabold text-gray-900 mb-5">How should I use the library’s advice, dates and sources?</h2>
        <p className="text-gray-800 leading-relaxed mb-4">{faqIntroduction}</p>
        <p className="text-gray-600 leading-relaxed mb-7">{faqDetail}</p>
        <div className="space-y-5">{guidesFaqs.map(faq => <section key={faq.question} data-guide-faq className="rounded-xl bg-white border border-blue-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </section>)}</div>
      </div>
    </section>
    <section className="py-14 bg-white" aria-labelledby="guides-sources-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="guides-sources-heading" className="text-3xl font-extrabold text-gray-900 mb-5">Where can I check the evidence and editorial approach?</h2>
        <p className="text-gray-800 leading-relaxed mb-4">{sourcesAnswer}</p>
        <p className="text-gray-600 leading-relaxed mb-5">{sourcesDetail}</p>
        <ul className="list-disc pl-5 space-y-2 text-sm">{Object.values(guideSources).map(source => <li key={source.url}><a href={source.url} className={linkClass}>{source.title}</a></li>)}</ul>
        <p className="mt-5 text-sm"><Link href="/editorial-policy" className={linkClass}>Read our editorial policy</Link> · <Link href="/contact" className={linkClass}>Suggest a correction</Link></p>
      </div>
    </section>
    <CTASection title="How can I discuss the questions I have prepared?"
      subtitle="Send your main concerns and the questions prompted by these guides to start a treatment enquiry. The team can explain the coordination process and arrange a discussion with the clinical provider. A personal diagnosis, treatment recommendation and final price require assessment by the dentist responsible for your care."
      detail="Keep your question list with any existing dental records and written estimates. Ask for procedures, materials, visits and exclusions to be confirmed before you make a commitment. You can take time to consider the proposal and seek an independent opinion. An enquiry does not commit you to treatment or create a credit application."
      buttonText="Discuss My Treatment Questions" buttonHref="/book-consultation" whatsapp />
  </>;
}
