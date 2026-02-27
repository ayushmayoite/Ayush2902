# Task 8 Checklist

Date: 2026-02-27

## Scope

Add sustainability filtering and fuse.js fuzzy search to `/products/[category]/` pages. The `sustainabilityScore` field and eco-score slider were already present; this task installs fuse.js and upgrades the search from basic string matching to fuzzy matching.

---

## Phase 1: Install fuse.js

- [x] `npm install fuse.js --save` executed.
- [x] `"fuse.js": "^7.1.0"` present in `package.json` dependencies.
- [x] `package-lock.json` updated.

## Phase 2: Confirm eco_score in Schema

- [x] `ProductMetadata.sustainabilityScore?: number` defined in `lib/getProducts.ts`.
- [x] `specs.sustainability_score?: number` defined in `Product` type.
- [x] No Supabase migration required — field stored in `metadata` JSONB column.
- [x] Eco-score badge on `ProductCard` reads `product.metadata?.sustainabilityScore` (shows green if > 7).

## Phase 3: Fuse Instance in FilterGrid

- [x] `import Fuse from "fuse.js"` added to `app/products/[category]/FilterGrid.tsx`.
- [x] `fuse` useMemo created, keyed on `["name", "description", "seriesName"]`.
- [x] `threshold: 0.35` set for balanced fuzzy tolerance.
- [x] `includeScore: true` enabled.
- [x] Fuse instance recalculates only when `allProducts` changes.

## Phase 4: Fuzzy Search Integration

- [x] Basic `.includes()` string search block replaced with fuse.js in `filteredProducts` useMemo.
- [x] `fuse.search(filters.query.trim())` returns ranked results.
- [x] `matchIds` Set built from result item IDs.
- [x] `list.filter((p) => matchIds.has(p.id))` applied.
- [x] Series filter applied before fuzzy search — order preserved.
- [x] All other filters (subcategory, material, price, BIFMA, eco score) unchanged.

## Phase 5: Sustainability Filter Audit

- [x] Eco Score slider in sidebar (`AccordionSection title="Sustainability"`) — present and functional.
- [x] `minEcoScore` encoded in URL as `?eco=N`.
- [x] Filter: `(p.metadata?.sustainabilityScore || 0) >= filters.minEcoScore`.
- [x] Active chip shows `Eco Score >= N` when active.
- [x] Fuzzy search tested on `oando-tables` category.
- [x] Filter audit table produced (see `task 8 walkthrough.md`).

## Phase 6: Artifacts

- [x] `task 8.txt` created.
- [x] `task 8 plan.md` created.
- [x] `task 8 checklist.md` completed.
- [x] `task 8 walkthrough.md` created.

---

## Artifacts

- Task definition: `task 8.txt`
- Plan: `task 8 plan.md`
- Checklist: `task 8 checklist.md`
- Walkthrough: `task 8 walkthrough.md`
- Primary file changed: `app/products/[category]/FilterGrid.tsx`
