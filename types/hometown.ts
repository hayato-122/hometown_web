export type HometownItem = {
  id: string;
  categoryName: string;
  categoryKey: HometownCategoryKey;
  title: string;
  shortText: string;
  highlights: string;
  nearestStation: string;
  walkingTime: number;
  googleMapEmbedUrl: string;
  mainImage: string;
  galleryImages: string[];
};

export type HometownCategoryKey =
  | "history"
  | "food"
  | "nature"
  | "festival"
  | "industry";

export type HometownCategory = {
  key: HometownCategoryKey;
  name: string;
  title: string;
  description: string;
  href: `/${HometownCategoryKey}`;
  image: string;
};
