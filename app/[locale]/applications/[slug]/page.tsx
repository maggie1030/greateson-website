import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ApplicationImageCarousel } from "@/components/application/ApplicationImageCarousel";
import { applicationBySlug, applications } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import { isLocale, locales } from "@/lib/i18n";
import { getApplicationCarouselImages, getApplicationNarrative } from "@/lib/application-content";

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
  const narrative = await getApplicationNarrative(slug, locale, data);
  const carouselImages = await getApplicationCarouselImages(slug, data.image);

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Application Detail" : "场景详情"}</p>
      <h1 className="mt-3 text-4xl">{data.name[locale]}</h1>

      <div className="mt-8 grid items-start gap-6 md:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
        <ApplicationImageCarousel images={carouselImages} alt={data.name[locale]} />
        <div className="space-y-4 text-sm text-zinc-200">
          <article className="card p-5">
            <h2 className="text-lg text-[#f5e5c5]">{isEn ? "Description" : "场景说明"}</h2>
            <p className="mt-2 leading-7">{narrative.description}</p>
          </article>
          <article className="card p-5">
            <h2 className="text-lg text-[#f5e5c5]">{isEn ? "Typical Products" : "典型产品"}</h2>
            <p className="mt-2 leading-7">{narrative.typicalProducts}</p>
          </article>
          <article className="card p-5">
            <h2 className="text-lg text-[#f5e5c5]">{isEn ? "Benefits" : "场景优势"}</h2>
            <p className="mt-2 leading-7">{narrative.benefits}</p>
          </article>
          <article className="card p-5">
            <h2 className="text-lg text-[#f5e5c5]">{isEn ? "Case Example" : "案例示例"}</h2>
            <p className="mt-2 leading-7">{narrative.caseExample}</p>
          </article>
          <article className="card p-5">
            <h2 className="text-lg text-[#f5e5c5]">{isEn ? "FAQ" : "常见问答"}</h2>
            <p className="mt-2 leading-7">{narrative.faq}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
