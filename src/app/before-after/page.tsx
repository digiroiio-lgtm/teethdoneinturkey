import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. /before-after (shorter 6-case layout with headline
// savings) and /turkey-teeth-before-after (6 detailed case studies with
// treatment context, timelines, and UK comparison prices) serve the same
// before/after intent. The detailed page is the canonical destination.
export default function BeforeAfterRedirect() {
  permanentRedirect("/turkey-teeth-before-after");
}
