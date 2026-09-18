import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. Antalya price content is absorbed into
// /guides/turkey-teeth-antalya (the Antalya destination hub), which covers
// both destination context and treatment costs. Separate price sub-page
// cannibalised the hub without adding distinct intent.
export default function AntalyaTeethPricesRedirect() {
  permanentRedirect("/guides/turkey-teeth-antalya");
}
