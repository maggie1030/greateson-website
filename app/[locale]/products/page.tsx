import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { products } from "@/lib/site-data";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/products",
    title: locale === "en" ? "Stainless Steel Products" : "不锈钢产品中心",
    description:
      locale === "en"
        ? "Explore decorative stainless steel screens, display cabinets, sheets and honeycomb panels with custom fabrication options."
        : "浏览不锈钢屏风、展示柜、装饰板、蜂窝板等产品，支持工程级定制制造。",
  });
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Products" : "产品中心"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Core Product Portfolio" : "核心产品矩阵"}</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {products.map((item) => (
          <article key={item.slug} className="card overflow-hidden">
            <Image src={item.image} alt={item.name[locale]} width={1200} height={900} className="aspect-[3/4] w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl text-[#f5e5c5]">{item.name[locale]}</h2>
              <p className="mt-2 text-sm text-zinc-300">{item.category[locale]}</p>
              <p className="mt-2 text-sm text-zinc-300">
                {isEn ? "Material" : "材质"}: {item.material[locale]}
              </p>
              <Link href={`/${locale}/products/${item.slug}`} className="mt-4 inline-block text-sm text-[#d9bb85]">
                {isEn ? "View specifications" : "查看参数"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
