import { PRICE_INDEX_NAME, PRICES_LAST_VERIFIED, priceIndexRows } from "@/lib/prices";

export const dynamic = "force-static";

export function GET() {
  const body = {
    name: PRICE_INDEX_NAME,
    publisher: "Teeth Done in Turkey",
    url: "https://www.teethdoneinturkey.co.uk/turkey-dental-price-index",
    methodology: "https://www.teethdoneinturkey.co.uk/methodology",
    currency: "GBP",
    last_verified: PRICES_LAST_VERIFIED,
    note: "Indicative partner-clinic list prices, not quotes. UK figures are typical private ranges.",
    how_to_cite: "Teeth Done in Turkey, Turkey Dental Price Index 2026, https://www.teethdoneinturkey.co.uk/turkey-dental-price-index",
    rows: priceIndexRows(),
  };
  return Response.json(body, {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
