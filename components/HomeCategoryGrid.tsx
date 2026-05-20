"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";
import { hometownCategories } from "@/data/hometownCategories";

export function HomeCategoryGrid() {
  return (
    <div className="home-section relative">
      <div className="home-hover-backdrop pointer-events-none absolute inset-0 z-10 rounded-3xl bg-background/70 opacity-0 transition duration-300" />
      <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-lg:grid-cols-2">
        {hometownCategories.map((category) => (
          <motion.div
            key={category.key}
            className="relative z-0 hover:z-20 focus-within:z-20"
            initial={{ opacity: 0, y: 72, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 1.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={category.href}
              className="category-card group relative z-0 block h-full rounded-2xl transition duration-300 hover:z-20 hover:-translate-y-1 focus-visible:z-20 focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Card className="h-full bg-card p-3 shadow-panel ring-1 ring-border/80 transition duration-300 group-hover:ring-primary/40">
                <div className="relative aspect-video overflow-hidden rounded-[24px] bg-secondary">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <CardContent className="px-3 pb-3 pt-5">
                  <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                    {category.name}
                  </p>
                  <p className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground">
                    {category.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
