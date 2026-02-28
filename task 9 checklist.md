# Task 9 Checklist

Date: 2026-02-27

## Scope

Build "Our Work" client badge system: create `ClientBadge` component, build `OurWork` homepage section with 16 featured clients, add to homepage, and replace the `/projects` Coming Soon placeholder with a full 60-client directory.

---

## Phase 1: Client Data Source

- [x] Full client list confirmed in `components/home/ClientMarquee.tsx` (60 clients, 2 rows).
- [x] Sector labels assigned to all 60 clients (Government, Finance, Manufacturing, Energy, Automotive, FMCG, NGO/UN, Education, Telecom, Corporate).
- [x] Featured 16 clients selected for homepage (Titan, Usha, DMRC, Bihar Govt, Tata Steel, Tata Motors, L&T, HDFC, SBI, NTPC, IndianOil, Maruti, Asian Paints, ITC, Indian Army, BHEL).

## Phase 2: ClientBadge Component

- [x] `components/ClientBadge.tsx` created.
- [x] Props: `name`, `sector`, `location?`, `featured?`.
- [x] `SECTOR_COLORS` map covers 10 sectors with distinct colour palettes.
- [x] Hover: border darkens to `border-neutral-400`, subtle shadow.
- [x] Export: named `ClientBadge` + exported `ClientBadgeData` interface.

## Phase 3: OurWork Section

- [x] `components/home/OurWork.tsx` created.
- [x] 16 featured clients in `FEATURED_CLIENTS` array.
- [x] Grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`.
- [x] Section header: "Our Work" eyebrow + heading.
- [x] Footer: "+60 clients across Government, Finance, Energy, Manufacturing & more".
- [x] "View all clients →" link to `/projects`.

## Phase 4: Homepage Integration

- [x] `import { OurWork }` added to `app/page.tsx`.
- [x] `<OurWork />` rendered between `<ServiceSection />` and `<ContactTeaser />`.

## Phase 5: /projects Page

- [x] `app/projects/page.tsx` rewritten — "Coming Soon" removed.
- [x] Stats row: 60+ Clients, 500+ Projects, 18+ Sectors.
- [x] All 60 clients in `ALL_CLIENTS` array with sector + location data.
- [x] Grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`.
- [x] Hero: title "Our Work", correct subtitle.
- [x] No mismatches — all 60 client names match `ClientMarquee` source.

## Phase 6: Artifacts

- [x] `task 9.txt` created.
- [x] `task 9 plan.md` created.
- [x] `task 9 checklist.md` completed.
- [x] `task 9 walkthrough.md` created.

---

## Client Load Status

| Client | Sector | Location | Homepage Badge | /projects Grid |
|--------|--------|----------|---------------|---------------|
| Titan | Manufacturing | Patna, Bihar | Pass | Pass |
| Usha International | Manufacturing | Gurgaon | Pass | Pass |
| Government of Bihar | Government | Patna | Pass | Pass |
| TVS Group | Automotive | — | — | Pass |
| DMRC | Government | New Delhi | Pass | Pass |
| Tata Steel | Manufacturing | Jharkhand | Pass | Pass |
| HDFC | Finance | — | Pass | Pass |
| IndianOil | Energy | — | Pass | Pass |

## Artifacts

- Task definition: `task 9.txt`
- Plan: `task 9 plan.md`
- Checklist: `task 9 checklist.md`
- Walkthrough: `task 9 walkthrough.md`
- Files created: `components/ClientBadge.tsx`, `components/home/OurWork.tsx`
- Files updated: `app/page.tsx`, `app/projects/page.tsx`
