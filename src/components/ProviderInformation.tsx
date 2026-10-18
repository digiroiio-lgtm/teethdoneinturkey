import Link from "next/link";
import { CLINIC } from "@/lib/entities";

export default function ProviderInformation() {
  return (
    <aside className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-gray-600">
      <h2 className="font-bold text-gray-900 mb-2">Who provides your care?</h2>
      <p className="mb-2">
        Clinical treatment in Antalya is provided by{" "}
        <a href={CLINIC.url} className="text-[#1e40af] hover:underline">Akdeniz Dental Clinic</a>.
        Teeth Done in Turkey provides patient information and coordination; this website is not a dental practice.
        Your treating dentist assesses suitability and confirms your treatment plan.
      </p>
      <p className="mb-2">{CLINIC.address.streetAddress}, Antalya, Turkey.</p>
      <p>
        Clinic contact: <a href="tel:+905077854049" className="text-[#1e40af] hover:underline">{CLINIC.telephone}</a>.
        {" "}<Link href="/medical-reviewers/mustafa-akca" className="text-[#1e40af] hover:underline">Meet Dt. Mustafa Akça</Link>
        {" "}and read our <Link href="/editorial-policy" className="text-[#1e40af] hover:underline">editorial policy</Link>.
      </p>
    </aside>
  );
}
