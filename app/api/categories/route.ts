import { NextResponse } from "next/server";
import { getCatalog } from "@/lib/getProducts";
import { AFC_CATEGORY_ORDER, buildRequestedCategoryCatalog } from "@/lib/afcCategories";

export async function GET() {
  try {
    const baseCatalog = await getCatalog();
    const requestedCatalog = buildRequestedCategoryCatalog(baseCatalog);
    const mapped = requestedCatalog
      .map((category) => ({
        id: category.id,
        name: category.name,
        count: category.series.reduce(
          (sum, series) => sum + series.products.length,
          0,
        ),
      }))
      .sort((a, b) => {
        const aIdx = AFC_CATEGORY_ORDER.indexOf(a.id as (typeof AFC_CATEGORY_ORDER)[number]);
        const bIdx = AFC_CATEGORY_ORDER.indexOf(b.id as (typeof AFC_CATEGORY_ORDER)[number]);
        const aRank = aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx;
        const bRank = bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx;
        return aRank - bRank;
      });

    return NextResponse.json(mapped);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Category fetch failed" },
      { status: 500 },
    );
  }
}
