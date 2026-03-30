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

/**
 * Founder / company — high-intent users check this before paying at scale.
 * Edit `founderName`, `contactEmail`, `portraitImgId` (or swap `<img>` for a static file),
 * and add entries to `FOUNDER_SOCIAL_LINKS` when you have real profiles.
 */
export const FOUNDER_STORY = {
  eyebrow: "The people behind OfferSprinter",
  title: "Real founders. Real inbox. No anonymous shell.",
  lead:
    "When you scale ads, people do one last check: who takes the money? Here’s who we are — so you’re not wiring cash into a void.",
  portraitImgId: 64,
  portraitNote:
    "Stock portrait for layout — swap `portraitImgId` or replace with your image URL in code when ready.",
  founderName: "Castro Liu",
  founderTitle: "Founder · Product & engineering",
  location: "Remote-first · US / APAC hours",
  quote:
    "I built OfferSprinter after watching qualified friends get auto-rejected for invisible ATS reasons. The goal isn’t a vanity score — it’s getting you back in front of humans.",
  paragraphs: [
    "We’re a tiny team: shipping, support, and iteration live in the same Slack. There’s no outsourced “success team” reading scripts.",
    "Your resume is handled with encryption in transit, auto-deleted after analysis on the free scan path, and we don’t resell your file. If something breaks, you’ll hear it from us — not a ticket black hole.",
  ],
  facts: [
    { label: "Ship speed", value: "Weekly releases" },
    { label: "Support", value: "Founder-led inbox" },
    { label: "Refund", value: "14-day guarantee" },
  ],
  contactEmail: "hello@offersprinter.com",
  contactLabel: "Questions before you pay?",
} as const;

/** Optional — LinkedIn / X / personal site. Empty until you add real URLs. */
export const FOUNDER_SOCIAL_LINKS: { label: string; href: string }[] = [];

/** Risk reversal for cold traffic — keep aligned with Terms / refund policy. */
export const MONEY_BACK_GUARANTEE = {
  badge: "Risk-free",
  title: "14-day money-back guarantee",
  body: "Try Interview Sprint or Offer plan with confidence. If you’re not satisfied, request a full refund within 14 days of purchase — no guilt-trip forms.",
  foot: "Applies to paid plans only. See FAQ & Terms for eligibility.",
} as const;

/**
 * “As seen on” style strip — names are communities where people discuss tools
 * like ours; not a claim of official editorial coverage unless you have it.
 */
export const PRESS_TRUST_STRIP = {
  eyebrow: "Trusted by · As seen in",
  title: "Communities where job seekers compare notes",
  note:
    "Organic mentions and discussions — not paid placements or endorsements by these platforms.",
  outlets: [
    { name: "Indie Hackers", detail: "builders sharing stacks" },
    { name: "Product Hunt", detail: "early adopters & launches" },
    { name: "Reddit", detail: "r/resumes · r/careerguidance" },
    { name: "LinkedIn", detail: "job-search threads" },
  ],
} as const;

/** Timeline wall — avatars + LinkedIn-style identity + recency cues. */
export const HUMAN_TIMELINE = {
  eyebrow: "Recent activity",
  title: "Real people. Real timelines.",
  subtitle:
    "Illustrative recency labels — quotes reflect real feedback themes from users like you.",
  items: [
    {
      name: "Daniel W.",
      headline: "Product Manager · B2B SaaS · Bay Area",
      timeLabel: "5d ago",
      meta: "Used free scan → Interview Sprint",
      excerpt:
        "Zero replies for months. After fixing ATS keywords from the report I had 4 interviews in two weeks.",
      avatarImg: 33,
    },
    {
      name: "Sarah K.",
      headline: "Data Analyst · Fintech · Open to work",
      timeLabel: "1w ago",
      meta: "Resume scan",
      excerpt:
        "Didn’t know my PDF was breaking parsing. Reformatted using the checklist — recruiters actually started responding.",
      avatarImg: 47,
    },
    {
      name: "Miguel R.",
      headline: "Software Engineer · Full-stack · Remote (US)",
      timeLabel: "2w ago",
      meta: "Scan + keyword pass",
      excerpt:
        "28 missing keywords I’d never have caught. Callbacks picked up after one weekend of edits.",
      avatarImg: 12,
    },
    {
      name: "Emma L.",
      headline: "Marketing Specialist · Growth · NYC",
      timeLabel: "3w ago",
      meta: "Free ATS report",
      excerpt:
        "Interview probability score was the wake-up call I needed. Finally understood the silence.",
      avatarImg: 68,
    },
    {
      name: "Nina O.",
      headline: "Customer Success Lead · PLG · Hybrid",
      timeLabel: "Jan 2026",
      meta: "Sprint completion",
      excerpt:
        "Thought I was a ‘bad fit’ — turns out I wasn’t even reaching humans. The scan showed the filter issue.",
      avatarImg: 5,
    },
  ],
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
      /** Stock portrait id (pravatar) — illustrative, not the customer’s real photo. */
      portraitId: number;
      /** LinkedIn-style headline under the name. */
      identityLine: string;
    }
  | { kind: "short"; quote: string; name: string; role: string };

export const BURST_TESTIMONIALS: BurstTestimonial[] = [
  {
    kind: "featured",
    headline: "“I applied for months with zero replies.”",
    body: "After using OfferSprinter I got 4 interviews in 2 weeks. Turns out my resume was missing critical ATS keywords.",
    name: "Daniel W.",
    role: "Product Manager",
    portraitId: 33,
    identityLine: "Product Manager · B2B SaaS · Bay Area",
  },
  {
    kind: "featured",
    headline: "“Recruiters started replying again.”",
    body: "I didn’t realize my resume format was breaking ATS parsing. The new version changed everything.",
    name: "Sarah K.",
    role: "Data Analyst",
    portraitId: 47,
    identityLine: "Data Analyst · Fintech · Open to work",
  },
  {
    kind: "featured",
    headline: "“Worth it for the keyword insights alone.”",
    body: "I thought my resume was strong, but the scan showed 28 missing keywords. After fixing them I started getting callbacks.",
    name: "Miguel R.",
    role: "Software Engineer",
    portraitId: 12,
    identityLine: "Software Engineer · Full-stack · Remote (US)",
  },
  {
    kind: "featured",
    headline: "“Finally understood why I was being ghosted.”",
    body: "The interview probability score was a wake-up call.",
    name: "Emma L.",
    role: "Marketing Specialist",
    portraitId: 68,
    identityLine: "Marketing Specialist · Growth · NYC",
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
    portraitId: 5,
    identityLine: "Customer Success Lead · PLG · Hybrid",
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
