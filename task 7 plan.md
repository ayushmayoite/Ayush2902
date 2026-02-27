# Task 7 Plan

Date: 2026-02-27

## Objective

Fix HTTP 404 errors on category subpages (`/products/oando-tables/`, `/products/oando-storage/`, etc.) caused by missing static params generation in the Next.js App Router, and eliminate preload errors caused by default `prefetch` behaviour on navigation links.

---

## Root Cause Analysis

1. **Missing `generateStaticParams`**: `app/products/[category]/page.tsx` had no static params export, so Next.js could not pre-render category routes at build time, resulting in 404s in production.
2. **No `notFound()` guard**: Unknown category slugs silently fell through rather than returning a proper 404 response.
3. **Link prefetch noise**: `<Link>` components in `Header.tsx` used the default `prefetch={true}`, causing unnecessary preload requests and console errors in development.

---

## Phases

### Phase 1: Add `generateStaticParams`

- Export `generateStaticParams` from `app/products/[category]/page.tsx`.
- Query `supabase.from('categories').select('id')` to enumerate all valid category slugs.
- Return `data.map(c => ({ category: c.id }))`.
- Handle error/empty case by returning `[]`.

### Phase 2: Implement `notFound()` Handling

- Import `notFound` from `next/navigation`.
- After catalog lookup, call `notFound()` if the resolved category is `undefined`.
- Also handle the case where the entire catalog is empty (Supabase offline) with a graceful fallback UI instead of crashing.

### Phase 3: Update Navigation Links

- Set `prefetch={false}` on all `<Link>` components in `components/layout/Header.tsx`.
- Covers: logo link (`/`), meta nav links (`/service`, `/showrooms`, `/contact`), main nav links, and the "Request Quote" CTA.

### Phase 4: Test Routes

- Smoke-test all four primary category routes:
  - `/products/oando-tables`
  - `/products/oando-storage`
  - `/products/oando-workstations`
  - `/products/oando-seating`
- Confirm HTTP 200 and correct content renders for each.
- Verify unknown slug (`/products/does-not-exist`) returns 404.

### Phase 5: Audit and Deploy

- Produce route audit table.
- Git commit: `fix: navigation and 404 errors`.
- Deploy to Vercel production.

---

## Files Changed

| File | Change |
|------|--------|
| `app/products/[category]/page.tsx` | Add `generateStaticParams`, `notFound()` guard, offline fallback UI |
| `components/layout/Header.tsx` | Add `prefetch={false}` to all `<Link>` components |
