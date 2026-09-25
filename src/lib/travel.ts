import { gbp } from "@/lib/prices";

// Illustrative budget for one 6-night treatment trip from the UK, from the
// itemised breakdown first published on /blog/full-set-veneers-turkey-cost.
// An editorial estimate to show the arithmetic, not a price anyone charges.
// Totals are summed from the items so the two can never disagree.
export interface TripItem {
  item: string;
  min: number;
  max: number;
  /** Shown instead of the numeric range, when the range needs a caveat. */
  label?: string;
  /** Hotel and transfers are bundled into the site's package prices. */
  includedInPackages: boolean;
}

const TRIP_ITEMS: TripItem[] = [
  { item: "Return flights (UK to Istanbul/Antalya)", min: 80, max: 200, includedInPackages: false },
  { item: "Accommodation (6 nights, mid-range hotel)", min: 240, max: 480, includedInPackages: true },
  { item: "Airport transfers (clinic-arranged)", min: 0, max: 40, label: "Often free or £20–£40", includedInPackages: true },
  { item: "Food & incidentals", min: 150, max: 300, includedInPackages: false },
  { item: "Travel insurance", min: 40, max: 80, includedInPackages: false },
];

function budget(items: TripItem[]) {
  return {
    min: items.reduce((sum, i) => sum + i.min, 0),
    max: items.reduce((sum, i) => sum + i.max, 0),
    items: items.map((i) => ({ item: i.item, cost: i.label ?? `${gbp(i.min)}–${gbp(i.max)}` })),
  };
}

/** A full self-arranged trip: flights, hotel, transfers, food and insurance. */
export const TRIP_BUDGET = budget(TRIP_ITEMS);

/** What a package patient still pays: package prices include hotel and transfers. */
export const PACKAGE_TRIP_EXTRAS = budget(TRIP_ITEMS.filter((i) => !i.includedInPackages));
