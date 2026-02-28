# Exhaustive Fix Checklist (Revalidated)

_Last revalidated: 2026-02-28 (local build + DB audit rerun)_

## A) Category Structure (Your latest 11-category model)
- [x] Switched to requested category set:
  1. Chairs (Mesh)
  2. Chairs (Others)
  3. Soft Seating
  4. Cafe Seating
  5. Desks (Cabin Tables)
  6. Workstations
  7. Meeting and Conference Tables
  8. Storages
  9. Education
  10. Others 1
  11. Others 2
- [x] Centralized taxonomy in `lib/afcCategories.ts` (single source, no per-component category hardcoding).
- [x] Category API now emits taxonomy from centralized model (`app/api/categories/route.ts`).
- [x] Category listing page now supports virtual taxonomy buckets (`app/products/[category]/page.tsx`).
- [x] Home category grid now uses the new taxonomy (`components/home/CategoryGrid.tsx`).
- [x] Header/mobile/footer category navigation now uses centralized taxonomy.

## B) Product Classification Logic
- [x] Implemented rule-based classifier (not product-by-product hardcoding).
- [x] Revalidated DB alignment with AFC manifest source for existing canonical categories:
  - `manifestSlugs: 133`
  - `dbCategoryMismatch: 0`
  - `manifestMissingInDb: 0`
- [ ] Manual business review still needed to confirm each product is in the preferred bucket among your 11 labels.

## C) Filters (Cleanup)
- [x] Removed exclusion heuristics that were hiding products unexpectedly.
- [x] Simplified filter surface by removing noisy Use Case and Sustainability slider sections.
- [x] Kept practical filters (Series, Type, Price, Material, key feature toggles).
- [x] Fixed broken/garbled filter text labels (`A-Z`, `Z-A`, loading/search copy).
- [ ] Visual pass per-category still pending to verify options feel correct with real data.

## D) 3D Viewer
- [x] Wired `variants`, `scene_images`, and `detailed_info` from DB into product detail view.
- [x] Added model availability check; 3D toggle is disabled with clear message when model missing.
- [x] Root-cause confirmed: model files missing on disk for all products with model URLs.
  - `productsWith3D: 7`
  - `productsWithMissingLocalModel: 7`
- [ ] To fully restore 3D, add valid `.glb` assets (or valid hosted URLs) for those 7 products.

## E) Logo / Branding
- [x] Reverted main `OneAndOnlyLogo` to One&Only asset (AFC logo no longer used as global site logo).
- [ ] Final visual confirmation pending on deployed environment.

## F) catalog.ts
- [x] Removed stale legacy static categories (`oando-chairs`, `oando-other-seating`) from `lib/catalog.ts`.
- [ ] Optional next step: further shrink static catalog footprint since dynamic Supabase catalog is now primary source.

## G) Build/Quality Gates (Rerun)
- [x] `npm run build` passes successfully.
- [ ] Full visual regression pass (desktop + mobile) pending.
- [ ] Deployed-site verification pending.

## H) Git / Push
- [x] Previous checkpoint already pushed: `abb2b566`.
- [ ] Current patch batch commit + push pending (next immediate step).
