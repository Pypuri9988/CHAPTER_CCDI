# CHAPTER CCDI — Certificate Verification

Official QR verification page for **CHAPTER CCDI** internship completion certificates.

## Live website

Use **only** this URL:

**https://pypuri9988.github.io/CHAPTER_CCDI/**

Do **not** use `www.chapterccdiinternship.com` — that domain is not purchased and will not work.

## Fix GitHub Pages settings (required once)

Your site must **not** use a custom domain and must **not** deploy from repo root.

1. Open **Settings → Pages** in GitHub
2. Under **Build and deployment**:
   - **Recommended:** set **Source** to **GitHub Actions**
   - **Or:** set **Source** to **Deploy from a branch** → Branch `main` → Folder **`/docs`** (NOT `/root`)
3. Leave **Custom domain** empty
4. Save and wait 2–5 minutes

If the browser still opens the old custom domain, clear cache or try an incognito/private window.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build for GitHub Pages branch deploy (`docs/` folder):

```bash
npm run build:pages
```

## Deploy (GitHub Pages)

Push to `main`. The GitHub Actions workflow builds and deploys automatically when **Source** is set to **GitHub Actions**.

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
npm run build:pages
```
