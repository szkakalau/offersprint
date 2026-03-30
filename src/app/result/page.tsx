"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PricingSection } from "@/components/landing-sections";
import type { ScanResult } from "@/types/scan";
import { SCAN_STORAGE_KEY, parseScanSession } from "@/types/scan";

export default function ResultPage() {
  const [data, setData] = useState<ScanResult | null | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const raw = sessionStorage.getItem(SCAN_STORAGE_KEY);
        const parsed = parseScanSession(raw);
        if (!parsed.result) {
          setData(null);
          return;
        }
        setData(parsed.result);
        setEmail(parsed.email);
        setMarketingOptIn(parsed.marketingOptIn === true);
      } catch {
        setData(null);
      }
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || data === undefined || data === null) return;
    // Custom event for analytics / downstream tools (optional).
    queueMicrotask(() => {
      window.dispatchEvent(
        new CustomEvent("offersprinter:result_view", {
          detail: { hasEmail: Boolean(email) },
        }),
      );
    });
  }, [data, email]);

  if (data === undefined) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-4 py-20 text-center">
        <p className="text-zinc-400">Loading your report…</p>
      </div>
    );
  }

  if (data === null) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-4 py-20 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-2xl text-white">
          No scan found
        </h1>
        <p className="mt-4 text-zinc-400">
          Complete the email and upload steps on the home page to generate a report.
        </p>
        <Link
          href="/#scan"
          className="mt-8 inline-flex justify-center rounded-full bg-emerald-500 px-8 py-3 font-semibold text-zinc-950"
        >
          Scan resume free
        </Link>
        <p className="mt-8 text-sm text-zinc-500">
          Already paid?{" "}
          <Link href="/pricing" className="text-emerald-400 underline hover:text-emerald-300">
            View plans
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-xs font-medium text-emerald-300/95">
          Step 3 of 3 · Your report
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          Your scan
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
          ATS &amp; interview snapshot
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          File: {data.fileLabel} · Heuristic analysis (not an employer ATS)
        </p>
        {email ? (
          <p className="mt-3 text-sm text-zinc-400">
            Email on file: <span className="font-medium text-zinc-300">{email}</span>
            {marketingOptIn ? (
              <span className="text-zinc-600"> · tips &amp; product updates enabled</span>
            ) : null}
          </p>
        ) : null}

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              ATS compatibility
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-4xl text-white">
              {data.atsScore}{" "}
              <span className="text-lg text-zinc-500">/ 100</span>
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Interview probability (model)
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-4xl text-emerald-400">
              {data.interviewProbability}%
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8">
          <p className="font-medium text-white">Biggest issues found</p>
          <ul className="mt-4 space-y-2 text-zinc-400">
            {data.biggestIssues.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
          <p className="mt-8 font-medium text-white">Red flags</p>
          <ul className="mt-4 space-y-2 text-zinc-400">
            {data.redFlags.map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
          <p className="mt-8 font-medium text-white">
            Keywords to add or strengthen
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            {data.missingKeywords.slice(0, 8).join(", ")}
            {data.missingKeywords.length === 0 ? "— none flagged" : ""}
          </p>
          <p className="mt-8 border-t border-white/10 pt-6 text-sm text-zinc-400">
            After optimization (illustrative model):{" "}
            <span className="font-semibold text-emerald-400">
              expected interview rate: {data.expectedAfterOptimization}%
            </span>
          </p>
        </div>

        <p className="mt-8 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-sm text-amber-200/90">
          Disclaimer: This is a private heuristic preview for job seekers — not a
          guarantee and not an official score from any employer or ATS vendor.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/5"
          >
            Back to home
          </Link>
        </div>
      </div>

      <PricingSection />
    </>
  );
}
