import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogCategoryView from "@/components/layout/CatalogCategoryView";
import {
  catalogCategories,
  catalogYear,
  getCategoryBySlug,
  getCategoryCover,
} from "@/lib/catalog";
import { buildMetadata, siteConfig } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return catalogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return buildMetadata({
      title: `Koleksiyon | ${siteConfig.name}`,
      description: siteConfig.description,
      path: `/koleksiyon/${slug}`,
      noIndex: true,
    });
  }

  const title = `${category.label.tr} | ${catalogYear} Katalog | ${siteConfig.name}`;
  return buildMetadata({
    title,
    description: category.blurb.tr,
    path: `/koleksiyon/${category.slug}`,
    image: getCategoryCover(category.id),
  });
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  return <CatalogCategoryView categoryId={category.id} />;
}
