import type { MetadataRoute } from "next";

import { applications, caseStudies, products } from "@/lib/site-data";

const base = "https://greateson.com";
const locales = ["en", "zh"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/factory",
    "/products",
    "/applications",
    "/cases",
    "/faq",
    "/contact",
    "/quote",
    "/guides",
    "/blog",
    "/why-us",
    "/certifications",
  ];

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticPaths.forEach((path) => {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      });
    });

    products.forEach((item) => {
      entries.push({
        url: `${base}/${locale}/products/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });

    applications.forEach((item) => {
      entries.push({
        url: `${base}/${locale}/applications/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });

    caseStudies.forEach((item) => {
      entries.push({
        url: `${base}/${locale}/cases/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return entries;
}
