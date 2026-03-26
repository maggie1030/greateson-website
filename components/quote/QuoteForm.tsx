"use client";

import { useState } from "react";

import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function QuoteForm({ locale }: Props) {
  const isEn = locale === "en";
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");
    setMessage("");

    const payload = {
      companyName: String(formData.get("companyName") ?? ""),
      contactPerson: String(formData.get("contactPerson") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      wechatId: String(formData.get("wechatId") ?? ""),
      projectDetails: String(formData.get("projectDetails") ?? ""),
      locale,
      sourcePage: `/${locale}/quote`,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(
          data.message ??
            (isEn ? "Submission failed. Please try again later." : "提交失败，请稍后重试。"),
        );
        return;
      }

      setStatus("success");
      setMessage(
        isEn
          ? "Received. Our team will contact you soon."
          : "已收到需求，我们会尽快与你联系。",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(isEn ? "Network error. Please try again." : "网络异常，请稍后重试。");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card mt-8 grid gap-4 p-6 md:grid-cols-2">
      <input
        name="companyName"
        required
        className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm"
        placeholder={isEn ? "Company Name" : "公司名称"}
      />
      <input
        name="contactPerson"
        required
        className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm"
        placeholder={isEn ? "Contact Person" : "联系人"}
      />
      <input
        type="email"
        name="email"
        required
        className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm"
        placeholder={isEn ? "Email" : "邮箱"}
      />
      <input
        name="phone"
        required
        className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm"
        placeholder={isEn ? "WhatsApp / Phone" : "即时通讯 / 电话"}
      />
      <input
        name="wechatId"
        className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm md:col-span-2"
        placeholder={isEn ? "WeChat ID (optional)" : "微信号（可选）"}
      />
      <textarea
        name="projectDetails"
        required
        className="min-h-36 rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm md:col-span-2"
        placeholder={isEn ? "Project requirement details..." : "项目需求详情..."}
      />
      <button
        className="rounded-full bg-[#d9bb85] px-6 py-3 text-sm font-medium text-[#1b1610] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (isEn ? "Submitting..." : "提交中...") : isEn ? "Send RFQ" : "提交询价"}
      </button>

      {message ? (
        <p className={`text-sm md:col-span-2 ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

