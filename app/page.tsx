import { HomeCarousel } from "@/components/HomeCarousel";
import { HomeCategoryGrid } from "@/components/HomeCategoryGrid";
import { HeroIntro } from "@/components/HeroIntro";
import Image from "next/image";
import { getImagePath } from "../data/getImagePath";

export default function Home() {
  return (
    <div>
      <section className="relative left-1/2 max-md:-mt-18.25 max-md:min-h-svh w-screen -translate-x-1/2 overflow-hidden md:-mt-18.25 md:min-h-[calc(100svh-380px)]">
        <Image
          src={getImagePath("homepage-top")}
          alt="明石海峡大橋"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-foreground/30 via-foreground/24 to-foreground/44" />
        <div className="relative z-10 flex max-md:min-h-svh items-center justify-center px-6 py-1 md:min-h-[calc(100svh-380px)] md:px-12">
          <HeroIntro />
        </div>
      </section>

      <section className="pb-16">
        <HomeCarousel />

        <div id="hometown-categories" className="scroll-mt-32 pt-12">
          <HomeCategoryGrid />
        </div>
      </section>
    </div>
  );
}
