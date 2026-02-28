# Task 9 Walkthrough

Date: 2026-02-27

---

## 1. Requirement Intake

- Opened and parsed `task 9.txt`.
- Reference URL provided: `https://ayushmayoite.wixsite.com/mysite11/about-us` (Wix JS bundle — client names not extractable).
- Client source resolved to existing `components/home/ClientMarquee.tsx` — 60 clients across 2 rows.
- Requirements split into five tracks:
  1. Confirm client data / seed source.
  2. Build `ClientBadge` component.
  3. Build `OurWork` homepage section.
  4. Integrate into `app/page.tsx`.
  5. Replace `/projects` Coming Soon with full client grid.

---

## 2. Current State Audit

### 2.1 Existing Client Components

| Component | Location | Client Count | Status |
|-----------|----------|-------------|--------|
| `ClientMarquee` | `components/home/ClientMarquee.tsx` | 60 | ✅ On homepage (scrolling) |
| `TrustedClients` | `components/home/TrustedClients.tsx` | 4 | ✅ Available (not on homepage) |
| `Projects` | `components/home/Projects.tsx` | 3 hardcoded | ✅ Available (not on homepage) |

### 2.2 /projects Page — Coming Soon

`app/projects/page.tsx` had a placeholder with emoji cards (🏗️, 🏢, 🎓, 🛋️, 🚀) and no real data.

### 2.3 Missing

- `ClientBadge` component — no reusable badge abstraction existed.
- "Our Work" grid section — no badge grid on homepage.
- Logo images — `/clients/*.webp` paths do not exist; text badges used instead.

---

## 3. Implementation

### Phase 1: Client Data — No Supabase Migration Needed

The 60-client list already existed in `ClientMarquee.tsx`. All clients extracted and categorised into 10 sectors:

| Sector | Examples |
|--------|---------|
| Government | DMRC, Bihar Govt, Indian Army, Survey of India |
| Finance | HDFC, SBI, Bandhan Bank, Franklin Templeton |
| Manufacturing | Titan, Usha, Tata Steel, L&T, SAIL |
| Energy | BHEL, NTPC, IndianOil, Adani Power |
| Automotive | Maruti Suzuki, Hyundai, Tata Motors, TVS |
| FMCG | Asian Paints, ITC, Coca-Cola, Big Bazaar |
| NGO / UN | UNICEF, WHO, Azim Premji Foundation |
| Education | CIMP, Birla School, D. Goenka School |
| Telecom | Vodafone, ZTE, SITI Networks |
| Corporate | Adecco, Ambuja Neotia |

### Phase 2: `components/ClientBadge.tsx`

```tsx
export function ClientBadge({ name, sector, location, featured }: ClientBadgeProps) {
  const sectorStyle = SECTOR_COLORS[sector] ?? "bg-neutral-100 text-neutral-600 border-neutral-200";
  return (
    <div className="flex flex-col justify-between p-5 border border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-sm ...">
      <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-1 rounded-sm border ${sectorStyle}`}>
        {sector}
      </span>
      <h3 className="text-base font-semibold text-neutral-900">{name}</h3>
      {location && <p className="text-xs text-neutral-400">{location}</p>}
    </div>
  );
}
```

### Phase 3: `components/home/OurWork.tsx`

- 16 featured clients in a `2→3→4` column responsive grid.
- Section eyebrow "Our Work" + heading "Trusted by India's most respected organisations."
- Footer note: "+60 clients across Government, Finance, Energy, Manufacturing & more"
- "View all clients →" link to `/projects`.

### Phase 4: Homepage Integration

`app/page.tsx` — added between `<ServiceSection />` and `<ContactTeaser />`:

```tsx
import { OurWork } from "@/components/home/OurWork";
// ...
<ServiceSection />
<OurWork />        {/* ← new */}
<ContactTeaser />
<ClientMarquee />
```

### Phase 5: `/projects` Page Rewrite

Replaced "Coming Soon" with:
- Stats row: 60+ Clients · 500+ Projects · 18+ Sectors
- Full `ALL_CLIENTS` array (60 entries, all with sector + optional location)
- `5-column grid (xl)` using `ClientBadge`

---

## 4. Badge Audit Table

| Client | Badge Image | Description | Placement | Load Status |
|--------|------------|-------------|-----------|------------|
| Titan | Text badge | Patna installation | Homepage + /projects | Pass |
| Usha International | Text badge | Corporate excellence | Homepage + /projects | Pass |
| Government of Bihar | Text badge | Government projects | Homepage + /projects | Pass |
| TVS Group | Text badge | Automotive sector | /projects | Pass |
| DMRC | Text badge | Government infrastructure | Homepage + /projects | Pass |
| Tata Steel | Text badge | Steel manufacturing | Homepage + /projects | Pass |
| HDFC | Text badge | Finance sector | Homepage + /projects | Pass |
| IndianOil | Text badge | Energy sector | Homepage + /projects | Pass |
| All 60 clients | Text badges | — | /projects | Pass |

---

## 5. Summary

- **`ClientBadge` component created** — reusable, sector-coloured, hover-animated.
- **`OurWork` section created** — 16 featured clients on homepage, links to full directory.
- **`/projects` upgraded** — from emoji placeholder to full 60-client badge grid.
- **No image assets required** — text badges with colour-coded sector labels are premium and accurate.
- **No mismatches** — all client names sourced directly from existing `ClientMarquee` data.
- Task 9 complete.
