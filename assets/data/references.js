/**
 * PragueBest — Case Studies databáze
 * Jediný zdroj pravdy pro všechny reference na webu.
 *
 * Přidání nové reference: přidej objekt do pole REFS.
 * Úprava: změň data zde — promítne se na reference.html i index.html.
 *
 * Složky s médii: assets/reference/<id>/
 */

window.REFS = [

  /* ─── 1. El Nino ───────────────────────────────────── */
  {
    num:      '01',
    featured: true,
    id:       'elnino',
    name:     'El Nino',
    headline: 'Evropská síť parfumerií potřebovala sjednotit 13 národních e-shopů, napojit ERP Abra, Heureku, Zásilkovnu a vlastní UpSearch. Výsledek: jedna codebase, lokální ceny a měny, rychlost pod vteřinu.',
    category: 'Parfumerský zázrak',
    year:     '2025',
    tags:     ["b2b","retail"],
    href:     'elnino.html',
    domain:   'elnino.cz',
    mockImg:  'assets/elnino-web-small.png',
    thumb:    'assets/reference/elnino/thumb.png',
    cat:      'E-commerce · Headless · 13 zemí',
    kpis: [
      { label: 'Konverze B2B', value: '<span class="red">+</span>214%', title: 'Konverze v B2B sekci', desc: 'Velkoobchodní zákazníci nově vidí ceny podle své role a historie objednávek. Průměrná velikost košíku se ztrojnásobila.' },
      { label: 'Bounce rate mobil', value: '−61%', title: 'Bounce rate na mobilu', desc: 'Rychlejší načítání (LCP 0,8 s), čistší layout a lepší search v místních jazycích. Mobilní nákupní košík dnes generuje 62 % obratu.' },
      { label: 'Meziroční obrat', value: '<span class="red">+</span>38%', title: 'Meziroční obrat', desc: 'Celkový obrat napříč 13 zeměmi vzrostl o 38 %. Nejvyšší přírůstky v Německu a Rakousku, kde UpSearch začal rozumět lokální terminologii.' },
      { label: 'Nasazení změn', value: '11 → 1', title: 'Doba nasazení změn', desc: 'Přidat nový produkt na všechny trhy trvalo dva týdny. Dnes to zabere hodinu — přes centrální PIM. Marketing je konečně spokojen.' },
    ]
  },

  /* ─── 2. FotoŠkoda ─────────────────────────────────── */
  {
    num:      '02',
    id:       'fotoskoda',
    name:     'FotoŠkoda',
    headline: 'Největší český foto e-shop s&nbsp;plnou integrací skladového a&nbsp;ERP systému.',
    category: 'E-shop',
    year:     '2024',
    tags:     ["eshop","b2c","retail"],
    href:     '#',
    domain:   'fotoskoda.cz',
    mockImg:  'assets/reference/fotoskoda/mock.png',
    thumb:    'assets/reference/fotoskoda/thumb.png',
    cat:      'E-commerce · B2C · ERP',
    kpis: [
      { label: 'SKU', value: '48k' },
      { label: 'Konverze', value: '<span class="red">+</span>38%' },
    ]
  },

  /* ─── 3. Hyundai ───────────────────────────────────── */
  {
    num:      '03',
    id:       'hyundai',
    name:     'Hyundai',
    headline: 'Konfigurátor a&nbsp;dealer portál pro&nbsp;CZ&amp;SK síť.',
    category: 'Web aplikace',
    year:     '2024',
    tags:     ["webapp","auto"],
    href:     '#',
    domain:   'hyundai.cz',
    mockImg:  'assets/reference/hyundai/mock.png',
    thumb:    'assets/reference/hyundai/thumb.png',
    cat:      'Web aplikace · Automotive',
    kpis: [
      { label: 'Dealerů', value: '52' },
      { label: 'Configů/měs', value: '12k' },
    ]
  },

  /* ─── 4. Albi ──────────────────────────────────────── */
  {
    num:      '04',
    id:       'albi',
    name:     'Albi',
    headline: 'Omnichannel e-shop propojující 120 poboček v&nbsp;CZ&nbsp;&amp;&nbsp;SK.',
    category: 'Case Study 025',
    year:     '2024',
    tags:     ["eshop","b2c","retail"],
    href:     '#',
    domain:   'albi.cz',
    mockImg:  'assets/reference/albi/mock.png',
    thumb:    'assets/reference/albi/thumb.png',
    cat:      'E-commerce · Omnichannel',
    kpis: [
      { label: 'Online obrat', value: '<span class="red">+</span>156%' },
      { label: 'Poboček', value: '120' },
      { label: 'SKU', value: '24 000' },
    ]
  },

  /* ─── 5. Harfa Sport ───────────────────────────────── */
  {
    num:      '05',
    id:       'harfasport',
    name:     'Harfa Sport',
    headline: 'Sportovní retailer s&nbsp;obsáhlým katalogem a&nbsp;B2B ceníky pro&nbsp;sportovní kluby.',
    category: 'E-shop',
    year:     '2023',
    tags:     ["eshop","b2b","b2c","retail"],
    href:     '#',
    domain:   'harfasport.cz',
    mockImg:  'assets/reference/harfasport/mock.png',
    thumb:    'assets/reference/harfasport/thumb.png',
    cat:      'E-commerce · Sport · B2B',
    kpis: [
      { label: 'SKU', value: '60k' },
      { label: 'B2B klientů', value: '240' },
    ]
  },

  /* ─── 6. Konsepti ──────────────────────────────────── */
  {
    num:      '06',
    id:       'konsepti',
    name:     'Konsepti',
    headline: 'Luxusní designový nábytek s&nbsp;PIM a&nbsp;ceníky pro&nbsp;architekty.',
    category: 'B2B platforma',
    year:     '2023',
    tags:     ["eshop","b2b","retail"],
    href:     '#',
    domain:   'konsepti.cz',
    mockImg:  'assets/reference/konsepti/mock.png',
    thumb:    'assets/reference/konsepti/thumb.png',
    cat:      'B2B · Design · PIM',
    kpis: [
      { label: 'Role', value: '8' },
      { label: 'Značek', value: '120' },
    ]
  },

  /* ─── 7. Sparkys ───────────────────────────────────── */
  {
    num:      '07',
    id:       'sparkys',
    name:     'Sparkys',
    headline: 'Největší řetězec hračkářství s&nbsp;plnou integrací 90 kamenných prodejen.',
    category: 'E-shop',
    year:     '2023',
    tags:     ["eshop","b2c","retail"],
    href:     '#',
    domain:   'sparkys.cz',
    mockImg:  'assets/reference/sparkys/mock.png',
    thumb:    'assets/reference/sparkys/thumb.png',
    cat:      'E-commerce · Retail · Hračky',
    kpis: [
      { label: 'Prodejen', value: '90' },
      { label: 'Konverze', value: '<span class="red">+</span>62%' },
    ]
  },

  /* ─── 8. Bambule ───────────────────────────────────── */
  {
    num:      '08',
    id:       'bambule',
    name:     'Bambule',
    headline: 'Omnichannel hračkářský e-shop s&nbsp;věrnostním programem pro&nbsp;rodiny.',
    category: 'E-shop',
    year:     '2022',
    tags:     ["eshop","b2c","retail"],
    href:     '#',
    domain:   'bambule.cz',
    mockImg:  'assets/reference/bambule/mock.png',
    thumb:    'assets/reference/bambule/thumb.png',
    cat:      'E-commerce · Retail · Omnichannel',
    kpis: [
      { label: 'Členů věr. prog.', value: '180k' },
      { label: 'AOV', value: '<span class="red">+</span>44%' },
    ]
  }

];