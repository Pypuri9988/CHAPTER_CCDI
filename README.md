# CHAPTER CCDI — Certificate Verification

Official QR verification page for **CHAPTER CCDI** internship completion certificates.

When someone scans the QR code on a certificate, they are taken to:

**https://pypuri9988.github.io/CHAPTER_CCDI/**

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` — the workflow builds and deploys automatically.

## QR code

The QR code files are in `public/`:

- `public/qr-code.png` — use this on printed certificates
- `public/qr-code.svg` — vector version for design tools

Both link to:

```
https://pypuri9988.github.io/CHAPTER_CCDI/
```

Regenerate anytime:

```bash
npm run generate:qr
```

## Custom domain (optional — not active yet)

The domain `www.chapterccdiinternship.com` is **not working** because:

1. It is **not registered / DNS is not configured** (`DNS_PROBE_FINISHED_NXDOMAIN`)
2. A `CNAME` file was added too early, which can redirect GitHub Pages away from the working URL

**Use this URL for now (works):**

```
https://pypuri9988.github.io/CHAPTER_CCDI/
```

### When you are ready for a custom domain

1. **Buy the domain** from GoDaddy, Namecheap, Cloudflare, etc.
2. In your domain provider DNS, add:

   | Type  | Name | Value                  |
   |-------|------|------------------------|
   | CNAME | www  | `pypuri9988.github.io` |

3. On GitHub: **Settings → Pages → Custom domain** → enter `www.chapterccdiinternship.com`
4. Create `public/CNAME` with that domain (so it deploys with the site)
5. Change `vite.config.js` → `base: '/'`
6. Regenerate QR code with the new URL

Until DNS is live, **do not** add the custom domain in GitHub Pages settings.
