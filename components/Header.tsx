import Link from "next/link";
import { defaultWaMessage, site, waLink } from "@/lib/site-config";

const navItems = [
  { href: "#bukti", label: "Bukti Nyata" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#harga", label: "Harga" },
  { href: "#fitur", label: "Fitur" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--color-line) bg-(--color-paper)/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="#" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-(--color-signal)" />
          <span className="font-display text-lg font-bold tracking-tight text-(--color-ink)">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-(--color-ink-soft) transition-colors hover:text-(--color-ink)"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-(--color-cta) px-4 py-2 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Chat WhatsApp
        </a>
      </div>
    </header>
  );
}
