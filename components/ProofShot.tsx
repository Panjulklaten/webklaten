"use client";

import { useState } from "react";
import type { ProofShot as ProofShotType } from "@/lib/site-config";

/**
 * Menampilkan screenshot bukti nyata. Selama file gambar belum ditempel
 * di /public/images/proof/, komponen ini otomatis menampilkan bingkai
 * placeholder yang menjelaskan gambar apa yang seharusnya ada di sana —
 * begitu file dengan nama yang sama diunggah, gambar asli langsung tampil.
 */
export default function ProofShot({
  shot,
  index,
}: {
  shot: ProofShotType;
  index: number;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <figure className="flex flex-col overflow-hidden rounded-lg border border-(--color-line) bg-(--color-paper-raised)">
      <div className="flex items-center justify-between border-b border-(--color-line) bg-(--color-paper) px-4 py-2">
        <span className="font-mono text-xs tracking-wide text-(--color-ink-soft)">
          BUKTI/{String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-2 w-2 rounded-full bg-(--color-signal)" />
      </div>

      <div className="relative aspect-[16/10] w-full bg-(--color-paper)">
        {!errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={shot.file}
            alt={shot.title}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-(--color-line) p-6 text-center">
            <span className="font-mono text-[11px] uppercase tracking-wider text-(--color-ink-soft)">
              Menunggu screenshot
            </span>
            <span className="font-mono text-[11px] text-(--color-ink-soft)">
              {shot.file}
            </span>
          </div>
        )}
      </div>

      <figcaption className="flex flex-col gap-1 px-4 py-3">
        <span className="font-display text-sm font-semibold text-(--color-ink)">
          {shot.title}
        </span>
        <span className="text-sm text-(--color-ink-soft)">{shot.description}</span>
      </figcaption>
    </figure>
  );
}
