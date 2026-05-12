import Link from "next/link";
import { AppBreadcrumbs } from "@/components/AppBreadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { hometownCategories } from "@/data/hometownCategories";
import { HomeCarousel } from "@/components/HomeCarousel";

export default function Home() {
  return (
    <section className="home-section relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-panel md:p-8">
      <div className="home-hover-backdrop pointer-events-none absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-300"></div>

      <AppBreadcrumbs items={[{ label: "地元紹介ページ" }]}></AppBreadcrumbs>

      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.03em] text-foreground">
        明石市へ　ようこそ
      </h1>

      <HomeCarousel></HomeCarousel>

      <div className="grid grid-cols-3 gap-6 pt-12 max-sm:grid-cols-1 max-lg:grid-cols-2">
        {hometownCategories.map((category) => (
          <Link
            key={category.key}
            href={category.href}
            className="category-card group relative z-0 block rounded-2xl border border-border bg-card text-left shadow-panel transition hover:z-20 hover:-translate-y-1 hover:border-primary/40"
          >
            <Card className="h-full border-border bg-card p-3 transition">
              <div
                className="aspect-video rounded-[24px] bg-secondary bg-cover bg-center transition group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url('${category.image}')`,
                }}
              ></div>

              <CardContent className="px-1 pb-1 pt-4">
                <p className="font-heading text-xl font-semibold tracking-[-0.02em] text-foreground">
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
