const pillars = [
  {
    code: "EXPERIENCE",
    title: "Bukan portofolio kosong",
    body: "Setiap website yang kami sebut di sini benar-benar live, dipakai bisnis nyata, dan bisa Anda kunjungi sekarang juga — bukan mockup di Figma.",
  },
  {
    code: "EXPERTISE",
    title: "Dibangun sesuai standar teknis",
    body: "Next.js, struktur data terstruktur (schema), sitemap, dan optimasi performa diterapkan dari awal — bukan ditambal belakangan.",
  },
  {
    code: "AUTHORITATIVENESS",
    title: "Terbukti muncul di Google",
    body: "Bukan sekadar 'online', tapi ditemukan. Grafik performa pencarian & data klik nyata kami tunjukkan di bawah, bukan klaim tanpa data.",
  },
  {
    code: "TRUST",
    title: "Harga jujur dari awal",
    body: "Tidak ada biaya bulanan mengejutkan. Anda tahu persis apa yang dibayar: sekali bayar pembuatan, domain per tahun, selesai.",
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-12 max-w-xl">
        <span className="font-mono text-xs tracking-wide text-(--color-signal)">
          KENAPA WEBSITE INI BERBEDA
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-(--color-ink)">
          Empat hal yang bisa Anda periksa sendiri
        </h2>
        <p className="mt-3 text-(--color-ink-soft)">
          Kami tidak minta Anda percaya begitu saja. Setiap poin di bawah bisa
          Anda cek langsung sebelum memutuskan.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-lg border border-(--color-line) bg-(--color-line) sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.code} className="flex flex-col gap-3 bg-(--color-paper-raised) p-6">
            <span className="font-mono text-[10px] tracking-wider text-(--color-ink-soft)">
              {p.code}
            </span>
            <h3 className="font-display text-lg font-semibold text-(--color-ink)">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-(--color-ink-soft)">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
