import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { caseBySlug, caseStudies, products, type Product } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import { isLocale, locales } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) => caseStudies.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const data = caseBySlug(slug);
  if (!data) return {};

  return buildMetadata({
    locale,
    path: `/cases/${slug}`,
    title: data.title[locale],
    description: data.summary[locale],
    keywords: data.keywords.map((item) => item[locale]),
  });
}

export default async function CaseDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const data = caseBySlug(slug);
  if (!data) notFound();
  const isEn = locale === "en";

  const related = data.productSlugs
    .map((slugName) => products.find((item) => item.slug === slugName))
    .filter((item): item is Product => Boolean(item));

  const displayLocation = data.location[locale];
  const displayKeywords = data.keywords.map((item) => item[locale]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title[locale],
    author: { "@type": "Organization", name: "Greateson" },
    datePublished: "2026-03-01",
    dateModified: "2026-03-24",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEn
          ? `What products were used in ${data.title.en}?`
          : `${data.title.zh} 使用了哪些产品？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: related.map((item) => item.name[locale]).join(", "),
        },
      },
      {
        "@type": "Question",
        name: isEn ? "What is the key delivery outcome?" : "本项目核心交付成果是什么？",
        acceptedAnswer: {
          "@type": "Answer",
          text: data.result[locale],
        },
      },
    ],
  };

  return (
    <section className="section">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <nav className="mb-4 text-sm text-zinc-400">
        <Link href={`/${locale}`} className="hover:text-[#d9bb85]">{isEn ? "Home" : "首页"}</Link>
        <span className="px-2">/</span>
        <Link href={`/${locale}/cases`} className="hover:text-[#d9bb85]">{isEn ? "Cases" : "案例"}</Link>
        <span className="px-2">/</span>
        <span className="text-zinc-200">{data.title[locale]}</span>
      </nav>
      <p className="eyebrow">{isEn ? "Case Detail" : "案例详情"}</p>
      <h1 className="mt-3 max-w-4xl text-4xl leading-tight md:text-5xl">{data.title[locale]}</h1>

      <div className="mt-8 grid items-start gap-6 md:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)]">
        <article className="card mx-auto w-full max-w-[420px] overflow-hidden">
          <Image src={data.image} alt={data.title[locale]} width={1600} height={1000} className="aspect-[3/4] w-full object-cover" />
        </article>

        <div className="space-y-4">
          <article className="card p-5">
            <p className="text-sm text-zinc-300">
              {displayLocation} · {data.year}
            </p>
            <h2 className="mt-3 text-2xl text-[#f5e5c5]">{isEn ? "Project Summary" : "项目概况"}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{data.summary[locale]}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-300">
              {displayKeywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-[#3a4f46] px-3 py-1">
                  {keyword}
                </span>
              ))}
            </div>
          </article>

          <article className="card p-5">
            <h2 className="text-xl text-[#f5e5c5]">{isEn ? "Challenge" : "项目挑战"}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{data.challenge[locale]}</p>
          </article>

          <article className="card p-5">
            <h2 className="text-xl text-[#f5e5c5]">{isEn ? "Solution" : "解决方案"}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{data.solution[locale]}</p>
          </article>
          <article className="card p-5">
            <h2 className="text-xl text-[#f5e5c5]">{isEn ? "Result" : "交付成果"}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{data.result[locale]}</p>
          </article>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl text-[#f5e5c5]">{isEn ? "Related Products" : "相关产品"}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <Link key={item.slug} href={`/${locale}/products/${item.slug}`} className="card p-4 text-zinc-200 transition hover:border-[#d9bb85]">
              {item.name[locale]}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href={`/${locale}/applications`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Explore applications" : "查看应用场景"}
        </Link>
        <Link href={`/${locale}/about#factory`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Review factory capability" : "查看工厂能力"}
        </Link>
        <Link href={`/${locale}/quote`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Get project quotation" : "获取项目报价"}
        </Link>
      </div>
    </section>
  );
}
