import { hometownItems } from "@/data/hometownDetails";
import { ItemList } from "@/components/ItemList";
import { AppBreadcrumbs } from "@/components/AppBreadcrumbs";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: Promise<{
    categoryKey: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryKey } = await params;

  const currentItems = hometownItems.filter(
    (item) => item.categoryKey === categoryKey,
  );

  if (currentItems.length === 0) {
    notFound();
  }

  const categoryName = currentItems[0].categoryName;

  return (
    <section className="rounded-lg border border-border bg-card/90 p-6 shadow-panel">
      <div className="mb-5">
        <AppBreadcrumbs
          items={[
            { label: "地元紹介ページ", href: "/" },
            { label: categoryName },
          ]}
        />

        <h1 className="mt-2 text-2xl font-bold text-foreground">
          {categoryName}の一覧
        </h1>
      </div>
      <ItemList items={currentItems} />
    </section>
  );
}
