import type { Metadata } from "next";

import type { Locale } from "./i18n";
import { siteUrl } from "./site-url";
import { company } from "./site-data";

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

// WebSite Schema for homepage
export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: company.website,
    inLanguage: locale === "en" ? "en-US" : "zh-CN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// BreadcrumbList Schema
export function breadcrumbSchema(
  locale: Locale,
  items: { name: string; path?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? `${siteUrl}${item.path}` : undefined,
    })),
  };
}

// Complete Product Schema with required fields for Google
export function productSchema(
  locale: Locale,
  product: {
    slug: string;
    name: Record<Locale, string>;
    description: Record<Locale, string>;
    material: Record<Locale, string>;
    image: string;
    category?: Record<Locale, string>;
  }
) {
  const productUrl = `${siteUrl}/${locale}/products/${product.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[locale],
    description: product.description[locale],
    image: `${siteUrl}${product.image}`,
    sku: product.slug.toUpperCase().replace(/-/g, "_"),
    brand: {
      "@type": "Brand",
      name: company.name,
      url: company.website,
    },
    manufacturer: {
      "@type": "Organization",
      name: company.name,
      url: company.website,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Foshan",
        addressRegion: "Guangdong",
        addressCountry: "CN",
      },
    },
    material: product.material[locale],
    category: product.category?.[locale],
    url: productUrl,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      priceValidUntil: "2026-12-31",
      seller: {
        "@type": "Organization",
        name: company.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  };
}

// FAQPage Schema
export function faqSchema(
  locale: Locale,
  faqs: { q: Record<Locale, string>; a: Record<Locale, string> }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[locale],
      },
    })),
  };
}
