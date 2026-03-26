import { getSupabaseServiceClient, leadStatuses } from "@/lib/supabase";
import { isValidAdminSessionToken, readAdminSessionFromCookieHeader } from "@/lib/admin-auth";

type Payload = {
  status?: string;
  wechatStatus?: string;
  notes?: string;
};

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const token = readAdminSessionFromCookieHeader(request.headers.get("cookie"));
  if (!isValidAdminSessionToken(token)) {
    return Response.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseServiceClient();
  if (!supabase) {
    return Response.json({ ok: false, message: "Supabase env is not configured." }, { status: 500 });
  }

  const { id } = await params;
  const body = (await request.json()) as Payload;
  const status = (body.status ?? "").trim();
  const wechatStatus = (body.wechatStatus ?? "").trim();
  const notes = (body.notes ?? "").trim();

  const updates: Record<string, string> = {};
  if (status && leadStatuses.includes(status as (typeof leadStatuses)[number])) {
    updates.status = status;
  }
  if (wechatStatus === "wechat_added" || wechatStatus === "wechat_not_added") {
    updates.wechat_status = wechatStatus;
  }
  if (notes) {
    updates.notes = notes;
  }

  if (Object.keys(updates).length === 0) {
    return Response.json({ ok: false, message: "No valid update fields." }, { status: 400 });
  }

  const { error } = await supabase.from("leads").update(updates).eq("id", id);
  if (error) {
    return Response.json({ ok: false, message: error.message }, { status: 500 });
  }

  return Response.json({ ok: true });
}

