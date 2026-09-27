// Single source of truth for what this site claims about partner-clinic
// regulatory status.
//
// WHY THIS EXISTS. Until 2026-09-27 the site asserted in 16 places that its
// partner clinics are "JCI-accredited" — in the homepage hero, the trust bar,
// the OG image, three treatment meta descriptions, /about-us ("We partner
// exclusively with dental clinics that have achieved JCI accreditation"),
// /book-consultation ("All partner clinics hold international healthcare
// accreditation"), and more. No evidence for any of it was available, and the
// site owner did not confirm it when asked.
//
// WHY IT MATTERED MORE THAN THE USUAL OVERCLAIM. JCI (Joint Commission
// International) accreditation is voluntary, expensive and independently
// inspected — the site's own /blog/best-dental-clinics-turkey explains exactly
// that, and correctly presents it to readers as a high bar that separates
// clinics. Very few dental clinics hold it. Claiming it without holding it is
// therefore both specific and publicly falsifiable: anyone can check the JCI
// directory. It is a materially stronger claim than the site could support.
//
// WHAT REPLACED IT. Turkish Ministry of Health registration, which is the
// licence required to operate a clinic in Turkey at all, plus the separate
// health tourism authorisation that clinics treating international patients
// must hold (administered via the Ministry and USHAŞ, which this site already
// cites as a source). This is a baseline rather than a distinction, and it is
// described here as a baseline — it is not dressed up as an accreditation.
//
// STILL NOT INDEPENDENTLY EVIDENCED. Swapping one unverified claim for a safer
// unverified claim is an improvement, not a fix. The durable version is to
// publish the partner clinic's actual Ministry registration number and health
// tourism authorisation number, which are documents the clinic already holds.
// Until then this wording is deliberately modest and tells the reader to ask.
//
// NOT AFFECTED, AND DELIBERATELY LEFT ALONE: the many pages that tell readers
// to LOOK FOR JCI accreditation when choosing a clinic, and the pages that
// explain what JCI is. That advice is accurate, useful and independent of
// whether these particular clinics hold it. Only first-person claims changed.

/** Short badge label. */
export const CLINIC_REGISTRATION_LABEL = "Ministry of Health Registered Clinics";

/** Inline phrase for prose and meta descriptions. */
export const CLINIC_REGISTRATION_SHORT = "Turkish Ministry of Health registered clinics";

/** One-line description for trust cards. Tells the reader what to ask for. */
export const CLINIC_REGISTRATION_DESC =
  "Partner clinics are registered with the Turkish Ministry of Health — the licence required to operate a clinic in Turkey. Ask any clinic to show its registration, and its health tourism authorisation if you are travelling from abroad.";
