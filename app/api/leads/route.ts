import { getSupabaseServiceClient } from "@/lib/supabase";

type LeadPayload = {
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  wechatId?: string;
  projectDetails?: string;
  locale?: "en" | "zh";
  sourcePage?: string;
};

export async function POST(request: Request) {
  const supabase = getSupabaseServiceClient();
  if (!supabase) {
    return Response.json(
      {
        ok: false,
        message: "Supabase env is not configured.",
      },
      { status: 500 },
    );
  }

  const body = (await request.json()) as LeadPayload;

  const companyName = (body.companyName ?? "").trim();
  const contactPerson = (body.contactPerson ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const wechatId = (body.wechatId ?? "").trim();
  const projectDetails = (body.projectDetails ?? "").trim();
  const locale = body.locale === "en" ? "en" : "zh";
  const sourcePage = (body.sourcePage ?? "").trim() || `/${locale}/quote`;

  if (!companyName || !contactPerson || !email || !phone || !projectDetails) {
    return Response.json({ ok: false, message: "Missing required fields." }, { status: 400 });
  }

  const { error } = await supabase.from("leads").insert({
    company_name: companyName,
    contact_person: contactPerson,
    email,
    phone,
    wechat_id: wechatId || null,
    project_details: projectDetails,
    source_page: sourcePage,
    locale,
    status: "new",
    wechat_status: wechatId ? "wechat_added" : "wechat_not_added",
  });

  if (error) {
    return Response.json({ ok: false, message: error.message }, { status: 500 });
  }

  return Response.json({ ok: true });
}

