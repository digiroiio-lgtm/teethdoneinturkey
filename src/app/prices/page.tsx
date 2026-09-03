import { permanentRedirect } from "next/navigation";

export const revalidate = 86400;
export default function PricesPage() {
  permanentRedirect("/prices/teeth-done-in-turkey-cost");
}
