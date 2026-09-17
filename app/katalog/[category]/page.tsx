import { permanentRedirect } from "next/navigation";
import {
  getCategory,
  getCategoryPath,
  isCatalogCategoryId,
} from "@/lib/catalog";

type PageProps = {
  params: Promise<{ category: string }>;
};

/** Legacy /katalog/:id → /koleksiyon/:slug */
export default async function LegacyCatalogRedirect({ params }: PageProps) {
  const { category } = await params;
  if (!isCatalogCategoryId(category)) {
    permanentRedirect("/#spaces");
  }
  const found = getCategory(category);
  permanentRedirect(found ? getCategoryPath(found.id) : "/#spaces");
}
