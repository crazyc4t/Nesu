# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Hugo static site for Nesu Facility Services (nesu.ca), a Vancouver-area facility services company (janitorial, access control, intercoms, CCTV, locksmithing, glass installation/repair). It uses the `hugo-cohub` theme as a git submodule and is deployed to GitHub Pages.

## Commands

- `git submodule update --init --recursive` — required after a fresh clone; `themes/hugo-cohub` is a submodule and the repo has no vendored fallback for it.
- `hugo server -D` — run the local dev server with drafts (live reload).
- `hugo --gc --minify` — production build, matching what CI runs. Output goes to `public/`.
- No JS package manager is in use (no `package.json`); there is no lint/test suite in this repo.

CI (`.github/workflows/hugo.yaml`) builds with Hugo extended `0.142.0` + Dart Sass and deploys `public/` to GitHub Pages via `actions/deploy-pages` on every push to `main`. If you bump Hugo locally, keep behavior compatible with `0.142.0` since that's what CI actually builds with (a locally installed newer Hugo may not match).

## Architecture

- **Theme lives entirely in the submodule.** There are no local `layouts/` or `assets/` overrides in this repo — all templates/partials come from `themes/hugo-cohub`. To change page structure/HTML, that theme (a separate repo: `crazyc4t/hugo-cohub`) is what needs editing, not this repo.
- **Site copy and homepage sections are data-driven.** Most homepage content (hero, services, feedback, testimonials, FAQ, CTA, pricing, clients, gallery, investors, blog teaser section) lives in `data/*.yml`, each with an `enable: true/false` flag the theme reads to show/hide that section. For copy changes or toggling sections on/off, edit the relevant file in `data/` rather than touching templates.
- **Real pages** (About, Blog index, Contact, Privacy, Terms) are under `content/<section>/_index.md` as Hugo page bundles with YAML front matter + Markdown body.
- **Site-wide config** (menus, contact info/address/hours, theme params like `fabFormURL` for the contact form, social links) is in `hugo.toml`. Many optional params (map, social icons) are present but commented out.
- **`public/` is committed to git**, not gitignored — it's Hugo's build output. Don't hand-edit files there; regenerate with `hugo --gc --minify` and let both `static/` (source) and `public/` (build output) get committed together, since they're expected to mirror each other for images/assets.
- Static assets (images, fonts, vendor JS/CSS like Bootstrap, Slick, GSAP, AOS, Font Awesome) live under `static/` and are copied verbatim into `public/` on build.
