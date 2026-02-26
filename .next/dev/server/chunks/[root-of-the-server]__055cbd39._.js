module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://erpweaiypimorcunaimz.supabase.co") || "https://erpweaiypimorcunaimz.supabase.co";
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_21J6H7rVe81Ray_WLUDgEA_WU9iTNsG") || "sb_publishable_21J6H7rVe81Ray_WLUDgEA_WU9iTNsG";
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/lib/getProducts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCatalog",
    ()=>getCatalog,
    "getCategoryIds",
    ()=>getCategoryIds,
    "getProductBySlug",
    ()=>getProductBySlug,
    "getProducts",
    ()=>getProducts,
    "getProductsByCategory",
    ()=>getProductsByCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
;
/** Map a Supabase row to the shape the old catalog.ts used */ function toCompatProduct(p) {
    return {
        id: p.id,
        name: p.name,
        description: p.description,
        flagshipImage: p.flagship_image,
        sceneImages: p.scene_images ?? [],
        variants: p.variants ?? [],
        detailedInfo: p.detailed_info ?? {
            overview: "",
            features: [],
            dimensions: "",
            materials: []
        },
        metadata: {
            ...p.metadata ?? {},
            sustainabilityScore: p.specs?.sustainability_score ?? 5
        },
        images: p.images ?? []
    };
}
async function getProducts() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").order("name", {
        ascending: true
    });
    if (error) {
        console.error("[getProducts] Supabase error:", error.message);
        return [];
    }
    return data ?? [];
}
async function getProductsByCategory(categoryId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("category", categoryId).order("name", {
        ascending: true
    });
    if (error) {
        console.error("[getProductsByCategory] Supabase error:", error.message);
        return [];
    }
    return data ?? [];
}
async function getProductBySlug(slug) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("slug", slug).single();
    if (error) {
        console.error("[getProductBySlug] Supabase error:", error.message);
        return null;
    }
    return data;
}
async function getCatalog() {
    // Fetch categories and products in parallel
    const [catRes, prodRes] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("*"),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").order("name", {
            ascending: true
        })
    ]);
    if (catRes.error) {
        console.error("[getCatalog] Categories error:", catRes.error.message);
        return [];
    }
    if (prodRes.error) {
        console.error("[getCatalog] Products error:", prodRes.error.message);
        return [];
    }
    const categories = catRes.data;
    const products = prodRes.data;
    // Group by category, then by series
    const catMap = new Map();
    for (const cat of categories){
        catMap.set(cat.id, {
            info: cat,
            products: []
        });
    }
    for (const p of products){
        const catId = p.category_id || p.category;
        if (!catMap.has(catId)) {
            continue;
        }
        catMap.get(catId).products.push(p);
    }
    const result = [];
    for (const [catId, catData] of catMap){
        if (catData.products.length === 0) continue;
        // Group products by series
        const seriesMap = new Map();
        for (const p of catData.products){
            const sId = p.series_id || `${catId}-series`;
            if (!seriesMap.has(sId)) seriesMap.set(sId, []);
            seriesMap.get(sId).push(p);
        }
        const series = [];
        for (const [sId, sProducts] of seriesMap){
            series.push({
                id: sId,
                name: sProducts[0]?.series_name || "Series",
                description: `Premium ${catData.info.name.toLowerCase()} solutions`,
                products: sProducts.map(toCompatProduct)
            });
        }
        result.push({
            id: catId,
            name: catData.info.name,
            description: `Professional furniture systems for ${catData.info.name.toLowerCase()}`,
            series
        });
    }
    return result;
}
async function getCategoryIds() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("products").select("category").order("category");
    if (error) {
        console.error("[getCategoryIds] Supabase error:", error.message);
        return [];
    }
    const unique = [
        ...new Set((data ?? []).map((r)=>r.category))
    ];
    return unique;
}
}),
"[project]/app/api/ai-advisor/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$getProducts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/getProducts.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
;
;
;
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY || "placeholder",
    defaultHeaders: {
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "One and Only Furniture"
    }
});
async function POST(req) {
    console.log("➡️  [ai-advisor] POST request received");
    try {
        const { query, userId } = await req.json();
        console.log("📝  [ai-advisor] Query:", query, "User:", userId);
        if (!query || typeof query !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Query is required"
            }, {
                status: 400
            });
        }
        if (!process.env.OPENROUTER_API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "AI advisor is not configured. Please add OPENROUTER_API_KEY."
            }, {
                status: 503
            });
        }
        // Fetch user history from Supabase if authenticated/provided
        let historyContext = "";
        if (userId) {
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from("user_history").select("viewed_products").eq("user_id", userId).single();
            if (data?.viewed_products?.length) {
                historyContext = `\nClient History (Recently Viewed Products): ${data.viewed_products.join(", ")}\nPrioritize recommending complementary or similar items based on this history.`;
            }
        }
        // Fetch product catalog from Supabase
        const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$getProducts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProducts"])();
        // Build a compact product list for the prompt (name, slug, category, description)
        const productList = products.slice(0, 80) // limit context size
        .map((p)=>`- ID: ${p.slug} | Name: ${p.name} | Category: ${p.category} | Tier: ${p.performance_tier ?? "standard"} | ${p.description?.slice(0, 80)}`).join("\n");
        const systemPrompt = `You are an enterprise workspace engineering consultant for One & Only Furniture (Patna, Bihar India — AFC Regional Franchise).
Your role is to recommend the best workspace systems from our catalog based on the client's requirements.
Always recommend 3-5 specific products. Consider: team size, industry, budget sensitivity, location (Bihar/India context), and ergonomic needs.
Bias toward ergonomic seating + modular workstations for government/corporate, and collaborative/soft-seating for creative/startup environments.${historyContext}

Available products:\n${productList}

Respond ONLY with valid JSON in this exact shape:
{
  "recommendations": [
    {
      "productId": "<slug from catalog>",
      "productName": "<name>",
      "category": "<category>",
      "why": "<one sentence engineering rationale>",
      "budgetEstimate": "<INR range e.g. ₹45,000 – ₹65,000 per unit>"
    }
  ],
  "totalBudget": "<estimated project total range>",
  "summary": "<2-sentence enterprise consultation summary>"
}`;
        console.log("🤖  [ai-advisor] Calling OpenRouter...");
        const completion = await openai.chat.completions.create({
            model: "openrouter/free",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: query
                }
            ],
            temperature: 0.4
        });
        console.log("✅  [ai-advisor] OpenRouter response received");
        let raw = completion.choices[0]?.message?.content ?? "{}";
        raw = raw.replace(/^```json\n/, "").replace(/\n```$/, "").trim();
        const result = JSON.parse(raw);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (err) {
        console.error("[ai-advisor] Error:", err);
        const errorMessage = err instanceof Error ? err.message : String(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: `Failed to generate recommendations: ${errorMessage}`
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__055cbd39._.js.map