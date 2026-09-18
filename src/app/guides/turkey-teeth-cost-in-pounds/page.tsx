import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. "Turkey teeth cost in pounds" and "turkey teeth cost"
// intent consolidated into /prices/turkey-teeth-cost, which now carries the
// primary cost hub content. The "in pounds" framing is covered there.
export default function TurkeyTeethCostInPoundsRedirect() {
  permanentRedirect("/prices/turkey-teeth-cost");
}
