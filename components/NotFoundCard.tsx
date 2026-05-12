import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type NotFoundCardProps = {
  label: string;
  title: string;
  description: string;
};

export function NotFoundCard({ label, title, description }: NotFoundCardProps) {
  return (
    <Card className="border-border bg-card/90 shadow-panel">
      <CardContent className="p-8">
        <p className="text-sm font-bold text-destructive">{label}</p>
        <h1 className="mt-2 text-2xl font-bold text-foreground">{title}</h1>
        <p className="mt-4 leading-8 text-muted-foreground">{description}</p>

        <Button
          asChild
          className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="/">トップへ戻る</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
