import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

const guideTitles = {
  en: [
    "How to Select Stainless Steel Panels for Hotel Projects",
    "Surface Finish Comparison: Mirror vs Hairline vs Etched",
    "Honeycomb Panels vs Solid Sheet: Weight and Structure",
    "Installation Guide for Stainless Steel Wall Cladding",
  ],
  zh: [
    "酒店项目如何选择不锈钢装饰板",
    "镜面、拉丝、蚀刻工艺对比指南",
    "蜂窝板与实心板重量和结构对比",
    "不锈钢墙面装饰安装指南",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/guides",
    title: locale === "en" ? "Technical Guides" : "应用指南",
    description:
      locale === "en"
        ? "Technical buying and installation guides for decorative stainless steel engineering projects."
        : "面向不锈钢工程项目的选型、工艺与安装技术指南。",
  });
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Guides" : "应用指南"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Technical Guide Library" : "技术指南内容库"}</h1>
      <div className="mt-10 space-y-4">
        {guideTitles[locale].map((title) => (
          <article key={title} className="card p-5 text-zinc-200">
            {title}
          </article>
        ))}
      </div>
    </section>
  );
}
