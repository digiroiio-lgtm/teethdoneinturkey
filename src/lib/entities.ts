export const SITE_URL = "https://www.teethdoneinturkey.co.uk";
export const CLINIC_ID = "https://akdenizdental.com/#clinic";

// Public clinic profile/contact details checked on 18 October 2026.
// No accreditation, ratings, regulatory status or commercial contract inferred.
export const CLINIC = {
  "@type": "Dentist",
  "@id": CLINIC_ID,
  name: "Akdeniz Dental Clinic",
  url: "https://akdenizdental.com",
  telephone: "+90 507 785 40 49",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çaybaşı Mah. 1358 Sok. Premier Plaza B Blok Kat:1",
    addressLocality: "Antalya",
    addressCountry: "TR",
  },
};
