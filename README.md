# Traiwit Kunrapeepat — Portfolio

Personal portfolio website. Built with Next.js (static export), TypeScript, Tailwind CSS, Framer Motion, and Three.js (React Three Fiber), deployed to GitHub Pages via GitHub Actions.

**Live:** https://chibadev0.github.io/

## Tech Stack

- Next.js (App Router, static export)
- TypeScript (strict mode)
- Tailwind CSS v4
- Framer Motion
- Three.js / React Three Fiber
- Web3Forms (contact form)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.local.example` to `.env.local` and fill in a [Web3Forms](https://web3forms.com) access key to enable the contact form locally.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production static export (outputs to `out/`)
- `npm run lint` — ESLint
- `npm run type-check` — TypeScript check
- `npm run format` / `npm run format:check` — Prettier

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static export and deploys it to GitHub Pages. The `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` repository secret must be set for the contact form to work in production.
