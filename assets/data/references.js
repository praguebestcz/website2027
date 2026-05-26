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
    badge:    { show: true, text: 'WT100', year: '2025' },
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
    badge:    { show: false, text: 'WT100' },
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
    badge:    { show: false, text: 'WT100' },
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
    badge:    { show: false, text: 'WT100' },
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
    badge:    { show: false, text: 'WT100' },
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
    badge:    { show: false, text: 'WT100' },
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
    badge:    { show: false, text: 'WT100' },
    cat:      'E-commerce · Retail · Hračky',
    kpis: [
      { label: 'Prodejen', value: '90' },
      { label: 'Konverze', value: '<span class="red">+</span>62%' },
    ]
  },

  /* ─── 8. Generali Penze ───────────────────────────── */
  {
    num:      '08',
    id:       'generali',
    name:     'Generali Penze',
    headline: 'Korporátní web penzijní společnosti s&nbsp;online kalkulačkou, možností uzavřít smlouvu bez&nbsp;papíru a&nbsp;plnohodnotnou klientskou zónou. Makléři mají vlastní portál s&nbsp;přehledem portfolia a&nbsp;provizí v&nbsp;reálném čase.',
    category: 'Korporátní web',
    year:     '2024',
    tags:     ["web","finance","b2b"],
    href:     '#',
    domain:   'generalipenze.cz',
    mockImg:  'assets/reference/generali/mock.png',
    thumb:    'assets/reference/generali/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2025' },
    cat:      'Web · Finance · ePublisher CMS',
    kpis: [
      { label: 'Online sjednání', value: '<span class="red">+</span>180%', title: 'Nárůst online sjednání smluv', desc: 'Zjednodušený průvodce snížil dobu sjednání z 22 na 7 minut. Většina nových smluv se dnes uzavírá bez návštěvy pobočky.' },
      { label: 'Makléřů v portálu', value: '3 200', title: 'Aktivních makléřů v B2B portálu', desc: 'Partnerský portál pro makléře s přehledem portfolia, kalkulačkami a provizemi v reálném čase.' },
      { label: 'Lighthouse skóre', value: '98', title: 'Průměrné Lighthouse skóre', desc: 'Optimalizovaný frontend na ePublisher CMS, WCAG 2.2 AA, rychlost pod vteřinu na 4G.' },
    ]
  },

  /* ─── 9. DPP ───────────────────────────────────────── */
  {
    num:      '09',
    id:       'dpp',
    name:     'DPP',
    headline: 'Informační portál Dopravního podniku hl.&nbsp;m.&nbsp;Prahy pro&nbsp;miliony cestujících ročně. Jízdní řády, plánování trasy, zákaznický servis, aktuality a&nbsp;online správa čipových karet — vše pod&nbsp;jednou střechou, přístupné i&nbsp;lidem se&nbsp;zdravotním postižením.',
    category: 'Veřejný portál',
    year:     '2024',
    tags:     ["web","public"],
    href:     '#',
    domain:   'dpp.cz',
    mockImg:  'assets/reference/dpp/mock.png',
    thumb:    'assets/reference/dpp/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2025' },
    cat:      'Web · Veřejný sektor · ePublisher CMS',
    kpis: [
      { label: 'Návštěv / měsíc', value: '4,2 M', title: 'Měsíční návštěvnost', desc: 'Největší provoz v době dopravních výluk a mimořádných událostí. Infrastruktura zvládá špičky bez výpadku.' },
      { label: 'WCAG shoda', value: '2.2 AA', title: 'Přístupnost WCAG 2.2 AA', desc: 'Splňuje zákon č. 99/2019 Sb. o přístupnosti. Auditem prošel bez připomínek k funkčnosti pro screenreadery.' },
      { label: 'Transakce / rok', value: '1,8 M', title: 'Online transakcí ročně', desc: 'Dobíjení Lítačky, zakoupení jízdenky a správa předplatného probíhá online — bez fronty na přepážce.' },
    ]
  },

  /* ─── 10. Bambule ──────────────────────────────────── */
  {
    num:      '10',
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
    badge:    { show: false, text: 'WT100', year: '2025' },
    cat:      'E-commerce · Retail · Omnichannel',
    kpis: [
      { label: 'Členů věr. prog.', value: '180k' },
      { label: 'AOV', value: '<span class="red">+</span>44%' },
    ]
  }

];