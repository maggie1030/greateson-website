import type { Locale } from "./i18n";
import { siteUrl } from "./site-url";

type LocalizedText = Record<Locale, string>;

export type Product = {
  slug: string;
  name: LocalizedText;
  category: LocalizedText;
  material: LocalizedText;
  thickness: LocalizedText;
  size: LocalizedText;
  finish: LocalizedText;
  applications: LocalizedText;
  moq: LocalizedText;
  leadTime: LocalizedText;
  advantages: LocalizedText;
  faq: { q: LocalizedText; a: LocalizedText }[];
  image: string;
};

export type Application = {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  benefits: LocalizedText;
  typicalProducts: LocalizedText;
  caseExample: LocalizedText;
  image: string;
};

export type CaseStudy = {
  slug: string;
  title: LocalizedText;
  location: LocalizedText;
  year: string;
  summary: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
  keywords: LocalizedText[];
  productSlugs: string[];
  image: string;
};

export const company = {
  name: "Greateson",
  zhName: "顺佳兴",
  legalName: {
    en: "Greateson Co., Ltd.",
    zh: "顺佳兴",
  },
  foundedYear: "2008",
  headquarters: {
    en: "Foshan, Guangdong, China",
    zh: "中国广东佛山",
  },
  factoryArea: "10,000㎡",
  employees: "80+",
  markets: {
    en: "Middle East, Europe, Southeast Asia",
    zh: "中东、欧洲、东南亚",
  },
  phone: "+86-18928546888",
  whatsapp: "+86-18125683838",
  email: "sales@greateson.com",
  website: siteUrl,
};

export const nav = {
  en: {
    home: "Home",
    about: "About us",
    factory: "Factory",
    products: "Products",
    applications: "Applications",
    cases: "Case Studies",
    blog: "Blog",
    guides: "Guides",
    faq: "FAQ",
    contact: "Contact",
    quote: "Get Quote",
  },
  zh: {
    home: "首页",
    about: "关于我们",
    factory: "工厂实力",
    products: "产品中心",
    applications: "应用场景",
    cases: "工程案例",
    blog: "博客",
    guides: "选购指南",
    faq: "常见问题",
    contact: "联系我们",
    quote: "获取报价",
  },
} as const;

