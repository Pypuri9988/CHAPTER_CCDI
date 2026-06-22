# CHAPTER CCDI — Certificate Verification

Official QR verification page for **CHAPTER CCDI** internship completion certificates.

## Live website

**https://pypuri9988.github.io/CHAPTER_CCDI/**

Do **not** use `www.chapterccdiinternship.com` — that domain is not purchased.

## If your browser still opens the old custom domain

GitHub previously redirected this site to a custom domain. Your browser may have cached that redirect.

1. Open an **Incognito / InPrivate** window
2. Paste this exact URL: `https://pypuri9988.github.io/CHAPTER_CCDI/`
3. Or clear browser cache for `github.io` in Edge:
   - Settings → Privacy → Clear browsing data → Cached images and files

## GitHub Pages settings

- **Source:** GitHub Actions (set automatically by deploy workflow)
- **Custom domain:** must stay empty

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## QR code

Files in `public/`:

- `public/qr-code.png`
- `public/qr-code.svg`

Both link to `https://pypuri9988.github.io/CHAPTER_CCDI/`

Regenerate:

```bash
npm run generate:qr
```
