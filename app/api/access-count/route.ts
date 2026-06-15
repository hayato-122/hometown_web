import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

/**
 * GET /api/access-count
 * 全アイテムのアクセス数を取得する
 * 戻り値例: { "akashijyou": 152, "akashiyaki": 98, ... }
 */
export async function GET() {
  try {
    const rawCounts = await redis.hgetall("access_counts") as Record<string, string> | null;

    const counts: Record<string, number> = {};
    if (rawCounts) {
      for (const [itemId, value] of Object.entries(rawCounts)) {
        counts[itemId] = parseInt(value, 10) || 0;
      }
    }

    return NextResponse.json(counts);
  } catch (error) {
    console.error("Failed to fetch access counts:", error);
    return NextResponse.json({}, { status: 500 });
  }
}

/**
 * POST /api/access-count
 * リクエストボディ: { "itemId": "akashijyou" }
 * 指定されたアイテムのアクセス数を1増やす
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { itemId } = body;

    if (!itemId || typeof itemId !== "string") {
      return NextResponse.json(
        { error: "itemId is required and must be a string" },
        { status: 400 },
      );
    }

    const count = await redis.hincrby("access_counts", itemId, 1);
    return NextResponse.json({ itemId, count });
  } catch (error) {
    console.error("Failed to increment access count:", error);
    return NextResponse.json(
      { error: "Failed to increment" },
      { status: 500 },
    );
  }
}
