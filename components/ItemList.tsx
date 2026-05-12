import Link from "next/link";
import type { HometownItem } from "@/types/hometown";

import { Card, CardContent } from "@/components/ui/card";

type ItemListProps = {
  items: HometownItem[];
};

export function ItemList({ items }: ItemListProps) {
  return (
    <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-lg:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/${item.categoryKey}/${item.id}`}
          className="group block transition hover:-translate-y-1"
        >
          <Card className="h-full border-border bg-card p-3 shadow-panel transition group-hover:border-primary/40">
            <div
              className="aspect-video rounded-[24px] bg-secondary bg-cover bg-center"
              style={{
                backgroundImage: `url('${item.mainImage}')`,
              }}
            ></div>
            <CardContent className="px-1 pb-1 pt-4">
              <p className="font-heading text-xl font-semibold tracking-[-0.02em] text-foreground">
                {item.title}
              </p>
              <p className="mt-2 text-base leading-6 text-muted-foreground">
                {item.shortText}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
