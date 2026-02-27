"use client";

import { useState } from "react";

const FALLBACK = "/images/afc/oando-workstations--deskpro/image-1.webp";

export function CategoryImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-contain p-4 transition-all duration-700 ease-out group-hover:scale-103"
      onError={() => setImgSrc(FALLBACK)}
    />
  );
}
