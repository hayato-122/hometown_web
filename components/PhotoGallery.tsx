"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
  ZoomInAreaIcon,
} from "@hugeicons/core-free-icons";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

type PhotoGalleryProps = {
  images: string[];
  title: string;
};

export function PhotoGallery({ images, title }: PhotoGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const selectedImage =
    selectedImageIndex === null ? null : images[selectedImageIndex];
  const hasMultipleImages = images.length > 1;

  // フォーカストラップ: モーダル内のTabキーを常にループさせる
  const trapFocus = (container: HTMLElement, event: KeyboardEvent) => {
    // ブラウザのデフォルトTab移動を常に止める
    event.preventDefault();

    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusableElements.length === 0) return;

    // 現在フォーカスされている要素のインデックスを調べる
    const currentIndex = Array.from(focusableElements).indexOf(
      document.activeElement as HTMLElement,
    );

    // shiftキーの有無に応じて次/前に移動。端を越えたら折り返す
    const nextIndex = event.shiftKey
      ? currentIndex <= 0
        ? focusableElements.length - 1
        : currentIndex - 1
      : currentIndex >= focusableElements.length - 1
        ? 0
        : currentIndex + 1;

    focusableElements[nextIndex].focus();
  };

  useEffect(() => {
    if (selectedImageIndex === null) {
      // モーダルが閉じられた: 開く前の位置にフォーカスを戻す
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
      return;
    }

    // 開く前のフォーカス位置を保存
    previousFocusRef.current = document.activeElement as HTMLElement;

    // モーダル内の最初のフォーカス可能要素にフォーカスを移動
    requestAnimationFrame(() => {
      const modal = modalRef.current;
      if (!modal) return;

      const focusableElements = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }

      if (event.key === "Tab" && modalRef.current) {
        trapFocus(modalRef.current, event);
      }

      if (event.key === "ArrowLeft" && hasMultipleImages) {
        setSelectedImageIndex((currentIndex) => {
          if (currentIndex === null) return currentIndex;

          return (currentIndex - 1 + images.length) % images.length;
        });
      }

      if (event.key === "ArrowRight" && hasMultipleImages) {
        setSelectedImageIndex((currentIndex) => {
          if (currentIndex === null) return currentIndex;

          return (currentIndex + 1) % images.length;
        });
      }
    };

    const originalBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, images.length, selectedImageIndex]);

  const showPreviousImage = () => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;

      return (currentIndex - 1 + images.length) % images.length;
    });
  };

  const showNextImage = () => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;

      return (currentIndex + 1) % images.length;
    });
  };

  return (
    <>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {images.map((galleryImage, index) => (
          <motion.button
            key={galleryImage}
            type="button"
            aria-label={`${title}の写真${index + 1}を拡大表示する`}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImageIndex(index)}
            className="group relative overflow-hidden rounded-[24px] bg-secondary text-left shadow-panel ring-1 ring-border/80 transition focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={galleryImage}
                alt={`${title}の写真${index + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-foreground/0 transition duration-300 group-hover:bg-foreground/12" />
              <span className="absolute right-3 top-3 grid size-9 translate-y-1 place-items-center rounded-xl bg-background/90 text-foreground opacity-0 shadow-panel ring-1 ring-border backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <HugeiconsIcon
                  icon={ZoomInAreaIcon}
                  strokeWidth={2}
                  className="size-4"
                  aria-hidden="true"
                />
              </span>
            </AspectRatio>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-foreground/75 p-4 backdrop-blur-sm md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${title}の拡大写真`}
              className="relative grid w-[min(100%,1040px)] gap-3 rounded-[24px] bg-card p-2 text-card-foreground shadow-panel ring-1 ring-border md:p-3"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 px-2 pt-1">
                <div>
                  <p className="text-sm font-semibold text-primary">写真</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedImageIndex + 1} / {images.length}
                  </p>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="拡大表示を閉じる"
                  onClick={() => setSelectedImageIndex(null)}
                  className="rounded-xl"
                >
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    strokeWidth={2}
                    className="size-4"
                    aria-hidden="true"
                  />
                </Button>
              </div>

              <div className="relative overflow-hidden rounded-[24px] bg-secondary">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={selectedImage}
                    alt={`${title}の拡大写真${selectedImageIndex + 1}`}
                    fill
                    sizes="min(100vw, 1040px)"
                    className="object-contain"
                  />
                </AspectRatio>
              </div>

              {hasMultipleImages && (
                <>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="前の写真を表示する"
                    onClick={showPreviousImage}
                    className="absolute left-4 top-1/2 rounded-full bg-background/95 shadow-panel ring-1 ring-border hover:bg-background"
                  >
                    <HugeiconsIcon
                      icon={ArrowLeft01Icon}
                      strokeWidth={2}
                      className="size-4"
                      aria-hidden="true"
                    />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="次の写真を表示する"
                    onClick={showNextImage}
                    className="absolute right-4 top-1/2 rounded-full bg-background/95 shadow-panel ring-1 ring-border hover:bg-background"
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      strokeWidth={2}
                      className="size-4"
                      aria-hidden="true"
                    />
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
