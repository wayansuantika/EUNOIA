# EUNOIA VITS Website

Modern Next.js 14 marketing/e-commerce site for EUNOIA VITS functional products.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Features

- Product-focused landing pages
- Dynamic product route: `/[slug]` with static generation
- SEO routes:
  - `/sitemap.xml`
  - `/robots.txt`
- WhatsApp conversion tracking hooks (`data-track-whatsapp`)

## Project Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm start
```

## Environment Variables

Copy `.env.example` into `.env.local` for local development:

```bash
cp .env.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Variables:

- `NEXT_PUBLIC_SITE_URL` (required for canonical metadata, sitemap, robots)
- `NEXT_PUBLIC_GA_ID` (optional)
- `NEXT_PUBLIC_GTM_ID` (optional)
- `NEXT_PUBLIC_META_PIXEL_ID` (optional)

## Push to GitHub

```bash
git add .
git commit -m "Prepare production deployment"
git push origin <your-branch>
```

---

## Deploy on Hostinger

Hostinger has different products. Use the flow that matches your plan.

### Option A: Hostinger VPS / Cloud (Node.js runtime available) ✅ Recommended

Use this when you can run Node processes on the server.

1. SSH into server and install Node.js LTS.
2. Clone your GitHub repo.
3. Create `.env.production` and set `NEXT_PUBLIC_SITE_URL` to your live domain.
4. Install and build:

```bash
npm ci
npm run build
```

5. Start app:

```bash
npm run start
```

6. (Recommended) Run with PM2:

```bash
npm i -g pm2
pm2 start npm --name eunoia-vits -- start
pm2 save
pm2 startup
```

7. Put Nginx in front of app (reverse proxy to `localhost:3000`).
8. Point domain DNS to the server and enable SSL.

### Option B: Hostinger Shared Hosting (no persistent Node process)

If your plan does not allow running `next start`, deploy as static export.

1. Update `next.config.mjs` with:

```js
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};
```

2. Build static output:

```bash
npm run build
```

3. Upload the generated `out/` folder contents to `public_html/`.

> Note: static export removes Node runtime behavior. If you need full Next.js runtime features, use Option A.

---

## Pre-Launch Checklist

- `npm run lint` passes
- `npm run build` passes
- `NEXT_PUBLIC_SITE_URL` matches live domain
- Domain + SSL active
- `/sitemap.xml` and `/robots.txt` accessible on production

## License

Private project.
