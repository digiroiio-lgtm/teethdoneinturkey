#!/usr/bin/env python3
"""Check the production HTML, rather than JSX strings, for homepage AEO regressions.
Run after npm run build: python3 scripts/check-homepage-aeo.py
"""
import json
from html.parser import HTMLParser
from pathlib import Path


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_main = self.in_head = self.in_heading = False
        self.skip = 0
        self.script = None
        self.scripts = []
        self.words = []
        self.sections = []
        self.opener = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'main': self.in_main = True
        if tag == 'head': self.in_head = True
        if tag in ('script', 'style'): self.skip += 1
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.script = {'head': self.in_head, 'id': attrs.get('id'), 'text': ''}
            self.scripts.append(self.script)
        if self.in_main and tag in ('h2', 'h3'):
            self.sections.append({'heading': '', 'text': '', 'opener': '', 'level': tag})
            self.in_heading = True
        if self.in_main and tag == 'p' and self.sections and not self.sections[-1]['opener']:
            self.opener = self.sections[-1]

    def handle_endtag(self, tag):
        if tag == 'main': self.in_main = False
        if tag == 'head': self.in_head = False
        if tag in ('h2', 'h3'): self.in_heading = False
        if tag == 'p': self.opener = None
        if tag in ('script', 'style'):
            self.skip -= 1
            self.script = None

    def handle_data(self, data):
        if self.script is not None: self.script['text'] += data
        if self.skip or not self.in_main: return
        self.words.extend(data.split())
        if self.sections:
            key = 'heading' if self.in_heading else 'text'
            self.sections[-1][key] += ' ' + data
        if self.opener is not None: self.opener['opener'] += ' ' + data


root = Path('.next/server/app')
html = (root / 'index.html').read_text()
page = Page()
page.feed(html)
assert len(page.words) >= 2000, f'Only {len(page.words)} main-content words'
for section in page.sections:
    count = len(section['text'].split())
    assert 75 <= count <= 300, f'{section["heading"]}: {count} words'
h2s = [s for s in page.sections if s['level'] == 'h2']
for section in h2s[:5]:
    count = len(section['opener'].split())
    assert 40 <= count <= 60, f'{section["heading"]}: opener has {count} words'

schemas = [json.loads(s['text']) for s in page.scripts]
home = [s for s in page.scripts if s['id'] == 'homepage-jsonld']
assert len(home) == 1 and home[0]['head'], 'Homepage graph must appear once in <head>'
graph = json.loads(home[0]['text'])['@graph']
article = next(n for n in graph if n['@type'] == 'Article')
webpage = next(n for n in graph if n['@type'] == 'WebPage')
assert article['dateModified'] == webpage['dateModified'] == '2026-10-21'
assert 'dateTime="2026-10-21"' in html or 'datetime="2026-10-21"' in html
assert webpage['lastReviewed'] == '2026-10-19', 'Do not invent a new clinical review'
faq = next(n for n in graph if n['@type'] == 'FAQPage')
assert len(faq['mainEntity']) == 4
assert sum(n.get('@type') == 'FAQPage' for n in schemas) == 0, 'Duplicate FAQ script'
for question in faq['mainEntity']:
    assert question['name'] in html
    assert question['acceptedAnswer']['text'] in html
assert html.count('<blockquote>') == 3
assert 'Complex courses of treatment typically require detailed preparation' in html

# The head slot must not attach homepage Article/FAQ data to any other static URL.
checked = 0
for other in root.rglob('*.html'):
    if other.name == 'index.html': continue
    assert 'homepage-jsonld' not in other.read_text(), f'Homepage schema leaked to {other}'
    checked += 1
print(f'PASS: {len(page.words)} main-content words; {len(page.sections)} sections, all 75–300 words;')
print(f'first five H2 openers 40–60 words; valid head JSON-LD; matching FAQ; three quotes; {checked} other pages clear.')
