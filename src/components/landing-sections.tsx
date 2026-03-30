import Link from "next/link";
import {
  HeroReportMock,
  AtsPipelineDiagram,
  UploadFlowStrip,
} from "@/components/product-visuals";
import { HeroSocialProofLine } from "@/components/social-proof";
import { UploadSection } from "@/components/upload-section";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.22),transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400/90">
              OfferSprint — 14-day interview rate plan
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              You&apos;re not getting interviews because your resume is failing ATS.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl lg:mx-0">
              Stop sending resumes into the void. Upload your resume and discover your
              interview probability in about 60 seconds.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#scan"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-zinc-950 shadow-[0_0_40px_-8px_rgba(16,185,129,0.6)] transition hover:bg-emerald-400 sm:w-auto"
              >
                Scan resume free
              </a>
          <p className="text-sm text-zinc-500">
            Email + resume · Results in ~60s · No account password
          </p>
            </div>
            <HeroSocialProofLine />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-zinc-500 lg:justify-start">
              <span>Designed for competitive job markets</span>
              <span className="hidden sm:inline">·</span>
              <span>Private scan — we don&apos;t require an account</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <HeroReportMock />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PainSection() {
  return (
    <section className="border-y border-white/10 bg-black/20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
          75% of resumes are rejected before a human sees them.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Most job seekers think they have a &quot;good resume&quot;. But hiring
          today is run by algorithms.
        </p>
        <p className="mt-4 font-medium text-zinc-300">
          Your resume is judged by:
        </p>
        <ul className="mt-4 space-y-3 text-zinc-400">
          {[
            "ATS keyword matching",
            "Role relevance scoring",
            "Experience weighting",
            "Formatting filters",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-emerald-500">—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg font-medium text-white">
          If you don&apos;t pass ATS → you don&apos;t exist.
        </p>
        <AtsPipelineDiagram />
      </div>
    </section>
  );
}

export function ProgramIntroSection() {
  return (
    <section className="border-t border-white/10 bg-gradient-to-b from-emerald-950/20 to-transparent px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
          Introducing OfferSprint
        </h2>
        <p className="mt-2 text-xl text-emerald-400/90">
          A 14-day interview boost program
        </p>
        <p className="mt-6 text-lg text-zinc-400">
          We don&apos;t just fix resumes. We turn your job search into a system.
        </p>
      </div>
    </section>
  );
}

export function SprintContentSection() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Week 1 — Fix &amp; optimize
          </p>
          <ul className="mt-6 space-y-3 text-zinc-300">
            {[
              "ATS-optimized resume rewrite",
              "Role-targeted resume versions",
              "Keyword & achievement upgrade",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-emerald-500">✔</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Week 2 — Apply &amp; prepare
          </p>
          <ul className="mt-6 space-y-3 text-zinc-300">
            {[
              "30 tailored resumes generated",
              "30 custom cover letters",
              "Follow-up email templates",
              "Interview question prediction",
              "Answer generation & coaching",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-emerald-500">✔</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
          Our users don&apos;t buy resumes. They buy interviews.
        </h2>
        <p className="mt-3 text-sm text-zinc-500">
          Directional outcomes — individual results vary
        </p>
        <ul className="mt-10 flex flex-col gap-4 text-left sm:mx-auto sm:max-w-md">
          {[
            "More interviews vs. unfocused applications (varies by role)",
            "Higher application volume with tailored assets",
            "Stronger positioning in compensation conversations",
          ].map((t) => (
            <li
              key={t}
              className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-zinc-300"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckoutButton({
  plan,
  children,
  className,
}: {
  plan: "sprint" | "offer";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="plan" value={plan} />
      <button type="submit" className={className}>
        {children}
      </button>
    </form>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-white/10 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
          Turn your scan into interviews
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-zinc-500">
          You&apos;ve seen the gaps — here&apos;s how we help you close them.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900/30 p-8">
            <p className="text-sm font-medium text-zinc-500">Free</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-white">
              ATS resume scan
            </p>
            <p className="mt-4 flex-1 text-sm text-zinc-400">
              Instant heuristic report — email + resume, no password.
            </p>
            <a
              href="/#scan"
              className="mt-8 inline-flex justify-center rounded-full border border-white/20 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Scan free
            </a>
          </div>
          <div className="relative flex flex-col rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-8 shadow-[0_0_40px_-12px_rgba(16,185,129,0.4)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-zinc-950">
              Popular
            </span>
            <p className="text-sm font-medium text-emerald-400/90">
              Interview sprint
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-3xl text-white">
              $29
            </p>
            <p className="mt-4 text-sm text-zinc-400">
              Perfect if you&apos;re actively applying.
            </p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-zinc-300">
              <li>✔ Full resume optimization</li>
              <li>✔ 30 job-tailored resumes</li>
              <li>✔ 30 cover letters</li>
              <li>✔ Interview prep kit</li>
            </ul>
            <CheckoutButton
              plan="sprint"
              className="mt-8 w-full rounded-full bg-emerald-500 py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-400"
            >
              Start sprint
            </CheckoutButton>
          </div>
          <div className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900/30 p-8">
            <p className="text-sm font-medium text-zinc-500">Offer plan</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-3xl text-white">
              $79
            </p>
            <p className="mt-4 flex-1 text-sm text-zinc-400">
              Everything in Interview Sprint + salary negotiation kit.
            </p>
            <CheckoutButton
              plan="offer"
              className="mt-8 w-full rounded-full border border-emerald-500/50 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/10"
            >
              Get offer plan
            </CheckoutButton>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-zinc-600">
          Payments processed securely by Stripe. Sprint delivery may be batched
          during beta — see Terms.
        </p>
      </div>
    </section>
  );
}

export function FaqSection() {
  const items = [
    {
      q: "Do you guarantee a job?",
      a: "No. But we focus on increasing interview probability and application quality.",
    },
    {
      q: "How fast are results?",
      a: "Many active applicants see more interviews within 2–3 weeks — varies by market.",
    },
    {
      q: "Who is this for?",
      a: "Anyone applying for jobs in the last several months who feels stuck at ATS.",
    },
    {
      q: "Is this AI or human?",
      a: "AI-powered workflows plus proven hiring frameworks — with room for manual review in beta.",
    },
  ];
  return (
    <section id="faq" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
          FAQ
        </h2>
        <dl className="mt-10 space-y-8">
          {items.map(({ q, a }) => (
            <div key={q}>
              <dt className="font-medium text-white">{q}</dt>
              <dd className="mt-2 text-zinc-400">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="border-t border-white/10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
          Stop being ignored by recruiters.
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          Know your ATS gap in about a minute — we ask for email so you can receive your report.
        </p>
        <a
          href="#scan"
          className="mt-10 inline-flex rounded-full bg-emerald-500 px-10 py-4 text-base font-bold text-zinc-950 hover:bg-emerald-400"
        >
          Scan resume free
        </a>
        <p className="mt-6 text-sm text-zinc-600">
          <Link href="/privacy" className="underline hover:text-zinc-400">
            Privacy
          </Link>
          {" · "}
          <Link href="/terms" className="underline hover:text-zinc-400">
            Terms
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ScanAnchorSection() {
  return (
    <section className="px-4 pb-8 pt-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <UploadFlowStrip />
        <UploadSection />
      </div>
    </section>
  );
}
