import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    rules: {
      // Raw <img> is intentional: the original stylesheet targets img[src=...],
      // object-fit and filter rules directly (see HTML-TO-NEXTJS.md, step 5).
      '@next/next/no-img-element': 'off',
    },
  },
]);
