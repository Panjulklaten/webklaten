import { proofShots } from "@/lib/site-config";
import ProofShot from "@/components/ProofShot";

const features = [
  {
    title: "Payment Gateway (QRIS)",
    body: "Ingin pelanggan bisa bayar tanpa ribet transfer manual dan konfirmasi bukti bayar satu per satu? Website bisa dilengkapi payment gateway dengan pembayaran QRIS — pelanggan tinggal scan, bayar, dan pesanan otomatis tercatat lunas tanpa Anda harus mengecek mutasi rekening.",
  },
  {
    title: "Booking Otomatis",
    body: "Cocok untuk bisnis jasa dan travel yang butuh sistem reservasi berjalan sendiri. Pelanggan memilih tanggal atau jadwal, sistem mengecek ketersediaan secara otomatis, dan konfirmasi langsung terkirim — tanpa Anda perlu membalas satu per satu chat masuk.",
  },
  {
    title: "Pembelian Tiket",
    body: "Untuk bisnis travel, wisata, atau event, website bisa dilengkapi sistem pembelian tiket online. Pelanggan memilih jadwal atau rute, membayar, lalu langsung menerima bukti tiket digital — tanpa perlu antre atau datang ke lokasi.",
  },
  {
    title: "Checkout Langsung / Tertaut WhatsApp",
    body: "Tidak semua bisnis butuh sistem checkout yang rumit. Untuk kebutuhan yang lebih sederhana, tombol pemesanan bisa langsung diarahkan ke WhatsApp lengkap dengan pesan otomatis berisi detail produk yang dipilih — pelanggan tinggal kirim, Anda tinggal proses.",
  },
];

export default function Features() {
  const dashboardShot = proofShots.find((s) => s.slug === "admin-dashboard")!;

  return (
    <section id="fitur" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 max-w-xl">
        <span className="font-mono text-xs tracking-wide text-(--color-signal)">
          FITUR TAMBAHAN
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-(--color-ink)">
          Untuk yang butuh lebih dari sekadar profil
        </h2>
        <p className="mt-3 text-(--color-ink-soft)">
          Website tidak berhenti di halaman informasi. Sesuai kebutuhan
          bisnis, website Anda bisa dilengkapi salah satu atau kombinasi
          fitur berikut.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-(--color-line) bg-(--color-paper-raised) p-6"
            >
              <h3 className="font-display text-lg font-semibold text-(--color-ink)">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-(--color-ink-soft)">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <ProofShot shot={dashboardShot} index={4} />
          <p className="px-1 text-sm leading-relaxed text-(--color-ink-soft)">
            Butuh kelola pesanan, konten, atau data pelanggan sendiri tanpa
            harus minta bantuan developer setiap kali ada perubahan? Website
            juga bisa dilengkapi <strong className="text-(--color-ink)">dashboard admin</strong>{" "}
            khusus, dirancang mengikuti alur kerja bisnis Anda sendiri.
          </p>
        </div>
      </div>
    </section>
  );
}
