import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

/**
 * POST /api/generate-alt
 *
 * Generate accessible alt text for a furniture product image
 * using OpenAI (via OpenRouter). Avoids cross-category references
 * (e.g. no "seating" language for a table product).
 *
 * Body: { category: string, name: string, description?: string }
 * Response: { altText: string }
 */

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY || "placeholder",
    defaultHeaders: {
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "One and Only Furniture",
    },
});

// Map category IDs to human-friendly labels + exclusion terms
const CATEGORY_CONTEXT: Record<string, { label: string; avoid: string[] }> = {
    "oando-workstations": { label: "office workstation / desk system", avoid: ["chair", "seating", "sofa"] },
    "oando-tables": { label: "office / conference table", avoid: ["chair", "seating", "sofa", "workstation"] },
    "oando-storage": { label: "office storage unit / cabinet / locker", avoid: ["chair", "seating", "table", "desk"] },
    "oando-seating": { label: "ergonomic office chair", avoid: ["table", "desk", "storage", "cabinet"] },
    "oando-chairs": { label: "ergonomic office chair", avoid: ["table", "desk", "storage", "cabinet"] },
    "oando-other-seating": { label: "office seating (visitor / training / stool)", avoid: ["table", "desk", "storage"] },
    "oando-soft-seating": { label: "soft seating / lounge / sofa", avoid: ["table", "desk", "storage", "workstation"] },
    "oando-educational": { label: "educational / institutional furniture", avoid: ["executive", "sofa", "lounge"] },
    "oando-collaborative": { label: "collaborative workspace furniture", avoid: ["storage", "cabinet", "locker"] },
};

export async function POST(req: NextRequest) {
    try {
        const { category, name, description } = await req.json();

        if (!category || !name) {
            return NextResponse.json(
                { error: "category and name are required" },
                { status: 400 }
            );
        }

        if (!process.env.OPENROUTER_API_KEY) {
            return NextResponse.json(
                { error: "AI alt-text generation is not configured. Add OPENROUTER_API_KEY." },
                { status: 503 }
            );
        }

        const ctx = CATEGORY_CONTEXT[category] || {
            label: category.replace("oando-", "").replace(/-/g, " "),
            avoid: [],
        };

        const avoidStr = ctx.avoid.length > 0
            ? `IMPORTANT: Do NOT use the following words or concepts: ${ctx.avoid.join(", ")}. `
            : "";

        const prompt = `Generate a concise, accessible alt text (max 15 words) for a product image.
Product category: ${ctx.label}
Product name: ${name}
${description ? `Description: ${description}` : ""}

${avoidStr}
The alt text should describe the furniture piece accurately for screen readers.
Respond with ONLY the alt text string, no quotes, no explanation.`;

        const completion = await openai.chat.completions.create({
            model: "openrouter/free",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.3,
            max_tokens: 50,
        });

        const altText = completion.choices[0]?.message?.content?.trim() || `${name} — ${ctx.label}`;

        return NextResponse.json({ altText });
    } catch (err) {
        console.error("[generate-alt] Error:", err);
        const message = err instanceof Error ? err.message : String(err);
        return NextResponse.json(
            { error: `Failed to generate alt text: ${message}` },
            { status: 500 }
        );
    }
}
