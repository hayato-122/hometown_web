"use client";

import Link from "next/link";
import { NavMenu } from "./NavMenu";
import { MobileNav } from "./MobileNav";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const isHome = pathname === "/";
  const isHeaderTransparent = isHome && !hasScrolled;

  useEffect(() => {
    const updateHeaderState = () => {
      setHasScrolled(window.scrollY > 24);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex items-stretch gap-8 border-b py-2 transition-colors duration-300",
        !isHeaderTransparent
          ? "border-border bg-card shadow-sm"
          : "border-transparent bg-transparent shadow-none",
      )}
    >
      <div className="flex items-center px-6">
        <Link
          href="/"
          onClick={(event) => {
            if (pathname !== "/") return;

            event.preventDefault();
            window.location.reload();
            window.scrollTo({ top: 0 });
          }}
          className={cn(
            "group flex h-12 items-center gap-2 whitespace-nowrap rounded-xl px-2.5 transition",
            isHeaderTransparent
              ? "bg-background/75 text-foreground shadow-sm hover:bg-background/90"
              : "text-foreground hover:bg-accent",
          )}
        >
          <div className="relative size-10 place-items-center rounded-xl">
            <Image
              src="/icon0.svg"
              alt="ロゴ"
              fill
              className="object-contain"
              sizes="40px"
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

      <div className="hidden h-12 items-center md:flex">
        <NavMenu isHeaderTransparent={isHeaderTransparent} />
      </div>

      <div className="ml-auto flex items-center px-4 md:hidden">
        <MobileNav isHeaderTransparent={isHeaderTransparent} />
      </div>
    </header>
  );
}
