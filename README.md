# Tech Ease After 50

A friendly, lightweight blog and learning hub for adults over 50 who want to feel confident with smartphones, apps, AI tools, and online safety.

Built with React + Vite + Tailwind CSS + React Router. Production-served with Express and `compression` middleware.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- Express 4 + compression (for production hosting)

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```
Opens at <http://localhost:5173>.

## Build

```bash
npm run build
```
Outputs the static site to `dist/`.

## Run in production

```bash
npm run build
npm start
```
Express serves `dist/` with gzip compression on `PORT` (defaults to 3000).

## Deploy

Works on any Node 18+ host (Heroku, Render, Railway, Fly.io). The included `Procfile` and `app.json` make Heroku one-click.

```bash
heroku create
git push heroku main
```

Render / Railway: set build command `npm install && npm run build` and start command `npm start`.

## Project structure

```
src/
├── assets/images/   – local SVG illustrations (hero / categories / blog / tutorials / community)
├── components/      – Navbar, Footer, CookieBanner, Expandable, etc.
├── pages/           – Home, About, Blog, Tutorials, Community, Contact, 404
│   ├── categories/  – 6 category pages
│   └── legal/       – Privacy, Terms, Refund
└── utils/analytics.js – trackEvent / trackPageView
```

## Notes

- Articles expand **inline** on click (no extra routes, no modals).
- All images are stored locally; nothing is loaded from a runtime CDN.
- Google Analytics tag (`G-4J046JXWVC`) is included in `index.html`.
- Includes Privacy, Terms, Refund, Contact, About pages + cookie banner for Google Ads compliance.
