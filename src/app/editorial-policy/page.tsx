import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/editorial-policy" },
  title: "Editorial & Medical Review Policy | Teeth Done in Turkey",
  description:
    "How health and treatment information on Teeth Done in Turkey is written, medically reviewed, and kept up to date — including our price verification process and what this site is and is not.",
};

export default function EditorialPolicyPage() {
  return (
    <>
      <div className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Editorial &amp; Medical Review Policy
          </h1>
          <p className="text-xl text-blue-200">
            How we write, review, and maintain health and cost information on this site
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Site Is and Is Not</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Teeth Done in Turkey is a UK-based dental tourism advisory and booking service. We help UK
              patients research, compare, and book dental treatment at partner clinics in Istanbul and
              Antalya, Turkey.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>This site is not:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>A dental clinic or dental practice</li>
              <li>A registered healthcare provider</li>
              <li>A GDC (General Dental Council) registered practice</li>
              <li>A source of personalised dental or medical advice</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Nothing on this site should be taken as a substitute for professional dental examination
              and diagnosis. For personal dental advice, consult a qualified dentist.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Review Methodology</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pages covering health conditions, emergency dental situations, and clinical procedures are
              treated as high-scrutiny YMYL content. A page is described as medically reviewed only when a
              named qualified dental professional has actually completed the review and a review date is
              recorded. Until that evidence is present, the page carries an editorial/clinical information
              notice rather than a medical-review claim.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
              <p className="text-sm font-semibold text-blue-900 mb-1">Verified Medical Reviewer</p>
              <p className="text-gray-700 mb-2">
                <strong><Link href="/medical-reviewers/mustafa-akca" className="text-blue-700 hover:underline">Dt. Mustafa Akça</Link></strong><br />
                Dentist &amp; Medical Reviewer — Akdeniz Dental Clinic, Antalya
              </p>
              <p className="text-gray-600 text-sm">
                Reviewer attribution and review dates are shown only on pages for which the review has actually been completed and recorded.
                <Link href="/medical-reviewers/mustafa-akca" className="text-blue-700 hover:underline ml-1">View verified reviewer profile →</Link>
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-3">
              <strong>Review criteria applied to YMYL pages:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                Emergency escalation pathways (e.g. NHS 111, A&amp;E criteria, 999 thresholds) are
                checked against current NHS England guidance and NICE clinical guidelines
              </li>
              <li>
                Statements about infection risk, antibiotic use, and symptom progression are
                verified against NHS.uk and BDA (British Dental Association) resources
              </li>
              <li>
                NHS dental charge bands are verified against the current NHS England patient charge
                schedule (updated each April)
              </li>
              <li>
                Any claim that a patient should or should not seek treatment is reviewed for
                clinical accuracy and appropriate caveats
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              Pages carrying a &quot;Medically reviewed&quot; badge must identify the reviewer and review date.
              Other YMYL pages may still cite authoritative sources, but are not represented as medically
              reviewed until the review workflow has been completed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Price Verification Process</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All prices published on this site are in GBP and represent partner clinic list prices
              at the time of publication. They are <strong>indicative figures, not binding quotes</strong>.
              Individual treatment costs depend on clinical assessment.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Partner clinic prices are verified directly with clinic coordinators</li>
              <li>Price pages are reviewed and updated when partner pricing changes</li>
              <li>NHS charge band figures are updated each April following NHS England announcements</li>
              <li>UK private dentistry price comparisons are based on industry surveys and published
                  private practice rate cards; individual UK practice prices vary</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Each price guide page carries the date it was last verified. Sources, inclusions, the
              comparison calculation and the Turkey Treatment Total Cost framework are documented on the{" "}
              <Link href="/methodology" className="text-blue-700 underline">price and data methodology</Link>{" "}
              page. For a current personalised
              quote, use the{" "}
              <Link href="/free-treatment-plan" className="text-blue-700 underline">
                free treatment plan request
              </Link>{" "}
              or{" "}
              <Link href="/book-consultation" className="text-blue-700 underline">
                book a free consultation
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Editorial Standards</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Independence:</strong> Editorial content is written independently of partner
                clinics. Clinics do not pay to appear in guides or comparison pages.
              </li>
              <li>
                <strong>Transparency:</strong> This site earns revenue when patients book treatment
                through it. That commercial relationship is disclosed and does not influence health
                or safety guidance.
              </li>
              <li>
                <strong>Accuracy:</strong> Factual claims are sourced from NHS England, NICE, the
                BDA, partner clinic documentation, or direct clinical expertise. Unsourced claims
                are removed on editorial review.
              </li>
              <li>
                <strong>Currency:</strong> Pages are reviewed when underlying data changes — NHS
                charges, clinical guidelines, and clinic pricing.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">YMYL Pages on This Site</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The following pages carry YMYL health content and are prioritised for the medical-review workflow.
              Their individual page attribution is the source of truth for whether a named review has been completed:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <Link href="/guides/tooth-abscess-cant-afford-dentist" className="text-blue-700 underline">
                  Tooth Abscess — Can&apos;t Afford a Dentist?
                </Link>
              </li>
              <li>
                <Link href="/guides/severe-toothache-cant-afford-dentist" className="text-blue-700 underline">
                  Severe Toothache — Can&apos;t Afford a Dentist?
                </Link>
              </li>
              <li>
                <Link href="/guides/cant-afford-root-canal-uk" className="text-blue-700 underline">
                  Can&apos;t Afford a Root Canal in the UK?
                </Link>
              </li>
              <li>
                <Link href="/guides/no-nhs-dentist-what-to-do" className="text-blue-700 underline">
                  Can&apos;t Find an NHS Dentist? Step-by-Step Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact & Corrections</h2>
            <p className="text-gray-600 leading-relaxed">
              If you believe any health or clinical information on this site is inaccurate,
              please contact us at{" "}
              <a href="mailto:hello@teethdoneinturkey.co.uk" className="text-blue-700 underline">
                hello@teethdoneinturkey.co.uk
              </a>
              . We review correction requests and update pages promptly where warranted.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
