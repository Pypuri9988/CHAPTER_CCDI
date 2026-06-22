# CHAPTER CCDI — Certificate Verification

Official QR verification page for **CHAPTER CCDI** internship completion certificates.

## Live website

**https://pypuri9988.github.io/CHAPTER_CCDI/**

When someone scans the QR code on a certificate, they are taken to this URL.

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

1. Push this repo to GitHub (`main` branch).
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Make sure **Custom domain** is empty (no custom domain configured).
5. Push to `main` — the workflow builds and deploys automatically.

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
