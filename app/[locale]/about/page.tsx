import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { isLocale } from "@/lib/i18n";
import { company } from "@/lib/site-data";
import { buildMetadata, organizationSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/about",
    title: locale === "en" ? "About Greateson" : "关于顺佳兴",
    description:
      locale === "en"
        ? "Learn about Greateson's 10,000sqm stainless steel manufacturing base in Foshan and our OEM/ODM capabilities for global projects."
        : "了解顺佳兴在佛山10,000㎡制造基地及面向全球工程客户的定制开发能力。",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <JsonLd data={organizationSchema(locale)} />
      <p className="eyebrow">{isEn ? "About" : "关于我们"}</p>
      <h1 className="mt-3 text-4xl">
        {isEn ? "Built in Foshan, Serving Global Decorative Projects" : "立足佛山，服务全球金属装饰工程"}
      </h1>
      <p className="mt-6 max-w-3xl text-zinc-300">
        {isEn
          ? "Greateson has focused on decorative stainless steel manufacturing since 2008. We operate one integrated production system from raw sheet treatment to finished product fabrication, helping architects, contractors and interior brands ship quality metal solutions faster."
          : "顺佳兴自 2008 年起专注不锈钢装饰制造，构建从原板处理到成品加工的一体化生产体系，为建筑设计、工程总包与商业品牌提供更快、更稳的交付能力。"}
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="card p-6">
          <h2 className="text-2xl text-[#f0d9ac]">{isEn ? "Company Profile" : "公司概况"}</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>{isEn ? "Legal Name" : "法定名称"}: {company.legalName[locale]}</li>
            <li>{isEn ? "Founded" : "成立时间"}: {company.foundedYear}</li>
            <li>{isEn ? "Headquarters" : "总部"}: {company.headquarters[locale]}</li>
            <li>{isEn ? "Factory Area" : "工厂面积"}: {company.factoryArea}</li>
            <li>{isEn ? "Employees" : "员工规模"}: {company.employees}</li>
          </ul>
        </article>
        <article className="card p-6">
          <h2 className="text-2xl text-[#f0d9ac]">{isEn ? "Core Strengths" : "核心优势"}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>
              {isEn
                ? "One-stop service from decorative sheet processing to finished engineered products."
                : "从装饰板加工到工程成品的一站式制造能力。"}
            </li>
            <li>
              {isEn
                ? "In-house factory operations for better cost, quality and lead-time control."
                : "自有工厂全流程控制，兼顾成本、质量与交付稳定性。"}
            </li>
            <li>
              {isEn
                ? "Export experience across Middle East, Europe and Southeast Asia."
                : "具备中东、欧洲、东南亚等市场项目交付经验。"}
            </li>
            <li>
              {isEn
                ? "ISO quality management practices and production traceability."
                : "遵循质量管理流程并具备生产可追溯体系。"}
            </li>
          </ul>
        </article>
      </div>

    </section>
  );
}
