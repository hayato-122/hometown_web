"use client";

import { useEffect } from "react";

type AccessTrackerProps = {
  /** アクセスカウントを増やすアイテムのID（例: "akashijyou"） */
  itemId: string;
};

/**
 * 詳細ページが開かれたときにアクセスカウントを+1する Client Component
 * 画面には何も表示しない（return null）ので、どこに置いても影響がない
 */
export function AccessTracker({ itemId }: AccessTrackerProps) {
  useEffect(() => {
    // コンポーネントがマウントされたら（= 詳細ページが開かれたら）
    // API に POST リクエストを送ってカウントを1増やす
    fetch("/api/access-count", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId }),
    }).catch(() => {
      // ネットワークエラーなどがあっても無視する
      // カウントが取れなくてもアプリの動作に影響はない
    });
  }, [itemId]);

  return null;
}
