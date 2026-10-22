# Veneer treatment page refresh

2026-10-22 | /treatments/veneers-turkey | Improve the existing treatment decision page with sourced explanations, practical planning examples and visible editorial freshness | Resolve the six checks reported at 78/100 while improving patient decisions | Expect clearer retrieval and attribution, without guaranteeing AI citations.

## Resulting content

- One H1, question-led H2s and five H3 FAQ answers. Every H2 starts with a direct answer of 40–60 words; every H2/H3 passage contains 75–300 words.
- Eleven primary sources, including Rutgers, NIH/NIDCR and CDC, with contextual links. Old NHS and GDC URLs are replaced with verified current sources.
- Two short original-source quotations, with names, publication-time roles, dates and source links: Eddie Crouch (BDA, 2022) and Dr Nigel Carter OBE (Oral Health Foundation, 2019). Neither is presented as endorsing this service.
- The visible October 2026 update and Article dateModified represent this substantive editorial revision. No new clinical review or reviewer assignment is claimed.
- Shared visible/JSON-LD FAQ data; Article, FAQPage and BreadcrumbList appear once in the actual head via the existing route-specific slot. Sibling treatment routes clear the slot during navigation.
- Existing treatment, price, travel, consultation and related-guide destinations remain direct links. URLs, canonical, robots and enquiry processing are unchanged.

## Evidence and claim handling

The existing price guide, updated September 2026, supplies indicative starting rates: E-max £190, composite £80 and zirconia crowns £130. Worked totals are explicitly arithmetic illustrations, not newly verified personal quotations or packages. The veneer/crown distinction is corrected. Unsupported blanket guarantees, quality equivalence and hypothetical 0% lending offers are replaced by questions about written provider terms.

Rutgers lifespan/visit ranges are educational guidance, not partner-clinic outcomes. NIDCR gum measurements are not home diagnostic thresholds. BDA figures describe a historical dentist survey rather than patient complication rates.

## Validation

The new rendered-HTML check covers word counts, every passage and opener, heading hierarchy, government/education citations, two quote citations, FAQ parity, the date, direct internal destinations, actual head placement and schema isolation. CI runs this alongside the existing homepage and guides checks. Only the edited treatment route should change in the 77-route freshness manifest.

Local lint, production build, TypeScript and freshness checks passed. Rendered main content contains 4,398 words, with 25 passages and 20 H2 openers meeting their ranges. The existing homepage and guides guards passed, and the veneer graph is absent from 98 other built pages. HTTP checks returned 200 for the treatment page, treatment hub, sibling treatment and guides hub, and 404 for an unknown nested route. Only this treatment route changes in the freshness manifest. Final CI, deployment and Context.dev results are recorded in the connected pull request. The checker result is a content signal, not a measurement of AI citations.


## Sourced evidence follow-up

2026-10-22 | /treatments/veneers-turkey | Add a clinical evidence comparison and explain survival versus complications | The initial fresh-content Context.dev scan reached 95/100, passing all six requested checks, but expansion reduced detected statistical density to 11 statistics in 4,266 checker words | Restore density with relevant published evidence rather than unrelated numbers.

Klein et al. (first published November 2024, DOI 10.1111/jerd.13351) supplies a table of material-specific pooled survival and technical, aesthetic and biological complication rates at a mean 10.4-year follow-up. The table preserves all three reported long-term material groups and all outcome categories. It does not imply a direct randomised comparison, a patient complication probability, a partner-clinic result or an individual prognosis. The guide defines survival as including restorations needing maintenance and warns against adding or subtracting the outcome columns.

Beier et al. (2012, PMID 22259802) supplies a clearly historical cohort with estimated survival at 5, 10 and 20 years. This explains why short follow-up is insufficient for lifetime claims. Both references appear next to their claims and in the head Article citations; the visible table data also appears in articleBody.

Local lint, production build, all three rendered checks and freshness-manifest verification passed. The veneer guard now checks the exact published table/cohort percentages and a minimum density of currency/percentage data in main content. The final fresh production recheck is recorded on the follow-up pull request.
