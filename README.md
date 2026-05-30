# FE22 HTML Miniproject 1

My **first school project in HTML** — a personal introduction website built during the FE22 front-end program in September 2022.

**Live demo:** [elli2022.github.io/fe22-html-mp1-eleonora-nocentini-skoldebrink](https://elli2022.github.io/fe22-html-mp1-eleonora-nocentini-skoldebrink/)

## About the project

This was the very first assignment where we published a small multi-page site with plain HTML and CSS:

- **Home** — personal introduction and background
- **Inspiration** — people who inspire me
- **Contact** — a simple contact form

The original version is preserved on `version/original`. `main` is a modern rebuild with the same content and structure, using a current front-end toolchain.

## Version history

| Branch | Description | Date |
|--------|-------------|------|
| `version/original` | First HTML school submission (plain HTML + CSS) | 2022-09-06 |
| `main` | Modern rebuild (Vite + Tailwind CSS) | 2026 |

```bash
git checkout version/original   # 2022 school version
git checkout main               # modern rebuild (deployed)
```

Tag: `v0-original` · `v2-modern`

## Modern stack

- [Vite](https://vitejs.dev/) — multi-page build
- [Tailwind CSS](https://tailwindcss.com/) — layout and design system
- Semantic HTML, responsive layout, accessible form labels
- GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` build the site and deploy to **GitHub Pages** via `.github/workflows/deploy-pages.yml`.

## School context

- **Course:** FE22 · HTML/CSS
- **Assignment:** Miniproject 1 — personal introduction site
- **Original stack:** HTML + CSS (no framework)
- **Modern rebuild:** static site with Vite + Tailwind, deployed from `main`
