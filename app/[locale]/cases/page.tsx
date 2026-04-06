import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudies } from "@/lib/site-data";
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
    path: "/cases",
    title: locale === "en" ? "Delivered Projects" : "工程案例",
    description:
      locale === "en"
        ? "Portfolio of architectural metalwork projects across hospitality, retail and landmark developments. See specifications, challenges and outcomes."
        : "查看酒店、零售、地标等项目案例，包含技术规格、挑战与成果。",
    keywords: locale === "en" ? [
      "architectural metalwork portfolio",
      "hotel metal installation projects",
      "stainless steel facade case studies"
    ] : undefined,
  });
}

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Project Portfolio" : "工程案例"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Delivered Architectural Metalwork" : "已交付地标项目"}</h1>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {caseStudies.map((item) => (
          <article key={item.slug} className="card overflow-hidden">
            <Image src={item.image} alt={item.title[locale]} width={1200} height={900} className="aspect-[3/4] w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl text-[#f5e5c5]">{item.title[locale]}</h2>
              <p className="mt-2 text-sm text-zinc-300">
                {item.location[locale]} · {item.year}
              </p>
              <p className="mt-3 text-sm text-zinc-300">{item.summary[locale]}</p>
              <Link href={`/${locale}/cases/${item.slug}`} className="mt-4 inline-block text-sm text-[#d9bb85]">
                {isEn ? "View Project Details" : "查看完整案例"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
