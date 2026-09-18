import { permanentRedirect } from "next/navigation";

// Redirected 2026-09-18. Monthly payment guidance is owned by /finance-options-uk
// (now retitled "Turkey Teeth Finance: Pay Monthly & Payment Plans for UK Patients").
// The per-treatment monthly cost reference table lives at /monthly-payment.
// Three pages for one intent reduced to two clearly differentiated ones.
export default function TurkeyTeethMonthlyPaymentsRedirect() {
  permanentRedirect("/finance-options-uk");
}
