import { hometownItems } from "@/data/hometownDetails";
import { hometownCategories } from "@/data/hometownCategories";
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
  const currentCategory = hometownCategories.find(
    (category) => category.key === categoryKey,
  );

  if (!currentCategory || currentItems.length === 0) {
    notFound();
  }

  const categoryName = currentCategory.name;

  return (
    <ScrollReveal y={32}>
      <section className="space-y-8">
        <div className="border-b border-border pb-6">
          <AppBreadcrumbs
            items={[
              { label: "地元紹介ページ", href: "/" },
              { label: categoryName },
            ]}
          />

          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                {categoryName}
              </p>
              <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.03em] text-foreground">
                {categoryName}の一覧
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                {currentCategory.description}
              </p>
            </div>

            <p className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-muted-foreground">
              {String(currentItems.length).padStart(2, "0")} 件
            </p>
          </div>
        </div>

        <ItemList items={currentItems} />
      </section>
    </ScrollReveal>
  );
}
