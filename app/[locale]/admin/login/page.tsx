import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ next?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/admin/login",
    title: locale === "en" ? "Admin Sign In" : "后台登录",
    description: locale === "en" ? "Sign in to access lead management." : "登录后访问询盘管理后台。",
  });
}

export default async function AdminLoginPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { next } = await searchParams;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Admin" : "后台"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Sign in to Lead Management" : "登录询盘管理后台"}</h1>
      <p className="mt-4 max-w-2xl text-sm text-zinc-300">
        {isEn ? "Please enter your admin account and password." : "请输入管理员账号和密码。"}
      </p>
      <AdminLoginForm locale={locale} nextPath={next} />
    </section>
  );
}

