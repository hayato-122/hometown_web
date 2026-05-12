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
          <Card className="h-full overflow-hidden border-border bg-card p-0 shadow-sm transition group-hover:shadow-lg">
            <div
              className="aspect-video bg-linear-to-br from-secondary to-brand-soft bg-cover bg-center"
              style={{
                backgroundImage: `url('${item.mainImage}')`,
              }}
            ></div>
            <CardContent className="p-4">
              <p className="text-xl font-bold text-foreground">{item.title}</p>
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