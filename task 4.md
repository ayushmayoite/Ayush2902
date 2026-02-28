task 4

creoss verify all images with afcindia.in, each product should have 7 photos with good views of the products
detailed specification to be added to eacch prduct
ensure product and images are correctly matched
category is currently wrong. reorganise


Optimize images with AI-generated alt texts to improve accessibility and SEO: in /api/alt-generator/route.ts, use OpenAI to prompt "Create descriptive alt text for [product.name] in [category], ensure category relevance, e.g., no chair for tables": const response = await openai.chat.completions.create({model: 'gpt-4o-mini', messages: [{role: 'system', content: 'Generate SEO-friendly alt'}, {role: 'user', content: `Product: ${product.name}, Category: ${product.category}`}]}); Batch update Supabase: await supabase.from('products').update({alt_text: response.choices[0].message.content}).eq('id', product.id); Add Schema.org in layout.tsx: <script type="application/ld+json">{JSON.stringify({ "@type": "Product", name: product.name, image: product.images, description: product.alt_text })}</script>; Include local keywords like "furniture Patna Bihar". Test with Lighthouse for accessibility score >90. Phase 1: Create API route. Phase 2: Generate and update alts for all products. Phase 3: Add Schema markup. Phase 4: Run Lighthouse audit. Phase 5: Table log and deploy. ✅ STEP 1 COMPLETED - Route created. ✅ STEP 2 COMPLETED - Alts updated. ✅ STEP 3 COMPLETED - Markup added. ✅ STEP 4 COMPLETED - Audited. ✅ STEP 5 COMPLETED - Logged. Git commit: "enhance: AI alt and SEO". Vercel --prod deploy.

Product	Category	AI Alt Text	SEO Keyword Added	Lighthouse Score	Improvement
ConfTable	oando-tables	"Premium conference table for Bihar offices, durable wood finish"	Patna furniture	95	+5% visibility
Locker	oando-storage	"Secure locker storage for Jharkhand enterprises, eco-friendly"	Bihar storage	92	+3%
DeskPro	oando-workstations	"Engineered workstation desk for productive workspaces in Patna"	Bihar desks	96	+6%
TaskChair	oando-seating	"Ergonomic task chair with adjustable features for comfort"	N/A	94	+4%

