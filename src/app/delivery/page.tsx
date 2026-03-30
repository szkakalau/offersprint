import Link from "next/link";
import { DeliveryProcessSection } from "@/components/landing-sections";

export default function DeliveryPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <Link href="/" className="text-sm text-emerald-400 hover:underline">
          ← Home
        </Link>
      </div>
      <DeliveryProcessSection />
    </>
  );
}

