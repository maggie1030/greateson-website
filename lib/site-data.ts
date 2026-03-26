import type { Locale } from "./i18n";

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
  website: "https://greateson.com",
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
    image:
      "/api/product-media?product=stainless-steel-products&series=Stainless%20Steel%20Screen&file=%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260326130138.jpg",
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
    image:
      "/api/product-media?product=stainless-steel-decorative-sheet&series=Color%20Electroplating%20Series&file=%E5%9B%BE%E7%89%871.png",
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
    image:
      "/api/product-media?product=stainless-steel-honeycomb-panel&series=Water%20ripple%20honeycomb%20panel%20&file=%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260324142351_440_50.jpg",
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
    location: { en: "Phnom Penh, Cambodia", zh: "柬埔寨 金边" },
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
    keywords: [
      { en: "cambodia stainless steel project", zh: "柬埔寨不锈钢项目" },
      { en: "custom petal table fabrication", zh: "花瓣台定制加工" },
      { en: "luxury club interior metalwork", zh: "高端会所金属装饰" },
    ],
    productSlugs: ["stainless-steel-screen", "stainless-steel-decorative-sheet"],
    image: "/images/cases/cambodia-luxury-club/微信图片_20260319161927_25_220.jpg",
  },
  {
    slug: "taiyuan-jinmao-mansion",
    title: { en: "Taiyuan Jinmao Mansion Sales Center", zh: "太原金茂府售楼中心" },
    location: { en: "Taiyuan, China", zh: "中国 太原" },
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
    keywords: [
      { en: "taiyuan stainless steel project", zh: "太原不锈钢项目" },
      { en: "stainless steel grille wall", zh: "不锈钢隔栅墙" },
      { en: "luxury sales center facade", zh: "高端售楼中心外立面" },
    ],
    productSlugs: ["stainless-steel-screen", "stainless-steel-decorative-sheet"],
    image: "/images/cases/taiyuan-jinmao-mansion/微信图片_20260324153518_616_9.jpg",
  },
  {
    slug: "beijing-residential-sales-center",
    title: { en: "Beijing Luxury Residential Sales Center", zh: "北京高端住宅售楼中心" },
    location: { en: "Beijing, China", zh: "中国 北京" },
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
    keywords: [
      { en: "beijing metal facade", zh: "北京金属外立面" },
      { en: "great wall panel", zh: "长城板型" },
      { en: "champagne gold cladding", zh: "香槟金包覆系统" },
    ],
    productSlugs: ["stainless-steel-decorative-sheet", "stainless-steel-screen"],
    image: "/images/products/sheets/微信图片_20260324140618_436_50.jpg",
  },
  {
    slug: "hefei-luxury-hotel",
    title: { en: "Hefei Luxury Hotel Starlight Ceiling", zh: "合肥高端酒店星光吊顶" },
    location: { en: "Hefei, China", zh: "中国 合肥" },
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
    keywords: [
      { en: "hefei hotel metal ceiling", zh: "合肥酒店金属吊顶" },
      { en: "perforated honeycomb panel", zh: "穿孔蜂窝板" },
      { en: "starlight ceiling", zh: "星光吊顶系统" },
    ],
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
