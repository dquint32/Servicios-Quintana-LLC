#!/usr/bin/env python3
"""
Build script for serviciosquintana.com

What it does
  1. Writes the structured data (schema.org JSON-LD) into index.html between
     the SCHEMA:START / SCHEMA:END markers.
  2. Generates es/index.html, the Spanish page Google can index, from
     index.html + the Spanish text in main.js. Never edit es/index.html by
     hand: change index.html or main.js, then run this script again.

How to run (from the repo folder)
  pip install beautifulsoup4      (one time)
  python scripts/build_pages.py

Business facts used in the schema live in the CONFIG section below.
"""
import html
import json
import re
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://serviciosquintana.com/"
ORG_ID = BASE + "#organization"
PERSON_ID = BASE + "#david-quintana"
WEBSITE_ID = BASE + "#website"

# ── CONFIG ───────────────────────────────────────────────────────────
# Add profile URLs here as they go live (Google Business Profile, LinkedIn,
# Yelp, Bing Places, Apple Business Connect). They tell search engines and
# AI assistants these profiles are the same business.
SAME_AS = []

# Appointment hours, once decided, e.g.
# [{"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "19:00"}]
HOURS = []

SERVICE_AREA = ["Denver", "Aurora", "Lakewood", "Englewood", "Commerce City", "Westminster"]

ORG_DESC = {
    "en": ("Servicios Quintana LLC is the owner-operated, bilingual (English/Spanish) services practice of "
           "David Quintana in Denver, Colorado: mobile notary, apostille processing, Colorado DMV help, "
           "out-of-state title transfers, certified Spanish-English translation, international shipping help, "
           "notary support for businesses and bilingual web development. By appointment only; every price is "
           "given in writing before the appointment."),
    "es": ("Servicios Quintana LLC es el negocio bilingüe (español/inglés) de David Quintana en Denver, Colorado, "
           "atendido por su dueño: servicios notariales móviles, trámite de apostillas, ayuda con el DMV de "
           "Colorado, transferencias de título de otros estados, traducciones certificadas de español a inglés, "
           "ayuda con envíos internacionales, apoyo notarial para empresas y sitios web bilingües. Solo con cita "
           "previa; todo precio se da por escrito antes de la cita."),
}

BRANDS = [
    {"id": "#brand-notary", "name": "Quintana Notary & Signing", "url": "https://quintananotarysigning.com/",
     "description": "Bilingual mobile notary, apostilles, loan signings, airport notary and U.S. passport help in the Denver Metro area."},
    {"id": "#brand-ayudadmv", "name": "Ayuda DMV", "url": "https://ayudadmv.com/",
     "description": "Colorado DMV form preparation, in-person DMV proxy visits and out-of-state title transfers, in English and Spanish."},
    {"id": "#brand-b2b", "name": "Quintana Notary Support (B2B)", "url": "https://quintananotarysigning.com/b2b-real-estate.html",
     "description": "Subcontracted notary work for title companies, law firms, employers and other notaries."},
    {"id": "#brand-dev", "name": "David Quintana Dev", "url": "https://davidquintana.dev/",
     "description": "Bilingual (English/Spanish) websites for local businesses, built from scratch."},
]
# ─────────────────────────────────────────────────────────────────────


def load_translations():
    js = (ROOT / "main.js").read_text(encoding="utf-8")
    i_en = js.index("    en: {")
    i_es = js.index("    es: {")
    i_end = js.index("\n};", i_es)
    line = re.compile(r'^\s+([a-z0-9_]+):\s*"((?:[^"\\]|\\.)*)",?\s*$', re.M)

    def parse(chunk):
        return {k: json.loads('"' + v + '"') for k, v in line.findall(chunk)}

    return {"en": parse(js[i_en:i_es]), "es": parse(js[i_es:i_end])}


