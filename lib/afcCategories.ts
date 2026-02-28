export const AFC_CATEGORY_ORDER = [
  "oando-workstations",
  "oando-seating",
  "oando-tables",
  "oando-storage",
  "oando-soft-seating",
  "oando-collaborative",
  "oando-educational",
] as const;

export const AFC_CATEGORY_LABELS: Record<string, string> = {
  "oando-workstations": "Workstation",
  "oando-seating": "Seating Solution",
  "oando-tables": "Table",
  "oando-storage": "Storage",
  "oando-soft-seating": "Soft Seating",
  "oando-collaborative": "Space Division",
  "oando-educational": "Educational",
};

export const AFC_CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "oando-workstations":
    "Professional furniture systems for workstation environments",
  "oando-seating":
    "Professional furniture systems for seating solutions",
  "oando-tables": "Professional furniture systems for table environments",
  "oando-storage": "Professional furniture systems for storage environments",
  "oando-soft-seating":
    "Professional furniture systems for soft seating environments",
  "oando-collaborative":
    "Professional furniture systems for space division",
  "oando-educational":
    "Professional furniture systems for educational environments",
};

export function getAfcCategoryLabel(
  categoryId: string,
  fallback: string,
): string {
  return AFC_CATEGORY_LABELS[categoryId] || fallback;
}

export function getAfcCategoryDescription(
  categoryId: string,
  fallback: string,
): string {
  return AFC_CATEGORY_DESCRIPTIONS[categoryId] || fallback;
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
