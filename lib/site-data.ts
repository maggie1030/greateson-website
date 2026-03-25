import type { Locale } from "./i18n";

type LocalizedText = Record<Locale, string>;

export type Product = {
  slug: string;
  name: LocalizedText;
  category: LocalizedText;
  material: string;
  thickness: string;
  size: string;
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
  location: string;
  year: string;
  summary: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
  keywords: string[];
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
  website: "https://greateson.com",
};

export const nav = {
  en: {
    home: "Home",
    about: "About",
    factory: "Factory",
    products: "Products",
    applications: "Applications",
    cases: "Case Studies",
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
    faq: "常见问题",
    contact: "联系我们",
    quote: "获取报价",
  },
} as const;

export const products: Product[] = [
  {
    slug: "stainless-steel-screen",
    name: { en: "Stainless Steel Decorative Screen", zh: "不锈钢装饰屏风" },
    category: { en: "Engineering Decorative Product", zh: "不锈钢工程装饰制品" },
    material: "201 / 304 / 316",
    thickness: "Customized",
    size: "Customized Width & Length",
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
    image: "/images/products/screens/微信图片_20260324140047_434_50.jpg",
  },
  {
    slug: "stainless-steel-display-cabinet",
    name: { en: "Stainless Steel Display Cabinet", zh: "不锈钢展示柜" },
    category: { en: "Engineering Decorative Product", zh: "不锈钢工程装饰制品" },
    material: "201 / 304 / 316",
    thickness: "Customized",
    size: "Customized Width & Length",
    finish: {
      en: "Mirror, brushed, fluorocarbon paint, color titanium, etched, water ripple",
      zh: "镜面、拉丝、氟碳漆、彩色镀钛、蚀刻板、水波纹板",
    },
    applications: {
      en: "Luxury retail, jewelry stores, cosmetics counters, museums, brand showrooms",
      zh: "奢侈品店、珠宝店、化妆品专柜、博物馆、品牌展厅",
    },
    moq: { en: "1 set", zh: "1套起订" },
    leadTime: { en: "10-20 days", zh: "常规10-20天" },
    advantages: {
      en: "High precision, rust-resistant, long lifecycle, suitable for premium commercial spaces",
      zh: "工艺精度高，防潮防锈，使用寿命长，适配高端商业空间",
    },
    faq: [
      {
        q: { en: "Can intelligent lighting be integrated?", zh: "能否加装智能灯光系统？" },
        a: {
          en: "Yes. We provide custom LED strip and sensor lighting options.",
          zh: "支持。可定制 LED 灯带和感应灯光方案。",
        },
      },
    ],
    image: "/images/products/cabinets/微信图片_20260324135350_429_50.jpg",
  },
  {
    slug: "stainless-steel-decorative-sheet",
    name: { en: "Stainless Steel Decorative Sheet", zh: "不锈钢装饰板" },
    category: { en: "Engineering Decorative Sheet", zh: "不锈钢工程装饰板材" },
    material: "201 / 304 / 316",
    thickness: "0.4mm-3.0mm",
    size: "1000/1219/1500 × 2000/2438/3000mm, custom size",
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
    image: "/images/products/sheets/微信图片_20260324141412_438_50.jpg",
  },
  {
    slug: "stainless-steel-honeycomb-panel",
    name: { en: "Stainless Steel Honeycomb Panel", zh: "不锈钢蜂窝板" },
    category: { en: "Engineering Decorative Sheet", zh: "不锈钢工程装饰板材" },
    material: "Stainless panel + galvanized/aluminum back + aluminum honeycomb core",
    thickness: "8mm-50mm",
    size: "Max width 2m, max length 10m",
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
    image: "/images/products/panels/微信图片_20260324142352_442_50.jpg",
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
    image: "/images/products/sheets/微信图片_20260324140618_436_50.jpg",
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
    image: "/images/products/sheets/微信图片_20260324141448_439_50.jpg",
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
    image: "/images/products/cabinets/微信图片_20260324135720_431_50.jpg",
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
    image: "/images/cases/taiyuan-jinmao-mansion/微信图片_20260324153522_617_9.jpg",
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
    slug: "cambodia-luxury-club",
    title: { en: "Cambodia Premium Private Club", zh: "柬埔寨高端私人会所" },
    location: "Phnom Penh, Cambodia",
    year: "2025",
    summary: {
      en: "Custom petal tables and column cladding in champagne-gold stainless steel for a premium entertainment space.",
      zh: "为高端会所打造香槟金不锈钢花瓣台与柱体包覆系统。",
    },
    challenge: {
      en: "Complex 3D curves, seamless joints, and strict color consistency across large components.",
      zh: "复杂三维曲面、无缝拼接与大体量构件色差控制难度高。",
    },
    solution: {
      en: "3D modeling + CNC fabrication + integrated PVD coating + anti-fingerprint protection.",
      zh: "采用3D建模、CNC精加工、一体化PVD镀色与抗指纹处理。",
    },
    result: {
      en: "Delivered ahead of schedule and became the venue's signature visual identity.",
      zh: "提前交付并成为会所最具辨识度的空间符号。",
    },
    keywords: ["cambodia stainless steel project", "custom petal table fabrication", "luxury club interior metalwork"],
    productSlugs: ["stainless-steel-display-cabinet", "stainless-steel-decorative-sheet"],
    image: "/images/cases/cambodia-luxury-club/微信图片_20260319161927_25_220.jpg",
  },
  {
    slug: "taiyuan-jinmao-mansion",
    title: { en: "Taiyuan Jinmao Mansion Sales Center", zh: "太原金茂府售楼中心" },
    location: "Taiyuan, China",
    year: "2025",
    summary: {
      en: "15-meter seamless stainless grille wall with integrated champagne gold PVD finish.",
      zh: "15米一体化不锈钢隔栅墙，采用统一香槟金 PVD 工艺。",
    },
    challenge: {
      en: "Large-span continuity, precise alignment with water feature, and premium finish consistency.",
      zh: "大跨度连续结构、与水景精准对位及高端色彩一致性要求高。",
    },
    solution: {
      en: "Single-unit welding strategy, precision laser cutting, and unified vacuum coating.",
      zh: "采用单体焊接成型、激光精切与整件真空镀色方案。",
    },
    result: {
      en: "Created a landmark arrival experience and improved project brand perception.",
      zh: "形成地标级入口体验，显著增强项目品牌形象。",
    },
    keywords: ["taiyuan stainless steel project", "stainless steel grille wall", "luxury sales center facade"],
    productSlugs: ["stainless-steel-screen", "stainless-steel-decorative-sheet"],
    image: "/images/cases/taiyuan-jinmao-mansion/微信图片_20260324153518_616_9.jpg",
  },
  {
    slug: "beijing-residential-sales-center",
    title: { en: "Beijing Luxury Residential Sales Center", zh: "北京高端住宅售楼中心" },
    location: "Beijing, China",
    year: "2025",
    summary: {
      en: "Great Wall profile stainless facade with lighting integration for iconic street presence.",
      zh: "采用长城板型不锈钢外立面并整合灯光系统，打造强识别度地标形象。",
    },
    challenge: {
      en: "Curved facade geometry and weather-resistant performance for outdoor application.",
      zh: "曲面外立面成型复杂，同时需兼顾户外耐候性能。",
    },
    solution: {
      en: "Roll forming + CNC curved processing + PVD + anti-fingerprint for durable premium finish.",
      zh: "滚压成型结合 CNC 弯曲，并通过 PVD 与抗指纹提升耐久与质感。",
    },
    result: {
      en: "Increased foot traffic and became a key visual element in the project campaign.",
      zh: "有效提升到访关注度，成为项目传播的核心视觉资产。",
    },
    keywords: ["beijing metal facade", "great wall panel", "champagne gold cladding"],
    productSlugs: ["stainless-steel-decorative-sheet", "stainless-steel-screen"],
    image: "/images/products/sheets/微信图片_20260324140618_436_50.jpg",
  },
  {
    slug: "hefei-luxury-hotel",
    title: { en: "Hefei Luxury Hotel Starlight Ceiling", zh: "合肥高端酒店星光吊顶" },
    location: "Hefei, China",
    year: "2025",
    summary: {
      en: "Perforated stainless honeycomb ceiling with integrated LED matrix for immersive guest arrival.",
      zh: "穿孔不锈钢蜂窝板结合 LED 点阵，打造沉浸式酒店入口体验。",
    },
    challenge: {
      en: "High-precision perforation alignment and large panel flatness control.",
      zh: "高精度穿孔对位与大尺寸面板平整度控制难度高。",
    },
    solution: {
      en: "Algorithmic perforation layout, vacuum honeycomb bonding and integrated installation coordination.",
      zh: "采用算法化星点排布、真空复合蜂窝工艺及一体化安装协同。",
    },
    result: {
      en: "Created a signature social-media-ready hotel feature with strong durability.",
      zh: "形成酒店标志性视觉打卡点，并长期保持稳定表现。",
    },
    keywords: ["hefei hotel metal ceiling", "perforated honeycomb panel", "starlight ceiling"],
    productSlugs: ["stainless-steel-honeycomb-panel", "stainless-steel-decorative-sheet"],
    image: "/images/products/panels/微信图片_20260324142351_440_50.jpg",
  },
];

