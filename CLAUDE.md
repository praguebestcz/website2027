# CLAUDE.md

Guidance for Claude Code agents working on the PragueBest website redesign.

## Project overview

Static HTML redesign of **praguebest.cz** — a Prague-based digital agency (founded 1999, 37 people, 100+ e-shops, 17 awards). This repo is a **greenfield rebuild** in a specific design direction chosen by the client: **Bold Type Monolith**.

- **Live**: https://praguebest-redesign.vercel.app
- **Source content**: based on the legacy wireframes in the sister repo `praguebestcz/PragueBest-WEB` (directory `pages/`). Content, copy, and section structure were mostly ported from there and rewritten in a tighter voice.
- **Stack**: pure static HTML + CSS + vanilla JS. No build step. No framework. Deploys as static files to Vercel.
- **Language**: Czech. Typography uses Czech quotes, `&nbsp;` before short words, em-dashes (&mdash;).

## Design direction — "Bold Type Monolith"

One of six directions proposed in `styles.html` (the style explorer), chosen by client after rejecting an earlier ornate/editorial/italic variant.

**Aesthetic commitments** (don't drift from these):

- **Palette**: cream paper (`#f2ece0`) + deep ink (`#0a0a0a`) + one signal red (`#e30613`). Nothing else.
- **Typography**: **Geist** (Google Fonts, 300–900) for display and body, **Geist Mono** (400–600) for labels, metadata, uptime counters, chip content. No italic serif. No script. No decorative display fonts.
- **Layout**: generous whitespace, large type, editorial grids, asymmetric hero layouts, ruled section dividers, numbered section indices (§ 01, § 02 …).
- **Color usage**: red is **accent only** — highlights on one keyword per headline, CTAs, tags, one word in titles via `<span class="red">`. Never fills a whole section except the CTA wipe-up animation.
- **No gradient backgrounds** on hero sections for the main brand — keep cream. Dark ink sections are used for contrast (team, results, CTA strips). Red radial glows appear on dark cards.
- **Motion**: subtle but present. Scroll reveal, magnetic buttons, fill wipes up, text swap on nav links, rotating caret, custom cursor ring follow.

Rejected alternatives (don't revive these): warm coral gradient, italic Instrument Serif / Fraunces, decorative script fonts, neon glow, glassmorphism everywhere.

## File structure

```
praguebest-redesign/
├── CLAUDE.md                   (this file)
├── README.md                   (public readme)
├── .gitignore                  (ignores .vercel)
├── assets/
│   ├── shared.css              (~500 lines — design system)
│   ├── shared.js               (cursor, scroll, magnetic btns, clock, reveal)
│   └── nav-dropdown.css        (additive — dropdown menu styles)
├── index.html                  (homepage)
├── styles.html                 (style explorer — 6 direction previews)
├── index2.html                 (older homepage variant — kept for reference)
│
├── eshop.html                  (E-shop na míru — product service)
├── shopify.html                (Shopify — product service)
├── weby.html                   (Weby na míru — merges weby/index + epublisher)
├── aplikace.html               (Aplikace na míru — AI-driven MVP angle)
├── upsearch.html               (UpSearch product landing — live typing demo)
├── bigdata.html                (BigDataManager product landing)
│
├── reference.html              (reference listing with filter chips)
├── elnino.html                 (case study detail template — Elnino)
│
├── sluzby.html                 (services hub with capacity board)
├── sluzby-vyzkum.html          (Výzkum & Design detail — research canvas)
├── sluzby-data.html            (Data & Analytika detail — analytics dashboard)
├── sluzby-vyvoj.html           (Vývoj detail — IDE mockup)
├── sluzby-provoz.html          (Provoz & Podpora detail — status page)
│
├── o-nas.html                  (one long about page — merges proc/tym/oceneni/partneri)
├── kariera.html                (careers with jobs list + polaroid grid)
├── blog.html                   (blog listing with featured post + filter)
└── kontakt.html                (contact with 3 channel cards + form + map)
```

**18 production pages** + `styles.html` (internal style explorer, not linked from nav) + `index2.html` (earlier variant, not linked).

## Shared design system

### `assets/shared.css`

Provides all common styles. Every page links it (`<link rel="stylesheet" href="assets/shared.css">`).

**What's included**:
- CSS custom properties (`:root` variables — colors, fonts, easings, radii)
- Reset + body base + grain overlay (SVG noise in body::before)
- **Custom cursor** (`.cursor`, `.cursor-ring`) — two elements, mix-blend-difference, grows on hover targets
- **Scroll progress bar** (`.scroll-progress`) at top, fills red as page scrolls
- Wrap containers (`.wrap` max 1480, `.wrap-sm` max 1080)
- **Sticky nav** (`nav.top`) with glass backdrop when scrolled
- Logo with breathing red dot + halo animation
- Nav link text-swap hover (`<span class="t" data-t="...">` pattern)
- **Button system** (`.btn`, `.btn.ghost`, `.btn.sm`, `.btn.big`, `.btn.red`):
  - `data-t` label swap-up on hover
  - Red fill wipe-up from bottom on hover
  - Arrow icon flies out top-right, new one flies in bottom-left
- Breadcrumb back button with rotating arrow in circle
- Title section (`.title` with `.idx` eyebrow + `h1` + `.below` grid)
- **Meta bar** (`.meta-bar`) — 4 column info strip under title
- Section head (`.sec-head` with `.idx` / `h2` / `.aside`)
- Reveal animations (`.reveal`, `.reveal.on`, `.d1`/`.d2`/`.d3`/`.d4` delays)
- CTA section (`.cta`)
- **Footer** with big brand wordmark, 4 columns, real-time clock (`#clk`)
- Base responsive breakpoints (`@media 1100px`, `@media 720px`)

### `assets/shared.js`

Single IIFE. Handles:
- Custom cursor follow with easing (ring lags behind)
- Hover target detection (`a, button, [data-hover]`)
- Scroll progress bar update + nav `.scrolled` class toggle
- IntersectionObserver for `.reveal` → adds `.on`
- **Real-time Praha clock** — ticks every second, updates `#clk` element
- **Magnetic buttons** — `.btn` elements follow cursor within bounds (translate by mouse offset × 0.18/0.22)

### `assets/nav-dropdown.css`

Additive file (loaded after shared.css). Scoped to unique selectors (`.has-dd`, `.dd`, `.caret`, `.di`) that don't exist in shared.css — zero conflict.

Provides the Produkty / Služby dropdowns:
- Glass dropdown panel with backdrop blur, 18px radius, soft shadow
- Rotating caret (180° on hover)
- 12px invisible bridge between trigger and panel for cursor glide
- Dropdown items with icon box (32×32) that inverts to dark on hover + padding-left slide
- Mobile: dropdowns hidden (whole nav is already hidden < 960px)

Also fixes vertical alignment of all nav `<li>` items (since some have carets, others don't).

## Page anatomy (template)

Every page follows this structure:

```html
<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Page Name — PragueBest</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/shared.css">
  <link rel="stylesheet" href="assets/nav-dropdown.css">
  <style>
    /* PAGE-SPECIFIC STYLES ONLY */
    /* unique hero visual, page-specific cards, etc. */
  </style>
</head>
<body>
  <div class="cursor"></div>
  <div class="cursor-ring"></div>
  <div class="scroll-progress"></div>

  <nav class="top">
    <a class="logo" href="index.html">
      <span class="mark"></span>
      <span class="name"><b>PragueBest</b><sup>®</sup></span>
    </a>
    <ul>
      <!-- UNIFIED nav markup — see any existing page for the full dropdown list -->
    </ul>
    <div class="meta">
      <span><span class="dot"></span>Status text</span>
      <a href="kontakt.html" class="btn sm">...</a>
    </div>
  </nav>

  <div class="crumbs">
    <div class="wrap">
      <a href="..." class="back">...</a>
      <div class="path">...</div>
    </div>
  </div>

  <section class="title">
    <div class="wrap">
      <div class="idx reveal">Eyebrow — Category — Subtitle</div>
      <h1 class="reveal d1">Page Title<br><span class="red">Keyword.</span></h1>
      <div class="below">
        <p class="lede reveal d2">Lede text with <b>bold</b> and <span class="hi">highlight</span>.</p>
        <div class="ctas reveal d3">... 2 buttons ...</div>
      </div>
      <div class="meta-bar reveal d4">... 4 meta items ...</div>
    </div>
  </section>

  <!-- UNIQUE HERO VISUAL SECTION — the "signature" of the page -->

  <!-- Content sections with sec-head + page-specific grids -->

  <section class="cta">...</section>

  <footer>
    <div class="wrap">
      <div class="big">Prague<span class="red">Best</span>...</div>
      <div class="cols">... 4 columns ...</div>
      <div class="base">... clock + copyright ...</div>
    </div>
  </footer>

  <script src="assets/shared.js"></script>
</body>
</html>
```

## Unique hero visuals (page signatures)

Each page has **one unique dark or light hero card** that's the visual signature. Don't reuse the same mockup across pages — each has its own:

| Page | Hero visual |
|------|-------------|
| `index.html` | Big typography hero with red blob + eyebrow pill |
| `eshop.html` | Collage of 3 browser mockups (desktop Elnino + category Bestdrive + checkout Albi) |
| `shopify.html` | Realistic Shopify admin mockup for FunKids (with KPIs, chart, orders) |
| `weby.html` | Collage of 3 mockups (corporate site + news blog + customer portal) |
| `aplikace.html` | AI prompt-to-app hero (brief panel + generating preview with scan line) |
| `upsearch.html` | Live auto-typing search demo card with cycling scenarios |
| `bigdata.html` | Customer 360 recommender card (profile + AI-ranked products) |
| `reference.html` | Title with 180+ counter |
| `elnino.html` | Case-study big frame with rotated device mockup |
| `sluzby.html` | Resource capacity board (sprint view with team rows) |
| `sluzby-vyzkum.html` | Figma research canvas with sticky notes |
| `sluzby-data.html` | Analytics dashboard with SVG line chart + sparklines |
| `sluzby-vyvoj.html` | Dark IDE with syntax-highlighted Vue code |
| `sluzby-provoz.html` | Status page with uptime bars and monitored services |
| `o-nas.html` | Dark manifesto card with strike-through animation |
| `kariera.html` | Dark open-positions table (6 jobs) |
| `blog.html` | Featured post with big trophy symbol |
| `kontakt.html` | 3 channel cards + SVG map with animated pin |

When adding a new page, **invent a new unique hero visual** — don't reuse. This is the main differentiator.

## Common section patterns (reusable)

Copy from existing pages:

- **Section head**: `<div class="sec-head">` with 3-column grid (idx / h2 / aside)
- **Card grid with ink fill wipe up**: card has `::before` that translates from `translateY(101%)` to `0`, text inverts color
- **Stat cells**: numbered grid with big number + label + description, hovers fill ink up
- **Expand rows**: used on homepage services and on `sluzby.html` disciplines — rows that reveal a panel on click
- **Process timeline**: horizontal grid with big numbers (`0<span class="mk">1</span>`), labels, short descriptions
- **Pricing cards**: 3-col grid, middle one is `.featured` (dark ink background), "Nejpopulárnější" flag
- **Testimonial**: quote with `<span class="hi">` highlights + avatar pill
- **Logo grid**: border-line cells with hover background change + red bottom border slide

## Conventions

### Copy tone

- Czech, informal but professional (tykání on `kariera.html`, vykání elsewhere).
- Direct. Short sentences. No marketing fluff. "Nejsme marketingová agentura s HTML oddělením" energy.
- Concrete numbers everywhere (27 let, 150 mld. Kč, 98/100 Lighthouse, 38ms).
- **Czech typography**: use `&nbsp;` before single-letter prepositions (`v&nbsp;Praze`, `a&nbsp;z&nbsp;něj`), em-dashes `&mdash;` for punctuation, Czech quotes `„text"`.

### Text-swap hover on nav/buttons

Nav links use:
```html
<span class="t" data-t="Reference"><span>Reference</span></span>
```

Buttons use:
```html
<span class="lbl" data-t="Label"><span>Label</span></span>
```

The `data-t` text is used for the `::after` swap. Always match inner text and `data-t` or the hover will glitch.

### Red accent in headlines

One word per headline gets `<span class="red">`. Rule of thumb: the final noun / the verb. E.g.:
- `Tvoříme <u>eshopy</u>, <u>weby</u>...<span class="red">prodávat.</span>`
- `Design na <span class="red">datech.</span>`
- `Ozvěte se <span class="red">nám.</span>`

### Highlight pen in lede

Key phrases in the lede use `<span class="hi">` (yellow-ish red background highlight):
```html
<span class="hi">chytré vyhledávání UpSearch</span>
```

### Navigation markup

The nav markup is **identical across all 18 pages** (batch-updated via Python script). Never edit it per-page. If you need to change it, use a batch script (see the script in the session history).

Logo is an `<a class="logo" href="index.html">` — always links home.

### Footer links

Every page has the same 4-column footer:
- **Produkty** (or similar) — links to product pages
- **Studio** — links to meta pages (úvod, reference, o nás, kariéra)
- **Kontakt** — email, phone, address

Slightly different per page (e.g., blog.html uses Produkty title, kariera.html uses Produkty title, etc.) but keep the structure.

## Adding a new page

1. **Copy closest existing page** as template. Pick the one with the most similar structure (service detail → copy `sluzby-data.html`; product landing → copy `bigdata.html`).
2. **Rename** and update `<title>`, breadcrumb path, section headlines.
3. **Write unique hero visual** in the page-specific `<style>` block. This is the creative part — invent a new dark card, mockup, or dashboard specific to the page's topic.
4. **Fill content sections** using shared patterns (section head → card grid → process → CTA → footer).
5. **Update nav dropdown links in ALL pages** if the new page should be in the dropdown. Use a batch Python script, not manual edits. Same for footer columns.
6. **Test locally**: just `open newpage.html` in browser. No build step.
7. **Deploy**: `vercel --prod --yes --scope praguebests-projects` from `praguebest-redesign/`.

## Deployment

### Vercel

- Project: `praguebest-redesign` under team `praguebests-projects`
- Production URL: https://praguebest-redesign.vercel.app
- Deploy command: `vercel --prod --yes --scope praguebests-projects` (must include scope, CLI is non-interactive)
- No build step — Vercel serves static files directly
- The `.vercel/` folder is in `.gitignore`

### GitHub

- Repo: https://github.com/praguebestcz/PragueBest-web-design
- Default branch: `main`
- Git identity: `Ludek Vorel <info@praguebest.cz>` (PragueBest account, set locally)
- Remote: HTTPS (SSH was tried first but key not accepted — stick with HTTPS)

Not currently auto-linked with Vercel (no GitHub integration). Vercel deploys are **manual via CLI** from the local folder. If you want auto-deploy from push, link the Vercel project to the GitHub repo in the Vercel dashboard (set root to `/`, framework preset to "Other").

### Older sister repo

The legacy wireframes live in https://github.com/praguebestcz/PragueBest-WEB — that's the source content. The redesign v1 was also pushed there as the `redesign` branch (under `praguebest-redesign/` subfolder) during early iteration, but **the standalone `PragueBest-web-design` repo is now the canonical home**. Don't push redesign work to the `PragueBest-WEB` repo.

## Don'ts

- **Don't** add italic serif fonts (Instrument Serif, Fraunces, DM Serif). User explicitly rejected them.
- **Don't** add gradient radial backgrounds with coral/pink tones. Kept only for dark accent glows.
- **Don't** duplicate shared styles in inline `<style>` blocks. If a style is shared, move to `shared.css`.
- **Don't** use emoji in UI unless user asks. Use SVG icons (inline, 24×24, stroke 1.8, no fill, rounded).
- **Don't** touch `main` branch of the sister repo (`PragueBest-WEB`). All redesign work stays in the new repo.
- **Don't** use `git add .` or `git add -A`. Stage files by name — there's a `.vercel` folder and other ephemeral stuff.
- **Don't** skip shared.css for new pages. Even if you don't need much from it, import it for consistency.
- **Don't** break the cursor system — `cursor:none` on body is load-bearing. If you're adding new interactive elements, make sure they also have `cursor:none` (or rely on the parent rule).

## Glossary

- **Shared pages**: pages that import `assets/shared.css` (most of them, all services + products). Earlier pages (index, eshop, reference, kontakt, upsearch, elnino, sluzby, weby) were written before the shared extraction and have their CSS mostly inlined but they still share enough conventions that they look the same.
- **Ink fill wipe up**: common hover pattern on cards — the `::before` starts at `translateY(101%)` and goes to `0`, covering the card with dark background while text inverts to cream.
- **Scan line**: red animated horizontal line that sweeps through the `aplikace.html` AI hero mockup.
- **Magnetic button**: button that translates by `mouse_offset × 0.18` on mousemove within bounds. Shared.js handles this for all `.btn` elements.
- **Text swap**: nav link / button hover that translates the text up and reveals the `data-t` version behind it.

## Current known issues / TODO

- `index2.html` is an older homepage variant — kept for reference but not linked anywhere. Delete when confident nothing is missing.
- `styles.html` is the internal style explorer showing 6 rejected + 1 accepted direction. Not linked in public nav. Keep as design rationale doc.
- Vercel is not yet auto-linked to the new GitHub repo. Deploys are manual. If continuous delivery becomes needed, link via Vercel dashboard.
- SSH push to `praguebestcz/PragueBest-web-design` failed — no SSH deploy key. Remote is set to HTTPS.
- Some pages (homepage, eshop, kontakt, reference, upsearch) have CSS inlined instead of in `shared.css`. If you find yourself duplicating styles across pages, consider migrating to shared.
- Mobile polish is baseline (collapse grids to 1 column, hide cursor, hide nav). Real mobile nav (hamburger + drawer) is not implemented.
