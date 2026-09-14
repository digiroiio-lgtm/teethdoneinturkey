import { permanentRedirect } from "next/navigation";

// Merged into /monthly-payment on 2026-09-14, one day after it was published.
//
// This URL went live 2026-09-13 as "How Much Are Turkey Teeth Per Month?" —
// monthly payment tables for £3,000/£4,500/£6,000/£8,000 treatment totals across
// 12/18/24/36-month terms, plus how 0% finance works, eligibility and FAQs.
//
// /monthly-payment already owned that exact intent: H1 "Turkey Teeth Monthly
// Payments: What Each Treatment Costs Per Month", 2,825 words, the same
// per-treatment monthly figures, the same finance mechanics and the same
// eligibility section. Two URLs answering "how much are Turkey teeth per month"
// is the CRITICAL RULE violation — one intent, one canonical URL.
//
// Note on the evidence, because the 2026-09-08 regression came from getting this
// exact judgement wrong: this page is NOT being merged because it has no
// impressions. It was published after the end of the Search Console window
// (data runs to 09-12), so it has had no SERP life at all and no claim can be
// made about how it performs. It is being merged because its content is a
// subset of an older, deeper page on the same intent, and consolidating before
// Google indexes it is the cheap direction to be wrong in.
//
// /monthly-payment was chosen as the survivor over this URL for two reasons:
// it is 1,000+ words deeper, and per the 09-11 GA4 review it is the single
// most-cited page on the site in ChatGPT referrals (6 sessions, more than any
// other URL) despite having zero Google impressions. Redirecting into it costs
// nothing in Google and protects the AI-visibility asset.
//
// The pay-monthly intent now maps to three differentiated URLs:
//   "can you pay monthly"  -> /blog/can-you-pay-monthly-for-teeth-in-turkey
//                             (the ranking asset: 11 queries at positions 7.4-11.1)
//   "how much per month"   -> /monthly-payment
//   "UK dental finance"    -> /finance-options-uk
export default function TurkeyTeethMonthlyPaymentsRedirect() {
  permanentRedirect("/monthly-payment");
}
