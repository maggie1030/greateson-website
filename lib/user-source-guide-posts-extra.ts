/**
 * 选购指南第 3–5 篇：中文来自 articles-guide 对应 .md；英文为忠实翻译。
 */
import type { UserSourceGuidePost } from "./user-source-guide-posts";

export const userSourceGuidePostThickness: UserSourceGuidePost = {
  slug: "stainless-steel-thickness-selection-guide",
  category: "guide",
  title: {
    zh: "不锈钢装饰板【厚度选型】终极指南：天花、墙面、踢脚线到底用多厚？",
    en: "Ultimate Thickness Guide for Decorative Stainless Sheets: Ceilings, Walls, and Skirting — How Thick Should You Go?",
  },
  excerpt: {
    zh: "“厚度”是不锈钢装饰工程中最容易被忽视、却又最容易导致项目翻车（如不平整、加工机器损坏、复合透底）的关键参数。本文为您梳理了室内装修中天花、墙面、门套及踢脚线的推荐厚度标准，深入剖析“为什么太薄的板材无法加工”，并附上实用的重量与尺寸计算公式，帮您精准控本、避免工程瑕疵。",
    en: "Thickness is easy to overlook yet often drives failures: waviness, machine damage, honeycomb telegraphing. This guide summarizes recommended gauges for ceilings, walls, door frames, and skirting, explains why ultra-thin stock is risky to process, and gives practical weight and sizing formulas for cost control.",
  },
  publishedAt: "2026-03-27",
  readTime: { zh: "9 分钟阅读", en: "9 min read" },
  keywords: {
    zh: ["不锈钢装饰板厚度", "不锈钢板材厚度标准", "踢脚线厚度", "不锈钢重量计算公式", "蜂窝板面板厚度"],
    en: [
      "decorative stainless steel thickness",
      "stainless sheet thickness standard",
      "skirting thickness",
      "stainless steel weight formula",
      "honeycomb panel face thickness",
    ],
  },
  sections: [
    {
      heading: { zh: "1）行业趋势", en: "1) Market Trend" },
      paragraphs: [
        {
          zh: `过去在工程分包中，为了极致压缩材料成本，大量使用0.3mm甚至更薄的“纸片”不锈钢。然而，随着终端客户（甲方、业主）审美要求的提高，薄板在灯光下无处遁形的“波浪纹”、“马蹄印”以及一碰就凹陷的脆弱感，引发了海量的返工和客诉。目前的行业趋势正明显向着“足厚”、“硬挺”的方向发展。越来越多的设计师在图纸上强制标明实厚，高端项目不再妥协，宁可采用不锈钢蜂窝复合技术，也要确保大面宽金属装饰的绝对平整与硬朗质感。`,
          en: `Projects once chased lowest cost with 0.3 mm and thinner “paper” stainless. As owners raised visual standards, waviness, roller marks, and easy denting under lights drove massive rework. The market now favors full gauge and rigidity: drawings specify actual thickness, and premium jobs accept honeycomb-backed systems to keep large metal fields flat and crisp.`,
        },
      ],
    },
    {
      heading: { zh: "2）产品定义与核心参数", en: "2) Definitions and Core Parameters" },
      paragraphs: [
        {
          zh: `- 常规装饰板厚度范围：冷轧板（装饰用基材）的厚度通常在 0.3mm～3.0mm 之间。厚度超过3.0mm的通常属于热轧板（工业用胚料板，表面粗糙不适合直接做装饰面）。
- 常用尺寸规格：固定宽度为 1000mm、1219mm、1500mm。长度可根据客户要求定开（常见的有2000mm、2438mm、3048mm、3000mm等）。
- 质量（重量）计算公式（采购算价必备）： 不锈钢板重量（kg）= 长度（m）× 宽度（m）× 实厚（mm）× 密度（g/cm³）
  - 注：201和304的密度为 7.93；316的密度为 7.99；430的密度为 7.75。 (例：一张 1.219m × 2.438m × 1.0mm 的304不锈钢板，重量 = 1.219 × 2.438 × 1.0 × 7.93 ≈ 23.57 kg)`,
          en: `- Decorative cold-rolled sheet typically spans 0.3–3.0 mm. Above 3.0 mm is usually hot-rolled mill plate — too rough for direct decorative faces.
- Common widths: 1000, 1219, 1500 mm; length cut to order (e.g. 2000, 2438, 3048, 3000 mm).
- Weight (kg) = length (m) × width (m) × actual thickness (mm) × density (g/cm³). Use 7.93 for 201/304, 7.99 for 316, 7.75 for 430. Example: 1.219 × 2.438 × 1.0 × 7.93 ≈ 23.57 kg.`,
        },
      ],
    },
    {
      heading: {
        zh: "3）各部位适用场景厚度推荐（核心干货）",
        en: "3) Recommended Thickness by Application",
      },
      paragraphs: [
        {
          zh: `根据顺佳兴多年的一线加工与工程经验，我们总结出以下推荐厚度指南：
暂时无法在飞书文档外展示此内容`,
          en: `Based on Greateson’s field experience, we summarize thickness guidance below.
(The detailed table from the source document could not be displayed outside Feishu; please confirm zone-by-zone thickness with your supplier using the same criteria as your internal spec.)`,
        },
      ],
    },
    {
      heading: {
        zh: "4）选型建议：为什么我们强烈反对使用“超薄板”？",
        en: "4) Why We Strongly Discourage Ultra-Thin Sheets",
      },
      paragraphs: [
        {
          zh: `我们定义厚度在 0.3mm～0.5mm 之间的为“薄板”。虽然工厂能做，但我们极不建议客户在追求质感的区域使用薄板，原因如下：
1. 机器加工极易报废：太薄的板材在进行“8K精磨镜面”处理时，研磨机器的磨头很容易识别不到表面，经常导致卷入机器（卷板）、撞板，报废率极高。
2. 搬运损伤（马蹄印）：薄板如同纸张，在车间工人的搬运、上下机台中，极易因为受力不均在表面折出无法修复的“马蹄印”和折痕。
3. 质感极差：无法保证平整度（波浪形超过1mm就是残次品），安装上墙后显得非常廉价。`,
          en: `We treat 0.3–0.5 mm as “thin” stock. It can be made but is poor for quality zones:
1. 8K mirror polishing often grabs, rolls, or crashes thin sheets — very high scrap.
2. Handling leaves permanent roller marks and creases.
3. Flatness fails easily (>1 mm waviness is reject-grade) and looks cheap on the wall.`,
        },
      ],
    },
    {
      heading: { zh: "5）成本与交期参考", en: "5) Cost and Lead Time" },
      paragraphs: [
        {
          zh: `- 统一规格可提升效率：如果客户同一个订单中包含多种不同厚度、不同宽度的零散板材，且交期很赶，我们强烈建议客户统一厚度和宽度。因为小批量、多规格需要到处去“凑单”找合适的卷来开板，极其影响开板效率与交期。
- 费用计算直接与重量挂钩。增加厚度意味着直接增加了材料采购公斤数，但能大幅省去后期的维修和扯皮成本。`,
          en: `- Standardizing thickness and width speeds slitting and scheduling; many mixed specs force hunting coils and delay jobs.
- Cost tracks weight; thicker sheet raises upfront kg cost but cuts rework and disputes.`,
        },
      ],
    },
    {
      heading: { zh: "6）常见误区", en: "6) Common Misconceptions" },
      paragraphs: [
        {
          zh: `- 误区1：反正都要复合蜂窝板，面层的镜面不锈钢用0.5mm的就行了。 真相：镜面板极易透底！ 在蜂窝板高温高压复合时，如果面板薄于1.0mm，底部的六边形蜂窝芯网格会由于压力而反印在镜面上，造成不可逆的压痕。镜面复合必须1.0mm起步。
- 误区2：天花吊顶用薄板能减轻重量。 真相：减轻重量应该采用蜂窝复合技术，而不是牺牲单板厚度。如果没有木基层只有钢骨架，薄板吊顶受热胀冷缩影响，会呈现灾难性的波浪状变形。`,
          en: `- Myth 1: “Honeycomb lamination lets me use 0.5 mm mirror.” Truth: mirror telegraphs the core below 1.0 mm face — hex cells print through. Start mirror faces at 1.0 mm or more.
- Myth 2: “Thin ceiling sheet saves weight.” Truth: lighten with honeycomb structure, not thinner solid sheet; bare steel framing plus thin sheet waves badly with temperature.`,
        },
      ],
    },
    {
      heading: {
        zh: "7）质检案例：顺佳兴的严苛开板流程",
        en: "7) QC Case: Greateson Slitting Discipline",
      },
      paragraphs: [
        {
          zh: `决定板材最终平整度的，不仅是厚度，还有源头的开板质检。 在顺佳兴，我们每天下午6点前向甬金、张浦等大钢厂截单。次日在公仓开板时，质检人员会进行极其严格的表面排查：
- 检查是否有脱皮、焊点、沙眼、阴阳线。
- 防波浪纹：波浪起伏超过1mm直接判定为不合格，重新开板。
- 防水印：酸洗过程如果没有彻底风干，会出现水印。
- 如果板材后续要做8K镜面，质检人员还会携带专业磨砂机进行探伤检测。`,
          en: `Flatness depends on thickness and incoming QC. Greateson cuts orders to major mills before 6 p.m.; next-day slitting checks peeling, weld spots, pinholes, and streaking. Waviness over 1 mm is rejected. Water marks from incomplete drying are screened. Stock destined for 8K gets additional scratch/probe inspection.`,
        },
      ],
    },
    {
      heading: { zh: "结论与采购建议", en: "Conclusion" },
      paragraphs: [
        {
          zh: `选对厚度是保障不锈钢装饰工程质量的地基。切勿为了微小的材料差价而采用低于0.6mm的超薄板，最终导致的变形返工得不偿失。对于大面积、高要求的视觉中心（特别是镜面效果），牢记“增厚”或者“蜂窝复合”两大绝招。`,
          en: `Correct thickness is the foundation of quality. Do not chase tiny savings with sub-0.6 mm sheet — waviness rework costs more. For large visual fields, especially mirror, remember two tools: increase gauge or use honeycomb.`,
        },
      ],
    },
  ],
  faq: [
    {
      q: { zh: "Q1：不同钢厂的原材料厚度和质量有区别吗？", en: "Q1: Do mills differ in thickness and quality?" },
      a: {
        zh: "A1：有极大区别。追求极致高端定制必须选用酒钢、浦新、张浦，板面无可挑剔，但每吨贵5000-6000元。市面上304主流且性价比最高的是甬金。而宏旺、诚德等表面平整度稍逊一筹。",
        en: "A1: Yes — a lot. Top-tier mills cost more (roughly CNY 5–6k/t) with flawless surfaces; Yongjin is a common 304 value leader; others may trade some flatness.",
      },
    },
    {
      q: { zh: "Q2：超宽超长的板材好加工吗？", en: "Q2: Are extra-wide or extra-long sheets easy to process?" },
      a: {
        zh: "A2：很难。常规宽度是1000、1219、1500。最宽有2000mm的（需从无锡调货），但这种超宽卷技术不成熟，平整度差，只有304材质且厚度必须在1.5mm以上。长度超过4000mm属于超长板，越长加工难度越大，会加收高昂的超规格服务费。",
        en: "A2: Difficult. Standard widths 1000/1219/1500 mm; 2000 mm coils exist but are harder to keep flat — usually 304 and ≥1.5 mm. Beyond 4000 mm length adds cost and difficulty.",
      },
    },
    {
      q: { zh: "Q3：0.6mm的标称厚度，实厚真的有0.6吗？", en: "Q3: Is nominal 0.6 mm actually 0.6 mm?" },
      a: {
        zh: "A3：行业内存在“公差”和“下差”现象。为避免扯皮，采购时一定要明确是“足厚（实厚）”还是“标厚”。顺佳兴建议一切报价以千分尺实测的足厚为准。",
        en: "A3: Tolerance and under-gauge happen. Contract whether you mean nominal or full mic’d thickness; Greateson quotes on measured full gauge.",
      },
    },
    {
      q: { zh: "Q4：门套用0.5mm可以吗？", en: "Q4: Is 0.5 mm OK for door frames?" },
      a: {
        zh: "A4：不行。门套容易遭受行李箱、推车等硬物撞击，0.5mm太薄容易凹陷。推荐厚度为0.7mm～1.5mm。",
        en: "A4: No — door frames take impacts; 0.5 mm dents too easily. Prefer roughly 0.7–1.5 mm.",
      },
    },
    {
      q: { zh: "Q5：不锈钢的密度怎么算？", en: "Q5: Which density do I use?" },
      a: {
        zh: "A5：计算重量时，201和304的密度系数按 7.93 计算；316按 7.99 计算；430（不锈铁，不含镍）按 7.75 计算。",
        en: "A5: Use 7.93 for 201/304, 7.99 for 316, 7.75 for 430 in the weight formula.",
      },
    },
  ],
};

