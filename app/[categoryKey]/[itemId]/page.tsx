import { hometownItems } from "@/data/hometownDetails";
import { notFound } from "next/navigation";
import { AppBreadcrumbs } from "@/components/AppBreadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DetailSectionNav } from "@/components/DetailSectionNav";

type DetailPageProps = {
  params: Promise<{
    categoryKey: string;
    itemId: string;
  }>;
};

export default async function DetailPage({ params }: DetailPageProps) {
  const { categoryKey, itemId } = await params;

  const item = hometownItems.find(
    (hometownItem) =>
      hometownItem.categoryKey === categoryKey && hometownItem.id === itemId,
  );

  if (!item) {
    notFound();
  }

  return (
    <article className="grid grid-cols-[220px_1fr] gap-6 max-md:grid-cols-1">
      <DetailSectionNav />
      <div className="space-y-5">
        <AppBreadcrumbs
          items={[
            { label: "地元紹介ページ", href: "/" },
            { label: item.categoryName, href: `/${item.categoryKey}` },
            { label: item.title },
          ]}
        />

        <section
          id="highlights"
          className="scroll-section scroll-mt-24 overflow-hidden rounded-lg border border-border bg-card/90 shadow-panel"
        >
          <AspectRatio ratio={18 / 9}>
            <div
              className="h-full w-full bg-linear-to-br from-secondary to-brand-soft bg-cover bg-center"
              style={{ backgroundImage: `url('${item.mainImage}')` }}
            ></div>
          </AspectRatio>
          <div className="p-6">
            <p className="text-base font-bold text-destructive">見どころ</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              {item.title}
            </h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              {item.highlights}
            </p>
          </div>
        </section>

        <section
          id="photos"
          className="scroll-section scroll-mt-24 rounded-lg border border-border bg-card/90 p-6 shadow-panel"
        >
          <p className="text-base font-bold text-destructive">写真</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground">
            写真で見る
          </h2>

          <div className="mt-5 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            {item.galleryImages.map((galleryImage) => (
              <div key={galleryImage} className="overflow-hidden rounded-md">
                <AspectRatio ratio={16 / 9}>
                  <div
                    className="h-full w-full bg-linear-to-br from-secondary to-brand-soft bg-cover bg-center"
                    style={{ backgroundImage: `url('${galleryImage}')` }}
                  ></div>
                </AspectRatio>
              </div>
            ))}
          </div>
        </section>

        <section
          id="access"
          className="scroll-section scroll-mt-24 rounded-lg border border-border bg-card/90 p-6 shadow-panel"
        >
          <p className="text-base font-bold text-destructive">アクセス</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground">地図</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[1fr_260px]">
            <div className="overflow-hidden rounded-lg border border-border bg-secondary">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="h-full w-full"
                  src={item.googleMapEmbedUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </AspectRatio>
            </div>

            <Card className="border-border bg-card p-0 shadow-sm">
              <CardContent className="grid gap-4 p-5">
                <div>
                  <p className="text-sm font-bold text-destructive">最寄り駅</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    {item.nearestStation}
                  </p>
                </div>

                <Separator className="bg-border"></Separator>

                <div>
                  <p className="text-sm font-bold text-destructive">
                    駅からの時間
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    徒歩{item.walkingTime}分
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </article>
  );
}
