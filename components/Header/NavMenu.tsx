"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { hometownCategories } from "@/data/hometownCategories";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  const pathname = usePathname();

  const isCategoryActive = hometownCategories.some(
    (category) =>
      pathname === category.href || pathname.startsWith(`${category.href}/`),
  );

  const triggerClassName = cn(
    "relative flex h-full items-center whitespace-nowrap rounded-xl px-4  text-xl font-semibold transition after:absolute after:inset-x-4 after:bottom-2 after:h-0.5 after:rounded-full",
    isCategoryActive
      ? "text-foreground after:bg-primary hover:bg-accent"
      : "text-foreground after:bg-transparent hover:bg-accent hover:text-foreground",
  );

  return (
    <NavigationMenu className="flex h-full items-stretch">
      <NavigationMenuList className="items-stretch gap-1 h-full">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClassName}>
            カテゴリー
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-[360px] text-nowrap gap-1 p-2">
              {hometownCategories.map((category) => {
                const isActive =
                  pathname === category.href ||
                  pathname.startsWith(`${category.href}/`);
                return (
                  <NavigationMenuLink
                    asChild
                    active={isActive}
                    key={category.key}
                  >
                    <Link
                      href={category.href}
                      className={cn(
                        "block rounded-xl p-3 text-sm transition",
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
                  </NavigationMenuLink>
                );
              })}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
