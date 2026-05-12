"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CarouselApi } from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { hometownCategories } from "@/data/hometownCategories";

export function HomeCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
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

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
      }}
      className="mx-auto mt-8 w-full max-w-5xl"
    >
      <CarouselContent className="-ml-6">
        {hometownCategories.map((category, index) => {
          const distance = Math.abs(index - current);
          const isCenter = distance === 0;
          const isSide = distance === 1;

          return (
            <CarouselItem
              key={category.key}
              className="basis-[72%] pl-6 md:basis-1/2 lg:basis-[38%]"
            >
              <Link
                href={category.href}
                className={cn(
                  "group block overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm transition-all duration-500 ease-out",
                  isCenter && "z-20 scale-100 opacity-100 blur-0",
                  isSide && "z-10 scale-90 opacity-70 blur-[2px]",
                  !isCenter && !isSide && "z-0 scale-75 opacity-0 blur-sm",
                )}
              >
                <Card className="h-full overflow-hidden border-border bg-card p-0 shadow-sm transition group-hover:shadow-lg">
                  <div
                    className="aspect-video bg-linear-to-br from-secondary to-brand-soft bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${category.image}')`,
                    }}
                  />

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
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious className="left-2 z-30" />
      <CarouselNext className="right-2 z-30" />
    </Carousel>
  );
}
