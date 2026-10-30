// Set once the principal's FRN has been checked on the FCA Register. It renders
// only when non-empty, so no unverified number is ever published.
export const PRINCIPAL_FRN = "";

export const FINANCE_DISCLOSURE =
  "Teeth Done in Turkey is an Introducer Appointed Representative of Ideal Sales Solutions Ltd, trading as Ideal4Finance, which is authorised and regulated by the Financial Conduct Authority as a credit broker";

export default function FinanceDisclosure({ className = "" }: { className?: string }) {
  return (
    <aside aria-label="Finance disclosure" className={`bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-700 ${className}`}>
      <p className="font-bold text-gray-900 mb-2">Finance disclosure</p>
      <p className="mb-2">
        {FINANCE_DISCLOSURE}
        {PRINCIPAL_FRN ? ` (FCA firm reference number ${PRINCIPAL_FRN})` : ""}. We only introduce UK patients to Ideal4Finance. We do not lend, arrange credit or give credit advice.
      </p>
      <p className="mb-2">
        <strong>We do not promise any APR or approval.</strong> Rates, terms and approval depend on each person&apos;s credit history, income and circumstances, and are decided by the lender. Any figures on this site are illustrations or treatment prices, not finance offers.
      </p>
      <p>
        Finance is optional and subject to status. You can also arrange finance independently. Ask Ideal4Finance about any commission or fees before you apply.
      </p>
    </aside>
  );
}
