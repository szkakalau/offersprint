import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OfferSprint handles your data.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-emerald-400 hover:underline">
        ← Home
      </Link>
      <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
        Privacy policy
      </h1>
      <p className="mt-6 text-sm text-zinc-500">Last updated: March 2026</p>
      <div className="mt-10 space-y-6 text-zinc-300">
        <p>
          OfferSprint (&quot;we&quot;) provides a resume scan and related job
          search materials. This page explains how we handle information in the
          current beta.
        </p>
        <h2 className="font-semibold text-white">Resume uploads</h2>
        <p>
          When you upload a file for a free scan, we process it on our servers
          to extract text and generate a heuristic report. We do not use your
          resume to train public models. Retention may be minimal or transient
          during beta — configure production retention in your deployment
          policy.
        </p>
        <h2 className="font-semibold text-white">Analytics</h2>
        <p>
          We may use privacy-friendly analytics (e.g. Vercel Analytics) to
          understand traffic and improve the product. You can accept or dismiss
          the cookie notice on the site.
        </p>
        <h2 className="font-semibold text-white">Payments</h2>
        <p>
          Payments are processed by Stripe. We do not store your full card
          number on our servers.
        </p>
        <h2 className="font-semibold text-white">Contact</h2>
        <p>
          For privacy requests, contact the operator of this deployment with
          your session or receipt reference.
        </p>
      </div>
    </article>
  );
}
