"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { HometownItem } from "@/types/hometown";

import { Card, CardContent } from "@/components/ui/card";

type ItemListProps = {
  items: HometownItem[];
};

export function ItemList({ items }: ItemListProps) {
  return (
    <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-lg:grid-cols-2">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 56, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.05,
            delay: Math.min(index * 0.05, 0.18),
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link
            href={`/${item.categoryKey}/${item.id}`}
            className="group block h-full rounded-2xl transition duration-300 hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Card className="h-full bg-card p-3 shadow-panel ring-1 ring-border/80 transition duration-300 group-hover:ring-primary/40">
              <div className="relative aspect-video overflow-hidden rounded-[24px] bg-secondary">
                <Image
                  src={item.mainImage}
                  alt={item.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <CardContent className="px-3 pb-3 pt-5">
                <div className="mb-3 flex items-center justify-between gap-3">
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
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.shortText}
                </p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