export const userSourceGuidePost304v201: UserSourceGuidePost = {
  slug: "how-to-identify-304-vs-201-stainless-steel",
  category: "guide",
  title: {
    zh: "拒绝被骗！4种超实用的方法教你快速辨别 304 与 201 不锈钢",
    en: "Do Not Get Fooled: Four Practical Ways to Tell 304 from 201 Stainless Steel",
  },
  excerpt: {
    zh: "201与304不锈钢在外观上极为相似，但在耐腐蚀性（含镍量）和价格上却有天壤之别。很多工地由于错将201用于潮湿环境，导致大面积生锈翻车。本文将为您揭秘4种最实用的材质辨别方法（包括火花法、药水法及光谱仪测试），并明确指出哪些场景千万不能使用201材质，帮您彻底避开装修材质造假的大坑。",
    en: "201 and 304 look alike but differ sharply in corrosion resistance (nickel) and price. Using 201 in wet sites rusts fast. Here are four practical checks — spark, test solution, and spectrometer — plus where 201 must never go.",
  },
  publishedAt: "2026-03-27",
  readTime: { zh: "10 分钟阅读", en: "10 min read" },
  keywords: {
    zh: ["304与201不锈钢的区别", "不锈钢辨别方法", "不锈钢生锈原因", "含镍量测试", "光谱仪测不锈钢"],
    en: ["304 vs 201 stainless", "stainless identification", "stainless rust causes", "nickel content test", "spectrometer stainless"],
  },
  sections: [
    {
      heading: {
        zh: "1）行业揭秘：为什么会有201与304的李鬼之争？",
        en: "1) Why 201 Is Often Passed Off as 304",
      },
      paragraphs: [
        {
          zh: `在不锈钢装饰行业，304是绝对的“黄金标准”，而201则是为了降低成本而诞生（以锰代镍）的“平替款”。由于两者的表面在经过打磨拉丝或镀钛着色后，肉眼几乎无法分辨，价格却相差数千元/吨。一些不良包工头或小作坊为了牟取暴利，常在看不见的地方（如基材、暗槽）使用201冒充304。一旦遇到潮湿气候或酸性洗涤剂，原本光鲜亮丽的金属墙面就会在半年内长出难看的铁锈，造成难以挽回的损失。`,
          en: `304 is the gold standard; 201 is a lower-cost manganese-heavy substitute. After brushing or coloring they look alike while priced thousands apart per ton. Bad actors hide 201 in substrates or recesses. Humidity or acidic cleaners then rust the wall within months.`,
        },
      ],
    },
    {
      heading: {
        zh: "2）核心差异：耐腐蚀性与“含镍量”的真相",
        en: "2) Core Difference: Corrosion and Nickel Content",
      },
      paragraphs: [
        {
          zh: `不锈钢之所以“不锈”，主要靠的是**铬（Cr）提供基本保护，而镍（Ni）**则是极大增强耐腐蚀性并改善材料延展性的关键贵金属元素。
- 201不锈钢：含镍量仅在 3.5%~5.5% 之间（甚至有些劣质201含镍量极低只有0.21%左右）。防锈能力较差。此外，201内部还分为J1到J5系列（含碳量J5>J2>J3>J1>J4），其中J4含铜最高、最柔软适合拉伸；而市面上最多的是J2（极硬，不能刨槽折弯，容易断裂）。
- 304不锈钢：含镍量高达 8%~10.5%。对大多数酸性介质和有机酸具有优异的耐腐蚀性能。在普通的户外大气环境中，即使不擦洗，304也能保持3-4年不生锈。
- 补充说明（316不锈钢）：含镍10%~14%，且添加了钼（Mo），能够抵抗海水和含氯离子的极度腐蚀环境。`,
          en: `Chromium gives baseline protection; nickel boosts corrosion resistance and ductility.
- 201: ~3.5–5.5% Ni (some junk near 0.2%). Grades J1–J5 differ; J4 is stretchier; J2 is common, hard, poor for grooving/bending; J5 is worst for brittleness.
- 304: ~8–10.5% Ni — strong in most weak acids; often 3–4 years clean outdoors without care.
- 316: ~10–14% Ni plus Mo for marine / chloride exposure.`,
        },
      ],
    },
    {
      heading: { zh: "3）适用场景排雷：哪里绝对不能用201？", en: "3) Where 201 Must Not Be Used" },
      paragraphs: [
        {
          zh: `- 可以放心用201的场景：空气极为干燥的北方室内、无腐蚀性的商场内部、要求不高的家具框架与普通室内装饰。
- 【绝对禁止】使用201的场景：
  1. 厨房与浴室/洗手间：长期充满水蒸气和洗涤化学品，201极易生锈。
  2. 别墅地下室：常年阴冷潮湿，必须使用304。
  3. 海边城市及户外：空气中盐分（氯离子）和水分极高，甚至需要动用316材质，304勉强应对，201绝对不可用。
  4. 强腐蚀性厂区或有酸雨的地区。`,
          en: `- 201 may be acceptable in very dry northern interiors, benign mall zones, and low-duty furniture frames.
- Never use 201 for:
  1. Kitchens and baths — steam and cleaners rust it fast.
  2. Basements — damp; use 304.
  3. Coastal / outdoor chloride air — consider 316; 304 marginal; 201 no.
  4. Aggressive industrial or acid-rain environments.`,
        },
      ],
    },
    {
      heading: {
        zh: "4）4种超实用的辨别方法（实操指南）",
        en: "4) Four Practical Identification Methods",
      },
      paragraphs: [
        {
          zh: `面对真假难辨的板材，我们在验货时可以通过以下4种方法进行鉴别：
- 方法一：表面色泽观察法（最简单但易受干扰） 未经表面复杂处理的原板（如2B面），201表面因为含锰较高，通常呈现较暗的哑光色泽；而304表面则更加透亮、白皙。但此法对做了彩色电镀或深度拉丝处理的板材完全无效。
- 方法二：不锈钢测试药水滴定法（工地最常用） 在网上或五金店购买专用的不锈钢测试药水，滴在板材表面。根据药水变色的时间深浅来对比色卡。变红速度越快、颜色越深，说明含镍量越低（是201）；长时间不变色或微变色的则是304。注意：市面上有假药水，存在误判风险。
- 方法三：打磨机火花辨别法（老工匠绝活） 用砂轮打磨机切磨不锈钢表面观察火花。因为201含碳量高、杂质多且硬，打磨时产生的火花大、分叉多；而304材质较软、纯净度高，打磨时火花小、线条流畅单一。
- 方法四：光谱仪成分分析法（最权威、最精准） 这是顺佳兴质检团队采用的终极方法。使用便携式光谱仪，对着板面打一枪，屏幕上立刻显示各种化学元素的精准百分比。304打出的含镍量在 7.9%~8.3% 以上；而劣质201测出的镍含量可能只有 0.2% 左右。数据不会说谎。`,
          en: `Four checks:
1) Raw 2B color — 201 often duller; 304 brighter — useless after heavy PVD/brush.
2) Test drops — faster/deeper red means lower nickel (201 risk); fake reagents exist.
3) Grinder sparks — 201: big, branched; 304: smaller, cleaner streaks (skilled operator).
4) Portable spectrometer — authoritative; 304 Ni often ~7.9–8.3%+; junk 201 may read ~0.2% Ni.`,
        },
      ],
    },
    {
      heading: {
        zh: "5）采购成本与质量避坑参考",
        en: "5) Procurement Cost and Quality Traps",
      },
      paragraphs: [
        {
          zh: `- 如果有厂家向您报出的“304”价格低得离谱，甚至逼近201的市场价，那么几乎100%是材质造假或者厚度严重“下差”（标厚1.0mm，实测只有0.6mm）。
- 即使是真正的201，您也要提防买到最差的“J5”料。由于J5含铜量极低、含碳极高，板材硬且脆，工人一旦进行折弯或刨槽，边缘就会当场爆裂断开，导致整块板报废。`,
          en: `- Absurdly cheap “304” is usually fake grade or severe under-gauge (e.g. labeled 1.0 mm, mic’d 0.6 mm).
- Even real 201: avoid worst J5 — low Cu, high C, brittle breaks on bend or groove.`,
        },
      ],
    },
    {
      heading: {
        zh: "6）常见误区：不锈钢为什么也会生锈？",
        en: "6) Myth: Why Can “Stainless” Still Rust?",
      },
      paragraphs: [
        {
          zh: `- 误区：只要是304不锈钢，就永远不会生锈。 真相：不锈钢不是“绝对不生锈”，而是“不易生锈”。如果不锈钢接触到了强酸、强碱环境，其表面的钝化保护膜就会被彻底击穿。最常见且最致命的工地场景是：保洁阿姨使用“巴氏消毒液”或者用来洗瓷砖的“水泥宝（强酸）”直接去擦洗不锈钢表面！ 或者施工现场的酸性结构胶溢出长时间未清理。这些操作会导致即便是顶级的304不锈钢也会在几天内锈迹斑斑。`,
          en: `- Myth: 304 never rusts. Truth: it resists rust, not immune. Strong acids/alkalis break the passive film. Field killers: bleach-like cleaners, acidic tile cleaners (“cement removers”), or acidic sealant left on the surface — even top 304 can spot-rust in days.`,
        },
      ],
    },
    {
      heading: {
        zh: "7）项目案例：顺佳兴的严选材质承诺",
        en: "7) Case: Greateson’s Grade Commitment",
      },
      paragraphs: [
        {
          zh: `顺佳兴在原材料入库与出厂环节，均配备了高精度的便携式光谱仪。我们向所有工程客户承诺：图纸标定304，我们交付的板材光谱实测含镍量绝不低于国家标准。我们曾协助某五星级酒店排查了前期别家供应商混用的201劣质板材，通过光谱仪一秒让“李鬼”现形，挽救了浴室区域巨大的后期维护灾难。`,
          en: `Greateson spectrometers incoming and outgoing stock: if drawings say 304, delivered Ni meets national minimums. We helped a five-star hotel expose mixed 201 from a prior supplier — seconds on the gun, avoiding bathroom maintenance disaster.`,
        },
      ],
    },
    {
      heading: { zh: "结论与采购建议", en: "Conclusion" },
      paragraphs: [
        {
          zh: `“一分钱一分货”在不锈钢材质上体现得淋漓尽致。为了长久的空间美观与工程安全，在选购时请务必避开潮湿环境使用201的雷区。对于重要项目验收，不要轻信厂家的口头承诺，请直接使用测试药水或要求出具光谱仪检测视频。`,
          en: `You get what you pay for in stainless. Keep 201 out of wet zones. For critical acceptance, do not trust words alone — use test solution or demand spectrometer video proof.`,
        },
      ],
    },
  ],
  faq: [
    {
      q: {
        zh: "Q1：吸铁石能吸住的就是假不锈钢（201），吸不住的才是304，对吗？",
        en: "Q1: If a magnet sticks, is it fake 201; if not, 304?",
      },
      a: {
        zh: "A1：绝对错误！ 这是一个流传极广的伪科学。304是奥氏体不锈钢，本身无磁性，但在经过冷加工（如冲压、拉伸、折弯）后，局部结构发生变化，会产生微弱的磁性。而400系列不锈铁（完全不含镍）磁性极强。用磁铁根本无法准确判断是201还是304。",
        en: "A1: Wrong — widespread myth. 304 is austenitic and normally non-magnetic but cold work can add weak magnetism; 400-series chrome steel is strongly magnetic. Magnets cannot separate 201 from 304 reliably.",
      },
    },
    {
      q: { zh: "Q2：家里装修厨房，不锈钢橱柜该选什么材质？", en: "Q2: What grade for kitchen cabinets?" },
      a: {
        zh: "A2：必须选304。厨房有水、盐、酱油等弱腐蚀性物质，201时间久了必生锈。",
        en: "A2: Use 304 — kitchens have moisture, salt, and condiments; 201 will rust over time.",
      },
    },
    {
      q: { zh: "Q3：201和304的重量一样吗？", en: "Q3: Same weight for 201 and 304?" },
      a: {
        zh: "A3：完全一样。两者的密度都在 7.93 g/cm³。不能通过称重来分辨。",
        en: "A3: Same density ~7.93 g/cm³ — weighing does not distinguish them.",
      },
    },
    {
      q: { zh: "Q4：为什么有的201折弯容易断，有的不会？", en: "Q4: Why does some 201 crack when bent and some not?" },
      a: {
        zh: "A4：201内部分为J1到J5等不同等级。J4含铜高，延展性好，适合做复杂的深拉伸（如不锈钢水槽/锅具）；市面上多是J2板，只适合90度普通折弯，不能拉伸；如果是极差的J5，硬度高、延展性差，折弯或刨槽极其容易断裂。",
        en: "A4: 201 has J1–J5 families — J4 is stretchier for deep draws; J2 is common for simple 90° bends only; J5 is brittle and cracks on bend or groove.",
      },
    },
    {
      q: {
        zh: "Q5：不锈钢沾上了水泥宝生锈了怎么补救？",
        en: "Q5: Acidic tile cleaner caused rust — can I fix it?",
      },
      a: {
        zh: "A5：如果是表面轻微的浮锈，可以使用专门的“不锈钢除锈膏”擦拭，然后涂抹防锈油保护。但如果酸液已经深度腐蚀穿透基材坑洞，且表面原本有镀色或镜面处理，通常只能整板拆除更换，无法原样修复。",
        en: "A5: Light surface rust: stainless rust paste then protective oil. Deep pits through substrate or ruined PVD/mirror usually means replace the panel.",
      },
    },
  ],
};

