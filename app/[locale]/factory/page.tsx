import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

const lines = [
  { en: "PVD Vacuum Coating Line", zh: "真空镀膜线", image: "/images/factory/pvd-coating-line/图片1.png" },
  { en: "Copper Electroplating Line", zh: "铜电镀线", image: "/images/factory/electroplating-line/图片2.png" },
  { en: "Chemical Etching Line", zh: "化学蚀刻线", image: "/images/factory/etching-line/图片5.png" },
  { en: "Embossing Line", zh: "压花线", image: "/images/factory/embossing-line/图片6.png" },
  { en: "Sandblasting Line", zh: "喷砂线", image: "/images/factory/sandblasting-line/图片8.png" },
  { en: "Hairline Brushing Line", zh: "拉丝线", image: "/images/factory/hairline-line/图片7.png" },
  { en: "Anti-fingerprint Coating Line", zh: "抗指纹涂层线", image: "/images/factory/anti-fingerprint-line/图片9.png" },
  { en: "Honeycomb Panel Line", zh: "蜂窝板生产线", image: "/images/factory/Honeycomb Panel Production Line /图片12.png" },
  { en: "Laser Cutting Line", zh: "激光切割线", image: "/images/factory/Laser Cutting Line/图片10.png" },
  { en: "CNC Bending Line", zh: "数控折弯线", image: "/images/factory/Bending Line/图片13.png" },
  { en: "V-Grooving Line", zh: "开槽加工线", image: "/images/factory/V-Grooving line/图片11.png" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/factory",
    title: locale === "en" ? "Factory Capabilities" : "工厂实力",
    description:
      locale === "en"
        ? "Explore Greateson's 11-line stainless steel manufacturing system including PVD, etching, honeycomb panels, laser cutting and CNC bending."
        : "了解顺佳兴 11 条不锈钢产线能力，涵盖真空镀膜、蚀刻、蜂窝板、激光切割与数控折弯等工艺。",
  });
}

export default async function FactoryPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEn ? "How many production lines does Greateson operate?" : "顺佳兴有多少条产线？",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEn
            ? "Greateson operates 11 integrated production lines from surface treatment to deep fabrication."
            : "顺佳兴目前有 11 条一体化生产线，覆盖表面处理到深加工。",
        },
      },
      {
        "@type": "Question",
        name: isEn ? "Can factory tours and sample requests be arranged?" : "可以预约验厂和样品吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEn
            ? "Yes, factory tours by appointment and standard sample shipments are both supported."
            : "支持，工厂参观可预约，标准样品可快速寄送。",
        },
      },
    ],
  };

  return (
    <section className="section">
      <JsonLd data={faqSchema} />
      <p className="eyebrow">{isEn ? "Factory" : "工厂实力"}</p>
      <h1 className="mt-3 text-4xl">
        {isEn ? "11 Integrated Production Lines" : "11 条一体化生产线"}
      </h1>
      <p className="mt-5 max-w-3xl text-zinc-300">
        {isEn
          ? "Our manufacturing system combines surface treatment, composite panel production and precision fabrication. This integrated setup shortens lead times while maintaining stable quality for global projects."
          : "工厂覆盖表面处理、复合板制造与深加工工艺，通过一体化生产组织缩短交期，并保持跨批次稳定质量。"}
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {lines.map((line) => (
          <article key={line.en} className="card overflow-hidden">
            <Image src={line.image} alt={line[locale]} width={900} height={600} className="h-40 w-full object-cover" />
            <div className="p-4 text-sm text-zinc-200">{line[locale]}</div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href={`/${locale}/products`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "View product systems" : "查看产品体系"}
        </Link>
        <Link href={`/${locale}/cases`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "View engineering cases" : "查看工程案例"}
        </Link>
        <Link href={`/${locale}/quote`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Request production quote" : "获取生产报价"}
        </Link>
      </div>

    </section>
  );
}
