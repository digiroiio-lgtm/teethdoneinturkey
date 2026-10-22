import { guidesGraph } from "../../guides/guide-schema";

export default function GuidesStructuredData() {
  return <script id="guides-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesGraph).replace(/</g, "\\u003c") }} />;
}
