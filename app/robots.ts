import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://greateson.com/sitemap.xml",
    host: "https://greateson.com",
  };
}
