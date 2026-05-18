export type ImageContent = {
  id: string;
  usedOn: string[];
  localPath: string;
  title: string;
  author: string;
  sourceName: "Wikimedia Commons" | "flickr";
  sourceUrl: string;
  licenseKey:
    | "ccBySa40"
    | "ccBy40"
    | "ccBy20"
    | "ccBySa20"
    | "ccBySa25"
    | "ccBySa30"
    | "cc0"
    | "public";
  changes: "なし" | string;
};
