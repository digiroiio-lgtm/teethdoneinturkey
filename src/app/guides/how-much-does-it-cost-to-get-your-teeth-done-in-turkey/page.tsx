import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. This total-trip-cost guide and /prices/turkey-teeth-cost
// both compete for "how much does it cost to get your teeth done in turkey" and
// related cost queries. Intent consolidated into the primary cost hub at
// /prices/turkey-teeth-cost to eliminate cannibalisation.
export default function HowMuchDoesItCostRedirect() {
  permanentRedirect("/prices/turkey-teeth-cost");
}
