import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";

import type { Locale } from "./i18n";

const contentRoot = path.join(process.cwd(), "content");

type CaseSlug =
  | "beijing-residential-sales-center"
  | "cambodia-luxury-club"
  | "taiyuan-jinmao-mansion"
  | "hefei-luxury-hotel";

const caseFileMap: Record<CaseSlug, string> = {
  "beijing-residential-sales-center": "cases/beijing-residential-sales-center.md",
  "cambodia-luxury-club": "cases/cambodia-luxury-club.md",
  "taiyuan-jinmao-mansion": "cases/taiyuan-jinmao-mansion.md",
  "hefei-luxury-hotel": "cases/hefei-luxury-hotel.md",
};

const productFileMap: Record<string, string> = {
  "stainless-steel-screen": "products/stainless-steel-screen.md",
  "stainless-steel-decorative-sheet": "products/stainless-steel-decorative-sheet.md",
  "stainless-steel-honeycomb-panel": "products/stainless-steel-honeycomb-panel.md",
};

export async function readRawContent(relativePath: string): Promise<string> {
  const fullPath = path.join(contentRoot, relativePath);
  return readFile(fullPath, "utf8");
}

export async function renderMarkdown(relativePath: string): Promise<string> {
  const markdown = await readRawContent(relativePath);
  return marked.parse(markdown, { gfm: true }) as string;
}

export async function renderCaseMarkdown(slug: string): Promise<string | null> {
  const relativePath = caseFileMap[slug as CaseSlug];
  if (!relativePath) return null;
  return renderMarkdown(relativePath);
}

export async function renderProductMarkdown(slug: string): Promise<string | null> {
  const relativePath = productFileMap[slug];
  if (!relativePath) return null;
  return renderMarkdown(relativePath);
}

export async function renderFactoryMarkdown(): Promise<string> {
  return renderMarkdown("manufacturing-capabilities.md");
}

export async function renderCompanyMarkdown(): Promise<string> {
  return renderMarkdown("company-profile.md");
}

export async function renderWhyUsMarkdown(): Promise<string> {
  return renderMarkdown("why-us.md");
}

export async function renderFaqMarkdown(): Promise<string> {
  return renderMarkdown("faq.md");
}

export type FaqEntry = {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
};

export async function readFaqEntriesFromMarkdown(): Promise<FaqEntry[]> {
  const raw = await readRawContent("faq.md");
  const blocks = raw
    .split("---")
    .map((item) => item.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
      const questionLine = lines.find((line) => /^\d|^1️⃣|^2️⃣|^3️⃣|^4️⃣|^5️⃣|^6️⃣|^7️⃣|^8️⃣|^9️⃣|^🔟/.test(line));
      const answerIdx = lines.findIndex((line) => /^Answer/.test(line));
      if (!questionLine || answerIdx < 0) return null;

      const question = questionLine.replace(/^\S+\s*/, "").trim();
      const answer = lines.slice(answerIdx + 1).join(" ");
      if (!question || !answer) return null;

      return {
        question: { zh: question, en: question },
        answer: { zh: answer, en: answer },
      } satisfies FaqEntry;
    })
    .filter((item): item is FaqEntry => Boolean(item))
    .slice(0, 12);
}
