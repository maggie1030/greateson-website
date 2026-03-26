import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { LeadStatusForm } from "@/components/admin/LeadStatusForm";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { getSupabaseServiceClient } from "@/lib/supabase";

type Props = {
  params: Promise<{ locale: string }>;
};

type LeadRow = {
  id: string;
  created_at: string;
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  wechat_id: string | null;
  project_details: string;
  source_page: string | null;
  locale: "en" | "zh";
  status: "new" | "contacted" | "wechat_added" | "wechat_not_added" | "quoted" | "won" | "lost";
  wechat_status: "wechat_added" | "wechat_not_added" | "unknown" | null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/admin/leads",
    title: locale === "en" ? "Lead Management" : "询盘管理",
    description: locale === "en" ? "Review RFQ leads and follow-up status." : "查看询盘与跟进状态。",
  });
}

export default async function AdminLeadsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";
  const supabase = getSupabaseServiceClient();

  if (!supabase) {
    return (
      <section className="section">
        <p className="eyebrow">{isEn ? "Admin" : "后台"}</p>
        <h1 className="mt-3 text-4xl">{isEn ? "Lead Management" : "询盘管理"}</h1>
        <article className="card mt-8 p-6 text-zinc-300">
          {isEn
            ? "Supabase environment variables are not configured yet."
            : "尚未配置 Supabase 环境变量，请先完成接入。"}
        </article>
      </section>
    );
  }

  const { data, error } = await supabase
    .from("leads")
    .select(
      "id,created_at,company_name,contact_person,email,phone,wechat_id,project_details,source_page,locale,status,wechat_status",
    )
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    return (
      <section className="section">
        <p className="eyebrow">{isEn ? "Admin" : "后台"}</p>
        <h1 className="mt-3 text-4xl">{isEn ? "Lead Management" : "询盘管理"}</h1>
        <article className="card mt-8 p-6 text-rose-300">{error.message}</article>
      </section>
    );
  }

  const leads = (data ?? []) as LeadRow[];

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Admin" : "后台"}</p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-4xl">{isEn ? "Lead Management" : "询盘管理"}</h1>
        <AdminLogoutButton locale={locale} />
      </div>
      <p className="mt-4 text-sm text-zinc-300">
        {isEn ? "Track RFQ submissions and update WeChat follow-up status." : "查看询盘提交并更新微信跟进状态。"}
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-zinc-200">
          <thead>
            <tr className="border-b border-[#2f433c] text-left text-zinc-400">
              <th className="px-3 py-2">{isEn ? "Time" : "时间"}</th>
              <th className="px-3 py-2">{isEn ? "Contact" : "联系人"}</th>
              <th className="px-3 py-2">{isEn ? "Company" : "公司"}</th>
              <th className="px-3 py-2">{isEn ? "Phone / Email" : "电话 / 邮箱"}</th>
              <th className="px-3 py-2">{isEn ? "WeChat ID" : "微信号"}</th>
              <th className="px-3 py-2">{isEn ? "Requirement" : "需求"}</th>
              <th className="px-3 py-2">{isEn ? "Status" : "状态"}</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-[#253730] align-top">
                <td className="px-3 py-3 text-xs text-zinc-400">{lead.created_at.slice(0, 16).replace("T", " ")}</td>
                <td className="px-3 py-3">{lead.contact_person}</td>
                <td className="px-3 py-3">{lead.company_name}</td>
                <td className="px-3 py-3 text-xs">
                  <div>{lead.phone}</div>
                  <div className="mt-1 text-zinc-400">{lead.email}</div>
                </td>
                <td className="px-3 py-3 text-xs">{lead.wechat_id || "-"}</td>
                <td className="max-w-[360px] px-3 py-3 text-xs leading-6 text-zinc-300">{lead.project_details}</td>
                <td className="px-3 py-3">
                  <LeadStatusForm
                    id={lead.id}
                    locale={locale}
                    status={lead.status}
                    wechatStatus={lead.wechat_status ?? (lead.wechat_id ? "wechat_added" : "wechat_not_added")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

