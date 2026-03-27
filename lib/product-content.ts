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

const productSeriesDocNameMap: Record<string, Record<string, string>> = {
  "stainless-steel-screen": {
    "3.1.1.1": "Stainless Steel Screen.md",
    "3.1.1.2": "Stainless Steel Display Cabinet.md",
    "3.1.1.3": "Stainless Steel Bar Counter.md",
    "3.1.1.4": "Stainless Steel Sculpture.md",
  },
  "stainless-steel-decorative-sheet": {
    "3.1.2.1": "Stainless Steel PVD Coating.md",
    "3.1.2.2": "Antique Art Metal Series.md",
    "3.1.2.3": "Metal Etching Series.md",
    "3.1.2.4": "Embossed Series.md",
    "3.1.2.5": "Hammered Finish Series.md",
  },
  "stainless-steel-honeycomb-panel": {
    "3.1.3.1": "Flat honeycomb panel.md",
    "3.1.3.2": "Special-shaped honeycomb panel.md",
    "3.1.3.3": "Curved honeycomb panel.md",
    "3.1.3.4": "Water ripple honeycomb panel.md",
  },
};

const productSeriesImageFolderMap: Record<string, Record<string, string[]>> = {
  "stainless-steel-honeycomb-panel": {
    "3.1.3.2": ["Special-shaped honeycomb panel "],
    "3.1.3.3": ["Curved honeycomb panel "],
    "3.1.3.4": ["Water ripple honeycomb panel "],
  },
};

const manualSeriesTranslationMap: Record<
  string,
  {
    zhFromEn?: string;
    enFromZh?: string;
  }
