/** Homepage conversion blocks — keep figures honest vs. analytics. */

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

export const SCAN_SECURITY_LINES = [
  { icon: "🔒", text: "Your resume is securely processed" },
  { icon: "🔐", text: "Files are automatically deleted after analysis" },
  { icon: "🛡", text: "We never share your data" },
] as const;
