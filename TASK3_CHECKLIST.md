# Task 3 Checklist

Date: 2026-02-27

## Phase Checklist

- [x] Phase 1: Install 3D dependencies (`model-viewer`, `three`, `react-three`)
- [x] Phase 2: Add schema migration and seed script for `3d_model`
- [x] Phase 3: Embed `model-viewer` in product UI
- [x] Phase 4: Add custom Three.js viewer with fallback
- [ ] Phase 5: Compress models, mobile AR test, mismatch audit, deploy

## Notes

- Migration exists: `supabase/migrations/20260226_add_3d_model.sql`.
- Viewer components exist: `components/ThreeViewer.tsx`, `components/3DViewer.tsx`.
- End-to-end verification still pending:
  - Confirm DB products actually have `3d_model` values.
  - Ensure category page data path passes `3d_model` to UI for all products.
  - Compress generated GLBs (`gltfpack`) and validate on iOS/Android.
  - Deploy blocked until Vercel login is fixed.
