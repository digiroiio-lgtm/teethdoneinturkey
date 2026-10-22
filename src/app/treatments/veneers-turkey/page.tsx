import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { veneerFaqs, veneerSections, veneerSources, VENEER_DESCRIPTION, VENEER_TITLE, VENEER_UPDATED } from "./veneer-content";

export const revalidate = 86400;
export const metadata: Metadata = {
  alternates: { canonical: "/treatments/veneers-turkey" },
  title: { absolute: VENEER_TITLE },
  description: VENEER_DESCRIPTION,
};
const linkClass = "text-[#1e40af] font-semibold underline underline-offset-2 hover:text-blue-800";

export default function VeneersTurkeyPage() {
  return <>
    <div className="hero-gradient text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments" }, { label: "Veneers Turkey" }]} />
        <p className="text-sm text-blue-200 mt-5 mb-3">Treatment information for UK patients</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{VENEER_TITLE}</h1>
        <p className="text-sm text-blue-100 mb-4">Last updated: <time dateTime={VENEER_UPDATED}>October 2026</time> (22 October) · Teeth Done in Turkey editorial team</p>
        <p className="text-xl text-blue-100 mb-6">Understand the procedure, compare an itemised proposal and plan care before and after travelling.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold">Request a consultation</Link>
          <Link href="/prices/veneers-turkey-cost" className="border-2 border-white px-6 py-3 rounded-xl font-bold">See the price guide</Link>
        </div>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <nav aria-label="On this page" className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
        <p className="font-bold mb-3">On this page</p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">{veneerSections.map(section => <li key={section.id}><a href={`#${section.id}`} className={linkClass}>{section.title}</a></li>)}</ul>
      </nav>
      {veneerSections.map(section => <section id={section.id} key={section.id} className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
        <p className="text-gray-800 font-medium leading-relaxed mb-4">{section.answer}</p>
        {section.paragraphs.map(paragraph => <p key={paragraph} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>)}
        {section.table && <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
          <table className="w-full text-sm text-left">
            <caption className="text-left p-4 text-gray-700 font-medium">{section.table.caption}</caption>
            <thead className="bg-blue-50"><tr>{section.table.columns.map(column => <th key={column} scope="col" className="p-3 font-semibold text-gray-900">{column}</th>)}</tr></thead>
            <tbody>{section.table.rows.map(row => <tr key={row[0]} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-gray-800">{row[0]}</th>{row.slice(1).map((value, index) => <td key={index} className="p-3 text-gray-700">{value}</td>)}</tr>)}</tbody>
          </table>
        </div>}
        {section.quote && <blockquote cite={veneerSources[section.quote.source].href} className="my-6 border-l-4 border-blue-600 bg-blue-50 p-5 rounded-r-xl">
          <p className="text-gray-800 italic mb-3">“{section.quote.text}”</p>
          <footer className="text-sm text-gray-700">{section.quote.name}, {section.quote.role}. <a href={veneerSources[section.quote.source].href} target="_blank" rel="noopener noreferrer" className={linkClass}>Public statement, {section.quote.date}</a>.</footer>
        </blockquote>}
        {section.sources && <p className="text-sm text-gray-600 leading-relaxed mb-3">Sources: {section.sources.map((key, index) => <span key={key}>{index > 0 && "; "}<a href={veneerSources[key].href} target="_blank" rel="noopener noreferrer" className={linkClass}>{veneerSources[key].label}</a></span>)}.</p>}
        {section.links && <ul className="space-y-2 text-sm">{section.links.map(link => <li key={link.href}><Link href={link.href} className={linkClass}>{link.label}</Link></li>)}</ul>}
      </section>)}
      <section id="faq" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What else should I know before booking veneers?</h2>
        <p className="text-gray-800 font-medium leading-relaxed mb-4">Before booking, make sure you understand the proposed procedure, the number of teeth, the cost assumptions and who provides follow-up. The answers below clarify common points about online proposals, package quantities and responsibility. Use them to prepare questions for the treating dentist rather than to decide suitability from a website.</p>
        <p className="text-gray-600 leading-relaxed mb-6">Keep your written proposal and the provider&apos;s contact details together. Where an answer depends on your own examination or contract, ask for the clinic&apos;s individual explanation before proceeding. You can also compare its recommendations with advice from your regular dentist.</p>
        <div className="space-y-6">{veneerFaqs.map(faq => <div key={faq.question} className="rounded-xl border border-gray-200 p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>)}</div>
      </section>
      <section id="sources" className="scroll-mt-28 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which sources support this guide?</h2>
        <p className="text-gray-800 font-medium leading-relaxed mb-4">This guide uses patient information from a dental school, public health agencies and dental professional bodies, alongside this site&apos;s dated price guide. Each source supports the nearby claim rather than a general promise about overseas care. Historical statements and survey findings are labelled so their dates and limits remain clear.</p>
        <p className="text-gray-600 leading-relaxed mb-4">The October 2026 editorial update revised the treatment explanation, source links, cost assumptions and planning questions. The team checks published sources and links to practical information for individual consultations. See our <Link href="/editorial-policy" className={linkClass}>editorial policy</Link> for responsibilities and corrections.</p>
        <ul className="space-y-2 text-sm">{Object.values(veneerSources).map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{source.label}</a></li>)}</ul>
      </section>
      <section className="rounded-2xl bg-blue-50 border border-blue-100 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How can I request an individual consultation?</h2>
        <p className="text-gray-800 font-medium leading-relaxed mb-4">Request a consultation to discuss your goals and obtain the information needed for an individual proposal. Tell the team which teeth concern you, what records you already hold and when you hope to travel. Ask for the treating provider&apos;s details and an itemised plan before deciding whether to proceed with any treatment.</p>
        <p className="text-gray-600 leading-relaxed mb-5">Use the price and safety questions above when reviewing the response. An initial conversation can explain the process; final clinical recommendations require the treating dentist&apos;s assessment and your informed consent. Take the time you need to compare the proposed care and follow-up arrangements.</p>
        <Link href="/book-consultation" className="inline-block bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold">Request my consultation</Link>
      </section>
    </div>
  </>;
}
