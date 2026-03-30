import { Fragment } from "react";
import Link from "next/link";
import {
  ATS_BEFORE_AFTER,
  MONEY_BACK_GUARANTEE,
  REAL_RESULTS_CARDS,
  REAL_RESULTS_HEADLINE,
  REPORT_SHOWCASE,
  SECURITY_BADGES,
  USAGE_FLOW,
} from "@/content/conversion-copy";
import { PreviewReportMock } from "@/components/product-visuals";

function BadgeFace({
  icon,
  title,
  sub,
  pulse,
  className,
}: {
  icon: string;
  title: string;
  sub: string;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full min-h-0 min-w-0 items-start gap-4 rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-zinc-900/90 to-black/60 px-5 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:px-6 sm:py-5 ${
        pulse ? "os-security-pulse" : ""
      } ${className ?? ""}`}
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-[1.35rem] leading-none ring-1 ring-emerald-500/30 sm:h-[3.25rem] sm:w-[3.25rem] sm:text-2xl"
        aria-hidden
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-white sm:text-base">
          {title}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:text-[0.8125rem] sm:leading-relaxed">
          {sub}
        </p>
      </div>
    </div>
  );
}

/** Hero trust row — 2×2 grid so cards aren’t squeezed in the half-width column. */
export function SecurityBadgeStrip() {
  return (
    <div
      className="mt-10 w-full"
      role="region"
      aria-label="Security and privacy guarantees"
    >
      <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 lg:text-left">
        Your file stays private
      </p>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {SECURITY_BADGES.map((b, i) => (
          <li key={b.title} className="min-h-0 min-w-0">
            <BadgeFace {...b} pulse={i === 0} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Larger grid — upload area. */
export function ScanSecurityTrustBlock() {
  return (
    <div
      className="mt-8 overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/35 via-black/50 to-black/70 p-1 shadow-[0_0_48px_-20px_rgba(16,185,129,0.35)]"
      role="region"
      aria-label="Privacy and security"
    >
      <div className="rounded-[0.9rem] border border-white/5 bg-black/20 px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400/90 sm:text-left">
          Security &amp; privacy
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {SECURITY_BADGES.map((b, i) => (
            <li key={b.title} className="min-h-0">
              <BadgeFace {...b} pulse={i === 0} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function RealResultsDataSection() {
  return (
    <section
      className="relative px-4 py-24 sm:px-6"
      aria-labelledby="real-results-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <h2
          id="real-results-heading"
          className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl"
        >
          {REAL_RESULTS_HEADLINE}
        </h2>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {REAL_RESULTS_CARDS.map((card) => (
            <li
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 transition hover:border-emerald-500/30 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.25)]"
            >
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/15" />
              <p className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-emerald-400 sm:text-5xl">
                {card.stat}
              </p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ReportShowcaseSection() {
  const R = REPORT_SHOWCASE;
  return (
    <section
      id="report-preview"
      className="scroll-mt-24 border-t border-white/10 bg-gradient-to-b from-black/40 to-transparent px-4 py-24 sm:px-6"
      aria-labelledby="report-showcase-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="report-showcase-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl md:text-[2.35rem] md:leading-tight"
          >
            {R.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">{R.subtitle}</p>
        </div>

        <div className="mt-14 lg:grid lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-7">
            <PreviewReportMock />
            <p className="mt-4 text-center text-xs text-zinc-600 lg:text-left">
              Illustrative sample — your file produces a personalized report.
            </p>
          </div>
          <div className="mt-10 space-y-5 lg:col-span-5 lg:mt-0">
            <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {R.healthTitle}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                {R.healthScore}{" "}
                <span className="text-base font-normal text-amber-400/90">
                  — {R.healthBadge}
                </span>
              </p>
              <p className="mt-3 text-sm text-zinc-400">{R.healthNote}</p>
            </article>
            <article className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80">
                {R.interviewTitle}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
                {R.interviewBefore}
              </p>
              <p className="mt-4 text-sm text-zinc-400">
                <span className="font-medium text-zinc-300">{R.interviewAfterLabel}</span>{" "}
                <span className="font-semibold text-emerald-400">{R.interviewAfter}</span>
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {R.issuesTitle}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
                {R.issues.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-400/80">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {R.keywordsTitle}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">{R.keywordsLead}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {R.keywords.map((kw) => (
                  <li
                    key={kw}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/50 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {R.salaryTitle}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">{R.salaryCurrentLabel}</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                {R.salaryCurrent}
              </p>
              <p className="mt-4 text-sm text-zinc-500">{R.salaryPotentialLabel}</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-emerald-400">
                {R.salaryPotential}
              </p>
              <p className="mt-3 text-xs text-zinc-600">
                Illustrative ranges — not a guarantee of compensation.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-950/30 to-transparent px-6 py-10 text-center sm:px-10">
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
            {R.ctaTitle}
          </p>
          <Link
            href="/#scan"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-500 px-10 py-4 text-base font-bold text-zinc-950 shadow-[0_0_40px_-8px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400"
          >
            {R.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center py-1 text-zinc-600 lg:py-0 ${className ?? ""}`}
      aria-hidden
    >
      <span className="flex flex-row items-center gap-1 lg:gap-0.5">
        <span className="os-flow-connector hidden h-px w-5 max-w-[2.5rem] bg-gradient-to-r from-transparent to-emerald-500/45 sm:w-8 lg:block" />
        <span className="text-lg font-semibold leading-none text-emerald-500/85 lg:text-xl">
          <span className="lg:hidden">↓</span>
          <span className="hidden lg:inline">→</span>
        </span>
        <span className="os-flow-connector hidden h-px w-5 max-w-[2.5rem] bg-gradient-to-l from-transparent to-emerald-500/45 sm:w-8 lg:block" />
      </span>
    </div>
  );
}

