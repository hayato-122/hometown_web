import Link from "next/link";
import { AppBreadcrumbs } from "@/components/AppBreadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { hometownCategories } from "@/data/hometownCategories";
import { HomeCarousel } from "@/components/HomeCarousel";

export default function Home() {
  return (
    <section className="home-section relative overflow-hidden rounded-lg border border-border bg-card/90 p-6 shadow-panel">
      <div className="home-hover-backdrop pointer-events-none absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-300"></div>

      <AppBreadcrumbs items={[{ label: "地元紹介ページ" }]}></AppBreadcrumbs>

      <h1 className="mt-2 text-3xl font-bold text-foreground">
        明石市へ　ようこそ
      </h1>

      <HomeCarousel></HomeCarousel>

      <div className="grid grid-cols-3 gap-5 pt-10 max-sm:grid-cols-1 max-lg:grid-cols-2">
        {hometownCategories.map((category) => (
          <Link
            key={category.key}
            href={category.href}
            className="category-card group relative z-0 block overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm transition hover:z-20 hover:-translate-y-1 hover:shadow-lg"
          >
            <Card className="h-full overflow-hidden border-border bg-card p-0 shadow-sm transition group-hover:shadow-lg">
              <div
                className="aspect-video bg-linear-to-br from-secondary to-brand-soft bg-cover bg-center transition group-hover:scale-105"
                style={{
                  backgroundImage: `url('${category.image}')`,
                }}
              ></div>

              <CardContent className="p-4">
                <p className="text-xl font-bold text-foreground">
                  {category.title}
                </p>
                <p className="mt-2 text-base leading-6 text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
