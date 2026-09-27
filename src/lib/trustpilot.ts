// Single source of truth for the Trustpilot rating shown on this site.
//
// WHOSE RATING THIS IS. It belongs to **Akdeniz Dental Clinic**, the partner
// clinic in Antalya whose founding owner is this site's medical reviewer
// (see src/lib/reviewer.ts). It is NOT a rating of teethdoneinturkey.co.uk,
// which has no Trustpilot profile of its own. Every place this is displayed
// must attribute it to the clinic by name — presenting a third party's score
// as the site's own would be exactly the kind of unsupported claim it replaces.
//
// WHY A CONSTANT. Before 2026-09-27 the site claimed "5.0 average from 500+
// reviews" (/reviews) and "500+ UK Patient Reviews" plus "5-Star Google Rating"
// (TrustBar) with no source behind any of them. The real, checkable figure is
// 4.7 from 94 reviews. Keeping it in one module means the next correction is a
// one-line change — the £82/month defect fixed the same day existed precisely
// because five pages hard-coded the same number independently.
//
// PROVENANCE. Taken from the live Trustpilot profile as shown to the site owner
// on 2026-09-27. It could not be re-fetched programmatically from this
// environment: the network egress policy blocks www.trustpilot.com, so there is
// no automated check that these figures are still current.
//
// THIS WILL DRIFT. A live rating changes as reviews arrive. Either refresh
// VERIFIED_ON and the numbers here periodically, or replace the static display
// with Trustpilot's official widget, which stays accurate on its own.
//
// DO NOT emit this as AggregateRating / Review structured data. Google's
// structured-data guidelines do not allow marking up ratings collected by a
// third-party platform about another organisation as your own, and doing so on
// a YMYL page is the "fake ratings" failure mode this constant exists to end.
// Cite it as visible, linked text instead.

export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/akdenizdental.com";

/** The clinic the score belongs to — never the site itself. */
export const TRUSTPILOT_SUBJECT = "Akdeniz Dental Clinic";

/** TrustScore out of 5. */
export const TRUSTPILOT_RATING = 4.7;

/** Total reviews behind the score. */
export const TRUSTPILOT_COUNT = 94;

/** Reviews in the trailing 12 months, as Trustpilot reports it. */
export const TRUSTPILOT_COUNT_12M = 43;

/** Date the figures above were last read off the profile (ISO, YYYY-MM-DD). */
export const TRUSTPILOT_VERIFIED_ON = "2026-09-27";

/** Human-readable verification date for on-page citation. */
export const TRUSTPILOT_VERIFIED_LABEL = "27 September 2026";

/** Star distribution as published on the profile. Percentages, not counts. */
export const TRUSTPILOT_BREAKDOWN = [
  { stars: 5, percent: 95 },
  { stars: 4, percent: 0 },
  { stars: 3, percent: 0 },
  { stars: 2, percent: 2 },
  { stars: 1, percent: 3 },
];

/** e.g. "4.7 out of 5 from 94 reviews on Trustpilot" */
export const TRUSTPILOT_SUMMARY = `${TRUSTPILOT_RATING} out of 5 from ${TRUSTPILOT_COUNT} reviews on Trustpilot`;
