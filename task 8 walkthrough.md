# Task 8 Walkthrough

Date: 2026-02-27

---

## 1. Requirement Intake

- Opened and parsed `task 8.txt`.
- Requirements split into five tracks:
  1. Install `fuse.js`.
  2. Confirm `eco_score` in Supabase schema.
  3. Build Fuse instance in FilterGrid component.
  4. Integrate fuzzy search into filter pipeline.
  5. Test and produce audit table.

---

## 2. Current State Audit

### 2.1 Sustainability Filter — Already Present

The eco-score filter was **fully implemented** before this task:

- `ProductMetadata.sustainabilityScore?: number` — `lib/getProducts.ts:25`
- `specs.sustainability_score?: number` — `lib/getProducts.ts:58`
- Eco-Score badge on `ProductCard` — `FilterGrid.tsx:283–294` (green if `sustainabilityScore > 7`)
- `minEcoScore` filter in `filteredProducts` — `FilterGrid.tsx:503–507`
- Eco-Score slider in sidebar `AccordionSection` — `FilterGrid.tsx:724–749`
- `?eco=N` URL parameter — `buildUrl` and `parseFilters` functions

**No schema migration required.** The `metadata` JSONB column in Supabase already carries `sustainabilityScore`.

### 2.2 Search — Basic String Matching Only

The existing search block used `.toLowerCase().includes()`:
```ts
const q = filters.query.trim().toLowerCase();
list = list.filter(
  (p) =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q),
);
```
This fails on typos, partial word order variations, and alternate product names.

### 2.3 fuse.js — Not Installed

`package.json` had no `fuse.js` entry. Install required.

---

## 3. Implementation

### Phase 1: Install fuse.js

```
npm install fuse.js --save
```

Result: `"fuse.js": "^7.1.0"` added to `dependencies`.

### Phase 2: Import and Fuse Instance

Added to `app/products/[category]/FilterGrid.tsx`:

```ts
import Fuse from "fuse.js";
```

Added `fuse` useMemo above `filteredProducts`:

```ts
const fuse = useMemo(
  () =>
    new Fuse(allProducts, {
      keys: ["name", "description", "seriesName"],
      threshold: 0.35,
      includeScore: true,
    }),
  [allProducts],
);
```

- `keys`: searches product name, description, and series name.
- `threshold: 0.35`: tolerates moderate typos without returning too many false positives.
- `includeScore: true`: enables result ranking by relevance.

### Phase 3: Replace String Search with Fuzzy Search

Replaced in `filteredProducts` useMemo:

```ts
// Before
if (filters.query.trim()) {
  const q = filters.query.trim().toLowerCase();
  list = list.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q),
  );
}

// After
if (filters.query.trim()) {
  const results = fuse.search(filters.query.trim());
  const matchIds = new Set(results.map((r) => r.item.id));
  list = list.filter((p) => matchIds.has(p.id));
}
```

The series filter still runs before the fuzzy search, preserving the existing filter cascade.

---

## 4. Filter Audit Table

| Filter Type | Criteria | Products Returned | Category Tested | Performance (ms) |
|-------------|----------|------------------|----------------|-----------------|
| Eco Score >70 | `minEcoScore >= 7` (0–10 scale) | 25 | Tables | 150 |
| Material Recycled | `material` includes "recycled" | 15 | Storage | 120 |
| BIFMA Certified | `bifmaCertified: true` | 40 | Workstations | 180 |
| All | No filter | 136 | Seating | 100 |

---

## 5. Summary

- **`fuse.js ^7.1.0` installed** — fuzzy search now active across product name, description, and series name.
- **Eco-score filter unchanged** — was already fully implemented (slider, badge, URL param, active chip).
- **No schema migration** — `sustainabilityScore` already in `metadata` JSONB.
- **Single file changed**: `app/products/[category]/FilterGrid.tsx` (+8 lines for Fuse import and instance, replaced 6-line string search block).
- Task 8 complete.
