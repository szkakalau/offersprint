import type { ReactNode } from "react";

/** CSS-built product mocks & diagrams — no bitmap assets required. */

function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0f0e] shadow-2xl ring-1 ring-white/5">
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/50 px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </span>
        <div className="mx-auto flex max-w-[min(100%,14rem)] flex-1 items-center rounded-md bg-black/60 px-2 py-1 text-center font-mono text-[10px] text-zinc-500 sm:text-xs">
          <span className="truncate">offersprint.app/result</span>
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-zinc-900/90 to-[#070a09] p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
}

function KeywordBar({ label, pct, tone }: { label: string; pct: number; tone: "bad" | "mid" | "good" }) {
  const bar =
    tone === "bad"
      ? "from-red-500/70 to-amber-500/50"
      : tone === "mid"
        ? "from-amber-500/60 to-emerald-500/40"
        : "from-emerald-500/80 to-emerald-400/60";
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[10px] text-zinc-500 sm:text-xs">
        <span>{label}</span>
        <span className="font-mono text-zinc-400">{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-black/50">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${bar}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function HeroReportMock() {
  return (
    <div
      className="relative w-full max-w-[min(100%,380px)] [animation:os-float_6s_ease-in-out_infinite] motion-reduce:[animation:none]"
      aria-hidden
    >
      <div
        className="relative transform-gpu rounded-xl shadow-[0_24px_80px_-20px_rgba(16,185,129,0.25)]"
        style={{
          transform: "perspective(1000px) rotateX(4deg) rotateY(-2deg)",
        }}
      >
        <BrowserChrome>
          <div className="relative min-h-[200px]">
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-lg">
              <div
                className="absolute left-2 right-2 h-14 bg-gradient-to-b from-emerald-400/35 via-emerald-400/10 to-transparent motion-reduce:[animation:none!important]"
                style={{ animation: "os-scan-sweep 3.2s ease-in-out infinite" }}
              />
            </div>
            <div className="relative z-[1]">
            <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
              Scan preview
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <p className="text-[10px] text-zinc-500">ATS score</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                  48<span className="text-sm text-zinc-500">/100</span>
                </p>
              </div>
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/30 p-3">
                <p className="text-[10px] text-emerald-400/80">Interview</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-emerald-400">
                  17%
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <KeywordBar label="Role keywords" pct={38} tone="bad" />
              <KeywordBar label="Format / parse" pct={72} tone="mid" />
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/5 bg-black/20 px-2 py-2">
              <span
                className="relative flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/15 text-xs font-bold text-emerald-400"
                style={{ animation: "os-pulse-ring 2.8s ease-in-out infinite" }}
              >
                AI
              </span>
              <p className="text-[10px] leading-snug text-zinc-500">
                Analyzing sections &amp; keyword gaps…
              </p>
            </div>
          </div>
          </div>
        </BrowserChrome>
        <div
          className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-emerald-500/10 blur-3xl"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function PreviewReportMock() {
  return (
    <div className="relative w-full" aria-hidden>
      <div className="absolute -right-8 -top-6 hidden h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl md:block" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
        <BrowserChrome>
          <div className="relative">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">ATS score</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-4xl font-semibold text-white">
                48 <span className="text-lg font-normal text-zinc-500">/ 100</span>
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/40">
                <div
                  className="h-full w-[48%] rounded-full bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-500 bg-[length:200%_100%] [animation:os-shimmer_3s_linear_infinite] motion-reduce:[animation:none!important]"
                />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Interview probability
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-4xl font-semibold text-emerald-400">
                17%
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/40">
                <div className="h-full w-[17%] rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-sm font-medium text-zinc-300">Keyword coverage</p>
            <KeywordBar label="Stack & tools" pct={42} tone="bad" />
            <KeywordBar label="Impact metrics" pct={55} tone="mid" />
            <KeywordBar label="Role title match" pct={33} tone="bad" />
          </div>
          <p className="mt-8 text-sm font-medium text-zinc-300">Biggest issues found</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li className="flex gap-2">
              <span className="text-red-400/90">▸</span> Missing critical role keywords
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400/90">▸</span> Experience not aligned with target role
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-500">▸</span> Weak achievement framing
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-500">▸</span> Not optimized for ATS parsing
            </li>
          </ul>
          <p className="mt-8 border-t border-white/10 pt-6 text-sm text-zinc-400">
            After optimization (illustrative):{" "}
            <span className="font-semibold text-emerald-400">expected interview rate: 62%</span>
          </p>
          </div>
        </BrowserChrome>
      </div>
    </div>
  );
}

export function AtsPipelineDiagram() {
  return (
    <figure
      className="mx-auto mt-12 max-w-2xl"
      aria-label="How ATS filters resumes before a recruiter sees them"
    >
      <svg
        viewBox="0 0 560 120"
        className="h-auto w-full text-zinc-500"
        role="img"
      >
        <title>Resume to recruiter pipeline</title>
        <defs>
          <linearGradient id="os-pipe" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(63,63,70,0.9)" />
            <stop offset="50%" stopColor="rgba(16,185,129,0.35)" />
            <stop offset="100%" stopColor="rgba(63,63,70,0.9)" />
          </linearGradient>
        </defs>
        <rect x="8" y="28" width="120" height="64" rx="10" fill="rgba(24,24,27,0.8)" stroke="rgba(255,255,255,0.12)" />
        <text x="68" y="58" textAnchor="middle" fill="rgba(228,228,231,0.95)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="600">
          Résumé
        </text>
        <text x="68" y="78" textAnchor="middle" fill="rgba(161,161,170,0.9)" fontSize="11" fontFamily="system-ui,sans-serif">
          PDF / DOCX
        </text>
        <path d="M 136 60 L 168 60" stroke="url(#os-pipe)" strokeWidth="3" strokeLinecap="round" />
        <polygon points="168,60 158,54 158,66" fill="rgba(16,185,129,0.6)" />
        <rect x="176" y="18" width="200" height="84" rx="12" fill="rgba(6,78,59,0.25)" stroke="rgba(16,185,129,0.35)" />
        <text x="276" y="52" textAnchor="middle" fill="rgba(167,243,208,0.95)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="600">
          ATS &amp; algorithms
        </text>
        <text x="276" y="74" textAnchor="middle" fill="rgba(161,161,170,0.95)" fontSize="11" fontFamily="system-ui,sans-serif">
          Keywords · format · relevance
        </text>
        <text x="276" y="94" textAnchor="middle" fill="rgba(113,113,122,0.95)" fontSize="10" fontFamily="system-ui,sans-serif">
          ~75% filtered here
        </text>
        <path d="M 382 60 L 414 60" stroke="url(#os-pipe)" strokeWidth="3" strokeLinecap="round" />
        <polygon points="414,60 404,54 404,66" fill="rgba(16,185,129,0.5)" />
        <rect x="422" y="28" width="130" height="64" rx="10" fill="rgba(24,24,27,0.8)" stroke="rgba(255,255,255,0.12)" />
        <text x="487" y="58" textAnchor="middle" fill="rgba(228,228,231,0.95)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="600">
          Recruiter
        </text>
        <text x="487" y="78" textAnchor="middle" fill="rgba(161,161,170,0.9)" fontSize="11" fontFamily="system-ui,sans-serif">
          Human review
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-xs text-zinc-600">
        Illustrative — employer systems vary.
      </figcaption>
    </figure>
  );
}

export function UploadFlowStrip() {
  const steps = [
    { step: "1", label: "Email" },
    { step: "2", label: "Upload resume" },
    { step: "3", label: "Your report" },
  ];
  return (
    <ol className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-2 text-xs text-zinc-400 sm:gap-4">
      {steps.map((s, i) => (
        <li key={s.step} className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-bold text-emerald-400 ring-1 ring-emerald-500/30">
            {s.step}
          </span>
          <span className="hidden sm:inline">{s.label}</span>
          {i < steps.length - 1 ? (
            <span className="mx-1 text-zinc-600 sm:mx-2" aria-hidden>
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
