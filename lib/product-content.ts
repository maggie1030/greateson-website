import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

import type { Locale } from "./i18n";

type Localized = { zh: string; en: string };

export type ProductOverviewRow = {
  field: string;
  value: Localized;
};

export type ProductSeries = {
  code: string;
  title: Localized;
  description: Localized;
};

export type ProductDocument = {
  overview: ProductOverviewRow[];
  series: ProductSeries[];
};

const productDocNameMap: Record<string, string[]> = {
  "stainless-steel-screen": ["stainless-steel-products.md", "stainless-steel-screen.md"],
  "stainless-steel-decorative-sheet": ["stainless-steel-decorative-sheet.md"],
  "stainless-steel-honeycomb-panel": ["stainless-steel-honeycomb-panel.md"],
};

const productFolderNameMap: Record<string, string[]> = {
  "stainless-steel-screen": ["stainless-steel-products", "stainless-steel-screen"],
  "stainless-steel-decorative-sheet": ["stainless-steel-decorative-sheet"],
  "stainless-steel-honeycomb-panel": ["stainless-steel-honeycomb-panel"],
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".JPG", ".PNG", ".JPEG"]);

function normalize(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function sanitizeFolderName(text: string) {
  return text
    .replace(/[（）()]/g, "")
    .replace(/[\\/]/g, "-")
    .trim();
}

async function pathExists(filePath: string) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function parseProductMarkdown(raw: string): ProductDocument {
  const lines = raw.split(/\r?\n/);
  const sectionHeaderRegex = /^\d+\.\d+\.\d+\.\d+\s+/;

  const firstSectionIndex = lines.findIndex((line) => sectionHeaderRegex.test(line.trim()));
  const overviewLines = (firstSectionIndex > 0 ? lines.slice(0, firstSectionIndex) : lines)
    .map((line) => line.trim())
    .filter(Boolean);

  const overview: ProductOverviewRow[] = [];
  for (const line of overviewLines) {
    const parts = line.split("\t");
    if (parts.length < 3) continue;
    const field = normalize(parts[0]);
    if (!field || field.includes("字段")) continue;
    const zh = normalize(parts[1]);
    const en = normalize(parts[2]);
    if (!zh && !en) continue;
    overview.push({ field, value: { zh, en } });
  }

  const series: ProductSeries[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!sectionHeaderRegex.test(line)) continue;

    const [code, ...restParts] = line.split(/\s+/);
    const rest = restParts.join(" ").trim();
    const match = rest.match(/^(.*?)（(.*?)）$/);
    const zhTitle = normalize(match?.[1] ?? rest);
    const enTitle = normalize(match?.[2] ?? rest);

    let zhDesc = "";
    let enDesc = "";
    let j = i + 1;
    while (j < lines.length && !sectionHeaderRegex.test(lines[j].trim())) {
      const current = lines[j].trim();
      if (current.startsWith("中文：")) zhDesc = normalize(current.replace("中文：", ""));
      if (current.startsWith("English:")) enDesc = normalize(current.replace("English:", ""));
      j += 1;
    }

    series.push({
      code: normalize(code),
      title: { zh: zhTitle, en: enTitle },
      description: { zh: zhDesc, en: enDesc },
    });
  }

  return { overview, series };
}

export async function getProductDocument(slug: string): Promise<ProductDocument | null> {
  const workspaceRoot = path.resolve(process.cwd(), "..");
  const fileCandidates = productDocNameMap[slug] ?? [`${slug}.md`];
  const dirCandidates = [path.join(workspaceRoot, "products"), path.join(process.cwd(), "content", "products")];

  for (const dir of dirCandidates) {
    for (const fileName of fileCandidates) {
      const fullPath = path.join(dir, fileName);
      if (!(await pathExists(fullPath))) continue;
      const raw = (await readFile(fullPath, "utf8")).trim();
      if (!raw) continue;
      return parseProductMarkdown(raw);
    }
  }

  return null;
}

export function localizeFieldLabel(field: string, locale: Locale) {
  if (locale === "en") return field;
  const map: Record<string, string> = {
    "Product Name": "产品名称",
    "Product Category": "产品类别",
    Material: "材质",
    Thickness: "厚度",
    Width: "宽度",
    Length: "长度",
    "Surface Finish": "表面工艺",
    "Color Options": "颜色选项",
    Application: "应用场景",
    MOQ: "起订量",
    "Customization Options": "定制选项",
    "Production Time": "生产周期",
    Packaging: "包装",
    "Shipping Method": "运输方式",
    Certification: "认证",
    Advantages: "产品优势",
    FAQ: "常见问答",
  };
  return map[field] ?? field;
}

export async function getProductSeriesImages(
  slug: string,
  series: ProductSeries,
  fallbackImage: string,
): Promise<string[]> {
  const workspaceRoot = path.resolve(process.cwd(), "..");
  const picturesRoot = path.join(workspaceRoot, "pictures", "products");
  const productFolders = productFolderNameMap[slug] ?? [slug];

  const seriesFolderCandidates = Array.from(
    new Set([
      sanitizeFolderName(series.title.en),
      sanitizeFolderName(series.title.zh),
      sanitizeFolderName(`${series.code}-${series.title.en}`),
    ]),
  ).filter(Boolean);

  for (const productFolder of productFolders) {
    for (const seriesFolder of seriesFolderCandidates) {
      const folderPath = path.join(picturesRoot, productFolder, seriesFolder);
      if (!(await pathExists(folderPath))) continue;
      const files = await readdir(folderPath);
      const imageFiles = files
        .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name)))
        .sort((a, b) => a.localeCompare(b, "en"));
      if (!imageFiles.length) continue;
      return imageFiles.map(
        (file) =>
          `/api/product-media?product=${encodeURIComponent(productFolder)}&series=${encodeURIComponent(
            seriesFolder,
          )}&file=${encodeURIComponent(file)}`,
      );
    }
  }

  return [fallbackImage];
}
