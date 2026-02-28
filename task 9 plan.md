# Task 9 Plan

Date: 2026-02-27

## Objective

Build an "Our Work" section surfacing client trust signals (Titan, Usha, Bihar Govt, TVS and 55+ more). Create a reusable `ClientBadge` component, build a featured grid for the homepage, and upgrade `/projects` from "Coming Soon" to a full client directory.

---

## Current State Audit

| Item | Status |
|------|--------|
| `ClientMarquee` (scrolling names, 60+ clients) | ✅ Present — `components/home/ClientMarquee.tsx` |
| `TrustedClients` (4 text badges) | ✅ Present — `components/home/TrustedClients.tsx` |
| `Projects` component (3 hardcoded cards) | ✅ Present — `components/home/Projects.tsx` |
| `/projects` page | ❌ "Coming Soon" placeholder |
| `ClientBadge` component | ❌ Missing |
| "Our Work" badge grid on homepage | ❌ Missing |
| Client logo images | ❌ Not available (text badges used) |

---

## Client Source

Full client list sourced from `components/home/ClientMarquee.tsx` (60 organisations) plus reference from user — Titan, Usha, Bihar Govt, TVS as primary badges.

---

## Phases

### Phase 1: Confirm Client Data Source

- Client list already exists in `ClientMarquee.tsx` (two rows, 60+ names).
- No Supabase migration required for this implementation — data served from static array (can be migrated to `projects` table later).
- Sectors assigned per client: Government, Finance, Manufacturing, Energy, Automotive, FMCG, NGO/UN, Education, Telecom, Corporate.

### Phase 2: Build `ClientBadge` Component

- Create `components/ClientBadge.tsx`.
- Props: `name`, `sector`, `location?`, `featured?`.
- Sector colour coding via `SECTOR_COLORS` map (10 sectors, distinct palette).
- Hover state: border darkens, subtle shadow.

### Phase 3: Build `OurWork` Section

- Create `components/home/OurWork.tsx`.
- Featured 16 clients: Titan, Usha, DMRC, Bihar Govt, Tata Steel, Tata Motors, L&T, HDFC, SBI, NTPC, IndianOil, Maruti Suzuki, Asian Paints, ITC, Indian Army, BHEL.
- Grid: `2 cols → 3 cols (sm) → 4 cols (lg)`.
- Footer count: "+60 clients across Government, Finance, Energy, Manufacturing & more".
- Link to `/projects` for full directory.

### Phase 4: Integrate into Homepage

- Add `import { OurWork }` to `app/page.tsx`.
- Insert `<OurWork />` between `<ServiceSection />` and `<ContactTeaser />`.

### Phase 5: Replace `/projects` Coming Soon

- Rewrite `app/projects/page.tsx` with full client grid (60 clients, all sectors).
- Add stats row: 60+ Clients, 500+ Projects, 18+ Sectors.
- Grid: `2 cols → 3 cols → 4 cols → 5 cols (xl)`.

---

## Files Created / Changed

| File | Action |
|------|--------|
| `components/ClientBadge.tsx` | Created — reusable badge component |
| `components/home/OurWork.tsx` | Created — homepage "Our Work" section |
| `app/page.tsx` | Updated — added `<OurWork />` import and render |
| `app/projects/page.tsx` | Rewritten — full 60-client badge grid |
