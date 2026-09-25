// Single source of truth for the indicative prices this site publishes.
//
// Every figure here was already published on a /prices/* page before this file
// existed; nothing is new data. Where pages disagreed (Straumann was £420–£600,
// £550–£650, ~£800 and £930 in different places), the /prices/dental-implants-turkey-cost
// figure was chosen as canonical. Pages that quote a price should import it from
// here so the site can never contradict itself again.
//
// These are partner-clinic list prices in GBP — indicative, not quotes. How they
// are collected and checked is documented on /methodology.

export const PRICES_LAST_VERIFIED = "2026-06";
export const PRICES_LAST_VERIFIED_LABEL = "June 2026";

export type PriceCategory = "implants" | "full-arch" | "crowns-veneers" | "packages" | "general";

export interface PriceRecord {
  id: string;
  category: PriceCategory;
  treatment: string;
  unit: "per tooth" | "per implant" | "per arch" | "package" | "per treatment";
  /** Lowest published Turkey price, GBP. */
  turkeyFromGBP: number;
  /** True when the Turkey figure is a starting price rather than a fixed price. */
  isFromPrice: boolean;
  /** Typical UK private price range, GBP. `max` null means an open-ended "£x+" figure. */
  ukRangeGBP: { min: number; max: number | null };
  /** Only items a published page states; empty means "not itemised — confirm in your quote". */
  includes: string[];
  excludes: string[];
}

// Wording matches the "What's included" list on /prices/dental-implants-turkey-cost.
const IMPLANT_INCLUDES = [
  "CBCT scan and consultation",
  "Implant placement surgery",
  "Temporary crown",
  "Final zirconia or porcelain crown (on the return visit)",
  "Anaesthetic and sedation",
  "Follow-up appointments during your stay",
];
const IMPLANT_EXCLUDES = ["Flights", "Hotel", "Bone graft or sinus lift if needed", "Second-trip travel"];
const FULL_ARCH_INCLUDES = [
  "CBCT scan and consultation",
  "Implant surgery",
  "Temporary fixed arch",
  "Final fixed arch (second visit)",
  "Hotel accommodation",
  "Airport and clinic transfers",
];
const FULL_ARCH_EXCLUDES = ["Flights", "Bone graft or sinus lift if needed"];

export const PRICES: PriceRecord[] = [
  {
    id: "implant-osstem",
    category: "implants",
    treatment: "Single implant + crown (Osstem)",
    unit: "per implant",
    turkeyFromGBP: 250,
    isFromPrice: true,
    ukRangeGBP: { min: 2000, max: 3000 },
    includes: IMPLANT_INCLUDES,
    excludes: IMPLANT_EXCLUDES,
  },
  {
    id: "implant-medentika",
    category: "implants",
    treatment: "Single implant + crown (Medentika)",
    unit: "per implant",
    turkeyFromGBP: 430,
    isFromPrice: true,
    ukRangeGBP: { min: 2500, max: 3500 },
    includes: IMPLANT_INCLUDES,
    excludes: IMPLANT_EXCLUDES,
  },
  {
    id: "implant-straumann",
    category: "implants",
    treatment: "Single implant + crown (Straumann)",
    unit: "per implant",
    turkeyFromGBP: 930,
    isFromPrice: true,
    ukRangeGBP: { min: 3000, max: 4500 },
    includes: IMPLANT_INCLUDES,
    excludes: IMPLANT_EXCLUDES,
  },
  {
    id: "bone-graft",
    category: "implants",
    treatment: "Bone graft (add-on)",
    unit: "per treatment",
    turkeyFromGBP: 200,
    isFromPrice: false,
    ukRangeGBP: { min: 400, max: 800 },
    includes: [],
    excludes: ["The implant itself"],
  },
  {
    id: "all-on-4",
    category: "full-arch",
    treatment: "All-on-4 (one arch, all-inclusive)",
    unit: "per arch",
    turkeyFromGBP: 4500,
    isFromPrice: true,
    ukRangeGBP: { min: 15000, max: null },
    includes: FULL_ARCH_INCLUDES,
    excludes: FULL_ARCH_EXCLUDES,
  },
  {
    id: "all-on-6",
    category: "full-arch",
    treatment: "All-on-6 (one arch, all-inclusive)",
    unit: "per arch",
    turkeyFromGBP: 5600,
    isFromPrice: true,
    ukRangeGBP: { min: 15000, max: 22000 },
    includes: FULL_ARCH_INCLUDES,
    excludes: FULL_ARCH_EXCLUDES,
  },
  {
    id: "zirconia-crown",
    category: "crowns-veneers",
    treatment: "Zirconia crown",
    unit: "per tooth",
    turkeyFromGBP: 130,
    isFromPrice: false,
    ukRangeGBP: { min: 1000, max: 1500 },
    includes: [],
    excludes: ["Flights", "Hotel"],
  },
  {
    id: "emax-veneer",
    category: "crowns-veneers",
    treatment: "Porcelain (E-max) veneer",
    unit: "per tooth",
    turkeyFromGBP: 190,
    isFromPrice: true,
    ukRangeGBP: { min: 800, max: 1000 },
    includes: [],
    excludes: ["Flights", "Hotel"],
  },
  {
    id: "composite-veneer",
    category: "crowns-veneers",
    treatment: "Composite veneer / bonding",
    unit: "per tooth",
    turkeyFromGBP: 90,
    isFromPrice: true,
    ukRangeGBP: { min: 300, max: 500 },
    includes: [],
    excludes: ["Flights", "Hotel"],
  },
  {
    id: "hollywood-20",
    category: "packages",
    treatment: "Hollywood Smile — 20 zirconia crowns",
    unit: "package",
    turkeyFromGBP: 2800,
    isFromPrice: false,
    ukRangeGBP: { min: 20000, max: 30000 },
    includes: ["20 zirconia crowns", "Hotel accommodation", "Airport and clinic transfers"],
    excludes: ["Flights"],
  },
  {
    id: "hollywood-24",
    category: "packages",
    treatment: "Hollywood Smile — 24 zirconia crowns",
    unit: "package",
    turkeyFromGBP: 3100,
    isFromPrice: false,
    ukRangeGBP: { min: 24000, max: 36000 },
    includes: ["24 zirconia crowns", "Hotel accommodation", "Airport and clinic transfers"],
    excludes: ["Flights"],
  },
  {
    id: "smile-makeover",
    category: "packages",
    treatment: "Full smile makeover",
    unit: "package",
    turkeyFromGBP: 3500,
    isFromPrice: true,
    ukRangeGBP: { min: 12000, max: null },
    includes: ["Combined veneers, whitening and contouring plan"],
    excludes: ["Flights"],
  },
  {
    id: "root-canal",
    category: "general",
    treatment: "Root canal treatment",
    unit: "per tooth",
    turkeyFromGBP: 200,
    isFromPrice: false,
    ukRangeGBP: { min: 600, max: 900 },
    includes: [],
    excludes: ["Crown over the treated tooth"],
  },
  {
    id: "filling",
    category: "general",
    treatment: "Dental filling",
    unit: "per tooth",
    turkeyFromGBP: 70,
    isFromPrice: false,
    ukRangeGBP: { min: 150, max: 300 },
    includes: [],
    excludes: [],
  },
  {
    id: "cleaning",
    category: "general",
    treatment: "Dental cleaning",
    unit: "per treatment",
    turkeyFromGBP: 60,
    isFromPrice: false,
    ukRangeGBP: { min: 100, max: 200 },
    includes: [],
    excludes: [],
  },
];

