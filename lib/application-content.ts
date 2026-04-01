import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

import type { Application } from "./site-data";
import type { Locale } from "./i18n";

type Narrative = {
  description: string;
  typicalProducts: string;
  benefits: string;
  caseExample: string;
  faq: string;
};

function fallbackFaq(locale: Locale) {
  if (locale === "zh") {
    return "Q：该场景支持按项目定制吗？A：支持。可根据图纸、尺寸、工艺和预算提供定制化方案。";
  }
  return "Q: Does this application support project customization? A: Yes. We provide custom solutions based on drawings, size, finishes, and budget.";
}

const markdownNameMap: Record<string, string[]> = {
  "architectural-facade": ["Architectural facade.md", "architectural-facade.md"],
  "ceiling-panels": ["Ceiling panels.md", "ceiling-panels.md"],
  "commercial-interiors": ["Commercial interiors.md", "commercial-interiors.md"],
  "office-buildings": ["Office buildings.md", "office-buildings.md"],
  "restaurant-interiors": ["Restaurant interiors.md", "restaurant-interiors.md"],
  "shopping-malls": ["Shopping malls.md", "shopping-malls.md"],
  "elevator-panels": ["elevator-panels.md", "Elevator panels.md"],
  "hotel-decoration": ["hotel-decoration.md", "Hotel decoration.md"],
  "luxury-retail": ["luxury-retail.md", "Luxury retail.md"],
  "wall-cladding": ["Wall cladding.md", "wall-cladding.md"],
};

const imageFolderNameMap: Record<string, string[]> = {
  "architectural-facade": ["Architectural facade", "architectural-facade", "Architectural Facade"],
  "ceiling-panels": ["Ceiling panels", "ceiling-panels", "Ceiling Panels"],
  "commercial-interiors": ["Commercial interiors", "commercial-interiors", "Commercial Interiors"],
  "office-buildings": ["Office buildings", "office-buildings", "Office Buildings"],
  "restaurant-interiors": ["Restaurant interiors", "restaurant-interiors", "Restaurant Interiors"],
  "shopping-malls": ["Shopping malls", "shopping-malls", "Shopping Malls"],
  "elevator-panels": ["elevator-panels", "Elevator panels", "Elevator Panels"],
  "hotel-decoration": ["hotel-decoration", "Hotel decoration", "Hotel Decoration"],
  "luxury-retail": ["luxury-retail", "Luxury retail", "Luxury Retail"],
  "wall-cladding": ["Wall cladding", "wall-cladding", "Wall Cladding"],
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function isImageFile(name: string) {
  return IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase());
}

async function pathExists(filePath: string) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function parseMarkdownTable(raw: string, locale: Locale): Narrative | null {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (!lines.length) return null;

  const rowMap: Record<string, { zh: string; en: string }> = {};

  for (const line of lines) {
    const parts = line.split("\t");
    if (parts.length < 3) continue;
    const key = parts[0].trim();
    const zh = parts[1].trim();
    const en = parts[2].trim();
    if (!key || (!zh && !en)) continue;
    rowMap[key] = { zh, en };
  }

  if (!Object.keys(rowMap).length) return null;

  const pick = (key: string) => rowMap[key]?.[locale] ?? "";

  return {
    description: pick("Description"),
    typicalProducts: pick("Typical Products"),
    benefits: pick("Benefits"),
    caseExample: pick("Case Example"),
    faq: pick("FAQ"),
  };
}

export async function getApplicationNarrative(
  slug: string,
  locale: Locale,
  fallbackData: Application,
): Promise<Narrative> {
  const contentDir = path.join(process.cwd(), "content", "applications");
  const fileNames = markdownNameMap[slug] ?? [`${slug}.md`];

  for (const fileName of fileNames) {
    const filePath = path.join(contentDir, fileName);
    if (!(await pathExists(filePath))) continue;
    const raw = (await readFile(filePath, "utf8")).trim();
    if (!raw) continue;
    const parsed = parseMarkdownTable(raw, locale);
    if (!parsed) continue;
    return {
      description: parsed.description || fallbackData.description[locale],
      typicalProducts: parsed.typicalProducts || fallbackData.typicalProducts[locale],
      benefits: parsed.benefits || fallbackData.benefits[locale],
      caseExample: parsed.caseExample || fallbackData.caseExample[locale],
      faq: parsed.faq || fallbackFaq(locale),
    };
  }

  return {
    description: fallbackData.description[locale],
    typicalProducts: fallbackData.typicalProducts[locale],
    benefits: fallbackData.benefits[locale],
    caseExample: fallbackData.caseExample[locale],
    faq: fallbackFaq(locale),
  };
}

export async function getApplicationCarouselImages(slug: string, fallbackImage: string): Promise<string[]> {
  const imagesRoot = path.join(process.cwd(), "public", "images", "applications");
  const folderCandidates = imageFolderNameMap[slug] ?? [slug];

  for (const folderName of folderCandidates) {
    const folderPath = path.join(imagesRoot, folderName);
    if (!(await pathExists(folderPath))) continue;
    const files = await readdir(folderPath);
    const imageFiles = files.filter(isImageFile).sort((a, b) => a.localeCompare(b, "en"));
    if (!imageFiles.length) continue;
    return imageFiles.map((fileName) => `/images/applications/${encodeURIComponent(folderName)}/${encodeURIComponent(fileName)}`);
  }

  return [fallbackImage];
}

export async function getApplicationRandomImage(slug: string, fallbackImage: string): Promise<string> {
  const images = await getApplicationCarouselImages(slug, fallbackImage);
  if (!images.length) return fallbackImage;
  const index = Math.floor(Math.random() * images.length);
  return images[index] ?? fallbackImage;
}
