import { permanentRedirect } from "next/navigation";

export const revalidate = 86400;
export default function PricesPage() {
  permanentRedirect("/prices/turkey-teeth-cost");
}
