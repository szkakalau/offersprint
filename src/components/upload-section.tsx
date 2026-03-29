"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import type { ScanResult } from "@/types/scan";
import { SCAN_STORAGE_KEY } from "@/types/scan";

export function UploadSection() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFile = useCallback(
    async (file: File | undefined) => {
      if (!file) return;
      setError(null);
      setBusy(true);
      try {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/scan", { method: "POST", body: fd });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "Upload failed");
          return;
        }
        const result = data as ScanResult;
        sessionStorage.setItem(SCAN_STORAGE_KEY, JSON.stringify(result));
        router.push("/result");
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setBusy(false);
      }
    },
    [router],
  );

  return (
    <div
      id="scan"
      className="scroll-mt-24 rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-950/40 to-[#070a09] p-6 shadow-[0_0_60px_-20px_rgba(16,185,129,0.35)] sm:p-10"
    >
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
            Free resume scan
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
            Upload your resume
          </h2>
        </div>
        <p className="text-sm text-zinc-500">PDF or DOCX · Max 5MB</p>
      </div>

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
          No signup required · Instant results
        </span>
      </label>

      {error ? (
        <p className="mt-4 text-center text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-8 flex justify-center">
        <span className="inline-flex rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-zinc-950 shadow-lg pointer-events-none">
          Scan my resume free
        </span>
      </div>
    </div>
  );
}
