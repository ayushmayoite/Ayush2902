# Task List

Date: 2026-02-27

## Task1 Project Tasks

1. Phase 1: Migration pushed - Completed
2. Phase 2: Categories and products seeded - Completed
3. Phase 3: Server fetches revised - Completed
4. Phase 4: Rendering fallback logic added - Completed
5. Phase 5: Audit and deployment verification - Completed (deployment command run; auth token issue found)

## Tooling and Environment Tasks

1. Validate project dependencies - Completed (`npm install`)
2. Install Vercel CLI in project - Completed (`npm install --save-dev vercel`)
3. Run production deploy command - Completed (`npx vercel --prod --yes`)
4. Resolve deploy auth blocker - Pending (`npx vercel login` or valid `VERCEL_TOKEN`)

## Task: MAX/DWG to GLB Converter Script

1. Add Blender conversion helper script - Completed (`scripts/blender_to_glb.py`)
2. Add orchestrator script for `.max/.dwg/.fbx -> .glb` - Completed (`scripts/convert_max_dwg_glb.ps1`)
3. Include DWG route with fallback to FBX route - Completed
4. Include optional GLB compression (`gltfpack`) - Completed

## Task 2 Execution (Current)

1. Patch mismatch audit logic to avoid false positives - Completed
2. Run audit and fix flow (`scripts/audit-mismatches.ts --fix`) - Completed
3. Re-verify mismatch count - Completed (`0` mismatches)
4. Integrate API alt generation (`gpt-4o-mini` + fallback) - Completed
5. Batch alt text write-back to DB - Completed (using `local.env` service key, fallback stored in `metadata.ai_alt_text`)
6. Validate `/products/oando-tables/` mismatch test - Completed
7. Deploy to Vercel - Blocked (invalid token)
