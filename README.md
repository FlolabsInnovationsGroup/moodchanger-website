# MoodChanger.ai

The MoodChanger.ai marketing site, ported from the approved static HTML design
(`moodchanger-html/`) to Next.js 16 (App Router, TypeScript).

## Getting started

```bash
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build && npm run start   # production build
npm run lint                     # eslint
```

## Routes

| Route            | Original file      |
| ---------------- | ------------------ |
| `/`              | `index.html`       |
| `/wearables`     | `Wearables.html`   |
| `/smart-devices` | `SmartDevices.html`|
| `/people`        | `People.html`      |
| `/athletes`      | `Athletes.html`    |
| `/pets`          | `Pets.html`        |

## Layout of the code

```
src/
  app/               routes, root layout, generated icon / OG images, robots, sitemap
    _og-fonts/       Schibsted Grotesk TTFs, vendored for OG image generation
    globals.css      the design system (was athletes.css) — tokens, header, footer, reveals
  components/
    site/            Header, Footer, ScrollProgress, ToTop, ThemeToggle, MotionLayer
    showcase/        Showcase — the Wearables / Smart Devices carousel + detail overlay
    home/  people/  pets/     page-specific interactive sections
    FeatureCarousel.tsx       shared capability carousel (Athletes, People, Pets)
  hooks/             useAutoRotate — the Pets vision / device rotation
  lib/               site config, nav, metadata helper, showcase data
  styles/            per-page stylesheets (home, wearables, pets)
```

### Styling

`app/globals.css` is the shared design system and applies everywhere. The
per-page stylesheets in `src/styles/` are each scoped under a wrapper class
(`.page-home`, `.page-wear`, `.page-pets`) applied by that route's page
component.

This scoping is deliberate. The App Router does **not** remove a route's
stylesheet on client-side navigation, so without it `pets.css` would keep
restyling `.hero`, `.feature` and `.step` after navigating to Athletes, and
`.showcase` means different things in `home.css` and `wearables.css`. Scoping
makes the cascade behave exactly like the original per-page `<link>` tags.

If you add a rule to a page stylesheet, prefix it with that page's scope class.

### Theme

Light/dark is stored on `<html data-theme>` and persisted to `localStorage`
under `mc-theme`. A blocking inline script in the root layout applies it before
first paint so there is no flash; React reads it through `lib/theme.ts` as an
external store rather than owning the state.

### Content data

The Wearables and Smart Devices copy lives in `lib/wearables.ts` and
`lib/smart-devices.ts`, transcribed from the approved HTML. Fields that carry
inline accent markup (`<span class="caipo">`, `<span class="ans">`) are rendered
through `components/Rich.tsx`, which keeps the approved copy byte-identical.

## Metadata and social previews

`lib/metadata.ts` builds each route's metadata: title, description, canonical
URL, Open Graph and Twitter card. Next does not deep-merge `openGraph` from the
root layout, so every route goes through this helper to be sure it ships a
complete card.

- Preview image: `app/opengraph-image.tsx` (1200×630, generated at build time),
  reused by `app/twitter-image.tsx`.
- Icons: `app/icon.tsx`, `app/apple-icon.tsx`, `app/favicon.ico`.
- Production URL lives in `lib/site.ts` and drives `metadataBase`, canonicals
  and the sitemap. **Change it there if the domain changes.**

## Notes from the port

- `SmartDevices.html` referenced `img-sr-hero.webp`, which was never exported.
  The matching JPEG ships as `public/assets/sd-smart-robots.jpg`.
- The header's Wearables menu said "SmartGlasses" on some pages and
  "Smart Glasses" on the Wearables page; the site now uses "Smart Glasses"
  everywhere.
- `styles.css`, `layout.css`, `app.js`, `logo.png` and the loose root `.jpg`
  files in the HTML build were unreferenced and were not carried over.
