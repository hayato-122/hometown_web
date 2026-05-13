import { HomeCarousel } from "@/components/HomeCarousel";
import { HomeCategoryGrid } from "@/components/HomeCategoryGrid";
import { HeroIntro } from "@/components/HeroIntro";
import Image from "next/image";

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
        <div className="relative z-10 flex min-h-[calc(100svh-64px)] items-center justify-center px-6 md:px-12">
          <HeroIntro />
        </div>
      </section>

      <section className="py-16">
        <HomeCarousel />

        <div className="pt-12">
          <HomeCategoryGrid />
        </div>
      </section>
    </div>
  );
}
