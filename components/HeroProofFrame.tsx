"use client";

import { useState } from "react";

export default function HeroProofFrame({
  file,
  alt,
}: {
  file: string;
  alt: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-(--color-line) bg-(--color-paper) p-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-wider text-(--color-ink-soft)">
          Tempel screenshot hasil PageSpeed di sini
        </span>
        <span className="font-mono text-[11px] text-(--color-ink-soft)">{file}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={file}
      alt={alt}
      className="h-full w-full bg-(--color-paper) object-cover"
      onError={() => setErrored(true)}
    />
  );
}
