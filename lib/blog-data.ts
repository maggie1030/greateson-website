import type { Locale } from "./i18n";

import { userSourceGuidePosts } from "./user-source-guide-posts";

type LocalizedText = Record<Locale, string>;

export type BlogPost = {
  slug: string;
  category: "blog" | "guide";
  title: LocalizedText;
  excerpt: LocalizedText;
  publishedAt: string;
  readTime: LocalizedText;
  keywords: Record<Locale, string[]>;
  sections: {
    heading: LocalizedText;
    paragraphs: LocalizedText[];
  }[];
  faq: {
    q: LocalizedText;
    a: LocalizedText;
  }[];
};

export const blogPosts: BlogPost[] = [
  ...userSourceGuidePosts,

];

export function blogPostBySlug(slug: string) {
  return blogPosts.find((item) => item.slug === slug);
}
