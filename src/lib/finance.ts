// Single source of truth for how finance is described on this site.
//
// 0% APR representative is available on 12- and 24-month plans only. 36-month
// plans exist but carry interest, and the rate is set by the lender at
// application — so a 36-month monthly figure must never be shown "at 0%".
// Every monthly example on the site is therefore a 0% 12- or 24-month figure,
// calculated here from the price, never typed by hand.

export const ZERO_APR_TERMS = [12, 24] as const;

/** Lender limits for a single finance agreement. */
export const MIN_FINANCE_GBP = 500;
export const MAX_FINANCE_GBP = 30000;
export type ZeroAprTerm = (typeof ZERO_APR_TERMS)[number];

/** The longest 0% term — the one used for "from £X a month" examples. */
export const LONGEST_ZERO_APR_TERM: ZeroAprTerm = 24;

/** Monthly amount at 0% APR for a 12- or 24-month plan, rounded up to the pound. */
export function monthlyAtZero(total: number, months: ZeroAprTerm = LONGEST_ZERO_APR_TERM): number {
  return Math.ceil(total / months);
}

/** "£159/mo", or a below-minimum note when the total cannot be financed alone. */
export function monthlyLabel(total: number, months: ZeroAprTerm = LONGEST_ZERO_APR_TERM): string {
  if (total < MIN_FINANCE_GBP) return `Below £${MIN_FINANCE_GBP} minimum`;
  return `£${monthlyAtZero(total, months).toLocaleString("en-GB")}/mo`;
}

/** One-sentence statement of the terms, for use under any monthly figure. */
export const FINANCE_TERMS_NOTE =
  "0% APR representative on 12- and 24-month plans, subject to status. 36-month plans are available with interest; the rate is confirmed when you apply.";

export const FINANCE_TERMS_SHORT = "0% APR on 12 and 24 months; 36 months with interest";
