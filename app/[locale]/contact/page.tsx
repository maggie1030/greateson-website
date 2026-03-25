import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/site-data";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/contact",
    title: locale === "en" ? "Contact Greateson" : "联系顺佳兴",
    description:
      locale === "en"
        ? "Contact Greateson sales team for stainless steel decorative panels, custom metal fabrication and project consultation."
        : "联系顺佳兴销售团队，获取不锈钢装饰板与定制金属工程咨询。",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Contact" : "联系我们"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Talk to Our Sales & Engineering Team" : "联系销售与工程团队"}</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="card p-6 text-sm text-zinc-200">
          <p><strong>{isEn ? "Phone" : "电话"}:</strong> {company.phone}</p>
          <p className="mt-3"><strong>{isEn ? "WhatsApp" : "即时通讯"}:</strong> {company.whatsapp}</p>
          <p className="mt-3"><strong>{isEn ? "Email" : "邮箱"}:</strong> {company.email}</p>
          <p className="mt-3"><strong>{isEn ? "Headquarters" : "总部"}:</strong> {company.headquarters[locale]}</p>
        </article>

        <form className="card grid gap-4 p-6">
          <input className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm" placeholder={isEn ? "Your name" : "您的称呼"} />
          <input className="rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm" placeholder={isEn ? "Email / WhatsApp" : "邮箱 / 即时通讯"} />
          <textarea className="min-h-32 rounded-lg border border-[#31443c] bg-[#0f1714] px-4 py-3 text-sm" placeholder={isEn ? "Project details" : "项目需求描述"} />
          <button className="rounded-full bg-[#d9bb85] px-6 py-3 text-sm font-medium text-[#1b1610]" type="button">
            {isEn ? "Submit Inquiry" : "提交咨询"}
          </button>
        </form>
      </div>
    </section>
  );
}
