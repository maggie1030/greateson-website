import type { Locale } from "./i18n";

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
  {
    slug: "stainless-steel-etching-photochemical-vs-silk-screen-guide",
    category: "guide",
    title: {
      zh: "不锈钢蚀刻工艺终极指南：感光蚀刻 vs 丝印蚀刻，到底该选哪一种？",
      en: "Ultimate Stainless Steel Etching Guide: Photochemical vs Silk-Screen Etching",
    },
    excerpt: {
      zh: "针对电梯轿厢、酒店金属壁画等高精度项目，本文系统拆解感光蚀刻与丝印蚀刻的精度、深度、模具成本与交期差异，帮助您在拼接效果与预算之间做出正确决策。",
      en: "For high-precision applications such as elevator interiors and hotel metal murals, this guide compares photochemical and silk-screen etching in precision, depth, tooling cost, and lead time so you can choose the right process for both visual quality and budget control.",
    },
    publishedAt: "2026-03-27",
    readTime: {
      zh: "9 分钟阅读",
      en: "9 min read",
    },
    keywords: {
      zh: [
        "不锈钢蚀刻工艺",
        "感光蚀刻",
        "丝印蚀刻",
        "电梯门花板",
        "不锈钢多色蚀刻",
      ],
      en: [
        "stainless steel etching",
        "photochemical etching",
        "silk-screen etching",
        "elevator decorative etching panel",
        "multi-color stainless steel etching",
      ],
    },
    sections: [
      {
        heading: {
          zh: "行业揭秘：蚀刻如何在金属上“雕刻”细节",
          en: "Industry Insight: How Etching Creates Fine Metal Details",
        },
        paragraphs: [
          {
            zh: "不锈钢蚀刻并非机械切削，而是化学减材工艺。通过在板面形成抗腐蚀保护层，再将裸露区域送入酸性蚀刻线腐蚀，最终获得稳定的凹凸纹理。该工艺广泛用于电梯门板、装饰花板、标识铭牌及高端背景墙。",
            en: "Stainless steel etching is not mechanical carving, but a chemical subtractive process. A corrosion-resistant mask protects selected areas while exposed metal is chemically etched to form permanent relief patterns. It is widely used for elevator door panels, decorative screens, signage, and premium feature walls.",
          },
        ],
      },
      {
        heading: {
          zh: "核心对比：感光蚀刻 vs 丝印蚀刻",
          en: "Core Comparison: Photochemical vs Silk-Screen Etching",
        },
        paragraphs: [
          {
            zh: "感光蚀刻通过高精度胶片曝光固化油墨，边缘锐利、线条完整，适合微细图案与高精度拼接；丝印蚀刻通过网版漏印形成保护层，适合批量生产，但在极细线条边缘更容易出现锯齿与微变形。",
            en: "Photochemical etching uses high-precision film exposure to cure the resist, delivering sharp edges and stable micro-line details ideal for premium custom work. Silk-screen etching uses mesh-based printing for high-volume production but is more likely to show micro-jagged edges or slight deformation on very fine patterns.",
          },
          {
            zh: "深度方面，感光蚀刻可承受更长时间腐蚀，适合深蚀刻和后续填色；丝印工艺通常在约15c（0.15mm）以内更稳定，超深加工容易破坏保护层并造成花板。",
            en: "In etch depth, photochemical processes tolerate longer etching and are better for deep-relief applications with paint filling. Silk-screen etching is generally more stable around 15c (0.15mm) or below; deeper etching increases the risk of mask failure and surface defects.",
          },
        ],
      },
      {
        heading: {
          zh: "适用场景：什么时候必须选感光，什么时候选丝印",
          en: "Use Cases: When to Choose Photochemical or Silk-Screen",
        },
        paragraphs: [
          {
            zh: "当项目涉及大幅拼接壁画、跨板线条对位或超宽板（如1.5米宽）时，应优先感光蚀刻，以保证跨板拼接精度与视觉连续性。对于单板图案较简单、订单量大的标准化门花板，丝印蚀刻在成本和效率上更有优势。",
            en: "If your project involves large mural splicing, cross-panel line alignment, or extra-wide sheets (such as 1.5m width), photochemical etching is the safer choice for seam precision and visual continuity. For simpler single-panel patterns and large batch quantities, silk-screen etching usually provides better cost efficiency and throughput.",
          },
        ],
      },
      {
        heading: {
          zh: "工艺叠加：蚀刻与电镀、做旧、填色组合",
          en: "Process Stacking: Etching with PVD, Antique Finish, and Paint Fill",
        },
        paragraphs: [
          {
            zh: "高端项目常将蚀刻与其他表面工艺结合使用，例如蚀刻后PVD镀色、蚀刻后水镀真铜并药水做旧，或在深蚀刻槽内手工填色。对于多色填漆方案，建议蚀刻深度至少达到15c以上，确保附着与长期稳定性。",
            en: "Premium projects often combine etching with other finishes, such as post-etch PVD coloring, water-plated real copper with antique oxidation, or hand-applied multi-color paint in deep etch grooves. For paint-filled graphics, etch depth should typically be 15c or above for reliable adhesion and long-term stability.",
          },
        ],
      },
      {
        heading: {
          zh: "模具成本与交期：如何做预算决策",
          en: "Tooling Cost and Lead Time: How to Budget Correctly",
        },
        paragraphs: [
          {
            zh: "感光胶片成本较低，适合定制化、低重复订单；丝印网板开模成本更高，但可长期复用，适合长期批量产品。若项目图案变化频繁、追求高精细，感光更稳；若图案固定且订单连续，丝印更具规模化优势。",
            en: "Photochemical film tooling is relatively low-cost and suitable for customized, low-repeat projects. Silk-screen tooling requires higher initial setup but offers strong reuse value for continuous volume production. If patterns change frequently or require ultra-fine detail, photochemical is more reliable; if patterns are fixed and recurring, silk-screen scales better.",
          },
        ],
      },
      {
        heading: {
          zh: "常见误区与采购建议",
          en: "Common Misconceptions and Procurement Advice",
        },
        paragraphs: [
          {
            zh: "蚀刻并非越深越好。过深蚀刻会显著增加时间与成本，并可能导致侧蚀扩孔、线条发糊。装饰类应用通常控制在5c-15c更平衡。若需深蚀刻或高精度细线，建议优先304/316并提交CAD、AI、CDR等矢量文件，避免JPEG类位图直接出模造成精度风险。",
            en: "Deeper etching is not always better. Excessive depth raises cost and lead time while increasing side-etch risk that can blur fine lines. For most decorative projects, 5c-15c is a balanced range. For deep or high-detail etching, use 304/316 and provide vector files (CAD, AI, CDR) instead of JPEG bitmaps to prevent tooling precision issues.",
          },
          {
            zh: "结论：感光蚀刻是高精度、无缝拼接与复杂图文的优先方案；丝印蚀刻是大批量、标准化图案的高性价比方案。根据拼接要求、图案精度与订单规模做工艺匹配，才能得到最佳交付质量。",
            en: "Conclusion: Photochemical etching is the first choice for high precision, seamless splicing, and complex artwork, while silk-screen etching is the cost-effective option for standardized high-volume patterns. Matching process selection to seam requirements, detail complexity, and order scale is the key to high-quality delivery.",
          },
        ],
      },
    ],
    faq: [
      {
        q: {
          zh: "蚀刻可以直接做出彩色效果吗？",
          en: "Can etching itself produce color?",
        },
        a: {
          zh: "不能。蚀刻本身只形成凹凸纹理，彩色效果需要叠加PVD镀色、做旧处理或手工填色。",
          en: "No. Etching creates relief texture only. Color requires additional processes such as PVD coating, antique finishing, or manual paint filling.",
        },
      },
      {
        q: {
          zh: "丝印蚀刻为什么通常不建议做太深？",
          en: "Why is deep etching generally not recommended for silk-screen processes?",
        },
        a: {
          zh: "丝印保护层耐腐蚀时间有限，过深会导致保护层失效，出现花板或边缘失真。",
          en: "The silk-screen resist has limited chemical endurance. Excessive depth can break down the mask and cause surface defects or edge distortion.",
        },
      },
      {
        q: {
          zh: "201材质可以用于精密感光蚀刻吗？",
          en: "Can grade 201 be used for precision photochemical etching?",
        },
        a: {
          zh: "不建议。精密蚀刻更推荐304或316，以降低过腐蚀和废品风险。",
          en: "It is not recommended. For precision work, 304 or 316 is preferred to reduce over-etching risk and reject rates.",
        },
      },
      {
        q: {
          zh: "薄板做深蚀刻会有什么问题？",
          en: "What happens if deep etching is done on thin sheets?",
        },
        a: {
          zh: "会显著削弱板材刚性，容易变形甚至出现背面印痕。深蚀刻建议使用更厚基材。",
          en: "It significantly weakens sheet rigidity and may cause deformation or back-side telegraphing. Deep etching should use thicker base material.",
        },
      },
      {
        q: {
          zh: "客户提供JPEG图能直接开模吗？",
          en: "Can a JPEG image be used directly for tooling?",
        },
        a: {
          zh: "通常不行。建议提供CAD、AI、CDR等矢量文件，复杂图像需先矢量化处理。",
          en: "Usually no. CAD, AI, or CDR vector files are recommended; complex images should be vectorized before tooling.",
        },
      },
    ],
  },
  {
    slug: "pvd-vs-nano-color-oil-stainless-steel-coloring",
    category: "guide",
    title: {
      zh: "不锈钢颜色加工的秘密：PVD真空电镀与纳米色油，到底有什么本质区别？",
      en: "Stainless Steel Color Finishing Secrets: PVD Vacuum Coating vs Nano Color Oil",
    },
    excerpt: {
      zh: "同样的青古铜外观，价格和可靠性却可能相差巨大。本文从工艺原理、质感表现、耐候性与折弯风险四个维度，帮您快速判断PVD与纳米色油的正确应用边界。",
      en: "The same bronze-looking finish can vary drastically in cost and reliability. This guide compares PVD and nano color oil across process mechanism, visual texture, weather resistance, and bending risk to define the right use case for each.",
    },
    publishedAt: "2026-03-27",
    readTime: {
      zh: "8 分钟阅读",
      en: "8 min read",
    },
    keywords: {
      zh: [
        "不锈钢彩色工艺",
        "PVD与纳米色油区别",
        "不锈钢电镀掉色",
        "折弯爆边泛白",
        "不锈钢防指纹",
      ],
      en: [
        "stainless steel color finishing",
        "PVD vs nano color oil",
        "stainless steel coating fade",
        "bending edge cracking whitening",
        "anti-fingerprint stainless steel",
      ],
    },
    sections: [
      {
        heading: {
          zh: "行业揭秘：为什么“同色”报价差这么多",
          en: "Industry Insight: Why Similar Colors Have Very Different Prices",
        },
        paragraphs: [
          {
            zh: "在彩色不锈钢项目中，表面看起来相近的颜色，可能来自完全不同的技术路线。PVD真空电镀偏向高端金属质感与长期稳定，纳米色油偏向高色彩自由度与成本效率。若工艺选错，常见后果是折弯爆边、室外褪色或大面积返工。",
            en: "In colored stainless steel projects, similar visual colors may come from fundamentally different process routes. PVD vacuum coating focuses on premium metallic texture and long-term stability, while nano color oil emphasizes color flexibility and cost efficiency. A wrong process choice can lead to edge cracking at bends, outdoor fading, and expensive rework.",
          },
        ],
      },
      {
        heading: {
          zh: "核心差异：金属镀膜 vs 漆膜涂层",
          en: "Core Difference: Metallic Deposition vs Paint Film Coating",
        },
        paragraphs: [
          {
            zh: "PVD通过物理气相沉积在基材表面形成超薄金属膜层（通常1-3微米），能够保留底层金属纹理和光泽，延展性更好，适合深加工构件。纳米色油通过喷涂与高温固化形成漆膜，色彩范围极广，可精准匹配Pantone，但在厚板高应力折弯场景中更容易出现泛白或爆边。",
            en: "PVD uses physical vapor deposition to form an ultra-thin metallic layer (typically 1-3 microns), preserving base texture and luster with stronger ductility for deep fabrication. Nano color oil forms a cured paint film by spray coating, offering excellent Pantone-level color flexibility, but it is more prone to whitening or edge cracking in high-stress bends on thicker sheets.",
          },
        ],
      },
      {
        heading: {
          zh: "场景选型：室外、异形折弯与实色定制",
          en: "Scenario Selection: Outdoor Use, Complex Bending, and Solid-Color Customization",
        },
        paragraphs: [
          {
            zh: "对于门套、立柱等需要刨槽和深折弯的异形构件，优先选择PVD或镀真铜体系更稳。对于品牌色定制（如中国红、爱马仕橙、纯哑黑）则纳米色油更具优势。室外长期暴晒环境建议优先电镀体系，若使用色油需叠加高等级抗UV保护层。",
            en: "For irregular components such as door frames and columns that require grooving and deep bending, PVD or real-copper-based systems are generally more reliable. For brand color customization (such as China Red, Hermes Orange, or pure matte black), nano color oil has clear advantages. For long-term outdoor exposure, PVD is usually safer; if color oil is used, high-grade UV protection is essential.",
          },
        ],
      },
      {
        heading: {
          zh: "工艺流程与质量控制要点",
          en: "Process Flow and Quality Control Essentials",
        },
        paragraphs: [
          {
            zh: "纳米色油工艺通常包括磨砂、2B电解清洁、钝化、喷涂与烘干。若电解后缺少钝化，附着力会明显下降。喷枪参数、油漆搅拌均匀性以及无尘控制，会直接影响雾化颗粒、色差与表面瑕疵。",
            en: "Typical nano color oil workflow includes surface sanding, 2B electrolytic cleaning, passivation, spraying, and curing. Skipping passivation after electrolytic cleaning can significantly reduce adhesion. Spray settings, paint mixing consistency, and dust control directly affect atomization quality, color consistency, and surface defects.",
          },
        ],
      },
      {
        heading: {
          zh: "成本交期与常见误区",
          en: "Cost, Lead Time, and Common Misconceptions",
        },
        paragraphs: [
          {
            zh: "常规情况下，纳米色油成本通常低于复杂PVD路线，但若提升到高硬度与户外UV配置，成本会同步增加。两者常规交期多在5-7天。常见误区包括：误以为所有板材都需要无指纹封油、误以为硬度越高越好。实际中硬度过高会牺牲延展性，增加折弯爆漆风险。",
            en: "In standard scenarios, nano color oil is often less expensive than complex PVD routes, but costs rise when high hardness and outdoor UV protection are specified. Typical lead time for both is around 5-7 days. Common misunderstandings include assuming every surface needs anti-fingerprint topcoat and believing higher hardness is always better. In practice, excessive hardness can reduce ductility and increase cracking risk during bending.",
          },
        ],
      },
      {
        heading: {
          zh: "防损建议与采购结论",
          en: "Damage Prevention and Procurement Conclusion",
        },
        paragraphs: [
          {
            zh: "如果项目必须采用厚板（>1.2mm）且使用纳米色油，建议折弯前在背面进行约1/3深度刨槽，以释放应力并降低爆边风险。结论上，PVD更适合强调金属骨相、耐加工与高端稳定交付的场景；纳米色油更适合强调色彩自由度、抗指纹和品牌化实色表达的场景。",
            en: "If your project requires thick sheets (>1.2mm) with nano color oil, pre-bending backside grooving at roughly one-third depth is recommended to release stress and reduce edge cracking. In summary, PVD is better for premium metallic character, fabrication tolerance, and stable high-end delivery, while nano color oil is better for color freedom, anti-fingerprint performance, and brand-driven solid-color expression.",
          },
        ],
      },
    ],
    faq: [
      {
        q: {
          zh: "纳米镀铜和水镀真铜刮开后有什么区别？",
          en: "What is the difference between nano copper color coating and water-plated real copper when scratched?",
        },
        a: {
          zh: "纳米色油刮开后一般露出不锈钢本色；水镀真铜刮开后可见真实铜层。",
          en: "Nano color coating usually reveals the stainless base when scratched, while water-plated real copper reveals an actual copper layer.",
        },
      },
      {
        q: {
          zh: "水性漆和油性漆该怎么选？",
          en: "How should I choose between water-based and oil-based paint systems?",
        },
        a: {
          zh: "工程端通常优先高品质水性体系，兼顾环保与性能；油性体系附着力强但环保压力更大。",
          en: "For most projects, high-quality water-based systems are preferred for better environmental compliance and balanced performance; oil-based systems can offer strong adhesion but face stricter environmental constraints.",
        },
      },
      {
        q: {
          zh: "为什么纳米色油会让拉丝纹理看起来不够“利”？",
          en: "Why does nano color oil sometimes make hairline texture look softer?",
        },
        a: {
          zh: "因为漆膜有一定覆盖厚度，会填平部分细微拉丝沟槽，导致纹理对比度下降。",
          en: "Because the coating film has thickness and can partially fill micro grooves, reducing the apparent sharpness of the hairline texture.",
        },
      },
      {
        q: {
          zh: "纳米色油能实现抗指纹吗？",
          en: "Can nano color oil provide anti-fingerprint performance?",
        },
        a: {
          zh: "可以，配套抗指纹体系后可显著提升易清洁性和日常维护表现。",
          en: "Yes. With a proper anti-fingerprint system, it can significantly improve cleanability and daily maintenance performance.",
        },
      },
      {
        q: {
          zh: "纯哑黑不锈钢通常怎么做？",
          en: "How is pure matte black stainless steel typically produced?",
        },
        a: {
          zh: "通常通过纳米色油路线，在前处理后喷涂高浓度黑色配方并进行哑光固化。",
          en: "It is typically achieved via a nano color oil route, using pretreated substrate, high-density black formulation, and matte curing.",
        },
      },
    ],
  },
  {
    slug: "stainless-steel-thickness-selection-guide",
    category: "guide",
    title: {
      zh: "不锈钢装饰板厚度选型终极指南：天花、墙面、踢脚线到底用多厚？",
      en: "Ultimate Stainless Steel Thickness Selection Guide: Ceiling, Wall, and Skirting Applications",
    },
    excerpt: {
      zh: "厚度是装饰不锈钢项目中最容易被忽视、却最容易导致翻车的参数。本文从部位选型、加工风险、成本交期与质检实务四个层面，给出可直接执行的厚度决策建议。",
      en: "Thickness is one of the most overlooked yet most failure-prone parameters in decorative stainless steel projects. This guide provides actionable thickness decisions across application zones, processing risk, cost and lead time, and quality control practice.",
    },
    publishedAt: "2026-03-27",
    readTime: {
      zh: "9 分钟阅读",
      en: "9 min read",
    },
    keywords: {
      zh: [
        "不锈钢装饰板厚度",
        "不锈钢板材厚度标准",
        "天花吊顶不锈钢用多厚",
        "镜面透底",
        "不锈钢重量计算",
      ],
      en: [
        "decorative stainless steel thickness",
        "stainless steel thickness standard",
        "ceiling stainless steel thickness",
        "mirror panel telegraphing",
        "stainless steel weight formula",
      ],
    },
    sections: [
      {
        heading: {
          zh: "行业趋势：从低价薄板到足厚交付",
          en: "Industry Trend: From Ultra-Thin Cost Cutting to Full-Thickness Delivery",
        },
        paragraphs: [
          {
            zh: "过去工程端常用超薄板压低成本，但随着业主审美和验收标准提高，薄板导致的波浪纹、马蹄印和易凹陷问题频繁引发返工。当前高端项目更强调实厚、平整度和长期稳定，必要时通过蜂窝复合而非继续减薄面层来实现轻量化。",
            en: "Projects previously used ultra-thin sheets to cut material costs, but stricter visual standards now expose issues such as waviness, handling dents, and poor rigidity. Premium projects increasingly prioritize actual thickness, flatness, and long-term stability, using honeycomb lamination for lightweight design instead of reducing face-sheet thickness.",
          },
        ],
      },
      {
        heading: {
          zh: "核心参数：厚度范围、规格与重量公式",
          en: "Core Parameters: Thickness Range, Standard Sizes, and Weight Formula",
        },
        paragraphs: [
          {
            zh: "装饰冷轧不锈钢常见厚度约0.3mm到3.0mm，宽度多为1000mm、1219mm、1500mm，长度可按项目定尺。采购核算建议使用重量公式：重量（kg）= 长度（m）× 宽度（m）× 厚度（mm）× 密度系数。密度系数可按201/304取7.93、316取7.99、430取7.75。",
            en: "Decorative cold-rolled stainless steel typically ranges from 0.3mm to 3.0mm, with common widths of 1000mm, 1219mm, and 1500mm, while length is usually cut-to-size. For procurement, use: Weight (kg) = Length (m) × Width (m) × Thickness (mm) × Density factor. Typical factors are 7.93 for 201/304, 7.99 for 316, and 7.75 for 430.",
          },
        ],
      },
      {
        heading: {
          zh: "部位选型建议：天花、墙面、门套与踢脚线",
          en: "Application Selection: Ceiling, Wall, Door Frame, and Skirting",
        },
        paragraphs: [
          {
            zh: "在天花、墙面等大面积可视区域，建议优先保证面层刚性与平整，避免使用过薄板材。门套和踢脚线属于高碰撞区域，推荐采用更稳妥厚度以减少使用期凹陷风险。对于镜面或高反射面，厚度与基层体系需要一体评估，避免后期透底与光学变形。",
            en: "For large visible zones such as ceilings and walls, prioritize sheet rigidity and flatness, and avoid excessively thin gauges. Door frames and skirting are impact-prone areas and should use safer thickness levels to reduce dent risk during service life. For mirror or high-reflectivity finishes, evaluate thickness together with substrate system to prevent telegraphing and optical distortion.",
          },
        ],
      },
      {
        heading: {
          zh: "为什么不建议超薄板：加工与交付风险",
          en: "Why Ultra-Thin Sheets Are Risky: Processing and Delivery Failures",
        },
        paragraphs: [
          {
            zh: "0.3mm到0.5mm薄板在精磨镜面、搬运和上墙阶段风险明显升高。加工中可能出现卷板、撞板、折痕和不可修复压痕，安装后也更容易出现视觉起伏。对于蜂窝复合，尤其是镜面面层，厚度不足还会提高透底概率，最终导致高额返工成本。",
            en: "Ultra-thin sheets in the 0.3mm-0.5mm range carry significantly higher risk during mirror polishing, handling, and installation. Typical failures include machine grab, edge collision, crease marks, and irreversible dents, followed by visible waviness after installation. In honeycomb lamination, especially for mirror finishes, insufficient thickness also increases telegraphing risk and costly rework.",
          },
        ],
      },
      {
        heading: {
          zh: "成本交期与质检协同",
          en: "Cost, Lead Time, and QA Coordination",
        },
        paragraphs: [
          {
            zh: "厚度上升会增加材料重量和单价，但通常可换来更低返工率与更稳定验收结果。若订单厚度和宽度规格过于分散，会明显拖慢开板与排产。建议在可控范围内统一规格，并在开板环节执行严格的平整度、表面缺陷和含水印检查，提前锁定交付质量。",
            en: "Increasing thickness raises material weight and initial cost, but usually reduces rework and improves acceptance stability. Highly fragmented thickness and width combinations can slow slitting and scheduling. Standardizing specifications where feasible and enforcing strict incoming QA for flatness, surface defects, and water marks are key to stable delivery.",
          },
        ],
      },
      {
        heading: {
          zh: "采购结论：厚度先行，避免低价陷阱",
          en: "Procurement Conclusion: Thickness First, Then Price",
        },
        paragraphs: [
          {
            zh: "结论上，不应为了短期成本盲目压薄面层。对于视觉中心区域和镜面效果，应优先考虑足厚或蜂窝复合方案，并在报价阶段明确标厚与实厚定义，避免后续扯皮。厚度决策做对，项目稳定性和最终质感会显著提升。",
            en: "In practice, reducing face-sheet thickness for short-term savings is usually a false economy. For visual focal areas and mirror applications, full-thickness or honeycomb solutions are safer. Define nominal versus actual thickness explicitly at quotation stage to avoid disputes. Correct thickness decisions directly improve both reliability and final aesthetics.",
          },
        ],
      },
    ],
    faq: [
      {
        q: {
          zh: "镜面蜂窝复合为什么更容易透底？",
          en: "Why do mirror honeycomb panels show telegraphing more easily?",
        },
        a: {
          zh: "镜面反光会放大微小起伏，若面层过薄，复合压力下更容易显出蜂窝芯轮廓。",
          en: "Mirror reflectivity amplifies tiny surface undulations. If the face sheet is too thin, honeycomb-cell patterns are more likely to telegraph under lamination pressure.",
        },
      },
      {
        q: {
          zh: "天花为了减重可以直接用超薄板吗？",
          en: "Can ultra-thin sheet be used on ceilings just to reduce weight?",
        },
        a: {
          zh: "不建议。减重更推荐通过结构与复合体系实现，单纯减薄会显著增加变形风险。",
          en: "Not recommended. Weight reduction should come from structural design and lamination systems, not simply reducing face-sheet thickness.",
        },
      },
      {
        q: {
          zh: "门套0.5mm是否可行？",
          en: "Is 0.5mm feasible for door frames?",
        },
        a: {
          zh: "通常风险较高，门套属于高碰撞区域，建议采用更稳妥厚度以提升耐用性。",
          en: "It is usually high-risk. Door frames are impact-prone, so a more robust thickness is recommended for durability.",
        },
      },
      {
        q: {
          zh: "采购时如何避免“标厚不等于实厚”？",
          en: "How can we avoid disputes between nominal and actual thickness?",
        },
        a: {
          zh: "在合同和报价中明确“实测厚度为准”，并在来料和出厂环节保留测厚记录。",
          en: "Specify measured actual thickness as the acceptance basis in contract and quotation, and keep gauge records for incoming and outgoing inspection.",
        },
      },
      {
        q: {
          zh: "不同钢厂会影响厚度与表面稳定性吗？",
          en: "Do different mills affect thickness and surface stability?",
        },
        a: {
          zh: "会。不同钢厂在平整度、公差控制和表面缺陷率上存在差异，需结合项目等级选材。",
          en: "Yes. Mills differ in flatness control, tolerance consistency, and surface-defect rates, so sourcing should match project quality level.",
        },
      },
    ],
  },
  {
    slug: "how-to-identify-304-vs-201-stainless-steel",
    category: "guide",
    title: {
      zh: "拒绝被骗：4种快速辨别 304 与 201 不锈钢的方法",
      en: "Avoid Costly Mistakes: 4 Practical Ways to Identify 304 vs 201 Stainless Steel",
    },
    excerpt: {
      zh: "304与201外观接近但耐腐蚀差异巨大。本文从材质机理、场景禁区和四种现场鉴别方法切入，帮助采购与施工团队快速识别材质风险，避免后期生锈翻车。",
      en: "304 and 201 often look similar but differ significantly in corrosion performance. This guide explains material fundamentals, high-risk scenarios, and four practical identification methods to help procurement and site teams avoid rust-related failures.",
    },
    publishedAt: "2026-03-27",
    readTime: {
      zh: "8 分钟阅读",
      en: "8 min read",
    },
    keywords: {
      zh: [
        "304与201不锈钢区别",
        "不锈钢辨别方法",
        "不锈钢测试药水",
        "光谱仪测不锈钢",
        "不锈钢生锈原因",
      ],
      en: [
        "304 vs 201 stainless steel",
        "stainless steel identification",
        "stainless steel test solution",
        "spectrometer stainless test",
        "stainless steel rust cause",
      ],
    },
    sections: [
      {
        heading: {
          zh: "行业真相：为什么201常被拿来冒充304",
          en: "Market Reality: Why 201 Is Often Misrepresented as 304",
        },
        paragraphs: [
          {
            zh: "201与304在很多表面处理后外观接近，但价格差距明显。部分低价供应会通过混用材质或厚度下差获利，导致项目在潮湿、清洁剂或盐雾环境下快速生锈，后期维护和更换成本远高于前期价差。",
            en: "After many surface finishes, 201 and 304 can appear similar while their market prices differ significantly. Some low-cost supply chains profit from grade substitution or thickness under-delivery, causing rapid rusting in humid, detergent, or saline environments. Lifecycle replacement cost can far exceed initial savings.",
          },
        ],
      },
      {
        heading: {
          zh: "核心差异：含镍量与耐腐蚀能力",
          en: "Core Difference: Nickel Content and Corrosion Resistance",
        },
        paragraphs: [
          {
            zh: "304较高的镍含量赋予其更稳定的耐腐蚀能力和加工延展性，适用于大多数室内外装饰场景。201以锰替代部分镍，成本更低，但在湿热、含盐或化学清洁环境中失效风险更高。对于地下室、厨卫和沿海区域，应优先304或更高等级。",
            en: "Higher nickel content gives 304 stronger corrosion resistance and better forming stability for most interior and exterior decorative applications. Grade 201 reduces cost by replacing part of nickel with manganese, but it carries much higher failure risk in humid, saline, or chemically aggressive environments. For basements, kitchens, bathrooms, and coastal regions, 304 or above is generally preferred.",
          },
        ],
      },
      {
        heading: {
          zh: "场景排雷：哪些位置不该用201",
          en: "Risk Mapping: Where 201 Should Not Be Used",
        },
        paragraphs: [
          {
            zh: "201可用于相对干燥、腐蚀性较低且预算敏感的普通室内区域。对于长期潮湿、频繁清洁、氯离子含量高或酸雨环境，201的锈蚀风险显著增加，属于高风险选项。关键功能区建议在图纸阶段即明确材质等级和验收标准。",
            en: "Grade 201 may be acceptable in dry, low-corrosion, cost-sensitive interior zones. In areas with sustained humidity, frequent cleaning chemicals, high chloride exposure, or acid rain, corrosion risk increases sharply and 201 becomes a high-risk option. For critical areas, define grade requirements and acceptance standards directly in design documents.",
          },
        ],
      },
      {
        heading: {
          zh: "4种实用鉴别方法",
          en: "Four Practical Identification Methods",
        },
        paragraphs: [
          {
            zh: "现场可采用外观初判、测试药水、打磨火花和光谱仪四类方法。外观法仅适用于未经复杂处理的板面；药水法便捷但需防假药误判；火花法依赖师傅经验；光谱仪则可直接读取元素比例，是工程验收阶段最可靠的方法。",
            en: "On-site identification typically relies on visual inspection, test solution, spark testing, and spectrometer analysis. Visual checks are only useful on unfinished surfaces; test solutions are convenient but can be inaccurate with low-quality reagents; spark testing depends on technician skill; spectrometers directly read elemental ratios and are the most reliable for formal acceptance.",
          },
        ],
      },
      {
        heading: {
          zh: "常见误区与采购建议",
          en: "Common Misconceptions and Procurement Advice",
        },
        paragraphs: [
          {
            zh: "“磁铁吸不吸”不能准确判断304与201，属于常见误区。建议在采购合同中要求材质证明和关键批次复检，并结合使用场景确定验收门槛。尤其在厨卫、沿海和高维护成本区域，前期用对材质比后期修复更省钱。",
            en: "Magnet attraction is not a reliable way to distinguish 304 from 201 and remains a common misconception. Procurement contracts should require material certificates and batch-level re-verification, with acceptance criteria tied to real service conditions. In kitchens, coastal sites, and high-maintenance zones, correct material selection upfront is far more economical than post-failure repair.",
          },
        ],
      },
    ],
    faq: [
      {
        q: {
          zh: "用磁铁能准确区分304和201吗？",
          en: "Can a magnet accurately distinguish 304 from 201?",
        },
        a: {
          zh: "不能。磁性会受材料组织状态和加工过程影响，不能作为唯一判定依据。",
          en: "No. Magnetism can vary with metallurgical state and fabrication process, so it should not be used as a sole criterion.",
        },
      },
      {
        q: {
          zh: "厨房和浴室应该选201还是304？",
          en: "Should kitchens and bathrooms use 201 or 304?",
        },
        a: {
          zh: "通常建议304及以上，能更好应对潮湿和清洁剂环境。",
          en: "304 or above is typically recommended for better resistance in humid and detergent-exposed environments.",
        },
      },
      {
        q: {
          zh: "测试药水结果可以完全信任吗？",
          en: "Can test-solution results be fully trusted?",
        },
        a: {
          zh: "可作为快速筛查，但最终验收建议结合光谱仪检测。",
          en: "It is useful for quick screening, but final acceptance should include spectrometer verification.",
        },
      },
      {
        q: {
          zh: "为什么同是201，有些更容易折断？",
          en: "Why do some 201 sheets crack more easily than others?",
        },
        a: {
          zh: "不同子系列在成分和延展性上有差异，低等级材料在折弯和刨槽时更易开裂。",
          en: "Different 201 sub-grades vary in composition and ductility; lower-grade material is more likely to crack during bending or grooving.",
        },
      },
      {
        q: {
          zh: "304一定不会生锈吗？",
          en: "Is 304 absolutely rust-proof?",
        },
        a: {
          zh: "不是绝对不锈。强酸强碱、含氯环境和不当清洁都会破坏钝化层。",
          en: "No stainless grade is absolutely rust-proof. Strong acids/alkalis, chloride exposure, and improper cleaning can damage the passive layer.",
        },
      },
    ],
  },
  {
    slug: "stainless-steel-bending-edge-cracking-prevention-guide",
    category: "guide",
    title: {
      zh: "折弯爆边、泛白怎么破？彩色不锈钢加工与安装防损指南",
      en: "How to Prevent Edge Cracking and Whitening in Colored Stainless Steel Bending",
    },
    excerpt: {
      zh: "彩色不锈钢在折弯阶段出现爆边和泛白，往往源于应力与涂层延展不匹配。本文给出刨槽深度、厚度边界和三类高风险板材的防损做法，帮助项目降低返工率。",
      en: "Edge cracking and whitening during colored stainless steel bending are usually caused by stress mismatch between substrate deformation and coating ductility. This guide provides practical rules on grooving depth, thickness limits, and high-risk material handling to reduce rework.",
    },
    publishedAt: "2026-03-27",
    readTime: {
      zh: "8 分钟阅读",
      en: "8 min read",
    },
    keywords: {
      zh: [
        "不锈钢折弯爆边",
        "折弯泛白原因",
        "不锈钢刨槽工艺",
        "彩色不锈钢加工",
        "水波纹折弯",
      ],
      en: [
        "stainless steel bending edge cracking",
        "bending whitening cause",
        "stainless steel grooving process",
        "colored stainless steel fabrication",
        "water ripple panel bending",
      ],
    },
    sections: [
      {
        heading: {
          zh: "行业痛点：折弯阶段最容易出事故",
          en: "Industry Pain Point: Bending Is the Most Failure-Prone Stage",
        },
        paragraphs: [
          {
            zh: "在门套、收口和立柱包边等立体构件中，折弯是从平板到成品的关键节点。许多项目在此阶段出现白线、爆漆和掉边，不仅报废材料，还会引发工期与责任争议。",
            en: "For three-dimensional components such as door trims, closures, and column cladding, bending is the critical conversion step from flat sheet to finished part. Many projects fail at this stage with whitening lines, coating cracks, and edge damage, resulting in scrap, delays, and liability disputes.",
          },
        ],
      },
      {
        heading: {
          zh: "成因解析：基材拉伸与涂层延展不匹配",
          en: "Root Cause: Mismatch Between Substrate Strain and Coating Ductility",
        },
        paragraphs: [
          {
            zh: "厚板折弯时外弧拉伸应力更大，若涂层体系延展不足，就会在折边位置首先失效。纳米色油类漆膜在高应力深折场景更容易出现泛白和爆边；硬度过高的涂层虽然耐刮，但脆性也更强。",
            en: "Thicker sheets generate higher tensile strain on the outer bend radius. If coating ductility is insufficient, failure appears first at the bend line. Paint-film systems such as nano color oil are more vulnerable in deep, high-stress bends; very hard coatings may resist abrasion but become more brittle under deformation.",
          },
        ],
      },
      {
        heading: {
          zh: "核心方法：背面V槽是最有效的防损手段",
          en: "Key Method: Backside V-Grooving Is the Most Effective Prevention",
        },
        paragraphs: [
          {
            zh: "折弯前在背面开V槽，可显著释放折弯应力并降低涂层撕裂风险。工程上常用约三分之一厚度的刨槽深度作为安全起点，再结合板材、角度和涂层类型做微调。与其省去刨槽费，不如提前控制返工损失。",
            en: "Backside V-grooving before bending can substantially reduce bending stress and coating tear risk. A groove depth around one-third of sheet thickness is commonly used as a safe starting point, then fine-tuned by material grade, bend angle, and coating system. Preventive grooving is usually far cheaper than post-failure rework.",
          },
        ],
      },
      {
        heading: {
          zh: "高风险材料专项建议",
          en: "Special Handling for High-Risk Materials",
        },
        paragraphs: [
          {
            zh: "仿古做旧板、水波纹压花板和热转印板都属于高风险类型。做旧板因表层工艺复杂，建议轻压成形并优先刨槽；水波纹板需严格规划加工顺序与尺寸；热转印体系应控制在安全厚度范围内，避免超厚折弯引发脆裂。",
            en: "Antique-finish sheets, water-ripple embossed sheets, and heat-transfer sheets are all high-risk categories. Antique finishes require low-stress forming with pre-grooving, ripple sheets require strict process sequencing and dimensional planning, and heat-transfer systems must stay within safe thickness windows to avoid brittle bend failure.",
          },
        ],
      },
      {
        heading: {
          zh: "成本、交期与现场补救",
          en: "Cost, Lead Time, and On-Site Remediation",
        },
        paragraphs: [
          {
            zh: "刨槽会增加前期工序和少量成本，但能显著降低报废率。若现场出现轻微爆边，可通过原厂同色修补漆点修；若为深度开裂或大面积破损，通常需要重做。建议在下单前完成深化拆图和折弯节点评审。",
            en: "Grooving adds process steps and minor upfront cost, but it greatly reduces scrap risk. Minor edge defects can sometimes be corrected with original-color touch-up paint, while severe cracking typically requires remanufacture. Detailed shop drawing and bend-node review before production is strongly recommended.",
          },
        ],
      },
      {
        heading: {
          zh: "执行结论：先排险再加工",
          en: "Execution Conclusion: Risk Control Before Fabrication",
        },
        paragraphs: [
          {
            zh: "要稳定控制折弯质量，核心是提前识别高风险材料、明确厚度边界、执行背面刨槽，并在现场遵循标准加工顺序。流程正确时，彩色不锈钢也能实现高完成度折边和稳定交付。",
            en: "To stabilize bending quality, prioritize early risk identification, define thickness limits, execute backside grooving, and enforce proper fabrication sequence on site. With the right process control, colored stainless steel can still achieve high-fidelity bends and reliable delivery.",
          },
        ],
      },
    ],
    faq: [
      {
        q: {
          zh: "0.6mm薄板喷纳米色油后还需要刨槽吗？",
          en: "Does a 0.6mm nano-coated sheet still require grooving before bending?",
        },
        a: {
          zh: "多数常规折弯可不刨槽，但遇到小R角或高要求清角时仍建议试样验证。",
          en: "For many standard bends, grooving may be unnecessary, but tight-radius or high-finish corners should still be validated with trial samples.",
        },
      },
      {
        q: {
          zh: "PVD电镀板折弯也会爆边吗？",
          en: "Can PVD-coated sheets also crack at the bend edge?",
        },
        a: {
          zh: "相对更少见，但在极限折弯和不当工艺下仍可能出现，应结合厚度和折弯半径评估。",
          en: "It is less common, but extreme bends and poor processing can still cause failures; evaluate together with thickness and bend radius.",
        },
      },
      {
        q: {
          zh: "为什么有些201材质折弯特别容易断？",
          en: "Why do some 201 sheets crack easily during bending?",
        },
        a: {
          zh: "不同子系列延展性差异明显，低等级材料在折弯和刨槽中更易脆裂。",
          en: "Different 201 sub-grades vary significantly in ductility, and lower grades are more prone to brittle cracking during bending and grooving.",
        },
      },
      {
        q: {
          zh: "水波纹板能先压花再折弯吗？",
          en: "Can ripple-embossed sheets be bent directly after embossing?",
        },
        a: {
          zh: "需按工艺评审执行，不同纹理和尺寸方案对顺序敏感，建议先做小样确认。",
          en: "It depends on process review. Sequence sensitivity is high across pattern types and dimensions, so pilot samples are recommended before mass production.",
        },
      },
      {
        q: {
          zh: "轻微爆边现场能修吗？",
          en: "Can minor edge cracking be repaired on site?",
        },
        a: {
          zh: "轻微瑕疵可用同色修补漆点补；深裂和大面积脱层通常需重做。",
          en: "Minor defects may be touched up with matched-color repair paint, while deep cracks or broad delamination usually require remanufacture.",
        },
      },
    ],
  },
];

export function blogPostBySlug(slug: string) {
  return blogPosts.find((item) => item.slug === slug);
}
