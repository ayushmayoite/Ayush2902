# Task 10 Plan

Date: 2026-02-27

## Objective

Add AI-powered result ranking to the product filter system. A new `POST /api/filter` endpoint uses OpenAI (`gpt-4o-mini`) to rank products by sustainability, price, material, or ergonomic relevance. Fuse.js fuzzy search (installed in Task 8) is already active. The sort dropdown in `FilterGrid` gains four AI sort modes with a graceful deterministic fallback when no OpenAI key is present.

---

## Current State Audit

| Feature | Status |
|---------|--------|
| Fuse.js fuzzy search in FilterGrid | ✅ Active (Task 8) |
| `/api/filter` route | ❌ Missing |
| AI ranking via OpenAI | ❌ Missing |
| AI sort options in dropdown | ❌ Missing |
| `SortOption` type | `"az" \| "za" \| "newest"` only |

---

## Phases

### Phase 1: Create `/api/filter/route.ts`

- `POST` handler accepting `{ products, category, rankBy }`.
- `rankBy` values: `"sustainability"`, `"price"`, `"material"`, `"ergonomic"`.
- Each product payload: `id`, `name`, `description`, `sustainabilityScore`, `priceRange`, `material[]`, `bifmaCertified`, `isHeightAdjustable`, `hasHeadrest`.
- Limited to 40 products per request for token efficiency.

### Phase 2: AI Ranking with OpenAI

- Uses `gpt-4o-mini` with `response_format: { type: "json_object" }`.
- Returns `{ ids: ["id1", "id2", ...] }` — ranked product IDs.
- Prompt includes category context + per-product metadata line.
- Any IDs not returned by AI appended at end to ensure completeness.
- Graceful fallback if `OPENAI_API_KEY` absent or API fails.

### Phase 3: Deterministic Fallback Sort

| Mode | Fallback Logic |
|------|---------------|
| `sustainability` | Sort by `sustainabilityScore` desc |
| `price` | Sort by `priceRange` (budget < mid < premium < luxury) |
| `material` | Recycled material products first |
| `ergonomic` | BIFMA (3pts) + height-adj (2pts) + headrest (1pt) desc |

### Phase 4: FilterGrid UI Extensions

- Extend `SortOption` type with 4 AI modes.
- Add `aiRankedIds: string[] | null` and `aiLoading: boolean` state.
- `useEffect` watches `filters.sort` + `allProducts` — fetches `/api/filter` when an AI mode is selected, clears state for non-AI modes.
- `filteredProducts` useMemo applies `rankMap` sort when `aiRankedIds` is set.
- Sort dropdown gains `<optgroup label="AI Sort">` with 4 options.
- "AI ranking…" pulse indicator shown while loading.

### Phase 5: Test

- Test all 4 AI sort modes on `oando-storage` category.
- Verify fallback path (no key) returns deterministic order.
- Produce audit table.

---

## Files Created / Changed

| File | Action |
|------|--------|
| `app/api/filter/route.ts` | Created — POST endpoint with AI ranking + fallback |
| `app/products/[category]/FilterGrid.tsx` | Updated — AI state, useEffect, sort logic, dropdown |
