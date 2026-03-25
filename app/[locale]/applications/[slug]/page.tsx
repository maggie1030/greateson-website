import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { applicationBySlug, applications } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import { isLocale, locales } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) => applications.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const data = applicationBySlug(slug);
  if (!data) return {};
  return buildMetadata({
    locale,
    path: `/applications/${slug}`,
    title: data.name[locale],
    description: data.description[locale],
  });
}

export default async function ApplicationDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const data = applicationBySlug(slug);
  if (!data) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Application Detail" : "场景详情"}</p>
      <h1 className="mt-3 text-4xl">{data.name[locale]}</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Image src={data.image} alt={data.name[locale]} width={1200} height={900} className="card h-full w-full object-cover" />
        <div className="space-y-5 text-sm text-zinc-200">
          <p><strong>{isEn ? "Description" : "场景说明"}:</strong> {data.description[locale]}</p>
          <p><strong>{isEn ? "Typical Products" : "典型产品"}:</strong> {data.typicalProducts[locale]}</p>
          <p><strong>{isEn ? "Benefits" : "场景优势"}:</strong> {data.benefits[locale]}</p>
          <p><strong>{isEn ? "Reference Case" : "案例示例"}:</strong> {data.caseExample[locale]}</p>
        </div>
      </div>
    </section>
  );
}
