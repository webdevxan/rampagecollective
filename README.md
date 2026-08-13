# Rampage Collective

Rampage Collective is the global streetwear brand front end for the sibling label to Dynasty100. This repo currently contains the initial frontend shell and the database schema foundation for a separate Supabase project.

## Stack

- Vite
- React
- Tailwind CSS
- Supabase SQL schema

## Current status

This project is intentionally in placeholder/no-real-data state for visual review and database foundation work.

### Frontend includes

- monochrome brand palette
- gothic display typography for the wordmark and hero moments
- sans-serif UI for functional elements
- hero section with brand nav and CTA
- collection strip
- footer with Dynasty100 legal attribution note

### Database includes

- `products`
- `product_variants`
- `profiles`
- auth trigger to auto-create a profile row on new account signup
- row-level security policies for active public catalog access and admin-managed writes

## Project structure

```text
.
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── supabase/
│   ├── migrations/
│   └── schema.sql
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

## Local development

```bash
npm install
npm run dev
```

Then open the local Vite URL in the browser.

## Build verification

```bash
npm run build
npm run lint
```

## Notes

- This repo does not include Supabase connection credentials or environment variables yet.
- The schema is intentionally fulfillment-agnostic and does not include POD or supplier-specific fields.
- The app does not hardcode any `dynasty100.online` root-domain assumptions.
