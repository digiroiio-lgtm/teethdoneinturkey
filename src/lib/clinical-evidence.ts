// Sources checked against the publishers' pages on 18 October 2026.
// These support general patient information, not our prices, guarantees or outcomes.
export const CLINICAL_SOURCES = {
  veneers: {
    label: "Veneers",
    publisher: "American Dental Association, MouthHealthy",
    href: "https://www.mouthhealthy.org/all-topics-a-z/veneers",
    supports: "Veneer preparation, irreversibility, suitability, repair and aftercare.",
  },
  treatments: {
    label: "Dental treatments",
    publisher: "NHS",
    href: "https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/",
    supports: "The differences between crowns, veneers, implants and dentures.",
  },
  implants: {
    label: "Dental Implants: What You Should Know",
    publisher: "US Food and Drug Administration",
    href: "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know",
    supports: "Implant suitability, healing, possible complications and ongoing care.",
  },
  maintenance: {
    label: "Peri-implant diseases",
    publisher: "European Federation of Periodontology",
    href: "https://www.efp.org/for-patients/dental-implants/peri-implant-diseases/",
    supports: "Gum health, implant complications and regular professional maintenance.",
  },
} as const;

export const CLINICAL_TOPICS = {
  veneers: ["veneers", "treatments"],
  implants: ["implants", "maintenance", "treatments"],
  makeover: ["veneers", "treatments", "implants"],
} as const;

export type ClinicalTopic = keyof typeof CLINICAL_TOPICS;

export function clinicalSources(topic: ClinicalTopic) {
  return CLINICAL_TOPICS[topic].map((key) => CLINICAL_SOURCES[key]);
}

export function clinicalCitations(topic: ClinicalTopic) {
  return clinicalSources(topic).map((source) => ({
    "@type": "CreativeWork",
    name: source.label,
    url: source.href,
    publisher: { "@type": "Organization", name: source.publisher },
  }));
}
