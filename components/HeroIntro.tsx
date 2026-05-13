"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroIntro() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="max-w-3xl translate-y-10 text-white text-shadow-lg text-shadow-black/99">
        <p className="text-center text-xl font-semibold tracking-[0.2em] md:text-2xl">
          AKASHI HOMETOWN GUIDE
        </p>
        <h1 className="mt-4 text-center font-heading text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
          明石市の魅力を知ろう
        </h1>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="max-w-3xl translate-y-10 text-white text-shadow-lg text-shadow-black/99"
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
          className="text-center text-xl font-semibold tracking-[0.2em] md:text-2xl"
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
    </motion.div>
  );
}
