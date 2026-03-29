import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col justify-center px-4 py-20 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
        Checkout canceled
      </h1>
      <p className="mt-4 text-zinc-400">
        No charge was made. You can return anytime to start your sprint.
      </p>
      <Link
        href="/pricing"
        className="mt-10 inline-flex justify-center rounded-full border border-white/20 px-8 py-3 font-semibold text-white hover:bg-white/5"
      >
        View plans
      </Link>
    </div>
  );
}
