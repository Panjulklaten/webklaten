import { defaultWaMessage, portfolioSites, proofShots, waLink } from "@/lib/site-config";
import HeroProofFrame from "@/components/HeroProofFrame";

export default function Hero() {
  const heroShot = proofShots[0];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--color-line) bg-(--color-paper-raised) px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-(--color-signal)" />
            <span className="font-mono text-xs tracking-wide text-(--color-ink-soft)">
              JASA PEMBUATAN WEBSITE
            </span>
          </div>

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-(--color-ink) sm:text-5xl">
            Website resmi, bukan blogspot.
            <span className="text-(--color-signal)"> Mulai Rp200.000.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-(--color-ink-soft)">
            Tanpa biaya bulanan. Tanpa biaya hosting. Cukup biaya domain per
            tahun sesuai domain yang dipakai. Performa dan hasilnya bisa Anda
            cek sendiri — bukan janji di brosur.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-(--color-cta) px-5 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Konsultasi via WhatsApp
            </a>
            <a
              href="#portofolio"
              className="rounded-md border border-(--color-ink) px-5 py-3 font-display text-sm font-semibold text-(--color-ink) transition-colors hover:bg-(--color-ink) hover:text-(--color-paper)"
            >
              Cek Website Klien
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-(--color-ink-soft)">
            {portfolioSites.length}+ website klien aktif · semua bisa diakses
            &amp; diverifikasi langsung
          </p>
        </div>

        {/* Signature visual: bingkai browser berisi bukti nyata, bukan mockup rekaan */}
        <div className="relative">
          <div className="absolute -top-5 -left-5 z-10 flex items-center gap-2 rounded-md border border-(--color-line) bg-(--color-paper-raised) px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-(--color-signal)" />
            <span className="font-mono text-[11px] text-(--color-ink)">
              live &amp; terverifikasi
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border border-(--color-line) bg-(--color-paper-raised) shadow-[0_20px_60px_-30px_rgba(16,32,28,0.35)]">
            <div className="flex items-center gap-1.5 border-b border-(--color-line) bg-(--color-paper) px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-(--color-line)" />
              <span className="h-2.5 w-2.5 rounded-full bg-(--color-line)" />
              <span className="h-2.5 w-2.5 rounded-full bg-(--color-line)" />
              <span className="ml-3 font-mono text-[11px] text-(--color-ink-soft)">
                pagespeed.web.dev
              </span>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <HeroProofFrame file={heroShot.file} alt={heroShot.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
