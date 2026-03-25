import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

const posts = {
  en: [
    "PVD Coated Stainless Steel Sheets for Hotel Decoration",
    "Etched Stainless Steel Panel Manufacturing Process Explained",
    "How to Reduce Lead Time in Custom Metal Fabrication Projects",
  ],
  zh: [
    "酒店装饰用彩色不锈钢板选型建议",
    "蚀刻不锈钢装饰板制造流程详解",
    "定制金属工程如何缩短交付周期",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/blog",
    title: locale === "en" ? "Blog & Insights" : "行业洞察",
    description:
      locale === "en"
        ? "Read insights on stainless steel decorative trends, fabrication methods and engineering delivery best practices."
        : "获取不锈钢装饰趋势、加工方法与工程交付实践的行业洞察。",
  });
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Blog" : "博客"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Industry Insights" : "行业内容与洞察"}</h1>
      <div className="mt-10 space-y-4">
        {posts[locale].map((title) => (
          <article key={title} className="card p-5 text-zinc-200">
            {title}
          </article>
        ))}
      </div>
    </section>
  );
}
