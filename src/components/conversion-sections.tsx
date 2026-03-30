import Link from "next/link";
import {
  REAL_RESULTS_CARDS,
  REAL_RESULTS_HEADLINE,
  REPORT_SHOWCASE,
  SCAN_SECURITY_LINES,
} from "@/content/conversion-copy";
import { PreviewReportMock } from "@/components/product-visuals";

export function ScanSecurityTrustBlock() {
  return (
    <div
      className="mt-8 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/25 to-black/40 px-4 py-4 sm:px-5"
      role="region"
      aria-label="Privacy and security"
    >
      <ul className="space-y-2.5 text-sm text-zinc-400">
        {SCAN_SECURITY_LINES.map((line) => (
          <li key={line.text} className="flex gap-3">
            <span className="shrink-0 opacity-90" aria-hidden>
              {line.icon}
            </span>
            <span>{line.text}</span>
          </li>
        ))}
      </ul>
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
