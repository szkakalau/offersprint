/**
 * Canonical site origin for metadata, redirects, and Stripe return URLs.
 * Accepts NEXT_PUBLIC_APP_URL with or without https:// (common in Vercel env UI).
 */
export function getAppBaseUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (raw) {
    if (/^https?:\/\//i.test(raw)) return raw.replace(/\/$/, "");
    return `https://${raw.replace(/\/$/, "")}`;
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;
  return undefined;
}

export function getAppBaseUrlWithFallback(): string {
  return getAppBaseUrl() ?? "http://localhost:3000";
}