export const products: Product[] = [
  {
    slug: "stainless-steel-screen",
    name: { en: "Stainless Steel Products", zh: "不锈钢制品" },
    category: { en: "Engineering Decorative Product", zh: "不锈钢工程装饰制品" },
    material: { en: "201 / 304 / 316", zh: "201 / 304 / 316" },
    thickness: { en: "Customized", zh: "支持定制" },
    size: { en: "Customized Width & Length", zh: "宽度与长度可定制" },
    finish: {
      en: "Mirror, brushed, titanium gold, rose gold, black titanium, antique copper, water ripple, etched",
      zh: "镜面、拉丝、钛金、玫瑰金、黑钛金、仿古铜、水波纹、蚀纹",
    },
    applications: {
      en: "Hotel lobby, luxury club, villa courtyard, office partition",
      zh: "酒店大堂、高端会所、别墅庭院、办公隔断",
    },
    moq: { en: "1 piece", zh: "1件起订" },
    leadTime: { en: "10-15 days (complex: 15-25 days)", zh: "常规10-15天（复杂15-25天）" },
    advantages: {
      en: "One-stop in-house production, precision craft, easy installation, strong after-sales support",
      zh: "自有工厂一条龙加工，工艺精细，安装便捷，支持售后维护",
    },
    faq: [
      {
        q: { en: "Can I customize special-shaped screens?", zh: "能否定制异形屏风？" },
        a: {
          en: "Yes. We support custom geometry from drawings and renderings.",
          zh: "支持。可根据图纸或效果图深化设计并定制。",
        },
      },
    ],
    image: "/images/products/stainless-steel-product.jpg",
  },
  {
    slug: "stainless-steel-decorative-sheet",
    name: { en: "Stainless Steel Decorative Sheet", zh: "不锈钢装饰板" },
    category: { en: "Engineering Decorative Sheet", zh: "不锈钢工程装饰板材" },
    material: { en: "201 / 304 / 316", zh: "201 / 304 / 316" },
    thickness: { en: "0.4mm-3.0mm", zh: "0.4mm-3.0mm" },
    size: {
      en: "1000/1219/1500 × 2000/2438/3000mm, custom size",
      zh: "1000/1219/1500 × 2000/2438/3000mm，支持定制尺寸",
    },
    finish: {
      en: "Mirror 8K, brushed, water ripple, etched, antique, PVD colors",
      zh: "镜面8K、拉丝、水波纹、蚀纹、做旧、钛金镀色",
    },
    applications: {
      en: "Elevator cabins, hotel walls, shopping mall ceilings, villa walls, KTV interiors",
      zh: "电梯轿厢、酒店墙面、商场吊顶、别墅背景墙、KTV包厢",
    },
    moq: { en: "20 sheets per color", zh: "单色20张起订" },
    leadTime: { en: "3-7 days (color plating 5-10 days)", zh: "常规3-7天（镀色5-10天）" },
    advantages: {
      en: "Wide finish options, strong weather resistance, easy cleaning, large-format customization",
      zh: "工艺丰富，耐候性强，易清洁，支持大版面定制",
    },
    faq: [
      {
        q: { en: "Can antique copper effects be achieved?", zh: "做旧板能否做仿古铜效果？" },
        a: {
          en: "Yes, both manual and chemical antique effects are available.",
          zh: "支持，可做手工做旧或化学做旧，效果逼真。",
        },
      },
    ],
    image: "/images/products/stainless-steel-decorative-sheet.jpg",
  },
  {
    slug: "stainless-steel-honeycomb-panel",
    name: { en: "Stainless Steel Honeycomb Panel", zh: "不锈钢蜂窝板" },
    category: { en: "Engineering Decorative Sheet", zh: "不锈钢工程装饰板材" },
    material: {
      en: "Stainless panel + galvanized/aluminum back + aluminum honeycomb core",
      zh: "不锈钢面板 + 镀锌/铝背板 + 铝蜂窝芯",
    },
    thickness: { en: "8mm-50mm", zh: "8mm-50mm" },
    size: { en: "Max width 2m, max length 10m", zh: "最大宽度2m，最大长度10m" },
    finish: {
      en: "Mirror, brushed, etched, water ripple, fluorocarbon paint, PVD colors",
      zh: "镜面、拉丝、蚀刻、水波纹、氟碳漆、镀钛",
    },
    applications: {
      en: "Facade cladding, hotel lobby ceilings, airport and large public spaces",
      zh: "建筑外墙、酒店大堂吊顶、机场与大型公共空间",
    },
    moq: { en: "20 sheets", zh: "20张起订" },
    leadTime: { en: "10-20 days", zh: "常规10-20天" },
    advantages: {
      en: "Lightweight with high strength, thermal and acoustic performance, anti-deformation",
      zh: "轻质高强，隔音隔热，抗变形能力强",
    },
    faq: [
      {
        q: { en: "Can honeycomb panels be used outdoors?", zh: "蜂窝板能否用于外墙？" },
        a: {
          en: "Yes. It supports exterior use with proper fireproof and insulation layers.",
          zh: "支持，可搭配防火保温层用于户外工程。",
        },
      },
    ],
    image: "/images/products/stainless-steel-honeypanel.JPG",
  },
  {
    slug: "stainless-steel-double-curved-fabrication",
    name: { en: "Stainless Steel Double Curved Fabrication", zh: "不锈钢双曲异形" },
    category: { en: "Engineering Custom Fabrication", zh: "不锈钢工程定制制品" },
    material: { en: "201 / 304 / 316", zh: "201 / 304 / 316" },
    thickness: { en: "0.8mm-6.0mm", zh: "0.8mm-6.0mm" },
    size: { en: "Fully customizable", zh: "支持全尺寸定制" },
    finish: {
      en: "Mirror, brushed, hairline, sandblasted, PVD coating",
      zh: "镜面、拉丝、发丝纹、喷砂、PVD 镀色",
    },
    applications: {
      en: "Architectural facades, art installations, luxury interiors, landmark projects",
      zh: "建筑外立面、艺术装置、奢华室内空间、地标项目",
    },
    moq: { en: "1 project", zh: "1个项目起" },
    leadTime: { en: "15-35 days", zh: "常规15-35天" },
    advantages: {
      en: "Complex double-curved forming, premium surface quality, high customization for landmark projects",
      zh: "支持复杂双曲面成型，表面质感高级，可满足地标级项目定制需求",
    },
    faq: [
      {
        q: { en: "Can double curved stainless steel be fully customized?", zh: "双曲异形不锈钢可以完全定制吗？" },
        a: {
          en: "Yes. Shape, size, structure and surface finish can all be customized from drawings and models.",
          zh: "可以。造型、尺寸、结构和表面工艺都可根据图纸与模型进行定制。",
        },
      },
    ],
    image: "/images/products/stainless-steel-double-curved-fabrication.JPG",
  },
];

