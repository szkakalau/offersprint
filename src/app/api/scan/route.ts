import { scoreResumeText } from "@/lib/score-resume";
import { extractTextFromBuffer } from "@/lib/extract-text";
import { isValidEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const emailRaw = form.get("email");
    const marketingRaw = form.get("marketingOptIn");
    const email =
      typeof emailRaw === "string" && emailRaw.trim()
        ? emailRaw.trim()
        : null;
    const marketingOptIn = marketingRaw === "true";
    if (email && !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const name = file.name || "resume";
    const mime = file.type || "application/octet-stream";
    const buf = Buffer.from(await file.arrayBuffer());

    const text = await extractTextFromBuffer(buf, mime, name);
    if (!text || text.trim().length < 40) {
      return NextResponse.json(
        {
          error:
            "Could not read enough text from this file. Try another PDF/DOCX export.",
        },
        { status: 422 },
      );
    }

    const result = scoreResumeText(text, name);
    if (email) {
      // Hook for CRM / email provider — extend here (e.g. webhook, queue).
      if (process.env.NODE_ENV === "development") {
        console.info("[scan] completed with lead", {
          marketingOptIn,
          file: name,
        });
      }
    }
    return NextResponse.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Scan failed";
    console.error("[scan] failed", {
      message,
      name: (() => {
        try {
          const form = (e as any)?.form;
          return form?.name ?? undefined;
        } catch {
          return undefined;
        }
      })(),
    });
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
