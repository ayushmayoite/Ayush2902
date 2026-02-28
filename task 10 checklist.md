# Task 10 Checklist

Date: 2026-02-27

## Scope

Add AI-powered product ranking via `/api/filter` and wire four AI sort modes into the `FilterGrid` sort dropdown. Fuse.js fuzzy search from Task 8 remains active.

---

## Phase 1: API Route

- [x] `app/api/filter/route.ts` created.
- [x] `POST` handler accepts `{ products, category, rankBy }`.
- [x] `rankBy` validated against `["sustainability", "price", "material", "ergonomic"]`.
- [x] Returns `{ rankedIds: string[], source: "ai" | "fallback" }`.
- [x] Product payload limited to 40 items for token efficiency.

## Phase 2: AI Ranking

- [x] `gpt-4o-mini` used with `response_format: { type: "json_object" }`.
- [x] Prompt includes category, rank instruction, and per-product metadata (eco score, price tier, materials, BIFMA, adjustability).
- [x] Response parsed as `{ ids: string[] }`.
- [x] IDs not returned by AI appended at end to ensure full list.
- [x] Catches JSON parse errors — falls back to deterministic sort.
- [x] Returns `source: "ai"` or `source: "fallback"` for observability.

## Phase 3: Deterministic Fallback

- [x] `sustainability` fallback: sort by `sustainabilityScore` desc.
- [x] `price` fallback: sort by `priceRange` (budget=0, mid=1, premium=2, luxury=3).
- [x] `material` fallback: recycled-material products sorted first.
- [x] `ergonomic` fallback: BIFMA(3) + height-adj(2) + headrest(1) score desc.
- [x] Used when `OPENAI_API_KEY` absent or API call fails.

## Phase 4: FilterGrid UI

- [x] `SortOption` extended: `"ai-sustainability" | "ai-price" | "ai-material" | "ai-ergonomic"` added.
- [x] `useEffect` import added.
- [x] `aiRankedIds: string[] | null` state added.
- [x] `aiLoading: boolean` state added.
- [x] `useEffect` fetches `/api/filter` when `filters.sort` is an AI mode.
- [x] `useEffect` clears `aiRankedIds` when sort switches back to non-AI.
- [x] `filteredProducts` applies `rankMap` sort when `aiRankedIds` present.
- [x] `aiRankedIds` added to `filteredProducts` dependency array.
- [x] Sort dropdown has `<optgroup label="AI Sort">` with 4 options.
- [x] "AI ranking…" pulse text shown while `aiLoading` is true.

## Phase 5: Test Audit

- [x] Sustainability sort tested on Tables — 30 results, high eco-score products first.
- [x] Price sort tested on Storage — 20 results, budget tier first.
- [x] Material sort tested on Workstations — 15 results, recycled material first.
- [x] Ergonomic sort tested on Seating — 41 results, BIFMA-certified first.
- [x] Fallback path verified — deterministic sort when no OpenAI key.

## Phase 6: Artifacts

- [x] `task 10.txt` created.
- [x] `task 10 plan.md` created.
- [x] `task 10 checklist.md` completed.
- [x] `task 10 walkthrough.md` created.

---

## Artifacts

- Task definition: `task 10.txt`
- Plan: `task 10 plan.md`
- Checklist: `task 10 checklist.md`
- Walkthrough: `task 10 walkthrough.md`
- Created: `app/api/filter/route.ts`
- Updated: `app/products/[category]/FilterGrid.tsx`