export const faqEntries = [
  {
    q: {
      en: "What is decorative stainless steel sheet?",
      zh: "什么是不锈钢装饰板？",
    },
    a: {
      en: "Decorative stainless steel sheets are architectural-grade surfaces processed with mirror, brushed, embossed, etched or PVD finishes for aesthetics and durability.",
      zh: "不锈钢装饰板是用于建筑与室内装饰的金属材料，可做镜面、拉丝、压纹、蚀刻和 PVD 等工艺，兼具美观与耐用性。",
    },
  },
  {
    q: {
      en: "What thickness is best for wall cladding?",
      zh: "墙面装饰常用厚度是多少？",
    },
    a: {
      en: "Typical ranges are 0.8-1.5mm for interiors and over 1.5mm for high-traffic or exterior structural scenarios.",
      zh: "室内墙面常见 0.8-1.5mm；高人流或结构性外用场景通常使用 1.5mm 以上。",
    },
  },
  {
    q: { en: "What is the difference between 201 and 304 stainless steel?", zh: "201 和 304 不锈钢有什么区别？" },
    a: {
      en: "304 has higher corrosion resistance and is preferred for humid or outdoor use, while 201 is cost-effective for interior decoration.",
      zh: "304 耐腐蚀更强，适合潮湿或户外；201 成本更优，常用于室内装饰。",
    },
  },
  {
    q: { en: "Is colored stainless steel durable?", zh: "彩色不锈钢耐用吗？" },
    a: {
      en: "Yes. PVD coatings provide excellent wear, corrosion and fade resistance when proper cleaning is followed.",
      zh: "耐用。采用 PVD 镀色后具有优良耐磨、耐腐蚀和抗褪色表现，规范维护可长期使用。",
    },
  },
  {
    q: { en: "Can products be fully customized?", zh: "产品可以完全定制吗？" },
    a: {
      en: "Yes. We support custom size, thickness, pattern, color, structure and fabrication details for OEM/ODM projects.",
      zh: "可以。支持尺寸、厚度、纹理、颜色、结构与加工细节的 OEM/ODM 定制。",
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
