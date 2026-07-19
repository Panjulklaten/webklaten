import { portfolioSites } from "@/lib/site-config";

export default function Portfolio() {
  return (
    <section id="portofolio" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-xl">
          <span className="font-mono text-xs tracking-wide text-(--color-signal)">
            REGISTRI KLIEN
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-(--color-ink)">
            Website ini nyata. Silakan diverifikasi.
          </h2>
          <p className="mt-3 text-(--color-ink-soft)">
            Kami tidak mengarang daftar ini. Kunjungi salah satu, gulir ke
            bagian paling bawah, dan cari bagian kredit — akan mengarah balik
            ke halaman ini sebagai bukti keaslian.
          </p>
        </div>
      </div>

      <div className="ruled-edge overflow-hidden rounded-lg border border-(--color-line) bg-(--color-paper-raised) pl-1">
        {portfolioSites.map((s, i) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 border-b border-(--color-line) px-5 py-5 transition-colors last:border-b-0 hover:bg-(--color-signal-soft) sm:flex-row sm:items-center sm:gap-6 sm:px-6"
          >
            <span className="w-10 shrink-0 font-mono text-sm text-(--color-ink-soft)">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="flex-1 font-display text-lg font-semibold text-(--color-ink)">
              {s.name}
            </span>

            <span className="w-fit shrink-0 rounded-full border border-(--color-line) bg-(--color-paper) px-2.5 py-0.5 font-mono text-[11px] text-(--color-ink-soft)">
              {s.category}
            </span>

            <span className="flex-1 text-sm text-(--color-ink-soft) sm:max-w-xs">
              {s.note}
            </span>

            <span className="font-mono text-sm text-(--color-signal) opacity-80 transition-opacity group-hover:opacity-100">
              kunjungi ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
