"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { hometownCategories } from "@/data/hometownCategories";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="flex h-full items-stretch overflow-hidden">
      <NavigationMenuList className="items-stretch gap-1">
        {hometownCategories.map((category) => {
          const isActive =
            pathname === category.href ||
            pathname.startsWith(`${category.href}/`);

          const navItemClassName = cn(
            "relative flex items-center whitespace-nowrap rounded-xl px-4 py-4 text-sm font-semibold transition after:absolute after:inset-x-4 after:bottom-2 after:h-0.5 after:rounded-full",
            isActive
              ? "bg-transparent text-foreground after:bg-primary data-[active=true]:bg-transparent data-[active=true]:text-foreground data-[active=true]:hover:bg-accent"
              : "text-muted-foreground after:bg-transparent hover:bg-accent hover:text-foreground",
          );

          return (
            <NavigationMenuItem key={category.key}>
              <NavigationMenuLink asChild active={isActive}>
                <Link href={category.href} className={navItemClassName}>
                  {category.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
