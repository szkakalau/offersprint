import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";

const MAX_BYTES = 5 * 1024 * 1024;

export async function extractTextFromBuffer(
  buffer: Buffer,
  mime: string,
  name: string,
): Promise<string> {
  if (buffer.length > MAX_BYTES) {
    throw new Error("File too large (max 5MB)");
  }

  const lower = name.toLowerCase();
  if (mime.includes("pdf") || lower.endsWith(".pdf")) {
    const parser = new PDFParse({ data: buffer });
    try {
      const textResult = await parser.getText();
      return textResult.text ?? "";
    } finally {
      await parser.destroy();
    }
  }

  if (
    mime.includes("wordprocessingml") ||
    mime.includes("msword") ||
    lower.endsWith(".docx") ||
    lower.endsWith(".doc")
  ) {
    const result = await mammoth.extractRawText({ buffer });
    return result.value ?? "";
  }

  throw new Error("Unsupported file type. Upload PDF or DOCX.");
}
