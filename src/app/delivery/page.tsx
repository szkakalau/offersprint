import Link from "next/link";
import { DeliveryProcessSection } from "@/components/landing-sections";

export default function DeliveryPage() {
  const embedUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL;
  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <Link href="/" className="text-sm text-emerald-400 hover:underline">
          ← Home
        </Link>
      </div>
      <DeliveryProcessSection />

      <section className="scroll-mt-24 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-[#070a09] p-6 shadow-[0_0_60px_-24px_rgba(16,185,129,0.22)] sm:p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
              Complete your delivery form
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              After checkout, fill this form so we can review your resume and target roles.
              During early beta, delivery depends on receiving this info.
            </p>

            {embedUrl ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <iframe
                  src={embedUrl}
                  className="h-[900px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-sm text-amber-200/90">
                Google Form is not configured yet. Set <code>NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL</code> (and optionally <code>NEXT_PUBLIC_GOOGLE_FORM_URL</code>) in your Vercel environment variables.
                {formUrl ? (
                  <div className="mt-3">
                    Direct link:{" "}
                    <a
                      href={formUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-emerald-300"
                    >
                      open form
                    </a>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

