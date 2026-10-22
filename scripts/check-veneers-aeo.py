#!/usr/bin/env python3
"""Validate built veneer content and route-specific head schema after the build."""
import json
from html.parser import HTMLParser
from pathlib import Path


class Veneers(HTMLParser):
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
target = root / 'treatments/veneers-turkey.html'
html = target.read_text()
page = Veneers()
page.feed(html)
assert page.h1 == 1
assert len(page.words) >= 2900, f'Only {len(page.words)} main-content words'
h2s = [s for s in page.sections if s['level'] == 'h2']
assert len(h2s) >= 5
for section in page.sections:
    count = len(section['text'].split())
    assert 75 <= count <= 300, f'{section["heading"]}: {count} words'
for section in h2s:
    count = len(section['opener'].split())
    assert 40 <= count <= 60, f'{section["heading"]}: opener has {count} words'
scripts = [s for s in page.scripts if s['id'] == 'veneers-jsonld']
assert len(scripts) == 1 and scripts[0]['head'], 'Veneer graph must appear once in head'
assert all(s['head'] for s in page.scripts), 'All JSON-LD must be in head'
graph = json.loads(scripts[0]['text'])['@graph']
article = next(n for n in graph if n['@type'] == 'Article')
faq = next(n for n in graph if n['@type'] == 'FAQPage')
assert article['dateModified'] == '2026-10-22'
assert 'datetime="2026-10-22"' in html.lower() and 'Last updated: ' in html
assert 'reviewedBy' not in article and 'lastReviewed' not in article
assert len(faq['mainEntity']) == 5
for question in faq['mainEntity']:
    section = next(s for s in page.sections if s['heading'].strip() == question['name'])
    assert question['acceptedAnswer']['text'] in section['text']
assert len(page.quotes) == 2 and all(q in article['citation'] for q in page.quotes)
for name in ('Eddie Crouch', 'Dr Nigel Carter OBE'):
    assert name in html and name in article['articleBody']
for source in article['citation']:
    assert source in page.links or source.removeprefix('https://www.teethdoneinturkey.co.uk') in page.links
from urllib.parse import urlparse
public_domains = {urlparse(h).hostname for h in page.links if h.startswith('https://')}
assert {'sdm.rutgers.edu', 'www.nidcr.nih.gov', 'www.cdc.gov'} <= public_domains
for href in set(page.links):
    if not href.startswith('/') or href == '/': continue
    path = href.split('#')[0].split('?')[0]
    source = Path('src/app' + path) / 'page.tsx'
    assert source.exists(), f'Unknown internal destination: {href}'
    assert 'permanentRedirect(' not in source.read_text(), f'Redirect link: {href}'
assert 'https://www.nhs.uk/conditions/veneers/' not in html
assert 'https://www.gdc-uk.org/patients/dental-tourism' not in html
checked = 0
for other in root.rglob('*.html'):
    if other == target: continue
    assert 'veneers-jsonld' not in other.read_text(), f'Veneer schema leaked to {other}'
    checked += 1
print(f'PASS: {len(page.words)} main-content words; one H1; {len(h2s)} H2s; '
      f'{len(page.sections)} passages at 75–300 words; all H2 openers at 40–60 words; '
      f'five matching FAQs; two sourced quotes; three government/education domains; '
      f'head-only JSON-LD; {checked} other pages clear.')
