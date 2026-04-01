import { blogPosts, type BlogPost } from "./blog-data";
import { blogArticles } from "./blog-articles-data";
import { sanityClient } from "./sanity-client";

export type ArticleCategory = "blog" | "guide";

const hiddenArticleSlugs = new Set(["why-water-ripple-stainless-steel-is-everywhere-2026"]);

type RawSanityArticle = {
  slug?: { current?: string };
  category?: ArticleCategory;
  titleZh?: string;
  titleEn?: string;
  excerptZh?: string;
  excerptEn?: string;
  publishedAt?: string;
  readTimeZh?: string;
  readTimeEn?: string;
  keywordsZh?: string[];
  keywordsEn?: string[];
  sectionsZh?: { heading?: string; paragraphs?: string[] }[];
  sectionsEn?: { heading?: string; paragraphs?: string[] }[];
  faqZh?: { q?: string; a?: string }[];
  faqEn?: { q?: string; a?: string }[];
};

const fallbackGuideTitles = {
  en: [
    "How to Select Stainless Steel Panels for Hotel Projects",
    "Surface Finish Comparison: Mirror vs Hairline vs Etched",
    "Honeycomb Panels vs Solid Sheet: Weight and Structure",
    "Installation Guide for Stainless Steel Wall Cladding",
  ],
  zh: [
    "酒店项目如何选择不锈钢装饰板",
    "镜面、拉丝、蚀刻工艺对比指南",
    "蜂窝板与实心板重量和结构对比",
    "不锈钢墙面装饰安装指南",
  ],
};

const fallbackGuides: BlogPost[] = fallbackGuideTitles.en.map((enTitle, index) => {
  const zhTitle = fallbackGuideTitles.zh[index];
  const slug = `guide-${index + 1}`;
  return {
    slug,
    category: "guide",
    title: { en: enTitle, zh: zhTitle },
    excerpt: {
      en: "This guide is being migrated to CMS and will be updated with full technical details.",
      zh: "该指南正在迁移到 CMS，后续将补充完整技术细节内容。",
    },
    publishedAt: "2026-03-26",
    readTime: { en: "5 min read", zh: "5 分钟阅读" },
    keywords: { en: [enTitle], zh: [zhTitle] },
    sections: [],
    faq: [],
  };
});

const fallbackArticles: BlogPost[] = [...blogPosts, ...blogArticles, ...fallbackGuides];

function normalizeArticle(item: RawSanityArticle): BlogPost | null {
  const slug = item.slug?.current?.trim();
  if (!slug) return null;

  const category = item.category === "guide" ? "guide" : "blog";
  const titleZh = (item.titleZh ?? "").trim();
  const titleEn = (item.titleEn ?? "").trim();
  if (!titleZh || !titleEn) return null;

  const excerptZh = (item.excerptZh ?? "").trim() || titleZh;
  const excerptEn = (item.excerptEn ?? "").trim() || titleEn;
  const publishedAt = item.publishedAt?.slice(0, 10) || "2026-03-26";
  const readTimeZh = (item.readTimeZh ?? "").trim() || "5 分钟阅读";
  const readTimeEn = (item.readTimeEn ?? "").trim() || "5 min read";

  const sectionsZh = Array.isArray(item.sectionsZh) ? item.sectionsZh : [];
  const sectionsEn = Array.isArray(item.sectionsEn) ? item.sectionsEn : [];
  const maxSectionLength = Math.max(sectionsZh.length, sectionsEn.length);
  const sections = Array.from({ length: maxSectionLength })
    .map((_, i) => {
      const zh = sectionsZh[i];
      const en = sectionsEn[i];
      const zhHeading = (zh?.heading ?? "").trim();
      const enHeading = (en?.heading ?? "").trim();
      if (!zhHeading || !enHeading) return null;

      const zhParagraphs = Array.isArray(zh?.paragraphs) ? zh.paragraphs.filter(Boolean) : [];
      const enParagraphs = Array.isArray(en?.paragraphs) ? en.paragraphs.filter(Boolean) : [];
      const maxParagraphLength = Math.max(zhParagraphs.length, enParagraphs.length);
      const paragraphs = Array.from({ length: maxParagraphLength })
        .map((__, j) => {
          const zhText = (zhParagraphs[j] ?? "").trim();
          const enText = (enParagraphs[j] ?? "").trim();
          if (!zhText || !enText) return null;
          return { zh: zhText, en: enText };
        })
        .filter((entry): entry is { zh: string; en: string } => Boolean(entry));

      return {
        heading: { zh: zhHeading, en: enHeading },
        paragraphs,
      };
    })
    .filter(
      (section): section is BlogPost["sections"][number] =>
        Boolean(section && section.paragraphs.length > 0),
    );

  const faqZh = Array.isArray(item.faqZh) ? item.faqZh : [];
  const faqEn = Array.isArray(item.faqEn) ? item.faqEn : [];
  const maxFaqLength = Math.max(faqZh.length, faqEn.length);
  const faq = Array.from({ length: maxFaqLength })
    .map((_, i) => {
      const zhQ = (faqZh[i]?.q ?? "").trim();
      const zhA = (faqZh[i]?.a ?? "").trim();
      const enQ = (faqEn[i]?.q ?? "").trim();
      const enA = (faqEn[i]?.a ?? "").trim();
      if (!zhQ || !zhA || !enQ || !enA) return null;
      return {
        q: { zh: zhQ, en: enQ },
        a: { zh: zhA, en: enA },
      };
    })
    .filter((entry): entry is BlogPost["faq"][number] => Boolean(entry));

  return {
    slug,
    category,
    title: { zh: titleZh, en: titleEn },
    excerpt: { zh: excerptZh, en: excerptEn },
    publishedAt,
    readTime: { zh: readTimeZh, en: readTimeEn },
    keywords: {
      zh: Array.isArray(item.keywordsZh) ? item.keywordsZh.filter(Boolean) : [titleZh],
      en: Array.isArray(item.keywordsEn) ? item.keywordsEn.filter(Boolean) : [titleEn],
    },
    sections,
    faq,
  };
}

async function fetchSanityArticles(): Promise<BlogPost[]> {
  if (!sanityClient) return [];
  const query = `*[_type == "article"] | order(publishedAt desc){
    slug,
    category,
    titleZh,
    titleEn,
    excerptZh,
    excerptEn,
    publishedAt,
    readTimeZh,
    readTimeEn,
    keywordsZh,
    keywordsEn,
    sectionsZh,
    sectionsEn,
    faqZh,
    faqEn
  }`;

  try {
    const raw = await sanityClient.fetch<RawSanityArticle[]>(query);
    return raw.map(normalizeArticle).filter((item): item is BlogPost => Boolean(item));
  } catch {
    return [];
  }
}

export async function getArticlesByCategory(category: ArticleCategory) {
  const sanityArticles = await fetchSanityArticles();
  const sanitySlugSet = new Set(sanityArticles.map((a) => a.slug));
  const localNotInSanity = fallbackArticles.filter((a) => !sanitySlugSet.has(a.slug));
  const merged = [...sanityArticles, ...localNotInSanity].filter((item) => !hiddenArticleSlugs.has(item.slug));
  return merged.filter((item) => item.category === category);
}

export async function getArticleBySlug(slug: string, category: ArticleCategory) {
  const list = await getArticlesByCategory(category);
  return list.find((item) => item.slug === slug);
}

