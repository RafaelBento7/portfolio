# portfolio

My personal portfolio website — a fast, responsive single-page site built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Single-column layout with a sticky top nav (hamburger menu on mobile), a hero
with a résumé download, and these sections: About · Education ·
Skills (Languages / Databases / Others-Tools) · Career · Projects ·
Recommendations · Contact.

## Getting started

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the static site into dist/
npm run preview  # preview the production build locally
```

## Editing the content

All the text on the site lives in a single file:

```text
src/data/content.ts
```

Replace the lorem ipsum there (summary, about, education, skills, career,
projects, recommendations, contact) with your real information — the layout and
styling read from this file, so you never have to touch the markup. Social and
project links currently point to `#`; update them too.

The contact button (and the email link beside it) opens the visitor's mail
client addressed to the email set in `profile.email`.

### Résumé

The "Download Resume" button (hero) and "Resume" (nav) link to
`profile.resumeUrl`, which defaults to `/resume.pdf`. A placeholder PDF lives at
`public/resume.pdf` — **replace it with your real CV** (keep the file name, or
change `resumeUrl`).

### Recommendations

You currently have one recommendation. Transcribe its text into the first object
of the `testimonials` array. If you also want to link the original signed PDF,
drop it in `public/` and set that object's `letterUrl` (e.g.
`"/recommendation.pdf"`) — a "View signed letter" link then appears on the card.
Add more objects to the array to show extra cards.

## Customising the look

- **Colours & fonts:** the palette and font tokens are defined at the top of
  `src/styles/global.css` (`@theme { ... }`). Change them there and the whole
  site updates.
- **Components:** each section is a small component under `src/components/`.

## Project structure

```text
src/
  data/content.ts      # all site copy — edit this
  styles/global.css    # design tokens + global styles
  layouts/Layout.astro # <html> shell, fonts, meta
  components/          # Nav, Hero, Section + one component per section
  pages/index.astro    # page assembly + client scripts (scroll-spy, reveal, spotlight)
public/
  favicon.svg
  resume.pdf           # your CV (linked from the hero + nav)
  recommendation.pdf   # placeholder — replace with the signed letter
```

## Deploying to Netlify

The repo includes a `netlify.toml`, so deployment is zero-config:

1. Push this repo to GitHub.
2. In Netlify, **Add new site → Import from Git** and pick the repo.
3. Netlify reads `netlify.toml` (`npm run build` → publish `dist/`) and deploys.

After deploying, update the `site` URL in `astro.config.mjs` to your live domain.

## Note on the `vite` override

`package.json` pins `vite` via `overrides` so Astro 6 and `@tailwindcss/vite`
share a single Vite version (otherwise the Tailwind plugin pulls a newer,
Rolldown-based Vite that conflicts with Astro's and the build fails). Remove the
override once those versions line up on their own.
