import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { applications } from "@/lib/site-data";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { getApplicationRandomImage } from "@/lib/application-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/applications",
    title: locale === "en" ? "Project Applications" : "应用场景",
    description:
      locale === "en"
        ? "Architectural metal applications for hospitality, retail, elevators, facades and commercial interiors. Technical guides for specifiers."
        : "覆盖酒店、零售、电梯、外立面、商业室内等不锈钢应用场景，提供技术指南。",
    keywords: locale === "en" ? [
      "architectural metal applications",
      "hotel metalwork solutions",
      "stainless steel interior design"
    ] : undefined,
  });
}

export default async function ApplicationsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";
  const applicationCards = await Promise.all(
    applications.map(async (item) => ({
      ...item,
      displayImage: await getApplicationRandomImage(item.slug, item.image),
    })),
  );

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Application Guides" : "应用场景"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Architectural Metal Applications" : "不锈钢工程应用场景"}</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {applicationCards.map((item) => (
          <article key={item.slug} className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.displayImage} alt={item.name[locale]} className="aspect-[3/4] w-full object-cover" />
            <div className="p-5">
              <h2 className="text-2xl text-[#f5e5c5]">{item.name[locale]}</h2>
              <p className="mt-2 text-sm text-zinc-300">{item.description[locale]}</p>
              <Link href={`/${locale}/applications/${item.slug}`} className="mt-4 inline-block text-sm text-[#d9bb85]">
                {isEn ? "Explore Application" : "查看场景详情"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
