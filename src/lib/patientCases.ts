export interface PatientCase {
  slug: string;
  displayName: string;
  treatment: string;
  turkeyCost?: number;
  ukQuote?: number;
  savingGBP?: number;
  savingPct?: number;
  reviewDate: string;
  relatedTreatmentUrl: string;
  relatedCostUrl?: string;
}

export const patientCases: PatientCase[] = [
  {
    slug: "all-on-6-turkey-uk-patient",
    displayName: "Michael, Edinburgh",
    treatment: "All-on-6 Dental Implants",
    turkeyCost: 5600,
    ukQuote: 22000,
    savingGBP: 16400,
    savingPct: 75,
    reviewDate: "July 2024",
    relatedTreatmentUrl: "/treatments/all-on-6-turkey",
    relatedCostUrl: "/prices/all-on-6-dental-implants-turkey-package",
  },
  {
    slug: "all-on-4-turkey-uk-patient",
    displayName: "James, London",
    treatment: "All-on-4 Dental Implants",
    turkeyCost: 4500,
    ukQuote: 15000,
    savingGBP: 10500,
    savingPct: 70,
    reviewDate: "October 2024",
    relatedTreatmentUrl: "/treatments/all-on-4-turkey",
  },
  {
    slug: "dental-implants-turkey-uk-patient",
    displayName: "Claire, Birmingham",
    treatment: "3 Dental Implants (Straumann)",
    ukQuote: 7500,
    reviewDate: "September 2024",
    relatedTreatmentUrl: "/treatments/dental-implants-turkey",
    relatedCostUrl: "/prices/dental-implants-turkey-cost",
  },
  {
    slug: "veneers-turkey-uk-patient",
    displayName: "Sarah, Manchester",
    treatment: "20 Porcelain Veneers",
    turkeyCost: 3800,
    ukQuote: 18000,
    savingGBP: 14200,
    savingPct: 79,
    reviewDate: "November 2024",
    relatedTreatmentUrl: "/treatments/veneers-turkey",
    relatedCostUrl: "/prices/veneers-turkey-cost",
  },
];
