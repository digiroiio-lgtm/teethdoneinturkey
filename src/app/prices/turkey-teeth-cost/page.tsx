import { permanentRedirect } from "next/navigation";

// Consolidated 2026-09-08. This page and /guides/turkey-teeth-cost served the
// same "turkey teeth cost" intent with near-identical titles ("Turkey Teeth
// Cost: UK Price Guide 2026" vs "Turkey Teeth Cost 2026: UK Price Guide").
// Search Console showed Google had already picked the guide (21 impressions,
// avg. position 38) while this URL earned none, so the two were splitting one
// signal. Every price row and FAQ that was unique to this page has been ported
// into the guide, which is the deeper page (schema graph, sources, TOC, medical
// review), so nothing is lost by folding this URL into it.
export default function TurkeyTeethCostPricesRedirect() {
  permanentRedirect("/guides/turkey-teeth-cost");
}
