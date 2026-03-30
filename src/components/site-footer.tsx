import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050807] py-12 text-sm text-zinc-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="font-medium text-zinc-300">OfferSprinter</p>
            <p className="leading-relaxed">
              Scores are heuristic and illustrative — not an official ATS result
              from any employer. Results vary by role, market, and employer systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-emerald-400">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-emerald-400">
              Terms
            </Link>
          </div>
        </div>
        <p className="mt-10 text-xs text-zinc-600">
          © {new Date().getFullYear()} OfferSprinter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
