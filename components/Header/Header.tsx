"use client";

import Link from "next/link";
import { NavMenu } from "./NavMenu";
import { MobileNav } from "./MobileNav";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 40);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-stretch gap-8 border-b",
        isScrolled
          ? "border-border bg-card/95 shadow-sm backdrop-blur"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="flex items-center px-6">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2 font-heading text-2xl font-semibold tracking-[-0.03em] transition hover:bg-accent",
            isScrolled ? "text-foreground" : "text-white hover:text-foreground",
          )}
        >
          <span>地元紹介ページ</span>
        </Link>
      </div>

      <div className="hidden md:block">
        <NavMenu isHeaderTransparent={!isScrolled} />
      </div>
      <div className="ml-auto flex items-center px-4 md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
