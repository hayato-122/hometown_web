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
    id: "kakimotojinja",
    categoryName: "歴史",
    categoryKey: "history",
    title: "柿本神社",
    shortText: "万葉歌人・柿本人麻呂をまつる人丸山の神社。",
    highlights:
      "地元で「人丸さん」と慕われる柿本神社は、明石に縁の深い歌聖・柿本人麻呂を祀る神社です。学問や安産、火災除けの神様として信仰が厚く、高台にある境内からは明石海峡大橋や淡路島を望む絶景が広がっています。",
    nearestStation: "人丸前駅",
    walkingTime: 7,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6564.359970661388!2d134.99675048452454!3d34.65015721616029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600081df089f1087%3A0x950ebcde9f1188d5!2z5p-_5pys56We56S-!5e0!3m2!1sja!2sus!4v1779088464956!5m2!1sja!2sus",
    mainImage: getImagePath("kakimotojinja-main"),
    galleryImages: [
      getImagePath("kakimotojinja-1"),
      getImagePath("kakimotojinja-2"),
      getImagePath("kakimotojinja-3"),
    ],
  },
  {
    id: "iwayajinja",
    categoryName: "歴史",
    categoryKey: "history",
    title: "岩屋神社",
    shortText: "明石創始の神生みの神を祀る最古の神社",
    highlights:
      "明石の「岩屋神社」は、成務天皇の時代に創建されたと伝わる古社で、開運や厄除け、家内安全の神様として親しまれています。毎年7月に開催される伝統的な「お布団太鼓」の夏祭りは、街中が活気あふれる熱気に包まれる明石の夏の風物詩です。",
    nearestStation: "明石駅",
    walkingTime: 16,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26259.439800893357!2d134.95017337431645!3d34.64384259999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4bb2976e7f7%3A0xf40727421a3cd20b!2z5bKp5bGL56We56S-!5e0!3m2!1sja!2sus!4v1779088572769!5m2!1sja!2sus",
    mainImage: getImagePath("iwayajinja-main"),
    galleryImages: [
      getImagePath("iwayajinja-1"),
      getImagePath("iwayajinja-2"),
      getImagePath("iwayajinja-3"),
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
    id: "akashinosengyo",
    categoryName: "食べ物",
    categoryKey: "food",
    title: "明石の鮮魚",
    shortText: "明石鯛をはじめ、海の幸が集まる食文化。",
    highlights:
      "明石は海峡の速い潮流に育まれた魚介で知られています。明石鯛や季節の魚が並ぶ市場の風景からは、港町としての暮らしと食文化のつながりが伝わります。魚の棚商店街を歩けば、鮮魚店の活気も身近に感じられます。",
    nearestStation: "明石駅",
    walkingTime: 7,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.1518405358822!2d134.99056783876532!3d34.6470328498091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4b73eb51601%3A0xe9e6719b0c4c020c!2z6a2a44Gu5qOa5ZWG5bqX6KGX!5e0!3m2!1sja!2sjp!4v1779027317616!5m2!1sja!2sjp",
    mainImage: getImagePath("akashinosengyo-main"),
    galleryImages: [
      getImagePath("akashinosengyo-1"),
      getImagePath("akashinosengyo-2"),
      getImagePath("akashinosengyo-3"),
    ],
  },
  {
    id: "akashidako",
    categoryName: "食べ物",
    categoryKey: "food",
    title: "明石だこ",
    shortText: "歯ごたえと旨味が特徴の明石を代表する海の幸。",
    highlights:
      "明石だこは、海峡の速い潮流で育つため身が締まり、しっかりとした歯ごたえと濃い旨味が特徴です。市場や飲食店では、焼き物、揚げ物、煮物などさまざまな形で味わうことができ、明石の食文化を語るうえで欠かせない存在です。",
    nearestStation: "明石駅",
    walkingTime: 7,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26259.439800893357!2d134.95017337431645!3d34.64384259999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4bb2976e7f7%3A0xf40727421a3cd20b!2z5bKp5bGL56We56S-!5e0!3m2!1sja!2sus!4v1779088572769!5m2!1sja!2sus",
    mainImage: getImagePath("akashidako-main"),
    galleryImages: [
      getImagePath("akashidako-1"),
      getImagePath("akashidako-2"),
      getImagePath("akashidako-3"),
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
    id: "okurakaigan",
    categoryName: "自然",
    categoryKey: "nature",
    title: "大蔵海岸",
    shortText: "海と明石海峡大橋を望める開放的な海岸。",
    highlights:
      "大蔵海岸は、明石海峡大橋や淡路島を眺めながら過ごせる海辺のスポットです。散歩や写真撮影に向いており、晴れた日には海の青さと橋のスケールを同時に楽しめます。町から近い場所で海を感じられるのが魅力です。",
    nearestStation: "朝霧駅",
    walkingTime: 5,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.081393190287!2d135.00649995929328!3d34.64155957089556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600081f3635adf83%3A0xdcc0bff7b620f0dc!2z5aSn6JS15rW35bK4!5e0!3m2!1sja!2sjp!4v1779103267375!5m2!1sja!2sjp",
    mainImage: getImagePath("okurakaigan-main"),
    galleryImages: [
      getImagePath("okurakaigan-1"),
      getImagePath("okurakaigan-2"),
      getImagePath("okurakaigan-3"),
    ],
  },
  {
    id: "akashikaikyou",
    categoryName: "自然",
    categoryKey: "nature",
    title: "明石海峡",
    shortText: "潮流と海の景色が印象的な明石の海。",
    highlights:
      "明石海峡は、本州と淡路島の間に広がる海峡です。潮の流れが速いことで知られ、その海の環境が明石の魚介の豊かさにもつながっています。海辺から眺める橋や船の風景は、明石らしさを感じられる景観です。",
    nearestStation: "舞子駅",
    walkingTime: 5,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8058.776012030991!2d135.03687848313388!3d34.63044171674644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000824134f53bcd%3A0xaeaac1c733d78c3f!2z5piO55-z5rW35bOh5aSn5qmL!5e0!3m2!1sja!2sjp!4v1779106173560!5m2!1sja!2sjp",
    mainImage: getImagePath("akashikaikyou-main"),
    galleryImages: [
      getImagePath("akashikaikyou-1"),
      getImagePath("akashikaikyou-2"),
      getImagePath("akashikaikyou-3"),
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
    id: "akashibunkahakubutsukan",
    categoryName: "建築物",
    categoryKey: "building",
    title: "明石市立文化博物館",
    shortText: "明石の歴史や文化を学べる博物館。",
    highlights:
      "明石市立文化博物館は、明石の歴史や文化を知る入り口になる施設です。展示を通して地域の成り立ちや人々の暮らしを学ぶことができ、町歩きの前後に訪れると、見慣れた風景の背景もより深く理解できます。",
    nearestStation: "明石駅",
    walkingTime: 8,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.060660541544!2d134.99411173872755!3d34.6516388996861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4cbd5fdeb6d%3A0xf3cd32d2d64f980e!2z5piO55-z5biC56uL5paH5YyW5Y2a54mp6aSo!5e0!3m2!1sja!2sjp!4v1779106398096!5m2!1sja!2sjp",
    mainImage: getImagePath("akashibunkahakubutsukan-main"),
    galleryImages: [
      getImagePath("akashibunkahakubutsukan-1"),
      getImagePath("akashibunkahakubutsukan-2"),
      getImagePath("akashibunkahakubutsukan-3"),
    ],
  },
  {
    id: "akashieki",
    categoryName: "建築物",
    categoryKey: "building",
    title: "明石駅",
    shortText: "観光や通学、買い物の起点になる中心駅。",
    highlights:
      "明石駅は、明石市内の移動や観光の起点になる駅です。周辺には商店街、飲食店、公共施設が集まり、魚の棚商店街や明石城跡へも歩いて向かえます。日常と観光が交わる場所として、町の中心らしさを感じられます。",
    nearestStation: "明石駅",
    walkingTime: 0,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.22422229633!2d134.99012127571547!3d34.64903988598307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4b7ba0f3b95%3A0x7828214cffa62536!2z5piO55-z6aeF!5e0!3m2!1sja!2sjp!4v1779117188167!5m2!1sja!2sjp",
    mainImage: getImagePath("akashieki-main"),
    galleryImages: [
      getImagePath("akashieki-1"),
      getImagePath("akashieki-2"),
      getImagePath("akashieki-3"),
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
    id: "akashihonmachimihakukan",
    categoryName: "観光地",
    categoryKey: "tourspot",
    title: "明石ほんまち三白館",
    shortText: "ほんまち商店街で大衆演劇を楽しめる劇場。",
    highlights:
      "明石ほんまち三白館は、ほんまち商店街の中にある大衆演劇場です。月替わりの劇団による芝居や舞踊ショーが上演され、商店街のにぎわいと舞台文化をあわせて楽しめます。魚の棚や明石駅からも歩いて立ち寄りやすい、中心市街地らしい観光スポットです。",
    nearestStation: "明石駅",
    walkingTime: 6,
    googleMapEmbedUrl:
      "https://www.google.com/maps?q=%E6%98%8E%E7%9F%B3%E3%81%BB%E3%82%93%E3%81%BE%E3%81%A1%E4%B8%89%E7%99%BD%E9%A4%A8&output=embed",
    mainImage: getImagePath("akashihonmachimihakukan-main"),
    galleryImages: [
      getImagePath("akashihonmachimihakukan-1"),
      getImagePath("akashihonmachimihakukan-2"),
      getImagePath("akashihonmachimihakukan-3"),
    ],
  },
  {
    id: "akashikyuutoudai",
    categoryName: "観光地",
    categoryKey: "tourspot",
    title: "明石港旧灯台",
    shortText: "港町の面影を残す、明石港の歴史的な灯台。",
    highlights:
      "明石港旧灯台は、港町として発展してきた明石の歴史を感じられるスポットです。周辺には港の風景が広がり、漁船や海峡の眺めとあわせて、海と暮らしが近い明石らしい景色を楽しめます。",
    nearestStation: "明石駅",
    walkingTime: 18,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.494331128885!2d134.98754057571526!3d34.6422168363487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4a550179b65%3A0xec113bdd7578ef04!2z5piO55-z5riv5pen54Gv5Y-w!5e0!3m2!1sja!2sjp!4v1779117480158!5m2!1sja!2sjp",
    mainImage: getImagePath("akashikyuutoudai-main"),
    galleryImages: [
      getImagePath("akashikyuutoudai-1"),
      getImagePath("akashikyuutoudai-2"),
      getImagePath("akashikyuutoudai-3"),
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
  {
    id: "kawasakijukogyo",
    categoryName: "産業",
    categoryKey: "industry",
    title: "川崎重工業 明石工場",
    shortText: "世界へ広がるモーターサイクルとエンジン技術のものづくり拠点。",
    highlights:
      "川崎重工業 明石工場は、モーターサイクルやJet Ski、ATV、汎用エンジン、発電機、トランスミッションなどを扱う、明石を代表するものづくりの拠点です。さらに航空機用エンジンや産業用ロボット、ガスタービンなどにも関わる技術が集まり、水産業とは別の角度から明石の産業を知ることができます。",
    nearestStation: "西明石駅",
    walkingTime: 12,
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.3553258529243!2d134.98188147571545!3d34.64574168611145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d4b3df64da41%3A0xe6bf44b0e512ce2e!2z5bed5bTu6YeN5bel5qWt77yI5qKq77yJIMSimuWzs-W3peWgtQ!5e0!3m2!1sja!2sjp!4v1780000000010!5m2!1sja!2sjp",
    mainImage: getImagePath("kawasakijukogyo-main"),
    galleryImages: [
      getImagePath("kawasakijukogyo-1"),
      getImagePath("kawasakijukogyo-2"),
      getImagePath("kawasakijukogyo-3"),
    ],
  },
  {
    id: "eigashimashuzou",
    categoryName: "産業",
    categoryKey: "industry",
    title: "江井ヶ嶋酒造",
    shortText: "日本酒とウイスキーをつくる明石の酒蔵。",
    highlights:
      "江井ヶ嶋酒造は、明石で長く酒造りを続けてきた総合酒類メーカーです。清酒だけでなく、焼酎、ワイン、ウイスキーなども手がけており、海の産業とは違う角度から明石のものづくりを知ることができます。酒蔵や蒸留所の風景から、地域に根づいた製造業の歴史が感じられます。",
    nearestStation: "西江井ヶ島駅",
    walkingTime: 8,
    googleMapEmbedUrl:
      "https://www.google.com/maps?q=%E6%B1%9F%E4%BA%95%E3%83%B6%E5%B6%8B%E9%85%92%E9%80%A0&output=embed",
    mainImage: getImagePath("eigashimashuzou-main"),
    galleryImages: [
      getImagePath("eigashimashuzou-1"),
      getImagePath("eigashimashuzou-2"),
      getImagePath("eigashimashuzou-3"),
    ],
  },
];
