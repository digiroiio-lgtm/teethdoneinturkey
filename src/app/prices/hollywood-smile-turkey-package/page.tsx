import { permanentRedirect } from "next/navigation";

// Redirected 2026-11-08 (docs/cannibalization-audit-2026-11.md, approved).
// Thin page with almost no impressions; the cost guide already carries the package table (#package-breakdown) and now the 20 vs 24 crown FAQ.
export default function Redirect() {
  permanentRedirect("/blog/hollywood-smile-turkey-cost");
}
