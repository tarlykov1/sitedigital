# Nova Atlas Technologies — Demo Corporate Website

Production-style demo website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn-style UI components, Framer Motion, Lucide, react-hook-form, and zod.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` — all routes/pages (home, about, services, development, hardware, contact, privacy, 404)
- `components/` — reusable UI and section components
- `data/site-content.ts` — centralized editable demo content (texts, menus, cards, contacts, stats)
- `lib/utils.ts` — utility helpers
- `public/favicon.svg` — placeholder favicon

## Where to edit content

- Main company/hero/menu/stats/services/programs/offices: `data/site-content.ts`
- Per-page composition and extra sections: route files in `app/**/page.tsx`

## Branding and colors

- Core palette and gradients: `tailwind.config.ts`
- Global utility styles: `app/globals.css`
- Header/footer branding text: `components/site-header.tsx`, `components/site-footer.tsx`

## Notes

- Contact form is demo-only (client-side validation + mock submit).
- Privacy policy is explicitly sample content; replace with legal-approved policy before production.
