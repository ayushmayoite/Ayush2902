import { NextResponse } from "next/server";
import { supabase } from "@/lib/db";

export async function GET() {
    const { data, error } = await supabase
        .from("categories")
        .select("id, name")
        .order("name", { ascending: true });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const mapped = (data ?? []).map((category) =>
        category.id === "oando-seating"
            ? { ...category, name: "Chairs" }
            : category,
    );

    return NextResponse.json(mapped);
}
