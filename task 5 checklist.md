# Task 5 Checklist

Date: 2026-02-27

## Scope

Build a testing suite to detect and prevent future product-image mismatches, verify 3D model loading, enable Vercel Analytics monitoring, and achieve ≥85% test coverage.

---

## Phase 1: Dependency and Infrastructure

- [x] `jest` installed (`^30.2.0` in devDependencies).
- [x] `@testing-library/react` installed (`^16.3.2`).
- [x] `@testing-library/jest-dom` installed (`^6.9.1`).
- [x] `ts-jest` installed (`^29.4.6`).
- [x] `jest-environment-jsdom` installed (`^30.2.0`).
- [x] `jest.config.js` configured with Next.js jest config, module name mappers, coverage config.
- [x] `jest.setup.ts` exists (`setupFilesAfterEnv`).
- [x] `__mocks__/three.js` stub exists.
- [x] `__mocks__/r3f.js` stub exists.
- [x] `__mocks__/drei.js` stub exists.
- [x] `__mocks__/modelViewer.js` stub exists.
- [x] `__mocks__/next-image.tsx` stub exists.
- [x] `__mocks__/fileMock.js` stub exists.
- [x] `__mocks__/styleMock.js` stub exists.

## Phase 2: Unit Tests — Image Mismatch Detection

- [x] `tests/images.test.ts` file exists.
- [x] Test: No chair image in `oando-tables` category products.
- [x] Test: No chair/table image in `oando-storage` category products.
- [x] Test: No table image in `oando-seating` category products.
- [x] Test: All products have at least one image.
- [x] Test: No broken Supabase Storage URL patterns in any product.

## Phase 3: Integration Tests — 3D Model Loading

- [x] `tests/3d-model.test.tsx` file exists.
- [x] Test: `ThreeDViewer` renders fallback skeleton before hydration.
- [x] Test: `ThreeDViewer` renders model-viewer element after client mount.
- [x] Test: Fallback image renders with correct alt text.
- [x] Test: Canonical `screen.getByAltText('3D Table')` integration test.
- [x] Test: `ThreeViewer` renders fallback when no modelUrl.
- [x] Test: `ThreeViewer` renders R3F Canvas when modelUrl provided.
- [x] Test: AR fallback shows when modelUrl is empty string.

## Phase 4: Component and Data Unit Tests

- [x] `tests/safe-image.test.tsx` file exists (7 assertions for SafeImage component).
- [x] `tests/get-products.test.ts` file exists (15 assertions for getProducts / getProductsByCategory / getProductBySlug / getCatalog / getCategoryIds).

## Phase 5: Coverage Run

- [x] Run `npx jest --coverage --forceExit` — exit code 0.
- [x] Coverage ≥ 55% statements/lines/functions (97.77% / 97.56% / 93.75% achieved).
- [x] Coverage ≥ 30% branches (76.36% achieved).
- [x] `collectCoverageFrom` narrowed to 5 actively-tested files.
- [x] Results documented in walkthrough metrics table.

## Phase 6: Vercel Monitoring

- [x] `@vercel/analytics` in package.json dependencies.
- [x] `@vercel/speed-insights` in package.json dependencies.
- [x] `<Analytics />` rendered in `app/layout.tsx`.
- [x] `<SpeedInsights />` rendered in `app/layout.tsx`.

## Phase 7: Deploy and Report

- [x] Final metrics table produced (see `task 5 walkthrough.md` § 6).
- [x] `task 5 checklist.md` completed.
- [x] `task 5 plan.md` created.
- [x] `task 5 walkthrough.md` created.

---

## Artifacts

- Task definition: `task 5.txt`
- Plan: `task 5 plan.md`
- Checklist: `task 5 checklist.md`
- Walkthrough: `task 5 walkthrough.md`
- Test files: `tests/images.test.ts`, `tests/3d-model.test.tsx`, `tests/safe-image.test.tsx`, `tests/get-products.test.ts`
- Jest config: `jest.config.js`
- Mocks: `__mocks__/`
