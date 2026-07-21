import { websiteTypes } from "@/lib/site-config";
import ShowcaseImage from "@/components/ShowcaseImage";

export default function WebsiteTypes() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-12 max-w-xl">
        <span className="font-mono text-xs tracking-wide text-(--color-signal)">
          JENIS WEBSITE
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-(--color-ink)">
          Disesuaikan dengan tujuan bisnis Anda
        </h2>
        <p className="mt-3 text-(--color-ink-soft)">
          Setiap bisnis punya kebutuhan berbeda. Berikut empat jenis website
          yang paling sering kami buat, masing-masing dengan contoh nyata —
          bukan sekadar mockup desain.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {websiteTypes.map((type) => (
          <div
            key={type.slug}
            className="flex flex-col overflow-hidden rounded-xl border border-(--color-line) bg-(--color-paper-raised)"
          >
            <div
              className={`grid gap-1 bg-(--color-line) p-1 ${
                type.examples.length > 1 ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {type.examples.map((ex) => (
                <a
                  key={ex.file}
                  href={ex.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/3] overflow-hidden"
                >
                  <ShowcaseImage file={ex.file} alt={type.title} label={ex.siteName} />
                  <span className="absolute inset-x-0 bottom-0 bg-(--color-ink)/80 px-2 py-1 font-mono text-[10px] text-(--color-paper) opacity-0 transition-opacity group-hover:opacity-100">
                    {ex.siteName} ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h3 className="font-display text-xl font-semibold text-(--color-ink)">
                {type.title}
              </h3>
              <p className="text-sm leading-relaxed text-(--color-ink-soft)">
                {type.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
