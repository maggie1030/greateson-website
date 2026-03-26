import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { QuoteForm } from "@/components/quote/QuoteForm";
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
      <QuoteForm locale={locale} />
    </section>
  );
}
