/**
 * 选购指南：中文正文来自 articles-guide 对应 .md 的原文；
 * 英文为同文忠实翻译，供 /en 语言隔离展示。
 */
import { userSourceGuidePostsExtra } from "./user-source-guide-posts-extra";

type L = { zh: string; en: string };

export type UserSourceGuidePost = {
  slug: string;
  category: "guide";
  title: L;
  excerpt: L;
  publishedAt: string;
  readTime: L;
  keywords: { zh: string[]; en: string[] };
  sections: { heading: L; paragraphs: L[] }[];
  faq: { q: L; a: L }[];
};

export const userSourceGuidePostEtching: UserSourceGuidePost = {
  slug: "stainless-steel-etching-photochemical-vs-silk-screen-guide",
  category: "guide",
  title: {
    zh: "不锈钢蚀刻工艺终极指南：感光蚀刻 vs 丝印蚀刻，到底该选哪一种？",
    en: "Ultimate Guide to Stainless Steel Etching: Photochemical vs Silk-Screen Etching — Which Should You Choose?",
  },
  excerpt: {
    zh: "在高端电梯轿厢与巨幅墙面壁画（如金属《清明上河图》）的制作中，不锈钢蚀刻工艺赋予了金属令人惊叹的立体花纹。但面对“感光蚀刻”与“丝印蚀刻”，很多人在精度、模具成本与深度选择上陷入纠结。本文带您彻底扒开两种工艺的底层逻辑，解决大面积拼接锯齿印痛点，助您实现完美复杂的图文雕刻，规避超额模具费。",
    en: "For premium elevator cabins and large wall murals (such as a metal “Along the River During the Qingming Festival”), stainless steel etching creates striking three-dimensional patterns. Yet many teams struggle to choose between photochemical and silk-screen etching when weighing precision, tooling cost, and depth. This article explains how each process works, how to avoid jagged seams on large panels, and how to control tooling spend.",
  },
  publishedAt: "2026-03-27",
  readTime: { zh: "9 分钟阅读", en: "9 min read" },
  keywords: {
    zh: ["不锈钢蚀刻工艺", "感光蚀刻板", "丝印蚀刻", "电梯门花板", "不锈钢多色蚀刻"],
    en: [
      "stainless steel etching",
      "photochemical etching plate",
      "silk-screen etching",
      "elevator door decorative panel",
      "multi-color stainless etching",
    ],
  },
  sections: [
    {
      heading: {
        zh: "1）行业揭秘：冰冷钢铁如何在药水中生出繁花？",
        en: "1) Industry Basics: How Does “Cold Steel” Bloom in the Etching Bath?",
      },
      paragraphs: [
        {
          zh: `蚀刻，不是用刀具去硬性雕刻金属，而是一种优雅的化学减材艺术。其基本原理是：在不锈钢表面涂抹一层防腐蚀保护膜（感光油墨或丝印油墨），将不需要雕刻的图文区域保护起来，然后将板材送入充满强酸化学药水的蚀刻生产线。裸露的金属被药水腐蚀溶解，形成凹陷；清洗脱模后，便在金属上留下了永不磨灭的立体花纹。这种工艺广泛应用于电梯门板、各类装饰花板及名牌标牌中。`,
          en: `Etching is not about forcibly carving metal with tools, but an elegant chemical subtractive process. A corrosion-resistant mask (photo-resist or screen-print ink) protects the areas that should remain, then the sheet enters an etching line with strong acid. Exposed metal dissolves into recesses; after cleaning and stripping, permanent relief remains. It is widely used for elevator door panels, decorative patterned sheets, and nameplates.`,
        },
      ],
    },
    {
      heading: {
        zh: "2）核心战役：感光蚀刻 vs 丝印蚀刻",
        en: "2) Head-to-Head: Photochemical Etching vs Silk-Screen Etching",
      },
      paragraphs: [
        {
          zh: `根据“防腐保护膜”的上膜方式不同，蚀刻工艺分为两大阵营：`,
          en: `Depending on how the protective mask is applied, etching splits into two camps:`,
        },
        {
          zh: `阵营A：感光蚀刻（高端精密定制首选）
- 原理：将感光油墨涂满整板，覆盖高精度感光“胶片（菲林）”后进行紫外线曝光。胶片透明处的油墨固化形成保护层，未固化的油墨被洗掉露出金属。
- 精度优势：极高！边缘极其锐利，绝对没有锯齿印。 哪怕是1mm、3mm的极细发丝线条（如微雕《清明上河图》），也能完美呈现。
- 深度优势：药水耐受性好，可以进行非常深度的蚀刻（超过15c）。`,
          en: `Camp A — Photochemical etching (premium precision custom)
- Principle: coat the sheet with photo-resist, register a high-precision film (photomask), and expose under UV. Transparent areas cure into the resist; uncured resist is washed away to expose metal.
- Precision: extremely high — edges stay sharp without jagged traces. Even 1–3 mm hairline detail (e.g. micro-etched “Along the River During the Qingming Festival”) can be reproduced.
- Depth: the resist tolerates longer etching, enabling very deep relief (beyond 15c).`,
        },
        {
          zh: `阵营B：丝印蚀刻（大批量流水线之王）
- 原理：制作类似丝网印刷的“网板”，用刮板将油墨透过网孔直接印在不锈钢表面，形成保护层。
- 精度劣势：由于油墨是透过网纱漏印下去的，对于特别精细的线条和边缘，会产生不可避免的微小“锯齿印”，甚至在细微处出现断线变形。
- 深度劣势：丝印油墨层较薄，耐腐蚀时间短，最深只能蚀刻到15c（0.15mm）左右，无法做深孔。`,
          en: `Camp B — Silk-screen etching (high-volume production)
- Principle: a mesh screen is prepared and ink is squeegeed through open areas to form the resist.
- Precision limits: ink passes through mesh fibers, so very fine lines inevitably show slight jagged edges and can break or distort.
- Depth limits: the ink layer is thin and has limited chemical endurance — practical maximum is about 15c (0.15 mm); deep holes are not feasible.`,
        },
      ],
    },
    {
      heading: {
        zh: "3）适用场景排雷：无缝拼接与极限宽度的红线",
        en: "3) Application Red Lines: Seamless Splicing and Maximum Panel Width",
      },
      paragraphs: [
        {
          zh: `在实际选型中，很多时候并不是“你想选什么就选什么”，而是图纸要求倒逼工艺选择：
- 致命红线 1：拼接巨幅壁画，【必须】选用感光蚀刻。 为什么？因为丝印在印刷过程中不可避免会产生轻微移位和网纱变形，导致图案边缘带有锯齿。当两块板拼接在一起时，线条根本对不上！只有感光蚀刻的1:1胶片曝光，才能做到跨板线条的完美接缝。
- 致命红线 2：宽度达到1.5米的超宽板，【必须】选用感光蚀刻。 受限于目前市场上丝印设备和网版的物理宽度，1.5米宽的超大板材全部只能依赖大型感光曝光生产线来制作。
- 批量标准门板（如常规客梯门花）：图案不复杂、单板无拼接，强烈建议选用丝印蚀刻，大批量生产极具成本优势。`,
          en: `In practice, drawings often force the process choice:
- Red line 1 — Large mural splicing: you must use photochemical etching. Screen printing inevitably shifts slightly and distorts mesh, leaving jagged edges; seams will not line up across panels. Only 1:1 film exposure delivers continuous lines across sheets.
- Red line 2 — Panels about 1.5 m wide: you must use photochemical etching. Current screen equipment and frame sizes cannot cover that width; wide sheets rely on large-format exposure lines.
- Standard door panels (simple pattern, no cross-panel splice): silk-screen etching is strongly recommended for batch cost efficiency.`,
        },
      ],
    },
    {
      heading: {
        zh: "4）工艺叠加玩法：不仅仅是凹凸，更是色彩交响曲",
        en: "4) Combined Finishes: Beyond Relief — Full Color Systems",
      },
      paragraphs: [
        {
          zh: `在顺佳兴，单调的银白凹凸早已不是高端主轴。蚀刻往往是与其它表面工艺打一套绚丽的“组合拳”：
- 电镀蚀刻：先喷砂或拉丝打底 -> 蚀刻凹槽 -> 进炉PVD镀钛。整体高贵金属感。
- 做旧蚀刻：蚀刻出图案 -> 水镀真铜 -> 药水氧化做旧 -> 手工打磨。凹陷处藏着黑色的氧化铜，凸起处泛着真铜的光泽，复古拉满。
- 多色填漆蚀刻：蚀刻完成后，通过贴过渡膜，在极深的凹槽内手工填入不同颜色的油漆（如红花绿叶），烘干撕膜。注意：需要填色的蚀刻深度最低要达到15c以上，否则油漆挂不住，因此这类工艺通常只能选用感光深蚀刻。`,
          en: `At Greateson, plain silver relief is only the starting point. Etching is often combined with other finishes:
- Plated etching: blast or brush → etch grooves → PVD titanium in furnace for a noble metallic look.
- Antique etching: etch pattern → water-plated real copper → chemical aging → hand burnishing — dark oxide in recesses, warm copper on highs.
- Multi-color paint fill: after etching, mask transitions and hand-fill deep grooves (e.g. red flowers, green leaves), cure, strip masks. Paint needs at least ~15c depth, so deep photochemical etching is usually required.`,
        },
      ],
    },
    {
      heading: {
        zh: "5）模具成本与交期深度算账",
        en: "5) Tooling Cost and Lead Time — The Real Math",
      },
      paragraphs: [
        {
          zh: `虽然感光蚀刻性能完胜，但为什么还有人选丝印？答案在模具账本里。
- 感光模具（胶片）：成本便宜，通常只要 150元/平方米。但胶片极其脆弱，通常被视为“一次性耗材”（保护得极好最多用3个月）。非常适合个性化极强、只做一次的高端定制单。
- 丝印模具（网板）：开模非常昂贵，一套标准网板（4×8尺）需 1200元/套（小于4×8尺也是1200元起步）。但它的优势在于“钢筋铁骨”，可以成千上万次地反复使用。如果开发了一款爆款KTV门花，长期大批量接单，丝印的摊薄成本低到可以忽略不计。`,
          en: `Photochemical etching wins on performance — so why silk screen? Tooling economics:
- Photochemical tooling (film): low cost, often about CNY 150/m², but film is fragile and treated as disposable (at best ~3 months if perfectly protected). Ideal for highly custom one-off jobs.
- Silk-screen tooling (screen): expensive — a standard 4×8 screen often starts around CNY 1,200 per set (same minimum for smaller sizes), but it is durable and reusable for huge runs. A hit KTV pattern amortizes tooling to almost nothing.`,
        },
      ],
    },
    {
      heading: {
        zh: "6）常见误区：蚀刻越深越好吗？",
        en: "6) Myth: Is Deeper Etching Always Better?",
      },
      paragraphs: [
        {
          zh: `真相：很多客户盲目追求“强烈的立体感”，要求厂家蚀刻到极限深度。 但蚀刻深度不仅受保护油墨耐受度的限制，更与加工时间成正比。蚀刻越深，板材在强酸中浸泡的时间越长，不仅成本急剧增加，而且药水会发生“侧向腐蚀（扩孔）”，导致原本精细的线条变粗、变糊。一般装饰应用深度控制在5c-15c即可，只有填色工艺才挑战深蚀刻。`,
          en: `Many clients chase “strong 3D” and ask for maximum depth. Depth is limited by resist endurance and scales with bath time — deeper etching raises cost and increases lateral undercut (“hole widening”), blurring fine lines. Most decorative work stays around 5c–15c; deep etching is mainly for paint-fill applications.`,
        },
      ],
    },
    {
      heading: {
        zh: "7）项目案例：顺佳兴的极致微雕体验",
        en: "7) Project Story: Greateson Ultra-Fine Etching",
      },
      paragraphs: [
        {
          zh: `在某高端新中式会所的大堂背景墙项目中，设计师给出了长达12米的《清明上河图》长卷矢量文件。顺佳兴技术团队采用10张1.219米宽的304不锈钢板，全部动用高精度“感光胶片曝光”技术，耗时一周精准深蚀刻，最终拼接装配时，人物的毛发、马匹的缰绳跨越两板交界处均严丝合缝、毫无锯齿，令甲方大为震撼。`,
          en: `For a high-end neo-Chinese clubhouse lobby, the designer supplied a 12-meter vector scroll of “Along the River During the Qingming Festival.” Greateson used ten 1.219 m wide 304 sheets, all with high-precision film exposure, one week of controlled deep etching, and seamless joints — hair strands and reins crossing panel lines stayed continuous with no jagged breaks.`,
        },
      ],
    },
    {
      heading: {
        zh: "结论与采购建议",
        en: "Conclusion and Procurement Guidance",
      },
      paragraphs: [
        {
          zh: `在不锈钢蚀刻的较量中，感光蚀刻代表着无锯齿、无缝拼接的“画质天花板”，是定制微雕壁画与超宽板的绝对统治者；而丝印蚀刻则把持着大批量标品、浅层花纹的“性价比王座”。摸透您的工程数量、拼接需求与精细度底线，选择相匹配的模具工艺，您的金属图腾才能完美烙印且不花冤枉钱。`,
          en: `Photochemical etching is the quality ceiling for zero-jagged, seamless murals and wide panels; silk-screen etching owns the cost throne for large batches and shallow patterns. Match tooling to quantity, splice requirements, and detail floor — that is how you get clean artwork without overspending.`,
        },
      ],
    },
  ],
  faq: [
    {
      q: { zh: "Q1：蚀刻可以改变不锈钢表面的颜色吗？", en: "Q1: Does etching change the color of stainless steel?" },
      a: {
        zh: "A1：单纯的蚀刻只能腐蚀出凹凸形状，腐蚀下去的底部是暗哑的金属底色，不会产生彩色。要想获得彩色，必须在蚀刻后搭配PVD电镀、水镀做旧或手工填色工艺。",
        en: "A1: Etching only creates relief; the etched floor reads as muted metal, not color. Color needs PVD, water-plated antique, or hand paint after etching.",
      },
    },
    {
      q: { zh: "Q2：丝印最大能做多深？为什么不能再深了？", en: "Q2: How deep can silk-screen etching go? Why not deeper?" },
      a: {
        zh: "A2：丝印最深只能做到约15c（0.15mm）。如果强行在酸池里泡更久，由于丝印油墨层较薄，强酸会击穿油墨保护层，把原本不该腐蚀的表面也给烧坏（俗称“花板”）。",
        en: "A2: About 15c (0.15 mm) is the practical limit. Longer baths break through the thin resist and damage protected areas (“burned” panels).",
      },
    },
    {
      q: { zh: "Q3：可以用201材质做精密感光蚀刻吗？", en: "Q3: Can grade 201 be used for precision photochemical etching?" },
      a: {
        zh: "A3：极其不建议。感光蚀刻通常线条非常细密深邃。201材质含杂质较多，在强酸溶液中极易发生不可控的过度腐蚀或生锈反应，导致废品率极高。精密蚀刻请务必采用高质量的304或316。",
        en: "A3: Strongly not recommended. Fine deep lines need stable 201 chemistry; impurities cause uncontrolled attack and rust. Use quality 304 or 316.",
      },
    },
    {
      q: { zh: "Q4：蚀刻会影响不锈钢的厚度吗？如果我用0.6mm的板蚀刻20c会怎样？", en: "Q4: Does etching reduce thickness? What if I etch 20c on 0.6 mm sheet?" },
      a: {
        zh: "A4：当然会。蚀刻本质就是“挖坑”。如果在0.6mm（实际可能只有0.55mm）的薄板上深挖20c（0.2mm），该处最薄点只剩下0.35mm，板材将失去刚性，像纸一样脆弱，甚至在背后能看到凸起的印子。深蚀刻必须选用厚板（建议1.0mm以上）。",
        en: "A4: Yes — etching removes metal. Etching 20c from ~0.55 mm effective leaves ~0.35 mm locally — too weak, sometimes telegraphing from the back. Deep etch needs thicker base (≥1.0 mm recommended).",
      },
    },
    {
      q: { zh: "Q5：客户发来一张JPEG图片能直接做蚀刻吗？", en: "Q5: Can we tool directly from a JPEG?" },
      a: {
        zh: "A5：不行。无论是制作丝印网板还是感光胶片，都需要极其精准的矢量图（如CAD、AI、CDR格式）用于出模。如果是复杂的风景照片，必须通过设计师重新勾线处理为矢量黑白稿。",
        en: "A5: No. Screens and films need precise vector art (CAD, AI, CDR). Photos must be retraced to clean black-and-white vectors.",
      },
    },
  ],
};

