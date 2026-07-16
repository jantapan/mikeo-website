"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type GalleryCopy = {
  openImage: string;
  closeImage: string;
  previousImage: string;
  nextImage: string;
};

export function ProductGallery({
  images,
  copy,
  variant = "content",
  preload = false,
}: {
  images: GalleryImage[];
  copy: GalleryCopy;
  variant?: "content" | "hero" | "evidence";
  preload?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const galleryId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function transitionName(index: number) {
    return `product-image-${galleryId}-${index}`;
  }

  function runViewTransition(update: () => void) {
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };

    if (transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(update);
    } else {
      update();
    }
  }

  function openImage(index: number) {
    runViewTransition(() => {
      flushSync(() => {
        setActiveIndex(index);
        setIsOpen(true);
      });
      if (!dialogRef.current?.open) dialogRef.current?.showModal();
    });
  }

  function closeImage() {
    if (!dialogRef.current?.open) return;
    runViewTransition(() => {
      dialogRef.current?.close();
      flushSync(() => setIsOpen(false));
    });
  }

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % images.length);
  }

  if (!activeImage) return null;

  return (
    <>
      <div className={`product-gallery product-gallery-${variant} ${images.length > 1 ? "product-gallery-multiple" : ""}`}>
        {images.map((image, index) => (
          <button
            className="product-gallery-trigger"
            type="button"
            key={image.src}
            onClick={() => openImage(index)}
            aria-label={`${copy.openImage}: ${image.alt}`}
            aria-haspopup="dialog"
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              sizes={variant === "hero"
                ? "(max-width: 760px) 84vw, 52vw"
                : images.length > 1
                  ? "(max-width: 760px) 100vw, 50vw"
                  : "(max-width: 760px) 100vw, 1120px"}
              alt={image.alt}
              className="product-gallery-image"
              preload={preload && index === 0}
              loading={preload && index === 0 ? undefined : "lazy"}
              style={{ viewTransitionName: isOpen ? "none" : transitionName(index) }}
            />
            <span className="product-gallery-expand" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="product-lightbox"
        aria-label={activeImage.alt}
        onCancel={(event) => {
          event.preventDefault();
          closeImage();
        }}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeImage();
        }}
        onKeyDown={(event) => {
          if (images.length <= 1) return;
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            showPrevious();
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            showNext();
          }
        }}
      >
        <div className="product-lightbox-frame">
          <button className="product-lightbox-close" type="button" onClick={closeImage} aria-label={copy.closeImage}>×</button>
          <Image
            src={activeImage.src}
            width={activeImage.width}
            height={activeImage.height}
            sizes="96vw"
            alt={activeImage.alt}
            className="product-lightbox-image"
            style={{ viewTransitionName: isOpen ? transitionName(activeIndex) : "none" }}
          />
          {images.length > 1 && (
            <div className="product-lightbox-controls">
              <button type="button" onClick={showPrevious} aria-label={copy.previousImage}>←</button>
              <span aria-live="polite">{activeIndex + 1} / {images.length}</span>
              <button type="button" onClick={showNext} aria-label={copy.nextImage}>→</button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
