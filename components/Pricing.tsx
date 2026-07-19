import { defaultWaMessage, waLink } from "@/lib/site-config";

const included = [
  "Website resmi dengan domain sendiri (bukan blogspot / gratisan)",
  "Tanpa biaya bulanan selamanya",
  "Tanpa biaya hosting — server ditanggung dalam paket",
  "Performa & SEO dasar dioptimasi sejak awal",
  "Cocok untuk UMKM, portofolio, hingga profil usaha",
];

const excluded = [
  {
    label: "Biaya domain",
    detail: "per tahun, tergantung jenis domain yang Anda pilih (.com, .biz.id, dll.)",
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <span className="font-mono text-xs tracking-wide text-(--color-signal)">
            HARGA
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-(--color-ink)">
            Satu kali bayar. Tidak ada kejutan.
          </h2>
          <p className="mt-3 max-w-md text-(--color-ink-soft)">
            Harga akhir menyesuaikan jumlah halaman dan fitur tambahan yang
            Anda butuhkan. Konsultasi dan estimasi awal tidak dipungut biaya.
          </p>

          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-md bg-(--color-cta) px-5 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Tanya Harga via WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-(--color-line) bg-(--color-paper-raised)">
          <div className="flex items-baseline justify-between border-b border-(--color-line) bg-(--color-signal-soft) px-6 py-6">
            <div>
              <span className="font-mono text-xs text-(--color-ink-soft)">MULAI DARI</span>
              <div className="font-display text-4xl font-bold text-(--color-ink)">
                Rp200.000
              </div>
            </div>
            <span className="font-mono text-xs text-(--color-signal)">/ sekali bayar</span>
          </div>

          <ul className="flex flex-col gap-3 px-6 py-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-(--color-ink)">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-signal)" />
                {item}
              </li>
            ))}
          </ul>

          <div className="border-t border-(--color-line) bg-(--color-paper) px-6 py-5">
            <span className="font-mono text-xs text-(--color-ink-soft)">
              YANG TETAP ANDA BAYAR TERPISAH
            </span>
            <ul className="mt-2 flex flex-col gap-1">
              {excluded.map((e) => (
                <li key={e.label} className="text-sm text-(--color-ink-soft)">
                  <span className="font-medium text-(--color-ink)">{e.label}</span> —{" "}
                  {e.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
