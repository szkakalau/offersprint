import Link from "next/link";

type Props = { searchParams: Promise<{ session_id?: string }> };

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const params = await searchParams;
  const sid = params.session_id;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col justify-center px-4 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
        Thank you
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
        You&apos;re in
      </h1>
      <p className="mt-4 text-zinc-400">
        During beta, onboarding details may arrive by email within 24 hours.
        If you don&apos;t see a message, check spam or contact support with your
        receipt.
      </p>
      {sid ? (
        <p className="mt-6 font-mono text-xs text-zinc-600">
          Reference: {sid.slice(0, 20)}…
        </p>
      ) : null}
      <Link
        href="/"
        className="mt-10 inline-flex justify-center rounded-full bg-emerald-500 px-8 py-3 font-semibold text-zinc-950 hover:bg-emerald-400"
      >
        Back to OfferSprint
      </Link>
    </div>
  );
}
