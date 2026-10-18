import Link from "next/link";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";

interface TreatmentSummaryProps {
  question: string;
  answer: string;
  sourceHref: string;
  sourceName: string;
}

export default function TreatmentSummary({ question, answer, sourceHref, sourceName }: TreatmentSummaryProps) {
  return (
    <div className="space-y-4">
      <div className="border-l-4 border-[#1e40af] bg-blue-50 rounded-r-xl p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{question}</h2>
        <p className="text-gray-700 leading-relaxed">{answer}</p>
        <p className="mt-3 text-sm text-gray-600">
          General information: <a href={sourceHref} className="text-[#1e40af] hover:underline">{sourceName}</a>.
          {" "}<Link href="/free-treatment-plan" className="text-[#1e40af] hover:underline">Request an individual treatment plan</Link>.
        </p>
      </div>
      <MedicalReviewBadge />
    </div>
  );
}
