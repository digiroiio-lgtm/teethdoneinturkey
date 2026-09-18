import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. Intent is identical to /reviews: UK patient testimonials
// for dental treatment in Turkey. The blog page had 3 reviews and already linked
// to /reviews as "See All Reviews". Consolidating equity to the primary hub.
export default function TurkeyTeethReviewsBlogRedirect() {
  permanentRedirect("/reviews");
}
