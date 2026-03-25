import type { Metadata } from "next";

import type { Locale } from "./i18n";
import { company } from "./site-data";

const siteUrl = "https://greateson.com";

const localeCode: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
};

export function buildMetadata({
  locale,
  path,
  title,
  description,
  keywords,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const canonical = `${siteUrl}/${locale}${path === "/" ? "" : path}`;
  const languages = {
    "en-US": `${siteUrl}/en${path === "/" ? "" : path}`,
    "zh-CN": `${siteUrl}/zh${path === "/" ? "" : path}`,
  };

  return {
    title,
    description,
    keywords,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: localeCode[locale],
      type: "website",
      siteName: company.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.zhName,
    url: company.website,
    description:
      locale === "en"
        ? "Leading manufacturer of custom stainless steel decorative panels, screens and honeycomb systems."
        : "领先的不锈钢装饰板、屏风和蜂窝板定制制造商。",
    foundingDate: company.foundedYear,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "sales",
      areaServed: ["Middle East", "Europe", "Southeast Asia"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Foshan",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
  };
}
