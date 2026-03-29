import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using OfferSprint.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-emerald-400 hover:underline">
        ← Home
      </Link>
      <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
        Terms of service
      </h1>
      <p className="mt-6 text-sm text-zinc-500">Last updated: March 2026</p>
      <div className="mt-10 space-y-6 text-zinc-300">
        <p>
          By using OfferSprint you agree to these terms. If you do not agree,
          do not use the service.
        </p>
        <h2 className="font-semibold text-white">Not legal or career advice</h2>
        <p>
          Reports, scores, and materials are informational. They are not
          guarantees of interviews, offers, or salary outcomes.
        </p>
        <h2 className="font-semibold text-white">Heuristic scans</h2>
        <p>
          Free ATS-style scores are heuristic and illustrative. They are not
          produced by any employer&apos;s applicant tracking system.
        </p>
        <h2 className="font-semibold text-white">Paid programs</h2>
        <p>
          Paid sprints may be delivered in batches during beta. Descriptions on
          the checkout page at time of purchase apply.
        </p>
        <h2 className="font-semibold text-white">Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, OfferSprint is not liable for
          indirect or consequential damages arising from use of the service.
        </p>
      </div>
    </article>
  );
}
