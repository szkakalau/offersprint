import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  title: {
    default: "OfferSprint — 14-Day Interview Rate Plan",
    template: "%s · OfferSprint",
  },
  description:
    "Stop sending resumes into the void. Free ATS resume scan and a 14-day interview boost program for job seekers.",
  openGraph: {
    title: "OfferSprint — 14-Day Interview Rate Plan",
    description:
      "Upload your resume and discover your interview probability in about 60 seconds. ATS-focused optimization.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OfferSprint — ATS Resume Scan",
    description:
      "You're not getting interviews because your resume is failing ATS.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#070a09] text-zinc-100 [font-family:var(--font-sans),system-ui,sans-serif]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
