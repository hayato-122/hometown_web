import { hometownItems } from "@/data/hometownDetails";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AppBreadcrumbs } from "@/components/AppBreadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DetailSectionNav } from "@/components/DetailSectionNav";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AccessTracker } from "@/components/AccessTracker";

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
    <div className="space-y-6">
      <AccessTracker itemId={item.id} />
      <ScrollReveal y={24}>
        <AppBreadcrumbs
          items={[
            { label: "地元紹介ページ", href: "/" },
            { label: item.categoryName, href: `/${item.categoryKey}` },
            { label: item.title },
          ]}
        />
      </ScrollReveal>

      <article className="grid grid-cols-[220px_1fr] gap-6 max-md:grid-cols-1">
        <DetailSectionNav />

        <div className="space-y-6">
          <ScrollReveal>
            <section
              id="highlights"
              className="scroll-section scroll-mt-32 overflow-hidden rounded-2xl bg-card shadow-panel ring-1 ring-border/80"
            >
              <AspectRatio ratio={18 / 9} className="bg-secondary">
                <Image
                  src={item.mainImage}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 980px, 100vw"
                  className="object-cover"
                  priority
                />
              </AspectRatio>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                  HIGHLIGHTS
                </p>
                <h1 className="mt-2 font-heading text-4xl font-semibold leading-tight tracking-[-0.03em] text-foreground">
                  {item.title}
                </h1>
                <p className="mt-4 whitespace-pre-line break-words text-base leading-[1.9] text-muted-foreground md:text-lg md:leading-[1.85]">
                  {item.highlights}
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section
              id="photos"
              className="scroll-section scroll-mt-32 rounded-2xl bg-card p-6 shadow-panel ring-1 ring-border/80"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                PHOTOS
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.03em] text-foreground">
                写真で見る
              </h2>

              <PhotoGallery images={item.galleryImages} title={item.title} />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section
              id="access"
              className="scroll-section scroll-mt-32 rounded-2xl bg-card p-6 shadow-panel ring-1 ring-border/80"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                ACCESS
              </p>
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

                <Card className="bg-card p-0 shadow-panel ring-1 ring-border/80">
                  <CardContent className="grid gap-4 p-5">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                        NEAREST STATION
                      </p>
                      <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                        {item.nearestStation}
                      </p>
                    </div>

                    <Separator className="bg-border"></Separator>

                    <div>
                      <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                        WALKING TIME
                      </p>
                      <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                        徒歩{item.walkingTime}分
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </article>
    </div>
  );
}
