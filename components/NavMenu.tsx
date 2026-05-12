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
    <NavigationMenu className="flex h-full items-stretch overflow-hidden border-l border-border">
      <NavigationMenuList className="items-stretch">
        {hometownCategories.map((category) => {
          const isActive =
            pathname === category.href ||
            pathname.startsWith(`${category.href}/`);

          const navItemClassName = cn(
            "flex items-center whitespace-nowrap border-r border-border px-5 py-4 text-base font-bold transition",
            isActive
              ? "bg-primary text-primary-foreground hover:bg-primary"
              : "text-primary hover:bg-accent",
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
