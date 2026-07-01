"use client";

import { useEffect, useRef, useState } from "react";

export function PrototypeFrame({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(800);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const resize = () => {
      try {
        const doc = iframe.contentDocument;
        if (doc?.documentElement) {
          setHeight(doc.documentElement.scrollHeight);
        }
      } catch {
        // другой origin — оставляем дефолтную высоту
      }
    };

    iframe.addEventListener("load", resize);
    window.addEventListener("resize", resize);
    resize();

    return () => {
      iframe.removeEventListener("load", resize);
      window.removeEventListener("resize", resize);
    };
  }, [src]);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      loading="lazy"
      className="w-full block"
      style={{ height }}
    />
  );
}
