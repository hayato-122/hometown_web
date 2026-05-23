"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroIntro() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="max-w-3xl translate-y-10 text-white drop-shadow-[0_2px_18px_rgb(0_0_0/0.45)]">
        <p className="text-center text-sm font-semibold tracking-[0.18em] md:text-base">
          AKASHI HOMETOWN GUIDE
        </p>
        <h1 className="mt-4 text-center font-heading text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
          明石市の魅力を知ろう
        </h1>
        <div className="mt-7 flex justify-center">
          <Button asChild className="rounded-full px-6 shadow-panel">
            <Link href="#hometown-categories">カテゴリを見る</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="max-w-3xl translate-y-10 text-white drop-shadow-[0_2px_18px_rgb(0_0_0/0.45)]"
    >
      <div className="overflow-hidden">
        <motion.p
          variants={{
            hidden: { y: "110%", opacity: 0 },
            show: { y: "0%", opacity: 1 },
          }}
          transition={{
            duration: 1.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center text-sm font-semibold tracking-[0.18em] md:text-base"
        >
          AKASHI HOMETOWN GUIDE
        </motion.p>
      </div>

      <div className="mt-4 overflow-hidden">
        <motion.h1
          variants={{
            hidden: { y: "110%", opacity: 0 },
            show: { y: "0%", opacity: 1 },
          }}
          transition={{
            duration: 1.2,
            delay: 0.14,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center font-heading text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
        >
          明石市の魅力を知ろう
        </motion.h1>
      </div>
      <motion.div
        className="mt-7 flex justify-center"
        variants={{
          hidden: { y: 20, opacity: 0 },
          show: { y: 0, opacity: 1 },
        }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          ease: [0.16, 1, 0.7, 1],
        }}
      >
        <Button asChild className="rounded-full px-6 shadow-panel">
          <Link href="#hometown-categories">カテゴリを見る</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
