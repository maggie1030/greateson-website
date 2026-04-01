import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { isLocale } from "@/lib/i18n";
import { applications, caseStudies, faqEntries, products } from "@/lib/site-data";
import { buildMetadata, organizationSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return buildMetadata({
    locale,
    path: "/",
    title:
      locale === "en"
        ? "Greateson | Premium Decorative Metal Solutions"
        : "顺佳兴 | 高端金属装饰解决方案",
    description:
      locale === "en"
        ? "Greateson is a stainless steel screen manufacturer and decorative panel factory in China, delivering custom fabrication for hotels, facades, retail and commercial interiors."
        : "顺佳兴专注不锈钢屏风、装饰板、蜂窝板定制制造，服务酒店、外立面、零售与商业空间项目。",
    keywords: [
      "stainless steel decorative panels",
      "stainless steel screen manufacturer",
      "custom metal fabrication China",
    ],
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const isEn = locale === "en";
  const hotProducts = products.slice(0, 4);
  const hotApplications = applications.slice(0, 4);
  const featuredCases = caseStudies.slice(0, 4);
  const topFaqEntries = faqEntries.slice(0, 5);

  const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topFaqEntries.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[locale],
      },
    })),
  };

  return (
    <>
      <JsonLd data={organizationSchema(locale)} />
      <JsonLd data={homepageFaqSchema} />
      <section className="relative w-full min-h-[calc(100svh-72px)] overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/api/site-media?file=%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260326142717_1044_55.jpg"
            alt={isEn ? "Greateson architectural scene" : "顺佳兴工程场景垫图"}
            className="h-full w-full object-cover blur-[0.8px]"
          />
          <div className="absolute inset-0 bg-[#0c1714]/45" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-6xl min-h-[calc(100svh-72px)] items-center justify-center px-6 py-16 md:py-20">
          <div className="max-w-4xl text-center">
            <p className="eyebrow">{isEn ? "Premium Metal Craft Since 2008" : "2008年起深耕高端金属工艺"}</p>
            <h1 className="mt-5 text-4xl leading-[1.15] text-[#f6f2e9] md:text-7xl">
              {isEn ? (
                <>
                  <span className="block">Architecture & Interior Spaces</span>
                  <span className="block">Stainless Steel Solutions</span>
                </>
              ) : (
                <>
                  <span className="block">建筑与室内空间</span>
                  <span className="block">不锈钢解决方案</span>
                </>
              )}
            </h1>
            <p className="mt-6 border-t border-white/25 pt-4 text-zinc-200">
              {isEn
                ? "From decorative sheets to custom screens and honeycomb systems, Greateson delivers full-chain fabrication for hospitality, retail and landmark facade projects."
                : "从装饰板到定制屏风与蜂窝系统，顺佳兴提供覆盖设计、加工、交付的一体化制造服务，服务酒店、零售和地标外立面项目。"}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}/products`} className="rounded-full bg-[#d9bb85] px-6 py-3 font-medium text-[#1b1610]">
                {isEn ? "Explore Products" : "浏览产品"}
              </Link>
              <Link href={`/${locale}/cases`} className="rounded-full border border-[#d9bb85] px-6 py-3 text-[#e9d4a9]">
                {isEn ? "View Case Studies" : "查看案例"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">{isEn ? "Products" : "产品中心"}</p>
            <h2 className="mt-2 text-3xl">{isEn ? "Core Product Systems" : "核心产品体系"}</h2>
          </div>
          <Link href={`/${locale}/products`} className="text-sm text-[#e6cf9f]">
            {isEn ? "All products" : "全部产品"}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {hotProducts.map((item) => (
            <article key={item.slug} className="card overflow-hidden">
              <Image
                src={item.image}
                alt={item.name[locale]}
                width={1200}
                height={900}
                unoptimized
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-[#f5e5c5]">{item.name[locale]}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.advantages[locale]}</p>
                <Link href={`/${locale}/products/${item.slug}`} className="mt-4 inline-block text-sm text-[#d9bb85]">
                  {isEn ? "Learn more" : "查看详情"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">{isEn ? "Applications" : "应用场景"}</p>
            <h2 className="mt-2 text-3xl">{isEn ? "Built for Real Project Contexts" : "面向真实项目场景"}</h2>
          </div>
          <Link href={`/${locale}/applications`} className="text-sm text-[#e6cf9f]">
            {isEn ? "Learn more" : "了解更多"}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {hotApplications.map((item) => (
            <Link key={item.slug} href={`/${locale}/applications/${item.slug}`} className="card overflow-hidden transition hover:-translate-y-0.5">
              <Image src={item.image} alt={item.name[locale]} width={1200} height={900} className="aspect-[4/5] w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl text-[#f5e5c5]">{item.name[locale]}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.description[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">{isEn ? "Case Studies" : "工程案例"}</p>
            <h2 className="mt-2 text-3xl">{isEn ? "Recent Delivery Highlights" : "近期交付项目精选"}</h2>
          </div>
          <Link href={`/${locale}/cases`} className="text-sm text-[#e6cf9f]">
            {isEn ? "Learn more" : "了解更多"}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {featuredCases.map((item) => (
            <article key={item.slug} className="card overflow-hidden">
              <Image src={item.image} alt={item.title[locale]} width={1200} height={900} className="aspect-[4/5] w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl text-[#f5e5c5]">{item.title[locale]}</h3>
                <p className="mt-2 text-sm text-zinc-300">
                  {item.location[locale]} · {item.year}
                </p>
                <p className="mt-3 text-sm text-zinc-300">{item.summary[locale]}</p>
                <Link href={`/${locale}/cases/${item.slug}`} className="mt-4 inline-block text-sm text-[#d9bb85]">
                  {isEn ? "Read case" : "查看案例"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">{isEn ? "FAQ for GEO" : "生成引擎常见问题"}</p>
        <h2 className="mt-2 text-3xl">{isEn ? "High-Intent Buyer Questions" : "高意向客户核心问题"}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {topFaqEntries.map((item) => (
            <article key={item.q.en} className="card p-5">
              <h3 className="text-lg text-[#f5e5c5]">{item.q[locale]}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.a[locale]}</p>
            </article>
          ))}
        </div>
        <Link href={`/${locale}/faq`} className="mt-5 inline-block text-sm text-[#d9bb85]">
          {isEn ? "View all FAQ" : "查看全部常见问题"}
        </Link>
      </section>

      <section className="section pb-24">
        <div className="card grid items-center gap-6 p-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">{isEn ? "Start a Project" : "项目合作"}</p>
            <h2 className="mt-2 text-3xl">
              {isEn ? "Need a custom stainless steel solution?" : "需要定制不锈钢工程方案？"}
            </h2>
            <p className="mt-3 text-zinc-300">
              {isEn
                ? "Share your drawings, timeline and target finish. Our engineering team will provide a production-ready quotation."
                : "提交图纸、交期和目标工艺，我们的工程团队将给出可执行报价方案。"}
            </p>
          </div>
          <div className="flex gap-4 md:justify-end">
            <Link href={`/${locale}/quote`} className="rounded-full bg-[#d9bb85] px-6 py-3 font-medium text-[#1b1610]">
              {isEn ? "Request Quote" : "获取报价"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
