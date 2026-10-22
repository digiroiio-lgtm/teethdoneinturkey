export const GUIDES_UPDATED = "2026-10-21";
export const GUIDES_UPDATED_LABEL = "21 October 2026";
export const GUIDES_TITLE = "Dental Treatment in Turkey Guides";
export const GUIDES_DESCRIPTION = "Choose a reading path for dental treatment in Turkey: compare procedures, written quotes, clinic checks, travel and aftercare, with UK care options and sources.";

export const guideSources = {
  gdc: { title: "General Dental Council: going abroad for dental treatment", url: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment" },
  bda: { title: "British Dental Association: survey of 1,000 UK dentists, 14 July 2022", url: "https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom/" },
  fda: { title: "U.S. FDA: dental implant components, records and follow-up", url: "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know" },
  nih: { title: "NIH NIDCR: gum disease and clinical assessment", url: "https://www.nidcr.nih.gov/health-info/gum-disease" },
  cdc: { title: "CDC: oral health and daily care, 15 May 2024", url: "https://www.cdc.gov/oral-health/about/index.html" },
  nhsCosts: { title: "NHSBSA: NHS dental charges in England from 1 April 2026", url: "https://faq.nhsbsa.nhs.uk/knowledgebase/article/KA-02003/en-us" },
  nhsChecks: { title: "NHS: dental check-ups and individual recall intervals", url: "https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-check-ups/" },
  nhsUrgent: { title: "NHS: dental abscess and urgent-care routes", url: "https://www.nhs.uk/conditions/dental-abscess/" },
  fca: { title: "FCA: Financial Lives May 2024 survey, release of 16 May 2025", url: "https://www.fca.org.uk/news/press-releases/more-people-have-bank-accounts-one-ten-have-no-cash-savings" },
} as const;
export type GuideSource = keyof typeof guideSources;
type Guide = { title: string; href: string; paragraphs: string[]; sources?: GuideSource[] };
type Group = {
  id: string; label: string; title: string; answer: string; paragraphs: string[];
  sources: GuideSource[]; guides: Guide[];
  quote?: { text: string; name: string; role: string; source: GuideSource; date: string };
};

// Keep all fourteen existing destinations. This refresh edits the hub, not the
// linked guides, and does not claim new reviews or update dates for those pages.
export const guideGroups: Group[] = [
  {
    id: "start", label: "Getting started", title: "Where should I start researching dental treatment in Turkey?",
    answer: "Start with the complete UK patient guide, then choose a reading path for your main concern: treatment, cost, travel or access to care at home. Use the library to prepare questions and compare written information. A guide cannot diagnose your teeth or confirm that a particular procedure is suitable.",
    paragraphs: [
      "Make a short decision record before browsing: what is bothering you, which teeth or existing restorations are involved, and what you want to understand before booking. Keep essential treatment separate from optional changes in appearance. In the BDA’s 2022 survey of 1,000 UK dentists, 98% identified cheaper costs as a factor attracting patients abroad and 31% identified perceived shorter waits. Those findings describe dentists’ views, not a guarantee about prices or appointment availability.",
    ],
    sources: ["gdc", "bda"],
    guides: [{
      title: "What does the complete UK patient guide help me decide?", href: "/guides/teeth-in-turkey",
      paragraphs: [
        "The complete guide gives you the overall sequence: understand the problem, compare procedures, check the clinician, obtain a written estimate and plan follow-up before travelling. Read it first if you have not yet chosen a treatment or are comparing several possible approaches.",
        "Use it to create a question list rather than a shopping list of procedures. Note what needs a dentist’s examination and what the coordination team can explain, such as appointments or transport. Return to the treatment and cost paths below when you need a more specific answer. Keep personal clinical decisions with the dentist who assesses you.",
      ],
    }],
  },
  {
    id: "treatment", label: "Treatment and safety", title: "Which guides explain treatment options and safety?",
    answer: "Use the treatment guides to distinguish veneers, crowns and implants before comparing prices or photographs. Each approach changes or replaces teeth in a different way. Read the relevant procedure guide alongside the safety guide, then ask a qualified dentist about alternatives, preparation, risks and the maintenance your own plan would require.",
    paragraphs: [
      "A photograph cannot show every clinical issue. NIDCR describes gum assessment as part of diagnosis and notes that healthy gum pockets are usually 1–3 millimetres; a measurement is interpreted by a dental professional, not used for self-diagnosis. The FDA explains that an implant system has a body and abutment and may include a fixation screw. Ask which components and final restoration the proposed treatment actually includes. These official sources support the questions below, not an endorsement of a particular clinic.",
    ],
    sources: ["nih", "fda"],
    guides: [
      {
        title: "What should I understand before choosing dental implants?", href: "/guides/dental-implants-turkey",
        paragraphs: [
          "The implant guide explains the distinction between replacing a missing tooth and supporting a larger restoration. Start here when teeth are missing or may need extraction, rather than assuming a veneer or crown can solve the same problem. Ask the dentist about retaining treatable teeth and alternatives such as bridges or dentures.",
          "Write down the implant system, abutments, temporary teeth, final restoration and planned stages. The FDA recommends retaining the brand and model details for future care. Healing may take several months or longer, so a package’s hotel duration does not establish when final teeth can be fitted.",
        ], sources: ["fda"],
      },
      {
        title: "How are veneers different from crowns?", href: "/guides/turkey-teeth-veneers-or-crowns",
        paragraphs: [
          "A veneer covers the front surface of a tooth, while a crown covers a prepared tooth more extensively. Use this comparison when a quotation uses the terms interchangeably or when you need to understand what tooth preparation is proposed. The procedure should be identified for each tooth.",
          "Ask what tissue would be removed, whether the change can be reversed and what future replacement might involve. Do not choose more restorations simply because a larger package appears to have a lower average price. Request an explanation of less invasive alternatives and a tooth-by-tooth plan before deciding. The relevant clinical finding matters more than the package label.",
        ],
      },
      {
        title: "How should I compare veneer materials?", href: "/guides/best-veneers-turkey",
        paragraphs: [
          "The materials guide helps you ask about ceramic and composite options, their intended use and the laboratory specification. Read it when quotations name different materials or when you are unsure whether a proposed restoration is actually a veneer. A brand name alone does not establish suitability or the likely appearance.",
          "Compare the procedure, preparation, shade discussion, temporary stages and adjustment process as well as the material. Ask how the dentist checks your bite and how the restoration will be maintained. Bring a reference photograph to explain preferences if useful, but avoid treating another person’s result as a promise. Record the specification in the written estimate so competing plans can be compared fairly.",
        ],
      },
      {
        title: "Which safety questions should I ask before consenting?", href: "/guides/turkish-veneers-safety",
        paragraphs: [
          "The safety guide covers questions about the treating professional, preparation, existing disease, laboratory work and follow-up. Use it before paying a deposit or agreeing to extensive changes. A clinic’s photographs, popularity or advertised saving cannot replace an examination and a clear discussion of alternatives.",
          "Check who will treat you, their relevant qualifications, insurance and the local complaints route. The GDC recommends speaking to your own dentist before treatment abroad and asking about complications and additional costs. Ask for time to consider the proposal if anything remains unclear. Consent should follow an understandable explanation of your own plan, rather than pressure to match a promotion’s deadline.",
        ], sources: ["gdc"],
      },
    ],
  },
  {
    id: "cost", label: "Costs and affordability", title: "How should I compare costs and payment options?",
    answer: "Compare the complete written treatment scope before comparing totals, package names or ways to pay. Check the procedures, materials, visits, accommodation, transfers and exclusions. Use NHS information to understand options at home, then make a separate household-budget decision. A treatment estimate is not a credit offer or a clinical recommendation.",
    paragraphs: [
      "For context, NHSBSA lists England’s charges from 1 April 2026 as Band 1 £27.90, Band 2 £76.60 and Band 3 £332.10. The preceding charges were £27.40, £75.30 and £326.70. Our calculations from those figures give increases of approximately 1.8%, 1.7% and 1.7% respectively, rounded to one decimal place. These are NHS course-of-treatment charges, not private prices, overseas package rates or evidence that an appointment is available. Other UK nations have different arrangements.",
    ],
    sources: ["nhsCosts"],
    quote: { text: "Our data shows that finances are stretched for many", name: "Sarah Pritchard", role: "Executive Director of Consumers and Competition at the Financial Conduct Authority at the time", source: "fca", date: "16 May 2025" },
    guides: [
      {
        title: "Which figures belong in a complete treatment-price comparison?", href: "/prices/turkey-teeth-cost",
        paragraphs: [
          "The cost guide helps identify the procedures and inclusions behind a headline figure. Compare the same tooth count, restoration type, materials and visits before interpreting a difference in price. Keep any UK private quotation separate from NHS charge bands and compare it with the proposed overseas plan in writing.",
          "Mark each item as included, excluded or awaiting clinical assessment. Record whether scans, extractions, temporary teeth, abutments, grafting and planned reviews have been addressed. If the final plan changes after examination, request a revised total before agreeing. This reading path helps organise a comparison; only the treating clinic can confirm the price and scope for your case.",
        ],
      },
      {
        title: "What if the treatment I need is difficult to afford?", href: "/guides/cant-afford-dental-treatment-uk",
        paragraphs: [
          "The affordability guide helps separate access to necessary care, possible help with NHS costs, private estimates and a later decision about treatment abroad. Read it before assuming that travel or borrowing is the only option. Ask a dentist to distinguish urgent needs from work that can be considered later.",
          "The FCA’s May 2024 survey, published in May 2025, found that 10% of UK adults had no cash savings and another 21% had less than £1,000 for emergencies. These national figures do not determine your personal budget. Keep essential bills and existing commitments visible, and seek independent money guidance if the decision feels uncertain.",
        ], sources: ["fca"],
      },
      {
        title: "What should a dental package include in writing?", href: "/guides/turkey-teeth-packages",
        paragraphs: [
          "The package guide separates treatment, accommodation and transport from the total cost of the trip. Use it when two offers both say all-inclusive but describe different services. An included hotel still needs a room arrangement, number of nights and confirmation of which treatment visits the stay covers.",
          "Create a simple comparison sheet with the provider, currency, payment date and cancellation terms for each item. Confirm flights, companion costs, extra nights and travel for any later review separately. If implants involve staged care, ask about both itineraries. Keep uncertain costs visible rather than assuming a package label caps every expense. Request the clinic’s answer in writing before making non-refundable travel bookings.",
        ],
      },
      {
        title: "What extra detail matters in a veneer package?", href: "/guides/veneers-turkey-packages",
        paragraphs: [
          "A veneer package needs a clear restoration type, material and tooth count, alongside the agreed stay and transfers. Use this guide when a package combines cosmetic wording with a fixed number of units. Confirm that the proposed procedure is a veneer rather than a crown and that every tooth has a clinical reason for treatment.",
          "Ask about temporary restorations, laboratory stages, appearance discussions, bite checks and any preparatory treatment. If your plan involves fewer teeth or another procedure, obtain an individual quote instead of multiplying a package average. Read the written aftercare and repair terms with the price, including whether a later appointment could require travel. A lower price per unit does not decide what your teeth need.",
        ],
      },
    ],
  },
  {
    id: "travel", label: "Travel and continuity of care", title: "Which guides help me plan travel and aftercare?",
    answer: "Use the Antalya guide to plan around confirmed clinical appointments, then agree how reviews and problems will be handled after you return. Arrange travel after understanding the treatment stages and payment terms. A short stay, an attractive hotel or a warranty does not establish that your final treatment or follow-up is complete.",
    paragraphs: [
      "In the BDA’s 2022 survey, 93% of responding dentists raised continuity-of-care concerns and 77% mentioned difficulty seeking redress. These figures describe professional concerns, not complication rates among patients or a Turkey-specific outcome. Separately, NHS routine-check-up intervals can range from 3 months to 2 years according to risk; procedure-specific reviews follow the treating dentist’s instructions. CDC guidance supports twice-daily brushing and daily cleaning between teeth. Ask how those habits apply to your restorations.",
    ],
    sources: ["bda", "nhsChecks", "cdc"],
    quote: { text: "Complex courses of treatment typically require detailed preparation and a number of follow-up visits.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time", source: "bda", date: "14 July 2022" },
    guides: [{
      title: "What should I arrange before travelling to Antalya?", href: "/guides/turkey-teeth-antalya",
      paragraphs: [
        "The Antalya guide helps organise the practical journey: the appointment location, travel arrangements, accommodation, communication and recovery time. Use it after the clinic has described the proposed stages. Do not choose a flight home solely from an advertised package duration; ask the clinical team when travel is appropriate for your case.",
        "Prepare a contact sheet with the clinic, treating professional and the route for urgent questions. Confirm who pays for unexpected travel, accommodation or remedial care. Before leaving, request your treatment summary, relevant imaging, restoration details and aftercare instructions. Keep an alternative plan if an appointment changes, and leave clinical decisions about healing and readiness with the treating dentist.",
      ],
    }],
  },
  {
    id: "uk-care", label: "UK access and urgent care", title: "Which guides cover urgent care and access in the UK?",
    answer: "Use the UK-care guides when pain, infection, cost or difficulty finding a dentist is the immediate problem. Seek appropriate local assessment before planning elective treatment abroad. An abscess needs urgent dental treatment. If you cannot access a dentist, NHS 111 can explain where to seek help; appointment charges or exemptions still need checking.",
    paragraphs: [
      "The NHS says an abscess will not resolve on its own. For difficulty breathing, speaking or swallowing, significant mouth swelling, or eye swelling or visual problems, follow its emergency advice to call 999 or go to A&E. For suspected abscess without those emergency signs, request urgent dental care or contact NHS 111. Reading a guide or sending an overseas enquiry does not arrange an emergency appointment. NHSBSA lists unscheduled dental care in England at £27.90 from April 2026, unless an exemption applies.",
    ],
    sources: ["nhsUrgent", "nhsCosts"],
    guides: [
      {
        title: "What can I try if I cannot find an NHS dentist?", href: "/guides/no-nhs-dentist-what-to-do",
        paragraphs: [
          "The access guide helps you distinguish a routine search for a practice from the need for an urgent appointment. Start by explaining whether you have pain or another immediate problem. Ask local practices about current NHS availability, and use the relevant NHS route when you cannot obtain urgent assessment.",
          "Keep a record of whom you contacted and whether the offer was NHS or private. An examination price, a treatment estimate and availability for a later course of care are separate questions. Ask about support with charges if relevant. An online listing or a referral does not guarantee a place, and an overseas holiday should not substitute for assessment of an active dental problem.",
        ],
      },
      {
        title: "What should I ask if I cannot afford a root canal?", href: "/guides/cant-afford-root-canal-uk",
        paragraphs: [
          "The root-canal guide helps you ask whether the tooth can be retained, which treatment is clinically appropriate and how to understand the complete estimate. In England, NHS Band 2 is £76.60 from April 2026; a course requiring a crown can fall within Band 3 at £332.10. Availability and clinical assessment still apply.",
          "Ask whether the quotation covers the root treatment, final filling or crown, reviews and any referral. A private fee is separate from NHS charge bands. Discuss the consequences of delaying care and the alternatives with a dentist rather than deciding from a price alone. If you have swelling or urgent pain, use the urgent-care route while cost questions are being resolved.",
        ], sources: ["nhsCosts"],
      },
      {
        title: "What should I do if I think I have a dental abscess?", href: "/guides/tooth-abscess-cant-afford-dentist",
        paragraphs: [
          "The abscess guide directs you towards urgent assessment rather than waiting for an overseas appointment. The NHS advises an urgent dentist appointment or help from NHS 111 if an abscess is suspected. Emergency warning signs require the emergency route described above. A telephone referral does not mean the resulting treatment is automatically free.",
          "Explain your symptoms and any difficulty obtaining care when you contact the service. Ask about appointment charges and possible exemptions, but do not let a price comparison replace urgent assessment. A dentist decides how the infection should be treated and whether drainage, root treatment or another procedure is needed. General online information cannot establish the cause or prescribe treatment for you.",
        ], sources: ["nhsUrgent"],
      },
      {
        title: "Which guide should I read for severe toothache?", href: "/guides/severe-toothache-cant-afford-dentist",
        paragraphs: [
          "The toothache guide explains how to seek help and prepare useful information for a dentist. Use it if pain is interrupting everyday life or you are unsure where to obtain an appointment. Describe when the pain started, any swelling and existing dental work rather than trying to select a procedure yourself.",
          "Contact a dentist or the appropriate NHS urgent-care service when needed. Read any medicine information carefully and ask a pharmacist or clinician if you are uncertain about temporary symptom relief. Symptoms can have different causes, so an online estimate cannot confirm whether you need a filling, root treatment or extraction. Arrange local assessment first, then consider longer-term choices once the immediate issue is understood.",
        ],
      },
    ],
  },
];

export const guidesFaqs = [
  { question: "Does reading a guide give me a confirmed treatment plan?", answer: "No. The guides help you understand terminology, compare written information and prepare questions. A qualified dentist must assess your teeth, gums, bite and medical history before confirming suitable treatment. Photographs may help an initial discussion but cannot establish every diagnosis. Record which parts of an estimate remain provisional and ask for changes in writing after examination. You can request explanations, consider alternatives or seek another opinion before consenting. The patient coordination service does not replace clinical assessment." },
  { question: "Are the update dates the same as medical-review dates?", answer: "No. The date at the top records an editorial refresh of this guide library and its source checks. It does not mean every linked page has been rewritten or that a clinician has reviewed this new hub text. Check each guide’s own attribution and review notice separately. A medical review is claimed only where a named reviewer and recorded review date are present. The editorial policy explains responsibility, corrections and how clinical information is handled. Published expert quotations do not imply endorsement of this service." },
  { question: "Can a national survey predict my treatment result or bill?", answer: "No. The BDA figures summarise UK dentists’ reported experiences or concerns, while FCA figures describe the wider UK adult population. Neither establishes a clinic’s complication rate, a Turkey-specific outcome or an affordable budget for your household. Read the stated population and publication date with the number. Use the findings to prepare practical questions about follow-up and costs, then obtain an individual clinical assessment and written estimate. A favourable review or a general statistic cannot guarantee your own result." },
  { question: "How should I compare an NHS charge with a private or overseas quote?", answer: "Compare the type and scope of care first. NHS charges in England follow course-of-treatment bands and are subject to eligibility, clinical need and access; they are not per-tooth private fees. An overseas package may include accommodation or transfers while excluding other expenses. Write down the procedures, materials, visits and exclusions beside each figure. Check current local NHS arrangements if you live elsewhere in the UK. Obtain a personal estimate before interpreting any advertised saving or deciding how you would pay." },
  { question: "What records should I keep for care after returning home?", answer: "Ask for the treatment summary, relevant imaging, materials or implant details, review schedule and written aftercare instructions. Keep the clinical contact and complaint route alongside the agreed payment and warranty terms. The FDA specifically recommends keeping the implant brand and model if implants are placed. Ask whether a concern can be assessed locally and who would pay for any return trip. Routine check-up guidance does not replace procedure-specific follow-up, and new pain or a loose restoration should be discussed with a dentist." },
];

export const faqIntroduction = "Use these answers to understand what the library can establish, how its dates and sources should be read, and which decisions need individual advice. The same questions and answers appear in this page’s structured data. Keep clinical questions with a dentist and obtain written confirmation of personal prices and arrangements.";
export const faqDetail = "This hub was refreshed as an editorial navigation resource. It retains the existing guide destinations and adds context for choosing between them. Linked articles carry their own scope and dates; check their original sources where information affects a treatment or payment decision.";
export const sourcesAnswer = "Use the original sources below to check the clinical guidance, survey populations and dated charges used on this page. Government and professional-body information provides context for questions, while only your treating dentist and written quote establish personal care. The editorial team checks sources without claiming that these organisations endorse the service.";
export const sourcesDetail = "Source links were checked for this editorial update on 21 October 2026. Historical surveys keep their publication dates, and NHS charges are labelled for England and the relevant year. The hub’s new date does not refresh a linked article automatically. Report a correction through the contact page if you notice a discrepancy.";
