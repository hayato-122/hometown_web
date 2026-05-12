import { NotFoundCard } from "@/components/NotFoundCard";

export default function NotFound() {
  return (
    <NotFoundCard
      label="404"
      title="ページが見つかりませんでした"
      description="URLが間違っているか、ページが削除された可能性があります。"
    />
  );
}