export const CATEGORY_LABELS: Record<PriceCategory, string> = {
  implants: "Dental implants",
  "full-arch": "Full-arch implants",
  "crowns-veneers": "Crowns & veneers",
  packages: "Packages",
  general: "General dentistry",
};

export function getPrice(id: string): PriceRecord {
  const record = PRICES.find((p) => p.id === id);
  if (!record) throw new Error(`Unknown price id: ${id}`);
  return record;
}

export function gbp(value: number): string {
  return `£${value.toLocaleString("en-GB")}`;
}

/** "From £250" or "£130". */
export function turkeyPrice(record: PriceRecord): string {
  return record.isFromPrice ? `From ${gbp(record.turkeyFromGBP)}` : gbp(record.turkeyFromGBP);
}

/** "£2,000–£3,000" or "£15,000+". */
export function ukRange(record: PriceRecord): string {
  const { min, max } = record.ukRangeGBP;
  return max === null ? `${gbp(min)}+` : `${gbp(min)}–${gbp(max)}`;
}

/**
 * Saving of the Turkey starting price against the UK range, as the site has
 * always shown it: the low end compares against the UK minimum, the high end
 * against the UK maximum. Rounded to whole percent.
 */
export function savingRange(record: PriceRecord): string {
  const { min, max } = record.ukRangeGBP;
  const low = Math.round((1 - record.turkeyFromGBP / min) * 100);
  if (max === null) return `${low}%+`;
  const high = Math.round((1 - record.turkeyFromGBP / max) * 100);
  return low === high ? `${low}%` : `${low}–${high}%`;
}

export const PRICE_INDEX_NAME = "Turkey Dental Price Index 2026";

/** Flat rows for the published dataset (JSON and CSV downloads). */
export function priceIndexRows() {
  return PRICES.map((r) => ({
    id: r.id,
    category: CATEGORY_LABELS[r.category],
    treatment: r.treatment,
    unit: r.unit,
    turkey_price_gbp: r.turkeyFromGBP,
    turkey_price_is_from: r.isFromPrice,
    uk_private_min_gbp: r.ukRangeGBP.min,
    uk_private_max_gbp: r.ukRangeGBP.max,
    difference: savingRange(r),
    last_verified: PRICES_LAST_VERIFIED,
  }));
}

/** Lowest and highest percentage difference across the given records. */
export function savingBounds(records: PriceRecord[] = PRICES): { min: number; max: number } {
  const values = records.flatMap((r) => {
    const { min, max } = r.ukRangeGBP;
    return [min, ...(max === null ? [] : [max])].map((uk) => Math.round((1 - r.turkeyFromGBP / uk) * 100));
  });
  return { min: Math.min(...values), max: Math.max(...values) };
}
