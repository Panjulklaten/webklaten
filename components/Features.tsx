import { proofShots } from "@/lib/site-config";
import ProofShot from "@/components/ProofShot";

const features = [
  {
    title: "Payment Gateway (QRIS)",
    body: "Ingin jualan langsung dari website? Website bisa dilengkapi payment gateway dengan pembayaran QRIS, jadi pelanggan bisa bayar langsung tanpa transfer manual.",
  },
  {
    title: "Dashboard Admin",
    body: "Butuh kelola pesanan, konten, atau data pelanggan sendiri tanpa minta bantuan developer tiap kali? Website bisa dilengkapi dashboard admin khusus.",
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
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-(--color-line) bg-(--color-paper-raised) p-6"
            >
              <h3 className="font-display text-xl font-semibold text-(--color-ink)">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-(--color-ink-soft)">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <ProofShot shot={dashboardShot} index={4} />
      </div>
    </section>
  );
}
