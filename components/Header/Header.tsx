"use client";

import Link from "next/link";
import { NavMenu } from "./NavMenu";
import { MobileNav } from "./MobileNav";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="py-2 sticky top-0 z-50 flex items-stretch gap-8 border-b border-border bg-card/95 shadow-sm backdrop-blur">
      <div className="flex items-center px-6">
        <Link
          href="/"
          onClick={(event) => {
            if (pathname !== "/") return;

            event.preventDefault();
            window.location.reload();
            window.scrollTo({ top: 0 });
          }}
          className="group flex h-12 items-center gap-2 whitespace-nowrap rounded-xl px-2.5 text-foreground transition hover:bg-accent"
        >
          <div className="relative size-10 place-items-center rounded-xl">
            <Image
              src="/images/hometown/brand/tako_logo.png"
              alt="ロゴ"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-semibold tracking-[-0.02em] text-foreground md:text-lg">
              明石ガイド
            </span>
            <span className="mt-0.5 text-[9px] font-semibold leading-none tracking-[0.14em] text-muted-foreground">
              AKASHI GUIDE
            </span>
          </span>
        </Link>
      </div>

      <div className="hidden md:block">
        <NavMenu />
      </div>
      <div className="ml-auto flex items-center px-4 md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
