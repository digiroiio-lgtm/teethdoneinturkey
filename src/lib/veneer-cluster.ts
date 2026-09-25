import type { FollowUp } from "@/components/geo/FollowUpQuestions";
import { getPrice, gbp } from "@/lib/prices";
import { TRIP_BUDGET } from "@/lib/travel";

// Veneer cluster: one dominant intent per URL, mirroring src/lib/implant-cluster.ts.
export const VENEER_INTENT_OWNERS = {
  cost: "/prices/veneers-turkey-cost",
  ukComparison: "/blog/veneers-turkey-cost-uk-vs-turkey",
  fullSet: "/blog/full-set-veneers-turkey-cost",
  bestType: "/guides/best-veneers-turkey",
  emaxVsZirconia: "/blog/e-max-vs-zirconia-veneers-turkey",
  veneersOrCrowns: "/guides/turkey-teeth-veneers-or-crowns",
  service: "/treatments/veneers-turkey",
} as const;

// Veneer treatment is self-arranged travel (hotel is only bundled in
// packages), so the veneer pages use the full trip budget.
export const VENEER_TRIP_BUDGET = TRIP_BUDGET;

const emax = getPrice("emax-veneer");
const zirconia = getPrice("zirconia-crown");
const composite = getPrice("composite-veneer");

const VENEER_FOLLOW_UPS: FollowUp[] = [
  {
    question: "How much do veneers cost in Turkey?",
    href: VENEER_INTENT_OWNERS.cost,
    answer: `E-max porcelain veneers from ${gbp(emax.turkeyFromGBP)} per tooth, composite from ${gbp(composite.turkeyFromGBP)}; zirconia units, which are crowns, from ${gbp(zirconia.turkeyFromGBP)}.`,
  },
  {
    question: "How do Turkey veneer prices compare with the UK?",
    href: VENEER_INTENT_OWNERS.ukComparison,
    answer: `A UK private E-max veneer is typically ${gbp(emax.ukRangeGBP.min)}–${gbp(emax.ukRangeGBP.max ?? 0)} per tooth; veneers need one trip, so travel is a small share of a full set.`,
  },
  {
    question: "What does a full set of veneers cost?",
    href: VENEER_INTENT_OWNERS.fullSet,
    answer: `Twenty E-max veneers are from ${gbp(emax.turkeyFromGBP * 20)} before travel; a 6-night trip adds roughly ${gbp(VENEER_TRIP_BUDGET.min)}–${gbp(VENEER_TRIP_BUDGET.max)}.`,
  },
  {
    question: "Am I being quoted veneers or crowns?",
    href: VENEER_INTENT_OWNERS.veneersOrCrowns,
    answer: "A zirconia unit is almost always a crown, which removes far more tooth than a veneer. Confirm the treatment per tooth in writing.",
  },
  {
    question: "E-max or zirconia — which should I choose?",
    href: VENEER_INTENT_OWNERS.emaxVsZirconia,
    answer: "E-max looks more natural and removes less tooth; zirconia is stronger and suits grinders and heavily damaged teeth.",
  },
  {
    question: "Which veneers are best, and how do I choose a clinic?",
    href: VENEER_INTENT_OWNERS.bestType,
    answer: "For most cosmetic cases E-max; the dentist and lab matter more than the material. Check the brand, lab and dentist in writing.",
  },
  {
    question: "How long do veneers last?",
    href: "/blog/how-long-do-dental-veneers-last",
    answer: "Porcelain veneers commonly last 10–15 years or more with good care; composite veneers wear sooner.",
  },
  {
    question: "Are veneers in Turkey safe?",
    href: "/guides/turkish-veneers-safety",
    answer: "The main risks — over-preparation, poor bonding, gum problems — come from clinical choices, not the country; ask how much tooth will be removed.",
  },
  {
    question: "How long do I need to stay in Turkey?",
    href: "/travel-to-turkey/how-long-stay-turkey-dental",
    answer: "Usually one trip of 5–7 days: preparation and temporaries first, then fitting once the lab has made the veneers.",
  },
  {
    question: "Can I pay monthly for veneers?",
    href: "/blog/can-you-pay-monthly-for-veneers-turkey",
    answer: "Finance over 12, 24 or 36 months is available, subject to eligibility.",
  },
];

/** The cluster's follow-up graph, minus the question the current page owns. */
export function veneerFollowUps(currentPath: string): FollowUp[] {
  return VENEER_FOLLOW_UPS.filter((f) => f.href !== currentPath);
}
