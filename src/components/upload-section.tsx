"use client";

import { ScanSecurityTrustBlock } from "@/components/conversion-sections";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { isValidEmail } from "@/lib/email";
import {
  PENDING_LEAD_KEY,
  SCAN_STORAGE_KEY,
  type PendingLead,
  type ScanResult,
  type ScanSessionPayloadV2,
} from "@/types/scan";

function ScanStepIndicator({ active }: { active: 1 | 2 }) {
  const items = [
    { step: 1 as const, label: "Email" },
    { step: 2 as const, label: "Upload" },
    { step: 3 as const, label: "Report" },
  ];
  return (
    <nav aria-label="Scan steps" className="mb-8">
      <ol className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {items.map((it, i) => {
          const done = active > it.step;
          const current = active === it.step;
          return (
            <li key={it.step} className="flex items-center gap-1 sm:gap-2">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  current
                    ? "bg-emerald-500 text-zinc-950 shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)]"
                    : done
                      ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/35"
                      : "bg-zinc-800 text-zinc-500"
                }`}
              >
                {done ? "✓" : it.step}
              </span>
              <span
                className={`hidden text-xs sm:inline ${current ? "font-medium text-white" : "text-zinc-500"}`}
              >
                {it.label}
              </span>
              {i < items.length - 1 ? (
                <span className="px-1 text-zinc-700 sm:px-2" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function UploadSection() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(PENDING_LEAD_KEY);
      if (!raw) return;
      const p = JSON.parse(raw) as PendingLead;
      if (p.email && isValidEmail(p.email)) {
        setEmail(p.email);
        setMarketingOptIn(Boolean(p.marketingOptIn));
        setStep(2);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const onContinueEmail = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setEmailError(null);
      const trimmed = email.trim();
      if (!isValidEmail(trimmed)) {
        setEmailError("Enter a valid email address.");
        return;
      }
      sessionStorage.setItem(
        PENDING_LEAD_KEY,
        JSON.stringify({
          email: trimmed,
          marketingOptIn,
        } satisfies PendingLead),
      );
      setStep(2);
    },
    [email, marketingOptIn],
  );

  const onFile = useCallback(
    async (file: File | undefined) => {
      if (!file) return;
      const trimmed = email.trim();
      if (!isValidEmail(trimmed)) {
        setError("Missing email. Go back to step 1.");
        setStep(1);
        return;
      }
      setError(null);
      setBusy(true);
      try {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("email", trimmed);
        fd.append("marketingOptIn", marketingOptIn ? "true" : "false");
        const res = await fetch("/api/scan", { method: "POST", body: fd });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Upload failed");
          return;
        }
        const result = data as ScanResult;
        const payload: ScanSessionPayloadV2 = {
          v: 2,
          result,
          email: trimmed,
          marketingOptIn,
        };
        sessionStorage.setItem(SCAN_STORAGE_KEY, JSON.stringify(payload));
        sessionStorage.removeItem(PENDING_LEAD_KEY);
        router.push("/result");
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setBusy(false);
      }
    },
    [email, marketingOptIn, router],
  );

  return (
    <div
      id="scan"
      className="scroll-mt-24 rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-950/40 to-[#070a09] p-6 shadow-[0_0_60px_-20px_rgba(16,185,129,0.35)] sm:p-10"
    >
      <ScanStepIndicator active={step} />

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
            Free resume scan
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
            {step === 1 ? "Your email" : "Upload your resume"}
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            {step === 1
              ? "Step 1 of 3 — we’ll send your report and optional tips here."
              : "Step 2 of 3 — PDF or DOCX · Max 5MB"}
          </p>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={onContinueEmail} className="space-y-6">
          <div>
            <label htmlFor="scan-email" className="sr-only">
              Email
            </label>
            <input
              id="scan-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(null);
              }}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none ring-emerald-500/40 focus:border-emerald-500/50 focus:ring-2"
            />
            {emailError ? (
              <p className="mt-2 text-sm text-red-400" role="alert">
                {emailError}
              </p>
            ) : null}
          </div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-zinc-400">
            <input
              type="checkbox"
              checked={marketingOptIn}
              onChange={(e) => setMarketingOptIn(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-zinc-900 text-emerald-500 focus:ring-emerald-500/50"
            />
            <span>
              Email me job-search tips and product updates (optional). You can
              unsubscribe anytime.
            </span>
          </label>
          <p className="text-xs text-zinc-600">
            By continuing you agree to our{" "}
            <Link href="/privacy" className="text-emerald-500/90 underline hover:text-emerald-400">
              Privacy Policy
            </Link>
            .
          </p>
          <button
            type="submit"
            className="w-full rounded-full bg-emerald-500 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-emerald-400 sm:w-auto sm:px-10"
          >
            Continue to upload
          </button>
        </form>
      ) : (
        <>
          <ul className="mb-8 grid gap-3 sm:grid-cols-2">
            {[
              "ATS compatibility score",
              "Interview probability score",
              "Missing keywords list",
              "Red flags hurting your chances",
              "Salary positioning insight",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-zinc-300">
                <span className="text-emerald-400">✔</span>
                {t}
              </li>
            ))}
          </ul>

          <p className="mb-4 text-center text-sm text-zinc-500">
            Sending results to{" "}
            <span className="font-medium text-zinc-300">{email.trim()}</span>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="ml-2 text-emerald-400 underline decoration-emerald-500/40 hover:text-emerald-300"
            >
              Change
            </button>
          </p>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/15 bg-black/30 px-6 py-14 transition hover:border-emerald-500/50 hover:bg-emerald-950/20">
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              disabled={busy}
              onChange={(e) => void onFile(e.target.files?.[0])}
            />
            <span className="text-lg font-semibold text-white">
              {busy ? "Analyzing…" : "Drop your resume or click to upload"}
            </span>
            <span className="mt-2 text-sm text-zinc-500">
              Step 3 opens your report on the next page
            </span>
          </label>

          {error ? (
            <p className="mt-4 text-center text-sm text-red-400" role="alert">
              {error}
            </p>
          ) : null}

          <div className="mt-8 flex justify-center">
            <span className="pointer-events-none inline-flex rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-zinc-950 shadow-lg">
              Scan resume free
            </span>
          </div>
          <ScanSecurityTrustBlock />
        </>
      )}
    </div>
  );
}
