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

export const SCAN_STORAGE_KEY = "offersprint_scan_v1";
