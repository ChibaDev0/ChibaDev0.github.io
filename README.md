# Traiwit Kunrapeepat — Portfolio

Developer portfolio built with Next.js App Router, TypeScript and Tailwind CSS. Statically exported for GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

## Production preview and verification

```bash
npm run lint
npm run type-check
npm run format:check
npm run build
npm test
npm audit
npm run preview
```

The production preview binds to `http://127.0.0.1:4173`. Set `PORT` to use a different preview port. Browser tests use an isolated server on port `4181` by default (`PORTFOLIO_TEST_PORT` overrides it), so they can run while the normal preview stays open.

On a fresh machine, install the test browser once with `npx playwright install chromium`. The tests run against `out/`, not the development server; rebuild after source changes.

## Structure

- `src/app/`: static page composition, metadata and design tokens/styles.
- `src/components/`: navigation, hero, filterable work gallery, about/capabilities, experience and contact.
- `src/constants/projects.ts`: typed, curated project catalog and preview/source links.
- `public/images/projects/`: genuine screenshots of public entry pages, not generated product mockups.
- `docs/project-audit.json`: dated GitHub/demo health evidence and verification limits.
- `tests/portfolio.spec.ts`: desktop/mobile UI, keyboard, lazy-loaded asset, responsive and accessibility checks.
- `tests/polish.spec.ts`: readable typography, scroll reveals, live reduced-motion behavior and glow regression checks.
- `scripts/serve-export.mjs`: local-only static preview/test server; not a production backend.

## Design

Near-black surfaces, a restrained lavender accent, Geist typography with italic editorial headings, subtle CSS orbital motion, and an image-led project gallery. Heavy WebGL/particle backgrounds are no longer mounted on the portfolio page. Supporting body copy uses 15–17px with comfortable leading. Selective lavender glow highlights the hero, primary buttons, project hover/focus states and contact panel. `MotionEffects` progressively enhances sections with one-time IntersectionObserver / Web Animations reveals and registers filtered cards without hiding content when JavaScript is unavailable. Ambient hero motion pauses outside the viewport. Reduced-motion preferences, including changes while the page is open, are respected. Existing unused visual components remain available in source but are not part of the current page.

## Project curation

The October 25, 2026 audit examined 11 GitHub repositories and 8 URLs. Six curated projects are shown: Dily Shop, MeowMatch, LINE Vault, Tour Partner Hub, JustQR and Debug Study. MuffinShop is excluded because its public page displayed a server-rendering error despite returning HTTP 200. No repository or Vercel deployment was deleted.

`Public preview` means the public entry page rendered. `Login required` means the sign-in page rendered, not that authenticated workflows were tested. Private repositories have no source-code link. The catalog is deliberately curated rather than fetched from GitHub on each page visit, so future changes need an audit and a catalog edit.

Public entry-page screenshots were captured without signing in. Refresh the three gated entry previews with `node scripts/capture-login-previews.mjs`. Regenerate the social sharing image with `node scripts/generate-social-card.mjs`.

## Contact

Direct Instagram and Facebook links work without configuration. To enable the optional contact form, copy `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` locally. The form is hidden when no key is configured. Do not put credentials in chat or commit local environment files. Actual message delivery was not exercised in this redesign.

## Deployment

The existing `.github/workflows/deploy.yml` builds and publishes `out/` to GitHub Pages on pushes to `main`. Configure the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` repository secret only if the contact form is desired. This redesign has been built and verified locally; no commit, push or deployment was performed as part of the local redesign.

## Test artifacts

Playwright uses per-run `.playwright-runs/<timestamp>-<pid>/` output directories to avoid Windows file-lock collisions. These are ignored by Git. The desktop-only skip for the mobile Escape-key test is intentional. Automated axe checks do not replace a manual accessibility review or certify full WCAG compliance.
