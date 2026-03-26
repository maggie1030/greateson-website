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
  const posts = await getArticlesByCategory("blog");

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Blog" : "博客"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Industry Insights" : "行业内容与洞察"}</h1>
      <div className="mt-10 space-y-4">
        {posts.map((item) => (
          <article key={item.slug} className="card p-5 text-zinc-200">
            <p className="text-xs text-zinc-400">
              {item.publishedAt} · {item.readTime[locale]}
            </p>
            <h2 className="mt-2 text-xl text-[#f5e5c5]">{item.title[locale]}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{item.excerpt[locale]}</p>
            <Link href={`/${locale}/blog/${item.slug}`} className="mt-4 inline-block text-sm text-[#d9bb85]">
              {isEn ? "Read full article" : "阅读全文"}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
