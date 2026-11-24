import Link from "next/link";

// Says plainly who provides what: this site coordinates, the partner clinic treats.
// Keep it free of accreditation or outcome claims; those need evidence per page.
export default function ProviderNotice({ className = "" }: { className?: string }) {
  return (
    <aside aria-label="Who provides your treatment" className={`bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-700 ${className}`}>
      <p className="font-bold text-gray-900 mb-2">Who does what</p>
      <p className="mb-2">
        Teeth Done in Turkey is a patient-coordination service. We do not provide dental treatment. Clinical care is provided by our partner clinic, Akdeniz Dental Clinic in Antalya, by dentists qualified under Turkish regulation, not UK General Dental Council registration.
      </p>
      <p>
        Prices, materials, the treating dentist and any guarantee are set out in the clinic&apos;s written treatment plan. Check them, and ask the clinic for its current accreditation or Ministry of Health authorisation certificates, before you pay a deposit. See how we review our pages in our{" "}
        <Link href="/editorial-policy" className="text-[#1e40af] font-semibold hover:underline">editorial policy</Link>.
      </p>
    </aside>
  );
}
