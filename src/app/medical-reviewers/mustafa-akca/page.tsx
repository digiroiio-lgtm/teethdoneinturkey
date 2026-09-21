import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { REVIEWER_PERSON } from "@/lib/reviewer";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/medical-reviewers/mustafa-akca" },
  title: { absolute: "Dt. Mustafa Akça — Dental Medical Reviewer | Teeth Done in Turkey" },
  description: "Dt. Mustafa Akça is a dentist and medical reviewer for Teeth Done in Turkey. Founding owner of Akdeniz Dental Clinic, Antalya. Graduate of Istanbul Medipol University, 2018.",
};

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/medical-reviewers/mustafa-akca`;

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...REVIEWER_PERSON,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Istanbul Medipol University Faculty of Dentistry",
      },
      knowsAbout: [
        "Prosthetic Dentistry",
        "Aesthetic Dentistry",
        "Full-Mouth Rehabilitation",
        "Zirconium Restorations",
        "Smile Makeovers",
      ],
      worksFor: {
        "@type": "Dentist",
        name: "Akdeniz Dental Clinic",
        url: "https://akdenizdental.com",
        address: { "@type": "PostalAddress", addressLocality: "Antalya", addressCountry: "TR" },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Medical Reviewers", item: `${SITE_URL}/medical-reviewers` },
        { "@type": "ListItem", position: 3, name: "Dt. Mustafa Akça", item: PAGE_URL },
      ],
    },
  ],
};

const reviewedPages = [
  { title: "Teeth in Turkey: Complete UK Patient Guide", href: "/guides/teeth-in-turkey" },
  { title: "Dental Implants Turkey Guide", href: "/guides/dental-implants-turkey" },
  { title: "Are Turkish Veneers Safe?", href: "/guides/turkish-veneers-safety" },
  { title: "Best Veneers in Turkey", href: "/guides/best-veneers-turkey" },
  { title: "Full-Mouth Dental Implants Turkey Cost", href: "/guides/full-mouth-dental-implants-turkey-cost" },
  { title: "Turkey Teeth Antalya Guide", href: "/guides/turkey-teeth-antalya" },
  { title: "Tooth Abscess Can't Afford a Dentist?", href: "/guides/tooth-abscess-cant-afford-dentist" },
  { title: "Severe Toothache Can't Afford a Dentist?", href: "/guides/severe-toothache-cant-afford-dentist" },
  { title: "Is It Safe to Get Teeth Done in Turkey?", href: "/blog/is-it-safe-to-get-teeth-done-in-turkey" },
  { title: "Risks of Turkey Teeth", href: "/blog/risks-of-turkey-teeth" },
  { title: "Risks of Veneers in Turkey", href: "/blog/risks-of-veneers-in-turkey" },
  { title: "Aftercare for Dental Work in Turkey", href: "/blog/aftercare-for-dental-work-in-turkey" },
  { title: "Signs of Dental Implant Failure", href: "/blog/signs-of-dental-implant-failure" },
  { title: "Dental Implant Recovery Time", href: "/blog/dental-implant-recovery-time" },
  { title: "Turkey Teeth Cost Overview", href: "/prices/turkey-teeth-cost" },
];

export default function MustafaAkcaProfilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Medical Reviewers" },
            ]} />
          </div>
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Medical Reviewer</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Dt. Mustafa Akça</h1>
          <p className="text-xl text-blue-200 mb-1">Dentist & Medical Reviewer</p>
          <p className="text-blue-300 text-sm">Founding Owner, Akdeniz Dental Clinic — Antalya, Turkey</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Professional summary */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">Role</p>
                <p className="text-gray-900 font-semibold">Dentist & Medical Reviewer</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">Clinic</p>
                <p className="text-gray-900 font-semibold">Akdeniz Dental Clinic, Antalya</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">Education</p>
                <p className="text-gray-900">Istanbul Medipol University<br />Faculty of Dentistry, 2018</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">Verified Profile</p>
                <a href="https://akdenizdental.com/mustafa-akca" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] hover:underline text-sm">akdenizdental.com/mustafa-akca</a>
              </div>
            </div>
          </div>

          {/* Clinical focus */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinical Focus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Prosthetic dentistry",
                "Aesthetic dentistry",
                "Full-mouth rehabilitation",
                "Zirconium restorations",
                "Smile makeovers",
              ].map(area => (
                <div key={area} className="flex gap-2 items-center p-3 bg-gray-50 rounded-xl">
                  <span className="text-[#1e40af] font-bold">✓</span>
                  <span className="text-gray-700 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviewer role */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Role as Medical Reviewer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dt. Mustafa Akça reviews clinical and safety-focused content on this site to ensure accuracy against current dental practice standards. His review covers treatment descriptions, safety guidance, aftercare protocols, risk information, and clinical claims — particularly on YMYL (Your Money or Your Life) content where accuracy directly affects patient decisions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As the founding owner of Akdeniz Dental Clinic in Antalya, Dt. Akça works directly with international patients seeking dental treatment in Turkey. This clinical context makes him well-placed to verify that the information presented on this site reflects real-world practice.
            </p>
            <Link href="/editorial-policy" className="text-[#1e40af] font-semibold hover:underline text-sm">
              → View our full editorial & medical review methodology
            </Link>
          </div>

          {/* External verification */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Verified Professional Profiles</h2>
            <div className="space-y-2">
              {[
                { label: "Akdeniz Dental Clinic — Mustafa Akça", href: "https://akdenizdental.com/mustafa-akca" },
                { label: "Akdeniz Dental Clinic — Our Team", href: "https://akdenizdental.com/our-team" },
                { label: "Antalya Dentists Directory", href: "https://www.antalyadishekimleri.com/dis-hekimi/mustafa-akca/" },
              ].map(link => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1e40af] hover:underline text-sm p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <span className="font-medium">{link.label}</span>
                  <span className="text-blue-300 text-xs ml-auto">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Reviewed pages */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medically Reviewed Content</h2>
            <p className="text-gray-600 text-sm mb-4">The following pages have been reviewed by Dt. Mustafa Akça for clinical accuracy:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {reviewedPages.map(page => (
                <Link key={page.href} href={page.href}
                  className="text-sm text-[#1e40af] hover:underline p-3 bg-gray-50 rounded-xl border border-gray-200 block hover:bg-gray-100 transition-colors">
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
