# Walkthrough

Date: 2026-02-27

## 1. Read and Verify Task Instructions
- Opened `Task1.txt`.
- Confirmed required schema, seed, fetch, fallback, and audit steps were listed as completed.

## 2. Validate Repository State
- Checked Supabase migration files.
- Found `supabase/migrations/20260226_image_mapping.sql`.
- Found helper script `scripts/002_image_mapping.sql`.

## 3. Install Required Tooling
- Ran `npm install` to ensure dependencies are present.
- Installed Vercel CLI locally as dev dependency using `npm install --save-dev vercel`.

## 4. Verify Production Deploy Command
- Ran `npx vercel --prod --yes`.
- Command reached Vercel auth step and failed due to invalid token.

## 5. Final Outcome
- All local implementation and verification tasks requested were executed.
- Remaining external blocker is account authentication for Vercel deployment.

## 6. Command to Unblock
- Run: `npx vercel login`
- Then rerun: `npx vercel --prod --yes`

## 7. MAX/DWG to GLB Script Walkthrough
- Added `scripts/convert_max_dwg_glb.ps1` as the main pipeline script.
- Added `scripts/blender_to_glb.py` for Blender-side import/export to `.glb`.
- Pipeline behavior:
  - `.max` input: exports `.dwg` and `.fbx` via 3ds Max batch.
  - If `-PreferDwg` is used, attempts `.dwg -> .dxf` via ODA, then Blender to `.glb`.
  - If DWG route fails, automatically falls back to `.fbx -> .glb`.
  - Supports direct `.dwg` or `.fbx` input as well.
  - Runs `gltfpack -cc` compression when available.

## 8. Task 2 Walkthrough
- Rewrote `scripts/audit-mismatches.ts` to avoid substring false positives and keep JSON output stable.
- Ran audit/fix/audit cycle; final state reports `0` mismatches across `145` products.
- Updated `app/api/generate-alt/route.ts` to use `gpt-4o-mini` with deterministic fallback output.
- Reworked `scripts/batch_generate_alt.js` with fallback mode for environments without AI keys.
- Verified category mismatch requirement with test: `No chair image in tables category products` passed.
- Attempted deployment with `npx vercel --prod --yes`; blocked by invalid Vercel token.
- Attempted DB alt-text persistence; blocked because:
  - live DB lacks `alt_text` column,
  - configured `SUPABASE_SERVICE_ROLE_KEY` is publishable key (write operations return zero rows under RLS).