export const applications: Application[] = [
  {
    slug: "hotel-decoration",
    name: { en: "Hotel Decoration", zh: "酒店装饰" },
    description: {
      en: "For hotel lobbies, guest rooms, corridors and feature walls with premium visual impact.",
      zh: "用于高端酒店大堂、客房、走廊与背景墙，打造奢华现代视觉效果。",
    },
    benefits: {
      en: "Corrosion-resistant, easy to clean, long lifecycle, customizable for design language.",
      zh: "耐腐蚀、易清洁、寿命长，可按设计风格定制。",
    },
    typicalProducts: {
      en: "Screens, decorative sheets, honeycomb panels",
      zh: "不锈钢屏风、装饰板、蜂窝板",
    },
    caseExample: {
      en: "Five-star hotel lobby with water ripple sheets and custom screens.",
      zh: "五星级酒店大堂采用水波纹装饰板与定制屏风。",
    },
    image: "/images/applications/hotel-decoration/微信图片_20260326095905_1013_55.png",
  },
  {
    slug: "elevator-panels",
    name: { en: "Elevator Panels", zh: "电梯轿厢" },
    description: {
      en: "Durable and elegant elevator cabin wall, door and ceiling solutions.",
      zh: "适用于电梯轿厢内壁、门板和吊顶，兼顾耐用与美观。",
    },
    benefits: {
      en: "Scratch-resistant, fire-safe, easy disinfection, texture and color customization.",
      zh: "耐磨抗刮、防火阻燃、易清洁，可定制纹理和色彩。",
    },
    typicalProducts: { en: "Mirror sheets, etched sheets, honeycomb panels", zh: "镜面板、蚀刻板、蜂窝板" },
    caseExample: {
      en: "Black titanium mirror panels used in premium office towers.",
      zh: "高端写字楼采用黑钛镜面板提升科技与高级感。",
    },
    image: "/images/applications/elevator-panels/IMG_3850.PNG",
  },
  {
    slug: "luxury-retail",
    name: { en: "Luxury Retail", zh: "奢侈品零售" },
    description: {
      en: "Showroom-grade decorative metal systems for boutiques and flagship stores.",
      zh: "用于精品店与旗舰店的展示级金属装饰系统。",
    },
    benefits: {
      en: "Strong brand expression, high precision detailing, premium finish consistency.",
      zh: "强化品牌表达，细节精密，表面质感统一高端。",
    },
    typicalProducts: { en: "Display cabinets, logo walls, decorative sheets", zh: "展示柜、品牌背景墙、装饰板" },
    caseExample: {
      en: "Luxury cosmetics counter with champagne gold stainless cabinetry.",
      zh: "高端化妆品专柜采用香槟金不锈钢展示系统。",
    },
    image: "/images/applications/luxury-retail/IMG_3883.JPG",
  },
  {
    slug: "architectural-facade",
    name: { en: "Architectural Facade", zh: "建筑外立面" },
    description: {
      en: "Large-format weather-resistant stainless facade systems for iconic buildings.",
      zh: "用于地标建筑的大版面耐候不锈钢外立面系统。",
    },
    benefits: {
      en: "Lightweight, high strength, UV stable color, decade-level durability.",
      zh: "轻量高强、抗紫外线、色彩稳定，寿命可达数十年。",
    },
    typicalProducts: { en: "Honeycomb panels, coated decorative sheets", zh: "蜂窝板、镀色装饰板" },
    caseExample: {
      en: "Landmark commercial project with gradient coated stainless facade.",
      zh: "城市地标项目采用渐变镀色不锈钢外立面。",
    },
    image: "/images/applications/Wall%20cladding/IMG_3871.JPG",
  },
  {
    slug: "ceiling-panels",
    name: { en: "Ceiling Panels", zh: "吊顶装饰" },
    description: {
      en: "Lightweight yet rigid ceiling systems for hotels, malls, airports and offices.",
      zh: "用于酒店、商场、机场、写字楼的轻质高强吊顶系统。",
    },
    benefits: {
      en: "Acoustic and thermal performance, fire safety, modular maintenance.",
      zh: "隔音隔热、防火阻燃、模块化维护便捷。",
    },
    typicalProducts: { en: "Honeycomb panels, water ripple sheets", zh: "蜂窝板、水波纹装饰板" },
    caseExample: {
      en: "Airport waiting hall using lightweight honeycomb ceiling modules.",
      zh: "机场候机区采用不锈钢蜂窝板吊顶减轻荷载。",
    },
    image: "/images/products/panels/微信图片_20260324142353_443_50.jpg",
  },
  {
    slug: "commercial-interiors",
    name: { en: "Commercial Interiors", zh: "商业室内空间" },
    description: {
      en: "Walls, partitions and feature details for malls, offices and clubs.",
      zh: "覆盖商场、写字楼、会所的墙面、隔断与装饰构件。",
    },
    benefits: {
      en: "Design flexibility with durable and low-maintenance performance.",
      zh: "风格适配度高，同时兼具耐用与易维护特性。",
    },
    typicalProducts: { en: "Screens, decorative sheets, honeycomb panels", zh: "屏风、装饰板、蜂窝板" },
    caseExample: {
      en: "Core CBD office lobby with stainless honeycomb suspended ceiling.",
      zh: "核心商圈写字楼采用蜂窝板吊顶提升现代感。",
    },
    image: "/images/products/screens/微信图片_20260324140039_433_50.jpg",
  },
  {
    slug: "office-buildings",
    name: { en: "Office Buildings", zh: "办公楼" },
    description: {
      en: "Professional and modern decorative systems for office lobbies and corridors.",
      zh: "面向办公楼大堂、电梯厅、走廊等区域的现代化装饰系统。",
    },
    benefits: {
      en: "Fire-safe, easy-clean, flexible partitioning, acoustic improvements.",
      zh: "防火安全、易清洁、空间划分灵活并改善声学体验。",
    },
    typicalProducts: { en: "Screens, decorative sheets, honeycomb panels", zh: "屏风、装饰板、蜂窝板" },
    caseExample: {
      en: "Financial center lobby with minimalist stainless partitions.",
      zh: "金融中心写字楼采用极简不锈钢隔断提升质感。",
    },
    image: "/images/products/screens/微信图片_20260324140053_435_50.jpg",
  },
  {
    slug: "restaurant-interiors",
    name: { en: "Restaurant Interiors", zh: "餐厅室内装饰" },
    description: {
      en: "Durable decorative metal systems for high-end and thematic restaurants.",
      zh: "适用于高端与主题餐厅的耐用装饰金属系统。",
    },
    benefits: {
      en: "Easy sanitation, moisture resistance, and strong style customization.",
      zh: "易清洁消毒、防火防潮，并支持风格化定制。",
    },
    typicalProducts: { en: "Screens, antique/etched sheets, display cabinets", zh: "屏风、做旧/蚀刻板、展示柜" },
    caseExample: {
      en: "Industrial-style restaurant using antique sheets and integrated lighting.",
      zh: "工业风餐厅采用做旧板与灯光系统营造氛围。",
    },
    image: "/images/products/cabinets/微信图片_20260324135351_430_50.jpg",
  },
  {
    slug: "shopping-malls",
    name: { en: "Shopping Malls", zh: "购物中心" },
    description: {
      en: "High-traffic public space decoration for atriums, corridors and storefronts.",
      zh: "用于中庭、走廊与店铺门面的高人流商业空间装饰。",
    },
    benefits: {
      en: "Wear-resistant, impact-resistant, large-format texture customization.",
      zh: "耐磨抗冲击，支持大版面与丰富纹理定制。",
    },
    typicalProducts: { en: "Decorative sheets, honeycomb panels, screens", zh: "装饰板、蜂窝板、屏风" },
    caseExample: {
      en: "Mall atrium feature wall with water ripple stainless sheets.",
      zh: "大型商场中庭采用水波纹不锈钢板打造视觉焦点。",
    },
    image: "/images/products/panels/微信图片_20260324142351_441_50.jpg",
  },
  {
    slug: "wall-cladding",
    name: { en: "Wall Cladding", zh: "墙面装饰" },
    description: {
      en: "Metal wall systems for interior and exterior projects requiring long-term durability.",
      zh: "适用于室内外项目、强调耐久性的金属墙面系统。",
    },
    benefits: {
      en: "Excellent corrosion resistance with broad finish combinations.",
      zh: "抗腐蚀性能强，表面工艺组合丰富。",
    },
    typicalProducts: { en: "Decorative sheets, honeycomb panels", zh: "装饰板、蜂窝板" },
    caseExample: {
      en: "Residential sales center with iconic stainless wall texture.",
      zh: "售楼中心采用特色不锈钢墙面肌理形成地标识别。",
    },
    image: "/images/products/sheets/微信图片_20260324140817_437_50.jpg",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "shanghai-dingda-commercial-kitchen",
    title: { en: "Shanghai Dingda Commercial Kitchen Project", zh: "上海鼎达商用厨具" },
    location: { en: "Shanghai, China", zh: "中国 上海" },
    year: "2025",
    summary: {
      en: "Large-scale stainless steel workstations, display cabinets, and structural components for a commercial kitchen and showroom environment.",
      zh: "为商用厨房及展示空间提供大规模不锈钢操作台、展示柜与结构件系统。",
    },
    challenge: {
      en: "The project required food-grade hygiene, corrosion resistance, standardized dimensions, and fast multi-zone delivery.",
      zh: "项目同时要求食品级卫生标准、耐腐蚀性能、结构标准化与多区域快速交付。",
    },
    solution: {
      en: "Used food-grade 304 stainless steel, easy-clean finishes, standardized modular design, and pre-planned batch production.",
      zh: "采用食品级 304 不锈钢与易清洁表面处理，并通过标准化模块设计与提前排产实现高效交付。",
    },
    result: {
      en: "Delivered a clean, durable, and professional stainless steel environment that improved kitchen efficiency and overall project quality.",
      zh: "最终实现了耐用、卫生与美观统一的厨房空间效果，提升了整体运营效率与专业度。",
    },
    keywords: [
      { en: "commercial kitchen stainless steel project", zh: "商用厨房不锈钢项目" },
      { en: "stainless steel workstation system", zh: "不锈钢操作台系统" },
      { en: "display cabinet fabrication", zh: "展示柜定制加工" },
    ],
    productSlugs: ["stainless-steel-screen"],
    image: "/images/cases/上海鼎达商用厨具/26eac3a2d84a703d0e0abb52b641a41a.jpg",
  },
  {
    slug: "tianjin-yihe-chunjiangfu",
    title: { en: "Tianjin Yihe Chunjiangfu Landscape Project", zh: "天津宜禾春江府" },
    location: { en: "Tianjin, China", zh: "中国 天津" },
    year: "2025",
    summary: {
      en: "Custom stainless steel partition and grille systems for a premium residential landscape and transition space.",
      zh: "为高端住宅景观与过渡空间定制不锈钢隔断及金属格栅系统。",
    },
    challenge: {
      en: "The project needed to balance openness and separation, maintain Chinese-style detailing, and ensure outdoor durability.",
      zh: "项目需要兼顾空间通透与分隔功能、中式细节表达以及户外耐久性。",
    },
    solution: {
      en: "Used 304 stainless steel with protective surface treatment, controlled grille density, and modular numbered installation.",
      zh: "采用 304 不锈钢与表面防护处理，通过格栅密度控制与模块化编号安装实现设计效果。",
    },
    result: {
      en: "Created an orderly and elegant landscape atmosphere with stronger spatial guidance, layering, and Eastern visual character.",
      zh: "最终形成了通透有序且富有东方韵味的景观空间效果，显著增强了层次感与引导性。",
    },
    keywords: [
      { en: "landscape stainless steel partition", zh: "景观不锈钢隔断" },
      { en: "tianjin residential project", zh: "天津地产项目" },
      { en: "custom metal grille system", zh: "定制金属格栅系统" },
    ],
    productSlugs: ["stainless-steel-screen"],
    image: "/images/cases/天津宜禾春江府/34ccdb8aa2b3bb3be7b7798c00ee858b.jpg",
  },
  {
    slug: "hohhot-hotel-double-curved-entrance",
    title: { en: "Hohhot Hotel Double Curved Entrance", zh: "呼和浩特酒店" },
    location: { en: "Hohhot, China", zh: "中国 呼和浩特" },
    year: "2025",
    summary: {
      en: "Custom double-curved stainless steel entrance structure for a premium hotel facade focal point.",
      zh: "为高端酒店入口定制不锈钢双曲门头结构，打造建筑立面的核心视觉焦点。",
    },
    challenge: {
      en: "Complex double-curved geometry demanded high forming accuracy, controlled reflection quality, and precise on-site alignment.",
      zh: "双曲造型复杂，对曲面精度、反射质感和现场安装对位都提出了很高要求。",
    },
    solution: {
      en: "Combined 3D modeling, segmented fabrication, fine welding, polishing, and modular numbered installation.",
      zh: "通过 3D 建模拆分、分段加工、精细焊接打磨与模块化编号安装实现高精度落地。",
    },
    result: {
      en: "Delivered a seamless curved metal entrance that significantly strengthened the hotel's premium identity and recognizability.",
      zh: "最终呈现出流畅一体的双曲金属门头效果，显著提升了酒店入口的高级感与品牌辨识度。",
    },
    keywords: [
      { en: "double curved stainless steel entrance", zh: "双曲不锈钢门头" },
      { en: "hotel facade metal project", zh: "酒店外立面金属项目" },
      { en: "custom curved metal fabrication", zh: "定制曲面金属加工" },
    ],
    productSlugs: ["stainless-steel-double-curved-fabrication", "stainless-steel-decorative-sheet"],
    image: "/images/cases/呼和浩特酒店/11e08a7a80b4576756d50bf1999d288f.jpg",
  },
  {
    slug: "changsha-mixc-commercial-complex",
    title: { en: "Changsha MixC Commercial Complex", zh: "湖南长沙万象城" },
    location: { en: "Changsha, Hunan, China", zh: "中国 湖南长沙" },
    year: "2025",
    summary: {
      en: "Integrated stainless steel decorative sheets, rest pavilion structures, and sculptures for a large-scale commercial complex.",
      zh: "为大型商业综合体提供不锈钢装饰板、定制休息亭与雕塑等综合金属装饰系统。",
    },
    challenge: {
      en: "The project required smooth large curved surfaces, layered finish variation, and durable installation across high-traffic zones.",
      zh: "项目需要保证大面积曲面流畅度、不同区域工艺层次变化以及高人流区域的长期耐用性。",
    },
    solution: {
      en: "Used segmented modeling, modular fabrication, and a combined finish strategy including brushing, sandblasting, and local color coating.",
      zh: "采用分段建模与模块化加工，并通过拉丝、喷砂与局部镀色的工艺组合实现统一且分层的效果。",
    },
    result: {
      en: "Created a highly recognizable commercial environment with richer light-shadow depth and stronger visitor engagement.",
      zh: "最终形成层次丰富、流线感强的商业空间效果，显著提升了整体氛围与视觉吸引力。",
    },
    keywords: [
      { en: "changsha mixc metal project", zh: "长沙万象城金属项目" },
      { en: "commercial complex stainless steel", zh: "商业综合体不锈钢装饰" },
      { en: "custom sculpture and pavilion", zh: "定制雕塑与休息亭" },
    ],
    productSlugs: ["stainless-steel-decorative-sheet", "stainless-steel-screen"],
    image: "/images/cases/湖南长沙万象城/0dddfe9ed4584f5004a3645842e7e5ee.jpg",
  },
  {
    slug: "shanghai-dishuihu-hotel",
    title: { en: "Shanghai Dishuihu Hotel Public Space", zh: "上海滴水湖酒店" },
    location: { en: "Shanghai, China", zh: "中国 上海" },
    year: "2025",
    summary: {
      en: "Coordinated stainless steel display cabinets, ceiling systems, and decorative components across multiple hotel public areas.",
      zh: "在酒店公共空间内协同应用不锈钢展示柜、吊顶系统与多类装饰构件，形成统一空间风格。",
    },
    challenge: {
      en: "Multiple stainless steel systems had to maintain one visual language while meeting display, ceiling, and durability requirements.",
      zh: "项目需要在多种不锈钢产品同时应用的情况下，保证空间风格统一并兼顾展示、吊顶与耐用需求。",
    },
    solution: {
      en: "Unified materials and finishes, integrated display and function design, and used modular ceiling installation with strict finish control.",
      zh: "通过统一材质与工艺体系、展示功能一体化设计及模块化吊顶安装，实现高品质整体落地。",
    },
    result: {
      en: "Delivered a clean, modern, and premium hotel atmosphere with stronger consistency, quality perception, and guest experience.",
      zh: "最终形成了现代、统一且高品质的酒店空间氛围，显著提升了整体品牌形象与客户体验。",
    },
    keywords: [
      { en: "hotel public space metal project", zh: "酒店公共空间金属项目" },
      { en: "stainless steel display cabinet", zh: "不锈钢展示柜" },
      { en: "stainless steel ceiling system", zh: "不锈钢吊顶系统" },
    ],
    productSlugs: ["stainless-steel-screen", "stainless-steel-honeycomb-panel"],
    image: "/images/cases/上海滴水湖酒店/2544ff7301fa8f318106458fd97c3d59.jpg",
  },
  {
    slug: "datong-holiday-inn-lobby-screen",
    title: { en: "Datong Holiday Inn Lobby Screen", zh: "山西大同假日酒店" },
    location: { en: "Datong, Shanxi, China", zh: "中国 山西大同" },
    year: "2025",
    summary: {
      en: "Custom antique-bronze stainless steel screen for the core visual zone of a hotel lobby.",
      zh: "为酒店大堂核心区域定制乱纹古铜工艺不锈钢装饰屏风，强化空间视觉焦点。",
    },
    challenge: {
      en: "The screen required naturally varied random textures, stable antique bronze tone, and durable decorative performance in a lobby environment.",
      zh: "项目需要实现自然不重复的乱纹肌理、稳定有层次的古铜色泽，并兼顾大堂空间的长期耐用性。",
    },
    solution: {
      en: "Used hand-made texture treatment, multi-step chemical aging, manual color balancing, and a protective finish layer.",
      zh: "采用人工纹理处理、多道化学做旧与手工调色，并增加保护层提升耐磨与抗氧化性能。",
    },
    result: {
      en: "Created a calm, artistic, and premium lobby atmosphere with stronger layering and a distinctive centerpiece effect.",
      zh: "最终营造出沉稳复古且富有艺术感的大堂氛围，显著提升了空间层次与品质感。",
    },
    keywords: [
      { en: "antique bronze stainless steel screen", zh: "古铜做旧不锈钢屏风" },
      { en: "hotel lobby decorative screen", zh: "酒店大堂装饰屏风" },
      { en: "custom random texture metalwork", zh: "乱纹金属定制" },
    ],
    productSlugs: ["stainless-steel-screen", "stainless-steel-decorative-sheet"],
    image: "/images/cases/山西大同假日酒店/0a54ed75be8b3f535f0d308bf117512b.jpg",
  },
  {
    slug: "jining-billiards-club",
    title: { en: "Jining Billiards Club Interior Project", zh: "山东济宁桌球会所" },
    location: { en: "Jining, Shandong, China", zh: "中国 山东济宁" },
    year: "2025",
    summary: {
      en: "Large-area stainless steel front desk cladding, ceilings, and custom decorative panels for a premium billiards club interior.",
      zh: "为高端桌球会所提供大面积不锈钢前台装饰、吊顶系统与定制装饰板应用。",
    },
    challenge: {
      en: "The project needed consistent finish quality over large surfaces, accurate ceiling installation, and durable performance for frequent commercial use.",
      zh: "项目对大面积表面一致性、吊顶安装精度以及高频使用场景下的耐用性都提出了较高要求。",
    },
    solution: {
      en: "Applied batch-controlled finish processing, modular ceiling design, durable 304 stainless steel, and a balanced cost-to-effect finish strategy.",
      zh: "通过批次工艺控制、模块化吊顶设计、高品质 304 不锈钢与工艺组合优化，实现效果与成本平衡。",
    },
    result: {
      en: "Delivered a modern and cohesive entertainment space with improved visual quality, layering, and overall customer experience.",
      zh: "最终打造出统一、干净且富有现代感的会所空间效果，显著提升了整体品质感与客户体验。",
    },
    keywords: [
      { en: "billiards club metal interior", zh: "桌球会所金属空间" },
      { en: "stainless steel front desk cladding", zh: "不锈钢前台装饰" },
      { en: "custom ceiling metalwork", zh: "定制吊顶金属工程" },
    ],
    productSlugs: ["stainless-steel-decorative-sheet", "stainless-steel-honeycomb-panel"],
    image: "/images/cases/山东济宁桌球会所/4c34c1b8c803ac02200c529b7f6ed3ac.jpg",
  },
  {
    slug: "tokyo-hermes-storefront",
    title: { en: "Tokyo Hermes Storefront Metal Screen", zh: "东京爱马仕专卖店" },
    location: { en: "Tokyo, Japan", zh: "日本 东京" },
    year: "2025",
    summary: {
      en: "Custom stainless steel decorative screen system for the storefront facade and window interface of a luxury retail space.",
      zh: "为奢侈品零售空间门头立面与橱窗界面定制不锈钢装饰屏风系统。",
    },
    challenge: {
      en: "The project required extremely high line precision, balanced openness and privacy, and flawless luxury-level finish quality.",
      zh: "项目对线条精度、通透与遮挡平衡以及奢侈品级别的细节品质都提出了极高要求。",
    },
    solution: {
      en: "Used high-precision laser cutting, parameterized layout control, carefully tuned line spacing, and multi-step surface finishing.",
      zh: "通过高精度激光切割、参数化排版控制、线条间距优化与多道表面处理，确保整体节奏与品质统一。",
    },
    result: {
      en: "Delivered a refined and rhythmic storefront facade that matched the luxury brand's identity with openness, layering, and premium metal texture.",
      zh: "最终形成极具秩序感与艺术感的门面效果，在保持通透性的同时，完美契合品牌高级调性。",
    },
    keywords: [
      { en: "luxury storefront metal screen", zh: "奢侈品门店金属屏风" },
      { en: "tokyo retail facade project", zh: "东京零售门面项目" },
      { en: "precision stainless steel screen", zh: "高精度不锈钢屏风" },
    ],
    productSlugs: ["stainless-steel-screen"],
    image: "/images/cases/日本东京爱马仕专卖店/08412d9bca5673abeba15b6227b7fd6c.jpg",
  },
];

