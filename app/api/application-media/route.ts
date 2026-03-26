import { readFile } from "node:fs/promises";
import path from "node:path";

const MIME_MAP: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");
  const file = searchParams.get("file");

  if (!folder || !file) {
    return new Response("Missing folder or file", { status: 400 });
  }

  const safeFolder = path.basename(folder);
  const safeFile = path.basename(file);
  if (safeFolder !== folder || safeFile !== file) {
    return new Response("Invalid path", { status: 400 });
  }

  const workspaceRoot = path.resolve(process.cwd(), "..");
  const absolutePath = path.join(workspaceRoot, "pictures", "applications", safeFolder, safeFile);

  try {
    const buffer = await readFile(absolutePath);
    const ext = path.extname(safeFile).toLowerCase();
    const contentType = MIME_MAP[ext] ?? "application/octet-stream";
    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
