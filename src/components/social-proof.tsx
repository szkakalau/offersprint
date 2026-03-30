import {
  BURST_HEADLINE,
  BURST_STATS,
  BURST_STATS_NOTE,
  BURST_TESTIMONIALS,
  HUMAN_TIMELINE,
  PRESS_TRUST_STRIP,
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

/** Stock-style portrait for marketing demos — not the user’s real photo. */
function TimelineAvatar({
  imgId,
  size = "lg",
}: {
  imgId: number;
  size?: "sm" | "lg";
}) {
  const dim = size === "sm" ? 88 : 160;
  const cls =
    size === "sm"
      ? "h-11 w-11 ring-2 ring-white/12"
      : "h-14 w-14 ring-2 ring-white/15 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)]";
  return (
    <img
      src={`https://i.pravatar.cc/${dim}?img=${imgId}`}
      alt=""
      width={size === "sm" ? 44 : 56}
      height={size === "sm" ? 44 : 56}
      loading="lazy"
      decoding="async"
      className={`shrink-0 rounded-full object-cover ${cls}`}
    />
  );
}

/** “As seen on” / community trust — text-forward, no fake logo marks. */
export function PressTrustStrip() {
  const P = PRESS_TRUST_STRIP;
  return (
    <section
      className="relative border-b border-white/[0.06] bg-[#040605] px-4 py-6 sm:px-6"
      aria-label={P.title}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(16,185,129,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-600">
          {P.eyebrow}
        </p>
        <p className="mt-2 text-center font-[family-name:var(--font-display)] text-lg font-semibold text-zinc-200 sm:text-xl">
          {P.title}
        </p>
        <ul className="mt-6 flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {P.outlets.map((o) => (
            <li
              key={o.name}
              className="flex min-w-[10.5rem] max-w-[14rem] flex-1 flex-col justify-center rounded-2xl border border-white/[0.08] bg-zinc-950/60 px-4 py-3 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:min-w-[11rem] sm:flex-none sm:px-5 sm:py-3.5"
            >
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-white">
                {o.name}
              </span>
              <span className="mt-1 text-[11px] leading-snug text-zinc-500">{o.detail}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-5 max-w-2xl text-center text-[11px] leading-relaxed text-zinc-600">
          {P.note}
        </p>
      </div>
    </section>
  );
}

function HumanProofTimeline() {
  const T = HUMAN_TIMELINE;
  return (
    <div className="mt-20 border-t border-white/10 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-emerald-500/85">
          {T.eyebrow}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {T.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">{T.subtitle}</p>
      </div>

      <ol className="relative mx-auto mt-12 max-w-2xl pl-2 sm:pl-0">
        <span
          className="pointer-events-none absolute left-[1.35rem] top-2 bottom-2 hidden w-px bg-gradient-to-b from-emerald-500/45 via-white/10 to-transparent sm:left-[1.65rem] sm:block"
          aria-hidden
        />
        {T.items.map((item, i) => (
          <li key={item.name + item.timeLabel} className="relative pb-12 last:pb-0 sm:pl-16">
            <span
              className="absolute left-[1.15rem] top-5 hidden h-2.5 w-2.5 rounded-full border-2 border-[#050807] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)] sm:left-[1.5rem] sm:block"
              aria-hidden
            />
            <article className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-zinc-900/70 to-black/60 p-5 shadow-[0_20px_50px_-35px_rgba(16,185,129,0.35)] sm:p-6">
              <div className="flex gap-4">
                <TimelineAvatar imgId={item.avatarImg} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-base font-semibold text-white sm:text-lg">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-[#9eb4cf] sm:text-[0.8125rem]">
                        {item.headline}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-md border border-white/10 bg-black/30 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                      {item.timeLabel}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] font-medium text-zinc-600">{item.meta}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[0.9375rem]">
                    &ldquo;{item.excerpt}&rdquo;
                  </p>
                </div>
              </div>
            </article>
            {i < T.items.length - 1 ? (
              <div
                className="my-4 ml-7 h-6 w-px bg-gradient-to-b from-emerald-500/20 to-transparent sm:hidden"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
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

        <HumanProofTimeline />

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
                <TimelineAvatar imgId={t.portraitId} size="sm" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs leading-snug text-[#9eb4cf]">{t.identityLine}</p>
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
