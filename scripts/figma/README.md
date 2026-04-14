# Figma Export Pack

Questo flusso genera screenshot pagina-per-pagina pronti da importare in Figma.

## Cosa fa

- Esporta tutte le principali route del sito in file PNG separati.
- Genera solo `desktop` (una schermata per route).
- Forza `?figma=1` per disattivare automaticamente:
  - `AppLoader`
  - `AppCursor`
  - `CookieBanner`
- Forza `reduced motion` e disattiva animazioni/transizioni per evitare schermate vuote.

## 1) Avvia il sito

In un terminale:

```bash
npm run dev
```

## 2) Esegui export

In un secondo terminale:

```bash
npm run figma:export
```

Output generato:

- `figma-export/desktop/*.png`
- `figma-export/manifest.json`

## Variabili opzionali

```bash
FIGMA_EXPORT_BASE_URL=http://localhost:3000
FIGMA_EXPORT_OUT_DIR=figma-export
FIGMA_EXPORT_WAIT_MS=900
```

Esempio:

```bash
FIGMA_EXPORT_BASE_URL=http://localhost:3000 FIGMA_EXPORT_WAIT_MS=1200 npm run figma:export
```

## Import in Figma

1. Crea un nuovo file Figma.
2. Crea una pagina Figma: `Desktop`.
3. Trascina i PNG dentro la pagina.
4. (Opzionale) Rinomina i frame seguendo `manifest.json`.

## Note

- La route `/account` esporta la schermata di accesso o dashboard in base alla sessione attiva nel browser di Playwright.
- Se vuoi esportare anche `/en/...`, duplica le route nello script con prefisso `/en`.
