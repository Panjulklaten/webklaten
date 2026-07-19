import { defaultWaMessage, site, waLink } from "@/lib/site-config";

export default function Footer() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-(--color-line) bg-(--color-signal-soft) p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-(--color-ink)">
              Siap punya website sendiri?
            </h2>
            <p className="mt-2 max-w-md text-(--color-ink-soft)">
              Chat langsung dengan {site.contactPerson}, ceritakan kebutuhan
              Anda, dan dapatkan estimasi tanpa biaya.
            </p>
          </div>
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md bg-(--color-cta) px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      <footer className="border-t border-(--color-line) bg-(--color-paper-raised)">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-(--color-signal)" />
            <span className="font-display text-sm font-semibold text-(--color-ink)">
              {site.name}
            </span>
          </div>
          <p className="font-mono text-xs text-(--color-ink-soft)">
            Dikelola oleh {site.contactPerson} · WhatsApp {site.whatsappRaw}
          </p>
          <p className="font-mono text-xs text-(--color-ink-soft)">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </>
  );
}
