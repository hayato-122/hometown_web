import type { HometownItem } from "@/types/hometown";
import { getImagePath } from "./getImagePath";

export const hometownItems: HometownItem[] = [
  {
    id: "akashijyou",
    categoryName: "歴史",
    categoryKey: "history",
    title: "明石城跡",
    shortText: "町のシンボルである城跡。",
    highlights:
      "明石城跡は、日本百名城に数えられる美しい石垣と、左右対称にそびえる二棟の三重櫓が最大の見どころです。かつて宮本武蔵が作庭に携わったと伝わる静かな庭園もあり、歴史の深さと四季折々の自然を同時に楽しめます。",
    nearestStation: "明石駅",
    walkingTime: 10,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.092924768082!2d134.98852027571567!3d34.652356085805216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4c86091ef97%3A0xd8a2de1fedbc6de1!2z5piO55-z5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1778012769022!5m2!1sja!2sjp",
    mainImage: getImagePath("akashijyou-main"),
    galleryImages: [
      getImagePath("akashijyou-1"),
      getImagePath("akashijyou-2"),
      getImagePath("akashijyou-3"),
    ],
  },
  {
    id: "akashiyaki",
    categoryName: "食べ物",
    categoryKey: "food",
    title: "明石焼き",
    shortText: "明石の名物 出汁に浸して食べるたこ焼き",
    highlights:
      "地元で「玉子焼き」と親しまれる明石焼きは、たっぷりの卵と出汁、タコを使い、ふんわりと焼き上げた一品です。熱々の出汁に浸して食べるスタイルが特徴で、口の中でとろける優しい食感と豊かな磯の香りが堪能できます。",
    nearestStation: "明石駅",
    walkingTime: 10,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6564.724911414134!2d134.9848116961609!3d34.645548205478065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4b12d374e91%3A0xcc12410633a54763!2z546J5a2Q54S8IOacrOWutiDjgY3jgoDjgonjgoQ!5e0!3m2!1sja!2sjp!4v1778737110384!5m2!1sja!2sjp",
    mainImage: getImagePath("akashiyaki-main"),
    galleryImages: [
      getImagePath("akashiyaki-1"),
      getImagePath("akashiyaki-2"),
      getImagePath("akashiyaki-3"),
    ],
  },
  {
    id: "akashikouenn",
    categoryName: "自然",
    categoryKey: "nature",
    title: "明石公園",
    shortText: "お花見にも人気な明石城下の公園",
    highlights:
      "明石城跡を中心に広がる明石公園は、宮本武蔵が作庭に関わったとされる優雅な庭園や、日本に12基しか現存しない三重櫓が見どころです。春には約1000本の桜が咲き誇り、四季折々の自然と歴史が調和した景色を堪能できます。",
    nearestStation: "明石駅",
    walkingTime: 10,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840197.348447584!2d133.77270867812499!3d34.6541753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4b7dec00001%3A0xde420a1974e7b7ed!2z5YW15bqr55yM56uL5piO55-z5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1778806270924!5m2!1sja!2sjp",
    mainImage: getImagePath("akashikouenn-main"),
    galleryImages: [
      getImagePath("akashikouenn-1"),
      getImagePath("akashikouenn-2"),
      getImagePath("akashikouenn-3"),
    ],
  },
  {
    id: "tennmonnkagakukann",
    categoryName: "建築物",
    categoryKey: "building",
    title: "天文科学館",
    shortText: "プラネタリウムが存在する科学館",
    highlights:
      "東経135度日本子午線上に建つ明石市立天文科学館。時と宇宙をテーマにしたこの館の最大の魅力は、日本最古の現役プラネタリウムです。学芸員の個性豊かな生解説を聞きながら、16階の展望室から淡路島や明石海峡大橋の絶景も一望できます。",
    nearestStation: "明石駅",
    walkingTime: 15,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2222645148454!2d134.9949540257155!3d34.64908933598033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600081dfa486a429%3A0xeaf04cc208097069!2z5piO55-z5biC56uL5aSp5paH56eR5a2m6aSo!5e0!3m2!1sja!2sjp!4v1779025045116!5m2!1sja!2sjp",
    mainImage: getImagePath("tennmonnkagakukann-main"),
    galleryImages: [
      getImagePath("tennmonnkagakukann-1"),
      getImagePath("tennmonnkagakukann-2"),
      getImagePath("tennmonnkagakukann-3"),
    ],
  },
  {
    id: "uonotana",
    categoryName: "観光地",
    categoryKey: "tourspot",
    title: "魚の棚",
    shortText: "新鮮な魚介を買える商店街",
    highlights:
      "魚の棚商店街　約400年の歴史を持ち、全長約350メートルのアーケードには名物の明石マダコやタイ、水揚げされたばかりの新鮮な魚介が並びます。活気あふれる掛け声の中、名物「明石焼き」の食べ歩きも楽しめます。",
    nearestStation: "明石駅",
    walkingTime: 7,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.1518405358822!2d134.99056783876532!3d34.6470328498091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4b73eb51601%3A0xe9e6719b0c4c020c!2z6a2a44Gu5qOa5ZWG5bqX6KGX!5e0!3m2!1sja!2sjp!4v1779027317616!5m2!1sja!2sjp",
    mainImage: getImagePath("uonotana-main"),
    galleryImages: [
      getImagePath("uonotana-1"),
      getImagePath("uonotana-2"),
      getImagePath("uonotana-3"),
    ],
  },
  {
    id: "takotubo",
    categoryName: "産業",
    categoryKey: "industry",
    title: "たこつぼ漁業",
    shortText: "伝統的なたこつぼ漁業",
    highlights:
      "明石の伝統的な「たこつぼ漁業」は、タコが暗く狭い隙間に隠れる習性を利用した環境に優しい漁法です。海底に沈めた壺に傷をつけず無傷で捕獲するため、明石ダコならではの抜群の鮮度と、強い歯ごたえや凝縮された旨味をそのまま味わうことができます。",
    nearestStation: "明石駅",
    walkingTime: 17,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4847.830642202162!2d134.99008814909598!3d34.64287860526069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d5fa26b9a3dd%3A0xdc15e1a3029f1064!2z5piO55-z5rW35LiK6Yej44KK5aCAIO-8oHNlYSDjgYLjgaPjgajjgZfjg7w!5e0!3m2!1sja!2sjp!4v1779068670042!5m2!1sja!2sjp",
    mainImage: getImagePath("takotubo-main"),
    galleryImages: [
      getImagePath("takotubo-1"),
      getImagePath("takotubo-2"),
      getImagePath("takotubo-3"),
    ],
  },
];
