import { hometownItems } from "@/data/hometownDetails";
import { notFound } from "next/navigation";
import { AppBreadcrumbs } from "@/components/AppBreadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DetailSectionNav } from "@/components/DetailSectionNav";
import { PhotoGallery } from "@/components/PhotoGallery";

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
    <div className="space-y-5">
      <AppBreadcrumbs
        items={[
          { label: "地元紹介ページ", href: "/" },
          { label: item.categoryName, href: `/${item.categoryKey}` },
          { label: item.title },
        ]}
      />

      <article className="grid grid-cols-[220px_1fr] gap-6 max-md:grid-cols-1">
        <DetailSectionNav />

        <div className="space-y-5">
          <section
            id="highlights"
            className="scroll-section scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-panel"
          >
            <AspectRatio ratio={18 / 9}>
              <div
                className="h-full w-full bg-secondary bg-cover bg-center"
                style={{ backgroundImage: `url('${item.mainImage}')` }}
              ></div>
            </AspectRatio>
            <div className="p-6">
              <p className="text-sm font-semibold text-primary">見どころ</p>
              <h2 className="mt-2 font-heading text-4xl leading-tight font-semibold tracking-[-0.03em] text-foreground">
                {item.title}
              </h2>
              <p className="mt-4 whitespace-pre-line text-lg leading-tight text-muted-foreground">
                {item.highlights}
              </p>
            </div>
          </section>

          <section
            id="photos"
            className="scroll-section scroll-mt-24 rounded-3xl border border-border bg-card p-6 shadow-panel"
          >
            <p className="text-sm font-semibold text-primary">写真</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground">
              写真で見る
            </h2>

            <PhotoGallery images={item.galleryImages} title={item.title} />
          </section>

          <section
            id="access"
            className="scroll-section scroll-mt-24 rounded-3xl border border-border bg-card p-6 shadow-panel"
          >
            <p className="text-sm font-semibold text-primary">アクセス</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground">
              地図
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_180px] lg:grid-cols-[minmax(0,1fr)_220px]">
              <div className="overflow-hidden rounded-[24px] border border-border bg-secondary">
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

              <Card className="border-border bg-card p-0 shadow-panel">
                <CardContent className="grid gap-4 p-5">
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      最寄り駅
                    </p>
                    <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                      {item.nearestStation}
                    </p>
                  </div>

                  <Separator className="bg-border"></Separator>

                  <div>
                    <p className="text-sm font-semibold text-primary">
                      駅からの時間
                    </p>
                    <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                      徒歩{item.walkingTime}分
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
