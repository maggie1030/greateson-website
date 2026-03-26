import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { isLocale } from "@/lib/i18n";
import { buildMetadata, organizationSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

type ProfileRow = {
  field: string;
  zhLabel: string;
  value: string;
};

type WhyUsRow = {
  key: string;
  zhTitle: string;
  enContent: string;
};

async function readWorkspaceFile(relativePath: string) {
  const workspaceRoot = path.resolve(process.cwd(), "..");
  const filePath = path.join(workspaceRoot, relativePath);
  return readFile(filePath, "utf8");
}

async function readCompanyProfile() {
  const raw = await readWorkspaceFile("company-profile.md");
  const lines = raw.split(/\r?\n/).map((line) => line.trim());

  const englishStart = lines.findIndex((line) => line.startsWith("Guangdong Shun Jiaxing Stainless Steel Co., Ltd."));
  const tableStart = lines.findIndex((line) => line.startsWith("字段\t说明\t示例"));

  const zhIntro = lines
    .slice(0, englishStart > -1 ? englishStart : tableStart > -1 ? tableStart : lines.length)
    .filter((line) => line && !line.includes("\t"));
  const enIntro = lines
    .slice(englishStart > -1 ? englishStart : 0, tableStart > -1 ? tableStart : lines.length)
    .filter((line) => line && !line.includes("\t"));

  const rows: ProfileRow[] = lines
    .slice(tableStart > -1 ? tableStart + 1 : 0)
    .filter((line) => line.includes("\t"))
    .map((line) => {
      const parts = line.split("\t");
      return {
        field: (parts[0] ?? "").trim(),
        zhLabel: (parts[1] ?? "").trim(),
        value: (parts[2] ?? "").trim(),
      };
    })
    .filter((row) => row.field && row.zhLabel && row.value && row.field !== "字段");

  return { zhIntro, enIntro, rows };
}

async function readWhyUsRows() {
  const raw = await readWorkspaceFile("why-us.md");
  const lines = raw.split(/\r?\n/).map((line) => line.trim());
  const rows: WhyUsRow[] = [];
  let current: WhyUsRow | null = null;

  const normalizeContent = (text: string) => {
    const value = text.trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      return value.slice(1, -1).trim();
    }
    return value.replace(/^"/, "").replace(/"$/, "").trim();
  };

  for (const line of lines) {
    if (!line) continue;
    const parts = line.split("\t");
    if (parts.length >= 3) {
      if (current) {
        current.enContent = normalizeContent(current.enContent);
        rows.push(current);
      }
      current = {
        key: (parts[0] ?? "").trim(),
        zhTitle: (parts[1] ?? "").trim(),
        enContent: parts.slice(2).join("\t").trim(),
      };
      continue;
    }
    if (current) {
      current.enContent = `${current.enContent}\n${line}`.trim();
    }
  }

  if (current) {
    current.enContent = normalizeContent(current.enContent);
    rows.push(current);
  }

  return rows.filter((row) => row.key && row.zhTitle && row.enContent);
}

function zhProfileValue(field: string, value: string) {
  const map: Record<string, string> = {
    "Greateson Stainless Steel": "顺佳兴不锈钢",
    "Manufacturer & Trading Company": "制造商与贸易一体化企业",
    "Foshan, Guangdong, China": "中国广东佛山",
    "Nanhai District, Foshan": "佛山市南海区",
    "Middle East, Europe, Southeast Asia": "中东、欧洲、东南亚",
    "OEM / ODM / Custom Manufacturing": "来图来样与定制制造",
  };
  if (map[value]) return map[value];
  return value;
}

