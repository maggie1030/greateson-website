import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

import type { Locale } from "./i18n";
import { productSeriesImageDirMap, productSeriesSeedMap } from "./product-series-config";

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
  "stainless-steel-double-curved-fabrication": ["stainless-steel-double-curved-fabrication.md"],
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
  "stainless-steel-decorative-sheet:3.1.2.1": {
    enFromZh: `### Core Introduction
Color electroplated stainless steel is produced by PVD (Physical Vapor Deposition) or electrochemical plating to deposit a metal/alloy layer on the stainless steel surface, creating multiple colors and decorative finishes.
In vacuum or electrolytic environments, gas media (such as nitrogen and oxygen) react with metal ions so color bonds to the substrate and forms a uniform, stable decorative layer.
Compared with conventional surface treatment, color electroplating not only improves visual effect, but also provides better wear resistance, corrosion resistance, and metallic texture. It is widely used in architectural decoration, commercial spaces, and high-end interiors.
### Surface Color and Treatment
1. Common colors: Titanium Gold, Champagne Gold, Rose Gold, Black Titanium, Antique Bronze, Grey Steel, Sapphire Blue, Deep Brown
2. Special colors: Purple / Green / Multi-color gradient
(Some highly saturated colors are not recommended for outdoor use.)
### Process Advantages
- Rich color options and diverse metallic effects
- Uniform coating and premium surface texture
- Good wear resistance and corrosion resistance
- Can be combined with hairline, sandblasting, etching, and other textures
- Suitable for large-area decorative applications
- Supports anti-fingerprint treatment to improve user experience
- Better metallic texture and durability than paint-only solutions
### Technical Parameters
- Substrate grade: 201 / 304 / 316 stainless steel
- Thickness range: 0.3 mm - 3.0 mm
- Coating thickness: typically around 1 um (not over 3 um)
- Maximum size: vertical furnace up to 10 m length; horizontal furnace usually within 4 m
- Process route: PVD / electrochemical plating
- Surface textures: Hairline / Mirror / Sandblasted / Random / Satin / Cross-hairline
- Double-side plating: supported (cold-furnace process)
- Surface topcoat: usually anti-fingerprint coating
### Applications
Architectural facades, elevator panels, hotel decoration, commercial interiors, display cabinets, bar counters, partition screens, furniture decoration.
Color electroplated sheet is one of the most widely used stainless steel surface solutions in high-end decorative spaces.
### Manufacturing Process
Machine cleaning (basic cleaning) -> Manual fine cleaning (for high-requirement panels) -> Punching / furnace hanging -> Enter plating furnace (vacuum or electrolytic environment) -> Color coating (PVD or electroplating) -> Furnace-out treatment -> Surface film / anti-fingerprint treatment
Typical process combinations:
- Hairline Rose Gold: slitting -> hairline -> color coating -> anti-fingerprint
- Mirror + bead-blast gunmetal: mirror -> bead-blast -> color coating -> anti-fingerprint
- Etched elevator panel: etching -> color coating -> anti-fingerprint
### FAQ
Q: Will color electroplated sheets fade?
A: Under normal process control, fading is uncommon. If pre-cleaning or coating control is poor, "titanium peeling" can occur.
Q: Why can different batches have color differences?
A: Color tuning depends on equipment and process control. Different furnace runs may create slight color variation, so one project should use one batch when possible.
Q: How large can color electroplated sheets be?
A: Vertical furnaces can reach around 10 meters; horizontal furnace applications are generally recommended within 4 meters.
Q: Can all colors be produced?
A: Most colors can be achieved, but very high-saturation colors (such as China Red or orange) are harder to stabilize.
Q: Can these sheets be used outdoors?
A: Standard colors are mainly for indoor use. Some colors require additional UV-resistant treatment for outdoor environments.
Q: Is thicker sheet always better for electroplating?
A: Not necessarily. Thickness mainly impacts structure and cost, and has limited effect on plating film thickness.
Q: Can sheets from different batches be spliced together?
A: Cross-batch splicing is not recommended due to visible color differences.`,
  },
  "stainless-steel-decorative-sheet:3.1.2.2": {
    enFromZh: `### Core Introduction
Antique-finish stainless steel combines multiple processes such as copper plating, blackening, oxidation, coloring, manual hairline brushing, and random-grain treatment to reproduce antique copper, bronze, red copper, yellow copper, and rust-like artistic effects.
Its texture is not a single mechanical repeat. Through manual treatment and oxidation reactions, it forms layered and aged surface character so every sheet has its own vintage appearance.
Compared with standard colored stainless steel, antique-finish series emphasizes artistic expression, atmosphere, and material depth. It is widely used in premium commercial spaces, hotels, clubs, feature walls, display cabinets, elevator decoration, and classical-style interiors.
### Surface Color and Treatment
Colors:
Antique Green Bronze, Antique Red Bronze, Antique Yellow Bronze, Blackened Antique Bronze, Rustic Bronze, Verdigris, and other custom vintage palettes.
Optional texture effects: manual hairline grain, manual random grain, rust-style distressing, oxidation mottled texture, and combined processes such as etching, embossing, and transfer printing.
Natural texture variation between sheets and batches is a core feature of this series.
### Process Advantages
- Strong vintage character and richer decorative expression
- Naturally unique sheet-to-sheet texture and stronger artistic value
- Can simulate antique copper, bronze, and rusted metal effects
- Retains stainless steel substrate strength with high decorative quality
- Suitable for high-end Chinese, European, hotel, and club spaces
- Can be layered with etching, embossing, and transfer printing for added depth
- Surface sealing/oil protection provides practical durability and anti-rust support
If real copper base plating is used, a true copper layer is formed and overall texture/durability is usually better than paint-only effects.
### Technical Parameters
- Substrate grade: 201 / 304 / 316 stainless steel
- Standard thickness: 0.5 mm - 3.0 mm
- Recommended thickness: within 2.5 mm
- Maximum width: within 1.5 m
- Recommended length: within 4.5 m
- Maximum achievable length: around 7 m
- Surface process: copper plating / blackening / oxidation / manual brushing / random grain / spray coloring / sealing oil
- Compatible combined processes: etching / embossing / transfer printing
- MOQ: usually from 5 sheets
- Sample fee: around CNY 300 per sample
Special notes:
- Antique-finish sheets are mostly handmade and cannot be 100% identical.
- Seamless splicing across different batches is not recommended. Reserve 10%-20% extra quantity.
- Thick-sheet processing is more expensive, and plating/handwork time rises with thickness.
### Applications
Feature walls, column wrapping, display cabinets, ceilings, wall decoration, door frames/opening trims, elevator panels/door frames, furniture decoration, decorative components, exterior facades.
### Manufacturing Process
1. Standard antique-finish route
Slitting -> Surface sanding -> Base treatment (copper plating / electroplating / water plating) -> Chemical oxidation for distressed effect -> Manual irregular pattern/texture creation -> Surface cleaning -> Repeated polishing adjustment (3-4 rounds) -> Manual spray coloring -> Sealing protection -> Protective film
2. Hairline blackened red/green/yellow antique copper route
Slitting -> Sanding -> Copper plating -> Blackened nickel process -> Manual hairline or random-grain treatment -> Oil protection -> Protective film
3. Optional combined routes
Etch then antique finish / Emboss then antique finish / Transfer print then antique finish
Antique-finish series usually involves many steps (commonly 5-10+) with a typical lead time of around 10-15 days.
### FAQ
Q: Can every antique-finish sheet be exactly identical?
A: No. Most effects are handmade. Sheets can be highly similar but never 100% identical, and this is part of their artistic value.
Q: Is copper plating always required?
A: Not always. Some effects use copper as a base layer, while others can be achieved on 2B base depending on target look and budget.
Q: Why do colors vary between batches?
A: Because this process depends on manual operation and oxidation reaction, natural variation in tone/texture is expected.
Q: Is this series suitable for outdoor use?
A: It can be enhanced with outdoor protective oil, but outdoor projects need additional cost and environment-specific evaluation.
Q: Why is lead time longer?
A: The workflow is complex and highly manual, often including oxidation, polishing, spray coloring, and sealing; typical production is 10-15 days.
Q: Can bending cause edge cracking or whitening?
A: Some routes may have this risk, especially on thick sheets or paint-heavy systems. Design and processing planning should include preventive measures and repair options.
Q: What is the maximum sheet size?
A: Recommended width is within 1.5 m and length within 4.5 m. Oversize sheets are possible but with much higher difficulty and cost.`,
  },
  "stainless-steel-decorative-sheet:3.1.2.3": {
    enFromZh: `### Core Introduction
Etched metal sheet is a decorative material that uses chemical corrosion to form patterns, textures, and relief effects on stainless steel surfaces.
By protecting selected areas and etching only target zones, the pattern is "engraved" into the sheet and creates layered visual depth with fine detail.
Etching is often combined with hairline, sandblasting, electroplating, copper plating, antique finishing, and transfer printing for richer visual expression.
It features high detail, layered depth, and strong customization, and is widely used in elevator decoration, feature walls, commercial spaces, and high-end projects.
### Surface Color and Treatment
Etching itself is a texture process; color normally comes from post-treatment.
1. Common combined colors: Titanium Gold / Champagne Gold / Rose Gold; Black Titanium / Grey Steel; Antique Bronze / Bronze / Red Copper; Vintage distressed palettes; multi-color paint-filled etching
2. Achievable effects:
Colored etching (overall color), de-titanium etching (etched areas colorless or different tone), multi-color filled etching (pattern color filling)
Color outcome is related to process order (etch first vs color first gives different results).
### Process Advantages
- Supports high-precision complex graphics (landscape art, human figures, etc.)
- Strong relief and layered visual effect
- High customization (drawing -> tooling -> production)
- Can be combined with multiple processes (electroplating / antique finish / transfer printing)
- Suitable for large decorative areas and high-end projects
- Premium visual output for branded spaces
- Continuous splicing patterns are achievable with high-precision process control
Photochemical etching can achieve around 1 mm-level fine lines, which is a key advantage in premium projects.
### Technical Parameters
- Substrate grade: 304 (recommended for large areas) / 201 / 316
- Maximum length: around 6 m
- Standard thickness: 0.5 mm - 3.0 mm
- Etching depth:
  - 3-5c: shallow texture (mirror applications)
  - 8c+: tactile effect
  - 10-15c: clear relief effect
  - Special routes can reach 40-50c
- Process types:
  - Photochemical etching (high precision)
  - Silk-screen etching (high efficiency)
- Tooling cost:
  - Photochemical etching: around CNY 150/m2
  - Silk-screen etching: around CNY 1200/set
For large-area etching, 304 is recommended to reduce impurity/watermark risks.
### Applications
Elevator cabin panels, feature walls, display cabinets, cabinetry, ceilings, commercial-space decoration, storefront headers, and decorative trims.
Elevator panels are one of the most representative applications of etched sheets.
### Manufacturing Process
1. Basic etching route
Pattern design & tooling -> Protective resist coating -> Natural drying -> Chemical etching (time controls depth) -> De-masking & cleaning -> Surface finishing
2. Typical combined routes
Electroplated etching: slitting -> hairline/8K -> sandblasting -> etching -> electroplating -> oil protection -> protective film
Copper-plated etching: slitting -> etching -> sanding -> copper plating -> blackening -> hairline -> oil protection
Antique etched finish: etching -> copper plating -> oxidation -> manual texture -> polishing -> spray coloring -> sealing oil
Transfer-printed etching: etching -> transfer print (wood/stone pattern) -> drying -> protective film
### FAQ
Q: How fine can etched patterns be?
A: Photochemical etching can achieve around 1 mm-level details and is suitable for high-precision graphics.
Q: What is the difference between photochemical and silk-screen etching?
A: Photochemical etching provides higher precision for complex/small-batch graphics; silk-screen etching is lower in cost for large-batch production but with slightly lower precision.
Q: Why can etched sheets have poor color adhesion?
A: Incomplete post-etch cleaning can leave chemical residue and negatively affect subsequent plating/coating.
Q: Why is 304 recommended for large-area etching?
A: Compared with some 201 materials, 304 generally has lower impurity-related risk for issues such as watermarks and black dots after etching.
Q: Can etched sheets be spliced?
A: Yes, but high-precision splicing should use photochemical etching to reduce alignment deviation.
Q: How should etching depth be selected?
A: Decoration-oriented: 3-5c; tactile effect: 8c+; clear relief effect: 10-15c.
Q: What is the production lead time?
A: Standard route is around 7-10 days; complex routes (antique/multi-color) are usually around 10-15 days.`,
  },
  "stainless-steel-decorative-sheet:3.1.2.4": {
    enFromZh: `### Core Introduction
Embossed stainless steel is formed by stamping, rolling, or hydraulic processing, where die textures are transferred to metal surfaces under high pressure to create tactile three-dimensional decorative sheets.
This process strengthens visual depth and improves decorative expression and spatial texture.
Embossed sheets are often combined with hairline, mirror, sandblasting, and electroplating finishes to create multiple styles, and are widely used in commercial interiors and architectural facades.
### Surface Color and Treatment
Embossing is a texture process; color is usually provided by post-treatment.
Common color sets: Titanium Gold / Champagne Gold / Rose Gold; Black Titanium / Grey Steel; Antique Bronze / Bronze; Mirror Silver / Natural Hairline.
Compatible surface treatments: PVD electroplating (premium decoration), antique finish (vintage style), anti-fingerprint coating (engineering use).
The same color appears different on different textures.
### Process Advantages
- Strong 3D surface effect and visual impact
- Multiple texture styles (regular / natural / artistic)
- Better spatial layering and premium feel
- Can be combined with electroplating, etching, and other processes
- Suitable for large decorative areas
- Improves sheet stiffness and deformation resistance
- Supports functional requirements such as anti-slip and anti-fingerprint
### Technical Parameters
1. Process categories: stamping, rolling, hydraulic
2. Size range:
Stamping series: width <= 1.5 m, length <= 8 m
Rolling series: width <= 1.22 m, length <= 8 m
Hydraulic series: width <= 1.22 m, length <= 2.44 m
3. Thickness range:
- Stamping: 0.4 - 3.0 mm
- Rolling: 0.5 - 1.2 mm
- Hydraulic: 0.4 - 1.2 mm
MOQ:
- Stamping / hydraulic: from 1 sheet
- Rolling: full coil or around 2 tons
Some fine textures are better executed on 304; 201 may not reproduce details as well.
### Applications
1. Stamping series: ceiling systems, wall decoration, KTV door panels, column wrapping, furniture decoration
2. Rolling series: cabinet tops, exterior facades, furniture decoration
3. Hydraulic series: KTV decorative door patterns, custom decorative panels
Embossed sheets are widely used in entertainment and commercial spaces.
### Manufacturing Process
Stamping route: surface pretreatment -> embossing forming -> post-treatment (electroplating / polishing, etc.)
Rolling route: coil pretreatment (6K / 8K / sanding) -> rolling -> leveling -> cut-to-length -> post-treatment
Hydraulic route: surface pretreatment -> hydraulic die forming -> post-treatment
Core principle:
Permanent 3D structure is formed by pressing die textures directly into the metal surface.
### FAQ
Q: What is the difference between embossed and etched sheets?
A: Embossing is physical pressure forming with stronger 3D depth; etching is chemical corrosion and is better for fine graphic detail.
Q: Why do some water-ripple embossed sheets shrink or deform?
A: Material deformation under forming stress can cause dimensional shrinkage. Typical shrinkage depends on pattern size and process control.
Q: Can embossed sheets be bent?
A: Yes, but process sequencing is important. Trial validation is recommended for complex bends.
Q: Can embossed sheets be laminated with honeycomb core?
A: Yes, but uneven surfaces increase adhesive demand and cost.
Q: Can 201 be used for all textures?
A: Not always. Some fine/complex textures are better achieved with 304.
Q: What is the difference between rolling and stamping?
A: Stamping processes single sheets with stronger depth expression; rolling is continuous coil processing for larger-volume production.
Q: What is the production lead time?
A: Standard routes are often around 10-15 days, and longer for custom or combined processes.`,
  },
  "stainless-steel-decorative-sheet:3.1.2.5": {
    enFromZh: `### Core Introduction
Hammered stainless steel is a decorative sheet formed by mechanical hammering or special pressing to create irregular raised-and-recessed textures on the metal surface.
Its texture resembles hand-forged effects, with a natural, random, and strongly metallic visual expression.
Compared with standard hairline or mirror finishes, hammered textures offer stronger layering and artistic character, while helping reduce glare and hide scratches. It is commonly used in high-end space design.
### Surface Color and Treatment
Hammered texture is a texture process; color usually comes from post-treatment.
Common colors: Titanium Gold, Champagne Gold, Rose Gold, Black Titanium, Antique Bronze, Natural Hairline, Mirror.
Common combinations:
- Hammered + PVD electroplating (premium commercial spaces)
- Hammered + antique finish (vintage style)
- Hammered + anti-fingerprint (engineering projects)
Hammered texture presents very different visual feel under different colors.
### Process Advantages
- Natural irregular texture and premium visual quality
- Reduced glare and improved spatial comfort
- Better ability to hide scratches and daily wear traces
- Strong surface tactility and depth
- Suitable for high-end and artistic spaces
- Can be combined with electroplating / antique finish / hairline
- Random texture makes each sheet more unique
### Technical Parameters
- Substrate grade: 201 / 304 / 316 stainless steel
- Standard thickness: 0.5 mm - 3.0 mm
- Texture options: medium hammer / small hammer / large hammer / irregular hammer
- Maximum size:
  - Width <= 1.5 m
  - Length <= 6 m (depends on equipment)
- Surface routes: hairline / mirror / sandblasted, PVD electroplating, antique finish, anti-fingerprint treatment
Greater thickness usually produces stronger hammered depth and visual texture.
### Applications
Premium feature walls, hotel/club decoration, bar counters, display cabinets, elevator decoration, door and wall panels, art installations.
Hammered texture is especially suitable for spaces requiring low glare with strong material texture.
### Manufacturing Process
1. Basic process route:
Slitting -> Surface pretreatment (hairline / mirror / sanding) -> Hammered texturing (mechanical or die pressing) -> Surface refinement -> Post-treatment (electroplating / antique / polishing) -> Anti-fingerprint treatment -> Protective film
2. Typical combinations:
- Hammered Champagne Gold: hairline -> hammered -> color coating -> anti-fingerprint
- Hammered Antique Bronze: hammered -> copper plating -> antique finish -> sealing oil
- Hammered Black Titanium: hammered -> mirror -> electroplating -> anti-fingerprint
### FAQ
Q: Is hammered texture random, and can sheets be exactly identical?
A: Hammered texture is naturally random. Absolute identity is not achievable, but consistent style can be controlled.
Q: Does hammering reduce sheet strength?
A: Generally no. It can improve local rigidity and anti-deformation performance in many applications.
Q: Is hammered surface easy to get dirty?
A: Usually less fingerprint-sensitive than mirror surfaces, and anti-fingerprint treatment is commonly applied.
Q: Can hammered sheets be made in color?
A: Yes. Hammered texture is often combined with PVD electroplating for multiple color effects.
Q: Is hammered texture suitable for large areas?
A: Yes, but same-batch production is recommended to minimize texture and color variation.
Q: What is the difference between hammered and water-ripple?
A: Hammered texture is irregular and hand-crafted in character, while water-ripple is more flowing and decorative.
Q: What is the production lead time?
A: Standard routes are usually around 7-12 days, and longer for custom combined processes.`,
  },
  "stainless-steel-double-curved-fabrication:3.1.4.1": {
    enFromZh: `Core Introduction
Architectural double curved metal sculpture is a high-end metal art product built from 3D surface modeling, multi-directional curved forming, and precision welding.
Its defining feature is a double-curved geometry with simultaneous horizontal and vertical curvature, creating fluid and visually striking forms.
Unlike flat or single-curved products, this type of sculpture depends on 3D modeling, surface decomposition, CNC fabrication, and hand finishing, combining engineering precision with artistic expression.
It is widely used in city landmarks, commercial complexes, luxury landscapes, and art installations.

Color System
Mirror Silver / Brushed Silver
Titanium Gold / Champagne Gold / Rose Gold
Black Titanium / Dark Grey
Antique Bronze / Bronze / Red Copper
Custom gradient electroplated finishes

Process Advantages
Complex 3D curved forms with strong landmark impact
Natural and continuous curved surfaces
Fully customized workflow from concept to fabrication
High structural strength for large outdoor installations
Can integrate with lighting systems
High surface precision with seamless visual effect
Strong brand and landmark expression

Technical Parameters
Material: 304 stainless steel (mainstream) / 316 stainless steel (recommended outdoors)
Thickness: 1.5mm - 6.0mm depending on structure
Size: Fully customizable, including modular large-scale projects
Accuracy: Millimeter-level tolerance control
Structure: Internal frame plus skin / fully welded structure
Forming: CNC rolling, mold stretching, segmented welding

Applications
City landmark sculpture
Commercial plaza installation
Shopping mall atrium art
Hotel entrance sculpture
Landscape sculpture
Exhibition installation
Corporate identity sculpture

Manufacturing Process
Concept design
3D modeling
Surface decomposition
CNC cutting
Forming
Segment welding
Grinding and polishing
Surface finishing
Installation

FAQ
Q: What is double curved sculpture?
A: It is a complex 3D sculpture with curvature in two directions.
Q: Why is it more expensive?
A: Because it requires 3D modeling, custom forming, multiple welding steps, and high-precision finishing.
Q: Which material is recommended outdoors?
A: 316 stainless steel is recommended for better corrosion resistance.
Q: How large can it be made?
A: It can be expanded to landmark scale through modular segmentation.
Q: How is accuracy controlled?
A: Through 3D modeling, CNC forming, and high-precision segmented welding.`,
  },
  "stainless-steel-double-curved-fabrication:3.1.4.2": {
    enFromZh: `Core Introduction
Architectural double curved ceiling is a premium metal ceiling system produced from 3D surface design, multi-directional forming, and precision assembly.
Its core feature is continuous horizontal and vertical curvature across the ceiling surface, creating a flowing and spatially dramatic visual effect.
Unlike flat ceilings or single-curved forms, double curved ceilings rely on 3D modeling, surface decomposition, modular fabrication, and on-site calibration.
They are widely used in commercial atriums, hotel lobbies, exhibition halls, and premium public interiors.

Color System
Mirror Silver / Brushed Silver
Titanium Gold / Champagne Gold / Rose Gold
Black Titanium / Dark Grey
Antique Bronze / Bronze
Custom gradient finishes

Process Advantages
Complex large-space curved ceiling forms
Continuous and fluid surface effect
Fully customized from concept to fabrication
Modular splicing for large projects
Stable structure suitable for suspended ceiling systems
Can integrate with concealed lighting
Improves luxury and brand expression

Technical Parameters
Material: 304 stainless steel (interior standard) / 316 stainless steel (special environments)
Thickness: 0.8mm - 3.0mm
Panel size: Customized by surface decomposition
Accuracy: Millimeter-level tolerance control
Installation: Modular assembly / suspended keel system
Forming: CNC rolling, mold pressing, segmented welding

Applications
Commercial atriums
Hotel lobbies
Art exhibition halls
Brand showrooms
Airports and rail stations
Club interiors
Office building lobbies

Manufacturing Process
Concept design
3D modeling
Surface decomposition
Module numbering
CNC fabrication
Forming
Surface finishing
Packing and transport
On-site installation
Precision adjustment

FAQ
Q: What is a double curved ceiling?
A: It is a premium ceiling system with dual-direction curvature across a 3D surface.
Q: Why is it expensive?
A: Because it involves modeling, decomposition, custom fabrication, and complex installation.
Q: How is consistency maintained on large projects?
A: Through accurate modeling, module numbering, and on-site calibration.
Q: Can lighting be integrated?
A: Yes, concealed light strips and point-source lighting can be integrated.
Q: Will there be visible joints?
A: High-precision fabrication and installation can achieve a nearly seamless appearance.`,
  },
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".JPG", ".PNG", ".JPEG"]);

