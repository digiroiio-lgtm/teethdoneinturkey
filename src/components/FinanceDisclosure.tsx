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
        {PRINCIPAL_FRN ? ` (FCA firm reference number ${PRINCIPAL_FRN})` : ""}. We do not lend, we are not a credit broker and we do not give credit advice.
      </p>
      <p className="mb-2">
        If you choose to explore finance, we introduce you to Ideal4Finance, which arranges applications with lenders on its panel. Ideal4Finance may receive commission from lenders, so ask it about any commission or fees before you apply.
      </p>
      <p>
        Finance is subject to status and lender terms. Approval is the lender&apos;s decision and is not guaranteed. Any amounts on this site are treatment prices, not finance quotes, and you are under no obligation to borrow. You can also arrange finance independently.
      </p>
    </aside>
  );
}
