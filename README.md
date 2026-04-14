# PragueBest — Website redesign v1

Static HTML redesign of [praguebest.cz](https://www.praguebest.cz) in the **Bold Type Monolith** design direction.

**🔗 Live preview**: [praguebest-redesign.vercel.app](https://praguebest-redesign.vercel.app)

---

## What it is

A full rebuild of the PragueBest website (18 pages) in a new visual direction chosen by the client. Pure static HTML + CSS + vanilla JS — no framework, no build step, no dependencies beyond Google Fonts.

**Design direction**: cream paper (`#f2ece0`) + deep ink (`#0a0a0a`) + signal red (`#e30613`) accent. **Geist** + **Geist Mono** typography. Editorial layouts, numbered section indices, generous whitespace, subtle motion.

Alternative directions explored during brainstorming are visible at [styles.html](https://praguebest-redesign.vercel.app/styles.html).

## Pages

### Core
- **[Homepage](https://praguebest-redesign.vercel.app/)** — `index.html`
- **[Reference](https://praguebest-redesign.vercel.app/reference.html)** — listing with category filters
- **[Kontakt](https://praguebest-redesign.vercel.app/kontakt.html)** — contact info, form, map
- **[O nás](https://praguebest-redesign.vercel.app/o-nas.html)** — one long about page (manifesto / team / awards / partners)
- **[Kariéra](https://praguebest-redesign.vercel.app/kariera.html)** — open positions
- **[Blog / Nowwwinky](https://praguebest-redesign.vercel.app/blog.html)** — article listing

### Products
- **[E-shop na míru](https://praguebest-redesign.vercel.app/eshop.html)** — custom e-commerce
- **[Shopify](https://praguebest-redesign.vercel.app/shopify.html)** — Shopify partner services
- **[Weby na míru](https://praguebest-redesign.vercel.app/weby.html)** — corporate web / ePublisher CMS
- **[Aplikace na míru](https://praguebest-redesign.vercel.app/aplikace.html)** — AI-driven MVP development
- **[UpSearch™](https://praguebest-redesign.vercel.app/upsearch.html)** — in-house smart search product
- **[BigDataManager](https://praguebest-redesign.vercel.app/bigdata.html)** — in-house recommendation engine

### Services
- **[Služby](https://praguebest-redesign.vercel.app/sluzby.html)** — hub page
- **[Výzkum & Design](https://praguebest-redesign.vercel.app/sluzby-vyzkum.html)**
- **[Data & Analytika](https://praguebest-redesign.vercel.app/sluzby-data.html)**
- **[Vývoj](https://praguebest-redesign.vercel.app/sluzby-vyvoj.html)**
- **[Provoz & Podpora](https://praguebest-redesign.vercel.app/sluzby-provoz.html)**

### Case studies
- **[Elnino](https://praguebest-redesign.vercel.app/elnino.html)** — case study detail template

## File structure

```
praguebest-redesign/
├── assets/
│   ├── shared.css         — design system (colors, typography, nav, footer, patterns)
│   ├── shared.js          — custom cursor, scroll progress, magnetic buttons, clock
│   └── nav-dropdown.css   — dropdown menu styles
├── index.html
├── eshop.html
├── shopify.html
├── weby.html
├── aplikace.html
├── upsearch.html
├── bigdata.html
├── reference.html
├── elnino.html
├── sluzby.html
├── sluzby-vyzkum.html
├── sluzby-data.html
├── sluzby-vyvoj.html
├── sluzby-provoz.html
├── o-nas.html
├── kariera.html
├── blog.html
├── kontakt.html
├── styles.html            — style explorer (6 directions considered)
├── CLAUDE.md              — guide for Claude Code agents
└── README.md              — this file
```

## Design system

Open [`assets/shared.css`](assets/shared.css) for the full design system. Key tokens:

```css
--paper:     #f2ece0    /* background */
--paper-2:   #ebe4d4    /* subtle tonal shift */
--ink:       #0a0a0a    /* text, dark sections */
--red:       #e30613    /* single brand accent */
--mute:      #6b6862    /* metadata, muted text */

--sans:      "Geist"
--mono:      "Geist Mono"
```

Common patterns (reusable across pages):
- Section heads: `§ 01 / Category` — `h2 with red accent` — `aside with meta`
- Cards with "ink fill wipe up" hover (dark slides up, text inverts)
- Stat cells with big numerals in meta-bar
- Process timelines with oversized `0<span>1</span>` numerals
- Pricing cards (3-up, middle featured as dark)
- Custom cursor + ring with blend-mode difference
- Magnetic button cursor attraction
- Real-time Praha clock in footer

## Unique hero visuals

Each page has its **own unique hero visual** — not shared between pages. Examples:

- `upsearch.html` — live auto-typing search demo cycling through 3 scenarios
- `bigdata.html` — customer 360 profile + AI-ranked recommendations card
- `aplikace.html` — AI prompt-to-app panel with red scan line animating over generating mockup
- `sluzby-vyvoj.html` — dark IDE with syntax-highlighted Vue code
- `sluzby-provoz.html` — status page with uptime bars across 30-day history
- `sluzby.html` — resource capacity board (sprint view) with team rows and slot colors
- `sluzby-vyzkum.html` — Figma research canvas with sticky notes
- `sluzby-data.html` — analytics dashboard with SVG charts + sparklines
- `kontakt.html` — custom SVG map of Karlín with animated red pin

## Local preview

No build step. Just open any HTML file in a browser:

```bash
open index.html
```

Or serve locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy

Static deployment to Vercel:

```bash
vercel --prod --yes --scope praguebests-projects
```

The `.vercel` folder is gitignored. GitHub integration is not (yet) configured — deploys are manual via CLI.

## License

Internal project for PragueBest s.r.o. All content and design © PragueBest.
