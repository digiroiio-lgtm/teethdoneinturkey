export const VENEER_UPDATED = "2026-10-22";
export const VENEER_TITLE = "Veneers Turkey: Costs, Treatment & Aftercare";
export const VENEER_DESCRIPTION = "Compare veneers in Turkey, costs, materials, treatment stages, risks and aftercare. Prepare questions and a written plan before booking a consultation.";

export const veneerSources = {
  cleveland: { label: "Cleveland Clinic: veneers, preparation and risks", href: "https://my.clevelandclinic.org/health/treatments/23522-dental-veneers" },
  ada: { label: "American Dental Association: veneers", href: "https://www.mouthhealthy.org/all-topics-a-z/veneers" },
  rutgers: { label: "Rutgers School of Dental Medicine: veneers and candidacy", href: "https://sdm.rutgers.edu/veneerslumineers" },
  gums: { label: "NIH / NIDCR: periodontal disease and assessment", href: "https://www.nidcr.nih.gov/health-info/gum-disease" },
  hygiene: { label: "NIH / NIDCR: oral hygiene", href: "https://www.nidcr.nih.gov/health-info/oral-hygiene" },
  cdc: { label: "CDC: oral health and prevention", href: "https://www.cdc.gov/oral-health/about/index.html" },
  gdc: { label: "General Dental Council: going abroad for dental treatment", href: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment" },
  bda: { label: "British Dental Association: dental tourism survey and advice (2022)", href: "https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/" },
  ohf: { label: "Oral Health Foundation: Dr Nigel Carter on daily oral care (2019)", href: "https://www.dentalhealth.org/news/electric-toothbrushes-win-the-head-to-head-against-manual-in-record-breaking-new-study" },
};
type SourceKey = keyof typeof veneerSources;
export interface VeneerSection {
  id: string; title: string; answer: string; paragraphs: string[];
  sources?: SourceKey[];
  links?: { label: string; href: string }[];
  quote?: { text: string; name: string; role: string; date: string; source: SourceKey };
}

export const veneerSections: VeneerSection[] = [
  {
    id: "cost", title: "How much do veneers in Turkey cost?",
    answer: "This site's price guide lists E-max porcelain veneers from £190 per tooth and composite veneers from £80. These are indicative starting prices, not a personal quotation. Your total depends on the teeth treated, the proposed restoration, any preliminary care and the travel or aftercare services included in writing.",
    paragraphs: [
      "At the advertised £190 starting rate, 8 porcelain veneers work out at £1,520, 10 at £1,900, 16 at £3,040 and 20 at £3,800. These are simple treatment-only calculations, not separate package offers or recommendations to treat that many teeth. Adding two veneers at that rate adds £380 before any other charges. A smaller clinically appropriate plan can therefore matter more than a headline discount.",
      "The linked cost guide is the source of these figures, with its own September 2026 publication update. Ask the clinic to reconfirm current rates before paying. Compare like-for-like written quotes covering the same teeth, material, preparation, temporaries and follow-up. Do not assume that hotel accommodation, airport transfers, flights or remedial work are included in a per-tooth price.",
    ],
    links: [{ label: "See the dated veneer price guide and itemised cost factors", href: "/prices/veneers-turkey-cost" }],
  },
  {
    id: "definition", title: "What are dental veneers and what can they change?",
    answer: "Dental veneers are custom-made coverings placed on the front surfaces of teeth to change their appearance. They can address selected concerns about shape, colour, chips or gaps when the underlying teeth are suitable. They do not replace missing teeth, treat gum disease or automatically correct the cause of a bite problem.",
    paragraphs: [
      "The American Dental Association distinguishes a veneer, which covers the front of a tooth, from a crown, which covers the tooth more fully. That difference should be clear on your treatment plan. Ask the dentist to mark each proposed tooth on a diagram and identify whether the restoration is a veneer, crown, filling or something else.",
      "Describe the change you want in everyday terms, such as reducing the appearance of a chipped edge or matching a discoloured tooth. Bring photographs showing your usual smile rather than relying solely on an edited example. A useful consultation connects each proposed procedure to a specific concern and explains the consequences of leaving the tooth untreated.",
    ], sources: ["cleveland", "ada"],
  },
  {
    id: "suitability", title: "Who may be suitable for veneers?",
    answer: "Suitability depends on an examination of your teeth, gums, enamel and bite, together with your treatment goals. A photograph or online quote cannot establish that veneers are appropriate. A dentist may recommend treating existing disease, considering another option or doing no cosmetic treatment before agreeing to prepare healthy tooth surfaces.",
    paragraphs: [
      "Rutgers School of Dental Medicine identifies gum disease and insufficient enamel as reasons a different cosmetic procedure may be suggested. The point is an individual assessment, not a checklist that lets you diagnose yourself. Tell the dentist about grinding, previous restorations, sensitivity, smoking and any medicines or medical conditions that could affect care.",
      "A gum assessment may include measurements as well as an examination and relevant imaging. NIDCR explains that healthy gum pockets are usually 1 to 3 millimetres deep; deeper measurements can indicate disease. This is background about a clinical test, not a home eligibility threshold. Ask what your own findings mean and whether treatment should be postponed until your oral health is stable.",
    ], sources: ["rutgers", "gums"],
    links: [{ label: "Read our veneer safety guide", href: "/guides/turkish-veneers-safety" }],
  },
  {
    id: "materials", title: "How do porcelain, E-max and composite veneers differ?",
    answer: "Porcelain veneers are custom-made ceramic restorations; E-max is a named ceramic system used in some treatment plans. Composite veneers use tooth-coloured resin. Choosing between them requires discussion of the tooth, appearance, preparation, repair options and cost. A material brand alone cannot establish the suitability or quality of a proposed restoration.",
    paragraphs: [
      "The ADA describes composite as generally easier to repair if damaged, with less resistance to staining and wear than porcelain. Ask how the dentist expects your proposed material to behave in your particular bite, and request the material name in your records. Do not assume that every clinic uses the same product because its marketing uses a familiar brand name.",
      "Our cost guide lists E-max from £190 per tooth and composite from £80, while zirconia crowns start from £130. These are different products and restoration types. In particular, a quote described as 'zirconium veneers' may actually mean crowns. Ask whether the restoration covers the front surface or surrounds the tooth, and how much tooth tissue the plan would remove.",
    ], sources: ["ada"],
    links: [{ label: "Check the price guide's zirconium veneer explanation", href: "/prices/veneers-turkey-cost" }],
  },
  {
    id: "procedure", title: "What happens during veneer treatment?",
    answer: "Veneer treatment usually involves assessment and consent, planning the appearance, preparing suitable tooth surfaces, taking impressions or scans, and fitting the restorations. Laboratory-made veneers may require temporaries between appointments. The dentist should explain your own sequence and check the proposed appearance and bite before completing treatment, with follow-up arrangements agreed in advance.",
    paragraphs: [
      "For porcelain veneers, the ADA describes preparation, an impression or digital model, laboratory manufacture, fitting and bonding. Ask when you will be able to discuss the shape and shade, and how changes are handled before bonding. A digital preview is a communication aid; it is not a guarantee that your result will exactly match a screen image.",
      "Rutgers describes a process spanning 1 to 3 visits, although visits and days abroad are different measures. Your plan might require extra assessment or treatment. Request an appointment schedule with the purpose of each visit, the point at which preparation becomes irreversible and the arrangements if the dentist changes the plan after examining you. Keep a copy of the agreed version.",
    ], sources: ["ada", "rutgers"],
  },
  {
    id: "preparation", title: "How much enamel is removed and is treatment reversible?",
    answer: "Conventional veneer preparation removes some enamel and is irreversible. The amount varies with the tooth, material and proposed correction, so a single advertised thickness cannot describe every patient's treatment. Ask your dentist to explain the intended preparation for each tooth, the alternatives and what future maintenance or replacement may involve.",
    paragraphs: [
      "Avoid treating terms such as 'minimal prep' or 'no prep' as a complete clinical explanation. Ask what the term means in your written plan and whether any healthy tissue will be removed. If an online proposal changes substantially after the examination, take time to understand the reason rather than feeling committed because you have travelled.",
      "The GDC's guidance on treatment abroad encourages careful consideration of risks and appropriate information before proceeding. A useful consent discussion records the proposed procedure, relevant alternatives and the consequences of declining treatment. Save copies in a language you understand. It is reasonable to seek an independent opinion before agreeing to an irreversible cosmetic procedure, especially where many teeth are proposed.",
    ], sources: ["cleveland", "gdc"],
  },
  {
    id: "crowns", title: "How can I tell whether I am being offered veneers or crowns?",
    answer: "Ask for the restoration type beside every tooth number: a veneer covers the front surface, while a crown covers the tooth more fully. A package name such as 'Hollywood smile' does not identify the procedure. You need a tooth-by-tooth explanation of why the proposed restoration is appropriate and what alternatives exist.",
    paragraphs: [
      "Do not compare two totals until you know they describe the same work. For example, a 20-unit zirconia crown package is different from 20 E-max veneers even if both advertisements show a similar white smile. The material, preparation and clinical reason may differ. Ask the dentist to explain any change from the online proposal before giving consent.",
      "A practical comparison sheet has columns for tooth number, current condition, proposed treatment, material and reason. Mark any tooth that has no explanation and take the sheet to a second consultation if needed. Our dedicated veneers-or-crowns guide provides more background, while the package page helps you identify what a crown package includes. Neither substitutes for an individual examination.",
    ],
    links: [{ label: "Understand veneers versus crowns", href: "/guides/turkey-teeth-veneers-or-crowns" }, { label: "Compare Hollywood smile crown packages", href: "/prices/hollywood-smile-turkey-package" }],
  },
  {
    id: "number", title: "How many veneers do I actually need?",
    answer: "The appropriate number depends on the teeth visible in your smile, your goals and the condition of each tooth. There is no universal requirement to treat a full arch or both arches. Ask the dentist to justify every proposed veneer and show whether a smaller plan could address your main concern.",
    paragraphs: [
      "Consider a planning example rather than a patient case: someone concerned about a single chipped edge should ask why a proposal includes many otherwise healthy teeth. Someone seeking an even shade should ask how the proposed veneers will relate to untreated teeth. These examples illustrate questions to discuss; they do not determine which treatment an individual needs.",
      "The price effect is measurable. At this site's £190 starting rate, increasing a plan from 8 to 10 veneers adds £380, while increasing from 10 to 16 adds £1,140. Both calculations exclude travel and other care. Our guide to the '4-8-10 rule' explains common planning language, but those numbers are not a clinical rule or a reason to prepare extra teeth.",
    ],
    links: [{ label: "Read about the 4-8-10 planning shorthand", href: "/blog/4-8-10-rule-for-veneers" }, { label: "Review the calculation's price source", href: "/prices/veneers-turkey-cost" }],
  },
  {
    id: "travel", title: "How long should I plan to stay in Turkey?",
    answer: "This site's indicative veneer itinerary is around 5 to 7 days for an uncomplicated case, but your clinic must confirm the schedule after assessment. Do not book an inflexible return flight around a marketing estimate. Allow time for checking the fit, discussing adjustments and understanding what happens if treatment takes longer.",
    paragraphs: [
      "Ask which appointment includes the examination, when preparation is proposed, when the laboratory work is expected and when the final review takes place. If gum treatment or another procedure is needed first, the schedule may change. A clinic should explain whether care needs staging rather than compressing every step into the available holiday dates.",
      "Eddie Crouch's public BDA statement highlights why preparation and follow-up belong in travel planning. His advice is general dental-tourism guidance, not an assessment of this service or a specific Turkish clinic. Before departure, save the treating dentist's details, the proposed appointment list, the local contact number and the process for obtaining your records. Our travel guide covers the practical arrangements separately.",
    ],
    quote: { text: "Complex courses of treatment typically require detailed preparation and a number of follow-up visits.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time of the statement", date: "2022", source: "bda" },
    sources: ["gdc"], links: [{ label: "Plan your travel to Turkey", href: "/travel-to-turkey" }],
  },
  {
    id: "risks", title: "What risks and limitations should I discuss?",
    answer: "Discuss irreversible preparation, sensitivity, chips, loosening, appearance differences and the possibility of future repair or replacement. Ask how your oral health and bite affect the proposal. A useful consultation explains what could go wrong, how problems would be assessed and who would provide care after you return to the UK.",
    paragraphs: [
      "Cleveland Clinic discusses sensitivity, loss of enamel and the possibility of a veneer becoming dislodged. The ADA also notes that grinding or clenching may make veneers unsuitable. A stronger-sounding material does not remove the need to assess those issues. Ask what signs should prompt a call to the clinic and whether any protective appliance is appropriate for your own circumstances.",
      "Be careful with reassuring statistics. The BDA's 2022 survey involved 1,000 UK dentists: 93% expressed concerns about continuity of care and 77% about redress. These are dentists' reported concerns, not the percentage of overseas patients who develop complications, and not a Turkey-specific veneer failure rate. The practical lesson is to agree follow-up and complaint arrangements before treatment, rather than infer personal risk from an unrelated denominator.",
    ], sources: ["cleveland", "ada", "bda"], links: [{ label: "Explore veneer safety and questions to ask", href: "/guides/turkish-veneers-safety" }],
  },
  {
    id: "lifespan", title: "How long do veneers last and what does a guarantee mean?",
    answer: "Veneers are restorations that may need maintenance, repair or replacement over time; they are not a lifetime promise. Published lifespan ranges are broad and cannot predict your result. A clinic guarantee is a separate contract, so request the covered treatments, exclusions, review requirements and responsibility for travel or local care in writing.",
    paragraphs: [
      "Rutgers gives a broad replacement range of about 7 to 20 years in its patient information. That range is educational guidance, not a measured result for our partner clinics, a warranty period or an assurance that your veneers will last a particular number of years. Your dentist should explain factors relevant to your own mouth.",
      "Compare a guarantee by what it actually pays for. Ask whether a chip, debonding or replacement requires an examination at the original clinic; whether routine maintenance is excluded; and who pays for flights, accommodation and treatment in the UK. Keep the version provided before your deposit. Our lifespan guide explains the longer-term planning questions without treating a guarantee as clinical evidence.",
    ], sources: ["rutgers"], links: [{ label: "Read the veneer lifespan guide", href: "/blog/how-long-do-dental-veneers-last" }],
  },
  {
    id: "care", title: "How should I care for veneers day to day?",
    answer: "Continue caring for the natural teeth and gums around your veneers, following the treating dentist's instructions. Clean carefully with fluoride toothpaste, clean between teeth and attend the reviews recommended for you. Veneers change the visible surface of a tooth; they do not remove the need for ongoing prevention and professional care.",
    paragraphs: [
      "CDC advice supports brushing twice daily and flossing daily. NIDCR explains the role of plaque removal and fluoride toothpaste in protecting teeth. Ask your dentist or hygienist to demonstrate cleaning around your own restorations and advise which interdental aid fits. Check when to resume your usual routine after fitting, because immediate instructions may differ from long-term maintenance.",
      "Dr Nigel Carter's public advice reinforces the daily routine rather than promising a particular veneer lifespan. His statement below was published in 2019 and is not an endorsement of our service. Keep the clinic's written instructions, note any appliance recommendations and arrange a regular dentist to monitor your teeth and gums at home. Report a change in the way your bite feels instead of trying to adjust a restoration yourself.",
    ],
    quote: { text: "you should be brushing for two minutes, twice a day, with a fluoride toothpaste.", name: "Dr Nigel Carter OBE", role: "Chief Executive at the Oral Health Foundation at the time of the statement", date: "25 June 2019", source: "ohf" },
    sources: ["cdc", "hygiene"], links: [{ label: "Read our treatment aftercare guide", href: "/blog/aftercare-for-dental-work-in-turkey" }],
  },
  {
    id: "consultation", title: "What should I bring and ask at a consultation?",
    answer: "Bring your goals, relevant medical and dental history, a medicine list and any recent records you already hold. Ask who will examine and treat you, what each tooth needs, which alternatives were considered and how consent works. Request a written plan you can read and compare before paying or committing to treatment.",
    paragraphs: [
      "If you have recent X-rays, ask your own dentist how they can be shared appropriately; the treating dentist decides whether additional imaging is needed. Mention previous sensitivity, allergies, grinding and any earlier cosmetic work. Ask for permission to take notes and request an explanation of unfamiliar terms rather than relying on a sales summary.",
      "Use two questions to test whether a proposal is clear: 'Why does this tooth need this restoration?' and 'What happens if I choose a less extensive option?' The GDC's guidance is a useful independent checklist for choosing treatment abroad. If you are uncertain, take the proposal to your usual dentist for another opinion. Confirm any consultation charge in advance instead of assuming a second opinion is free.",
    ], sources: ["gdc"], links: [{ label: "Request a consultation", href: "/book-consultation" }],
  },
  {
    id: "other-treatment", title: "What if I need other treatment before veneers?",
    answer: "Existing dental problems may need attention before a cosmetic veneer plan can proceed. Ask the dentist to separate necessary oral-health care from optional appearance changes and explain the order of treatment. A combined smile makeover should still have an individual reason, cost and consent discussion for every proposed procedure.",
    paragraphs: [
      "Gum disease affects the tissues supporting teeth. NIDCR describes assessment through gum examination and other appropriate tests; veneers cannot replace that assessment or its treatment. If the examination identifies a problem, ask how the finding changes the proposed plan and when the dentist expects to review progress before considering cosmetic work.",
      "For planning purposes, request separate written totals for preliminary care, veneers and optional extras. Ask whether treatment could require another visit or a revised travel schedule, and whether your deposit remains refundable if the clinical recommendation changes. Our smile makeover page explains how different procedures may appear in one plan. A combined package label should never prevent you from understanding or declining an individual part.",
    ], sources: ["gums"], links: [{ label: "Understand combined smile makeover planning", href: "/treatments/full-smile-makeover-turkey" }],
  },
  {
    id: "quote", title: "What should my written quote and payment plan include?",
    answer: "Your written quote should identify the treating provider, tooth numbers, restoration types, materials, clinical fees and included services. It should also explain cancellation terms, changes after examination, follow-up and complaints. If considering finance, compare the APR, total repayable and repayment schedule with the cash price before deciding whether it is affordable.",
    paragraphs: [
      "Use the same checklist for each provider. Record whether assessment, imaging, temporaries, final fitting, adjustments and routine reviews are included. List hotel, transfers and flights separately. The £3,800 arithmetic example for 20 veneers above is a treatment-only illustration using a starting rate; it is not confirmation that all of these services are covered.",
      "Do not infer a lending offer by dividing that total by a number of months. Interest, fees, a deposit and eligibility can change what you pay. Ask for the lender's actual terms and the total cost of credit before signing. Our payment information is a starting point for questions, while our detailed cost page explains which treatment assumptions must be matched when comparing quotes.",
    ], links: [{ label: "Read monthly payment information", href: "/monthly-payment" }, { label: "Compare detailed treatment costs", href: "/prices/veneers-turkey-cost" }],
  },
  {
    id: "return-home", title: "What should I arrange before returning to the UK?",
    answer: "Before leaving, obtain your treatment record, material details, written aftercare and a clear contact route for concerns. Confirm who assesses problems, where follow-up takes place and which costs you may face. A remote coordinator can help with communication, but examination and treatment decisions belong to the qualified clinician responsible for your care.",
    paragraphs: [
      "Ask for a final appointment to discuss the fit and your questions, together with any planned review dates. Save the invoice, consent documents, guarantee terms and correspondence with the provider. If another dentist later examines you, those records help explain what was done and which materials were used. Check that you can access the documents after returning home.",
      "The GDC encourages patients to think about aftercare and what happens if something goes wrong with treatment abroad. Ask whether the original clinic expects you to return for an adjustment and what the process is for arranging local assessment. Do not assume a UK dentist, the NHS or travel insurance has agreed to provide or fund follow-up. Our aftercare guide sets out further practical questions.",
    ], sources: ["gdc"], links: [{ label: "Plan treatment aftercare", href: "/blog/aftercare-for-dental-work-in-turkey" }, { label: "Browse the wider patient guide", href: "/guides/teeth-in-turkey" }],
  },
];

export const veneerFaqs = [
  { question: "Can I get veneers without an in-person examination?", answer: "An online conversation can help you gather information and discuss an indicative proposal, but it cannot establish clinical suitability or replace examination by the treating dentist. Ask which decisions remain provisional until your teeth, gums and bite have been assessed. Keep the online proposal and compare it with the final written plan. If the recommended work changes, ask why and take time to consider the alternatives before agreeing to preparation or paying for additional procedures." },
  { question: "Does a 20-veneer price mean I need 20 veneers?", answer: "No. A quantity in an advertisement describes a pricing example, not the number of teeth you need treated. This site's £3,800 illustration is 20 multiplied by the advertised £190 starting rate, excluding other costs. Ask for a reason beside every tooth in your own plan and compare a smaller option where appropriate. A named package or a discount for more units should not replace the dentist's explanation of the clinical purpose and alternatives for each tooth being considered." },
  { question: "Can veneers fix teeth grinding or gum disease?", answer: "Veneers are cosmetic restorations and should not be treated as a solution to gum disease or grinding. Tell the dentist about bleeding gums, previous gum treatment, clenching and wear. Ask how those findings affect your options and whether other care is needed before cosmetic treatment is considered. The published sources linked above explain why healthy supporting tissues and appropriate case selection matter. An examination is needed to understand what applies to you rather than relying on photographs alone." },
  { question: "Is a guarantee the same as a promised veneer lifespan?", answer: "No. A guarantee sets out a provider's contractual obligations, while lifespan depends on the restoration and individual circumstances. Ask for the guarantee before paying and check exclusions, review requirements, claim steps and responsibility for travel or local care. A long advertised term does not establish that every possible problem is covered. Keep your agreed version with the invoice and treatment record, and ask who handles a claim if the original treating dentist is unavailable when you need help." },
  { question: "Who is responsible for the information and treatment?", answer: "Teeth Done in Turkey provides patient information and coordination rather than acting as the treating dental clinic. This page is an editorial guide based on the sources identified below and the site's linked cost information. Public expert quotations explain general advice and do not endorse our service. Your named treating dentist is responsible for examination, diagnosis, consent and clinical recommendations. Ask for the provider's own details and agreement so you understand who supplies treatment, aftercare and any guarantee." },
];
