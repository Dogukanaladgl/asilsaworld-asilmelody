import { notFound } from "next/navigation";
import CatalogCategoryView from "@/components/layout/CatalogCategoryView";
import { isCatalogCategoryId } from "@/lib/catalog";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return [
    { category: "living" },
    { category: "bedroom" },
    { category: "bedset" },
    { category: "dining" },
    { category: "lamia" },
    { category: "others" },
  ];
}

export default async function CatalogCategoryPage({ params }: PageProps) {
  const { category } = await params;
  if (!isCatalogCategoryId(category)) notFound();
  return <CatalogCategoryView categoryId={category} />;
}
