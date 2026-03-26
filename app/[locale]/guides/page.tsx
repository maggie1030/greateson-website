import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getArticlesByCategory } from "@/lib/articles";
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
  const guides = await getArticlesByCategory("guide");

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Guides" : "应用指南"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Technical Guide Library" : "技术指南内容库"}</h1>
      <div className="mt-10 space-y-4">
        {guides.map((item) => (
          <article key={item.slug} className="card p-5 text-zinc-200">
            <p className="text-xs text-zinc-400">
              {item.publishedAt} · {item.readTime[locale]}
            </p>
            <h2 className="mt-2 text-xl text-[#f5e5c5]">{item.title[locale]}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{item.excerpt[locale]}</p>
            <Link href={`/${locale}/guides/${item.slug}`} className="mt-4 inline-block text-sm text-[#d9bb85]">
              {isEn ? "Read full guide" : "阅读全文"}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
