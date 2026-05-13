import { hometownItems } from "@/data/hometownDetails";
import { ItemList } from "@/components/ItemList";
import { AppBreadcrumbs } from "@/components/AppBreadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
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
    <ScrollReveal y={32}>
      <section className="rounded-3xl border border-border bg-card p-6 shadow-panel md:p-8">
        <div className="mb-6">
          <AppBreadcrumbs
            items={[
              { label: "地元紹介ページ", href: "/" },
              { label: categoryName },
            ]}
          />

          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground">
            {categoryName}の一覧
          </h1>
        </div>
        <ItemList items={currentItems} />
      </section>
    </ScrollReveal>
  );
}
