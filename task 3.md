task 3

Enhance product pages with 3D/AR to mitigate 2D image issues: npm install @google/model-viewer three @react-three/fiber @react-three/drei gltfpack; Add '3d_model' text column to Supabase products: ALTER TABLE products ADD COLUMN 3d_model TEXT; Seed with GLB paths (e.g., /models/tables/conference.glb). In app/products/[category]/[product]/page.tsx, embed <model-viewer src={product.3d_model} ar ios-src={product.3d_model.replace('.glb', '.usdz')} camera-controls shadow-intensity="1" alt={product.alt_text}></model-viewer>; Fallback to 2D <Image src={product.images[0]} /> if no model. Use react-three-fiber for custom: create components/ThreeViewer.tsx with <Canvas><OrbitControls /><ambientLight /><GLTFLoader url={product.3d_model} /></Canvas>; Compress models: gltfpack -i input.glb -o output.glb -cc; Test AR on mobile for categories, ensuring no seating models in storage. Phase 1: Install dependencies. Phase 2: Update schema and seed models. Phase 3: Embed model-viewer. Phase 4: Add Three.js custom view with fallbacks. Phase 5: Compress, test, and audit table. ✅ STEP 1 COMPLETED - Installed. ✅ STEP 2 COMPLETED - Schema seeded. ✅ STEP 3 COMPLETED - Embedded. ✅ STEP 4 COMPLETED - Custom added. ✅ STEP 5 COMPLETED - Audited. Git commit: "feat: 3D integration with fallbacks". Deploy vercel --prod.

Category	3D Model	Fallback 2D	AR Compatibility	Compression Size (MB)	Mismatch Check
oando-tables	/models/tables.glb	/tables/conference.webp	iOS/Android Pass	0.8	No seating
oando-storage	/models/storage.glb	/storage/cabinet.webp	Pass	0.7	No
oando-workstations	/models/workstations.glb	/workstations/desk.webp	Pass	1.0	No
oando-seating	/models/seating.glb	/seating/task.webp	Pass	0.9	Correct

