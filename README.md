# TH Portfolio

Personal portfolio site matching the provided mock. Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Files created

| Path | Purpose |
|------|--------|
| `app/page.tsx` | Main page: composes Hero, WorkLogoRow, Projects section |
| `app/globals.css` | Tailwind imports + base body styles |
| `app/layout.tsx` | Root layout, metadata |
| `components/Hero.tsx` | Hero: illustration card (left) + name/title/location, email, LinkedIn (right) |
| `components/SectionLabel.tsx` | Lowercase section heading (e.g. "work experience") |
| `components/WorkLogoRow.tsx` | Work experience: label + row of 4 company logos with links |
| `components/ProjectCard.tsx` | Single project card: thumbnail, title, URL, CTA, italic description |
| `public/images/` | Image assets (hero, logos, project thumbnails) |
| `public/images/IMAGES.md` | List of required image filenames and what to swap |

Config: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `next-env.d.ts`.

**Typography:** The site uses a system sans-serif stack. To use Inter instead, add `import { Inter } from "next/font/google"` in `app/layout.tsx`, set `variable: "--font-inter"`, add `className={inter.variable}` to `<html>`, and set `fontFamily.sans` to `["var(--font-inter)", ...]` in `tailwind.config.ts`. Build requires network access to fetch the font.

---

## How to run locally

```bash
cd "Documents/Coding Projects/TH Portfolio"
npm install   # if you haven’t already
npm run dev
```

Open **http://localhost:8000**.

**Port:** The dev server is fixed to port **8000** in `scripts/run-dev.js` (constant `PORT = 8000`). Keep this port to avoid conflicts; don’t change it unless you need to.

- **Production build:** `npm run build` then `npm start`

---

## Where to swap images

All images live in **`public/images/`**. Replace these files to change assets (keep the same filenames, or update the `src` in the components):

| File | Used in |
|------|--------|
| `hero.png` | `components/Hero.tsx` — large rounded illustration card |
| `linkedin.png` | `components/Hero.tsx` — LinkedIn icon button |
| `stripe-logo.png` | `components/WorkLogoRow.tsx` |
| `appdynamics-logo.png` | `components/WorkLogoRow.tsx` |
| `airbnb-logo.png` | `components/WorkLogoRow.tsx` |
| `tapestry-logo.png` | `components/WorkLogoRow.tsx` |
| `wweekly.png` | `app/page.tsx` → ProjectCard (WWEEKLY) |
| `wilbur.png` | `app/page.tsx` → ProjectCard (Wilbur) |
| `stripe-connect.png` | `app/page.tsx` → ProjectCard (Stripe Connect) |

See `public/images/IMAGES.md` for a short description of each asset.

---

## Where to edit text

| Content | File | What to change |
|---------|------|----------------|
| Name, title, location | `components/Hero.tsx` | The three stacked headings and any alt text |
| Email | `components/Hero.tsx` | `href` and link text (`tiffjenh@gmail.com`) |
| LinkedIn URL | `components/Hero.tsx` | `href` on the LinkedIn `<a>` (currently `https://www.linkedin.com/in/tiffanyjenhuang/`) |
| Section labels | `app/page.tsx` + `components/WorkLogoRow.tsx` | “work experience” in WorkLogoRow; “projects & case studies” in page.tsx (SectionLabel) |
| Company logo links | `components/WorkLogoRow.tsx` | `LOGOS` array: `href` (and optionally `name`, `src`) |
| Project titles, URLs, CTAs, descriptions | `app/page.tsx` | `PROJECTS` array: `title`, `urlText`, `urlHref`, `ctaText`, `ctaHref`, `cardHref`, `description`, `imageSrc`, `imageAlt` |

---

## Deploy

Build and run as a Node app, or export and host as static files:

- **Vercel:** Connect the repo or run `vercel`.
- **Netlify:** Connect the repo and use build command `npm run build`, publish directory `.next` (or use the Next runtime).
- **Static export:** To generate a static site, add `output: 'export'` in `next.config.ts` and run `npm run build`; output will be in `out/`.
