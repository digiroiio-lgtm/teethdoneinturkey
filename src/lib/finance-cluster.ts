import type { FollowUp } from "@/components/geo/FollowUpQuestions";
import { MIN_FINANCE_GBP, monthlyAtZero } from "@/lib/finance";
import { getPrice } from "@/lib/prices";

// Finance cluster: one dominant intent per URL, mirroring the other cluster
// maps. /monthly-payment keeps the per-treatment monthly figures that AI
// assistants cite it for (see seo/serp-history.md, 2026-09-11); the general
// "how does UK dental finance work" question lives on /finance-options-uk.
export const FINANCE_INTENT_OWNERS = {
  monthlyCost: "/monthly-payment",
  howFinanceWorks: "/finance-options-uk",
  canYouPayMonthly: "/blog/can-you-pay-monthly-for-teeth-in-turkey",
  veneerFinance: "/blog/can-you-pay-monthly-for-veneers-turkey",
  implantFinance: "/blog/finance-dental-implants-turkey-uk-patients",
  steps: "/blog/dental-treatment-turkey-payment-plans",
  fundingOptions: "/blog/dental-tourism-finance-explained",
} as const;

const emax20 = getPrice("emax-veneer").turkeyFromGBP * 20;
const allOn4 = getPrice("all-on-4").turkeyFromGBP;

const FINANCE_FOLLOW_UPS: FollowUp[] = [
  {
    question: "What does each treatment cost per month?",
    href: FINANCE_INTENT_OWNERS.monthlyCost,
    answer: `At 0% APR over 24 months, 20 E-max veneers (£${emax20.toLocaleString("en-GB")}) cost about £${monthlyAtZero(emax20)} a month and one All-on-4 arch about £${monthlyAtZero(allOn4)} a month. The finance minimum is £${MIN_FINANCE_GBP}.`,
  },
  {
    question: "How does dental finance work in the UK?",
    href: FINANCE_INTENT_OWNERS.howFinanceWorks,
    answer: "A UK lender pays the treatment cost and you repay in pounds; 0% APR representative applies to 12- and 24-month plans.",
  },
  {
    question: "Can I pay monthly for teeth done in Turkey?",
    href: FINANCE_INTENT_OWNERS.canYouPayMonthly,
    answer: "Yes, subject to status: plans run over 12, 24 or 36 months, and only the 36-month plan carries interest.",
  },
  {
    question: "What about paying monthly for veneers?",
    href: FINANCE_INTENT_OWNERS.veneerFinance,
    answer: `A full set of 20 E-max veneers (from £${emax20.toLocaleString("en-GB")}) is about £${monthlyAtZero(emax20)} a month over 24 months at 0%.`,
  },
  {
    question: "Can I finance dental implants?",
    href: FINANCE_INTENT_OWNERS.implantFinance,
    answer: "Yes. Implants usually need two trips, so check the plan covers the second-stage crown as well as the surgery.",
  },
  {
    question: "What are the steps to set up a payment plan?",
    href: FINANCE_INTENT_OWNERS.steps,
    answer: "Get a written treatment plan, pre-qualify with a soft search, then apply for the plan before booking travel.",
  },
  {
    question: "Is finance better than a loan, a credit card or saving up?",
    href: FINANCE_INTENT_OWNERS.fundingOptions,
    answer: "It depends on the rate and term you are offered; a 0% plan paid on time costs no more than paying upfront.",
  },
];

/** The cluster's follow-up graph, minus the question the current page owns. */
export function financeFollowUps(currentPath: string): FollowUp[] {
  return FINANCE_FOLLOW_UPS.filter((f) => f.href !== currentPath);
}
