import type { HometownCategory } from "@/types/hometown";
import { getImagePath } from "./getImagePath";

export const hometownCategories: HometownCategory[] = [
  {
    key: "history",
    name: "歴史",
    title: "歴史を見る",
    description: "明石に残る城跡や歴史ある場所を紹介します。",
    href: "/history",
    image: getImagePath("akashijyou-main"),
  },
  {
    key: "food",
    name: "食べ物",
    title: "食べ物一覧",
    description: "明石の食べ物について知ろう",
    href: "/food",
    image: getImagePath("akashiyaki-main"),
  },
  {
    key: "nature",
    name: "自然",
    title: "自然一覧",
    description: "明石の自然について知ろう",
    href: "/nature",
    image: getImagePath("akashikouenn-main"),
  },
  {
    key: "building",
    name: "建築物",
    title: "建築物一覧",
    description: "明石の建築物について知ろう",
    href: "/building",
    image: getImagePath("tennmonnkagakukann-main"),
  },
  {
    key: "tourspot",
    name: "観光地",
    title: "観光地一覧",
    description: "明石の観光地について知ろう",
    href: "/tourspot",
    image: getImagePath("uonotana-main"),
  },
  {
    key: "industry",
    name: "産業",
    title: "産業一覧",
    description: "明石の産業について知ろう",
    href: "/industry",
    image: getImagePath("takotubo-main"),
  },
];