export const faqEntries = [
  {
    q: {
      en: "What is decorative stainless steel sheet?",
      zh: "什么是不锈钢装饰板？",
    },
    a: {
      en: "Decorative stainless steel sheet is a type of stainless steel material designed for aesthetic and architectural applications. It is processed with surface finishes such as mirror, brushed, embossed, etched, or colored coatings to enhance visual appeal. These sheets are widely used in interior and exterior design, including hotels, elevators, wall cladding, and retail spaces, due to their durability, corrosion resistance, and modern appearance.",
      zh: "不锈钢装饰板是一种用于美观和建筑应用的不锈钢材料。它通过镜面、拉丝、压纹、蚀刻或彩色镀层等表面工艺处理，以提升视觉效果。由于具备耐用性、耐腐蚀性和现代外观，这类板材广泛用于室内外设计场景，包括酒店、电梯、墙面包覆和零售空间。",
    },
  },
  {
    q: {
      en: "What thickness is best for stainless steel wall cladding?",
      zh: "不锈钢墙面包覆最常用厚度是多少？",
    },
    a: {
      en: "The most commonly used thickness for stainless steel wall cladding ranges from 0.8mm to 1.5mm, depending on the application.\n- 0.8mm–1.0mm: suitable for interior decoration\n- 1.0mm–1.5mm: suitable for high-traffic or commercial areas\n- Above 1.5mm: used for structural or exterior applications\nChoosing the right thickness depends on durability requirements, installation method, and budget.",
      zh: "不锈钢墙面包覆最常用厚度通常在 0.8mm 到 1.5mm 之间，具体取决于应用场景。\n- 0.8mm–1.0mm：适合室内装饰\n- 1.0mm–1.5mm：适合高人流或商业区域\n- 1.5mm 以上：用于结构性或外墙应用\n最终厚度选择应结合耐久要求、安装方式和预算。",
    },
  },
  {
    q: { en: "What is the difference between 201 and 304 stainless steel?", zh: "201 和 304 不锈钢有什么区别？" },
    a: {
      en: "The main difference between 201 and 304 stainless steel lies in their corrosion resistance and composition.\n- 201 stainless steel: lower cost, suitable for indoor use\n- 304 stainless steel: higher corrosion resistance, suitable for humid or outdoor environments\n304 contains more nickel, making it more durable and resistant to rust. For decorative applications, 201 is often used for interior projects, while 304 is recommended for long-term or premium applications.",
      zh: "201 和 304 不锈钢的主要区别在于耐腐蚀性和成分。\n- 201 不锈钢：成本较低，适合室内使用\n- 304 不锈钢：耐腐蚀性更高，适合潮湿或户外环境\n304 含有更多镍元素，因此更耐用、抗锈能力更强。在装饰应用中，201 常用于室内项目，而 304 更适合长期或高端应用。",
    },
  },
  {
    q: { en: "What is mirror stainless steel sheet?", zh: "什么是镜面不锈钢板？" },
    a: {
      en: "Mirror stainless steel sheet is a highly polished stainless steel surface that reflects light like a mirror. It is achieved through precision grinding and polishing processes, creating a smooth, reflective finish. This material is widely used in luxury interiors, elevator panels, hotel lobbies, and decorative walls due to its modern and high-end appearance.",
      zh: "镜面不锈钢板是一种高度抛光的不锈钢表面，能够像镜子一样反射光线。它通过精密打磨与抛光工艺实现，形成光滑且高反射的表面效果。由于其现代且高端的视觉表现，这种材料广泛用于高端室内空间、电梯面板、酒店大堂和装饰墙面。",
    },
  },
  {
    q: { en: "What is brushed stainless steel finish?", zh: "什么是拉丝不锈钢表面？" },
    a: {
      en: "Brushed stainless steel, also known as satin finish, is created by polishing the surface with abrasive belts to produce fine linear textures. It offers a matte, anti-glare appearance and is resistant to fingerprints and scratches. This finish is commonly used in commercial interiors, elevators, and kitchen applications.",
      zh: "拉丝不锈钢（也称缎面）是通过砂带对表面进行打磨而形成细腻线性纹理的工艺。它具有哑光、低反光的外观，并且耐指纹、耐刮擦。这种表面常用于商业室内、电梯以及厨房应用场景。",
    },
  },
  {
    q: { en: "What is PVD coating on stainless steel?", zh: "什么是 PVD 不锈钢镀层？" },
    a: {
      en: "PVD (Physical Vapor Deposition) is a coating technology used to apply colored finishes onto stainless steel surfaces. It creates a thin, durable coating that enhances corrosion resistance and provides colors such as gold, black, bronze, and rose gold. PVD-coated stainless steel is widely used in high-end architectural and decorative applications.",
      zh: "PVD（物理气相沉积）是一种将彩色表面效果应用到不锈钢上的镀层技术。它可形成薄而耐用的涂层，提升耐腐蚀性能，并可实现如金色、黑色、古铜色和玫瑰金等颜色。PVD 彩色不锈钢广泛用于高端建筑与装饰项目。",
    },
  },
  {
    q: { en: "Is colored stainless steel durable?", zh: "彩色不锈钢耐用吗？" },
    a: {
      en: "Yes, colored stainless steel is highly durable, especially when produced using PVD coating technology. The coating is resistant to wear, corrosion, and fading, making it suitable for both indoor and outdoor applications. Proper maintenance ensures long-lasting color and surface quality.",
      zh: "是的，彩色不锈钢具有较高耐久性，尤其在采用 PVD 镀层工艺时更为明显。该镀层具备耐磨、耐腐蚀和抗褪色能力，适用于室内和室外场景。通过正确维护，可长期保持颜色与表面质量。",
    },
  },
  {
    q: { en: "What is embossed stainless steel sheet?", zh: "什么是压纹不锈钢板？" },
    a: {
      en: "Embossed stainless steel sheet features raised patterns created by rolling or pressing processes. These textures improve both aesthetics and surface strength, making the material more resistant to scratches and deformation. It is commonly used in decorative panels, elevators, and architectural designs.",
      zh: "压纹不锈钢板是通过辊压或压制工艺形成凸起纹理的不锈钢板材。这类纹理可同时提升美观度与表面强度，使材料更耐刮擦、抗变形。它常用于装饰面板、电梯和建筑设计项目。",
    },
  },
  {
    q: { en: "What are common finishes for decorative stainless steel?", zh: "不锈钢装饰板常见表面工艺有哪些？" },
    a: {
      en: "Common finishes include:\n- Mirror (8K)\n- Brushed (Hairline / Satin)\n- Embossed\n- Etched\n- Sandblasted\n- PVD colored finishes\nEach finish offers different visual and functional properties depending on the application.",
      zh: "常见表面工艺包括：\n- 镜面（8K）\n- 拉丝（发丝纹 / 缎面）\n- 压纹\n- 蚀刻\n- 喷砂\n- PVD 彩色镀层\n不同工艺在视觉效果与功能表现上各有差异，应根据应用场景选择。",
    },
  },
  {
    q: { en: "How to choose stainless steel for interior decoration?", zh: "室内装饰如何选择不锈钢材料？" },
    a: {
      en: "When selecting stainless steel for interior decoration, consider:\n- Material grade (201 or 304)\n- Surface finish\n- Thickness\n- Color options\n- Budget\nFor most indoor applications, 201 stainless steel with brushed or mirror finish is cost-effective, while 304 is preferred for higher durability.",
      zh: "选择室内装饰不锈钢时，建议考虑：\n- 材质等级（201 或 304）\n- 表面工艺\n- 厚度\n- 颜色选项\n- 预算\n多数室内项目中，201 配合拉丝或镜面工艺更具性价比；若对耐久性要求更高，建议选用 304。",
    },
  },
  {
    q: { en: "What is stainless steel fabrication?", zh: "什么是不锈钢深加工？" },
    a: {
      en: "Stainless steel fabrication refers to the process of cutting, bending, welding, and assembling stainless steel into customized products. It is widely used in architectural structures, decorative elements, and industrial components. Shunjiaxing provide custom fabrication services based on project drawings and requirements.",
      zh: "不锈钢深加工是指通过切割、折弯、焊接和组装等工序，将不锈钢制成定制化产品的过程。它广泛用于建筑结构、装饰构件和工业部件。顺佳兴可根据项目图纸和需求提供定制加工服务。",
    },
  },
  {
    q: { en: "What is stainless steel used for in architecture?", zh: "建筑项目中不锈钢常用于哪些部位？" },
    a: {
      en: "Stainless steel is widely used in architecture for:\n- Wall cladding\n- Elevator panels\n- Facades\n- Ceilings\n- Decorative structures\nIts corrosion resistance, strength, and modern appearance make it ideal for both interior and exterior applications.",
      zh: "不锈钢在建筑中的常见应用包括：\n- 墙面包覆\n- 电梯面板\n- 建筑外立面\n- 吊顶\n- 装饰结构\n其耐腐蚀性、强度与现代外观使其非常适合室内外应用。",
    },
  },
  {
    q: { en: "How to maintain decorative stainless steel?", zh: "不锈钢装饰面如何维护？" },
    a: {
      en: "Maintenance is simple:\n- Clean regularly with soft cloth\n- Use mild detergent\n- Avoid strong chemicals\n- Prevent scratches\nProper care ensures long-term shine and durability.",
      zh: "维护方法很简单：\n- 定期使用软布清洁\n- 使用中性清洁剂\n- 避免强腐蚀化学品\n- 防止划伤\n正确维护可确保长期光泽与耐用性。",
    },
  },
  {
    q: { en: "What is the MOQ for stainless steel sheets?", zh: "不锈钢板最小起订量（MOQ）是多少？" },
    a: {
      en: "MOQ (Minimum Order Quantity) varies by manufacturer and product type.\nStainless Steel Decorative Sheet : 20 Pieces\nStainless Steel Honeycomb Panel  ：20 Pieces\nStainless Steel Products： 1 Piece (Support Small-batch Customization)",
      zh: "MOQ（最小起订量）会因制造商和产品类型而不同。\n不锈钢装饰板：20 件\n不锈钢蜂窝板：20 件\n不锈钢制品：1 件（支持小批量定制）",
    },
  },
  {
    q: { en: "Can stainless steel be customized?", zh: "不锈钢可以定制吗？" },
    a: {
      en: "Yes, stainless steel can be fully customized.\nCustomization options include:\n- Size and thickness\n- Surface finish\n- Color\n- Pattern\n- Fabrication design",
      zh: "可以，不锈钢可以完全定制。\n定制选项包括：\n- 尺寸和厚度\n- 表面工艺\n- 颜色\n- 纹理\n- 加工设计",
    },
  },
];

export function productBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function applicationBySlug(slug: string) {
  return applications.find((item) => item.slug === slug);
}

export function caseBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