function normalize(text: string) {
  return text.replace(/\s+/g, " ").trim();
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
  const forceDecorativeSheetEn = slug === "stainless-steel-decorative-sheet" && Boolean(manual.enFromZh);

  return {
    zh: zhWeak && manual.zhFromEn ? manual.zhFromEn : source.zh,
    en: forceDecorativeSheetEn ? manual.enFromZh ?? source.en : enWeak && manual.enFromZh ? manual.enFromZh : source.en,
  };
}

async function getSeriesDocPath(slug: string, code: string) {
  const fileName = productSeriesSeedMap[slug]?.find((series) => series.code === code)?.docFileName;
  if (!fileName) return null;
  const candidatePath = path.join(process.cwd(), "content", "products", fileName);
  return (await pathExists(candidatePath)) ? candidatePath : null;
}

async function enrichProductSeries(slug: string, seriesList: ProductSeries[]) {
  return Promise.all(
    seriesList.map(async (series) => {
      const docPath = await getSeriesDocPath(slug, series.code);
      if (!docPath) {
        return {
          ...series,
          description: applyManualSeriesTranslation(slug, series.code, series.description),
        };
      }

      const docRaw = (await readFile(docPath, "utf8")).trim();
      if (!docRaw) {
        return {
          ...series,
          description: applyManualSeriesTranslation(slug, series.code, series.description),
        };
      }

      const extracted =
        slug === "stainless-steel-decorative-sheet"
          ? buildDecorativeSheetDescription(docRaw)
          : extractLocalizedSeriesDescription(docRaw);
      if (slug === "stainless-steel-decorative-sheet") {
        const manual = manualSeriesTranslationMap[`${slug}:${series.code}`];
        return {
          ...series,
          description: {
            zh: extracted.zh || series.description.zh,
            // Decorative-sheet EN must map one-to-one with zh card structure.
            en: manual?.enFromZh?.trim() || extracted.en || series.description.en,
          },
        };
      }

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
  const fileCandidates = productDocNameMap[slug] ?? [`${slug}.md`];
  const contentRoot = path.join(process.cwd(), "content");
  const seedSeries = productSeriesSeedMap[slug] ?? [];

  for (const fileName of fileCandidates) {
    const fullPath = path.join(contentRoot, fileName);
    if (!(await pathExists(fullPath))) continue;
    const raw = (await readFile(fullPath, "utf8")).trim();
    if (!raw) continue;
    const parsed = parseProductMarkdown(raw);
    const seriesBase = seedSeries.length ? seedSeries : parsed.series;
    const enrichedSeries = await enrichProductSeries(slug, seriesBase);

    return {
      overview: parsed.overview,
      series: enrichedSeries,
    };
  }

  if (seedSeries.length) {
    return {
      overview: [],
      series: await enrichProductSeries(slug, seedSeries),
    };
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
  const imageDir = productSeriesImageDirMap[slug]?.[series.code];
  if (!imageDir) return [fallbackImage];

  const folderPath = path.join(process.cwd(), "public", "images", "products", imageDir);
  if (!(await pathExists(folderPath))) return [fallbackImage];

  const files = await readdir(folderPath);
  const imageFiles = files
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name)))
    .sort((a, b) => a.localeCompare(b, "en"));
  if (!imageFiles.length) return [fallbackImage];

  return imageFiles.map((file) => `/images/products/${imageDir}/${encodeURIComponent(file)}`);
}
