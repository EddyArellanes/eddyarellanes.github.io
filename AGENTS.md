# AGENTS.md

Context for AI coding agents (GitHub Copilot CLI, etc.) and contributors. Human-facing docs live in `README.md`.

## Project

Personal website and blog of Eddy Arellanes Bastida (GitHub: `EddyArellanes`).

- **Live:** https://eddyarellanes.dev (custom domain) and https://eddyarellanes.github.io
- **Repo:** `EddyArellanes/eddyarellanes.github.io` (GitHub user-site repo, branch `main`)
- **Stack:** Astro 7 (static output only, no SSR/adapters), Tailwind CSS v4 (`@tailwindcss/vite`) + `@tailwindcss/typography`, TypeScript strict, `@astrojs/rss`, `@astrojs/sitemap`
- **History:** replaced a 2020 Nuxt 2/Vuetify/Firebase site (GitLab, retired) and a 2016–2019 hand-made site. The latter is kept as-is in `public/OldPage/` (served at `/OldPage/`, excluded from sitemap and `tsconfig`) and in git tag `legacy-2019-site`.

## Commands

```sh
npm install
npm run dev       # dev server, http://localhost:4321 (agents: `npx astro dev --background`)
npm run check     # astro check: types + content schema (must be 0 errors/warnings/hints)
npm run build     # static build into ./dist
npm run preview   # serve ./dist
```

Manage a background dev server with `astro dev stop`, `astro dev status`, `astro dev logs`.
Validate changes with `npm run check && npm run build`. There is no test suite.

## Architecture

```
src/
  content.config.ts        # `blog` collection (glob loader), schema validates tags against CATEGORIES
  content/blog/<lang>/     # Markdown posts; id = "<lang>/<slug>"
  data/site.ts             # SITE, SOCIALS, TIMELINE (About), PROJECTS, CATEGORIES: all editable content
  i18n/ui.ts               # UI strings per language (en, es); add keys to BOTH languages
  i18n/utils.ts            # useTranslations, localizePath, stripLang, otherLang, formatDate
  lib/blog.ts              # getPosts(lang), postSlug, postLang, hasTranslation, getCategoryCounts
  lib/rss.ts               # blogFeed(context, lang)
  layouts/BaseLayout.astro # <head>/SEO/hreflang/theme script, Header, Footer
  components/              # Header, Footer, PostCard, TagList, CategoryFilter, Timeline, SocialIcon
  views/                   # Real page implementations, each takes a `lang` prop
  pages/                   # Thin per-language route wrappers that render a view
    index.astro, about.astro, projects.astro, blog/index.astro, blog/[slug].astro,
    blog/tags/[tag].astro, rss.xml.ts, 404.astro
    es/...                 # Same routes for Spanish
```

## Conventions

- **i18n:** Astro i18n routing with `defaultLocale: 'en'`, `prefixDefaultLocale: false` → English at `/`, Spanish at `/es/`.
  Every page must exist in both languages: put logic/markup in `src/views/`, then add a wrapper in `src/pages/` **and** `src/pages/es/`.
  Never hardcode user-facing text; add it to `src/i18n/ui.ts` (both `en` and `es`) or as a `{ en, es }` object in `src/data/site.ts`.
  Build internal links with `localizePath(lang, '/path/')` (trailing slash).
- **Blog posts:** `src/content/blog/<en|es>/<slug>.md` with frontmatter `title`, `description`, `pubDate`, optional `updatedDate`, `tags`, `draft` (drafts show only in dev).
  A translation uses the **same file name** in the other language folder; pages then link to each other (hreflang + "Also available in").
- **Categories:** post `tags` must be keys of `CATEGORIES` in `src/data/site.ts` (`software-engineering`, `videogames`, `sports`, `books`); unknown tags fail the build on purpose.
  Each key is a URL slug (`/blog/tags/<key>/`) with EN/ES labels. Tag pages are generated only for categories that have posts in that language.
- **BaseLayout `alternatePath`:** omit it when the other language has the same path; pass `null` when no translation exists, plus `fallbackPath` for the language switcher.
- **Styling:** Tailwind utility classes only. Theme tokens (`brand-*`, `accent-*`) live in `src/styles/global.css`. Dark mode is class-based (`dark:`), dark by default, toggled in the header and saved in `localStorage.theme`.
- **Projects page:** shows an empty state until `PROJECTS` in `src/data/site.ts` has entries (`type: 'utility' | 'game'`, localized `description`, `repo`, optional `demo`, `tags`).
- Keep the site static and dependency-light: no UI frameworks or client-side JS beyond small inline scripts.
- Commits use Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).

## Deployment

- `.github/workflows/deploy.yml` (`withastro/action@v6` → `actions/deploy-pages@v5`) runs on every push to `main`. The Pages source is set to **GitHub Actions**.
- Custom domain `eddyarellanes.dev` is configured in the repo's Pages settings via API, not with a `CNAME` file (Actions deploys ignore it). `site` in `astro.config.mjs` must stay `https://eddyarellanes.dev`.
- **DNS** (registrar: Squarespace Domains, formerly Google Domains):
  - Apex `@`: `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `www`: `CNAME` → `eddyarellanes.github.io`
  - `CAA` allows `letsencrypt.org`
  - Old Google App Engine records (`216.239.3x.21` `A` records, `2001:4860:4802:3x::15` `AAAA` records, `www` → `ghs.googlehosted.com`) were removed on 2026-10-31. Never re-add them: they blocked the HTTPS certificate.
  - `.dev` is on the HSTS preload list, so the site only works over HTTPS.

## Status and next steps (as of 2026-10-31)

- [ ] **HTTPS:** waiting on GitHub's Let's Encrypt certificate (old `AAAA` records had a 4h TTL). Check it with
      `gh api repos/EddyArellanes/eddyarellanes.github.io/pages --jq '.https_certificate.state'`.
      Once it's `approved`, run `gh api -X PUT repos/EddyArellanes/eddyarellanes.github.io/pages -F https_enforced=true`.
      If it's still missing after about 24h, remove and re-add the custom domain (Settings → Pages).
- [ ] Optional: add GitHub's `AAAA` records for `@` (`2606:50c0:8000::153` … `2606:50c0:8003::153`).
- [ ] Optional: delete the leftover `cloudrun` `CNAME` (→ `ghs.googlehosted.com`) at the registrar; it's unused.
- [ ] Optional: verify the domain under GitHub account Settings → Pages (prevents domain takeover).
- [ ] Write new blog posts (EN + ES).
- [ ] Add public projects (utilities and games) to `PROJECTS` as they're published.
- Ideas: per-post OG images, reading time, a "Now" page, giscus comments.

## Astro documentation

Full docs: https://docs.astro.build. Consult before working on related tasks:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling / Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
