import { NextResponse } from "next/server";
import { supabase } from "@/lib/db";

const CATEGORY_ORDER = [
    "oando-workstations",
    "oando-seating",
    "oando-tables",
    "oando-storage",
    "oando-soft-seating",
    "oando-collaborative",
    "oando-educational",
];

export async function GET() {
    const [catRes, prodRes] = await Promise.all([
        supabase.from("categories").select("id, name"),
        supabase.from("products").select("category_id"),
    ]);

    if (catRes.error) {
        return NextResponse.json({ error: catRes.error.message }, { status: 500 });
    }
    if (prodRes.error) {
        return NextResponse.json({ error: prodRes.error.message }, { status: 500 });
    }

    const activeCategoryIds = new Set(
        (prodRes.data ?? []).map((p) => p.category_id),
    );

    const mapped = (catRes.data ?? [])
        .filter((category) => activeCategoryIds.has(category.id))
        .map((category) =>
        category.id === "oando-seating"
            ? { ...category, name: "Chairs" }
            : category,
        )
        .sort((a, b) => {
            const aIdx = CATEGORY_ORDER.indexOf(a.id);
            const bIdx = CATEGORY_ORDER.indexOf(b.id);
            const aRank = aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx;
            const bRank = bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx;
            if (aRank !== bRank) return aRank - bRank;
            return a.name.localeCompare(b.name);
        });

    return NextResponse.json(mapped);
}
