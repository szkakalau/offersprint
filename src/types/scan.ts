export type ScanResult = {
  atsScore: number;
  interviewProbability: number;
  expectedAfterOptimization: number;
  missingKeywords: string[];
  redFlags: string[];
  biggestIssues: string[];
  fileLabel: string;
  analyzedAt: string;
};

/** sessionStorage payload after scan (v2 includes lead capture). */
export type ScanSessionPayloadV2 = {
  v: 2;
  result: ScanResult;
  email: string;
  marketingOptIn: boolean;
};

export const SCAN_STORAGE_KEY = "offersprint_scan_v1";

/** Step 1 saved so refresh on step 2 can resume. */
export const PENDING_LEAD_KEY = "offersprint_pending_lead_v1";

export type PendingLead = {
  email: string;
  marketingOptIn: boolean;
};

export function parseScanSession(raw: string | null): {
  result: ScanResult | null;
  email?: string;
  marketingOptIn?: boolean;
} {
  if (!raw) return { result: null };
  try {
    const p = JSON.parse(raw) as unknown;
    if (!p || typeof p !== "object") return { result: null };
    const o = p as Record<string, unknown>;
    if (o.v === 2 && o.result && typeof o.result === "object") {
      const r = o.result as ScanResult;
      if (typeof r.atsScore === "number") {
        return {
          result: r,
          email: typeof o.email === "string" ? o.email : undefined,
          marketingOptIn: o.marketingOptIn === true,
        };
      }
    }
    const legacy = p as ScanResult;
    if (typeof legacy.atsScore === "number") {
      return { result: legacy };
    }
    return { result: null };
  } catch {
    return { result: null };
  }
}