def plain(s):
    """HTML string -> plain text."""
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def build_graph(lang, t):
    page_url = BASE if lang == "en" else BASE + "es/"
    ref = lambda i: {"@id": i}
    offers = json.loads((ROOT / "scripts" / "offers.json").read_text(encoding="utf-8"))

    org = {
        "@type": "LocalBusiness",
        "@id": ORG_ID,
        "name": "Servicios Quintana LLC",
        "alternateName": [b["name"] for b in BRANDS],
        "description": ORG_DESC[lang],
        "url": BASE,
        "image": BASE + "david-quintana.jpg",
        "logo": BASE + "sq-logo.png",
        "telephone": "+13035004122",
        "email": "admin@serviciosquintana.com",
        "address": {"@type": "PostalAddress", "streetAddress": "5128 E Colfax Ave", "addressLocality": "Denver",
                    "addressRegion": "CO", "postalCode": "80220", "addressCountry": "US"},
        "geo": {"@type": "GeoCoordinates", "latitude": 39.740, "longitude": -104.928},
        "areaServed": [{"@type": "City", "name": c + ", CO"} for c in SERVICE_AREA]
                      + [{"@type": "State", "name": "Colorado"}],
        "contactPoint": {"@type": "ContactPoint", "telephone": "+13035004122", "email": "admin@serviciosquintana.com",
                         "contactType": "customer service", "availableLanguage": ["English", "Spanish"]},
        "knowsLanguage": ["en", "es"],
        "priceRange": "$$",
        "paymentAccepted": "Cash, Venmo, Zelle, ACH bank transfer, credit card, debit card",
        "founder": ref(PERSON_ID),
        "employee": ref(PERSON_ID),
        "brand": [ref(BASE + b["id"]) for b in BRANDS],
        "hasOfferCatalog": offers,
    }
    if SAME_AS:
        org["sameAs"] = SAME_AS
    if HOURS:
        org["openingHoursSpecification"] = [
            {"@type": "OpeningHoursSpecification", "dayOfWeek": h["days"], "opens": h["opens"], "closes": h["closes"]}
            for h in HOURS]

    brands = [{"@type": "Organization", "@id": BASE + b["id"], "name": b["name"], "url": b["url"],
               "description": b["description"], "parentOrganization": ref(ORG_ID)} for b in BRANDS]

    person = {
        "@type": "Person",
        "@id": PERSON_ID,
        "name": "David Quintana",
        "image": BASE + "david-quintana.jpg",
        "url": BASE + "#about",
        "jobTitle": "Owner, Colorado Notary Public and Spanish–English translator",
        "worksFor": ref(ORG_ID),
        "knowsLanguage": ["en", "es"],
        "knowsAbout": ["Notary Public services", "Apostille processing", "Colorado DMV title transfers",
                       "Certified Spanish-English translation", "International shipping", "Bilingual web development",
                       "Health Informatics", "Information Systems Auditing"],
        "alumniOf": {"@type": "CollegeOrUniversity", "name": "Metropolitan State University of Denver"},
        "hasCredential": [
            {"@type": "EducationalOccupationalCredential", "name": "Colorado Notary Public commission",
             "credentialCategory": "license", "identifier": "20254044224",
             "recognizedBy": {"@type": "GovernmentOrganization", "name": "Colorado Secretary of State",
                              "url": "https://www.sos.state.co.us/"}},
            {"@type": "EducationalOccupationalCredential", "name": "B.S. Health Informatics",
             "credentialCategory": "degree",
             "recognizedBy": {"@type": "CollegeOrUniversity", "name": "Metropolitan State University of Denver"}},
        ],
    }

    website = {"@type": "WebSite", "@id": WEBSITE_ID, "url": BASE, "name": "Servicios Quintana LLC",
               "inLanguage": ["en", "es"], "publisher": ref(ORG_ID)}

    webpage = {"@type": "WebPage", "@id": page_url + "#webpage", "url": page_url,
               "name": plain(t["meta_title"]), "description": plain(t["meta_desc"]),
               "inLanguage": lang, "isPartOf": ref(WEBSITE_ID), "about": ref(ORG_ID),
               "primaryImageOfPage": BASE + "david-quintana.jpg"}

    n = 1
    questions = []
    while f"faq_q{n}" in t:
        questions.append({"@type": "Question", "name": plain(t[f"faq_q{n}"]),
                          "acceptedAnswer": {"@type": "Answer", "text": plain(t[f"faq_a{n}"])}})
        n += 1
    faq = {"@type": "FAQPage", "@id": page_url + "#faq", "inLanguage": lang, "isPartOf": ref(page_url + "#webpage"),
           "mainEntity": questions}

    return {"@context": "https://schema.org", "@graph": [org, person, *brands, website, webpage, faq]}


