import { permanentRedirect } from "next/navigation";

// Merged into /guides/turkey-teeth-cost. Both pages targeted the same intent
// ("turkey teeth cost", UK price guide), and Search Console showed the split
// clearly: over the 28 days to 2026-09-07 the guide took every impression for
// this cluster and this page took none, while "turkey teeth cost" and
// "teeth turkey cost" were being answered by four and seven different URLs
// respectively. The guide is the superset (13 sections, sources, TOC, medical
// review) so it keeps the intent and this URL passes its signals to it.
export default function TurkeyTeethCostPricesRedirect() {
  permanentRedirect("/guides/turkey-teeth-cost");
}
