# Task 8 Plan

Date: 2026-02-27

## Objective

Add sustainability-based filtering and fuzzy search to the `/products/[category]/` pages using `fuse.js`. The eco score (`sustainabilityScore`) field already exists in the `ProductMetadata` schema and is read from Supabase. The task upgrades the existing basic string search to fuse.js fuzzy matching, and surfaces the already-present eco-score range filter visibly in the sidebar.

---

## Current State Audit

| Feature | Status |
|---------|--------|
| `sustainabilityScore` in `ProductMetadata` type | ✅ Present (`lib/getProducts.ts`) |
| `minEcoScore` filter in `FilterGrid.tsx` | ✅ Present (range slider, 0–10 scale) |
| Eco-Score badge on product cards | ✅ Present (green if > 7) |
| `eco` query param encoded in URL | ✅ Present |
| Fuzzy search (fuse.js) | ❌ Missing — basic `.includes()` only |
| `fuse.js` package | ❌ Not installed |

---

## Phases

### Phase 1: Install fuse.js

- `npm install fuse.js --save` → adds `fuse.js ^7.1.0` to `dependencies`.

### Phase 2: Confirm eco_score in Schema

- `ProductMetadata.sustainabilityScore` already defined in `lib/getProducts.ts:25`.
- `specs.sustainability_score` also present on the `Product` type.
- Supabase `metadata` JSONB column stores this. No migration needed.

### Phase 3: Build Fuse Instance in FilterGrid

- Import `Fuse` from `"fuse.js"` in `app/products/[category]/FilterGrid.tsx`.
- Create a `useMemo` Fuse instance keyed on `["name", "description", "seriesName"]` with `threshold: 0.35`.
- The Fuse instance rebuilds only when `allProducts` changes.

### Phase 4: Integrate Fuzzy Search with Filter Pipeline

- In `filteredProducts` useMemo, replace the basic `.includes()` string search block with fuse.js:
  ```ts
  const results = fuse.search(filters.query.trim());
  const matchIds = new Set(results.map((r) => r.item.id));
  list = list.filter((p) => matchIds.has(p.id));
  ```
- All other filters (series, subcategory, material, eco score, BIFMA, etc.) remain unchanged.

### Phase 5: Test and Audit

- Smoke-test fuzzy search on `oando-tables` category.
- Verify eco score slider filters correctly.
- Produce audit table.
- Git commit: `feat: sustainability filters`.

---

## Files Changed

| File | Change |
|------|--------|
| `package.json` | Add `fuse.js ^7.1.0` to dependencies |
| `package-lock.json` | Updated lockfile |
| `app/products/[category]/FilterGrid.tsx` | Import Fuse, add `fuse` useMemo, replace string search with fuzzy search |
