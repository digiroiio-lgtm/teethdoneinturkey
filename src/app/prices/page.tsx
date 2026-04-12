import { redirect } from "next/navigation";

export const revalidate = 86400;
export default function PricesPage() {
  redirect("/prices/teeth-done-in-turkey-cost");
}
