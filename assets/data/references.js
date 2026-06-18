/**
 * PragueBest – Case Studies databáze
 * Jediný zdroj pravdy pro všechny reference na webu.
 *
 * Přidání nové reference: přidej objekt do pole REFS.
 * Úprava: změň data zde – promítne se na reference.html i index.html.
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
    headline: 'Tvorba a&nbsp;provoz robustní e-commerce platformy pro jednoho z&nbsp;největších prodejců parfémů a&nbsp;kosmetiky. 15 e-shopů napříč evropskými trhy s&nbsp;miliony objednávek ročně &ndash; od&nbsp;základů, na&nbsp;míru, na&nbsp;více než 10 let.',
    category: 'E-commerce platforma',
    year:     '2016–2026',
    tags:     ["eshop"],
    href:     'elnino.html',
    domain:   'elnino.cz',
    mockImg:  'assets/elnino-web-small.png',
    thumb:    'assets/reference/elnino/thumb.png',
    badge:    { show: true, text: 'WT100', year: '2025' },
    cat:      '15 e-shopů · 13 zemí · 10 let',
    meta: { klient: { a: 'el nino parfum s.r.o.', b: 'Parfumerie · Retail' }, rok: { a: '2016 &ndash; 2026', b: '10 let spolupráce' }, sluzby: { a: 'E-shop, BigData platforma, UpSearch', b: 'Virtual Try-On · Automatizace reklamací · Vyhledávač vůní' }, stack: { a: 'PHP · Elasticsearch · Redis', b: 'High Availability · Cache-First · API-Driven Frontend' } },
    initial: { heading: 'Platforma, která <span class="red">nestačila tempu růstu.</span>', lead: 'Elnino v&nbsp;roce 2016 stálo na&nbsp;startu ambiciózní mezinárodní expanze &ndash; a&nbsp;jejich tehdejší platforma jim v&nbsp;tom nestačila.', p1: 'Původní e-shop nedokázal uspokojivě zvládat rychlost, škálovatelnost ani komplexitu, kterou expanze do&nbsp;nových zemí přinášela. Každý nový trh přidával na&nbsp;tlaku: lokální ceníky, jazykové mutace, napojení na&nbsp;místní dopravce a&nbsp;platební metody.', p2: 'Firma zároveň věděla, že nechce stavět něco, co za&nbsp;pár let přeroste. Potřebovala robustní základ, který bude možné rozvíjet spolu s&nbsp;expanzí a&nbsp;novými výzvami &ndash; škálovatelný, výkonný bez&nbsp;kompromisů a&nbsp;připravený na&nbsp;to, co přijde. Naším úkolem bylo vytvořit platformu na&nbsp;míru, která toto vše splní a&nbsp;obstojí dlouhodobě.' },
    quote: { text: 'Praguebest pro nás představuje spolehlivého a&nbsp;zkušeného partnera, na&nbsp;kterého se&nbsp;můžeme dlouhodobě spolehnout a&nbsp;který dokáže flexibilně realizovat řešení přesně podle našich potřeb.', name: 'Ondřej Barnat', role: 'IT Ředitel · el nino parfum s.r.o. (2016&ndash;2025)' },
    pillars: [
      { title: 'Stabilita a&nbsp;rychlost při vysoké zátěži', desc: 'Systém cachování a&nbsp;frontend API zajišťující stabilní provoz i&nbsp;při špičkové sezónní zátěži. TTFB pod&nbsp;200&nbsp;ms a&nbsp;vysoká dostupnost standardem &ndash; ne výjimkou.' },
      { title: 'Mezinárodní know-how', desc: 'Expanze na&nbsp;více než 15 evropských trhů potvrdila naše zkušenosti s&nbsp;mezinárodní e-commerce. Od&nbsp;Německa a&nbsp;Polska přes Itálii až po Maďarsko nebo Řecko jsme navrhli řešení zohledňující lokální cenotvorbu, logistiku, platební metody, legislativu i&nbsp;specifická očekávání zákazníků.' },
      { title: 'BigData platforma a&nbsp;personalizace', desc: 'Vlastní platforma agreguje data objednávek, zákazníků, produktů a&nbsp;chování na&nbsp;webu. Na&nbsp;jejich základě segmentuje zákazníky pro personalizované e-maily, personalizuje produktové pásy i&nbsp;bannerové kampaně přímo na&nbsp;webu.' },
      { title: 'Automatizace reklamací a&nbsp;odstoupení od&nbsp;smlouvy', desc: 'Kompletní digitalizace reklamačního procesu, který původně fungoval na&nbsp;papírových formulářích. Řešení mělo významný vliv na&nbsp;rychlost odbavení požadavků a&nbsp;efektivitu reklamačního oddělení klienta.' },
      { title: 'Vlastní vyhledávání na&nbsp;Elasticsearch', desc: 'Sofistikované fulltextové vyhledávání produktů a&nbsp;kategorií s&nbsp;podporou překlepů, synonym a&nbsp;desítek parametrů. Velká část návštěvníků začíná hledání právě ve&nbsp;vyhledávacím poli, proto byla kvalita výsledků klíčová.' },
    ],
    kpis: [
      { label: 'E-shopů v Evropě', value: '15', title: 'E-shopů v&nbsp;13 evropských zemích', desc: 'Zkušenost s&nbsp;implementací e-commerce řešení od&nbsp;Švýcarska po Bulharsko.' },
      { label: 'Objednávek za den', value: '15 000', title: 'Objednávek za&nbsp;den', desc: 'Návrh platformy a&nbsp;infrastruktury, která zvládne bez&nbsp;problémů odbavit i&nbsp;hlavní sezónní peaky.' },
      { label: 'Let spolupráce', value: '10', title: 'Let spolupráce', desc: 'Díky dlouhodobé spolupráci a&nbsp;detailní znalosti prostředí klienta dokážeme aktivně hledat příležitosti, jak posouvat jeho business dál.' },
      { label: 'Produktů v databázi', value: '150 000', title: 'Produktů v&nbsp;databázi', desc: 'Naše řešení zvládají práci s&nbsp;rozsáhlými katalogy bez&nbsp;ztráty rychlosti. Architektura je plně otevřená integracím s&nbsp;ERP a&nbsp;skladovými systémy.' },
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
    tags:     ["eshop"],
    href:     '#',
    domain:   'fotoskoda.cz',
    mockImg:  'assets/reference/fotoskoda/mock.png',
    thumb:    'assets/reference/fotoskoda/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2024' },
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
    headline: 'Jedna platforma, 60 dealerských webů po&nbsp;celé ČR &ndash; jednotný design, lokální obsah a&nbsp;živý sklad vozidel v&nbsp;reálném čase.',
    category: 'Dealerská platforma',
    year:     '2015',
    tags:     ["webapp"],
    href:     'hyundai.html',
    domain:   'louda.hyundai.cz',
    mockImg:  'assets/reference/hyundai/mock.png',
    thumb:    'assets/reference/hyundai/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2015' },
    cat:      'Automotive · ePublisher · 60 webů',
    meta: { klient: { a: 'Hyundai Motor Czech s.r.o.', b: 'Automotive · Dealerská síť' }, rok: { a: '2015', b: 'Vývoj a&nbsp;provoz' }, sluzby: { a: 'Dealerské weby &ndash; design a&nbsp;vývoj', b: 'Design + vývoj + provoz' }, stack: { a: 'CMS Publisher', b: 'PHP · MySQL · REST API' } },
    initial: { heading: '60 dealerů, 60 různých webů. Jednotná značka, <span class="red">rozdílná nabídka vozů.</span>', lead: 'Dealerská síť Hyundai v&nbsp;České republice provozovala desítky webů na&nbsp;různých platformách, bez&nbsp;jednotného vizuálního stylu a&nbsp;sdílené funkcionality.', p1: 'Webové prezentace dealerů napříč republikou se&nbsp;od&nbsp;sebe výrazně lišily. Informace dostupné na&nbsp;jednom webu často chyběly na&nbsp;jiném, vyhledávání vozů fungovalo rozdílně &ndash; pokud bylo vůbec k&nbsp;dispozici &ndash; a&nbsp;vzhled jednotlivých prezentací mnohdy neodpovídal tomu, že všechna dealerství zastupují stejnou značku.', p2: 'Pro návštěvníky to znamenalo složité porovnávání nabídky vozů i&nbsp;ověřování aktuálních akčních nabídek. Zákaznická zkušenost se&nbsp;lišila dealer od&nbsp;dealera a&nbsp;orientace v&nbsp;dostupných informacích byla často zbytečně komplikovaná. Pro samotné dealery představovala správa vlastních webů dodatečné náklady na&nbsp;vývoj, provoz i&nbsp;průběžnou aktualizaci obsahu.', p3: 'Cílem projektu bylo sjednotit všechny dealerské prezentace pod&nbsp;jednu důvěryhodnou platformu a&nbsp;nabídnout zákazníkům konzistentní, přehledné a&nbsp;intuitivní prostředí. Současně bylo potřeba vybavit dealery nástroji, které zjednoduší správu obsahu a&nbsp;umožní snadnou integraci s&nbsp;externími systémy.' },
    pillars: [
      { title: 'Společná platforma pro prezentaci značky', desc: 'Dealeři sdílejí jednotnou platformu, která zajišťuje konzistentní vizuální styl napříč celou sítí. Celostátní marketingové kampaně lze spravovat centrálně, zatímco jednotlivým dealerům zůstává prostor pro vlastní obsah, lokální nabídky i&nbsp;aktuality.' },
      { title: 'Přehledný výpis skladových vozů', desc: 'Zákazníci najdou vůz v&nbsp;přehledném katalogu s&nbsp;pokročilým filtrováním. Dealer zadává vozidla v&nbsp;administraci nebo přes REST API &ndash; oba způsoby jsou validovány proti centrální databázi konfigurací, což zajišťuje přesná data.' },
      { title: 'Propojení zákazníka s&nbsp;dealerem', desc: 'Ať už zákazník poptává nový vůz, testovací jízdu nebo servisní termín, každý požadavek automaticky připravíme pro zpracování v&nbsp;interních systémech Hyundai a&nbsp;informujeme příslušného dealera e-mailem.' },
    ],
    kpis: [
      { label: 'Dealerských prezentací', value: '60<span class="red">+</span>', title: 'Aktivních dealerských prezentací', desc: 'Celá česká dealerská síť Hyundai provozovaná na&nbsp;jedné platformě.' },
      { label: 'Vozidel zpracováno', value: '55 000<span class="red">+</span>', title: 'Vozidel zpracováno', desc: 'Někteří dealeři mají takřka tisíc vozidel aktivních najednou.' },
      { label: 'API požadavků / měsíc', value: '10 000<span class="red">+</span>', title: 'API požadavků každý měsíc', desc: 'S&nbsp;pokročilou validací a&nbsp;instantním zpracováním.' },
      { label: 'Profiltrování katalogu', value: '&lt;200 ms', title: 'Profiltrování celého katalogu', desc: 'Nezdržujeme zákazníka při hledání jeho vysněného vozu.' },
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
    tags:     ["eshop"],
    href:     '#',
    domain:   'albi.cz',
    mockImg:  'assets/reference/albi/mock.png',
    thumb:    'assets/reference/albi/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2024' },
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
    headline: 'Přechod na&nbsp;headless architekturu zvýšil organickou návštěvnost o&nbsp;<b>164&nbsp;%</b> a&nbsp;obrat z&nbsp;organiky o&nbsp;<b>349&nbsp;%</b> už první měsíc po&nbsp;spuštění.',
    category: 'Case Study 005 – E-commerce · Sport · Headless',
    year:     '2024',
    tags:     ["eshop"],
    href:     'harfasport.html',
    domain:   'harfasport.cz',
    mockImg:  'assets/reference/harfasport/mock.png',
    thumb:    'assets/reference/harfasport/thumb.png',
    badge:    { show: false },
    cat:      'E-commerce · Sport · Headless',
    kpis: [
      { label: 'Organická návštěvnost', value: '<span class="plus">+</span>164&nbsp;<sub>%</sub>', title: 'Organická návštěvnost', desc: 'Nárůst návštěvnosti z&nbsp;organického vyhledávání za&nbsp;první měsíc po&nbsp;spuštění.' },
      { label: 'Obrat z organiky',      value: '<span class="plus">+</span>349&nbsp;<sub>%</sub>', title: 'Obrat z&nbsp;organiky',      desc: 'Nárůst obratu z&nbsp;organického kanálu; počet objednávek z&nbsp;organiky vzrostl o&nbsp;290&nbsp;%.' },
      { label: 'Celková návštěvnost',   value: '<span class="plus">+</span>96&nbsp;<sub>%</sub>',  title: 'Celková návštěvnost',   desc: 'Nárůst napříč všemi kanály; celkový obrat +192&nbsp;% a&nbsp;celkový počet objednávek +175&nbsp;%.' },
      { label: 'Objednávky z mobilu',   value: '<span class="plus">+</span>220&nbsp;<sub>%</sub>', title: 'Objednávky z&nbsp;mobilu',   desc: 'Nárůst objednávek z&nbsp;mobilních zařízení; mobilní návštěvnost +112&nbsp;% a&nbsp;mobilní organika +164&nbsp;%.' },
    ]
  },

  /* ─── 6. Konsepti ──────────────────────────────────── */
  {
    num:      '06',
    id:       'konsepti',
    name:     'Konsepti',
    headline: 'Prémiový e-shop s&nbsp;luxusním designovým nábytkem pro&nbsp;ČR, SR a&nbsp;mezinárodní klientelu &ndash; stovky světových značek, tři jazyky a&nbsp;B2B na&nbsp;jedné platformě.',
    category: 'B2B platforma',
    year:     '2020',
    tags:     ["eshop"],
    href:     'konsepti.html',
    domain:   'konsepti.cz',
    mockImg:  'assets/reference/konsepti/mock.png',
    thumb:    'assets/reference/konsepti/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2020' },
    cat:      'E-commerce · B2B · 3 jazyky',
    meta: { klient: { a: 'Konsepti, spol. s&nbsp;r.o.', b: 'Luxusní nábytek · Interiérový design · E-commerce' }, rok: { a: '2020', b: 'Vývoj a&nbsp;provoz' }, sluzby: { a: 'E-shop, design, vývoj', b: 'Design + vývoj + provoz' }, stack: { a: 'PHP 8.4 · MySQL', b: 'ERP Abra Gen · Comgate' } },
    initial: { heading: '30 let na trhu, stovky značek. Web, který to <span class="red">neukazoval.</span>', lead: 'Konsepti patří k&nbsp;nejvýznamnějším distributorům luxusního designového nábytku ve&nbsp;střední Evropě, ale digitální prezentace neodpovídala pozici značky ani rozsahu nabídky.', p1: 'Konsepti působí na trhu od&nbsp;roku 1995 a&nbsp;zaštiťuje zastoupení prémiových světových značek jako Vitra, B&amp;B Italia, Cassina, Flos, Moroso nebo Kartell v&nbsp;ČR a&nbsp;SR. Portfolio zahrnuje nábytek pro&nbsp;bydlení, kancelář, zahradu i&nbsp;svítidla a&nbsp;doplňky. Firma souběžně obsluhuje rezidenční klienty, architekty a&nbsp;velké B2B projekty &ndash; hotely, restaurace, firemní interiéry.', p2: 'Dosavadní web neodpovídal prémiovému zaměření značky. Katalog s&nbsp;desítkami tisíc produktů a&nbsp;stovkami značek byl těžko prostupný, filtrace omezená a&nbsp;vizuální zpracování nezachycovalo hodnotu, která ve&nbsp;fyzických showroomech samozřejmě fungovala. Architekti a&nbsp;B2B klienti potřebovali vlastní prostor s&nbsp;relevantními podmínkami.', p3: 'Cílem bylo navrhnout a&nbsp;postavit nový e-shop hodný luxusních značek, které Konsepti zastupuje &ndash; s&nbsp;plynulou navigací, prémiovým designem, odděleným přístupem pro&nbsp;rezidenční klientelu, architekty i&nbsp;B2B, a&nbsp;vše ve&nbsp;třech jazykových mutacích.' },
    quote: { text: 'Krása a&nbsp;účelnost patří mezi podstatné hodnoty v&nbsp;životě. Odvaha vede k&nbsp;autentickému zážitku. Příběhy lidí a&nbsp;věcí přitahují. Plnit sny a&nbsp;překonávat očekávání klienta je náš základní úkol.', name: 'David Řezníček', role: 'Founder / CEO · Konsepti' },
    pillars: [
      { title: 'Prémiový design pro luxusní značky', desc: 'Nový vizuální styl přenáší modernizovanou identitu do&nbsp;digitálního prostředí s&nbsp;důrazem na&nbsp;čistotu, velkorysé fotografie a&nbsp;typografii.' },
      { title: 'Navigace v&nbsp;rozsáhlém katalogu', desc: 'Struktura umožňuje hledání podle kategorie, značky či designéra s&nbsp;možností kombinovat filtry napříč stovkami značek a&nbsp;desítkami tisíc produktů.' },
      { title: 'Tři trhy, jeden e-shop', desc: 'Web funguje ve&nbsp;třech jazycích (CZ, EN, SK) se&nbsp;separovaným přístupem pro&nbsp;architekty a&nbsp;B2B.' },
      { title: 'Obousměrné napojení na&nbsp;ERP Abra Gen', desc: 'Produkty, ceny, sklady a&nbsp;objednávky se&nbsp;synchronizují automaticky.' },
    ],
    kpis: [
      { label: 'Historie na trhu', value: '30 let', title: 'Historie na trhu', desc: 'Konsepti působí od&nbsp;roku 1995 &ndash; nový web důstojně reprezentuje pozici lídra luxusního interiérového designu.' },
      { label: 'Showroomy a jazyky', value: '3', title: 'Showroomy a jazyky', desc: 'Praha, Bratislava, outlet Čestlice; CZ, EN, SK.' },
      { label: 'Zastupovaných značek', value: '100<span class="red">+</span>', title: 'Zastupovaných značek', desc: 'Vitra, B&amp;B Italia, Cassina, Flos, Moroso, Kartell a&nbsp;další.' },
      { label: 'Segmenty', value: '2', title: 'Segmenty na jednom webu', desc: 'Rezidenční klienti a&nbsp;B2B projekty.' },
    ]
  },

  /* ─── 7. Sparkys ───────────────────────────────────── */
  {
    num:      '07',
    id:       'sparkys',
    name:     'Sparkys',
    headline: 'Implementace nového věrnostního systému s&nbsp;měnou Kačky a&nbsp;jeho plná integrace do&nbsp;e-shopu pro&nbsp;posílení loajality zákazníků.',
    category: 'Věrnostní systém',
    year:     '2023',
    tags:     ["eshop"],
    href:     'sparkys.html',
    domain:   'sparkysklub.cz',
    mockImg:  'assets/reference/sparkys/mock.png',
    thumb:    'assets/reference/sparkys/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2023' },
    cat:      'E-commerce · Věrnostní program · Retail',
    meta: { klient: { a: 'Sparkys', b: 'Maloobchod a&nbsp;velkoobchod · Hračky a&nbsp;potřeby pro děti' }, rok: { a: '2023', b: '5 měsíců vývoje' }, sluzby: { a: 'Věrnostní program (Kačky), E-commerce integrace', b: 'Design + vývoj + provoz' }, stack: { a: 'PHP · MySQL', b: 'Moqups (wireframy)' } },
    initial: { heading: 'Zastaralé cenové hladiny vystřídal <span class="red">věrnostní program.</span>', lead: 'Klient potřeboval nahradit zastaralý systém fixních cenových hladin moderním věrnostním programem založeným na&nbsp;sběru a&nbsp;čerpání kreditů („Kaček"). Cílem bylo sjednotit zážitek mezi prodejnami a&nbsp;e-shopem při zajištění bezpečnosti transakcí.', p1: 'Před realizací projektu využíval Sparkys systém cenových hladin, který byl pro zákazníky méně přehledný a&nbsp;málo flexibilní. Na&nbsp;e-shopu chyběla hlubší integrace věrnostního klubu, která by umožňovala v&nbsp;reálném čase sledovat a&nbsp;uplatňovat nasbírané výhody přímo v&nbsp;košíku.', p2: 'Absence přímého propojení e-shopu s&nbsp;klubovým kontem v&nbsp;reálném čase vedla k&nbsp;riziku zneužití věrnostních bodů (např. vícenásobné čerpání stejného kreditu na&nbsp;prodejně i&nbsp;webu). Zákazníci neměli v&nbsp;uživatelské zóně dostatečný přehled o&nbsp;svých kartách a&nbsp;stavu konta, což snižovalo motivaci k&nbsp;opakovaným nákupům.', p3: 'Hlavním cílem bylo implementovat plně automatizovaný systém „Kaček", kde 1&nbsp;kačka odpovídá slevě 1&nbsp;Kč. Zadání zahrnovalo nové API rozhraní pro synchronizaci dat s&nbsp;Heliosem, štítkování produktů s&nbsp;odměnami a&nbsp;vývoj bezpečného procesu uplatnění slevy v&nbsp;košíku.' },
    quote: { text: 'Nahradit zastaralý systém cenových hladin moderním věrnostním programem byl klíčový krok. Výsledek předčil naše očekávání &ndash; zákazníci se&nbsp;vracejí.', name: 'Martin Koliandr', role: 'Manager E-commerce &amp; Online Marketingu · SPARKYS' },
    pillars: [
      { title: 'Systém věrnostní měny „Kačky"', desc: 'U&nbsp;vybraných produktů se&nbsp;automaticky zobrazují štítky s&nbsp;výší odměny v&nbsp;„Kačkách" na&nbsp;základě dat z&nbsp;ERP Helios. Kačky slouží jako přímá nominální sleva na&nbsp;další nákup &ndash; systém automaticky přepočítává i&nbsp;rozpad DPH u&nbsp;uplatněných kreditů.' },
      { title: 'Interaktivní košík s&nbsp;kontrolou v&nbsp;reálném čase', desc: 'Do&nbsp;prvního kroku košíku byl přidán modul pro čerpání kaček, který umožňuje ručně určit výši slevy až do&nbsp;výše konta nebo hodnoty produktů. Systém průběžně validuje stav klubu při každé změně obsahu košíku.' },
      { title: 'Ochrana proti zneužití a&nbsp;synchronizace', desc: 'Pojistka omezuje zákazníka na&nbsp;maximálně jednu objednávku s&nbsp;uplatněním kaček za&nbsp;24&nbsp;hodin. Veškerá komunikace probíhá přes zabezpečené API endpointy, které zajišťují aktuálnost live dat v&nbsp;uživatelské zóně i&nbsp;administraci.' },
    ],
    kpis: [
      { label: 'Registrace do klubu', value: '<span class="red">+</span>43%', title: 'Registrace do klubu', desc: 'Nárůst nových registrací do&nbsp;SPARKYS klubu po&nbsp;spuštění systému Kaček (3&nbsp;měsíce po&nbsp;launchi vs. 3&nbsp;měsíce před).' },
      { label: 'Opakované nákupy', value: '<span class="red">+</span>22%', title: 'Opakované nákupy', desc: 'Podíl zákazníků, kteří provedli druhý a&nbsp;další nákup během 6&nbsp;měsíců od&nbsp;registrace do&nbsp;klubu.' },
      { label: 'Míra uplatnění Kaček', value: '15%', title: 'Míra uplatnění Kaček', desc: 'Procento objednávek, kde zákazník aktivně využil nasbírané Kačky v&nbsp;košíku.' },
    ]
  },

  /* ─── 8. Generali Penze ────────────────────────────── */
  {
    num:      '08',
    id:       'generali',
    name:     'Generali Penze',
    headline: 'Web pro jednu z&nbsp;největších penzijních společností v&nbsp;ČR &ndash; přehledná prezentace produktů, výkonné kalkulačky a&nbsp;jasná cesta ke&nbsp;konverzi pro 900&nbsp;000 klientů.',
    category: 'Korporátní web',
    year:     '2017',
    tags:     ["webapp"],
    href:     'generali.html',
    domain:   'generalipenze.cz',
    mockImg:  'assets/reference/generali/mock.png',
    thumb:    'assets/reference/generali/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2017' },
    cat:      'Web · Finance · ePublisher CMS',
    meta: { klient: { a: 'Generali', b: 'Finanční služby · Penzijní spoření' }, rok: { a: '2017', b: 'Vývoj a&nbsp;provoz' }, sluzby: { a: 'Kalkulačky pro výpočet penze', b: 'Design + vývoj + provoz' }, stack: { a: 'CMS Publisher', b: 'PHP · MySQL · Sphinx' } },
    initial: { heading: 'Web, který nestačil ambicím jedné z&nbsp;<span class="red">největších penzijních společností.</span>', lead: 'Generali PS obsluhuje téměř 900&nbsp;000 klientů, ale digitální prezentace neodpovídala pozici lídra trhu s&nbsp;30letou historií.', p1: 'Generali penzijní společnost, součást skupiny Generali působící v&nbsp;ČR od&nbsp;roku 1994, patří k&nbsp;předním hráčům na&nbsp;trhu penzijního spoření s&nbsp;téměř 900&nbsp;000 klienty a&nbsp;sítí přes 900 prodejních míst. Stávající web ale neodpovídal ani rozsahu nabídky, ani očekáváním dnešních uživatelů &ndash; orientace v&nbsp;produktech byla složitá a&nbsp;cesta ke&nbsp;konverzi zbytečně dlouhá.', p2: 'Tři odlišné skupiny uživatelů &ndash; klienti, zaměstnavatelé a&nbsp;obchodní partneři &ndash; narážely na&nbsp;jednotný web, který nebyl přizpůsobený jejich potřebám. Kalkulačky a&nbsp;produktové stránky nepodporovaly rozhodovací proces a&nbsp;nenavazovaly přirozeně na&nbsp;sjednání smlouvy.', p3: 'Naším cílem bylo postavit přehledný, rychlý a&nbsp;konverzně optimalizovaný web &ndash; jasně strukturovaný pro každou skupinu návštěvníků, s&nbsp;výkonnými kalkulačkami a&nbsp;přirozenou návazností na&nbsp;obchodní procesy.' },
    quote: { text: 'Chceme být vždy o&nbsp;krok před konkurencí &ndash; a&nbsp;digitální kanály jsou dnes tím nejdůležitějším místem, kde každý klient začíná svůj vztah s&nbsp;námi.', name: 'Jana Zelinková', role: 'Generální ředitelka · Generali penzijní společnost' },
    pillars: [
      { title: 'Přehledná produktová architektura', desc: 'Nová struktura webu rozděluje obsah podle tří hlavních cílových skupin &ndash; klientů, zaměstnavatelů a&nbsp;obchodních partnerů. Každá sekce je navržena tak, aby návštěvník rychle našel potřebné informace a&nbsp;mohl plynule pokračovat v&nbsp;rozhodování.' },
      { title: 'Výkonné kalkulačky', desc: 'Interaktivní kalkulačky pro výpočet výše spoření, daňových úspor nebo předdůchodu jsou přímo součástí produktových stránek, takže uživatel získá relevantní výsledek bez&nbsp;nutnosti opustit web.' },
      { title: 'Sdílené komponenty napříč ekosystémem', desc: 'Kalkulačky, hlavička i&nbsp;patička fungují zároveň jako samostatné API komponenty, které lze nasadit i&nbsp;na&nbsp;další weby skupiny Generali. Jeden zdroj dat, jednotný design napříč celým ekosystémem.' },
      { title: 'Online sjednání smlouvy', desc: 'Devítikrokový průvodce provede klienta sjednáním penzijního spoření od&nbsp;osobních údajů po investiční dotazník. Systém průběžně kontroluje data a&nbsp;na&nbsp;závěr vygeneruje smluvní dokumentaci v&nbsp;PDF včetně QR kódů.' },
    ],
    kpis: [
      { label: 'Klientů na platformě', value: '900 000', title: 'Klientů na nové platformě', desc: 'Celková klientská základna Generali PS, pro kterou web slouží jako primární informační kanál.' },
      { label: 'Historie na trhu', value: '30 let', title: 'Historie na trhu', desc: 'Generali PS působí v&nbsp;ČR od&nbsp;roku 1994 &ndash; web dnes odpovídá pozici stabilního lídra trhu.' },
      { label: 'Prodejních míst', value: '900<span class="red">+</span>', title: 'Prodejních míst', desc: 'Web jako digitální páteř distribuční sítě čítající pobočky a&nbsp;poradce po&nbsp;celé ČR.' },
      { label: 'Uživatelské sekce', value: '3', title: 'Uživatelské sekce', desc: 'Klienti, zaměstnavatelé a&nbsp;obchodní partneři &ndash; každý má svůj vlastní prostor s&nbsp;relevantním obsahem.' },
    ]
  },

  /* ─── 9. DPP ───────────────────────────────────────── */
  {
    num:      '09',
    id:       'dpp',
    name:     'DPP',
    headline: 'Webový portál největšího městského dopravce v&nbsp;ČR &ndash; živá data o&nbsp;provozu, odjezdové tabule a&nbsp;desítky agend na&nbsp;jedné platformě.',
    category: 'Veřejný portál',
    year:     '2019',
    tags:     ["webapp"],
    href:     'dpp.html',
    domain:   'dpp.cz',
    mockImg:  'assets/reference/dpp/mock.png',
    thumb:    'assets/reference/dpp/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2019' },
    cat:      'Web · Veřejný sektor · Golemio API',
    meta: { klient: { a: 'Dopravní podnik hl. m. Prahy', b: 'Veřejná doprava' }, rok: { a: '2019', b: 'Vývoj a&nbsp;provoz' }, sluzby: { a: 'Web, design, vývoj', b: 'Vývoj + provoz' }, stack: { a: 'PHP · Elasticsearch', b: 'Golemio API · MySQL' } },
    initial: { heading: 'Přes milion cestujících denně. A&nbsp;web, který musí <span class="red">odpovědět každému.</span>', lead: 'Web DPP je první místo, kam Pražané míří pro výluky, jízdenky i&nbsp;aktuální odjezdy &ndash; musí unést obrovskou šíři agend i&nbsp;špičky provozu.', p1: 'Dopravní podnik hl. m. Prahy je největší městský dopravce v&nbsp;ČR &ndash; provozuje metro, tramvaje i&nbsp;autobusy a&nbsp;denně přepraví nespočet cestujících. Jeho web není vizitka, ale provozní nástroj: cestující na&nbsp;něm hledají spojení, výluky, tarify i&nbsp;prodejní místa a&nbsp;očekávají odpověď okamžitě.', p2: 'Šíře agend je přitom enormní &ndash; od&nbsp;jízdních řádů a&nbsp;tarifních zón přes mimořádnosti v&nbsp;provozu až po muzeum vozidel, školní programy nebo bezbariérový přístup do&nbsp;metra.', p3: 'Cílem bylo postavit platformu, která tuto šíři unese: živá data o&nbsp;provozu přímo na&nbsp;webu, výkonné vyhledávání nad&nbsp;celým obsahem a&nbsp;desítky samostatných agend spravovaných z&nbsp;jednoho systému.' },
    pillars: [
      { title: 'Živá data z&nbsp;pražské datové platformy', desc: 'Napojení na&nbsp;Golemio API (pražská open data) přináší na&nbsp;web odjezdové tabule a&nbsp;polohy vozidel v&nbsp;reálném čase. Cestující vidí skutečný stav provozu, ne statický jízdní řád.' },
      { title: 'Vyhledávání nad&nbsp;celým obsahem', desc: 'Fulltextové vyhledávání postavené na&nbsp;Elasticsearch zvládá tisíce stránek obsahu &ndash; od&nbsp;tarifů přes výluky po prodejní místa. Cestující najde odpověď na&nbsp;jeden dotaz, bez&nbsp;proklikávání strukturou.' },
      { title: 'Jedna platforma, desítky agend', desc: 'Přes 60 modulů pokrývá vše od&nbsp;jízdenek a&nbsp;tarifních zón přes výluky s&nbsp;automatickým publikováním na&nbsp;sociální sítě až po bezbariérová zařízení v&nbsp;metru. Členské sekce chrání dvoufaktorové přihlášení přes SMS, osobní data hlídá GDPR modul.' },
    ],
    kpis: [
      { label: 'Modulů na platformě', value: '60<span class="red">+</span>', title: 'Modulů na jedné platformě', desc: 'Jízdenky, výluky, odjezdové tabule, muzeum vozidel i&nbsp;školní programy &ndash; vše spravované z&nbsp;jednoho systému.' },
      { label: 'Data o provozu', value: 'Real-time', title: 'Data o&nbsp;provozu', desc: 'Polohy vozidel a&nbsp;odjezdové tabule z&nbsp;pražské datové platformy Golemio přímo na&nbsp;webu.' },
    ]
  },

  /* ─── 10. Bambule ───────────────────────────────────── */
  {
    num:      '10',
    id:       'bambule',
    name:     'Bambule',
    headline: 'Implementace intuitivního rezervačního systému z&nbsp;webu na&nbsp;prodejny pro zefektivnění nákupního procesu a&nbsp;zvýšení komfortu zákazníků.',
    category: 'Rezervační systém',
    year:     '2022',
    tags:     ["eshop"],
    href:     'bambule.html',
    domain:   'bambule.cz',
    mockImg:  'assets/reference/bambule/mock.png',
    thumb:    'assets/reference/bambule/thumb.png',
    badge:    { show: false, text: 'WT100', year: '2022' },
    cat:      'E-commerce · Rezervace · Retail',
    meta: { klient: { a: 'Alltoys', b: 'Hračky a&nbsp;volný čas' }, rok: { a: '2022', b: '4 měsíce vývoje' }, sluzby: { a: 'Rezervační systém z&nbsp;webu na&nbsp;prodejny', b: 'Design + vývoj + provoz' }, stack: { a: 'PHP · MySQL', b: 'AJAX · Cron · cachování dat' } },
    initial: { heading: 'Rezervace na&nbsp;prodejnu, která <span class="red">nebrzdí web.</span>', lead: 'Klient potřeboval sjednotit a&nbsp;zjednodušit proces online rezervací zboží na&nbsp;svých kamenných pobočkách tak, aby odpovídal standardům velkých hráčů na&nbsp;trhu.', p1: 'Před zahájením projektu využívaly e-shop Bambule standardní proces vložení do&nbsp;košíku, který nebyl optimalizován pro rychlou rezervaci na&nbsp;prodejně. Zákazník neměl jasnou informaci o&nbsp;tom, na&nbsp;kolika a&nbsp;na&nbsp;kterých prodejnách je zboží ihned k&nbsp;dispozici přímo ve&nbsp;výpisu nebo detailu produktu.', p2: 'Absence přímé cesty k&nbsp;rezervaci nutila zákazníky procházet standardním více-krokovým košíkem, což mohlo vést k&nbsp;opouštění procesu. Provoz webu mohl být ohrožen, pokud by se&nbsp;skladová dostupnost na&nbsp;desítkách prodejen počítala v&nbsp;reálném čase při každém načtení stránky.', p3: 'Hlavním cílem bylo vytvořit nový nákupní rozcestník, který umožní volbu mezi klasickým nákupem a&nbsp;okamžitou rezervací, zajistit plynulý průchod zjednodušeným košíkem a&nbsp;udržet vysoký výkon e-shopu i&nbsp;při vysoké zátěži (např. Black Friday).' },
    pillars: [
      { title: 'Pre-kalkulace skladové dostupnosti', desc: 'Namísto výpočtů v&nbsp;reálném čase jsme nasadili cron úlohu, která pravidelně předpočítává počty kusů na&nbsp;prodejnách do&nbsp;dedikovaného sloupce v&nbsp;databázi. To zabránilo zpomalení webu, které by jinak hrozilo při přímém dotazování během špiček.' },
      { title: 'Interaktivní AJAX popup rozcestník', desc: 'Vyskakovací okno se&nbsp;zobrazí po kliknutí na&nbsp;tlačítko rezervace a&nbsp;nabízí dvě jasné cesty: vložení do&nbsp;košíku, nebo výběr konkrétní prodejny pro odběr. Řešení zohledňuje stav přihlášení a&nbsp;integruje klubové výhody.' },
      { title: 'Zjednodušený jednokrokový rezervační proces', desc: 'Při volbě rezervace je uživatel přesměrován do&nbsp;modifikovaného košíku s&nbsp;předvybranou dopravou a&nbsp;pobočkou, kde pouze doplní údaje a&nbsp;vybere platbu. Systém hlídá integritu košíku a&nbsp;při kombinaci s&nbsp;jiným typem dopravy provádí automatický reset.' },
    ],
    kpis: [
    ]
  },

  /* ─── 11. Armed ─────────────────────────────────────── */
  {
    num:      '11',
    id:       'armed',
    name:     'Armed',
    headline: 'Implementace systému Webkasa zefektivnila prodej na&nbsp;prodejnách skrze integraci s&nbsp;ERP Vario a&nbsp;platebními terminály GP Tom &ndash; automatizace plateb a&nbsp;síťový tisk účtenek.',
    category: 'Pokladní systém',
    year:     '2024',
    tags:     ["webapp"],
    href:     'armed.html',
    domain:   'armed.cz',
    badge:    { show: false, text: 'WT100', year: '2024' },
    cat:      'Web POS · ERP Vario · Retail',
    meta: { klient: { a: 'Armed', b: 'Maloobchod s&nbsp;army a&nbsp;outdoor vybavením' }, rok: { a: '2023&ndash;2024', b: '6 měsíců vývoje' }, sluzby: { a: 'Vývoj webového pokladního systému (Webkasa), integrace ERP', b: 'Design + vývoj + provoz' }, stack: { a: 'PHP · JavaScript', b: 'ERP Vario · GP Tom' } },
    initial: { heading: 'Pokladna, která <span class="red">nesmí spadnout.</span>', lead: 'Klient potřeboval sjednotit prodej na&nbsp;pobočkách s&nbsp;e-shopovým rozhraním a&nbsp;zajistit plnou automatizaci datových toků do&nbsp;podnikového systému Vario.', p1: 'Před implementací Webkasy nebyl prodej na&nbsp;prodejnách plně integrován do&nbsp;digitálního ekosystému e-shopu. Obsluha používala proprietární POS systém v&nbsp;ERP Vario, který trpěl výpadky a&nbsp;zdržoval jak zákazníky, tak prodavače.', p2: 'Tento stav měl negativní dopad na&nbsp;rychlost odbavení zákazníků, zejména ve&nbsp;špičkách.', p3: 'Naším cílem bylo vytvořit modulární webové rozhraní (Webkasu) jako primární nástroj pro pokladníky &ndash; bleskové markování zboží, automatizovaná registrace zákazníků včetně profesních slev a&nbsp;okamžitý tisk účtenek přímo z&nbsp;e-shopového prostředí.' },
    quote: { text: 'Cílem bylo vytvořit jednodušší a&nbsp;na&nbsp;zákazníka zaměřený systém, který funguje spolehlivě a&nbsp;integruje marketingové funkce e-shopu.', name: 'Pavel Zendulka', role: 'Jednatel · Armed' },
    pillars: [
      { title: 'Plná integrace s&nbsp;ERP Vario', desc: 'Automatická tvorba příjmových a&nbsp;výdajových dokladů, faktur a&nbsp;jejich odesílání do&nbsp;systému Vario na&nbsp;základě akcí v&nbsp;Webkase. Do&nbsp;ERP se&nbsp;nově přenáší i&nbsp;identifikátor pokladníka, což umožňuje přesné sledování výkonnosti prodejen i&nbsp;osob.' },
      { title: 'Optimalizace prodejního procesu (UX)', desc: 'Asynchronní načítání produktů čtečkou čárových kódů automaticky vrací kurzor do&nbsp;vstupního pole &ndash; plynulé skenování bez&nbsp;klikání myší. Registrace nových zákazníků byla zjednodušena na&nbsp;minimum údajů s&nbsp;okamžitým přidělením profesních slev.' },
      { title: 'Spolehlivý síťový tisk a&nbsp;přehled skladů', desc: 'Přímý síťový tisk na&nbsp;tiskárnách Epson TM přes otevřený protokol tiskne účtenku okamžitě po platbě. Pokladník má navíc přímo v&nbsp;košíku kontrolu dostupnosti zboží na&nbsp;ostatních pobočkách.' },
      { title: 'GP TOM', desc: 'Vyvinuli a&nbsp;certifikovali jsme platbu kartami přes terminál GP Tom. Součástí certifikace je denní uzávěrka, platba i&nbsp;vratky &ndash; vše přes API.' },
    ],
    kpis: [
      { label: 'Spolehlivost odbavení', value: '<span class="red">✓</span>', title: 'Spolehlivost odbavení', desc: 'Díky automatickému focusu čtečky a&nbsp;asynchronnímu přidávání produktů odpadla nutnost manuálního potvrzování každé položky.' },
      { label: 'Snížení administrativy', value: '<span class="red">✓</span>', title: 'Snížení administrativy', desc: 'Automatizace tvorby dokladů (faktury, výdejky, pokladní doklady) v&nbsp;ERP Vario eliminuje ruční přepisování dat.' },
      { label: 'Efektivita registrací', value: '<span class="red">✓</span>', title: 'Efektivita registrací', desc: 'Nové registrace a&nbsp;aktivace profesních ceníků probíhají ihned na&nbsp;prodejně &ndash; odpadá dodatečné schvalování v&nbsp;administraci.' },
      { label: 'Okamžitý tisk', value: '<span class="red">✓</span>', title: 'Okamžitý tisk', desc: 'Síťový tisk na&nbsp;tiskárnách Epson TM zajistil spolehlivý tisk bez&nbsp;prodlev způsobených uzavřenými protokoly.' },
    ]
  },

  /* ─── 12. Terezia ───────────────────────────────────── */
  {
    num:      '12',
    id:       'terezia',
    name:     'Terezia',
    headline: 'Vícejazyčný e-shop pro českého výrobce přírodních doplňků stravy s&nbsp;distribucí do&nbsp;celé EU &ndash; vlastní výroba, 50+ produktů, klinické studie a&nbsp;prodej přímo spotřebiteli.',
    category: 'Vícejazyčný e-shop',
    year:     '',
    tags:     ["eshop"],
    href:     'terezia.html',
    domain:   'terezia.eu',
    badge:    { show: false, text: 'WT100', year: '2025' },
    cat:      'E-commerce · D2C · EU',
    meta: { klient: { a: 'The Terezia Company, s.r.o.', b: 'Doplňky stravy · E-commerce' }, rok: { a: '', b: '' }, sluzby: { a: 'E-shop, design, vývoj', b: 'Design + vývoj + provoz' }, stack: { a: 'PHP · MySQL', b: 'GPwebpay · PayU · PayPal' } },
    initial: { heading: 'Třicet let výzkumu a&nbsp;výroby. Web, který to <span class="red">nedokázal předat.</span>', lead: 'Terezia Company je česká rodinná firma s&nbsp;vlastní výrobou, klinickými studiemi a&nbsp;distribucí do&nbsp;celé EU &ndash; digitální prodejní kanál ale neodpovídal šíři a&nbsp;důvěryhodnosti značky.', p1: 'The Terezia Company působí od&nbsp;roku 1990 a&nbsp;jako první v&nbsp;ČR uvedla v&nbsp;roce 2004 hlívu ústřičnou na&nbsp;trh v&nbsp;kapslích jako potravinový doplněk. Dnes má v&nbsp;portfoliu přes 50 produktů z&nbsp;léčivých hub a&nbsp;rostlin, vlastní certifikovanou výrobní linku a&nbsp;řadu klinických studií.', p2: 'Mezinárodní distribuce vyžadovala e-shop schopný obsluhovat zákazníky v&nbsp;různých zemích &ndash; v&nbsp;jejich jazyce, s&nbsp;lokální dopravou a&nbsp;platebními možnostmi. Zároveň bylo klíčové předat důvěryhodnost značky: vlastní výroba, certifikace HACCP, dohled SZPI a&nbsp;laboratorní analýzy každé šarže.', p3: 'Cílem bylo postavit přehledný vícejazyčný e-shop, který zákazníkovi pomůže vybrat správný produkt, podpoří důvěru v&nbsp;kvalitu a&nbsp;zvládne provoz na&nbsp;více trzích s&nbsp;různými dopravci a&nbsp;platebními metodami.' },
    pillars: [
      { title: 'Vícejazyčný e-shop s&nbsp;lokální dopravou', desc: 'E-shop funguje v&nbsp;řadě jazykových mutací a&nbsp;nabízí lokální dopravu pro jednotlivé země EU &ndash; od&nbsp;ČR a&nbsp;SR přes Rakousko, Německo a&nbsp;Belgii až po baltské státy. Každý trh má vlastního dopravce a&nbsp;platební metody s&nbsp;výdejními místy synchronizovanými přes API.' },
      { title: 'Produktové průvodce a&nbsp;edukace', desc: 'Terezia staví na&nbsp;edukaci &ndash; klinické studie, průvodce surovinami a&nbsp;přehled podle části těla. Zákazník hledá podle suroviny (hlíva, reishi, rakytník) i&nbsp;podle cíle (imunita, trávení, energie). Důvěryhodnost posilují informace o&nbsp;výrobě a&nbsp;certifikacích.' },
      { title: 'Přímý prodej spotřebiteli (D2C)', desc: 'Kromě distribuce přes lékárny Terezia prodává přímo přes e-shop. Platforma umožňuje efektivní D2C kanál s&nbsp;vyšší marží, přímým kontaktem se&nbsp;zákazníkem a&nbsp;budováním věrnostního vztahu nezávislého na&nbsp;maloobchodních řetězcích.' },
    ],
    kpis: [
      { label: 'Historie na trhu', value: '35 let', title: 'Historie na trhu', desc: 'Terezia Company působí od&nbsp;roku 1990 &ndash; e-shop důstojně reprezentuje pozici průkopníka přírodních doplňků v&nbsp;ČR.' },
      { label: 'Produktů v portfoliu', value: '50<span class="red">+</span>', title: 'Produktů v&nbsp;portfoliu', desc: 'Doplňky z&nbsp;léčivých hub a&nbsp;rostlin pro imunitu, trávení, srdce, energii i&nbsp;dětské produkty.' },
      { label: 'Distribuce po EU', value: 'EU', title: 'Distribuce po&nbsp;celé Evropě', desc: 'Lokální dopravci pro desítky zemí EU &ndash; od&nbsp;ČR a&nbsp;SR přes Německo a&nbsp;Belgii až po baltské státy.' },
      { label: 'Platebních bran', value: '5', title: 'Platebních bran', desc: 'PayPal, GPwebpay, PayU, TatraBanka a&nbsp;24pay &ndash; každý trh platí tak, jak je zvyklý.' },
    ]
  },

  /* ─── 13. Travel Free ───────────────────────────────── */
  {
    num:      '13',
    id:       'travel-free',
    name:     'Travel Free',
    headline: 'Web a&nbsp;mobilní aplikace pro Europe\'s No.&nbsp;1 Bordershop &ndash; ERP jako jediný zdroj pravdy, real-time synchronizace dat a&nbsp;věrnostní program přímo v&nbsp;kapse zákazníka.',
    category: 'Web + mobilní app',
    year:     '2016',
    tags:     ["webapp"],
    href:     'travel-free.html',
    domain:   'travel-free.cz',
    badge:    { show: false, text: 'WT100', year: '2016' },
    cat:      'Travel retail · Mobilní app · ERP',
    meta: { klient: { a: 'Travel Free', b: 'Duty-free · Travel retail' }, rok: { a: '2016', b: 'Vývoj a&nbsp;provoz' }, sluzby: { a: 'Web design a&nbsp;vývoj, API pro mobilní aplikaci', b: 'Design + vývoj + provoz' }, stack: { a: 'PHP · Elasticsearch', b: 'MS Dynamics NAV · Firebase' } },
    initial: { heading: '27 prodejen, dvě měny, dva jazyky. A&nbsp;ERP, který to <span class="red">drží pohromadě.</span>', lead: 'Travel FREE provozuje 27 prodejen podél celé české hranice a&nbsp;potřeboval jednotnou digitální platformu napojenou na&nbsp;ERP &ndash; která zákazníkovi ukáže aktuální nabídku a&nbsp;věrnostní program v&nbsp;reálném čase.', p1: 'Travel FREE je součástí mezinárodní skupiny Gebr. Heinemann a&nbsp;jako Europe\'s No.&nbsp;1 Bordershop provozuje 27 prodejen od&nbsp;Aše přes Rozvadov až po Mikulov a&nbsp;Hevlín. Sortiment zahrnuje prémiové lihoviny, kávu, cukrovinky, parfémy a&nbsp;exkluzivní border-only edice.', p2: 'Travel retail má jedno zásadní omezení: online prodej a&nbsp;doručení není ze&nbsp;zákonných důvodů možné. Web proto nesměl být e-shopem &ndash; ale musel fungovat jako důvěryhodný digitální průvodce, který zákazníka připraví na&nbsp;návštěvu prodejny, ukáže ceny a&nbsp;akce a&nbsp;umožní rezervaci vybraných produktů.', p3: 'K&nbsp;tomu přibyla potřeba obsluhovat dvě jazykové skupiny (CZ/DE) ve&nbsp;dvou měnách a&nbsp;propojit web s&nbsp;mobilní aplikací a&nbsp;věrnostním programem CLUBCARD &ndash; to vše napojeno na&nbsp;jediný zdroj dat: ERP Microsoft Dynamics NAV.' },
    pillars: [
      { title: 'Real-time napojení na&nbsp;ERP Navision', desc: 'Zákazníci, sklady a&nbsp;objednávky se&nbsp;synchronizují s&nbsp;Microsoft Dynamics NAV průběžně přes asynchronní frontu. Web i&nbsp;aplikace tak vždy ukazují aktuální data &ndash; integrace ustojí i&nbsp;krátkodobý výpadek ERP bez&nbsp;ztráty transakce.' },
      { title: 'API pro mobilní aplikaci', desc: 'Versionované REST API pohání nativní aplikace pro iOS a&nbsp;Android. Push notifikace přes Firebase s&nbsp;deep-linkingem vedou zákazníka rovnou na&nbsp;konkrétní produkt, nabídku nebo prodejnu.' },
      { title: 'Věrnostní program a&nbsp;digitální účtenky', desc: 'Digitální karty, vouchery s&nbsp;čárovými kódy a&nbsp;účtenky přímo v&nbsp;aplikaci nahradily papír a&nbsp;plast. Celé řešení běží dvojjazyčně (čeština, němčina) a&nbsp;ve&nbsp;dvou měnách (CZK, EUR).' },
    ],
    kpis: [
      { label: 'Generace API', value: '4', title: 'Generace API', desc: 'Mobilní API se&nbsp;kontinuálně rozvíjí od&nbsp;verze 2.8 po v4.' },
      { label: 'Jazyky a měny', value: '2', title: 'Jazyky a&nbsp;měny', desc: 'Paralelní CZ a&nbsp;DE verze s&nbsp;přepínáním CZK/EUR &ndash; klíčové pro německy mluvící zákazníky ze&nbsp;sousedních zemí.' },
      { label: 'Bordershop v Evropě', value: 'No. 1', title: 'Bordershop v&nbsp;Evropě', desc: 'Travel Free je součástí skupiny Gebr. Heinemann &ndash; jednoho z&nbsp;předních travel retail operátorů na&nbsp;světě.' },
      { label: 'Prodejen v síti', value: '27', title: 'Prodejen v&nbsp;síti', desc: 'Od&nbsp;Aše přes Rozvadov po Hevlín &ndash; celá síť podél české hranice na&nbsp;jedné platformě.' },
    ]
  },

  /* ─── 14. Kinoko ────────────────────────────────────── */
  {
    num:      '14',
    id:       'kinoko',
    name:     'Kinoko',
    headline: 'B2C e-shop postavený na&nbsp;přímém napojení na&nbsp;ERP &ndash; ceny, zásoby, rezervace i&nbsp;pre-ordery v&nbsp;reálném čase.',
    category: 'E-shop',
    year:     '2022',
    tags:     ["eshop"],
    href:     'kinoko.html',
    domain:   'kinoko.cz',
    badge:    { show: false, text: 'WT100', year: '2022' },
    cat:      'E-commerce · D2C · ERP integrace',
    meta: { klient: { a: 'Kinoko', b: 'Sportovní oblečení · Móda · D2C' }, rok: { a: '2022', b: 'Vývoj a&nbsp;provoz' }, sluzby: { a: 'E-shop, vývoj', b: 'Design + vývoj + provoz' }, stack: { a: 'PHP 8.3 · MySQL', b: 'ERP AlbiLine · Sphinx' } },
    initial: { heading: 'E-shop je jen tak dobrý, jak <span class="red">čerstvá jsou jeho data.</span>', lead: 'Kinoko je česká značka prémiového sportovního oblečení pro ženy, která od&nbsp;svého vzniku v&nbsp;roce 2020 rychle roste &ndash; a&nbsp;její e-shop musel růst s&nbsp;ní.', p1: 'Kinoko založil v&nbsp;roce 2020 Antonín Kokeš, zakladatel Albi, s&nbsp;cílem vytvořit co nejpohodlnější sportovní oblečení pro ženy všech postav. Od&nbsp;roku 2021 značka šije v&nbsp;České republice. Sortiment zahrnuje legíny, sportovní podprsenky, šortky, mikiny i&nbsp;jógamatky &ndash; výhradně pro ženy, ve&nbsp;střizích pro různé proporce.', p2: 'Pro fungování D2C značky s&nbsp;vlastní výrobou a&nbsp;lokálním ERP byl klíčový spolehlivý tok dat mezi skladem a&nbsp;e-shopem. Zákaznice potřebovaly vidět přesnou dostupnost velikostí v&nbsp;reálném čase, včetně předobjednávek na&nbsp;zboží na&nbsp;cestě. Současně bylo nutné zajistit spolehlivé měření i&nbsp;v&nbsp;prostředí s&nbsp;vysokým podílem blokátorů reklam.', p3: 'Zadání zahrnovalo e-shop s&nbsp;integrací na&nbsp;ERP AlbiLine, fulltextové vyhledávání s&nbsp;našeptávačem, server-side měření přes GA4 Measurement Protocol a&nbsp;XML feedy pro cenové srovnávače.' },
    pillars: [
      { title: 'Šest datových toků z&nbsp;ERP', desc: 'Produkty, ceny, zásoby, objednávky, rezervace i&nbsp;pre-ordery se&nbsp;synchronizují se&nbsp;skladovým systémem AlbiLine automaticky. Nikdo nepřepisuje ceny ručně &ndash; e-shop vždy nabízí to, co je skutečně skladem, včetně předobjednávek na&nbsp;zboží na&nbsp;cestě.' },
      { title: 'Vyhledávání s&nbsp;našeptávačem', desc: 'Fulltextové vyhledávání nad&nbsp;katalogem s&nbsp;okamžitým našeptáváním pomáhá zákaznici najít produkt na&nbsp;pár úhozů &ndash; i&nbsp;s&nbsp;překlepem nebo neúplným názvem.' },
      { title: 'Přesná data pro marketing', desc: 'E-commerce události se&nbsp;měří server-side přes GA4 Measurement Protocol &ndash; měření neovlivní adblocky ani ztracené cookies. XML feedy zásobují srovnávače zboží.' },
    ],
    kpis: [
      { label: 'Datových toků z ERP', value: '6', title: 'Datových toků z&nbsp;ERP', desc: 'Produkty, ceny, zásoby, objednávky, rezervace a&nbsp;pre-ordery.' },
      { label: 'Ručně přepisovaných cen', value: '0', title: 'Ručně přepisovaných cen', desc: 'Ceny a&nbsp;dostupnost se&nbsp;propisují z&nbsp;ERP &ndash; web nikdy nenabízí zboží, které není skladem.' },
    ]
  }

];