"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hometownCategories } from "@/data/hometownCategories";

type MobileNavProps = {
  isHeaderTransparent?: boolean;
};

export function MobileNav({ isHeaderTransparent = false }: MobileNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const isCreditsActive = pathname === "/credits";

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) return;

      if (!navRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={navRef} className="relative md:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        onClick={() => setIsOpen((current) => !current)}
        className={cn(
          "rounded-xl transition",
          isHeaderTransparent
            ? "bg-background/75 text-foreground shadow-sm hover:bg-background/90"
            : "text-foreground hover:bg-accent",
        )}
      >
        <span className="sr-only">メニューを開く</span>
        <HugeiconsIcon
          icon={isOpen ? Cancel01Icon : Menu01Icon}
          strokeWidth={2}
          className="size-5"
          aria-hidden="true"
        />
      </Button>

      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute right-0 top-full z-50 mt-2 grid w-[min(320px,calc(100vw-32px))] gap-2 rounded-2xl border border-border bg-popover p-2 text-popover-foreground shadow-2xl"
        >
          <p className="px-3 pt-2 text-xs font-semibold text-muted-foreground">
            CATEGORIES
          </p>

          {hometownCategories.map((category) => {
            const isActive =
              pathname === category.href ||
              pathname.startsWith(`${category.href}/`);

            return (
              <Link
                key={category.key}
                href={category.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-xl p-3 text-sm transition",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <p className="font-semibold">{category.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Link>
            );
          })}

          <Link
            href="/credits"
            onClick={() => setIsOpen(false)}
            className={cn(
              "rounded-xl p-3 text-sm font-semibold transition",
              isCreditsActive
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            CREDITS
          </Link>
        </div>
      )}
    </div>
  );
}
