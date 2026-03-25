import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/quote",
    title: locale === "en" ? "Request Quote" : "获取报价",
    description:
      locale === "en"
        ? "Submit your project requirement for custom stainless steel screens, sheets and honeycomb panels. Fast response from Greateson team."
        : "提交不锈钢屏风、装饰板、蜂窝板项目需求，快速获取顺佳兴团队报价反馈。",
  });
}

export default async function QuotePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Quote" : "获取报价"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Request a Production-Ready Quote" : "获取可执行的工程报价方案"}</h1>
      <p className="mt-5 max-w-3xl text-zinc-300">
        {isEn
          ? "For faster quotation, please include drawings, dimensions, material grade, finish requirement, quantity and target delivery time."
          : "为提高报价效率，请尽量提供图纸、尺寸、材质等级、表面工艺、数量和目标交期。"}
      </p>
      <form className="card mt-8 grid gap-4 p-6 md:grid-cols-2">
        <input className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm" placeholder={isEn ? "Company Name" : "公司名称"} />
        <input className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm" placeholder={isEn ? "Contact Person" : "联系人"} />
        <input className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm" placeholder={isEn ? "Email" : "邮箱"} />
        <input className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm" placeholder={isEn ? "WhatsApp / Phone" : "即时通讯 / 电话"} />
        <textarea className="min-h-36 rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm md:col-span-2" placeholder={isEn ? "Project requirement details..." : "项目需求详情..."} />
        <button className="rounded-full bg-[#d9bb85] px-6 py-3 text-sm font-medium text-[#1b1610] md:col-span-2" type="button">
          {isEn ? "Send RFQ" : "提交询价"}
        </button>
      </form>
    </section>
  );
}
