import { getCatalog } from "@/lib/getProducts";
import type { CompatCategory } from "@/lib/getProducts";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { FilterGrid } from "./FilterGrid";
import Link from "next/link";
import { supabase } from "@/lib/db";
import type { Metadata } from "next";
import { Suspense } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.oando.co.in";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categoryId } = await params;
  const catalog = await getCatalog();
  const category = catalog.find((c: CompatCategory) => c.id === categoryId);
  if (!category) return {};
  const displayName = categoryId === "oando-seating" ? "Chairs" : category.name;
  const displayDescription =
    categoryId === "oando-seating"
      ? "Professional furniture systems for chairs"
      : category.description;
  const title = `${displayName} | One and Only Furniture`;
  const description = `${displayDescription} Browse our full range of ${displayName.toLowerCase()} in Patna, Bihar.`;
  const url = `${BASE_URL}/products/${categoryId}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from("categories").select("id");
  if (error || !data) {
    console.error("Error fetching categories for static params:", error);
    return [];
  }
  return data.map((c) => ({ category: c.id }));
}

// Loading skeleton for the grid while Supabase data resolves
function GridSkeleton() {
  return (
    <div className="container-wide py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-neutral-100 rounded-sm aspect-4/3"
          />
        ))}
      </div>
    </div>
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryId } = await params;
  const catalog = await getCatalog();
  const category = catalog.find((c: CompatCategory) => c.id === categoryId);

  if (catalog.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-white">
        <h1 className="text-2xl font-light mb-4 text-neutral-900">
          Workspace Engineering Engine - Offline
        </h1>
        <p className="max-w-md text-neutral-500 mb-8">
          This system requires a connection to the Supabase product catalog.
          Please ensure{" "}
          <code className="bg-neutral-100 px-1 py-0.5 rounded">
            NEXT_PUBLIC_SUPABASE_URL
          </code>
          is configured in your environment variables.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-2 bg-primary text-white text-sm tracking-widest uppercase font-bold"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  if (!category) {
    notFound();
  }
  const normalizedCategory: CompatCategory =
    categoryId === "oando-seating"
      ? {
          ...category,
          name: "Chairs",
          description: "Professional furniture systems for chairs",
        }
      : category;

  const firstProductWithImage = normalizedCategory.series
    .flatMap((series) => series.products)
    .find((product) => product.images?.[0] || product.flagshipImage);
  const heroImage =
    firstProductWithImage?.images?.[0] ||
    firstProductWithImage?.flagshipImage ||
    "/images/hero/hero-1.webp";

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title={normalizedCategory.name}
        subtitle={normalizedCategory.description}
        showButton={false}
        backgroundImage={heroImage}
      />
      <Suspense fallback={<GridSkeleton />}>
        <FilterGrid category={normalizedCategory} categoryId={categoryId} />
      </Suspense>
    </main>
  );
}

