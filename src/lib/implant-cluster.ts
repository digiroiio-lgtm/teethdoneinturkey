import type { FollowUp } from "@/components/geo/FollowUpQuestions";
import { getPrice, gbp } from "@/lib/prices";

// Implant cluster: one dominant intent per URL. Every page in the cluster links
// to the others through this question graph instead of re-answering their
// question in full, so each query has exactly one canonical answer on the site.
export const IMPLANT_INTENT_OWNERS = {
  cost: "/prices/dental-implants-turkey-cost",
  ukComparison: "/blog/implants-cost-uk-vs-turkey",
  singleTooth: "/blog/single-tooth-implant-turkey-cost",
  procedure: "/guides/dental-implants-turkey",
  service: "/treatments/dental-implants-turkey",
} as const;

const osstem = getPrice("implant-osstem");
const straumann = getPrice("implant-straumann");
const allOn4 = getPrice("all-on-4");

const IMPLANT_FOLLOW_UPS: FollowUp[] = [
  {
    question: "How much do dental implants cost in Turkey?",
    href: IMPLANT_INTENT_OWNERS.cost,
    answer: `A single implant with crown starts from ${gbp(osstem.turkeyFromGBP)} (Osstem) and ${gbp(straumann.turkeyFromGBP)} (Straumann); All-on-4 starts from ${gbp(allOn4.turkeyFromGBP)} per arch.`,
  },
  {
    question: "How do Turkey implant prices compare with the UK?",
    href: IMPLANT_INTENT_OWNERS.ukComparison,
    answer: "Treatment fees are typically 69–92% lower for a single implant, before the cost of two trips is added.",
  },
  {
    question: "What does replacing one missing tooth cost?",
    href: IMPLANT_INTENT_OWNERS.singleTooth,
    answer: "One implant, abutment and crown, plus flights and hotel for two trips — the travel share is proportionally largest for a single tooth.",
  },
  {
    question: "Do I need two trips, and how long between visits?",
    href: IMPLANT_INTENT_OWNERS.procedure,
    answer: "Usually yes: implant placement first, then the permanent crown 3–6 months later once the implant has fused with the bone.",
  },
  {
    question: "Why are implants cheaper in Turkey?",
    href: "/blog/why-are-dental-treatments-cheaper-in-turkey",
    answer: "Mainly lower clinic overheads, staff costs and the GBP/TRY exchange rate; implant brands can be the same as in the UK.",
  },
  {
    question: "What happens if something goes wrong after I get home?",
    href: "/blog/signs-of-dental-implant-failure",
    answer: "Contact the treating clinic first; some problems need a UK dentist or a return trip, which is why a follow-up budget matters.",
  },
  {
    question: "Can I pay monthly?",
    href: "/finance-options-uk",
    answer: "Finance plans over 12, 24 or 36 months are available, subject to eligibility.",
  },
  {
    question: "How long do I need to stay in Turkey?",
    href: "/travel-to-turkey/how-long-stay-turkey-dental",
    answer: "Typically 3–5 days for the first implant visit and a few days for the second, when the permanent crown is fitted.",
  },
];

/** The cluster's follow-up graph, minus the question the current page owns. */
export function implantFollowUps(currentPath: string): FollowUp[] {
  return IMPLANT_FOLLOW_UPS.filter((f) => f.href !== currentPath);
}