export const userSourceGuidePostBending: UserSourceGuidePost = {
  slug: "stainless-steel-bending-edge-cracking-prevention-guide",
  category: "guide",
  title: {
    zh: "折弯爆边、泛白怎么破？彩色不锈钢加工与安装防损指南",
    en: "Fighting Edge Cracking and Whitening: A Damage-Prevention Guide for Colored Stainless Fabrication and Installation",
  },
  excerpt: {
    zh: "“板子一折就爆漆漏白”，这是无数幕墙施工队伍和定制加工厂的至暗时刻。本文直击不锈钢加工最痛点——折弯爆边与泛白问题。深度剖析涂层拉伸应力、板材厚度与刨槽深度的物理关系，提供涵盖纳米色油、仿古镀铜、水波纹板的全套“先排险后加工”防损指南，助您彻底终结高昂的返工成本。",
    en: "“One bend and the paint blows white” is a nightmare for cladding crews and shops. This guide targets edge cracking and whitening — stress, thickness, and V-groove depth — for nano color oil, antique copper, and water-ripple sheets so you stop paying for scrap.",
  },
  publishedAt: "2026-03-27",
  readTime: { zh: "9 分钟阅读", en: "9 min read" },
  keywords: {
    zh: ["不锈钢折弯爆边", "折弯泛白原因", "不锈钢刨槽工艺", "彩色不锈钢加工", "不锈钢折边裂开"],
    en: [
      "stainless bend edge crack",
      "bending whitening cause",
      "stainless V-grooving",
      "colored stainless fabrication",
      "bend line cracking",
    ],
  },
  sections: [
    {
      heading: {
        zh: "1）行业痛点：折弯加工处的“血泪史”",
        en: "1) Field Pain: The Bend Zone Nightmare",
      },
      paragraphs: [
        {
          zh: `无论是酒店大堂的门套包边，还是高端住宅的踢脚线收口，不锈钢板材从“平面”转变为“立体构件”，折弯（深折、90度折）是必经之路。然而，现场安装师傅最怕遇到的噩梦就是：原本完美无瑕的彩色面板，在压模机下一折，折角处瞬间出现一条刺眼的白线（泛白），严重的甚至像蛋壳一样崩裂掉漆（爆边）。这不仅导致整块昂贵的材料报废，严重拖慢工期，更是引发现场施工方与板材供应商之间无休止的扯皮。`,
          en: `Door frames, skirting, and trims all need bends. The fear: a perfect colored panel folds once and a white line appears — or the coating shatters like eggshell. Scrap, delay, and endless blame between installer and supplier follow.`,
        },
      ],
    },
    {
      heading: {
        zh: "2）爆边与泛白的核心元凶解析",
        en: "2) Root Cause: Substrate vs Coating Stretch Mismatch",
      },
      paragraphs: [
        {
          zh: `要解决问题，必须先理解泛白与爆边的物理机制。问题的核心在于**“基材延展性与表面涂层延展性的不匹配”**。
- 厚度因素：金属越厚，折弯时外部弧面的张力拉伸就越大。超过1.2mm的厚板在直接进行90度折弯时，其表皮拉伸程度远超薄板。
- 涂层因素（纳米色油首当其冲）：纳米色油（漆膜）不具备金属的延展性。当底层厚钢板被强力拉伸时，漆膜无法同步延伸，瞬间被拉扯撕裂。肉眼看到的“泛白”，正是漆膜裂开后露出底部的银白色不锈钢本体。客户常误以为是“一折就掉漆”，其实是漆膜被暴力扯破了。
- 硬度因素：为了防刮花，有些油漆添加了过多的色金（粉末）达到6H或8H硬度。漆面越硬就越脆，折弯时爆裂的概率成倍上升。`,
          en: `Whitening is cracked paint exposing silver steel; edge blowout is coating fracture.
- Thicker metal stretches more on the outer radius; >1.2 mm 90° bends strain the skin far more.
- Nano color oil cannot stretch like metal — it tears when the substrate elongates.
- Ultra-high hardness (6H/8H) from excess pigment makes film brittle and doubles crack odds.`,
        },
      ],
    },
    {
      heading: {
        zh: "3）核心防损利器：刨槽工艺的黄金法则",
        en: "3) The Fix: V-Grooving Rules",
      },
      paragraphs: [
        {
          zh: `要彻底解决厚板与脆弱涂层的折弯难题，行业内最有效、最不可省的工序就是：V型刨槽。
- 原理：在折弯加工前，利用刨槽机在不锈钢板材的背面（非装饰面），沿着即将折弯的线，刨出一条V型的沟槽。
- 黄金标准：刨槽的深度通常控制在板材总厚度的 1/3 左右。
- 作用：通过刨去部分厚度，极大地释放了金属折弯时的反弹张力，使得折角更小、更锐利（达到完美的90度直角），同时由于折边处的剩余金属变薄，表皮拉伸度急剧下降，漆膜随之安全过渡，完美杜绝爆边和泛白。`,
          en: `Back-side V-grooving before bending is the standard cure.
- Machine a V on the non-show face along the bend line.
- Depth ≈ one-third of total thickness.
- Less metal to stretch means less outer-surface strain — coating survives; corners get crisper 90°s.`,
        },
      ],
    },
    {
      heading: {
        zh: "4）三大高危板材的折弯加工专项指南",
        en: "4) Three High-Risk Sheet Types",
      },
      paragraphs: [
        {
          zh: `除了常规纳米色油厚板需要刨槽外，以下三种特殊板材在加工时必须遵循专项规范：
A. 仿古镀铜做旧板（如绿锈、铜绿）
- 特性：部分做旧效果是依靠特殊的药水和油漆结合完成的，表面结晶层较厚且脆。
- 操作指令：严禁直接折弯！必须提前规划好折弯线，在背面进行刨槽减薄。并且在加工机台的操作中要求拉伸度极低，轻压成型。
B. 水波纹压花板
- 特性：表面凹凸不平且充满不规则波浪，如果直接进折弯机，刀口受力不均，折弯线会像蛇一样弯曲，且表面突起处极易压伤爆裂。
- 操作指令：加工顺序决不能错！必须“先刨槽 -> 再进行水波纹冲压 -> 最后再沿着槽线进行折弯”。这就要求图纸尺寸极其精准，容错率为零。
C. 热转印木纹/大理石纹板
- 特性：表层是高温固化的塑粉层，厚度达4-7c，附着力强但延展极限有限。
- 操作指令：严禁使用超过 1.2mm 厚度的不锈钢作为热转印基材。只要厚度控制在0.4-1.2mm的安全红线内，常规折弯非常安全。超厚必爆。`,
          en: `A) Antique copper patina — thick brittle surface layer: never dead-bend; groove back, low-strain forming.
B) Water ripple — uneven surface: sequence must be groove → emboss → bend along groove; zero layout tolerance.
C) Heat-transfer wood/stone — 4–7c powder skin: never exceed 1.2 mm substrate; 0.4–1.2 mm is the safe band; thicker fails.`,
        },
      ],
    },
    {
      heading: { zh: "5）成本与交期考量", en: "5) Cost and Schedule" },
      paragraphs: [
        {
          zh: `- 刨槽是一道需要精密切割的独立工序，必然会增加每米的刨槽加工费（约几元一米）。很多工程方为了省下这笔微薄的加工费选择直接折弯，结果报废整块价值数百元的板材。这是一笔极不划算的账。
- 由于刨槽需要准确的展开尺寸，它要求现场实测数据极其准确，并在下单前完成图纸的深化拆解，这可能在前期沟通时增加1-2天的时间成本。`,
          en: `- Grooving adds a few CNY per meter — skipping it to save pennies often scraps panels worth hundreds.
- Accurate developed dimensions and detailing add 1–2 days upfront but prevent disasters.`,
        },
      ],
    },
    {
      heading: {
        zh: "6）常见误区：爆边就一定是厂家的油漆劣质吗？",
        en: "6) Myth: Cracking Always Means Bad Paint?",
      },
      paragraphs: [
        {
          zh: `真相：当现场出现爆边泛白时，施工队习惯性将锅甩给材料供应商：“你们的油漆太差了，一碰就掉”。 事实上，只要是采用了合格水性漆及正确工艺（如2B电解+钝化处理）的板材，其附着力完全符合国家标准。违背物理规律的“厚板直接死折”才是罪魁祸首。遇到此类争议，有经验的加工厂会检查断裂面的微观状态，确认是否是应力撕裂而非漆膜起皮。`,
          en: `Teams blame “bad paint,” but compliant waterborne systems with 2B electrolytic clean + passivation meet adhesion standards. Thick-sheet dead bends break physics — inspect fracture to see stress tear vs delamination.`,
        },
      ],
    },
    {
      heading: {
        zh: "7）补救措施与质检案例",
        en: "7) Repairs and QC Notes",
      },
      paragraphs: [
        {
          zh: `万一在极其刁钻的施工现场，局部不可避免地出现了轻微爆漆或泛白，该如何拯救？
- 厂家修补方案：顺佳兴在交付大批量纳米色油或做旧板材时，会根据客户需求附赠一小瓶同色号的原厂修补漆。安装师傅在收口完毕后，用细软毛刷进行点补修复，可最大程度遮盖泛白瑕疵。但对于深冲破裂的大面积损坏，只能重新下料加工。`,
          en: `Minor whitening: Greateson often ships matched touch-up bottles for nano or antique jobs — fine brush after install. Deep tears or large areas need new material.`,
        },
      ],
    },
    {
      heading: { zh: "结论与采购建议", en: "Conclusion" },
      paragraphs: [
        {
          zh: `“防患于未然”是处理彩色不锈钢折弯问题的唯一解法。牢记两大铁律：热转印不超1.2mm，厚板上漆必须背面刨槽。永远不要为了节省几块钱的刨槽加工费，去挑战涂层的物理极限。专业的设计排料与合规的加工指令，才是保障项目完美落地的利器。`,
          en: `Prevention only: heat-transfer ≤1.2 mm base; thick coated sheet gets back groove. Never skip a few CNY of grooving to violate coating physics — good layout and process notes save the job.`,
        },
      ],
    },
  ],
  faq: [
    {
      q: {
        zh: "Q1：0.6mm薄板喷了纳米色油，折弯需要刨槽吗？",
        en: "Q1: Must I groove 0.6 mm nano-coated sheet to bend?",
      },
      a: {
        zh: "A1：通常不需要。薄板的折弯延展应力很小，只要不使用极端锐角的死折，合格的纳米漆膜足以承受0.6mm的变形拉伸。",
        en: "A1: Usually no — low strain on thin stock; avoid razor-tight dead folds and compliant film holds.",
      },
    },
    {
      q: {
        zh: "Q2：电镀板（如PVD黑钛、玫瑰金）厚板折弯容易爆吗？",
        en: "Q2: Do thick PVD sheets crack when bent?",
      },
      a: {
        zh: "A2：极少发生。PVD是金属离子的物理气相沉积，膜层只有1-3微米，且属于金属共生体，拥有与不锈钢基材几乎等同的绝佳延展性，非常适合做复杂的折弯深冲。",
        en: "A2: Rare — 1–3 µm metallic PVD stretches with the substrate, good for complex bends.",
      },
    },
    {
      q: {
        zh: "Q3：为什么有些201材质即使用很薄的板，折弯也会断裂？",
        en: "Q3: Why does some thin 201 still snap when bent?",
      },
      a: {
        zh: "A3：这是基材本身的质量问题！市面上流通的大量低价201不锈钢属于“J5”等级。由于J5含铜量极低、含碳量偏高，导致板材既硬且脆。一旦进行折边或刨槽，金属内部结构直接断裂崩开。采购时切忌贪图极其反常的低价。",
        en: "A3: Junk J5-grade 201 — low copper, high carbon, brittle; bends or grooves snap. Avoid absurd low prices.",
      },
    },
    {
      q: {
        zh: "Q4：水波纹先刨槽再冲压，刨槽的位置会变形吗？",
        en: "Q4: Does embossing after grooving distort the groove?",
      },
      a: {
        zh: "A4：会有轻微影响，但这考验的是工厂的排版和机台调校能力。专业的不锈钢深加工中心在冲压时会避开槽线或控制压力，保证最终折角的笔挺度。",
        en: "A4: Slight risk — skilled shops control pressure and layout to keep corners straight.",
      },
    },
    {
      q: {
        zh: "Q5：不锈钢折弯能做到无R角（绝对的直角）吗？",
        en: "Q5: Can bends be perfectly square with no radius?",
      },
      a: {
        zh: "A5：不刨槽直接折弯一定会产生一个R角（圆弧角），板越厚R角越大。只有通过背面深刨槽，大幅削弱拐角处厚度，才能折出极其锐利的高级感“无R角（清角）”效果。",
        en: "A5: Ungrooved bends always show radius — thicker = larger R. Deep back grooving thins the corner for a sharp, near-zero-radius look.",
      },
    },
  ],
};

export const userSourceGuidePostsExtra = [
  userSourceGuidePostThickness,
  userSourceGuidePost304v201,
  userSourceGuidePostBending,
];
