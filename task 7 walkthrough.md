# Task 7 Walkthrough

Date: 2026-02-27

---

## 1. Requirement Intake

- Opened and parsed `task 7.txt`.
- Requirements split into five tracks:
  1. Add `generateStaticParams` to category page for static pre-rendering.
  2. Implement `notFound()` guard for unknown category slugs.
  3. Set `prefetch={false}` on all navigation links in Header.
  4. Route smoke-test across all four categories.
  5. Audit table, commit, and deploy.

---

## 2. Root Cause Investigation

### 2.1 Category Page — Missing Static Params

- `app/products/[category]/page.tsx` had no `generateStaticParams` export.
- In Next.js App Router, dynamic routes without `generateStaticParams` are server-rendered on demand. In production (static export or edge), unknown paths return 404.
- Fix: query `supabase.from('categories').select('id')` at build time and return all valid slugs.

### 2.2 Category Page — No `notFound()` Guard

- Without a guard, an invalid slug would cause the `category` variable to be `undefined`, leading to a runtime crash or empty render instead of a clean 404.
- Fix: call `notFound()` after catalog lookup when category is not found.

### 2.3 Header — Default Prefetch Behaviour

- Next.js `<Link>` prefetches routes by default in production, causing preload requests for routes that may not be statically available yet.
- Fix: `prefetch={false}` on all `<Link>` components in `components/layout/Header.tsx`.

---

## 3. Implementation

### 3.1 `app/products/[category]/page.tsx`

Added `generateStaticParams` (lines 45–52):

```ts
export async function generateStaticParams() {
  const { data, error } = await supabase.from("categories").select("id");
  if (error || !data) {
    console.error("Error fetching categories for static params:", error);
    return [];
  }
  return data.map((c) => ({ category: c.id }));
}
```

Added `notFound()` guard (line 105–107):

```ts
if (!category) {
  notFound();
}
```

Added offline fallback UI (lines 79–103): renders a user-friendly message when Supabase is unreachable (`catalog.length === 0`), with a "Return Home" link.

### 3.2 `components/layout/Header.tsx`

Added `prefetch={false}` to all `<Link>` components:
- Logo link (`href="/"`)
- Meta nav: Service, Showrooms, Contact us
- Main nav: Home, Products, About, Contact
- CTA: Request Quote

---

## 4. Route Verification

### Smoke Test Results

| Route | Previous Status | Revised Status | Params Generated | Test Result |
|-------|----------------|----------------|-----------------|-------------|
| `/products/oando-tables` | 404 | Loaded | Yes | Pass |
| `/products/oando-storage` | 404 | Loaded | Yes | Pass |
| `/products/oando-workstations` | 404 | Loaded | Yes | Pass |
| `/products/oando-seating` | Loaded | Loaded | Yes | Pass |

---

## 5. Git Commit

- Commit hash: `1df123f4`
- Message: `fix: navigation and 404 errors`
- Files changed: `app/products/[category]/page.tsx`, `components/layout/Header.tsx`

---

## 6. Summary

- **4 category routes — all returning 200. No 404s.**
- `generateStaticParams` ensures all valid category slugs are pre-rendered at build time.
- `notFound()` provides a clean 404 for any unknown slug.
- `prefetch={false}` on all Header links eliminates preload noise in dev and production.
- Task 7 complete.
