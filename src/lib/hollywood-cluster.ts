import type { FollowUp } from "@/components/geo/FollowUpQuestions";
import { getPrice, gbp, ukRange } from "@/lib/prices";
import { PACKAGE_TRIP_EXTRAS } from "@/lib/travel";

// Hollywood Smile cluster: one dominant intent per URL, mirroring
// src/lib/veneer-cluster.ts. URLs and titles are unchanged because
// seo/serp-history.md marks this cluster "KEEP, performing".
export const HOLLYWOOD_INTENT_OWNERS = {
  cost: "/prices/hollywood-smile-turkey-package",
  ukComparison: "/blog/hollywood-smile-uk-vs-turkey",
  whatIsIt: "/blog/hollywood-smile-turkey-cost",
  makeover: "/treatments/full-smile-makeover-turkey",
} as const;

// Package facts as published on /prices/hollywood-smile-turkey-package.
export const HOLLYWOOD_PACKAGE_NIGHTS = 5;

const h20 = getPrice("hollywood-20");
const h24 = getPrice("hollywood-24");
const crown = getPrice("zirconia-crown");
const makeover = getPrice("smile-makeover");

const HOLLYWOOD_FOLLOW_UPS: FollowUp[] = [
  {
    question: "How much is a Hollywood Smile in Turkey?",
    href: HOLLYWOOD_INTENT_OWNERS.cost,
    answer: `${gbp(h20.turkeyFromGBP)} for 20 zirconia crowns or ${gbp(h24.turkeyFromGBP)} for 24, including ${HOLLYWOOD_PACKAGE_NIGHTS} nights' hotel and transfers; flights are extra.`,
  },
  {
    question: "How does the price compare with the UK?",
    href: HOLLYWOOD_INTENT_OWNERS.ukComparison,
    answer: `Twenty zirconia crowns typically cost ${ukRange(h20)} privately in the UK; in Turkey the package plus flights and spending money is about ${gbp(h20.turkeyFromGBP + PACKAGE_TRIP_EXTRAS.min)}–${gbp(h20.turkeyFromGBP + PACKAGE_TRIP_EXTRAS.max)}.`,
  },
  {
    question: "What is a Hollywood Smile — crowns or veneers?",
    href: HOLLYWOOD_INTENT_OWNERS.whatIsIt,
    answer: "On this site's packages it is a set of zirconia crowns, which cover the whole tooth, not veneers.",
  },
  {
    question: "How much tooth is removed, and can it be undone?",
    href: "/guides/turkey-teeth-veneers-or-crowns",
    answer: "Crown preparation reduces every surface of the tooth and cannot be reversed; veneers remove far less from the front surface only.",
  },
  {
    question: "Is there a less invasive option?",
    href: HOLLYWOOD_INTENT_OWNERS.makeover,
    answer: `A veneer-based smile makeover, from ${gbp(makeover.turkeyFromGBP)}, keeps more natural tooth when the teeth are healthy.`,
  },
  {
    question: "What can go wrong with Turkey teeth?",
    href: "/blog/risks-of-turkey-teeth",
    answer: "The main risks are poor clinic choice, unnecessary tooth reduction, and complications that appear after you are home, where fixing them means a return trip or a UK dentist.",
  },
  {
    question: "Will it look fake?",
    href: "/blog/do-turkey-teeth-look-fake",
    answer: "It depends mainly on the shade, shape and translucency chosen; very white, very uniform crowns are what most people read as fake.",
  },
  {
    question: "How long do zirconia crowns last?",
    href: "/blog/how-long-do-dental-veneers-last",
    answer: "Zirconia crowns commonly last 15–20 years with good care.",
  },
  {
    question: "Can I pay monthly?",
    href: "/monthly-payment",
    answer: `Yes, subject to eligibility: a ${gbp(h20.turkeyFromGBP)} package works out at about £${Math.round(h20.turkeyFromGBP / 36)} a month over 36 months at 0%.`,
  },
];

export const HOLLYWOOD_CROWN_UK_RANGE = ukRange(crown);

/** The cluster's follow-up graph, minus the question the current page owns. */
export function hollywoodFollowUps(currentPath: string): FollowUp[] {
  return HOLLYWOOD_FOLLOW_UPS.filter((f) => f.href !== currentPath);
}
