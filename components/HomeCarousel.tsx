"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { CarouselApi } from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { hometownItems } from "@/data/hometownDetails";

export function HomeCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(hometownItems.length);
  const autoScrollTimerRef = useRef<number | null>(null);

  const clearAutoScrollTimer = useCallback(() => {
    if (autoScrollTimerRef.current === null) return;

    window.clearInterval(autoScrollTimerRef.current);
    autoScrollTimerRef.current = null;
  }, []);

  const startAutoScrollTimer = useCallback(() => {
    if (!api) return;

    clearAutoScrollTimer();

    autoScrollTimerRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 3000);
  }, [api, clearAutoScrollTimer]);

  const resetAutoScrollTimer = useCallback(() => {
    startAutoScrollTimer();
  }, [startAutoScrollTimer]);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    queueMicrotask(updateCurrent);

    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  useEffect(() => {
    startAutoScrollTimer();

    return () => {
      clearAutoScrollTimer();
    };
  }, [startAutoScrollTimer, clearAutoScrollTimer]);

  useEffect(() => {
    if (!api) return;

    api.on("pointerUp", resetAutoScrollTimer);

    return () => {
      api.off("pointerUp", resetAutoScrollTimer);
    };
  }, [api, resetAutoScrollTimer]);

  const formattedCurrent = String(current + 1).padStart(2, "0");
  const formattedCount = String(count).padStart(2, "0");
  const progress = count === 0 ? 0 : ((current + 1) / count) * 100;

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-background pb-10 pt-0 md:pb-12">
      <div className="mx-auto w-[min(1200px,calc(100%-32px))]">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {hometownItems.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <Link
                  href={`/${item.categoryKey}/${item.id}`}
                  className="group block h-full transition duration-300 hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <Card className="h-full overflow-hidden rounded-none border-border bg-card p-0 shadow-panel transition duration-300 group-hover:border-primary/40">
                    <div className="relative aspect-video overflow-hidden bg-secondary">
                      <Image
                        src={item.mainImage}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 46vw, 84vw"
                        className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-x-3 bottom-3">
                        <p className="translate-y-3 rounded-2xl bg-card/95 px-4 py-3 text-sm font-medium leading-6 text-foreground opacity-0 shadow-panel ring-1 ring-border/80 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                          {item.shortText}
                        </p>
                      </div>
                    </div>

                    <CardContent className="px-5 py-4">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                          {item.categoryName}
                        </p>
                        <p className="font-heading text-xs font-semibold text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>

                      <p className="font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground">
                        {item.title}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex items-center justify-end gap-4">
          <div className="h-px w-28 overflow-hidden bg-border md:w-40">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="font-heading text-sm font-semibold text-muted-foreground">
            <span className="text-foreground">{formattedCurrent}</span>
            <span className="mx-1">/</span>
            {formattedCount}
          </p>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="前のカテゴリを見る"
              onClick={() => {
                api?.scrollPrev();
                resetAutoScrollTimer();
              }}
              className="rounded-full bg-card shadow-panel"
            >
              <HugeiconsIcon
                icon={ArrowLeft01Icon}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>

            <Button
              type="button"
              variant="default"
              size="icon"
              aria-label="次のカテゴリを見る"
              onClick={() => api?.scrollNext()}
              className="rounded-full shadow-panel"
            >
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
