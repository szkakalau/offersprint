import {
  HERO_SOCIAL_LINE,
  MEDIA_MENTIONS,
  TESTIMONIALS,
  TRUST_STATS,
  TRUST_STATS_NOTE,
} from "@/content/social-proof";

function Stars({ n }: { n: 4 | 5 }) {
  return (
    <p className="flex gap-0.5 text-emerald-400" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < n ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </p>
  );
}

function InitialAvatar({ name }: { name: string }) {
  const parts = name.replace(/\./g, "").split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "?";
  const b = parts[1]?.[0] ?? "";
  const label = (a + b).toUpperCase().slice(0, 2);
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/25"
      aria-hidden
    >
      {label}
    </span>
  );
}

export function HeroSocialProofLine() {
  return (
    <p className="mt-8 text-sm font-medium text-zinc-400">
      <span className="text-emerald-400/90">{HERO_SOCIAL_LINE}</span>
    </p>
  );
}

export function TrustSignalsSection() {
  return (
    <section
      className="border-y border-white/10 bg-zinc-950/40 px-4 py-14 sm:px-6"
      aria-labelledby="trust-signals-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="trust-signals-heading" className="sr-only">
          Trust and usage signals
        </h2>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-zinc-600 sm:text-left">{TRUST_STATS_NOTE}</p>
        <p className="mt-4 text-center text-xs text-zinc-600 sm:text-left">
          <span className="text-zinc-500">Privacy:</span> We don&apos;t sell your resume or
          share it with employers.
        </p>

        <div className="mt-14 border-t border-white/10 pt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Mentioned &amp; shared in
          </p>
          <ul className="mt-8 flex flex-wrap items-end justify-center gap-x-10 gap-y-8 sm:gap-x-14">
            {MEDIA_MENTIONS.map((m) => {
              const inner = (
                <>
                  <span className="block font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-zinc-200 sm:text-xl">
                    {m.name}
                  </span>
                  <span className="mt-1 block text-xs text-zinc-600">{m.detail}</span>
                </>
              );
              return (
                <li key={m.name}>
                  {m.href ? (
                    <a
                      href={m.href}
                      className="block text-center transition hover:text-emerald-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {inner}
                    </a>
                  ) : (
                    <span className="block text-center opacity-90">{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 sm:px-6" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-5xl">
        <h2
          id="testimonials-heading"
          className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl"
        >
          What job seekers say
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-zinc-500">
          Real feedback from early users and beta participants — individual results vary.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900/35 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
            >
              <Stars n={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <InitialAvatar name={t.name} />
                <div>
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">
                    {t.role}
                    <span className="text-zinc-600"> · {t.locale}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
