import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/why-us",
    title: locale === "en" ? "Why Greateson" : "为什么选择顺佳兴",
    description:
      locale === "en"
        ? "Greateson combines one-stop manufacturing, strict quality control and global delivery experience."
        : "顺佳兴具备一站式制造、严格质控与全球项目交付经验。",
  });
}

export default async function WhyUsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  const points = isEn
    ? [
        "One-stop production from sheets to finished products.",
        "10,000㎡ factory with 11 integrated lines.",
        "Flexible MOQ from prototype to mass production.",
        "Export-ready packaging and project documentation.",
      ]
    : [
        "从板材到成品的一站式制造体系。",
        "10,000㎡ 工厂与 11 条集成产线。",
        "从打样到量产的灵活起订支持。",
        "提供出口级包装与项目技术文档。",
      ];

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Why Us" : "为什么选择我们"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Why Greateson" : "为什么选择顺佳兴"}</h1>
      <div className="mt-8 grid gap-4">
        {points.map((point) => (
          <article key={point} className="card p-5 text-zinc-200">
            {point}
          </article>
        ))}
      </div>
    </section>
  );
}
