# index.html → Next.js Conversion Template

Playbook for converting a single-file `index.html` (inline `<style>` + `<script>`) into a
maintainable Next.js App Router project. Worked example: `hopkinstalentgroup/`.

## Target structure

```
<project>/
├── app/
│   ├── layout.tsx        # metadata, viewport, fonts
│   ├── page.tsx          # composes sections inside <main>
│   └── globals.css       # the original <style> block, formatted
├── components/           # one component per section of the HTML
│   ├── Brand.tsx         # repeated markup (header + footer)
│   ├── SiteHeader.tsx
│   ├── SectionHeading.tsx  # repeated kicker/h2/p pattern
│   ├── SmartImage.tsx    # client: missing-file placeholder
│   └── SiteFooter.tsx
├── data/site.ts          # ALL copy, links, images, form options
├── public/images/        # every image the page references
├── index.html            # keep the original as reference (not served)
├── next.config.ts
├── tsconfig.json         # paths: { "@/*": ["./*"] }
├── eslint.config.mjs
└── package.json
```

**Rule of thumb:** components render structure only — every piece of copy, URL and list
item comes from `data/site.ts`, so content edits never touch JSX.

## 1. Scaffold

```bash
npm init -y
npm i next@latest react@latest react-dom@latest
npm i -D typescript @types/react @types/node @types/react-dom eslint eslint-config-next prettier
```

`package.json` scripts:

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write \"app/**\" \"components/**\" \"data/**\""
}
```

`eslint.config.mjs` (Next 16 — `next lint` is removed, use the ESLint CLI):

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
```

Read `node_modules/next/dist/docs/` before writing code — the installed version may differ
from training data.

## 2. Extract the CSS verbatim

Do **not** retype the CSS. Copy the `<style>` block byte-for-byte, then format:

```powershell
$html = Get-Content index.html -Raw
$css  = [regex]::Match($html, '(?s)<style>(.*?)</style>').Groups[1].Value
[System.IO.File]::WriteAllText("$PWD\app\globals.css", $css, [System.Text.UTF8Encoding]::new($false))
npx prettier --write app/globals.css
```

Then, if you switch fonts to `next/font` (step 3), replace the literal families with the
CSS variables:

```powershell
$css = Get-Content app/globals.css -Raw
$css = $css.Replace('"Barlow Condensed",sans-serif', 'var(--font-barlow)')
            .Replace('"DM Sans",sans-serif', 'var(--font-dm)')
            .Replace('Manrope,sans-serif', 'var(--font-manrope)')
[System.IO.File]::WriteAllText("$PWD\app\globals.css", $css, [System.Text.UTF8Encoding]::new($false))
```

Keep the original class names exactly as-is — it makes the visual diff in step 8 trivial.

## 3. Fonts and metadata → `app/layout.tsx`

Map the Google Fonts `<link>` to `next/font/google` (self-hosted, no build-time CDN calls
at runtime, removes the `no-page-custom-font` lint warning):

```tsx
import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, DM_Sans, Manrope } from 'next/font/google';

const barlow = Barlow_Condensed({ weight: ['500','600','700','800','900'], subsets: ['latin'], display: 'swap', variable: '--font-barlow' });
const dm     = DM_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-dm' });   // variable fonts: omit `weight`
const manrope= Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' });
```

Static families (Barlow Condensed) need an explicit `weight` array; variable families must
not have one.

| Original `<head>` line | Next.js |
|---|---|
| `<title>` | `export const metadata: Metadata = { title, description }` |
| `<meta name="description">` | same `metadata` object |
| `<meta name="theme-color">` | `export const viewport: Viewport = { themeColor }` |
| `<meta charset>` / `viewport` | automatic |
| Google Fonts `<link>` | `next/font/google` + `className={...variable}` on `<html>` |

## 4. Component split

One component per top-level element in `<body>`; `app/page.tsx` only composes:

```tsx
<>
  <SiteHeader />
  <main>
    <Hero /> <TrustBar /> <ServicesSection /> <ApproachSection />
    <TalentSection /> <GallerySection /> <QuoteSection /> <ContactSection />
  </main>
  <SiteFooter />
</>
```

Conventions:

- Repeated patterns (`kicker` + `h2` + optional `p`, brand lockup, cards) → shared component.
- Headings with `<br>` → `titleLines: string[]` in data, render with `<br />` between items.
- `<a href="#section">` stays an `<a>` (same-page anchors — do not use `next/link`).
- Section `id`s must survive, or in-page navigation and `scroll-padding-top` break.
- Inline `<script>` (form handlers, `getFullYear`, counters) → `'use client'` component with
  `useState`/`onSubmit`; put any configurable value (e.g. recipient email) in `data/site.ts`.

## 5. Images → `public/images`

- Remote/local `<img>` srcs become `/images/<file>`; files live in `public/images/`.
- Use `components/SmartImage.tsx` instead of a bare `<img>` for anything that may be absent:

```tsx
'use client';
import { useState } from 'react';

export default function SmartImage({ src, alt }: { src: string; alt: string }) {
  const [missing, setMissing] = useState(false);
  if (missing) return null;
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.parentElement?.classList.add('image-missing');
        setMissing(true);
      }}
    />
  );
}
```

- Pair it with placeholder CSS so a missing file shows a box instead of a broken icon:

```css
.image-missing { background: #182b40; border: 1px dashed rgba(208, 173, 104, 0.55); }
.gallery-item.image-missing { background: #e0ddd6; border: 1px dashed #b8b1a5; }
```

- Raw `<img>` is intentional (no `next/image`): the original CSS targets `img[src=...]` and
  `object-fit`/`filter` rules directly. `eslint.config.mjs` therefore sets
  `'@next/next/no-img-element': 'off'` with a comment.
- Downsize stock photos before committing — anything over ~1 MB is too big for a 245–570px
  container.

## 6. Optional: keep the original file

Leave `index.html` at the project root as the reference source for a pixel-diff. It is not
served (only `public/` is). Delete it once the conversion is verified.

## 7. Verify before committing

```bash
npm run build   # must be clean (also runs TypeScript)
npm run lint    # 0 errors; investigate any new warning
```

Compare rendered markup against the original to prove nothing was dropped — class sequence
must match exactly (excluding `image-missing`/conditional nodes):

```powershell
$p = Start-Process cmd.exe -ArgumentList '/c npm start > "$env:TEMP\rendered.log" 2>&1' -PassThru -WindowStyle Hidden
Start-Sleep 9
$r = Invoke-WebRequest http://localhost:3000 -UseBasicParsing
[System.IO.File]::WriteAllText("$env:TEMP\rendered.html", $r.Content, [System.Text.UTF8Encoding]::new($false))
taskkill /PID $p.Id /T /F

function Get-Cls($h) { [regex]::Matches($h, 'class="([^"]*)"') | ForEach-Object { $_.Groups[1].Value } }
$a = @(Get-Cls (Get-Content index.html -Raw))
$b = @(Get-Cls (Get-Content $env:TEMP\rendered.html -Raw))
"identical: " + (($a -join '|') -eq ($b -join '|'))
```

Also spot-check:

- every `/images/...` referenced in `data/site.ts` returns 200 (`Invoke-WebRequest -Method Head`)
- missing images return 404 **and** render the placeholder box in the browser
- sticky header, in-page anchors and the form submit path still behave

## 8. Git

```bash
git init && git branch -m main
git add -A && git commit -m "Convert index.html to Next.js component-based project"
git remote add origin <repo-url> && git push -u origin main
```

`.gitignore` must cover `/node_modules`, `/.next`, `next-env.d.ts`, `*.tsbuildinfo`, `.env*`.
