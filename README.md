# FacultyGuard Website

Static, single-page marketing site for Faculty Guard. GitHub- and Netlify-ready.

## Deploy
1. Push the contents of this folder to the repository root.
2. Connect the repository to the existing FacultyGuard Netlify site.
3. Netlify will read `netlify.toml`; no build command is required.
4. Confirm the production domain and update canonical/OG URLs if the domain differs from `facultyguard.com`.

## Structure
- `index.html` — Single-page site (hero, problem, what's included, product tiers, inside the starter system, reuse, FAQ, founder, closing CTA)
- `404.html` — Not-found page
- `netlify.toml` — Publish directory and security headers
- `_redirects` — Canonical `/index.html` redirect and SPA-style fallback
- `robots.txt`, `sitemap.xml` — SEO
- `faculty-guard-*.png` — Brand icons and social-share logo

## Version
v2.0.0 — "Teach Without Apology" single-page redesign, July 2026.
