import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

const certImages = [
  "/images/certificates/微信图片_20260318140830_983_55.jpg",
  "/images/certificates/微信图片_20260318140832_984_55.jpg",
  "/images/certificates/微信图片_20260318140833_985_55.jpg",
  "/images/certificates/微信图片_20260318140834_986_55.jpg",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/certifications",
    title: locale === "en" ? "Certifications" : "资质认证",
    description:
      locale === "en"
        ? "View Greateson quality and material certifications used for project qualification and tender support."
        : "查看顺佳兴项目资质、质量与材料认证文件，用于投标与项目报审支持。",
  });
}

export default async function CertificationsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  return (
    <section className="section">
      <p className="eyebrow">{isEn ? "Certifications" : "资质认证"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Quality & Compliance Documents" : "质量与合规文件"}</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {certImages.map((src) => (
          <article key={src} className="card overflow-hidden">
            <Image src={src} alt={isEn ? "Greateson certification document" : "顺佳兴资质证书"} width={1200} height={860} className="h-80 w-full object-cover" />
          </article>
        ))}
      </div>
    </section>
  );
}
