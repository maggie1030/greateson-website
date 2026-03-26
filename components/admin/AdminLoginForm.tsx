"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Locale } from "@/lib/i18n";

export function AdminLoginForm({ locale, nextPath }: { locale: Locale; nextPath?: string }) {
  const isEn = locale === "en";
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, rememberMe }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => ({ message: "" }))) as { message?: string };
        if (response.status === 503) {
          setError(isEn ? "Admin account is not configured yet." : "管理员账号尚未配置。");
        } else {
          setError(data.message || (isEn ? "Invalid account or password." : "账号或密码错误。"));
        }
        return;
      }

      router.push(nextPath || `/${locale}/admin/leads`);
      router.refresh();
    } catch {
      setError(isEn ? "Network error, please try again." : "网络异常，请稍后重试。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card mt-8 max-w-xl space-y-4 p-6">
      <div>
        <label className="mb-2 block text-sm text-zinc-300">{isEn ? "Username" : "账号"}</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm"
          placeholder={isEn ? "Enter username" : "请输入账号"}
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm text-zinc-300">{isEn ? "Password" : "密码"}</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm"
          placeholder={isEn ? "Enter password" : "请输入密码"}
          required
        />
      </div>
      <label className="flex items-center gap-2 text-sm text-zinc-300">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
          className="h-4 w-4 rounded border-[#31443c] bg-[#0f1714]"
        />
        <span>{isEn ? "Remember me for 30 days" : "30天内记住我"}</span>
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-[#d9bb85] px-6 py-2 text-sm font-medium text-[#1b1610] disabled:opacity-70"
      >
        {submitting ? (isEn ? "Signing in..." : "登录中...") : isEn ? "Sign in" : "登录"}
      </button>
      {error ? (
        <div className="rounded-xl border border-rose-400/40 bg-rose-500/10 p-3 text-sm text-rose-200">
          <p className="font-medium">{isEn ? "Sign-in failed" : "登录失败"}</p>
          <p className="mt-1">{error}</p>
        </div>
      ) : null}
    </form>
  );
}

