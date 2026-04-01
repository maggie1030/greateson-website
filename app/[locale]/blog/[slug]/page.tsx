import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { getArticleBySlug } from "@/lib/articles";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const hiddenBlogSlugs = new Set(["why-water-ripple-stainless-steel-is-everywhere-2026"]);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  if (hiddenBlogSlugs.has(slug)) return {};
  const post = await getArticleBySlug(slug, "blog");
  if (!post) return {};

  return buildMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title[locale],
    description: post.excerpt[locale],
    keywords: post.keywords[locale],
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (hiddenBlogSlugs.has(slug)) notFound();
  const post = await getArticleBySlug(slug, "blog");
  if (!post) notFound();

  const isEn = locale === "en";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[locale],
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "Greateson" },
    keywords: post.keywords[locale].join(", "),
    inLanguage: locale === "en" ? "en-US" : "zh-CN",
  };

  return (
    <section className="section">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <nav className="mb-4 text-sm text-zinc-400">
        <Link href={`/${locale}`} className="hover:text-[#d9bb85]">
          {isEn ? "Home" : "首页"}
        </Link>
        <span className="px-2">/</span>
        <Link href={`/${locale}/blog`} className="hover:text-[#d9bb85]">
          {isEn ? "Blog" : "博客"}
        </Link>
        <span className="px-2">/</span>
        <span className="text-zinc-200">{post.title[locale]}</span>
      </nav>

      <p className="eyebrow">{isEn ? "Blog" : "博客"}</p>
      <h1 className="mt-3 max-w-5xl text-4xl leading-tight md:text-5xl">{post.title[locale]}</h1>
      <p className="mt-4 text-sm text-zinc-400">
        {post.publishedAt} · {post.readTime[locale]}
      </p>
      <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-200">{post.excerpt[locale]}</p>

      <div className="mt-8 flex flex-wrap gap-2 text-xs">
        {post.keywords[locale].map((keyword) => (
          <span key={keyword} className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">
            {keyword}
          </span>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {post.sections.map((section) => (
          <article key={section.heading[locale]} className="card p-6">
            <h2 className="text-2xl text-[#f5e5c5]">{section.heading[locale]}</h2>
            <div className="mt-3 space-y-3">
              {section.paragraphs.map((text) => (
                <p key={text[locale]} className="text-sm leading-7 text-zinc-300">
                  {text[locale]}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="card mt-8 p-6">
        <h2 className="text-2xl text-[#f5e5c5]">{isEn ? "FAQ" : "常见问题"}</h2>
        <div className="mt-4 space-y-4">
          {post.faq.map((item) => (
            <div key={item.q[locale]} className="rounded-2xl border border-[#2d4039] p-4">
              <p className="text-sm font-semibold text-zinc-100">{item.q[locale]}</p>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{item.a[locale]}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="card mt-8 p-6">
        <h2 className="text-2xl text-[#f5e5c5]">{isEn ? "Project Next Step" : "项目下一步"}</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-300">
          {isEn
            ? "Need drawing-based material selection and budget estimation? Share your project requirements and our team will propose a suitable stainless steel solution."
            : "如需基于图纸进行材质选型和成本评估，可提交项目需求，由团队提供匹配的不锈钢方案建议。"}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href={`/${locale}/products`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
            {isEn ? "View products" : "查看产品"}
          </Link>
          <Link href={`/${locale}/cases`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
            {isEn ? "View case studies" : "查看案例"}
          </Link>
          <Link href={`/${locale}/quote`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
            {isEn ? "Get quote" : "获取报价"}
          </Link>
        </div>
      </article>
    </section>
  );
}
