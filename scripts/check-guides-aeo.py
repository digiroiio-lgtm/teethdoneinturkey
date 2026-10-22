#!/usr/bin/env python3
"""Validate the built hub HTML and route-specific schema after npm run build."""
import json
from html.parser import HTMLParser
from pathlib import Path


class Hub(HTMLParser):
    def __init__(self):
        super().__init__()
        self.main = self.head = self.heading = False
        self.skip = 0
        self.h1 = 0
        self.words, self.sections, self.scripts, self.links, self.quotes = [], [], [], [], []
        self.script = self.opener = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'main': self.main = True
        if tag == 'head': self.head = True
        if tag in ('script', 'style'): self.skip += 1
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.script = {'head': self.head, 'id': attrs.get('id'), 'text': ''}
            self.scripts.append(self.script)
        if not self.main: return
        if tag == 'h1': self.h1 += 1
        if tag in ('h2', 'h3'):
            assert tag != 'h3' or self.sections, 'H3 cannot precede the first H2'
            self.sections.append({'level': tag, 'heading': '', 'text': '', 'opener': ''})
            self.heading = True
        if tag in ('h4', 'h5', 'h6'): raise AssertionError('Unexpected skipped heading level')
        if tag == 'p' and self.sections and not self.sections[-1]['opener']:
            self.opener = self.sections[-1]
        if tag == 'a': self.links.append(attrs.get('href', ''))
        if tag == 'blockquote': self.quotes.append(attrs.get('cite'))

    def handle_endtag(self, tag):
        if tag == 'main': self.main = False
        if tag == 'head': self.head = False
        if tag in ('h2', 'h3'): self.heading = False
        if tag == 'p': self.opener = None
        if tag in ('script', 'style'):
            self.skip -= 1
            self.script = None

    def handle_data(self, data):
        if self.script is not None: self.script['text'] += data
        if self.skip or not self.main: return
        self.words.extend(data.split())
        if self.sections:
            key = 'heading' if self.heading else 'text'
            self.sections[-1][key] += ' ' + data
        if self.opener is not None: self.opener['opener'] += ' ' + data


root = Path('.next/server/app')
html = (root / 'guides.html').read_text()
page = Hub()
page.feed(html)
assert page.h1 == 1
assert len(page.words) >= 2000, f'Only {len(page.words)} main-content words'
h2s = [s for s in page.sections if s['level'] == 'h2']
assert len(h2s) >= 5
for section in page.sections:
    count = len(section['text'].split())
    assert 75 <= count <= 300, f'{section["heading"]}: {count} words'
for section in h2s:
    count = len(section['opener'].split())
    assert 40 <= count <= 60, f'{section["heading"]}: opener has {count} words'

scripts = [s for s in page.scripts if s['id'] == 'guides-jsonld']
assert len(scripts) == 1 and scripts[0]['head'], 'Hub graph must appear once in head'
assert all(s['head'] for s in page.scripts), 'Hub JSON-LD must be in head'
graph = json.loads(scripts[0]['text'])['@graph']
article = next(n for n in graph if n['@type'] == 'Article')
collection = next(n for n in graph if n['@type'] == 'CollectionPage')
catalog = next(n for n in graph if n['@type'] == 'ItemList')
faq = next(n for n in graph if n['@type'] == 'FAQPage')
assert article['dateModified'] == collection['dateModified'] == '2026-10-22'
assert 'dateTime="2026-10-22"' in html or 'datetime="2026-10-22"' in html
assert 'reviewedBy' not in article and 'lastReviewed' not in article
assert len(catalog['itemListElement']) == catalog['numberOfItems'] == 14
assert len(faq['mainEntity']) == 5
for question in faq['mainEntity']:
    section = next(s for s in page.sections if s['heading'].strip() == question['name'])
    assert question['acceptedAnswer']['text'] in section['text']
for item in catalog['itemListElement']:
    href = item['item']['url'].removeprefix('https://www.teethdoneinturkey.co.uk')
    assert href in page.links
assert len(page.quotes) == 2 and all(q in article['citation'] for q in page.quotes)
for name in ('Eddie Crouch', 'Sarah Pritchard'):
    assert name in article['articleBody'] and name in html
for source in article['citation']: assert source in page.links
assert '<h1' not in article['articleBody']

# Every internal destination must exist and already be a direct, indexable route.
for href in set(page.links):
    if not href.startswith('/') or href == '/': continue
    path = href.split('#')[0].split('?')[0]
    source = Path('src/app' + path) / 'page.tsx'
    assert source.exists(), f'Unknown internal destination: {href}'
    assert 'permanentRedirect(' not in source.read_text(), f'Redirect link: {href}'

checked = 0
for other in root.rglob('*.html'):
    if other == root / 'guides.html': continue
    assert 'guides-jsonld' not in other.read_text(), f'Hub schema leaked to {other}'
    checked += 1
print(f'PASS: {len(page.words)} main-content words; one H1; {len(h2s)} H2s; '
      f'{len(page.sections)} passages at 75–300 words; all H2 openers at 40–60 words; '
      f'five matching FAQs; two sourced quotes; fourteen direct guide links; '
      f'head-only JSON-LD; {checked} other pages clear.')
