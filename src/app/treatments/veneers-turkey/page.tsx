import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SourcesList from "@/components/SourcesList";
import ExpertQuote from "@/components/ExpertQuote";

// Bump only when the page content is genuinely reviewed or changed.
const LAST_UPDATED = "2026-10-20";
const LAST_UPDATED_LABEL = "20 October 2026";
const linkClass = "text-[#1e40af] font-semibold hover:underline";
const extLinkClass = "text-[#1e40af] hover:underline";

export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "/treatments/veneers-turkey" },
  title: "Veneers Turkey – From £190 Per Tooth",
  description: "Get porcelain or E-max veneers in Turkey from £190 per tooth vs £900+ in the UK. JCI-accredited clinics, English-speaking dentists, 10-year guarantee.",
};

const faqs = [
  { question: "How long do veneers last in Turkey?", answer: "E-max and porcelain veneers typically last 10–15 years with proper care. Our partner clinics offer a 10-year structural guarantee on all veneer work." },
  { question: "How many days do I need in Turkey for veneers?", answer: "You'll typically need 5–7 days for a veneer procedure — 2 days for preparation and temporaries, then 2–3 days later for fitting the final veneers." },
  { question: "Are Turkish veneers the same quality as UK veneers?", answer: "Yes. Our partner clinics use the same Ivoclar E-max and Vita porcelain materials as top UK practices. The difference is the cost of labour and clinic overheads, not the materials or skill." },
  { question: "Will my veneers look natural?", answer: "Absolutely. Digital Smile Design technology allows you to preview your new smile before any work begins. Our dentists are specialists in aesthetic dentistry." },
  { question: "Can I pay monthly for veneers in Turkey?", answer: "Yes. Finance is available over 12, 24, or 36 months. A full set of 20 veneers at £3,800 is available from around £106/month over 36 months. Pre-qualify with no credit impact." },
];

const SITE_URL = "https://www.teethdoneinturkey.co.uk";
const PAGE_URL = `${SITE_URL}/treatments/veneers-turkey`;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Treatments", item: `${SITE_URL}/treatments` },
    { "@type": "ListItem", position: 3, name: "Veneers Turkey", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Veneers Turkey – From £190 Per Tooth",
  description: "Porcelain and E-max veneers in Turkey from £190 per tooth. UK price comparison, brands, procedure and how to book.",
  url: PAGE_URL,
  datePublished: "2026-01-01",
  dateModified: LAST_UPDATED,
  inLanguage: "en-GB",
  author: { "@type": "Organization", name: "Teeth Done in Turkey", url: SITE_URL },
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: { "@type": "MedicalProcedure", name: "Dental Veneer" },
};

