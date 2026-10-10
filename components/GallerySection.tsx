"use client";

import { useState } from "react";
import { site } from "@/data/site";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

export default function GallerySection() {
  const images = site.gallery.images;
  const [index, setIndex] = useState(0);

  const showImage = (nextIndex: number) =>
    setIndex((nextIndex + images.length) % images.length);

  return (
    <section className="gallery">
      <div className="container">
        <SectionHeading title={site.gallery.title} text={site.gallery.text} />

        <div className="gallery-wrapper">
          <button
            type="button"
            className="gallery-arrow left"
            onClick={() => showImage(index - 1)}
          >
            ‹
          </button>

          <div className="gallery-frame">
            <SmartImage
              key={images[index]}
              src={images[index]}
              alt={site.gallery.alt}
            />
          </div>

          <button
            type="button"
            className="gallery-arrow right"
            onClick={() => showImage(index + 1)}
          >
            ›
          </button>
        </div>

        <div className="gallery-dots">
          {images.map((image, dotIndex) => (
            <span
              key={image}
              className={
                dotIndex === index ? "gallery-dot active" : "gallery-dot"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
