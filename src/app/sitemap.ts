import { MetadataRoute } from "next";
const base = "https://www.teethdoneinturkey.co.uk";
export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    "","/treatments","/treatments/dental-veneers","/treatments/dental-implants","/treatments/hollywood-smile","/treatments/dental-crowns","/treatments/all-on-4-implants","/treatments/teeth-whitening","/treatments/smile-makeover","/prices","/prices/dental-veneers-cost","/prices/dental-implants-cost","/prices/hollywood-smile-cost","/prices/dental-crowns-cost","/prices/all-on-4-cost","/prices/teeth-whitening-cost","/monthly-payment","/blog","/blog/is-it-safe-to-get-teeth-done-in-turkey","/blog/dental-veneers-turkey-guide","/blog/how-much-do-dental-implants-cost-turkey","/blog/4-8-10-rule-for-veneers","/blog/turkey-vs-uk-dental-treatment","/about","/contact","/faq","/privacy-policy",
  ];
  return urls.map(u => ({ url: `${base}${u}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: u === "" ? 1 : 0.8 }));
}
