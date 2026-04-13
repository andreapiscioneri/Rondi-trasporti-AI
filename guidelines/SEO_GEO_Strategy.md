# SEO + GEO Strategy (Nuxt 3)

## 1) Target geografico
- Citta primaria: Brescia.
- Aree secondarie: Milano, Verona, Bergamo.
- Espansione futura: Torino, Padova, Modena (aggiungere in `shared/local-seo.ts`).

## 2) Cluster keyword locali
- Trasporti nazionali + citta:
  - trasporti nazionali brescia
  - trasporti nazionali milano
  - trasporti nazionali verona
- Trasporti internazionali + citta:
  - trasporti internazionali brescia
  - spedizioni internazionali milano
- Trasporti eccezionali + area:
  - trasporti eccezionali brescia
  - trasporto fuori sagoma verona
- Gru e movimentazioni:
  - noleggio gru industriale brescia
  - sollevamenti industriali bergamo
- Logistica e dogana:
  - logistica industriale milano
  - pratiche doganali brescia
- Varianti intent:
  - vicino a me
  - zona industriale
  - preventivo rapido

## 3) Architettura local SEO
- Servizio root: `/servizi`.
- Servizio + citta: `/servizi/[service]/[city]`.
- Servizio + citta + zona: `/servizi/[service]/[city]/[district]`.

Routing implementato in:
- `pages/servizi/[service]/[city]/[[district]].vue`

Dataset locale in:
- `shared/local-seo.ts`

## 4) Regole anti-duplicazione
- Creare una landing locale solo se citta/area ha domanda reale o commercialmente strategica.
- Ogni pagina locale deve avere almeno:
  - nota operativa specifica della citta
  - intent locale del servizio
  - link a zone locali diverse
  - CTA geolocalizzata
- Evitare sostituzione meccanica di toponimi.

## 5) Struttura pagina locale (template riusabile)
Componente:
- `components/sections/GeoServicePage.vue`

Sezioni:
- H1 geolocalizzato
- descrizione locale unica
- mappa embed area
- linking interno verso altre citta e zone
- breadcrumb navigazionale

## 6) Structured data
Per ogni pagina locale:
- `LocalBusiness`
- `Place` + `GeoCoordinates`
- `Service`
- `BreadcrumbList`

Implementazione in:
- `pages/servizi/[service]/[city]/[[district]].vue`

Helper schema base in:
- `composables/useSeo.ts`

## 7) Internal linking GEO
- Da pagina servizi verso pagine locali (chip per citta) in:
  - `pages/servizi.vue`
- Da pagina locale verso:
  - altre citta dello stesso servizio
  - zone della stessa citta
- URL locali inserite in sitemap dinamica:
  - `server/routes/sitemap.xml.ts`

## 8) Robots + indicizzazione
File:
- `public/robots.txt`

Regole:
- blocco pattern tecnici (`/_nuxt/`, query string)
- allow esplicito pagine core
- sitemap dichiarata
- pagine sensibili con `noindex`:
  - `pages/whistleblowing.vue`
  - `pages/[...slug].vue`

## 9) Google Business Profile (operativo)
- Categoria primaria: Azienda di autotrasporti.
- Categorie secondarie:
  - Servizio logistico
  - Spedizioni internazionali
  - Noleggio gru / movimentazioni industriali (se disponibile)
- NAP identico tra sito, GBP, directory.
- Pubblicazione GBP: 1 post/settimana (mezzi, case study locali, certificazioni).
- Recensioni: risposta entro 48h, con riferimento servizio + area.

## 10) KPI da monitorare
- Impression e click per query `servizio + citta` in Search Console.
- CTR landing locali.
- Posizionamento local pack (Maps) su keyword prioritarie.
- Conversion rate per pagina locale (preventivo/contatto).

## 11) Backlog consigliato
- Creare pagine supporto per ogni servizio root (slug dedicati) e collegarle alle landing locali.
- Aggiungere immagini realmente locali (cantieri/sedi/aree) con alt geolocalizzati.
- Aggiungere FAQ locali per ogni cluster citta.
