import { imageData } from "@/data/ImageData";

export const getImagePath = (id: string) => {
  const image = imageData.find((image) => image.id === id);

  if (!image) {
    throw new Error(`imageData に ${id} が見つかりません`);
  }

  return image.localPath;
};
