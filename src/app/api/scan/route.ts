import { scoreResumeText } from "@/lib/score-resume";
import { extractTextFromBuffer } from "@/lib/extract-text";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
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
    return NextResponse.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Scan failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
