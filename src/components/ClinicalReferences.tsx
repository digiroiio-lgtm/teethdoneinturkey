import SourcesList from "@/components/SourcesList";
import { clinicalSources, type ClinicalTopic } from "@/lib/clinical-evidence";

export default function ClinicalReferences({ topic }: { topic: ClinicalTopic }) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" aria-label="Clinical references">
      <SourcesList sources={clinicalSources(topic)} title="Clinical References" />
      <p className="text-xs text-gray-500 leading-relaxed">
        These sources explain general dental care. They do not endorse this service or
        verify a clinic&apos;s prices, guarantees or results. Your dentist must assess your
        individual needs before recommending treatment.
      </p>
    </section>
  );
}
