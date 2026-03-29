import { getAppBaseUrlWithFallback } from "@/lib/app-url";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(request: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      {
        error:
          "Payments are not configured. Set STRIPE_SECRET_KEY and price IDs in .env",
      },
      { status: 503 },
    );
  }

  const form = await request.formData();
  const plan = form.get("plan");
  const base = getAppBaseUrlWithFallback();

  const priceSprint = process.env.STRIPE_PRICE_INTERVIEW_SPRINT;
  const priceOffer = process.env.STRIPE_PRICE_OFFER_PLAN;

  let priceId: string | undefined;
  if (plan === "sprint") priceId = priceSprint;
  else if (plan === "offer") priceId = priceOffer;

  if (!priceId) {
    return NextResponse.json(
      {
        error:
          "Missing STRIPE_PRICE_INTERVIEW_SPRINT or STRIPE_PRICE_OFFER_PLAN",
      },
      { status: 503 },
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${base}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/checkout/cancel`,
      allow_promotion_codes: true,
      metadata: {
        plan: plan === "offer" ? "offer_plan" : "interview_sprint",
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "No checkout URL returned" },
        { status: 500 },
      );
    }

    return NextResponse.redirect(session.url, 303);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