export const userSourceGuidePostPvd: UserSourceGuidePost = {
  slug: "pvd-vs-nano-color-oil-stainless-steel-coloring",
  category: "guide",
  title: {
    zh: "不锈钢颜色加工的秘密：PVD真空电镀与纳米色油，到底有什么本质区别？",
    en: "The Secret of Stainless Steel Color Finishing: PVD Vacuum Plating vs Nano Color Oil — What Is the Real Difference?",
  },
  excerpt: {
    zh: "“为什么同样是青古铜不锈钢，价格和质感差这么多？”在定制彩色不锈钢时，PVD真空电镀与纳米色油是最常被混淆的两大工艺。本文为您从物理原理、色彩表现力、耐候性及折弯加工痛点四个维度进行终极拆解。帮助工程采购与设计师看透本质，根据不同环境（室内外、异形折弯）做出最稳妥的防掉漆、防色差决策。",
    en: "“Why does antique bronze stainless look and cost so different?” PVD vacuum plating and nano color oil are often confused. This article breaks down physics, color expression, weathering, and bending pain points so procurement and designers can choose the safest anti-fade, anti-color-shift path for indoor/outdoor and formed parts.",
  },
  publishedAt: "2026-03-27",
  readTime: { zh: "8 分钟阅读", en: "8 min read" },
  keywords: {
    zh: ["不锈钢彩色工艺", "PVD与纳米色油的区别", "不锈钢电镀掉色", "纳米色油抗指纹", "水性漆与户外油"],
    en: [
      "stainless steel color finishing",
      "PVD vs nano color oil",
      "stainless coating fading",
      "nano color oil anti-fingerprint",
      "water-based vs outdoor topcoat",
    ],
  },
  sections: [
    {
      heading: {
        zh: "1）行业揭秘：看似一样的颜色，为什么差价巨大？",
        en: "1) Industry Reality: Why Do “Similar” Colors Quote So Differently?",
      },
      paragraphs: [
        {
          zh: `很多客户拿着一块“哑黑”或“青古铜”色卡来找厂家询价，却发现不同厂家的报价能差出几十甚至上百元一平米。用小刀在板面划一刀，有的底下露出了真铜层，有的却露出了银白的钢底。这背后的秘密就在于上色工艺的本质区别：高端项目常用的PVD真空电镀（包含水镀打底）与高性价比、色彩丰富的纳米色油（烤漆工艺）。弄错这两种工艺，不仅影响高级感，更会导致现场折弯爆漆、室外一年褪色等灾难性后果。`,
          en: `Clients bring matte black or antique bronze swatches and see quotes tens to hundreds of CNY per square meter apart. Scratch the surface: some show real copper underneath, others bare silver steel. The gap is the process — PVD vacuum plating (often with electroplated base) versus cost-efficient, color-rich nano color oil (baked paint). Choosing wrong hurts perceived quality, causes field bending failures, or outdoor fade within a year.`,
        },
      ],
    },
    {
      heading: {
        zh: "2）核心差异：物理“镀膜”与化学“漆膜”的基因对决",
        en: "2) Core Difference: Physical “Metal Film” vs Chemical “Paint Film”",
      },
      paragraphs: [
        {
          zh: `PVD真空电镀（含镀铜/水镀工艺）：
- 原理：物理气相沉积。金属离子在真空中蒸发并附着在不锈钢表面，膜层极薄（1-3微米）。
- 质感表现：绝对保留不锈钢底层的金属光泽与拉丝纹路，呈现透亮、硬朗的高级金属感。
- 延展性：由于是金属分子的结合，具有极佳的延展性，折弯深冲不易爆裂。
纳米色油（喷涂工艺）：
- 原理：通过喷枪将带有颜色的水性漆或油性漆（加入色精）均匀喷涂在不锈钢表面，经高温固化形成漆膜。
- 质感表现：漆膜会覆盖部分金属纹理（拉丝纹路不连贯，有轻微肉感），呈现出类似烤漆的质感。
- 色彩表现：无敌！可以调配出任何潘通色卡上的颜色（实色、闪银、哑黑等极难通过电镀实现的颜色）。
- 延展性：漆膜较脆。尤其是厚度较厚时，折弯极易被拉扯破裂（爆边泛白）。`,
          en: `PVD vacuum plating (including copper / water-plated base):
- Principle: physical vapor deposition — metal ions condense on the surface in a thin 1–3 µm film.
- Look: keeps base metal luster and brush lines — bright, hard premium metal.
- Ductility: metallic bonding stretches well; deep bends rarely blow out.

Nano color oil (spray):
- Principle: pigmented water- or solvent-borne paint is sprayed and oven-cured into a film.
- Look: covers some texture (brush looks softer, “meaty”), more like baked paint.
- Color: extremely flexible — Pantone solids, sparkle black, etc., hard for PVD alone.
- Ductility: film is brittle; thick films crack or whiten under aggressive bends.`,
        },
      ],
    },
    {
      heading: {
        zh: "3）适用场景排雷：室外与异形折弯的生死线",
        en: "3) Scenario Red Lines: Outdoors vs Complex Bending",
      },
      paragraphs: [
        {
          zh: `- 场景A：需要做各种异形加工、刨槽、90度深折弯的构件（如门套、立柱）。 强烈建议选PVD电镀/镀真铜。纳米色油在面对超过1.2mm厚板的剧烈折弯时，漆面容易崩裂，漏出底层白色的钢材，返工率极高。
- 场景B：品牌VI定制，需要极其精准的“中国红”、“爱马仕橙”或纯哑光黑。 必须选纳米色油。PVD电镀受限于金属靶材和气体，做不出鲜艳的实色。纳米色油可完美匹配潘通色。
- 场景C：室外幕墙及常年受阳光直射的雨棚。 优先电镀，或加涂顶级户外UV油。普通的纳米色油（特别是水性漆）在紫外线照射下，不出一年就会严重褪色、大面积脱落。必须加钱（约5元/平米）采用带防晒保护功能的户外油。`,
          en: `- Scenario A — formed parts with grooving and tight 90° bends (door frames, columns): favor PVD or real copper plating. Nano color oil on sheets >1.2 mm often cracks white at the bend — high rework.
- Scenario B — brand VI needing exact China red, Hermès orange, or pure matte black: choose nano color oil; PVD cannot hit saturated solids from metal targets alone; nano matches Pantone.
- Scenario C — facades and sun-exposed canopies: prefer plating, or premium outdoor UV clear. Standard nano (especially water-based) can fade and peel within a year in UV — budget roughly +CNY 5/m² for outdoor-rated UV protection.`,
        },
      ],
    },
    {
      heading: {
        zh: "4）工艺流程拆解（选型指南）",
        en: "4) Process Breakdown (Selection Guide)",
      },
      paragraphs: [
        {
          zh: `顺佳兴在纳米色油的管控上有一套严苛的标准： 以常见的实色或闪银板为例，其流程为：磨普砂 -> 2B表面电解（彻底清除杂质，打开微孔） -> 钝化 -> 喷涂纳米色油（同时增加珠光粉或色浆） -> 烘干。 技术关键：如果在电解后不进行钝化处理，油漆的附着力会大幅下降。同时，喷枪的速率、气压以及油漆的搅拌均匀度（防雾状、防团块、防灰尘杂质点），极其考验车间师傅的功底。`,
          en: `Greateson controls nano color oil tightly. Typical solid or sparkle silver flow: general sanding → 2B electrolytic clean (remove contamination, open pores) → passivation → spray nano color oil (with pearl or tint) → cure. Skipping passivation after electrolytic clean kills adhesion. Gun speed, air pressure, and thorough mixing (no fog, clumps, or dust) demand skilled operators.`,
        },
      ],
    },
    {
      heading: {
        zh: "5）成本与交期参考",
        en: "5) Cost and Lead-Time Reference",
      },
      paragraphs: [
        {
          zh: `- 成本对比：通常情况下，纳米色油工艺由于流程成熟且自动化程度高，成本低于复杂的真空电镀（特别是卧式炉电镀或水镀真铜）。但如果纳米油要求达到高硬度（4H商场级）或添加户外UV防护，价格也会相应上升。
- 交期：两者周期接近，通常在5-7天。若板材需要先做“黑钛”底色再拉丝最后上纳米油（如纳米青古铜），工序增多，周期顺延。`,
          en: `- Cost: nano color oil is usually cheaper than complex PVD (horizontal furnace or real copper) thanks to mature automation. High hardness (4H mall grade) or outdoor UV adds cost.
- Lead time: both are typically 5–7 days; multi-step stacks (e.g. black titanium base, brush, then nano antique bronze) extend the schedule.`,
        },
      ],
    },
    {
      heading: {
        zh: "6）常见误区：无指纹封油的那些坑",
        en: "6) Myths About Anti-Fingerprint Clear Coats",
      },
      paragraphs: [
        {
          zh: `- 误区1：所有的不锈钢板都要封无指纹油。 真相：镜面不锈钢绝对不需要、也不能封无指纹油！ 镜面极其光滑，油漆无法附着且会彻底破坏镜面的超高反射率。除此之外的拉丝、乱纹、喷砂等，封油是最后一道必不可少的工序。
- 误区2：纳米色油越硬越耐刮越好。 真相：硬度（如4H、6H、8H）是由油漆中“色金”（粉末）的含量决定的。色金过重，硬度虽然上去了，但附着力会急剧下降，稍微一折弯就爆漆。顺佳兴建议商业空间标准控制在4H硬度，这是耐磨与防爆边的最佳平衡点。`,
          en: `- Myth 1 — every sheet needs anti-fingerprint oil. Truth: mirror must not be topcoated — paint will not bond properly and kills reflectivity. Hairline, vibration, blast finishes usually need sealing as a final step.
- Myth 2 — harder is always better. Truth: hardness (4H/6H/8H) comes from pigment loading; too much pigment hurts adhesion and bends crack. Greateson targets ~4H for commercial balance of wear vs bend safety.`,
        },
      ],
    },
    {
      heading: {
        zh: "7）质检与防损建议",
        en: "7) QC and Damage-Prevention Tips",
      },
      paragraphs: [
        {
          zh: `如果由于预算或色彩要求，您必须采用厚板（>1.2mm）且选择了纳米色油工艺，在现场安装折弯前，请务必交代加工厂：先在背面进行深刨槽（刨去1/3厚度）。这样可以大幅释放折边时的金属张力，将表面漆膜拉扯破裂的风险降至最低。万一安装后局部爆漆，必须要求厂家提供同色号的修补漆进行现场点补。`,
          en: `If budget or color forces thick sheet (>1.2 mm) with nano color oil, require deep backside grooving (~one-third thickness) before bending to relax strain and protect the film. Keep color-matched touch-up paint for field repairs.`,
        },
      ],
    },
    {
      heading: {
        zh: "结论与采购建议",
        en: "Conclusion and Procurement Guidance",
      },
      paragraphs: [
        {
          zh: `PVD真空电镀赢在“纯正的金属骨相与延展耐受度”，是高端奢华场景的不二之选；纳米色油则胜在“无所不能的色彩外衣与极佳的抗指纹功效”，是打造实色与极简风格的神兵利器。理清两者的优劣，结合您项目的折弯强度与室内外环境，方能做出最专业的采购决策。`,
          en: `PVD wins on authentic metallic character and ductility — the luxury default. Nano color oil wins on color range and anti-fingerprint — the tool for solid colors and minimalism. Map strengths to bend severity and environment for the right buy.`,
        },
      ],
    },
  ],
  faq: [
    {
      q: { zh: "Q1：纳米镀铜和水镀真铜刮开后有什么不同？", en: "Q1: Nano copper vs water-plated real copper when scratched?" },
      a: {
        zh: "A1：用刀片轻轻刮开表面涂层，纳米镀铜（色油）底层露出的是银白色的不锈钢本色；而水镀真铜由于在不锈钢表面电解了一层真铜，刮开后依然是黄澄澄的真铜色。",
        en: "A1: Scratch nano copper paint — you see silver stainless substrate. Scratch real copper plating — you still see yellow copper metal.",
      },
    },
    {
      q: { zh: "Q2：水性漆和油性漆哪个好？", en: "Q2: Water-based vs solvent-based paint?" },
      a: {
        zh: "A2：油性漆附着力强但味道大，不环保，目前正规大厂基本被禁止使用。水性漆环保无异味，早期技术不稳定易脱落，但现在顺佳兴采用的高端水性漆（包含进口高清抗指纹油）已完美解决附着力问题。",
        en: "A2: Solvent systems bond well but smell and face regulatory limits. Water-based is cleaner; early versions failed adhesion, but Greateson’s high-end waterborne (including imported HD anti-fingerprint) now holds reliably.",
      },
    },
    {
      q: { zh: "Q3：为什么纳米色油做出来的拉丝板，纹路没那么有质感？", en: "Q3: Why does brushed look softer after nano color oil?" },
      a: {
        zh: "A3：因为油漆本身具有一定的厚度和覆盖力，它填补了部分拉丝的微小凹槽，使得拉丝纹路看起来“较肉”、直挺度不够。而镀铜做旧是纯手工拉丝，金属感极其爆棚。",
        en: "A3: Paint thickness fills micro grooves so hairline looks softer. Copper antique with hand brushing keeps maximum metallic bite.",
      },
    },
    {
      q: { zh: "Q4：纳米色油能防指纹吗？", en: "Q4: Can nano color oil resist fingerprints?" },
      a: {
        zh: "A4：可以。纳米色油工艺本身就是把调色的色浆/色精混入到无指纹油漆中一起喷涂的，所以成膜后天然具备极佳的抗指纹与易清洁效果（分亮光、哑光两种呈现）。",
        en: "A4: Yes — tints are blended into the anti-fingerprint clear and sprayed together, so the cured film resists prints and cleans easily (gloss or matte).",
      },
    },
    {
      q: { zh: "Q5：哑黑板是怎么做出来的？", en: "Q5: How is matte black stainless made?" },
      a: {
        zh: "A5：不锈钢是极难做出纯哑黑色的。通常通过纳米色油工艺：在不锈钢基材电解后，在喷涂纳米油时加入高浓度的黑色色浆，并采用哑光配方固化而成。",
        en: "A5: True matte black is hard on bare stainless; nano color oil after electrolytic prep uses heavy black pigment in a matte formula to achieve it.",
      },
    },
  ],
};

export const userSourceGuidePosts = [
  userSourceGuidePostEtching,
  userSourceGuidePostPvd,
  ...userSourceGuidePostsExtra,
];
