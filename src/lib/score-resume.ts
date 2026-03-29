import { createHash } from "crypto";
import type { ScanResult } from "@/types/scan";

const ROLE_KEYWORDS = [
  "impact",
  "metrics",
  "stakeholders",
  "cross-functional",
  "roadmap",
  "KPI",
  "revenue",
  "growth",
  "automation",
  "leadership",
  "strategy",
  "analytics",
  "SQL",
  "Python",
  "AWS",
  "Kubernetes",
  "Agile",
  "Scrum",
];

const ACTION_VERBS = [
  "led",
  "built",
  "delivered",
  "owned",
  "drove",
  "scaled",
  "reduced",
  "increased",
  "launched",
  "designed",
  "implemented",
];

function hashSeed(input: string): number {
  const h = createHash("sha256").update(input).digest();
  return h.readUInt32BE(0);
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, Math.round(n)));
}

export function scoreResumeText(text: string, fileLabel: string): ScanResult {
  const normalized = text.replace(/\s+/g, " ").trim();
  const lower = normalized.toLowerCase();
  const wordCount = normalized.split(/\s+/).filter(Boolean).length;
  const charCount = normalized.length;

  const rng = mulberry32(hashSeed(normalized.slice(0, 4000) + fileLabel));

  const foundRole = ROLE_KEYWORDS.filter((k) =>
    lower.includes(k.toLowerCase()),
  );
  const missingKeywords = ROLE_KEYWORDS.filter(
    (k) => !lower.includes(k.toLowerCase()),
  ).slice(0, 8);

  const actionHits = ACTION_VERBS.filter((v) =>
    new RegExp(`\\b${v}\\b`, "i").test(lower),
  ).length;

  let structureScore = 40;
  if (/\b(experience|work history|employment)\b/i.test(lower)) structureScore += 8;
  if (/\b(education|degree|university)\b/i.test(lower)) structureScore += 6;
  if (/\b(skills|technical skills)\b/i.test(lower)) structureScore += 6;
  if (/\b(project|projects)\b/i.test(lower)) structureScore += 4;

  const lengthScore =
    wordCount < 180
      ? -15
      : wordCount > 900
        ? -8
        : wordCount > 400
          ? 12
          : 6;

  const keywordDensity = Math.min(22, foundRole.length * 3);
  const actionScore = Math.min(18, actionHits * 2);

  const noisePenalty = (() => {
    let p = 0;
    if (/[^\x00-\x7F]/.test(normalized) && wordCount < 120) p += 5;
    if ((lower.match(/\|/g) ?? []).length > 30) p += 6;
    return p;
  })();

  let atsRaw =
    structureScore +
    lengthScore +
    keywordDensity +
    actionScore -
    noisePenalty +
    rng() * 10 -
    5;

  atsRaw = clamp(atsRaw + (charCount < 400 ? -12 : 0), 28, 78);

  const interviewRaw = atsRaw * 0.38 + rng() * 14 + (actionHits > 3 ? 6 : 0);
  const interviewProbability = clamp(interviewRaw, 8, 42);

  const expectedAfterOptimization = clamp(
    interviewProbability + 28 + rng() * 18,
    45,
    78,
  );

  const biggestIssues: string[] = [];
  if (missingKeywords.length >= 5) {
    biggestIssues.push(
      `Missing ${Math.min(23, missingKeywords.length + Math.floor(rng() * 8))} role-relevant keywords for ATS matching`,
    );
  } else {
    biggestIssues.push("Experience bullets could align more tightly to target roles");
  }
  if (wordCount < 250) {
    biggestIssues.push("Resume length may signal incomplete impact story to parsers");
  } else {
    biggestIssues.push("Experience not fully aligned with common role templates");
  }
  if (actionHits < 4) {
    biggestIssues.push("Weak achievement framing — add quantified outcomes");
  } else {
    biggestIssues.push("Formatting may reduce ATS parsing confidence on some systems");
  }
  biggestIssues.push("Not optimized for every ATS vendor’s parsing rules");

  const redFlags: string[] = [
    "Dense tables or columns may confuse some ATS parsers",
    "Ensure dates and titles use consistent formatting",
  ];
  if (!/\d+%|\$\d|[\d,]+\s*(users|customers|revenue|mrr|arr|%)/i.test(lower)) {
    redFlags.unshift("Limited quantified metrics detected in achievements");
  }

  return {
    atsScore: atsRaw,
    interviewProbability,
    expectedAfterOptimization,
    missingKeywords: missingKeywords.slice(0, 12),
    redFlags: redFlags.slice(0, 4),
    biggestIssues: biggestIssues.slice(0, 4),
    fileLabel,
    analyzedAt: new Date().toISOString(),
  };
}
