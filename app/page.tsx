"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { hometownCategories } from "@/data/hometownCategories";
import { HomeCarousel } from "@/components/HomeCarousel";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <section className="relative left-1/2 -mt-8 min-h-[calc(100svh-64px)] w-screen -translate-x-1/2 overflow-hidden">
        <Image
          src="/images/明石海峡大橋_(51914616620).jpg"
          alt="明石海峡大橋"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/5" />
        <div className="relative z-5 flex min-h-[calc(100svh-64px)] items-center justify-center px-6 md:px-12">
          <div className="max-w-2xl translate-y-10 text-white text-shadow-lg text-shadow-black/99">
            <p className="text-center text-xl font-semibold tracking-[0.2em] md:text-2xl">
              AKASHI HOMETOWN GUIDE
            </p>
            <h1 className="mt-4 text-center font-heading text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              明石市の魅力を知ろう
            </h1>
          </div>
        </div>
      </section>

      <section>
        <HomeCarousel />

        <div className="grid grid-cols-3 gap-6 pt-12 max-sm:grid-cols-1 max-lg:grid-cols-2">
          {hometownCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 48, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.2,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={category.href}
                className="category-card group relative z-0 block rounded-2xl border border-border bg-card text-left shadow-panel transition hover:z-20 hover:-translate-y-1 hover:border-primary/40"
              >
                <Card className="h-full border-border bg-card p-3 transition">
                  <div
                    className="aspect-video rounded-[24px] bg-secondary bg-cover bg-center transition group-hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url('${category.image}')`,
                    }}
                  />

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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