/** Full journey visualization — reduces “black box” anxiety. */
export function UsageFlowSection() {
  const F = USAGE_FLOW;
  const steps = [...F.steps];
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 border-t border-white/10 bg-gradient-to-b from-[#050807] via-[#070a09] to-transparent px-4 py-24 sm:px-6"
      aria-labelledby="usage-flow-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-500/85">
            {F.eyebrow}
          </p>
          <h2
            id="usage-flow-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.45rem] md:leading-[1.12]"
          >
            {F.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {F.subtitle}
          </p>
        </div>

        <div
          className="os-stagger mt-14 flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0"
          role="list"
          aria-label="Steps from resume upload to interviews"
        >
          {steps.map((step, i) => (
            <Fragment key={step.key}>
              <div
                role="listitem"
                className="group relative flex min-h-0 flex-1 flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/60 to-black/50 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition hover:border-emerald-500/25 hover:shadow-[0_0_48px_-20px_rgba(16,185,129,0.2)]"
              >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl">
                  {step.title}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                  {step.body}
                </p>
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 50% 0%, rgba(16,185,129,0.12), transparent 55%)",
                  }}
                />
              </div>
              {i < steps.length - 1 ? (
                <FlowArrow className="lg:w-10 lg:px-1 xl:w-14 xl:px-2" />
              ) : null}
            </Fragment>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-zinc-600">
          Upload → personalized report → apply with clarity → stack conversations.
        </p>
      </div>
    </section>
  );
}

/** Before/after ATS scores — high-signal social proof. */
export function AtsBeforeAfterSection() {
  const A = ATS_BEFORE_AFTER;
  return (
    <section
      className="relative px-4 py-24 sm:px-6"
      aria-labelledby="ats-before-after-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500/25 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-500">
            {A.eyebrow}
          </p>
          <h2
            id="ats-before-after-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {A.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">{A.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/35 via-zinc-950/80 to-black p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-wider text-red-300/80">
              {A.beforeLabel}
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold tabular-nums tracking-tight text-white sm:text-7xl">
              {A.beforeScore}
              <span className="text-2xl font-medium text-zinc-600 sm:text-3xl">/100</span>
            </p>
            <p className="mt-2 text-sm font-medium text-red-200/70">ATS score</p>
            <div className="mt-8 h-3 overflow-hidden rounded-full bg-black/50 ring-1 ring-red-500/20">
              <div
                className="os-ats-bar-before h-full rounded-full bg-gradient-to-r from-red-600/90 to-amber-600/70"
                style={{ width: `${A.beforeScore}%` }}
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">{A.beforeNote}</p>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-emerald-500/35 bg-gradient-to-br from-emerald-950/40 via-zinc-950/80 to-black p-8 sm:p-10 shadow-[0_0_60px_-24px_rgba(16,185,129,0.35)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-emerald-500/15 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300/90">
              {A.afterLabel}
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold tabular-nums tracking-tight text-emerald-300 sm:text-7xl">
              {A.afterScore}
              <span className="text-2xl font-medium text-emerald-700/80 sm:text-3xl">/100</span>
            </p>
            <p className="mt-2 text-sm font-medium text-emerald-200/80">ATS score</p>
            <div className="mt-8 h-3 overflow-hidden rounded-full bg-black/50 ring-1 ring-emerald-500/30">
              <div
                className="os-ats-bar-after h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                style={{ width: `${A.afterScore}%` }}
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">{A.afterNote}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

/** Pricing-adjacent risk reversal — cold traffic trust. */
export function MoneyBackGuaranteeBanner() {
  const G = MONEY_BACK_GUARANTEE;
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/35 via-zinc-950/50 to-black p-6 shadow-[0_0_40px_-16px_rgba(245,158,11,0.2)] sm:p-8"
      role="region"
      aria-label={G.title}
    >
      <div className="pointer-events-none absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-amber-400/10 blur-2xl" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/35 bg-amber-500/10 text-2xl"
          aria-hidden
        >
          🛡️
        </span>
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="inline-flex rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-200/95">
            {G.badge}
          </p>
          <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
            {G.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{G.body}</p>
          <p className="mt-3 text-xs text-zinc-600">{G.foot}</p>
        </div>
      </div>
    </div>
  );
}
