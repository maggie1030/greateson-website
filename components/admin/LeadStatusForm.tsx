"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Locale } from "@/lib/i18n";
import type { LeadStatus } from "@/lib/supabase";

type Props = {
  id: string;
  locale: Locale;
  status: LeadStatus;
  wechatStatus: "wechat_added" | "wechat_not_added" | "unknown";
};

const statusOptions: { value: LeadStatus; label: Record<Locale, string> }[] = [
  { value: "new", label: { zh: "新线索", en: "New" } },
  { value: "contacted", label: { zh: "已联系", en: "Contacted" } },
  { value: "wechat_added", label: { zh: "已加微信", en: "WeChat Added" } },
  { value: "wechat_not_added", label: { zh: "未加微信", en: "WeChat Not Added" } },
  { value: "quoted", label: { zh: "已报价", en: "Quoted" } },
  { value: "won", label: { zh: "已成交", en: "Won" } },
  { value: "lost", label: { zh: "未成交", en: "Lost" } },
];

const wechatStatusOptions: { value: "unknown" | "wechat_added" | "wechat_not_added"; label: Record<Locale, string> }[] = [
  { value: "unknown", label: { zh: "待确认", en: "Unknown" } },
  { value: "wechat_added", label: { zh: "已加微信", en: "WeChat Added" } },
  { value: "wechat_not_added", label: { zh: "未加微信", en: "WeChat Not Added" } },
];

export function LeadStatusForm({ id, locale, status, wechatStatus }: Props) {
  const router = useRouter();
  const isEn = locale === "en";
  const [nextStatus, setNextStatus] = useState<LeadStatus>(status);
  const [nextWechatStatus, setNextWechatStatus] = useState<"wechat_added" | "wechat_not_added" | "unknown">(wechatStatus);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    try {
      await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: nextStatus,
          wechatStatus: nextWechatStatus === "unknown" ? undefined : nextWechatStatus,
        }),
      });
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <select
        value={nextStatus}
        onChange={(event) => setNextStatus(event.target.value as LeadStatus)}
        className="rounded-md border border-[#31443c] bg-[#0f1714] px-2 py-1 text-xs text-zinc-200"
      >
        {statusOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label[locale]}
          </option>
        ))}
      </select>

      <select
        value={nextWechatStatus}
        onChange={(event) => setNextWechatStatus(event.target.value as "wechat_added" | "wechat_not_added" | "unknown")}
        className="rounded-md border border-[#31443c] bg-[#0f1714] px-2 py-1 text-xs text-zinc-200"
      >
        {wechatStatusOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label[locale]}
          </option>
        ))}
      </select>

      <button
        onClick={save}
        disabled={saving}
        className="rounded-md border border-[#3a4f46] px-2 py-1 text-xs text-zinc-200 hover:border-[#d9bb85] disabled:opacity-60"
        type="button"
      >
        {saving ? (isEn ? "Saving..." : "保存中...") : isEn ? "Save" : "保存"}
      </button>
    </div>
  );
}

