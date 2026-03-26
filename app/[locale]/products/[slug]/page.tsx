import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { isLocale, locales } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { productBySlug, products } from "@/lib/site-data";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const product = productBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    locale,
    path: `/products/${slug}`,
    title: product.name[locale],
    description: product.advantages[locale],
    keywords:
      locale === "en"
        ? ["stainless steel decorative panels", "custom metal fabrication China", product.name.en]
        : ["不锈钢装饰板", "中国定制金属加工", product.name.zh],
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const product = productBySlug(slug);
  if (!product) notFound();

  const isEn = locale === "en";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[locale],
    description: product.advantages[locale],
    material: product.material[locale],
    brand: { "@type": "Brand", name: "Greateson" },
    manufacturer: { "@type": "Organization", name: "Greateson" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: { "@type": "Answer", text: item.a[locale] },
    })),
  };

  return (
    <section className="section">
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <nav className="mb-4 text-sm text-zinc-400">
        <Link href={`/${locale}`} className="hover:text-[#d9bb85]">{isEn ? "Home" : "首页"}</Link>
        <span className="px-2">/</span>
        <Link href={`/${locale}/products`} className="hover:text-[#d9bb85]">{isEn ? "Products" : "产品"}</Link>
        <span className="px-2">/</span>
        <span className="text-zinc-200">{product.name[locale]}</span>
      </nav>
      <p className="eyebrow">{isEn ? "Product Detail" : "产品详情"}</p>
      <h1 className="mt-3 text-4xl">{product.name[locale]}</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Image src={product.image} alt={product.name[locale]} width={1400} height={1100} className="card aspect-[3/4] w-full object-cover" />
        <div className="space-y-4 text-sm text-zinc-200">
          <p><strong>{isEn ? "Category" : "类别"}:</strong> {product.category[locale]}</p>
          <p><strong>{isEn ? "Material" : "材质"}:</strong> {product.material[locale]}</p>
          <p><strong>{isEn ? "Thickness" : "厚度"}:</strong> {product.thickness[locale]}</p>
          <p><strong>{isEn ? "Size" : "规格"}:</strong> {product.size[locale]}</p>
          <p><strong>{isEn ? "Surface Finish" : "表面工艺"}:</strong> {product.finish[locale]}</p>
          <p><strong>{isEn ? "Applications" : "应用"}:</strong> {product.applications[locale]}</p>
          <p><strong>{isEn ? "MOQ" : "起订量"}:</strong> {product.moq[locale]}</p>
          <p><strong>{isEn ? "Lead Time" : "交期"}:</strong> {product.leadTime[locale]}</p>
        </div>
      </div>

      <div className="card mt-10 p-6">
        <h2 className="text-2xl text-[#f5e5c5]">{isEn ? "Why this product" : "产品优势"}</h2>
        <p className="mt-3 text-zinc-300">{product.advantages[locale]}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "OEM" : "来图定制"}</span>
          <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "ODM" : "来样定制"}</span>
          <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "Custom Fabrication" : "定制加工"}</span>
          <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{product.material[locale]}</span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl text-[#f5e5c5]">{isEn ? "FAQ" : "常见问题"}</h2>
        <div className="mt-4 space-y-4">
          {product.faq.map((item, index) => (
            <article key={index} className="card p-5">
              <h3 className="font-medium">{item.q[locale]}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.a[locale]}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href={`/${locale}/applications`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Related applications" : "相关应用场景"}
        </Link>
        <Link href={`/${locale}/cases`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Project case studies" : "工程案例"}
        </Link>
        <Link href={`/${locale}/quote`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Request quote" : "获取报价"}
        </Link>
      </div>
    </section>
  );
}
