/**
 * Trust & social proof — keep numbers aligned with analytics / support.
 * Replace testimonials and media rows with verified quotes and permitted logos.
 */
export const SCAN_COUNT_DISPLAY = "12,000+";

export const HERO_SOCIAL_LINE = `Join ${SCAN_COUNT_DISPLAY} job seekers who’ve run a free ATS scan`;

export const TRUST_STATS: readonly { value: string; label: string }[] = [
  { value: SCAN_COUNT_DISPLAY, label: "Free ATS scans completed" },
  { value: "~60s", label: "Average time to your report" },
  { value: "4.8★", label: "Avg. rating (beta feedback)" },
];

export const TRUST_STATS_NOTE =
  "Usage and ratings from product analytics and optional post-scan surveys; updated periodically.";

/** Replace with real outlets and secure logo / name usage rights. */
export const MEDIA_MENTIONS: readonly {
  name: string;
  detail: string;
  href?: string;
}[] = [
  { name: "CareerShift Weekly", detail: "Newsletter" },
  { name: "The Offer Room", detail: "Podcast" },
  { name: "HireStack", detail: "Industry blog" },
  { name: "Remote Work Report", detail: "Syndicated column" },
];

export const TESTIMONIALS: readonly {
  quote: string;
  name: string;
  role: string;
  locale: string;
  rating: 4 | 5;
}[] = [
  {
    quote:
      "I thought my resume was ‘good enough.’ The scan surfaced missing keywords and a formatting issue — I fixed both and started getting recruiter replies within two weeks.",
    name: "Jordan K.",
    role: "Senior financial analyst",
    locale: "New York",
    rating: 5,
  },
  {
    quote:
      "Finally something that explains ATS in plain English. The interview probability score made me rethink how I was targeting roles.",
    name: "Priya S.",
    role: "Product manager",
    locale: "London",
    rating: 5,
  },
  {
    quote:
      "Started with the free scan — that alone was worth it. Clear priorities instead of random rewrites.",
    name: "Marcus T.",
    role: "Engineering lead",
    locale: "Austin",
    rating: 5,
  },
];
