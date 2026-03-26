"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export function ApplicationImageCarousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const canSlide = total > 1;

  const prev = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  return (
    <article className="card mx-auto w-full max-w-[420px] overflow-hidden">
      <div className="relative">
        <img src={images[index]} alt={alt} className="aspect-[3/4] w-full object-cover" />
        {canSlide ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[#5a6b63] bg-[#0d1e1b]/80 px-3 py-2 text-sm text-zinc-100 transition hover:border-[#d9bb85]"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[#5a6b63] bg-[#0d1e1b]/80 px-3 py-2 text-sm text-zinc-100 transition hover:border-[#d9bb85]"
            >
              →
            </button>
          </>
        ) : null}
      </div>

      {canSlide ? (
        <div className="flex items-center justify-between border-t border-[#1d322c] px-4 py-3">
          <p className="text-xs text-zinc-300">
            {index + 1} / {total}
          </p>
          <div className="flex gap-2">
            {images.map((_, dotIndex) => (
              <button
                type="button"
                key={dotIndex}
                aria-label={`Go to image ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-1.5 w-6 rounded-full transition ${
                  dotIndex === index ? "bg-[#d9bb85]" : "bg-[#334941]"
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