function zhWhyUsContent(key: string, fallback: string) {
  const map: Record<string, string> = {
    "Core Advantages":
      "1. 从不锈钢原板到工程成品的一站式服务；2. 自有工厂、设备与团队全流程控制；3. 覆盖装饰板、工程制品与蜂窝板的完整产品线；4. 10,000㎡生产基地保障稳定产能与质量。",
    "Manufacturing Strength":
      "拥有 10,000㎡自有工厂，配套完整设备与熟练团队，覆盖从板材加工到成品制造的全流程能力。",
    "Customization Capability":
      "可按项目需求进行定制设计与生产，覆盖不锈钢制品（屏风、展示类制品）和装饰板（水波纹、蚀刻、做旧、镜面等工艺）。",
    "Delivery Speed": "一体化生产流程有效缩短交期，关键工序自控，确保工程项目按期交付。",
    "Quality Control": "从原材料到成品出厂执行全流程质检，保证产品性能、外观与批次稳定性。",
    "Export Experience": "具备全球工程项目出口交付经验，熟悉国际贸易标准、包装与出货要求。",
    "Engineering Capability": "专业技术团队提供方案咨询、产品深化与项目落地支持。",
    "After Sales": "建立稳定售后体系，提供质保、技术指导与问题快速响应。",
    "Typical Clients": "服务对象覆盖高端酒店开发商、商业室内设计机构、奢侈零售品牌与建筑工程公司。",
  };
  return map[key] ?? fallback;
}

const lines = [
  { en: "PVD Vacuum Coating Line", zh: "真空镀膜线", image: "/images/factory/pvd-coating-line/图片1.png" },
  { en: "Copper Electroplating Line", zh: "镀铜线", image: "/images/factory/electroplating-line/图片2.png" },
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
  const companyProfile = await readCompanyProfile();
  const whyUsRows = await readWhyUsRows();
  const factoryFaqSchema = {
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
      <JsonLd data={organizationSchema(locale)} />
      <JsonLd data={factoryFaqSchema} />
      <p className="eyebrow">{isEn ? "About" : "关于我们"}</p>
      <h1 className="mt-3 text-4xl">
        {isEn ? "Built in Foshan, Serving Global Decorative Projects" : "立足佛山，服务全球金属装饰工程"}
      </h1>
      <div className="mt-6 max-w-4xl space-y-3 text-zinc-300">
        {(isEn ? companyProfile.enIntro : companyProfile.zhIntro).map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="mt-10">
        <article className="card p-6">
          <h2 className="text-2xl text-[#f0d9ac]">{isEn ? "Company Profile" : "公司概况"}</h2>
          <ul className="mt-4 grid gap-x-10 gap-y-2 text-sm text-zinc-300 md:grid-cols-2">
            {companyProfile.rows.map((row) => (
              <li key={row.field}>
                {isEn ? row.field : row.zhLabel}: {isEn ? row.value : zhProfileValue(row.field, row.value)}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <section id="factory" className="pt-16">
        <p className="eyebrow">{isEn ? "Factory" : "工厂实力"}</p>
        <h2 className="mt-3 text-4xl">
          {isEn ? "11 Integrated Production Lines" : "11 条一体化生产线"}
        </h2>
        <p className="mt-5 max-w-3xl text-zinc-300">
          {isEn
            ? "Our manufacturing system combines surface treatment, composite panel production and precision fabrication. This integrated setup shortens lead times while maintaining stable quality for global projects."
            : "工厂覆盖表面处理、复合板制造与深加工工艺，通过一体化生产组织缩短交期，并保持跨批次稳定质量。"}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {lines.map((line) => (
            <article key={line.en} className="card overflow-hidden">
              <Image src={line.image} alt={line[locale]} width={900} height={600} className="aspect-[3/4] w-full object-cover" />
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

      <section className="pt-16">
        <p className="eyebrow">{isEn ? "Why Us" : "为什么选择我们"}</p>
        <h2 className="mt-3 text-4xl">
          {isEn ? "Why Global Projects Choose Greateson" : "全球工程客户为什么选择顺佳兴"}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {whyUsRows.map((row) => (
            <article key={row.key} className="card p-6">
              <h3 className="text-xl text-[#f5e5c5]">{isEn ? row.key : row.zhTitle}</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-zinc-300">
                {isEn ? row.enContent : zhWhyUsContent(row.key, row.enContent)}
              </p>
            </article>
          ))}
        </div>
      </section>

    </section>
  );
}
