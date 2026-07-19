import { proofShots } from "@/lib/site-config";
import ProofShot from "@/components/ProofShot";

export default function ProofSection() {
  return (
    <section id="bukti" className="bg-(--color-ink) py-20 text-(--color-paper)">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-xl">
          <span className="font-mono text-xs tracking-wide text-(--color-signal-soft)">
            BUKTI NYATA, BUKAN JANJI
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
            Data langsung dari klien kami
          </h2>
          <p className="mt-3 text-(--color-paper)/70">
            Skor performa, grafik pencarian Google, sampai dashboard admin —
            semuanya diambil dari website yang sudah berjalan, bukan simulasi.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proofShots.map((shot, i) => (
            <ProofShot key={shot.slug} shot={shot} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
