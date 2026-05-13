import Link from "next/link";
import { NavMenu } from "./NavMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-stretch gap-8 border-b border-border bg-card/95 shadow-sm backdrop-blur">
      <div className="flex items-center px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 whitespace-nowrap rounded-xl px-2.5 py-2 text-foreground transition hover:bg-accent"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-primary font-heading text-base font-semibold text-primary-foreground">
            明
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold tracking-[-0.03em] md:text-xl">
              明石ガイド
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
              HOMETOWN
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