export default function VeneersTurkeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Treatments", href: "/treatments" }, { label: "Veneers Turkey" }]} />
          </div>
          <div className="inline-block bg-blue-500/40 text-blue-100 text-sm px-4 py-1.5 rounded-full mb-4">Treatments</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Veneers Turkey – From £190 Per Tooth</h1>
          <p className="text-xl text-blue-200 mb-2">Transform your smile with premium porcelain veneers at a fraction of UK prices</p>
          <p className="mb-1 text-sm text-blue-300/70">✓ Prices last verified: June 2026</p>
          <p className="mb-6 text-sm text-blue-300/70">Last updated: <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time></p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="bg-white text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/veneers-turkey-cost" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">See Full Price Guide</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Cost comparison */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Veneers Cost: UK vs Turkey</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Porcelain veneers in Turkey start from £190 per tooth, compared with around £900 per tooth in the UK, a saving of about 79%. A full set of 20 veneers costs £3,800 in Turkey against roughly £18,000 in the UK, based on prices this site last verified in June 2026.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">UK Price (per tooth)</p>
                <p className="text-3xl font-extrabold text-red-500 line-through">£900</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Turkey Price (per tooth)</p>
                <p className="text-3xl font-extrabold text-green-600">£190</p>
                <p className="text-xs text-green-600 font-semibold">Save 79%</p>
              </div>
            </div>
            <p className="text-center mt-4 text-sm text-gray-600">Full set of 20 veneers: <strong>£3,800 in Turkey</strong> vs £18,000 in the UK</p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Prices rise with the material: E-max starts from £220 per tooth, zirconia from £250 and composite from £90. A quote should state the material, the number of teeth, whether temporary veneers, X-rays and follow-up are included, and what the guarantee covers. Flights and hotel are normally separate unless you book a package. Treat these figures as a starting point and ask for an itemised written plan based on your own X-rays. Our{" "}
              <Link href="/prices/veneers-turkey-cost" className={linkClass}>veneers cost guide</Link>{" "}
              breaks the prices down further.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Dental Veneers?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Dental veneers are ultra-thin porcelain or composite shells bonded to the front of your teeth to change their colour, shape or alignment. They suit teeth that are healthy but discoloured, chipped, worn, gapped or uneven. Veneers are a cosmetic treatment, not a way to treat decay or gum disease.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In Turkey, partner clinics use global brand materials, primarily Ivoclar E-max and Vita porcelain, which are also used in UK practices. The price difference largely reflects Turkey&apos;s lower labour and overhead costs. Quality still varies between clinics, so check the materials, the named dentist and the aftercare terms before you commit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Background reading on how veneers work is available from the{" "}
              <a href="https://www.nhs.uk/conditions/veneers/" target="_blank" rel="noopener noreferrer" className={extLinkClass}>NHS guide to veneers</a>{" "}
              and the{" "}
              <a href="https://en.wikipedia.org/wiki/Veneer_(dentistry)" target="_blank" rel="noopener noreferrer" className={extLinkClass}>Wikipedia entry on dental veneers</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Type of Veneer Is Right for Me?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              E-max suits most patients because it is thin, translucent and strong, zirconia suits people who grind their teeth and need maximum strength, and composite is the lowest-cost option for small corrections. Your dentist decides after examining your teeth, your bite and how many teeth need treating.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "E-max Veneers", desc: "The gold standard. Ultra-thin, incredibly strong lithium disilicate ceramic. Natural-looking and highly translucent.", price: "From £220/tooth" },
                { name: "Zirconia Veneers", desc: "Maximum durability. Ideal for patients who grind their teeth. Slightly less translucent but extremely strong.", price: "From £250/tooth" },
                { name: "Composite Veneers", desc: "More affordable option applied in a single visit. Good for minor corrections but less durable than porcelain.", price: "From £90/tooth" },
              ].map(v => (
                <div key={v.name} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p className="font-bold text-gray-900 mb-1">{v.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{v.desc}</p>
                  <p className="text-[#1e40af] font-bold text-sm">{v.price}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Porcelain and ceramic veneers are made in a laboratory from digital impressions, so they need more than one visit. Composite is built up directly on the tooth, usually in a single visit, which makes it easier to repair but also quicker to stain and wear. Prices above are starting figures per tooth, and the final choice should be written into your treatment plan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Are Veneers Fitted, Step by Step?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Veneers are fitted in five stages: a digital smile design, light preparation of the tooth surface, impressions with temporary veneers, bonding of the final veneers, and aftercare guidance. In Turkey the whole process is usually completed within 5 to 7 days.
            </p>
            <ol className="space-y-4">
              {[
                { title: "Digital Smile Design", desc: "Your dentist photographs your smile and creates a digital preview so you can see results before any work begins." },
                { title: "Tooth Preparation", desc: "A thin layer of enamel (0.3–0.5mm) is removed from the tooth surface to make room for the veneer." },
                { title: "Impressions & Temporaries", desc: "Digital impressions are sent to the in-house lab. Temporary veneers protect your teeth while your final ones are crafted." },
                { title: "Final Fitting", desc: "Your permanent veneers are bonded with dental adhesive. Fine adjustments are made until your bite and appearance are perfect." },
                { title: "Aftercare Guidance", desc: "You receive full aftercare instructions and the clinic&apos;s contact details for any questions after you return home." },
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="bg-[#1e40af] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{step.title}</p>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Do Veneers Last and How Do I Care for Them?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Porcelain and E-max veneers typically last 10 to 15 years with good care, while composite veneers generally need repair or replacement sooner. Brush twice a day, clean between your teeth, keep up regular check-ups, avoid biting hard objects and ask your dentist about a night guard if you grind your teeth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lifespan depends on your bite, grinding habits, oral hygiene, smoking and diet. Porcelain resists staining better than composite, but the edges of any veneer can chip under heavy force. Our partner clinics offer a 10-year structural guarantee on veneer work. Ask for the exact terms in writing, including what is covered and any conditions, such as attending check-ups.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our{" "}
              <Link href="/blog/how-long-do-dental-veneers-last" className={linkClass}>guide to how long veneers last</Link>{" "}
              covers lifespan by material in more detail.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Are Veneers Right for Everyone? Risks to Know About</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Veneers are not suitable for everyone, and tooth preparation is irreversible because a thin layer of enamel is removed. They are usually not advised for people with untreated decay or gum disease, or with heavy grinding that is not managed. Your dentist should examine you and review X-rays before agreeing a plan.
            </p>
            <ExpertQuote
              quote="A successful smile makeover is not simply about creating whiter or straighter teeth. It requires a personalised treatment plan that balances natural aesthetics, bite function, and long-term oral health. Every restoration should complement the patient's facial features while preserving healthy tooth structure whenever possible."
              name="Dr. Mustafa Akça"
              href="/medical-reviewers/mustafa-akca"
              role="Dentist, Aesthetic Dentistry & Treatment Planning | Akdeniz Dental, Antalya"
            />
            <p className="text-gray-600 leading-relaxed mb-4">
              Possible downsides include tooth sensitivity, chipping or a veneer coming loose, a colour mismatch with neighbouring natural teeth, and the need to replace veneers over time. Treating more teeth than necessary is a recognised concern, which is why it is worth understanding how many veneers you actually need. Read{" "}
              <Link href="/guides/turkish-veneers-safety" className={linkClass}>our Turkish veneers safety guide</Link>{" "}
              and the{" "}
              <a href="https://www.nhs.uk/conditions/veneers/" target="_blank" rel="noopener noreferrer" className={extLinkClass}>NHS veneers guidance</a>{" "}
              before you decide, and get a second opinion if a plan seems aggressive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Many Days Do I Need in Turkey for Veneers?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Most veneer treatments need 5 to 7 days in Turkey: about two days for preparation and temporary veneers, then two to three days later to fit the final veneers. Larger cases or extra treatment, such as gum work or whitening, can add time, so confirm the schedule in your written plan.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Plan flights and time off work with some flexibility, because the dentist may adjust the schedule once treatment starts. Ask how follow-up works once you are home, and keep copies of your records and X-rays. Our{" "}
              <Link href="/travel-to-turkey" className={linkClass}>travel to Turkey guide</Link>{" "}
              and{" "}
              <Link href="/blog/aftercare-for-dental-work-in-turkey" className={linkClass}>aftercare guide</Link>{" "}
              explain the practical side. For UK regulator advice on treatment abroad, see the{" "}
              <a href="https://www.gdc-uk.org/patients/dental-tourism" target="_blank" rel="noopener noreferrer" className={extLinkClass}>General Dental Council&apos;s dental tourism guidance</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Veneers or Crowns: Which Do I Need?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Choose veneers when your teeth are structurally sound and you want to change how they look, and choose crowns when a tooth is heavily filled, cracked, root-treated or weakened. A veneer covers the front of the tooth, while a crown covers the whole tooth and removes more of its structure.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Because crowns need more tooth reduction, a plan that jumps straight to crowns for healthy teeth deserves a question. Ask why veneers are not suitable and whether a mix of both would preserve more of your natural tooth. The same applies in reverse: a veneer on a badly weakened tooth may fail early.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our guide on{" "}
              <Link href="/guides/turkey-teeth-veneers-or-crowns" className={linkClass}>veneers or crowns in Turkey</Link>{" "}
              explains how much tooth is removed in each case, and our{" "}
              <Link href="/prices/hollywood-smile-turkey-package" className={linkClass}>Hollywood smile packages</Link>{" "}
              show how full-set crown work is priced.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Should I Ask at My Veneer Consultation?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Ask how many teeth really need treating, how much enamel will be removed, which material you are being offered and why, who will do the work, and what happens if something goes wrong. A clear, unhurried answer to each question is a good sign. A rushed or vague one is not.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bring recent photographs of your smile and, if you have them, X-rays from your UK dentist. Ask to see before-and-after photographs of cases similar to yours, and ask whether a trial smile or digital preview is included. Cosmetic veneers are usually not provided on the NHS, so many UK patients compare private UK quotes with treatment abroad. The{" "}
              <a href="https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" target="_blank" rel="noopener noreferrer" className={extLinkClass}>NHS page on dental treatment abroad</a>{" "}
              sets out what to think about before you travel.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you are unsure whether to go ahead, take your written plan to your own dentist for a second opinion before paying a deposit. This costs little compared with the price of redoing veneers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Do I Need Other Dental Work Before Veneers?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Often yes: decay, gum disease and failing fillings should be treated before veneers are bonded, because veneers need a healthy base. Whitening is usually done first if you want your natural teeth to match the shade you choose, since veneer ceramic does not change colour afterwards.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Missing teeth, bite problems or crowding may need separate treatment such as implants or orthodontics, and a dentist may advise those before any cosmetic work. Extra treatment can change both the price and the time you need to stay, so ask for it to be itemised in your written plan rather than added once you arrive.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you want veneers combined with whitening or other procedures in one trip, see our{" "}
              <Link href="/treatments/full-smile-makeover-turkey" className={linkClass}>smile makeover page</Link>{" "}
              for how combined treatment is planned and priced.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Should a Veneer Quote Include?</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              A good veneer quote lists the number of teeth, the material and brand, the dentist who will treat you, whether temporary veneers, X-rays and follow-up are included, and the guarantee terms. If any of these is missing, ask for it in writing before you pay a deposit.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "The number of teeth and the price per tooth, with the material named (E-max, zirconia or composite)",
                "The name and specialism of the dentist who will carry out the treatment",
                "What is included: consultation, X-rays, temporary veneers, adjustments and follow-up",
                "The written guarantee, including what it covers, for how long and under what conditions",
                "What happens if a veneer fails or needs adjusting after you return to the UK",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><span className="text-green-500 mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/book-consultation" className="bg-[#1e40af] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Book Free Consultation</Link>
            <Link href="/prices/veneers-turkey-cost" className="border-2 border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Full Veneers Price Guide</Link>
          </div>
          <p className="text-gray-600 text-sm">
            Not sure how many veneers you need? See{" "}
            <Link href="/blog/4-8-10-rule-for-veneers" className="text-[#1e40af] font-semibold hover:underline">the 4-8-10 rule for veneers</Link>{" "}
            for how dentists plan the number of teeth.
          </p>

          {/* Finance section */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Spread the Cost – Monthly Finance</h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              Veneers can be spread over 12, 24 or 36 months, for example £106 a month for 20 veneers over 36 months, assuming a 0% interest plan and subject to approval. The examples below use £3,800 for 20 veneers and £3,040 for 16 veneers, both at £190 per tooth.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { label: "16 Veneers", price: "£84/mo", term: "36 months" },
                { label: "20 Veneers", price: "£106/mo", term: "36 months" },
                { label: "20 Veneers", price: "£158/mo", term: "24 months" },
                { label: "20 Veneers", price: "£317/mo", term: "12 months" },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
                  <p className="text-xs text-gray-500 mb-0.5">{p.label}</p>
                  <p className="text-lg font-extrabold text-[#1e40af]">{p.price}</p>
                  <p className="text-xs text-gray-400">{p.term}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Each figure is the treatment total divided by the number of months. A plan that carries interest costs more, so check the representative APR and total repayable before you sign.
            </p>
            <Link href="/monthly-payment" className="inline-block text-[#1e40af] font-semibold hover:underline text-sm">→ View all finance options</Link>
          </div>

          {/* Internal linking */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Further</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "📘 Teeth in Turkey Guide", href: "/guides/teeth-in-turkey", desc: "The complete patient guide to treatments, safety and cost." },
                { title: "Hollywood Smile Packages", href: "/prices/hollywood-smile-turkey-package", desc: "20 or 24 crown all-inclusive packages with hotel and transfers." },
                { title: "Smile Makeover Turkey", href: "/treatments/full-smile-makeover-turkey", desc: "Full smile transformation including veneers, whitening and more." },
                { title: "Veneers Cost Guide", href: "/prices/veneers-turkey-cost", desc: "Complete UK vs Turkey price breakdown by veneer type." },
              ].map(item => (
                <Link key={item.href} href={item.href} className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 hover:bg-blue-100 transition-colors block">
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                  <p className="text-xs text-[#1e40af] font-semibold mt-2">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SourcesList
          sources={[
            { label: "NHS: Veneers", href: "https://www.nhs.uk/conditions/veneers/" },
            { label: "NHS: Dental treatment abroad", href: "https://www.nhs.uk/nhs-services/dentists/dental-treatment-abroad/" },
            { label: "General Dental Council: Dental tourism", href: "https://www.gdc-uk.org/patients/dental-tourism" },
            { label: "Wikipedia: Veneer (dentistry)", href: "https://en.wikipedia.org/wiki/Veneer_(dentistry)" },
          ]}
        />
      </div>

      <FAQSection faqs={faqs} title="Veneers Turkey FAQ" />

      <CTASection
        title="Ready for Your New Smile?"
        subtitle="Get a free veneer consultation and personalised quote within 24 hours."
        buttonText="Get My Free Quote"
        buttonHref="/book-consultation"
        whatsapp={true}
      />
    </>
  );
}
