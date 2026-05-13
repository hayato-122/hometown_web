"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
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
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto mt-8 w-full max-w-5xl"
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {hometownCategories.map((category, index) => {
            const rawDistance = Math.abs(index - current);
            const distance = Math.min(
              rawDistance,
              hometownCategories.length - rawDistance,
            );
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
                    "group block rounded-2xl border border-border bg-card text-left transition-all duration-500 ease-out focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none",
                    isCenter && "z-20 scale-100 border-primary/30 opacity-100 blur-0 shadow-panel",
                    isSide && "z-10 scale-90 opacity-70 blur-[2px]",
                    !isCenter && !isSide && "z-0 scale-75 opacity-0 blur-sm",
                  )}
                >
                  <Card className="h-full border-border bg-card p-3 transition">
                    <div className="relative aspect-video overflow-hidden rounded-[24px] bg-secondary">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 72vw"
                        className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

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
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-2 z-30" />
        <CarouselNext className="right-2 z-30" />
      </Carousel>
    </motion.div>
  );
}
