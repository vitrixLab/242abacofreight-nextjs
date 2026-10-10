"use client";

import { useState } from "react";

export default function SmartImage({ src, alt }: { src: string; alt: string }) {
  const [missing, setMissing] = useState(false);

  if (missing) return null;

  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.parentElement?.classList.add("image-missing");
        setMissing(true);
      }}
    />
  );
}
