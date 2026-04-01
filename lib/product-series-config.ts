type Localized = { zh: string; en: string };

export type ProductSeriesSeed = {
  code: string;
  title: Localized;
  description: Localized;
  docFileName?: string;
};

export const productSeriesSeedMap: Record<string, ProductSeriesSeed[]> = {
  "stainless-steel-screen": [
    {
      code: "3.1.1.1",
      title: { zh: "屏风", en: "Stainless Steel Screen" },
      description: {
        zh: "不锈钢屏风采用优质不锈钢定制加工，可做激光镂空、花格、电镀、仿古做旧等工艺，兼具隔断功能与装饰效果，广泛用于酒店、别墅、售楼部、高端会所等空间，耐腐蚀、易清洁、质感高档。",
        en: "Stainless steel screens are custom-made from high-quality stainless steel, supporting laser cutting, lattice design, electroplating, and antique finishing. They serve as both space partitions and decorative pieces, widely used in hotels, villas, sales centers, and high-end clubs. They are corrosion-resistant, easy to clean, and offer an upscale texture.",
      },
      docFileName: "stainless-steel-screen.md",
    },
    {
      code: "3.1.1.2",
      title: { zh: "展示柜", en: "Stainless Steel Display Cabinet" },
      description: {
        zh: "不锈钢展示柜结构稳固、防水防锈、承重力强，可搭配玻璃、灯光与智能门锁，适用于珠宝展厅、品牌专卖店、博物馆、商场专柜等场景，用于展示精品、艺术品、奢侈品及各类商品，提升展示档次。",
        en: "Stainless steel display cabinets feature stable structure, waterproof and rust-proof performance, and strong load-bearing capacity. They can be equipped with glass, lighting, and smart locks, suitable for jewelry showrooms, brand stores, museums, and shopping mall counters to display boutiques, artworks, luxury goods, and various products with an upgraded presentation.",
      },
      docFileName: "stainless-steel-display-cabinet.md",
    },
    {
      code: "3.1.1.3",
      title: { zh: "吧台", en: "Stainless Steel Bar Counter" },
      description: {
        zh: "不锈钢吧台耐高温、抗刮耐磨、易打理，支持定制异形、弧形、一体成型等造型，适用于酒吧、清吧、餐厅、KTV、酒店大堂及家用吧台，现代简约风格，适配多种装修风格。",
        en: "Stainless steel bar counters are high-temperature resistant, scratch-proof, wear-resistant, and easy to maintain. They support custom special-shaped, curved, and integrated designs, suitable for bars, lounges, restaurants, KTVs, hotel lobbies, and home bar areas with a modern, minimalist style that matches various decors.",
      },
      docFileName: "stainless-steel-bar-counter.md",
    },
    {
      code: "3.1.1.4",
      title: { zh: "雕塑", en: "Stainless Steel Sculpture" },
      description: {
        zh: "不锈钢雕塑通过切割、锻造、抛光、电镀等工艺制作，户外耐候性强、不易生锈变形，适用于广场景观、园林工程、酒店大堂、售楼处、商业综合体等，可定制抽象、人物、动物等造型。",
        en: "Stainless steel sculptures are produced through cutting, forging, polishing, and electroplating. They feature excellent outdoor weather resistance, are not easy to rust or deform, and are suitable for square landscapes, garden projects, hotel lobbies, sales offices, and commercial complexes. Custom abstract, figure, and animal shapes are available.",
      },
      docFileName: "stainless-steel-sculpture.md",
    },
  ],
  "stainless-steel-decorative-sheet": [
    {
      code: "3.1.2.1",
      title: { zh: "彩色电镀系列", en: "Color Electroplating Series" },
      description: {
        zh: "彩色电镀是在不锈钢表面通过电化学工艺，沉积一层金属或合金镀层，形成金色、玫瑰金、黑色、古铜色等丰富色彩。镀层附着力强，色泽均匀亮丽，具备防锈、耐磨、耐指纹特性，让不锈钢兼具金属质感与高端装饰色彩。",
        en: "Color electroplating deposits a layer of metal or alloy coating on the stainless steel surface through electrochemical processes, creating rich colors such as gold, rose gold, black, bronze, etc. The coating has strong adhesion, uniform and bright color, with rust-proof, wear-resistant and fingerprint-resistant properties, making stainless steel combine metallic texture with high-end decorative colors.",
      },
      docFileName: "color-electroplating-series.md",
    },
    {
      code: "3.1.2.2",
      title: { zh: "仿古艺术金属系列", en: "Antique Art Metal Series" },
      description: {
        zh: "仿古艺术金属系列采用做旧、氧化、着色、拉丝等复合工艺，模拟复古铜、青铜、做旧银等古典效果。表面纹理自然复古，质感厚重，具有强烈的艺术气息与中式 / 欧式复古风格，耐腐蚀且不易褪色，适合高端古典装修场景。",
        en: "The Antique Art Metal Series adopts composite processes such as aging, oxidation, coloring and wire drawing to simulate retro effects like vintage copper, bronze and antique silver. The surface texture is naturally retro with heavy texture, strong artistic flavor and Chinese/European retro style. It is corrosion-resistant and not easy to fade, suitable for high-end classical decoration scenes.",
      },
      docFileName: "antique-art-metal-series.md",
    },
    {
      code: "3.1.2.3",
      title: { zh: "金属蚀刻系列", en: "Metal Etching Series" },
      description: {
        zh: "金属蚀刻通过化学药水腐蚀或激光蚀刻，在不锈钢板表面精准雕刻花纹、图案、文字、纹理等。图案精细度高、线条清晰，可实现复杂艺术花纹，表面平整细腻，兼具装饰性与立体感，常用于高端背景墙、门板、装饰面板。",
        en: "Metal etching accurately carves patterns, designs, characters and textures on the stainless steel surface through chemical corrosion or laser etching. It features high precision, clear lines and complex artistic patterns, with a smooth and delicate surface, combining decoration and three-dimensional effect. It is often used for high-end background walls, door panels and decorative panels.",
      },
      docFileName: "metal-etching-series.md",
    },
    {
      code: "3.1.2.4",
      title: { zh: "压花系列", en: "Embossed Series" },
      description: {
        zh: "压花工艺通过大型模具高压冲压，在不锈钢板材表面形成立体花纹（如菱形、方格、水波、树皮纹等）。板面硬度更高、防滑耐磨、抗刮性强，视觉立体感强，不易留划痕，适合地面、墙面、电梯轿厢、橱柜等耐磨场景。",
        en: "The embossing process forms three-dimensional patterns (such as diamond, check, water ripple, bark texture, etc.) on the stainless steel sheet through high-pressure stamping with large molds. The plate has higher hardness, anti-slip, wear-resistant and scratch-resistant properties, with strong three-dimensional vision and not easy to scratch. It is suitable for wear-resistant scenes such as floors, walls, elevator cars and cabinets.",
      },
      docFileName: "embossed-series.md",
    },
    {
      code: "3.1.2.5",
      title: { zh: "锤纹系列", en: "Hammered Finish Series" },
      description: {
        zh: "锤纹工艺由人工或机械锤击形成不规则凹凸纹理，表面呈现自然粗犷的金属肌理。质感独特、防滑、耐刮、不反光，风格复古工业风，视觉层次丰富，适合打造个性墙面、吧台、雕塑及艺术装饰件。",
        en: "The hammered finish forms irregular concave-convex textures by manual or mechanical hammering, showing a natural and rough metal texture on the surface. It has unique texture, anti-slip, scratch-resistant and non-reflective features, with retro industrial style and rich visual layers. It is suitable for creating personalized walls, bar counters, sculptures and art decorative parts.",
      },
      docFileName: "hammered-finish-series.md",
    },
  ],
  "stainless-steel-honeycomb-panel": [
    {
      code: "3.1.3.1",
      title: { zh: "平板蜂窝板", en: "Flat honeycomb panel" },
      description: {
        zh: "平板蜂窝板采用不锈钢面板与铝蜂窝芯复合而成，板面平整笔直、平整度高，结构稳定不易变形。具备质轻高强、隔音隔热、防火防潮、环保无甲醛的特点，安装便捷，适合大面积墙面、吊顶、柜体门板等平整装饰场景。",
        en: "Flat honeycomb panel is composed of stainless steel face sheet and aluminum honeycomb core. It features flat and straight surface with high evenness, stable structure and not easy to deform. It is lightweight, high-strength, sound-insulating, heat-insulating, fireproof, moisture-proof and eco-friendly without formaldehyde. Easy to install, suitable for large-area walls, ceilings, cabinet doors and other flat decoration scenes.",
      },
      docFileName: "flat-honeycomb-panel.md",
    },
    {
      code: "3.1.3.2",
      title: { zh: "异形蜂窝板", en: "Special-shaped honeycomb panel" },
      description: {
        zh: "异形蜂窝板可定制不规则几何造型、斜面、转角、多面体等特殊结构，保留蜂窝板轻质高强的优势，同时满足个性化空间设计需求。造型灵活多变，结构稳固耐用，适配创意展厅、艺术装置、高端定制柜体等非标装饰工程。",
        en: "Special-shaped honeycomb panel can be customized into irregular geometric shapes, inclined planes, corners, polyhedrons and other special structures. It retains the advantages of lightweight and high strength of honeycomb panel, while meeting the needs of personalized space design. Flexible and changeable in shape, stable and durable in structure, suitable for creative exhibition halls, art installations, high-end custom cabinets and other non-standard decoration projects.",
      },
      docFileName: "special-shaped-honeycomb-panel.md",
    },
    {
      code: "3.1.3.3",
      title: { zh: "弧形蜂窝板", en: "Curved honeycomb panel" },
      description: {
        zh: "弧形蜂窝板采用精密冷弯成型工艺，实现流畅圆弧、圆柱、曲面造型，曲面过渡自然无折痕。兼具蜂窝板的隔音、保温、轻量化优势，线条柔和美观，适合圆柱包板、弧形背景墙、穹顶、弧形吧台等流线型装修设计。",
        en: "Curved honeycomb panel adopts precision cold bending technology to achieve smooth arcs, cylinders and curved surfaces with natural transition without creases. It combines the advantages of sound insulation, heat preservation and lightweight of honeycomb panel, with soft and beautiful lines. Suitable for cylindrical cladding, curved background walls, domes, curved bar counters and other streamlined decoration designs.",
      },
      docFileName: "curved-honeycomb-panel.md",
    },
    {
      code: "3.1.3.4",
      title: { zh: "水波纹蜂窝板", en: "Water ripple honeycomb panel" },
      description: {
        zh: "水波纹蜂窝板在不锈钢面板压制立体水波纹肌理，再复合蜂窝芯制成，视觉动感强、光影效果丰富。同时具备蜂窝板的平整度与结构强度，不易鼓包、不变形，防水耐刮，适合打造轻奢背景墙、艺术隔断、大堂装饰等高端视觉效果场景。",
        en: "Water ripple honeycomb panel is made by pressing three-dimensional water ripple texture on the stainless steel face sheet and then compounding with honeycomb core. It has strong visual dynamics and rich light and shadow effects. It also possesses the flatness and structural strength of honeycomb panel, not easy to bulge or deform, waterproof and scratch-resistant. Suitable for creating high-end visual effect scenes such as light luxury background walls, art partitions and lobby decorations.",
      },
      docFileName: "water-ripple-honeycomb-panel.md",
    },
  ],
  "stainless-steel-double-curved-fabrication": [
    {
      code: "3.1.4.1",
      title: { zh: "不锈钢双曲雕塑", en: "Architectural Double Curved Metal Sculpture" },
      description: {
        zh: "不锈钢双曲雕塑适用于城市地标、商业中庭与高端景观空间，通过三维曲面建模、分段成型与精密焊接实现流动感与雕塑感兼具的视觉效果。",
        en: "Architectural double curved metal sculptures combine 3D modeling, segmented forming, and precision welding to create flowing landmark installations for public and commercial spaces.",
      },
      docFileName: "architectural-double-curved-metal-sculpture.md",
    },
    {
      code: "3.1.4.2",
      title: { zh: "不锈钢双曲天花", en: "Architectural Double Curved Ceiling" },
      description: {
        zh: "不锈钢双曲天花通过双向曲率与模块化安装系统，打造连续流畅的空间顶部造型，适用于酒店大堂、商业中庭与高端公共空间。",
        en: "Architectural double curved ceilings use dual-curvature paneling and modular installation systems to shape fluid premium ceiling forms in large public interiors.",
      },
      docFileName: "architectural-double-curved-ceiling.md",
    },
  ],
};

export const productSeriesImageDirMap: Record<string, Record<string, string>> = {
  "stainless-steel-screen": {
    "3.1.1.1": "screens",
    "3.1.1.2": "cabinets",
    "3.1.1.3": "bar-counter",
    "3.1.1.4": "sculpture",
  },
  "stainless-steel-decorative-sheet": {
    "3.1.2.1": "Color Electroplating Series",
    "3.1.2.2": "Antique Art Metal Series",
    "3.1.2.3": "Metal Etching Series",
    "3.1.2.4": "Embossed Series",
    "3.1.2.5": "Hammered Finish Series",
  },
  "stainless-steel-honeycomb-panel": {
    "3.1.3.1": "Flat honeycomb panel",
    "3.1.3.2": "Special-shaped honeycomb panel ",
    "3.1.3.3": "Curved honeycomb panel ",
    "3.1.3.4": "Water ripple honeycomb panel ",
  },
  "stainless-steel-double-curved-fabrication": {
    "3.1.4.1": "architectural-double-curved-metal-sculpture",
    "3.1.4.2": "architectural-double-curved-ceiling",
  },
};
