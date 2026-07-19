const faqs = [
  {
    q: "Benar tidak ada biaya bulanan sama sekali?",
    a: "Benar. Anda hanya membayar sekali untuk pembuatan website. Biaya yang berjalan tiap tahun hanya perpanjangan domain, besarnya tergantung jenis domain yang Anda pilih.",
  },
  {
    q: "Kalau tidak bayar hosting, apa website ini nanti seperti blogspot atau website gratisan?",
    a: "Tidak. Website tetap website resmi dengan domain sendiri dan performa yang dioptimasi — biaya hosting sudah termasuk dalam paket, bukan dihilangkan begitu saja.",
  },
  {
    q: "Bagaimana saya tahu ini bukan sekadar klaim?",
    a: "Semua website di bagian portofolio adalah website aktif milik klien nyata yang bisa Anda kunjungi dan periksa sendiri, lengkap dengan bukti performa dan data pencarian Google.",
  },
  {
    q: "Website ini cocok untuk usaha saya tidak?",
    a: "Cocok untuk UMKM, jasa, portofolio pribadi, hingga bisnis yang butuh jualan online dengan payment gateway dan dashboard admin sendiri.",
  },
];

export default function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <div className="mb-10">
        <span className="font-mono text-xs tracking-wide text-(--color-signal)">
          PERTANYAAN UMUM
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-(--color-ink)">
          Sebelum Anda tanya lewat WhatsApp
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-(--color-line) border-y border-(--color-line)">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-(--color-ink)">
              {f.q}
              <span className="shrink-0 font-mono text-(--color-ink-soft) transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-(--color-ink-soft)">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
