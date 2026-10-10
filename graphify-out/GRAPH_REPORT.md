# Graph Report - 242abacofreight-nextjs  (2026-10-10)

## Corpus Check
- 22 files · ~7,828 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 115 nodes · 163 edges · 10 communities (7 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fe8ba390`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- compilerOptions
- scripts
- devDependencies
- site.ts
- index.html → Next.js Conversion Template
- include
- SiteHeader.tsx
- next.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Site` - 13 edges
3. `index.html → Next.js Conversion Template` - 10 edges
4. `SectionHeading()` - 7 edges
5. `scripts` - 7 edges
6. `ButtonLink()` - 6 edges
7. `include` - 6 edges
8. `lib` - 4 edges
9. `ContactForm()` - 3 edges
10. `Brand()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 2 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.19
Nodes (12): ButtonLink(), ButtonLinkProps, FamilySection(), GallerySection(), Hero(), ReviewsSection(), SectionHeading(), ServicesSection() (+4 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 2 - "scripts"
Cohesion: 0.11
Nodes (17): next, dependencies, next, react, react-dom, name, private, scripts (+9 more)

### Community 3 - "devDependencies"
Cohesion: 0.13
Nodes (15): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, prettier, @types/node, @types/react (+7 more)

### Community 4 - "site.ts"
Cohesion: 0.20
Nodes (6): metadata, ContactForm(), ContactSection(), ButtonData, ContactInfoRow, ReviewData

### Community 5 - "index.html → Next.js Conversion Template"
Cohesion: 0.18
Nodes (10): 1. Scaffold, 2. Extract the CSS verbatim, 3. Fonts and metadata → `app/layout.tsx`, 4. Component split, 5. Images → `public/images`, 6. Optional: keep the original file, 7. Verify before committing, 8. Git (+2 more)

### Community 6 - "include"
Cohesion: 0.22
Nodes (8): .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

## Knowledge Gaps
- **57 isolated node(s):** `metadata`, `ButtonLinkProps`, `ButtonData`, `ReviewData`, `ContactInfoRow` (+52 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 63 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **What connects `metadata`, `ButtonLinkProps`, `ButtonData` to the rest of the system?**
  _57 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._