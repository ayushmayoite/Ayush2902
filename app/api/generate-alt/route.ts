import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

type CategoryConfig = { label: string; avoid: string[] };

const CATEGORY_CONTEXT: Record<string, CategoryConfig> = {
  "oando-workstations": {
    label: "office workstation desk system",
    avoid: ["chair", "seating", "sofa"],
  },
  "oando-tables": {
    label: "office conference table",
    avoid: ["chair", "seating", "sofa", "workstation"],
  },
  "oando-storage": {
    label: "office storage cabinet locker",
    avoid: ["chair", "seating", "table", "desk"],
  },
  "oando-seating": {
    label: "ergonomic office chair",
    avoid: ["table", "desk", "storage", "cabinet"],
  },
  "oando-chairs": {
    label: "ergonomic office chair",
    avoid: ["table", "desk", "storage", "cabinet"],
  },
  "oando-other-seating": {
    label: "visitor and training seating",
    avoid: ["table", "desk", "storage"],
  },
  "oando-soft-seating": {
    label: "soft seating lounge furniture",
    avoid: ["table", "desk", "storage", "workstation"],
  },
};

function fallbackAltText(category: string, name: string): string {
  const ctx = CATEGORY_CONTEXT[category] || {
    label: category.replace("oando-", "").replace(/-/g, " "),
    avoid: [],
  };
  return `${name} ${ctx.label}`.replace(/\s+/g, " ").trim().slice(0, 120);
}

export async function POST(req: NextRequest) {
  try {
    const { category, name, description } = await req.json();
    if (!category || !name) {
      return NextResponse.json(
        { error: "category and name are required" },
        { status: 400 }
      );
    }

    const ctx = CATEGORY_CONTEXT[category] || {
      label: category.replace("oando-", "").replace(/-/g, " "),
      avoid: [],
    };

    const avoidText =
      ctx.avoid.length > 0
        ? `Avoid these words: ${ctx.avoid.join(", ")}.`
        : "Avoid unrelated category words.";

    const prompt = [
      "Generate concise product image alt text for furniture.",
      "Maximum 15 words. Output plain text only.",
      `Category: ${ctx.label}`,
      `Name: ${name}`,
      description ? `Description: ${description}` : "",
      avoidText,
    ]
      .filter(Boolean)
      .join("\n");

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ altText: fallbackAltText(category, name) });
    }

    const openai = new OpenAI({ apiKey });
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3,
        max_tokens: 60,
      });

      const altText =
        completion.choices[0]?.message?.content?.trim() ||
        fallbackAltText(category, name);

      return NextResponse.json({ altText });
    } catch {
      return NextResponse.json({ altText: fallbackAltText(category, name) });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `Failed to generate alt text: ${message}` },
      { status: 500 }
    );
  }
}
