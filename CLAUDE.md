# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Dev server (runs at http://localhost:8000)
npm run dev

# Static site generation
npm run generate

# Lint
npm run lint
```

There are no tests in this project.

## Before Each Build

Update `generate.dir` in `nuxt.config.js` to the desired output folder name (e.g. `'Test-V9.7-02252026'`). This is where the static files will be generated.

## Architecture

**Nuxt 2 static site** with SSR disabled (`ssr: false`, `target: 'static'`). The site generates static HTML using `nuxt generate`, which fetches all dynamic route data from Firebase Realtime Database at build time.

### Data Layer

Content lives in **Firebase Realtime Database** (`csi-web3-resources-default-rtdb.firebaseio.com`). Collections: `articles`, `public-safety`, `justice-courts`, `crime-intelligence`, `capabilities`, `staff`, `leadership`, `testimonials`, `jobs`.

Local JSON files in `/data/` (e.g. `data/public-safety.json`) are **fallbacks for dev mode only** — product detail pages (`pages/public-safety/_id.vue`, etc.) use `asyncData` with a payload from generate routes in production, but fall back to importing the local JSON when no payload is available.

### Vuex Store

- `store/index.js` — main store; fetches all content from Firebase via axios. The `filterArticles` getter handles type/tag filtering for the resources page.
- `store/tags.js` — static filter options for resource type and product tags.
- `layouts/default.vue` bootstraps `getArticles`, `getTeams`, and `getTestimonials` on creation.

### Routing

Dynamic routes: `/public-safety/:id`, `/justice-courts/:id`, `/crime-intelligence/:id`, `/capabilities/:id`, `/resources/:id`. These are pre-generated in `nuxt.config.js` via `dynamicRoutes()`, which fetches all items from Firebase and maps them to route/payload pairs. A catch-all `*` route renders `pages/404.vue`.

### Styling

Two CSS frameworks are used together — **Vuetify 2** and **Tailwind CSS** — with Tailwind classes prefixed `tw-` to avoid conflicts. Global SCSS is in `assets/style.scss` (imports from `assets/sass/`). Design tokens (colors, breakpoints, font sizes, hero heights) are defined in `assets/variables.scss`, which is available globally via `@nuxtjs/style-resources`.

Key SCSS variables: `$primary-color: #0d63ba`, breakpoints `$breakpoints-xs` through `$breakpoints-2xl`, heading sizes `$heading-1-size` through `$tips-size`.

### Component Patterns

- Components auto-import is enabled — no explicit imports needed for components in `/components/`.
- Heavy below-fold components use Vue's lazy hydration via the `Lazy` prefix (e.g. `<LazyIndexAbout v-if="show" />`), where `show` is set `true` on first scroll.
- Product/capability detail pages follow the same pattern: `Hero` → `Highlights` → `Capabilities` → `SysFeatures` → `Extendings` → `RelatedProducts` → `TheTeam` → `RelatedNews` → `Contact`.

### Code Style

Prettier config: no semicolons, single quotes. ESLint extends `@nuxtjs` + `plugin:nuxt/recommended` + `prettier`.
