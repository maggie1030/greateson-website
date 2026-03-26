import type { MetadataRoute } from "next";

import { getArticlesByCategory } from "@/lib/articles";
import { applications, caseStudies, products } from "@/lib/site-data";

const base = "https://greateson.com";
const locales = ["en", "zh"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    "",
    "/about",
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

  const blogs = await getArticlesByCategory("blog");
  const guides = await getArticlesByCategory("guide");

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

    blogs.forEach((item) => {
      entries.push({
        url: `${base}/${locale}/blog/${item.slug}`,
        lastModified: new Date(item.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    guides.forEach((item) => {
      entries.push({
        url: `${base}/${locale}/guides/${item.slug}`,
        lastModified: new Date(item.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return entries;
}
