import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. Dental holiday logistics intent is owned by
// /travel-to-turkey/dental-holiday-turkey, which is the correct URL structure
// for travel/logistics content. Blog post and travel section page covered
// identical intent; consolidating equity to the travel section URL.
export default function DentalHolidayGuideBlogRedirect() {
  permanentRedirect("/travel-to-turkey/dental-holiday-turkey");
}
