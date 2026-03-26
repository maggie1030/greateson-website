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
    slug: "why-water-ripple-stainless-steel-is-everywhere-2026",
    category: "blog",
    title: {
      zh: "2026年商业空间设计新宠：为什么“水波纹不锈钢”无处不在？",
      en: "2026 Commercial Design Trend: Why Water Ripple Stainless Steel Is Everywhere",
    },
    excerpt: {
      zh: "水波纹不锈钢正成为酒店与商业空间的高热材料。本文从工艺、选型、成本和常见误区出发，给出可直接执行的采购建议。",
      en: "Water ripple stainless steel is becoming a top-choice material for hospitality and commercial interiors. This guide explains process options, specifications, cost factors, and practical selection advice.",
    },
    publishedAt: "2026-03-26",
    readTime: {
      zh: "8 分钟阅读",
      en: "8 min read",
    },
    keywords: {
      zh: ["水波纹不锈钢", "不锈钢压花板", "酒店大堂吊顶", "冲压水波纹", "水波纹蜂窝板复合"],
      en: [
        "water ripple stainless steel",
        "embossed stainless steel sheet",
        "hotel lobby ceiling metal finish",
        "hydraulic press ripple sheet",
        "ripple stainless honeycomb panel",
      ],
    },
    sections: [
      {
        heading: {
          zh: "行业趋势：流动美学正在主导空间视觉",
          en: "Trend Watch: Flowing Metal Aesthetics Are Redefining Spatial Visuals",
        },
        paragraphs: [
          {
            zh: "在沉浸式体验成为商业空间核心诉求的背景下，传统平面材料难以满足“动态光影”表达。水波纹不锈钢凭借流体感反射效果，在酒店大堂、高端餐饮和娱乐空间中快速增长，尤其适合与灯光系统协同打造高识别度场景。",
            en: "As immersive spatial experience becomes a key requirement, flat decorative materials often fail to deliver dynamic light and movement. Water ripple stainless steel provides fluid reflection effects and is increasingly used in hotel lobbies, premium dining spaces, and entertainment interiors, especially when integrated with lighting design.",
          },
        ],
      },
      {
        heading: {
          zh: "产品定义与核心参数",
          en: "Product Definition and Core Specifications",
        },
        paragraphs: [
          {
            zh: "水波纹不锈钢属于压花不锈钢体系，主要通过液压冲压或滚压成型。常见材质为201、304、316，其中304在成型稳定性和耐腐蚀方面更均衡。",
            en: "Water ripple stainless steel belongs to the embossed stainless category and is mainly produced by hydraulic pressing or rolling. Common grades include 201, 304, and 316, with 304 usually offering the best balance between formability and corrosion resistance.",
          },
          {
            zh: "厚度建议：冲压系列可覆盖0.4mm-3.0mm，滚压系列通常在0.5mm-1.2mm。常用规格包括1000×2000mm、1219×2438mm、1219×3048mm、1500×3000mm。",
            en: "Thickness guidance: pressed ripple sheets typically range from 0.4mm to 3.0mm, while rolled ripple sheets are commonly between 0.5mm and 1.2mm. Typical sheet sizes include 1000×2000mm, 1219×2438mm, 1219×3048mm, and 1500×3000mm.",
          },
        ],
      },
      {
        heading: {
          zh: "适用场景与选型建议",
          en: "Use Cases and Selection Recommendations",
        },
        paragraphs: [
          {
            zh: "酒店中庭吊顶适合深大水波或流动纹，追求光影张力；KTV门头与走廊墙面可采用彩色冲压纹理强化氛围；外立面点缀建议优先选择PVD工艺并控制颜色稳定性。",
            en: "Hotel atrium ceilings often use deeper ripple patterns for stronger reflective drama; KTV entries and corridor walls benefit from colored pressed textures; facade accents should prioritize PVD-based finishes for better outdoor stability.",
          },
          {
            zh: "预算优先可选0.6-0.8mm的201室内方案；耐久优先建议304/316并使用PVD着色；追求大面积平整与拼缝控制时建议1.0-1.5mm的304并提前做排版与收缩率校核。",
            en: "For budget-focused interior projects, 0.6-0.8mm grade 201 can be cost-effective. For durability-focused applications, use 304/316 with PVD coloring. For large-area seamless visual results, use 1.0-1.5mm grade 304 and validate layout plus shrinkage allowance in advance.",
          },
        ],
      },
      {
        heading: {
          zh: "成本、交期与常见误区",
          en: "Cost, Lead Time, and Common Mistakes",
        },
        paragraphs: [
          {
            zh: "成本通常由基材、表面处理和压花加工组成。冲压水波纹在常规条件下约5-7天可交付；滚压方案若需排产或现货协调，周期通常为10-15天。",
            en: "Cost is generally composed of base metal, surface finishing, and embossing process fees. Pressed ripple sheets are often delivered within 5-7 days under normal conditions, while rolling-based options commonly require 10-15 days depending on stock and production scheduling.",
          },
          {
            zh: "典型误区包括：忽视冲压后的尺寸收缩、不经刨槽直接折弯、按平板逻辑评估蜂窝复合成本。建议在出图阶段同步确认加工余量、折弯节点和复合方式。",
            en: "Typical mistakes include ignoring post-press shrinkage, bending without proper grooving, and pricing honeycomb lamination as if it were flat sheet processing. Confirm shrinkage allowance, bending details, and lamination method during drawing review.",
          },
        ],
      },
      {
        heading: {
          zh: "项目实践与采购建议",
          en: "Project Practice and Procurement Advice",
        },
        paragraphs: [
          {
            zh: "在高端酒店项目中，1.2mm 304镜面香槟金流动纹常用于大堂顶部。通过收缩率预估和分块排版，可显著提升拼接精度和视觉完整性。",
            en: "In premium hotel projects, 1.2mm grade 304 mirror champagne-gold flow ripple panels are widely used for lobby ceilings. With shrinkage prediction and panel layout planning, teams can significantly improve joint precision and visual continuity.",
          },
          {
            zh: "如需基于图纸评估可行性、成本和交期，建议先提供项目场景、材质需求和目标效果图，避免后续返工与预算偏差。",
            en: "For drawing-based feasibility, cost, and lead-time evaluation, prepare use-case context, material grade targets, and desired visual references early to reduce rework risk and budget deviation.",
          },
        ],
      },
    ],
    faq: [
      {
        q: {
          zh: "为什么水波纹不锈钢用于室外后会出现褪色？",
          en: "Why can water ripple stainless steel fade in outdoor use?",
        },
        a: {
          zh: "若采用纳米色油且未做足够的抗UV保护，长期日照可能导致褪色。室外项目建议优先使用PVD真空电镀体系。",
          en: "If nano color oil is used without sufficient UV protection, long-term exposure can cause fading. For outdoor projects, PVD vacuum coating is generally the safer option.",
        },
      },
      {
        q: {
          zh: "水波纹不锈钢能做到多厚？",
          en: "How thick can water ripple stainless steel be processed?",
        },
        a: {
          zh: "液压冲压可做到3.0mm；滚压工艺通常建议0.5mm-1.2mm。",
          en: "Hydraulic pressing can reach up to 3.0mm, while rolling-based production is usually recommended in the 0.5mm-1.2mm range.",
        },
      },
      {
        q: {
          zh: "201材质可以做复杂小纹理吗？",
          en: "Can grade 201 be used for complex small ripple patterns?",
        },
        a: {
          zh: "不建议。复杂小纹理更推荐304材质，以获得更稳定的成型质量。",
          en: "Generally not recommended. For complex fine textures, grade 304 is preferred for more stable forming quality.",
        },
      },
      {
        q: {
          zh: "为什么折弯位置会出现发白或爆边？",
          en: "Why can whitening or edge cracking happen at bend lines?",
        },
        a: {
          zh: "常见原因是涂层延展性不足或折弯节点处理不当。应在前期做合理刨槽并控制折弯工艺参数。",
          en: "The main cause is insufficient coating ductility or improper bend-detail processing. Proper grooving and controlled bending parameters are required.",
        },
      },
      {
        q: {
          zh: "水波纹不锈钢可以做蜂窝复合吗？",
          en: "Can water ripple stainless steel be laminated with honeycomb core?",
        },
        a: {
          zh: "可以，但因表面凹凸会增加结构胶和工艺复杂度，成本通常高于平板复合方案。",
          en: "Yes, but the uneven texture increases adhesive usage and process complexity, so the cost is usually higher than flat-sheet lamination.",
        },
      },
    ],
  },
];

export function blogPostBySlug(slug: string) {
  return blogPosts.find((item) => item.slug === slug);
}