> = {
  "stainless-steel-screen:3.1.1.1": {
    zhFromEn: `什么是不锈钢屏风隔断？
不锈钢屏风隔断是由高等级不锈钢（如 201、304、316）制成的装饰与功能一体化构件。
它广泛用于酒店、别墅、商业空间及高端室内场景，在保持空间通透感的同时实现分区与导视。
屏风可支持激光镂空、PVD 镀色、电镀、仿古做旧等工艺，兼具耐用性与高级装饰效果。

规格参数
- 材质：不锈钢（201 / 304 / 316）
- 厚度：0.5mm - 3mm
- 表面：镜面 / 拉丝 / 发丝纹 / PVD 镀层
- 颜色：金色 / 玫瑰金 / 黑色 / 古铜色 / 可定制
- 工艺：激光切割 / 焊接 / 抛光
- 尺寸：支持定制
- 安装：固定式 / 嵌入式 / 模块化

应用场景
- 酒店大堂装饰
- 别墅室内隔断
- 办公空间分隔
- 商业空间设计
- 餐厅与茶室装饰
- 购物中心陈列区

核心优势
- 耐腐蚀，使用寿命长
- 易清洁，维护成本低
- 高端金属质感强
- 图案与尺寸可深度定制
- 结构稳定，安装可靠
- 可用于室内及室外

制造流程
方案设计与图案深化 -> 激光切割 -> 焊接组装 -> 表面处理（PVD/电镀） -> 抛光精整 -> 质检交付

FAQ
Q: 装饰屏风选哪种材质更合适？
A: 常见推荐 304 不锈钢，在耐腐蚀性与成本之间平衡更好。
Q: 不锈钢屏风可以用于室外吗？
A: 可以，建议优先 316 不锈钢，耐候与抗腐蚀能力更强。
Q: 屏风厚度一般怎么选？
A: 常规建议 0.8mm-2.0mm，具体根据造型复杂度与结构受力确定。
Q: 图案、尺寸和表面可以定制吗？
A: 可以，图案、尺寸、颜色和工艺都支持按项目定制。
Q: 日常怎么维护不锈钢屏风？
A: 使用软布和中性清洁剂定期擦拭即可。`,
  },
  "stainless-steel-screen:3.1.1.2": {
    zhFromEn: `什么是不锈钢展示柜？
不锈钢展示柜是面向高端陈列场景的收纳与展示系统，常用于零售门店、珠宝专柜、精品展厅及商业空间。
其结构稳定、耐腐蚀、可定制化程度高，能够兼顾展示功能与高级视觉呈现。

规格参数
- 材质：不锈钢（201 / 304 / 316）
- 结构：焊接式 / 模块化
- 表面：镜面 / 拉丝 / 发丝纹 / PVD 镀层
- 玻璃：钢化玻璃 / 夹胶玻璃
- 厚度：钢材 0.5mm - 3mm；玻璃 6mm - 12mm
- 颜色：金色 / 玫瑰金 / 黑色 / 古铜色 / 可定制
- 灯光：LED 灯带 / 射灯（可选）
- 尺寸：支持定制
- 锁具：机械锁 / 智能锁（可选）

应用场景
- 珠宝展示柜
- 零售门店陈列柜
- 奢侈品精品店展示
- 博物馆与展览展示
- 商场专柜
- 化妆品与腕表配饰展示

核心优势
- 外观高级，表面质感统一
- 结构强度高，耐用性好
- 防锈抗腐蚀，寿命长
- 尺寸、结构、灯光可定制
- 易清洁、维护便捷
- 可与玻璃、木饰面、灯光系统灵活组合

制造流程
方案与结构设计 -> 不锈钢开料加工 -> 焊接与框架组装 -> 表面处理（PVD/拉丝/抛光） -> 玻璃安装 -> 灯光电路集成 -> 总装质检

FAQ
Q: 展示柜用什么材质更稳妥？
A: 304 不锈钢更常用，兼顾强度、耐腐蚀与高级外观。
Q: 展示柜可以按品牌形象定制吗？
A: 可以，尺寸、结构、颜色、玻璃与灯光都支持定制。
Q: 展示柜一般配什么玻璃？
A: 常用钢化玻璃，安全性与强度更好。
Q: 可以加灯光系统吗？
A: 可以，支持 LED 灯带或射灯，突出陈列效果。
Q: 适合高端零售场景吗？
A: 适合，广泛用于珠宝、奢侈品与精品商业空间。`,
  },
  "stainless-steel-screen:3.1.1.3": {
    zhFromEn: `什么是不锈钢吧台？
不锈钢吧台是用于酒吧、餐饮、酒店及高端室内空间的功能型台面系统，兼具结构强度与装饰表现。
可支持异形、弧形、一体化设计，并可集成灯光与多材质台面，适用于商用与家用场景。

规格参数
- 材质：不锈钢（201 / 304 / 316）
- 结构：框架+面板 / 一体化结构
- 表面：镜面 / 拉丝 / 发丝纹 / PVD 镀层
- 颜色：金色 / 玫瑰金 / 黑色 / 古铜色 / 可定制
- 台面：不锈钢 / 石材 / 木饰面组合
- 厚度：0.8mm - 3mm
- 尺寸：支持定制
- 灯光：LED 灯带 / 氛围灯（可选）
- 安装：固定式 / 模块化

应用场景
- 酒吧与夜店吧台
- 餐厅服务台
- 咖啡店吧台
- 酒店大堂吧
- 家庭小型吧台
- 商业接待台

核心优势
- 结构稳固，耐用性强
- 防潮耐腐蚀，适应高频使用
- 易清洁，卫生维护简单
- 外观现代，装饰效果突出
- 造型与材料可深度定制
- 与灯光与装饰面板兼容性高

制造流程
布局与样式设计 -> 材料切割成型 -> 框架焊接与结构组装 -> 表面处理（PVD/拉丝/抛光） -> 台面安装 -> 灯光与电路集成 -> 终检打包

FAQ
Q: 吧台用哪种不锈钢更合适？
A: 常见推荐 304，不仅耐腐蚀，也更利于清洁维护。
Q: 可以做异形或弧形吧台吗？
A: 可以，支持异形、弧形和一体化结构定制。
Q: 室外吧台可以用不锈钢吗？
A: 可以，室外建议优先 316 不锈钢。
Q: 台面可以和石材或木饰面组合吗？
A: 可以，可按设计需求做复合台面方案。
Q: 后期维护是否复杂？
A: 不复杂，常规清洁即可，维护成本较低。`,
  },
  "stainless-steel-screen:3.1.1.4": {
    zhFromEn: `什么是不锈钢雕塑？
不锈钢雕塑是以高等级不锈钢为基材的艺术与建筑装置，常用于公共空间、商业地标与景观场景。
它将艺术造型与工程制造结合，具备高观赏性、耐候性与结构稳定性。

规格参数
- 材质：不锈钢（201 / 304 / 316）
- 表面：镜面 / 拉丝 / 哑光 / PVD 镀层
- 颜色：银色 / 金色 / 玫瑰金 / 黑色 / 可定制
- 厚度：1mm - 5mm（按结构设计）
- 结构：中空 / 实心 / 内部钢骨架
- 尺寸：支持全定制
- 安装：固定式 / 预埋式 / 室外基础安装
- 环境：可用于室内与室外

应用场景
- 城市公共艺术装置
- 园林与景观雕塑
- 酒店与度假空间装饰
- 商场中庭雕塑
- 别墅庭院雕塑
- 企业地标雕塑
- 展陈与活动装置

核心优势
- 视觉冲击力强，现代感突出
- 耐腐蚀，适配户外环境
- 造型与尺度可高度定制
- 使用寿命长，维护成本低
- 反射金属表面增强空间层次
- 兼具艺术表达与工程精度

制造流程
概念方案与3D建模 -> 结构受力分析 -> 材料切割与成型 -> 焊接与骨架制作 -> 表面处理（镜面/拉丝/PVD） -> 总装精修 -> 现场安装固定

FAQ
Q: 户外雕塑建议选什么材质？
A: 常见推荐 304 或 316，不锈钢耐候性更好。
Q: 雕塑可以完全按方案定制吗？
A: 可以，尺寸、造型、结构和表面工艺都支持定制。
Q: 不锈钢雕塑寿命大概多久？
A: 正常维护下可长期使用，户外也能保持稳定表现。
Q: 常见表面工艺有哪些？
A: 常见有镜面、拉丝、哑光及 PVD 镀色等。
Q: 适合做公共艺术和地标装置吗？
A: 适合，已广泛用于城市公共空间与商业地标项目。`,
  },
  "stainless-steel-honeycomb-panel:3.1.3.1": {
    enFromZh: `Core Introduction
Flat honeycomb panels are standard composite panels made of stainless steel face sheet + aluminum honeycomb core + back panel.
They feature excellent surface flatness, light weight, and high rigidity, making them one of the most widely used honeycomb panel types for large wall, ceiling, and facade systems.

Color System
- Mirror / Brushed / Sandblasted
- Titanium Gold / Champagne Gold / Rose Gold / Black Titanium
- Optional combinations: Etching / Electroplating / Anti-fingerprint

Process Advantages
- Very high flatness, suitable for large-area installation
- Lightweight with stable structure
- Strong anti-deformation performance
- Easy installation via hanging or fixing systems
- Supports large-size visual effect with fewer joints

Technical Parameters
- Structure: Stainless steel face sheet + aluminum honeycomb core + back panel
- Common grades: 201 / 304 / 316
- Surface treatment is completed before panel lamination
- Size can be customized according to project drawings

Applications
- Exterior cladding
- Ceilings
- Feature walls
- Commercial interior decoration`,
  },
  "stainless-steel-honeycomb-panel:3.1.3.2": {
    enFromZh: `Core Introduction
Special-shaped honeycomb panels are developed from standard honeycomb structures and manufactured into non-standard geometries through cutting, assembly, and bending to match complex space design requirements.

Color System
Same as flat honeycomb panels (all surface treatment options supported).

Process Advantages
- Enables complex forms (curves, joints, and non-standard structures)
- Ideal for high-end custom projects
- High compatibility with architectural structures
- Can achieve seamless design effects

Technical Parameters
- Fully customized according to drawings
- Structural and dimensional details must be confirmed in advance
- Installation method should be planned in the design phase

Applications
- Special-shaped facades
- Commercial sculptural feature walls
- Art installation structures
- High-end hotels and clubs`,
  },
  "stainless-steel-honeycomb-panel:3.1.3.3": {
    enFromZh: `Core Introduction
Curved honeycomb panels are formed by bending laminated honeycomb structures to deliver curved geometry while maintaining panel strength and stability.

Color System
Same as standard honeycomb panels (supports electroplating, antique finish, brushing, etc.).

Process Advantages
- Supports arc and curved-surface design
- Stable structure with strong anti-deformation performance
- Suitable for high-end spatial concepts
- Improves spatial flow with smooth lines

Technical Parameters
- Curvature is customized per project
- Structural design must be finalized in advance
- Installation system should match curved geometry

Applications
- Curved wall cladding
- Circular column wrapping
- Curved facades
- Premium architectural interiors`,
  },
  "stainless-steel-honeycomb-panel:3.1.3.4": {
    enFromZh: `Core Introduction
Water-ripple honeycomb panels combine embossed water-ripple stainless steel surfaces with honeycomb composite structures, offering both strong visual impact and high structural stability.

Color System
- Titanium Gold water-ripple
- Champagne Gold water-ripple
- Black Titanium water-ripple
- Mirror water-ripple

Process Advantages
- Dynamic light-and-shadow effect
- Well suited for premium spaces such as hotels and clubs
- Honeycomb structure improves stability
- Suitable for large-area decorative applications

Technical Parameters
- Surface: embossed water-ripple stainless steel
- Honeycomb lamination requires additional adhesive filling
- Cost is generally higher than regular honeycomb panels

Applications
- Hotel lobby feature walls
- KTV and entertainment interiors
- Decorative bar counters
- High-end commercial spaces`,
  },
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

function hasCjk(text: string) {
  return /[\u4e00-\u9fff]/.test(text);
}

function normalizeLineText(text: string) {
  return text.replace(/\s+/g, " ").replace(/[ \t]+$/g, "").trim();
}

function stripEnglishForZh(text: string) {
  const trimmed = text.trim();
  if (/^#{1,6}\s*FAQ\b/i.test(trimmed)) return "### FAQ";
  if (/^Q\d*\s*[:：]/i.test(trimmed)) return `Q: ${normalizeLineText(trimmed.replace(/^Q\d*\s*[:：]\s*/i, ""))}`;
  if (/^A\d*\s*[:：]/i.test(trimmed)) return `A: ${normalizeLineText(trimmed.replace(/^A\d*\s*[:：]\s*/i, ""))}`;

  return normalizeLineText(
    text
      .replace(/[A-Za-z][A-Za-z0-9+/_&().,:;'"%-]*/g, "")
      .replace(/\s+-\s+/g, " - ")
      .replace(/\s{2,}/g, " ")
      .trim(),
  );
}

function stripChineseForEn(text: string) {
  return normalizeLineText(
    text
      .replace(/[\u4e00-\u9fff]/g, "")
      .replace(/[，。；：、（）【】《》“”‘’]/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim(),
  );
}

function trimSeriesDocBeforeFaq(raw: string) {
  const lines = raw.split(/\r?\n/);
  const picked: string[] = [];
  for (const line of lines) {
    const text = line.trim();
    if (!text) continue;
    picked.push(text);
  }
  return picked;
}

function extractLocalizedSeriesDescription(raw: string): Localized {
  const sourceLines = trimSeriesDocBeforeFaq(raw);
  const zhLines: string[] = [];
  const enLines: string[] = [];

  for (const line of sourceLines) {
    const zh = stripEnglishForZh(line);
    const en = stripChineseForEn(line);

    if (hasCjk(zh)) zhLines.push(zh);
    if (/[A-Za-z]/.test(en)) enLines.push(en);
  }

  const zh = Array.from(new Set(zhLines)).join("\n").trim();
  const en = Array.from(new Set(enLines)).join("\n").trim();
  return { zh, en };
}

function lineCount(text: string) {
  return text
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean).length;
}

function buildDecorativeSheetDescription(raw: string): Localized {
  // Keep the author's original line breaks for zh content.
  const sourceLines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const zh = sourceLines.join("\n").trim();

  // English remains auto-derived from the same source.
  const en = sourceLines
    .map((line) => stripChineseForEn(line))
    .filter((line) => /[A-Za-z]/.test(line))
    .join("\n")
    .trim();

  return { zh, en };
}

function applyManualSeriesTranslation(slug: string, code: string, source: Localized): Localized {
  const key = `${slug}:${code}`;
  const manual = manualSeriesTranslationMap[key];
  if (!manual) return source;

  const zhWeak = !source.zh || lineCount(source.zh) < 3;
  const enWeak = !source.en || lineCount(source.en) < 3;

  return {
    zh: zhWeak && manual.zhFromEn ? manual.zhFromEn : source.zh,
    en: enWeak && manual.enFromZh ? manual.enFromZh : source.en,
  };
}

async function getSeriesDocPath(slug: string, code: string) {
  const fileName = productSeriesDocNameMap[slug]?.[code];
  if (!fileName) return null;

  const workspaceRoot = path.resolve(process.cwd(), "..");
  const folderCandidates = productFolderNameMap[slug] ?? [slug];

  for (const folderName of folderCandidates) {
    const candidatePath = path.join(workspaceRoot, "products", folderName, fileName);
    if (await pathExists(candidatePath)) return candidatePath;
  }
  return null;
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
      const parsed = parseProductMarkdown(raw);

      const enrichedSeries = await Promise.all(
        parsed.series.map(async (series) => {
          const docPath = await getSeriesDocPath(slug, series.code);
          if (!docPath) return series;

          const docRaw = (await readFile(docPath, "utf8")).trim();
          if (!docRaw) return series;

          const extracted =
            slug === "stainless-steel-decorative-sheet"
              ? buildDecorativeSheetDescription(docRaw)
              : extractLocalizedSeriesDescription(docRaw);
          const merged = {
            zh: extracted.zh || series.description.zh,
            en: extracted.en || series.description.en,
          };
          const bilingual = applyManualSeriesTranslation(slug, series.code, merged);

          return {
            ...series,
            description: bilingual,
          };
        }),
      );

      return {
        ...parsed,
        series: enrichedSeries,
      };
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

  const mappedSeriesFolders = productSeriesImageFolderMap[slug]?.[series.code] ?? [];

  const seriesFolderCandidates = Array.from(
    new Set([
      ...mappedSeriesFolders,
      sanitizeFolderName(series.title.en),
      sanitizeFolderName(series.title.zh),
      sanitizeFolderName(`${series.code}-${series.title.en}`),
      `${sanitizeFolderName(series.title.en)} `,
      `${sanitizeFolderName(series.title.zh)} `,
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
