import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { applications } from "@/lib/site-data";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/applications",
    title: locale === "en" ? "Application Scenarios" : "应用场景",
    description:
      locale === "en"
        ? "Discover 10 stainless steel application scenarios including hotels, facades, elevator panels, retail, malls and office interiors."
        : "覆盖酒店、外立面、电梯、零售、商场、办公等10大不锈钢应用场景。",
  });
}

export default async function ApplicationsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Applications" : "应用场景"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "10 Engineering Application Contexts" : "10 大工程应用场景"}</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {applications.map((item) => (
          <article key={item.slug} className="card overflow-hidden">
            <Image src={item.image} alt={item.name[locale]} width={1200} height={900} className="aspect-[3/4] w-full object-cover" />
            <div className="p-5">
              <h2 className="text-2xl text-[#f5e5c5]">{item.name[locale]}</h2>
              <p className="mt-2 text-sm text-zinc-300">{item.description[locale]}</p>
              <Link href={`/${locale}/applications/${item.slug}`} className="mt-4 inline-block text-sm text-[#d9bb85]">
                {isEn ? "Read scenario details" : "查看场景详情"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
