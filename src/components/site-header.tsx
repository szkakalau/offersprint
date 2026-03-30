import Link from "next/link";

const nav = [
  { href: "/#scan", label: "Scan resume" },
  { href: "/#program", label: "Program" },
  { href: "/#founder", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a09]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white"
        >
          OfferSprinter
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/#scan"
          className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-4px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400"
        >
          Scan resume free
        </a>
      </div>
    </header>
  );
}
