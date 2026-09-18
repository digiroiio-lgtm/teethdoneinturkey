import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. This URL also served as the /prices index redirect
// target. Both this page and /prices/turkey-teeth-cost competed for Turkey
// teeth cost queries. Intent consolidated into /prices/turkey-teeth-cost as
// the single primary cost hub.
export default function TeethDoneInTurkeyCostRedirect() {
  permanentRedirect("/prices/turkey-teeth-cost");
}
