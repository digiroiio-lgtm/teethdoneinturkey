// Existing page-level records at the time of the GEO audit. Adding a clinician
// to reviewer.ts does not establish that they reviewed any particular article.
// Keep the original month precision; do not invent a day for schema lastReviewed.
export const MEDICAL_REVIEWS: Record<string, { title: string; reviewedDate: string }> = {
  "/blog/is-it-safe-to-get-teeth-done-in-turkey": { title: "Is It Safe to Get Teeth Done in Turkey?", reviewedDate: "September 2026" },
  "/blog/risks-of-turkey-teeth": { title: "Risks of Turkey Teeth", reviewedDate: "September 2026" },
  "/blog/risks-of-veneers-in-turkey": { title: "Risks of Veneers in Turkey", reviewedDate: "September 2026" },
  "/blog/aftercare-for-dental-work-in-turkey": { title: "Aftercare for Dental Work in Turkey", reviewedDate: "September 2026" },
  "/blog/signs-of-dental-implant-failure": { title: "Signs of Dental Implant Failure", reviewedDate: "September 2026" },
  "/blog/dental-implant-recovery-time": { title: "Dental Implant Recovery Time", reviewedDate: "September 2026" },
};

export function medicalReviewFor(path: string) {
  return Object.hasOwn(MEDICAL_REVIEWS, path) ? MEDICAL_REVIEWS[path] : undefined;
}
