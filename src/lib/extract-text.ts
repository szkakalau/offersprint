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
    // Dynamic import so module-loading errors become request-level errors
    // (instead of Next returning a generic 500 HTML page).
    const { PDFParse } = await import("pdf-parse");
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
    const mammothMod = await import("mammoth");
    const mammoth = (mammothMod as any).default ?? mammothMod;
    const result = await mammoth.extractRawText({ buffer });
    return result.value ?? "";
  }

  throw new Error("Unsupported file type. Upload PDF or DOCX.");
}
