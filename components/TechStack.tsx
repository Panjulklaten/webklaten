const stacks = [
  {
    name: "Next.js",
    tag: "Rekomendasi untuk kebutuhan kompleks",
    highlight: true,
    points: [
      "Tanpa biaya hosting bulanan — sesuai model harga webklaten.biz.id",
      "Performa lebih cepat, langsung terlihat di skor PageSpeed",
      "Tidak bergantung plugin pihak ketiga yang rawan celah keamanan",
      "Fleksibel untuk fitur khusus: booking otomatis, payment gateway, dashboard admin, hingga sistem custom lain",
    ],
  },
  {
    name: "WordPress",
    tag: "Untuk kebutuhan yang lebih sederhana",
    highlight: false,
    points: [
      "Menggunakan CMS populer yang sudah dikenal luas",
      "Konten (tulisan, gambar) bisa dikelola sendiri lewat dashboard visual",
      "Butuh biaya hosting berjalan tiap bulan/tahun secara terpisah",
      "Bergantung pada plugin untuk fitur tambahan — perlu perawatan rutin",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 max-w-xl">
        <span className="font-mono text-xs tracking-wide text-(--color-signal)">
          FRAMEWORK WEBSITE
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-(--color-ink)">
          Next.js atau WordPress? Disesuaikan kebutuhan.
        </h2>
        <p className="mt-3 text-(--color-ink-soft)">
          Website Anda bisa dibangun memakai Next.js maupun WordPress —
          keduanya punya kelebihan masing-masing, dan pilihannya kami
          sesuaikan dengan seberapa kompleks kebutuhan bisnis Anda.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {stacks.map((s) => (
          <div
            key={s.name}
            className={`flex flex-col gap-4 rounded-xl border p-6 ${
              s.highlight
                ? "border-(--color-signal) bg-(--color-signal-soft)"
                : "border-(--color-line) bg-(--color-paper-raised)"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-(--color-ink)">
                {s.name}
              </h3>
              {s.highlight && (
                <span className="rounded-full bg-(--color-signal) px-2.5 py-0.5 font-mono text-[10px] text-white">
                  DIREKOMENDASIKAN
                </span>
              )}
            </div>
            <span className="font-mono text-xs text-(--color-ink-soft)">{s.tag}</span>
            <ul className="flex flex-col gap-2.5">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-(--color-ink)">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-signal)" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-(--color-ink-soft)">
        Singkatnya: untuk kebutuhan sederhana seperti profil usaha atau blog,
        WordPress bisa jadi pilihan yang praktis. Namun untuk fitur yang
        lebih kompleks — booking otomatis, payment gateway, dashboard admin
        khusus — <strong className="text-(--color-ink)">Next.js adalah pilihan yang lebih tepat</strong>:
        lebih cepat, lebih aman, dan tanpa biaya hosting bulanan.
      </p>
    </section>
  );
}