def schema_block(graph):
    body = json.dumps(graph, ensure_ascii=False, indent=2)
    body = "\n".join("    " + l for l in body.splitlines())
    return ('    <!-- SCHEMA:START (generated by scripts/build_pages.py; edit the script, not this block) -->\n'
            '    <script type="application/ld+json">\n' + body + '\n    </script>\n    <!-- SCHEMA:END -->')


def inject_schema(page_html, graph):
    pat = re.compile(r"    <!-- SCHEMA:START.*?<!-- SCHEMA:END -->", re.S)
    assert pat.search(page_html), "SCHEMA markers missing from index.html"
    return pat.sub(lambda m: schema_block(graph), page_html, count=1)


def is_relative(url):
    return bool(url) and not re.match(r"^(https?:|//|/|#|mailto:|tel:|data:|sms:)", url)


def build_es(index_html, t):
    soup = BeautifulSoup(index_html, "html.parser")
    soup.html["lang"] = "es"

    # Visible text, the same way main.js applies it
    for el in soup.select("[data-i18n]"):
        v = t.get(el["data-i18n"])
        if v is None:
            continue
        if "card-link" in (el.get("class") or []) or (el.name == "button" and el.get("id") != "lang-toggle"):
            for node in [c for c in el.contents if isinstance(c, NavigableString)]:
                node.extract()
            el.insert(0, NavigableString(html.unescape(v) + (" " if "card-link" in (el.get("class") or []) else "")))
        else:
            el.clear()
            for node in list(BeautifulSoup(v, "html.parser").contents):
                el.append(node)
    for attr, sel in (("aria-label", "data-i18n-aria"), ("alt", "data-i18n-alt")):
        for el in soup.select(f"[{sel}]"):
            v = t.get(el[sel])
            if v is not None:
                el[attr] = html.unescape(v)
    btn = soup.find(id="hero-es-btn")
    if btn:
        btn["aria-label"] = "Switch to English / Cambiar a Inglés"
    desc = soup.find(id="hub-panel-desc")
    if desc:
        desc.string = html.unescape(t["hub_desc_tienda"])
    for link in (soup.find(id="ship-guide-link"), soup.find(id="ship-guide-alt-link")):
        if link and link.get("data-href-es"):
            link["href"] = link["data-href-es"]
            link["hreflang"] = "es" if link["data-href-es"].endswith("-ES.pdf") else "en"

    # Head: title, description, canonical, social tags
    title, mdesc = html.unescape(t["meta_title"]), html.unescape(t["meta_desc"])
    soup.title.string = title
    soup.find("meta", attrs={"name": "description"})["content"] = mdesc
    soup.find("link", rel="canonical")["href"] = BASE + "es/"
    for prop, val in (("og:url", BASE + "es/"), ("og:title", title), ("og:description", mdesc),
                      ("og:locale", "es_US"), ("og:locale:alternate", "en_US")):
        tag = soup.find("meta", property=prop)
        if tag:
            tag["content"] = val
    for name, val in (("twitter:title", title), ("twitter:description", mdesc)):
        tag = soup.find("meta", attrs={"name": name})
        if tag:
            tag["content"] = val

    # The page sits one folder down: point relative files (css, js, images, PDFs) up a level
    for el in soup.find_all(True):
        for attr in ("src", "href", "data-href-en", "data-href-es"):
            if el.has_attr(attr) and is_relative(el[attr]):
                el[attr] = "../" + el[attr]

    out = str(soup)
    banner = "<!-- GENERATED by scripts/build_pages.py from index.html + main.js. Do not edit by hand. -->\n"
    return out.replace("<!DOCTYPE html>", "<!DOCTYPE html>\n" + banner, 1)


def main():
    t = load_translations()
    index_path = ROOT / "index.html"
    index_html = inject_schema(index_path.read_text(encoding="utf-8"), build_graph("en", t["en"]))
    index_path.write_text(index_html, encoding="utf-8", newline="\n")

    es_html = inject_schema(index_html, build_graph("es", t["es"]))
    es_html = build_es(es_html, t["es"])
    (ROOT / "es").mkdir(exist_ok=True)
    (ROOT / "es" / "index.html").write_text(es_html, encoding="utf-8", newline="\n")
    print("Updated index.html (schema) and wrote es/index.html")


if __name__ == "__main__":
    main()
