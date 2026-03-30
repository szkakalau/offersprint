import {
  BURST_HEADLINE,
  BURST_STATS,
  BURST_STATS_NOTE,
  BURST_TESTIMONIALS,
} from "@/content/conversion-copy";
import { HERO_SOCIAL_LINE } from "@/content/social-proof";

function StarRow() {
  return (
    <p className="flex gap-0.5 text-amber-400/95" aria-label="5 out of 5 stars">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </p>
  );
}

function InitialMark({ name }: { name: string }) {
  const parts = name.replace(/\./g, "").split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "?";
  const b = parts[1]?.[0] ?? "";
  const label = (a + b).toUpperCase().slice(0, 2);
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-950/40 text-xs font-bold text-emerald-200 ring-1 ring-emerald-500/25"
      aria-hidden
    >
      {label}
    </span>
  );
}

export function HeroSocialProofLine() {
  return (
    <p className="mt-8 text-sm font-medium text-zinc-400">
      <span className="bg-gradient-to-r from-emerald-200/90 to-emerald-400/80 bg-clip-text text-transparent">
        {HERO_SOCIAL_LINE}
      </span>
    </p>
  );
}

export function SocialProofBurstSection() {
  const featured = BURST_TESTIMONIALS.filter((t) => t.kind === "featured");
  const shorts = BURST_TESTIMONIALS.filter((t) => t.kind === "short");

  return (
    <section
      className="relative overflow-hidden border-y border-emerald-500/15 bg-[#050807] px-4 py-20 sm:px-6"
      aria-labelledby="burst-trust-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <h2
          id="burst-trust-heading"
          className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight"
        >
          {BURST_HEADLINE}
        </h2>

        <div className="os-stagger mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {BURST_STATS.map((s) => (
            <div
              key={s.label}
              className="min-w-[11rem] shrink-0 snap-center rounded-2xl border border-white/10 bg-zinc-900/50 px-5 py-5 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:min-w-0"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-zinc-600">{BURST_STATS_NOTE}</p>

        <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {featured.map((t) => (
            <li
              key={t.name + t.headline}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 p-6 shadow-[0_24px_60px_-40px_rgba(16,185,129,0.35)] lg:col-span-6 lg:first:border-emerald-500/25"
            >
              <StarRow />
              <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white">
                {t.headline}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{t.body}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <InitialMark name={t.name} />
                <div>
                  <p className="text-sm font-medium text-white">— {t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
          {shorts.map((t) => (
            <li
              key={t.name + t.quote}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-5 lg:col-span-6"
            >
              <StarRow />
              <p className="mt-3 font-[family-name:var(--font-display)] text-base font-medium text-zinc-200">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                — {t.name}, {t.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
