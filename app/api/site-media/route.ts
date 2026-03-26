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
  const file = searchParams.get("file");

  if (!file) return new Response("Missing file param", { status: 400 });

  const safeFile = path.basename(file);
  if (safeFile !== file) return new Response("Invalid file path", { status: 400 });

  const workspaceRoot = path.resolve(process.cwd(), "..");
  const fullPath = path.join(workspaceRoot, "pictures", "site", safeFile);

  try {
    const data = await readFile(fullPath);
    const ext = path.extname(safeFile).toLowerCase();
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": MIME_MAP[ext] ?? "application/octet-stream",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
