/** Homepage conversion blocks — keep figures honest vs. analytics. */

/** End-to-end journey — demystifies the product (not a black box). */
export const USAGE_FLOW = {
  eyebrow: "How it works",
  title: "Your path from file to interviews",
  subtitle:
    "No mystery steps — you always know what happens next after you upload.",
  steps: [
    {
      key: "upload",
      title: "Upload resume",
      body: "PDF or DOCX — we parse structure, keywords, and ATS signals.",
    },
    {
      key: "report",
      title: "Get report",
      body: "ATS-style score, gaps, and fixes you can act on in one sitting.",
    },
    {
      key: "apply",
      title: "Apply smarter",
      body: "Tailor versions, cover letters, and targeting from what the scan showed.",
    },
    {
      key: "interviews",
      title: "Get interviews",
      body: "More aligned applications → more conversations with real humans.",
    },
  ],
} as const;

/** High-contrast proof block — illustrative composite, not a single-user promise. */
export const ATS_BEFORE_AFTER = {
  eyebrow: "Before / after",
  title: "What fixing your ATS score actually looks like",
  subtitle:
    "Composite example from anonymized scans — your numbers will differ, but the lift pattern is what we optimize for.",
  beforeLabel: "Before optimization",
  afterLabel: "After optimization",
  beforeScore: 42,
  afterScore: 91,
  beforeNote: "Filtered out early — weak keyword & format match.",
  afterNote: "Stronger parse + keyword coverage — passes more ATS gates.",
} as const;

/** Risk reversal for cold traffic — keep aligned with Terms / refund policy. */
export const MONEY_BACK_GUARANTEE = {
  badge: "Risk-free",
  title: "14-day money-back guarantee",
  body: "Try Interview Sprint or Offer plan with confidence. If you’re not satisfied, request a full refund within 14 days of purchase — no guilt-trip forms.",
  foot: "Applies to paid plans only. See FAQ & Terms for eligibility.",
} as const;

export const BURST_HEADLINE = "Trusted by thousands of job seekers worldwide";

export const BURST_STATS = [
  { value: "8,412+", label: "resumes scanned" },
  { value: "3.2×", label: "avg. interview increase" },
  { value: "92", label: "countries" },
  { value: "4.8★", label: "user rating" },
] as const;

export const BURST_STATS_NOTE =
  "Directional metrics from product usage and surveys — individual results vary.";

export type BurstTestimonial =
  | {
      kind: "featured";
      headline: string;
      body: string;
      name: string;
      role: string;
    }
  | { kind: "short"; quote: string; name: string; role: string };

export const BURST_TESTIMONIALS: BurstTestimonial[] = [
  {
    kind: "featured",
    headline: "“I applied for months with zero replies.”",
    body: "After using OfferSprint I got 4 interviews in 2 weeks. Turns out my resume was missing critical ATS keywords.",
    name: "Daniel W.",
    role: "Product Manager",
  },
  {
    kind: "featured",
    headline: "“Recruiters started replying again.”",
    body: "I didn’t realize my resume format was breaking ATS parsing. The new version changed everything.",
    name: "Sarah K.",
    role: "Data Analyst",
  },
  {
    kind: "featured",
    headline: "“Worth it for the keyword insights alone.”",
    body: "I thought my resume was strong, but the scan showed 28 missing keywords. After fixing them I started getting callbacks.",
    name: "Miguel R.",
    role: "Software Engineer",
  },
  {
    kind: "featured",
    headline: "“Finally understood why I was being ghosted.”",
    body: "The interview probability score was a wake-up call.",
    name: "Emma L.",
    role: "Marketing Specialist",
  },
  { kind: "short", quote: "Got 3 interviews in 10 days.", name: "Alex", role: "UX Designer" },
  {
    kind: "short",
    quote: "Best $29 I spent during job search.",
    name: "Priya",
    role: "Finance Analyst",
  },
  {
    kind: "featured",
    headline: "“I thought silence meant ‘bad fit.’”",
    body: "Turns out my file never made it past the first filter. The scan showed exactly what was killing me before anyone could say no.",
    name: "Nina O.",
    role: "Customer Success Lead",
  },
  {
    kind: "short",
    quote: "Saw my ATS score and fixed it same night — replies started Monday.",
    name: "Tom",
    role: "Sales Director",
  },
];

export const REAL_RESULTS_HEADLINE = "Real results from real job searches";

export const REAL_RESULTS_CARDS = [
  {
    stat: "75%",
    title: "of resumes never reach a human recruiter",
    body: "Most are filtered out by ATS before being seen.",
  },
  {
    stat: "5×",
    title: "Top users apply faster",
    body: "With tailored resumes & cover letters generated in minutes.",
  },
  {
    stat: "+22%",
    title: "Up to salary increase",
    body: "Better positioning leads to stronger offers for top performers.",
  },
] as const;

export const REPORT_SHOWCASE = {
  title: "See what your Resume Report looks like",
  subtitle:
    "Your personalized report includes ATS scoring, keyword gaps, and interview probability.",
  healthTitle: "Resume Health Score",
  healthScore: "48 / 100",
  healthBadge: "Needs Improvement",
  healthNote:
    "Your resume is likely being filtered out before reaching recruiters.",
  interviewTitle: "Interview Probability",
  interviewBefore: "17% based on target roles",
  interviewAfterLabel: "After optimization:",
  interviewAfter: "Estimated interview probability: 63%",
  issuesTitle: "Critical Issues Found",
  issues: [
    "Missing 23 role-specific keywords",
    "Weak achievement statements",
    "Experience not aligned with target job titles",
    "Formatting issues affecting ATS parsing",
  ],
  keywordsTitle: "Keyword Gap Analysis",
  keywordsLead: "Top missing keywords:",
  keywords: [
    "stakeholder management",
    "data-driven decision making",
    "cross-functional collaboration",
    "KPI ownership",
    "roadmap planning",
  ],
  salaryTitle: "Salary Positioning Insight",
  salaryCurrentLabel: "Your resume currently positions you at:",
  salaryCurrent: "$72k–$85k range",
  salaryPotentialLabel: "After optimization potential:",
  salaryPotential: "$90k–$105k range",
  ctaTitle: "Get your personalized report in 60 seconds",
  ctaButton: "Scan my resume free",
} as const;

/** Visual security anchors — hero strip + upload panel. */
export const SECURITY_BADGES = [
  {
    icon: "🔒",
    title: "Secure processing",
    sub: "TLS-encrypted handling",
  },
  {
    icon: "🔐",
    title: "Files auto-deleted",
    sub: "Removed after analysis",
  },
  {
    icon: "🛡",
    title: "Encrypted upload",
    sub: "Private scan pipeline",
  },
  {
    icon: "✓",
    title: "Never sold or shared",
    sub: "Your data stays yours",
  },
] as const;
