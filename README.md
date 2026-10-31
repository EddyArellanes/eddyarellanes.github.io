# eddyarellanes.dev

Personal website and blog of **Eddy Arellanes Bastida**, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed as a static site to GitHub Pages.

- 🌎 Bilingual: English (default, `/`) and Spanish (`/es/`)
- ✍️ Blog posts in Markdown
- 📡 RSS feeds: `/rss.xml` and `/es/rss.xml`
- 🗺️ Sitemap: `/sitemap-index.xml`

## Development

Requires Node.js 22+.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to ./dist
npm run preview  # serves ./dist locally
```

## Writing a blog post

Create a Markdown file in `src/content/blog/<lang>/<slug>.md`:

```md
---
title: My new post
description: One-line summary used in listings, SEO and RSS.
pubDate: 2026-11-01
updatedDate: 2026-11-05 # optional
tags: [astro, gamedev] # optional
draft: true # optional, drafts only show up in `npm run dev`
---

Content goes here.
```

To publish a translation, use the **same file name** in the other language folder
(`src/content/blog/en/my-post.md` ↔ `src/content/blog/es/my-post.md`). The post links the two automatically.

## Editing content

| What | Where |
| --- | --- |
| UI text (EN/ES) | `src/i18n/ui.ts` |
| Name, social links, career timeline, projects | `src/data/site.ts` |
| Page layouts | `src/views/*.astro` (route files in `src/pages` are thin per-language wrappers) |
| Theme colors | `src/styles/global.css` |

## Deployment

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`
(Settings → Pages → Source: **GitHub Actions**).

The pre-2020 site is preserved under `public/OldPage/` (served at `/OldPage/`) and in the `legacy-2019-site` tag.
