import { veneerGraph } from "../../../treatments/veneers-turkey/veneer-schema";

export default function VeneersStructuredData() {
  return <script id="veneers-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(veneerGraph).replace(/</g, "\\u003c") }} />;
}
