"use client";

import { useState } from "react";

import type { Locale } from "@/lib/i18n";

export function AdminLogoutButton({ locale }: { locale: Locale }) {
  const isEn = locale === "en";
  const [loading, setLoading] = useState(false);

  async function onLogout() {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      window.location.href = `/${locale}/admin/login`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      disabled={loading}
      className="rounded-full border border-[#3a4f46] px-4 py-2 text-xs text-zinc-200 hover:border-[#d9bb85] disabled:opacity-60"
    >
      {loading ? (isEn ? "Signing out..." : "退出中...") : isEn ? "Sign out" : "退出登录"}
    </button>
  );
}

