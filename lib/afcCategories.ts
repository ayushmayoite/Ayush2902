import type { CompatCategory, CompatProduct, CompatSeries } from "@/lib/getProducts";

export const AFC_CATEGORY_ORDER = [
  "chairs-mesh",
  "chairs-others",
  "soft-seating",
  "cafe-seating",
  "desks-cabin-tables",
  "workstations",
  "meeting-conference-tables",
  "storages",
  "education",
  "others-1",
  "others-2",
] as const;

export type RequestedCategoryId = (typeof AFC_CATEGORY_ORDER)[number];

export const AFC_CATEGORY_LABELS: Record<RequestedCategoryId, string> = {
  "chairs-mesh": "Chairs (Mesh)",
  "chairs-others": "Chairs (Others)",
  "soft-seating": "Soft Seating",
  "cafe-seating": "Cafe Seating",
  "desks-cabin-tables": "Desks (Cabin Tables)",
  workstations: "Workstations",
  "meeting-conference-tables": "Meeting and Conference Tables",
  storages: "Storages",
  education: "Education",
  "others-1": "Others 1",
  "others-2": "Others 2",
};

export const AFC_CATEGORY_DESCRIPTIONS: Record<RequestedCategoryId, string> = {
  "chairs-mesh": "Mesh-back seating for ergonomic, breathable daily use.",
  "chairs-others": "Non-mesh task and visitor seating systems.",
  "soft-seating": "Lounge and comfort-focused seating collections.",
  "cafe-seating": "Cafe, breakout, and informal dining seating.",
  "desks-cabin-tables": "Desks and cabin tables for leadership workspaces.",
  workstations: "Modular workstation systems for team productivity.",
  "meeting-conference-tables":
    "Meeting and conference table systems for collaboration.",
  storages: "Office storage systems including cabinets and lockers.",
  education: "Educational furniture for classrooms and institutions.",
  "others-1": "Additional specialized workspace products.",
  "others-2": "Additional workspace products and accessories.",
};

type ProductWithContext = {
  product: CompatProduct;
  baseCategoryId: string;
  seriesName: string;
};

function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function productText(item: ProductWithContext): string {
  const p = item.product;
  return normalize(
    [
      p.id,
      p.slug || "",
      p.name,
      p.description || "",
      item.baseCategoryId,
      item.seriesName,
      p.metadata?.category || "",
      p.metadata?.subcategory || "",
      ...(p.metadata?.tags || []),
    ].join(" "),
  );
}

function hasToken(text: string, token: string): boolean {
  const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i");
  return re.test(text);
}

export function classifyToRequestedCategory(
  item: ProductWithContext,
): RequestedCategoryId {
  const text = productText(item);
  const baseCategoryId = item.baseCategoryId;

  if (baseCategoryId === "oando-educational") return "education";
  if (baseCategoryId === "oando-storage") return "storages";
  if (baseCategoryId === "oando-tables") return "meeting-conference-tables";
  if (baseCategoryId === "oando-collaborative") return "others-1";

  if (
    hasToken(text, "cafe") ||
    hasToken(text, "bar stool") ||
    hasToken(text, "stool")
  ) {
    return "cafe-seating";
  }

  if (baseCategoryId === "oando-soft-seating") return "soft-seating";

  if (baseCategoryId === "oando-workstations") {
    if (
      hasToken(text, "desk") ||
      hasToken(text, "cabin") ||
      hasToken(text, "executive table")
    ) {
      return "desks-cabin-tables";
    }
    return "workstations";
  }

  if (baseCategoryId === "oando-seating") {
    if (hasToken(text, "mesh")) return "chairs-mesh";
    return "chairs-others";
  }

  return "others-2";
}

export function getAfcCategoryLabel(categoryId: string, fallback: string): string {
  return AFC_CATEGORY_LABELS[categoryId as RequestedCategoryId] || fallback;
}

export function getAfcCategoryDescription(
  categoryId: string,
  fallback: string,
): string {
  return AFC_CATEGORY_DESCRIPTIONS[categoryId as RequestedCategoryId] || fallback;
}

export function getAfcCategoryHref(categoryId: string): string {
  return `/products/${categoryId}`;
}

export function buildAfcCategoryNav(categoryIds: readonly string[]) {
  return categoryIds.map((id) => ({
    id,
    label: getAfcCategoryLabel(id, id),
    href: getAfcCategoryHref(id),
  }));
}

export function buildRequestedCategoryCatalog(
  baseCatalog: CompatCategory[],
): CompatCategory[] {
  const flat: ProductWithContext[] = [];
  for (const category of baseCatalog) {
    for (const series of category.series) {
      for (const product of series.products) {
        flat.push({
          product,
          baseCategoryId: category.id,
          seriesName: series.name,
        });
      }
    }
  }

  const buckets = new Map<RequestedCategoryId, ProductWithContext[]>();
  for (const id of AFC_CATEGORY_ORDER) buckets.set(id, []);
  for (const item of flat) {
    const bucketId = classifyToRequestedCategory(item);
    buckets.get(bucketId)!.push(item);
  }

  return AFC_CATEGORY_ORDER.map((id) => {
    const products = buckets.get(id) || [];
    const seriesMap = new Map<string, CompatProduct[]>();
    for (const item of products) {
      const key = item.seriesName || "Series";
      if (!seriesMap.has(key)) seriesMap.set(key, []);
      seriesMap.get(key)!.push(item.product);
    }

    const series: CompatSeries[] = [...seriesMap.entries()]
      .map(([name, sProducts], idx) => ({
        id: `${id}-series-${idx + 1}`,
        name,
        description: `${AFC_CATEGORY_LABELS[id]} series`,
        products: sProducts.sort((a, b) => a.name.localeCompare(b.name)),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return {
      id,
      name: AFC_CATEGORY_LABELS[id],
      description: AFC_CATEGORY_DESCRIPTIONS[id],
      series,
    };
  });
}
