import { priceIndexRows } from "@/lib/prices";

export const dynamic = "force-static";

function csvCell(value: unknown): string {
  const s = value === null ? "" : String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function GET() {
  const rows = priceIndexRows();
  const header = Object.keys(rows[0]);
  const lines = [header.join(","), ...rows.map((r) => header.map((k) => csvCell(r[k as keyof typeof r])).join(","))];
  return new Response(lines.join("\n") + "\n", {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="turkey-dental-price-index-2026.csv"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
