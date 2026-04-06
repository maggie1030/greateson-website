import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { isLocale } from "@/lib/i18n";
import { applications, caseStudies, faqEntries, products } from "@/lib/site-data";
import { buildMetadata, organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";

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
        ? "Architectural Stainless Steel Solutions"
        : "顺佳兴 | 高端金属装饰解决方案",
    description:
      locale === "en"
        ? "Bespoke stainless steel screens, architectural panels & honeycomb facade systems crafted since 2008. Tailored solutions for hospitality, luxury retail & landmark projects."
        : "顺佳兴专注不锈钢屏风、装饰板、蜂窝板定制制造，服务酒店、外立面、零售与商业空间项目。",
    keywords: locale === "en" ? [
      "architectural stainless steel",
      "bespoke metal screens",
      "hotel metalwork solutions",
      "luxury retail metal fabrication",
      "stainless steel facade systems"
    ] : [
      "不锈钢装饰",
      "金属屏风定制",
      "不锈钢蜂窝板"
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

  const homepageFaqStructuredData = {
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

  const breadcrumbStructuredData = breadcrumbSchema(locale, [
    { name: isEn ? "Home" : "首页" },
  ]);

  return (
    <>
      <JsonLd data={websiteSchema(locale)} />
      <JsonLd data={organizationSchema(locale)} />
      <JsonLd data={breadcrumbStructuredData} />
      <JsonLd data={homepageFaqStructuredData} />
      <section className="relative w-full min-h-[calc(100svh-72px)] overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/site/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260326142717_1044_55.jpg"
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
                  <span className="block">Architectural Metal Solutions</span>
                  <span className="block">Crafted for Landmark Projects</span>
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
                ? "Bespoke fabrication of decorative panels, architectural screens and honeycomb facade systems. Trusted by hospitality designers, luxury retail brands and landmark developments since 2008."
                : "从装饰板到定制屏风与蜂窝系统，顺佳兴提供覆盖设计、加工、交付的一站式制造服务，服务酒店、零售和地标外立面项目。"}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}/products`} className="rounded-full bg-[#d9bb85] px-6 py-3 font-medium text-[#1b1610]">
                {isEn ? "Explore Systems" : "浏览产品"}
              </Link>
              <Link href={`/${locale}/cases`} className="rounded-full border border-[#d9bb85] px-6 py-3 text-[#e9d4a9]">
                {isEn ? "View Delivered Projects" : "查看案例"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">{isEn ? "Product Systems" : "产品中心"}</p>
            <h2 className="mt-2 text-3xl">{isEn ? "Architectural Metal Systems" : "核心产品体系"}</h2>
          </div>
          <Link href={`/${locale}/products`} className="text-sm text-[#e6cf9f]">
            {isEn ? "View All Systems" : "全部产品"}
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
                  {isEn ? "See Specifications" : "查看详情"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">{isEn ? "Project Applications" : "应用场景"}</p>
            <h2 className="mt-2 text-3xl">{isEn ? "Built for Real Project Contexts" : "面向真实项目场景"}</h2>
          </div>
          <Link href={`/${locale}/applications`} className="text-sm text-[#e6cf9f]">
            {isEn ? "See Application Guides" : "了解更多"}
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
            <p className="eyebrow">{isEn ? "Delivered Projects" : "工程案例"}</p>
            <h2 className="mt-2 text-3xl">{isEn ? "Recent Project Deliveries" : "交付项目精选"}</h2>
          </div>
          <Link href={`/${locale}/cases`} className="text-sm text-[#e6cf9f]">
            {isEn ? "View Portfolio" : "了解更多"}
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
                  {isEn ? "View Project Details" : "查看案例"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">{isEn ? "Common Questions" : "常见问题"}</p>
        <h2 className="mt-2 text-3xl">{isEn ? "Questions from Project Specifiers" : "客户关心问题"}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {topFaqEntries.map((item) => (
            <article key={item.q.en} className="card p-5">
              <h3 className="text-lg text-[#f5e5c5]">{item.q[locale]}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.a[locale]}</p>
            </article>
          ))}
        </div>
        <Link href={`/${locale}/faq`} className="mt-5 inline-block text-sm text-[#d9bb85]">
          {isEn ? "Browse All Q&A" : "查看全部常见问题"}
        </Link>
      </section>

      <section className="section pb-24">
        <div className="card grid items-center gap-6 p-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">{isEn ? "Start Your Project" : "项目合作"}</p>
            <h2 className="mt-2 text-3xl">
              {isEn ? "Planning a metalwork project?" : "需要定制不锈钢工程方案？"}
            </h2>
            <p className="mt-3 text-zinc-300">
              {isEn
                ? "Share specifications, timelines and finish requirements. Our engineering team will advise on materials, fabrication methods and deliver a production-ready estimate."
                : "提交图纸、交期和目标工艺，我们的工程团队将给出可执行报价方案。"}
            </p>
          </div>
          <div className="flex gap-4 md:justify-end">
            <Link href={`/${locale}/quote`} className="rounded-full bg-[#d9bb85] px-6 py-3 font-medium text-[#1b1610]">
              {isEn ? "Request Project Estimate" : "获取报价"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
