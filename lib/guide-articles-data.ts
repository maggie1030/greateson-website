import type { BlogPost } from "./blog-data";

export const guideArticles: BlogPost[] = [
  {
    slug: "stainless-steel-thickness-selection-guide",
    category: "guide",
    title: {
      zh: "不锈钢装饰板厚度选型终极指南：天花、墙面、踢脚线到底用多厚？",
      en: "Ultimate Stainless Steel Thickness Selection Guide: How Thick Should Ceilings, Walls, and Skirting Be?",
    },
    excerpt: {
      zh: "厚度是决定不锈钢装饰平整度、加工稳定性与返工风险的核心参数。本文系统讲解常见部位厚度建议、超薄板风险、成本交期影响与采购验收要点。",
      en: "Thickness is the key variable behind stainless steel flatness, fabrication reliability, and rework risk. This guide explains recommended gauges by application, ultra-thin failure risks, cost and lead-time impact, and procurement acceptance criteria.",
    },
    publishedAt: "2026-03-27",
    readTime: { zh: "9 分钟", en: "9 min read" },
    keywords: {
      zh: ["不锈钢装饰板厚度", "不锈钢板材厚度标准", "踢脚线厚度", "不锈钢重量计算公式", "蜂窝板面板厚度"],
      en: ["stainless steel decorative sheet thickness", "stainless steel thickness standard", "skirting thickness", "stainless steel weight formula", "honeycomb panel face sheet thickness"],
    },
    sections: [
      {
        heading: { zh: "行业趋势", en: "Industry Trend" },
        paragraphs: [
          {
            zh: "行业正在从能用就好的低价薄板方案，转向强调实厚与高级平整度的品质交付。过去大量0.3毫米级薄板在灯光下容易暴露波浪纹和凹陷，导致返工频发。如今高端项目普遍要求更高刚性，必要时采用蜂窝复合来保障视觉稳定和空间质感。",
            en: "The market is shifting from low-cost ultra-thin sheets to full-gauge specifications that prioritize visual flatness and premium finish quality. Historically, 0.3 mm class panels often revealed waviness and dents under lighting, causing repeated rework. Premium projects now favor higher rigidity and, when needed, honeycomb composites to secure stable appearance and architectural quality.",
          },
        ],
      },
      {
        heading: { zh: "产品定义与核心参数", en: "Product Definition and Core Parameters" },
        paragraphs: [
          {
            zh: "装饰用冷轧板常见厚度为0.3到3.0毫米，常见宽度为1000、1219、1500毫米。采购核算应基于实厚和重量公式，按长度、宽度、实厚与密度计算材料公斤数，并在合同中明确以实测足厚验收，避免标厚与实厚偏差引发争议。",
            en: "Decorative cold-rolled sheets typically range from 0.3 to 3.0 mm, with common widths of 1000, 1219, and 1500 mm. Procurement should be weight-based using actual thickness, with material mass calculated from length, width, thickness, and density. Contracts should explicitly adopt full-gauge measured acceptance to prevent disputes between nominal and actual thickness.",
          },
        ],
      },
      {
        heading: { zh: "各部位厚度建议", en: "Recommended Thickness by Area" },
        paragraphs: [
          {
            zh: "天花、墙面、门套和踢脚线应按受力、碰撞频次和视觉面积分层选型。低受力区域可用中薄规格，但大面墙体、门套收口和高频碰撞区域应提高厚度。对于镜面或大面积重点视觉界面，优先考虑1.0毫米以上或蜂窝复合结构以避免透底与变形。",
            en: "Ceilings, walls, door frames, and skirting should be specified based on structural stress, collision frequency, and visual exposure. Moderate gauges may work in low-stress zones, while large wall surfaces and impact-prone details require thicker sheets. For mirror finishes and major visual focal areas, start from 1.0 mm or use honeycomb-backed assemblies to reduce telegraphing and deformation risk.",
          },
        ],
      },
      {
        heading: { zh: "为何不建议超薄板", en: "Why Ultra-Thin Sheets Are Not Recommended" },
        paragraphs: [
          {
            zh: "0.3到0.5毫米薄板在8K镜面加工中更易出现卷板和报废，搬运中也容易产生不可修复折痕。安装后平整度往往不足，视觉质感明显下降。对于酒店与商业空间，超薄板看似省材料，实际会把成本转移到返工、停工和索赔阶段。",
            en: "Sheets in the 0.3 to 0.5 mm range are more likely to fail during 8K mirror processing and are easily damaged during handling. Installed flatness is often insufficient, resulting in lower perceived quality. In hospitality and commercial projects, ultra-thin selection may reduce upfront material cost but typically increases rework, delay, and claim exposure.",
          },
        ],
      },
      {
        heading: { zh: "成本与交期参考", en: "Cost and Lead-Time Reference" },
        paragraphs: [
          {
            zh: "订单中规格过多会降低开板效率并拉长交期，统一厚度与宽度可显著提升排产效率。增厚会增加材料重量成本，但通常能减少后期维修和争议成本。对总拥有成本而言，前期合理选厚比后期补救更经济。",
            en: "Too many mixed gauges and widths in one order reduce cutting efficiency and extend lead times, while standardized specifications improve production planning. Increasing thickness raises material weight cost but usually lowers downstream maintenance and dispute cost. From a lifecycle perspective, selecting the right gauge upfront is more economical than later remediation.",
          },
        ],
      },
      {
        heading: { zh: "常见误区", en: "Common Misconceptions" },
        paragraphs: [
          {
            zh: "常见误解是蜂窝复合后可用过薄镜面面层，实际上高温高压复合会使蜂窝纹理反印到薄面板。另一个误解是吊顶减重只能靠减薄单板，正确路径应是通过复合与结构优化减重，否则薄板在温差作用下更易波浪变形。",
            en: "A common misconception is that mirror face sheets can be very thin after honeycomb bonding, while in reality pressure and heat can print core texture through thin layers. Another misconception is reducing ceiling weight only by reducing sheet thickness. The correct strategy is structural and composite optimization, because thin sheets are more vulnerable to thermal waviness.",
          },
        ],
      },
      {
        heading: { zh: "质检流程与结论", en: "Quality Control Workflow and Conclusion" },
        paragraphs: [
          {
            zh: "厚度只是起点，来料质检同样关键，应排查脱皮、焊点、沙眼、水印和波浪超差，并对镜面材料做专项检测。结论是避免低于0.6毫米的超薄方案，关键视觉面优先增厚或蜂窝复合，并坚持实厚验收，才能稳定交付。",
            en: "Thickness is only one part of quality. Incoming inspection must also check for peeling, weld marks, pinholes, water marks, and excessive waviness, with dedicated checks for mirror-grade stock. The practical conclusion is to avoid sub-0.6 mm ultra-thin selections, use thicker or honeycomb solutions for key visual surfaces, and enforce actual thickness acceptance for reliable delivery.",
          },
        ],
      },
    ],
    faq: [
      {
        q: { zh: "不同钢厂原材料质量差异大吗？", en: "Do different mills show major quality differences?" },
        a: {
          zh: "差异明显。高端项目通常会选厚度和表面稳定性更好的大厂材料，成本更高但风险更低。",
          en: "Yes. Premium projects often specify top-tier mills with tighter thickness and surface consistency, which cost more but reduce project risk.",
        },
      },
      {
        q: { zh: "超宽超长板材容易加工吗？", en: "Are extra-wide and extra-long sheets easy to process?" },
        a: {
          zh: "难度更高。超规格板材对平整度、设备和运输要求更严，通常会增加加工费并延长交期。",
          en: "They are more difficult. Oversized sheets require better flatness, stronger equipment capability, and careful logistics, which usually increase cost and lead time.",
        },
      },
      {
        q: { zh: "标称0.6毫米一定是实厚0.6毫米吗？", en: "Does nominal 0.6 mm always equal actual 0.6 mm?" },
        a: {
          zh: "不一定。采购应明确足厚标准，并以千分尺实测作为验收依据。",
          en: "Not necessarily. Procurement documents should define full-gauge requirements and use micrometer measurements for acceptance.",
        },
      },
      {
        q: { zh: "门套用0.5毫米可以吗？", en: "Is 0.5 mm suitable for door-frame applications?" },
        a: {
          zh: "通常不建议。门套是高碰撞区域，0.5毫米抗凹陷能力不足，建议提高到更稳妥区间。",
          en: "Generally not recommended. Door frames face frequent impact, and 0.5 mm lacks dent resistance, so a thicker range is safer.",
        },
      },
      {
        q: { zh: "密度系数在采购中如何使用？", en: "How is density used in procurement calculations?" },
        a: {
          zh: "将密度代入重量公式即可快速核算公斤数和总价，常用201和304按7.93计算。",
          en: "Use density in the weight formula to estimate kilograms and total cost quickly, with 7.93 commonly used for 201 and 304.",
        },
      },
    ],
  },
  {
    slug: "how-to-identify-304-vs-201-stainless-steel",
    category: "guide",
    title: {
      zh: "拒绝被骗：304 与 201 不锈钢辨别与选材指南",
      en: "Avoid Material Fraud: 304 vs 201 Stainless Steel Identification and Selection Guide",
    },
    excerpt: {
      zh: "201与304外观相似但耐蚀能力差异巨大。本文解析成分差别、禁用场景、四种实用鉴别方法与验收标准，帮助项目避免后期生锈翻车。",
      en: "201 and 304 may look alike, but their corrosion performance differs significantly. This guide covers composition gaps, prohibited applications, four practical identification methods, and acceptance standards to prevent rust-related project failure.",
    },
    publishedAt: "2026-03-27",
    readTime: { zh: "10 分钟", en: "10 min read" },
    keywords: {
      zh: ["304与201不锈钢的区别", "不锈钢辨别方法", "含镍量测试", "不锈钢生锈原因", "光谱仪测试"],
      en: ["304 vs 201 stainless steel", "stainless steel identification", "nickel content testing", "stainless rust causes", "spectrometer verification"],
    },
    sections: [
      {
        heading: { zh: "行业揭秘", en: "Industry Reality" },
        paragraphs: [
          {
            zh: "304是高标准装饰项目的常见基线，201则是更低成本替代。两者表观经拉丝或镀色后接近，导致市场存在以201冒充304的风险。一旦用于潮湿或化学暴露环境，错误用材会在短时间内出现锈蚀和返工。",
            en: "304 is the standard baseline for high-quality architectural stainless projects, while 201 is a lower-cost substitute. After brushing or coloring, both can appear similar, creating substitution risk in the market. When the wrong material is used in humid or chemically exposed areas, corrosion and rework can appear quickly.",
          },
        ],
      },
      {
        heading: { zh: "核心差异", en: "Core Difference" },
        paragraphs: [
          {
            zh: "不锈钢耐蚀性与含镍量密切相关。201通常镍含量更低且内部等级差异大，性能波动明显。304含镍更高，耐蚀与延展性更稳定。沿海或高氯环境则应考虑316以提升长期安全性。",
            en: "Corrosion resistance is strongly linked to nickel content. 201 usually has lower nickel and broader internal grade variation, resulting in less consistent performance. 304 offers higher nickel and more stable corrosion and forming behavior. Marine or high-chloride environments often require 316 for long-term safety.",
          },
        ],
      },
      {
        heading: { zh: "场景排雷", en: "Application Red Flags" },
        paragraphs: [
          {
            zh: "201可用于干燥低腐蚀室内，但厨房、卫浴、地下室、沿海户外及强腐蚀厂区应禁用。此类场景长期存在湿热和化学介质，耐蚀不足会快速放大维护成本。关键界面建议以304及以上等级为底线。",
            en: "201 can be used in dry, low-corrosion indoor conditions, but should be excluded from kitchens, bathrooms, basements, coastal exteriors, and aggressive industrial zones. These environments involve sustained moisture and chemical exposure, where lower corrosion resistance creates high maintenance cost. Critical surfaces should generally baseline at 304 or above.",
          },
        ],
      },
      {
        heading: { zh: "四种辨别方法", en: "Four Identification Methods" },
        paragraphs: [
          {
            zh: "现场识别可采用表面观察、药水测试、火花经验法和光谱仪检测。前两者适合快速筛查，火花法依赖经验，最终验收应以光谱仪成分数据为准，特别是含镍区间判定，避免误判。",
            en: "Field identification can use visual inspection, test solution, grinder spark observation, and spectrometer analysis. The first methods are suitable for quick screening, spark reading depends on operator experience, and final acceptance should rely on spectrometer chemistry data, especially nickel range verification.",
          },
        ],
      },
      {
        heading: { zh: "采购避坑", en: "Procurement Risk Control" },
        paragraphs: [
          {
            zh: "若304报价异常接近201，应警惕材质造假或厚度下差。即便采购201，也要关注其内部等级和可加工性。合同应同时锁定材质、实厚、检测方法与责任边界，避免低价陷阱。",
            en: "If a quoted 304 price is unusually close to 201, it may indicate grade substitution or thickness under-delivery. Even when buying 201 intentionally, internal grade and formability must be controlled. Contracts should define grade, actual thickness, test method, and liability boundary to avoid low-price traps.",
          },
        ],
      },
      {
        heading: { zh: "常见误区", en: "Common Misconceptions" },
        paragraphs: [
          {
            zh: "304并非永不生锈，只是在常规环境更耐蚀。若长期接触强酸强碱或含氯清洁剂，钝化膜仍可能被破坏。项目应建立清洁剂与维护规范，防止材料被错误使用导致失效。",
            en: "304 is not absolutely rust-proof; it is corrosion-resistant under typical conditions. Long-term exposure to strong acids, alkalis, or chloride cleaners can still break its passive layer. Projects need clear cleaning and maintenance standards to prevent misuse-related failures.",
          },
        ],
      },
      {
        heading: { zh: "质检承诺与结论", en: "Verification Commitment and Conclusion" },
        paragraphs: [
          {
            zh: "可靠交付应在入库和出厂两端执行光谱验证，以数据取代口头承诺。结论是潮湿和腐蚀场景必须避开201，关键项目应将药水预筛和光谱复核纳入标准验收流程。",
            en: "Reliable delivery requires spectrometer verification at both incoming and outgoing stages, replacing verbal claims with measurable data. The key conclusion is to avoid 201 in humid or corrosive environments and include both rapid screening and spectrometer confirmation in standard acceptance workflow.",
          },
        ],
      },
    ],
    faq: [
      {
        q: { zh: "磁铁能准确区分201和304吗？", en: "Can a magnet accurately distinguish 201 from 304?" },
        a: {
          zh: "不能。304冷加工后也可能带弱磁性，磁性不能作为可靠判定依据。",
          en: "No. 304 can show weak magnetism after cold working, so magnetic response is not a reliable indicator.",
        },
      },
      {
        q: { zh: "厨房橱柜应选哪种不锈钢？", en: "Which grade is recommended for kitchen stainless cabinetry?" },
        a: {
          zh: "建议至少304。厨房存在水汽、盐分和调味品暴露，201长期风险高。",
          en: "At least 304 is recommended. Kitchens involve moisture and salt exposure, where 201 carries higher long-term risk.",
        },
      },
      {
        q: { zh: "201和304可以通过重量区分吗？", en: "Can weight be used to distinguish 201 from 304?" },
        a: {
          zh: "不可以，两者密度接近，称重不是可靠方法。",
          en: "No. Their densities are close, so weighing is not a dependable method.",
        },
      },
      {
        q: { zh: "为什么有些201折弯容易断？", en: "Why do some 201 sheets crack during bending?" },
        a: {
          zh: "与内部等级和成分有关，低等级201更硬更脆，延展性不足。",
          en: "It is related to internal grade and chemistry. Lower-grade 201 is often harder, more brittle, and less ductile.",
        },
      },
      {
        q: { zh: "被强酸清洁剂腐蚀后还能修复吗？", en: "Can acid-cleaner damage be repaired?" },
        a: {
          zh: "轻微浮锈可处理，若深度腐蚀并破坏饰面，通常需要更换整板。",
          en: "Minor surface corrosion can be treated, but deep damage with finish destruction usually requires full panel replacement.",
        },
      },
    ],
  },
  {
    slug: "pvd-vs-nano-color-oil-stainless-steel-coloring",
    category: "guide",
    title: {
      zh: "不锈钢颜色加工的秘密：PVD真空电镀与纳米色油怎么选",
      en: "PVD Vacuum Coating vs Nano Color Oil: How to Choose the Right Stainless Steel Coloring Process",
    },
    excerpt: {
      zh: "同样是彩色不锈钢，价格、质感与耐久性差异巨大。本文对比PVD与纳米色油在工艺原理、折弯性能、户外耐候、成本和交期上的核心区别。",
      en: "Color stainless steel can vary dramatically in price, appearance, and durability. This guide compares PVD and nano color oil across process logic, bendability, weather resistance, cost, and delivery timeline.",
    },
    publishedAt: "2026-03-27",
    readTime: { zh: "9 分钟", en: "9 min read" },
    keywords: {
      zh: ["不锈钢彩色工艺", "PVD与纳米色油区别", "不锈钢电镀掉色", "纳米色油抗指纹", "潘通色不锈钢"],
      en: ["stainless steel coloring process", "PVD vs nano color oil", "stainless steel color fading", "anti-fingerprint nano coating", "Pantone color stainless steel"],
    },
    sections: [
      {
        heading: { zh: "行业揭秘", en: "Industry Insight" },
        paragraphs: [
          {
            zh: "同样色卡下报价差距大的原因在于工艺路线不同。PVD强调金属膜层质感和成形稳定，纳米色油强调颜色自由度和成本效率。若前期选型不匹配，后续可能出现折弯爆边、户外褪色或批次色差问题。",
            en: "Large quote differences under similar color cards mainly come from different process routes. PVD focuses on metallic film quality and forming stability, while nano color oil emphasizes color freedom and cost efficiency. If specification is mismatched early, projects may face edge cracking, outdoor fading, or batch color variation later.",
          },
        ],
      },
      {
        heading: { zh: "核心差异", en: "Core Difference" },
        paragraphs: [
          {
            zh: "PVD是金属离子物理沉积，膜层薄且保留金属纹理，延展性通常更好。纳米色油是喷涂固化形成漆膜，能实现丰富实色和潘通定制，但漆膜在高强折弯下更易开裂泛白。两者应按设计表达与加工强度协同决策。",
            en: "PVD is a physical deposition of metal ions, producing a thin film that preserves metallic texture and generally offers better ductility. Nano color oil creates a cured paint film that enables rich solid colors and Pantone matching, but is more prone to whitening and cracking under aggressive bending. Selection should balance visual intent and forming intensity.",
          },
        ],
      },
      {
        heading: { zh: "适用场景排雷", en: "Application Filters" },
        paragraphs: [
          {
            zh: "异形深折、门套立柱等高应力构件更适合PVD或真铜电镀。若项目目标是精准品牌色或纯哑黑，纳米色油更具优势。室外日照环境若用纳米色油，必须升级抗UV体系，否则褪色和脱落风险显著增加。",
            en: "High-stress components such as complex bends, door frames, and columns are generally better served by PVD or true copper plating. If the priority is exact brand color or pure matte black, nano color oil is usually more suitable. For sun-exposed exterior applications, nano systems must include UV-protection upgrades to control fading and peeling risk.",
          },
        ],
      },
      {
        heading: { zh: "工艺流程与选型", en: "Process Flow and Selection" },
        paragraphs: [
          {
            zh: "纳米色油稳定性的关键在于前处理与喷涂控制，通常需经历电解清洁、钝化、喷涂和烘干等步骤。若省略关键前处理，附着力会下降并引发缺陷。PVD则更依赖真空沉积设备与膜层控制能力，适合强调金属骨相的高端项目。",
            en: "Nano color oil stability depends on complete pretreatment and spray control, typically including electrolytic cleaning, passivation, spraying, and curing. Skipping key pretreatment steps can reduce adhesion and create defects. PVD relies more on vacuum deposition capability and film control, making it suitable for premium projects that require authentic metallic expression.",
          },
        ],
      },
      {
        heading: { zh: "成本与交期参考", en: "Cost and Lead-Time Reference" },
        paragraphs: [
          {
            zh: "常规配置下纳米色油成本通常低于复杂电镀，但若叠加高硬度、抗UV和高等级抗指纹，价格会提高。两类工艺常见交期多在5到7天，多道底色或复合流程会顺延。",
            en: "Under standard configurations, nano color oil is often cheaper than complex plating routes. However, high-hardness, UV-resistant, and premium anti-fingerprint requirements increase cost. Typical lead time for both methods is around five to seven days, with longer timelines for multi-stage finishing.",
          },
        ],
      },
      {
        heading: { zh: "常见误区", en: "Common Misconceptions" },
        paragraphs: [
          {
            zh: "并非所有表面都应封无指纹油，镜面板通常不适合该处理。另一个误区是硬度越高越好，过高硬度会牺牲延展性并提高折弯爆边风险。商业项目应追求耐磨与加工安全之间的平衡。",
            en: "Not every surface should receive anti-fingerprint topcoat, and mirror surfaces are usually unsuitable for this treatment. Another misconception is that higher hardness is always better, while excessive hardness can reduce ductility and increase edge-cracking risk. Commercial projects should optimize the balance between wear resistance and fabrication safety.",
          },
        ],
      },
      {
        heading: { zh: "质检防损与结论", en: "Quality Control and Conclusion" },
        paragraphs: [
          {
            zh: "当项目必须采用纳米色油且板厚超过1.2毫米时，应在折弯前进行背面刨槽并准备同色修补体系。结论是PVD更适合追求金属质感和高延展项目，纳米色油更适合追求精准实色与抗指纹场景，前置选型决定最终稳定性。",
            en: "When nano color oil must be used on sheets above 1.2 mm, backside grooving and color-matched touch-up planning should be included before bending. In summary, PVD is stronger for metallic quality and high-formability needs, while nano color oil is stronger for precise solid colors and anti-fingerprint requirements. Early specification strategy determines final performance stability.",
          },
        ],
      },
    ],
    faq: [
      {
        q: { zh: "纳米镀铜与水镀真铜刮开后有什么区别？", en: "How do nano copper tone and true copper plating differ in scratch testing?" },
        a: {
          zh: "纳米色油刮开后通常露出不锈钢本色，水镀真铜则会显出铜层本色。",
          en: "Nano color oil usually reveals stainless substrate when scratched, while true copper plating reveals an actual copper layer.",
        },
      },
      {
        q: { zh: "水性漆和油性漆如何选择？", en: "How should water-based and solvent-based coatings be selected?" },
        a: {
          zh: "当前工程更偏向环保型高性能水性体系，在工艺受控条件下可兼顾附着力和耐久性。",
          en: "Current architectural projects generally favor high-performance water-based systems for environmental compliance while maintaining adhesion and durability under proper process control.",
        },
      },
      {
        q: { zh: "为什么纳米色油后的拉丝纹理会变弱？", en: "Why does brushed texture look softer after nano color oil?" },
        a: {
          zh: "漆膜会覆盖并填充部分微细纹理，因此金属纹路锐度低于纯电镀膜层。",
          en: "The paint film partially covers and fills micro texture, so brushed sharpness is lower than metallic coating systems.",
        },
      },
      {
        q: { zh: "纳米色油可以抗指纹吗？", en: "Can nano color oil provide anti-fingerprint performance?" },
        a: {
          zh: "可以，通常可通过配方实现良好的抗指纹与易清洁性能。",
          en: "Yes. With the right formulation, nano color oil can deliver strong anti-fingerprint and easy-clean performance.",
        },
      },
      {
        q: { zh: "哑黑不锈钢通常如何实现？", en: "How is matte black stainless steel commonly produced?" },
        a: {
          zh: "多通过纳米色油路线，以高浓度黑色色浆和哑光配方固化实现。",
          en: "It is commonly achieved through nano color oil using concentrated black pigmentation and matte curing formulas.",
        },
      },
    ],
  },
  {
    slug: "stainless-steel-bending-edge-cracking-prevention-guide",
    category: "guide",
    title: {
      zh: "折弯爆边、泛白怎么破：彩色不锈钢加工与安装防损指南",
      en: "How to Prevent Edge Cracking and Whitening: Colored Stainless Steel Fabrication and Installation Guide",
    },
    excerpt: {
      zh: "折弯爆边与泛白是彩色不锈钢最常见的报废原因。本文从应力机制、刨槽法则、高危板材加工顺序到补救方式，给出可执行防损策略。",
      en: "Edge cracking and whitening are among the most common scrap causes in colored stainless steel projects. This guide provides actionable prevention from stress mechanics and grooving rules to high-risk material workflows and repair planning.",
    },
    publishedAt: "2026-03-27",
    readTime: { zh: "9 分钟", en: "9 min read" },
    keywords: {
      zh: ["不锈钢折弯爆边", "折弯泛白原因", "不锈钢刨槽工艺", "彩色不锈钢加工", "不锈钢折边裂开"],
      en: ["stainless steel edge cracking", "bending whitening cause", "stainless steel V grooving", "colored stainless fabrication", "bend crack prevention"],
    },
    sections: [
      {
        heading: { zh: "行业痛点", en: "Industry Pain Point" },
        paragraphs: [
          {
            zh: "从门套到踢脚线，不锈钢由平面转立体都要经过折弯。现场最常见问题是折角处泛白或爆漆，不仅造成材料报废，也引发供应商与施工方责任争议，拖慢工期并增加项目成本。",
            en: "From door frames to skirting details, transforming flat sheets into formed components requires bending. The most common site failures are whitening lines and edge coating cracks, which drive material scrap, supplier-installer disputes, schedule delays, and added project cost.",
          },
        ],
      },
      {
        heading: { zh: "核心元凶解析", en: "Root Cause Analysis" },
        paragraphs: [
          {
            zh: "问题本质是基材延展性与表层涂层延展性不匹配。板越厚，折弯外弧拉伸应力越大。若表层是脆性漆膜，无法同步延伸就会开裂，泛白即底层金属暴露。若涂层硬度过高，爆裂风险会进一步放大。",
            en: "The core issue is ductility mismatch between metal substrate and surface coating. Thicker sheets produce higher tensile strain at the outer bend radius. If the coating is brittle and cannot elongate with the substrate, cracking occurs and whitening appears as exposed metal. Excessively hard coating systems further increase failure probability.",
          },
        ],
      },
      {
        heading: { zh: "刨槽黄金法则", en: "Golden Rule of Grooving" },
        paragraphs: [
          {
            zh: "针对厚板上漆构件，背面V型刨槽是最有效防损措施。常用控制是刨去约三分之一厚度，以释放反弹张力并降低表皮拉伸，既能得到更锐利折角，也能明显降低爆边和泛白概率。",
            en: "For coated thick-sheet components, backside V-grooving is the most effective damage-control method. A common rule is removing about one-third of thickness to reduce springback stress and surface strain, enabling sharper corners while lowering whitening and edge-crack risk.",
          },
        ],
      },
      {
        heading: { zh: "三类高危板材加工指南", en: "Guidance for Three High-Risk Materials" },
        paragraphs: [
          {
            zh: "仿古做旧板因表层脆性高，必须低拉伸轻压成型并提前刨槽。水波纹板需严格控制工序顺序和尺寸精度，避免折线扭曲。热转印木纹和石纹板应控制基材厚度在安全区间，超限后折弯失效风险明显上升。",
            en: "Antique patina boards require low-strain forming with pre-grooving due to brittle surface structure. Water-ripple embossed sheets demand strict sequence control and dimensional precision to avoid bend-line distortion. Heat-transfer wood and stone finishes must stay within safe substrate thickness limits to prevent forming failure.",
          },
        ],
      },
      {
        heading: { zh: "成本与交期考量", en: "Cost and Lead-Time Considerations" },
        paragraphs: [
          {
            zh: "刨槽会增加单米加工费和前期深化时间，但能显著降低整板报废概率。若为节省小额工费而跳过刨槽，往往会在后续产生更高的返工和替换成本。",
            en: "Grooving increases per-meter processing cost and front-end detailing time, but substantially reduces full-panel scrap risk. Skipping this step to save minor process cost often results in much higher downstream rework and replacement expense.",
          },
        ],
      },
      {
        heading: { zh: "常见误区", en: "Common Misconceptions" },
        paragraphs: [
          {
            zh: "现场常把爆边归因于油漆差，但很多案例的真正问题是工艺路径违背物理边界。只要前处理与附着达标，不合理的厚板死折才是主要风险来源。",
            en: "Field teams often blame coating quality, but many failures are actually caused by process paths that exceed physical limits. With compliant pretreatment and adhesion, aggressive direct bending on thick coated sheets is usually the main risk driver.",
          },
        ],
      },
      {
        heading: { zh: "补救措施与结论", en: "Repair Actions and Conclusion" },
        paragraphs: [
          {
            zh: "轻微泛白可通过同色修补漆点补改善，但深度爆裂通常只能重做。结论是防患于未然，项目应将刨槽规则、厚度上限和工序交底前置化，避免把可控风险转化为现场事故。",
            en: "Minor whitening may be improved with color-matched touch-up, while severe cracking usually requires remanufacture. The key conclusion is prevention first: define grooving rules, thickness limits, and process briefings upfront to keep controllable risk out of the installation stage.",
          },
        ],
      },
    ],
    faq: [
      {
        q: { zh: "0.6毫米纳米色油板折弯必须刨槽吗？", en: "Is grooving mandatory for bending 0.6 mm nano-coated sheets?" },
        a: {
          zh: "通常不必，若非极端锐角折弯且涂层合格，一般可安全加工。",
          en: "Usually not mandatory. With compliant coating and non-extreme bend geometry, it is generally process-safe.",
        },
      },
      {
        q: { zh: "PVD电镀板折弯也会爆边吗？", en: "Can PVD-coated sheets also crack at bend edges?" },
        a: {
          zh: "概率相对更低，PVD膜层与基材延展匹配更好，适合复杂折弯场景。",
          en: "The probability is generally lower because PVD film has better ductility compatibility with the substrate, making it suitable for complex forming.",
        },
      },
      {
        q: { zh: "为什么有些201薄板也会折断？", en: "Why do some thin 201 sheets still fracture?" },
        a: {
          zh: "常与基材等级偏低有关，硬脆特性明显，折弯与刨槽时更易断裂。",
          en: "It is often related to lower-grade base material with high brittleness, which fractures more easily during bending and grooving.",
        },
      },
      {
        q: { zh: "水波纹板先刨槽再冲压会有影响吗？", en: "Does grooving before embossing affect water-ripple panels?" },
        a: {
          zh: "会有一定影响，因此必须依赖精确排版和设备调校来保证折线质量。",
          en: "Yes, it can have some effect, so accurate layout planning and machine calibration are essential to maintain bend-line quality.",
        },
      },
      {
        q: { zh: "能做出绝对无R角直角吗？", en: "Can stainless steel achieve a true no-radius corner?" },
        a: {
          zh: "直接折弯通常会产生R角，需通过背面深刨槽才能接近无R角清角效果。",
          en: "Direct bending typically creates a radius; near no-radius corners usually require deep backside grooving.",
        },
      },
    ],
  },
  {
    slug: "stainless-steel-etching-photochemical-vs-silk-screen-guide",
    category: "guide",
    title: {
      zh: "不锈钢蚀刻工艺终极指南：感光蚀刻 vs 丝印蚀刻",
      en: "Ultimate Stainless Steel Etching Guide: Photochemical Etching vs Silk Screen Etching",
    },
    excerpt: {
      zh: "感光蚀刻和丝印蚀刻在精度、深度、模具投入与批量效率上各有优势。本文帮助您按图案复杂度、拼接需求和成本结构做出正确工艺选择。",
      en: "Photochemical and silk screen etching each offer distinct strengths in precision, depth, tooling economics, and production efficiency. This guide helps teams choose the right method based on pattern complexity, seam requirements, and cost structure.",
    },
    publishedAt: "2026-03-27",
    readTime: { zh: "9 分钟", en: "9 min read" },
    keywords: {
      zh: ["不锈钢蚀刻工艺", "感光蚀刻", "丝印蚀刻", "电梯门花板", "不锈钢多色蚀刻"],
      en: ["stainless steel etching process", "photochemical etching", "silk screen etching", "elevator decorative panel", "multi color stainless etching"],
    },
    sections: [
      {
        heading: { zh: "行业揭秘", en: "Industry Insight" },
        paragraphs: [
          {
            zh: "不锈钢蚀刻是化学减材工艺，通过保护层控制腐蚀区域，在金属表面形成可持久保留的立体纹理。该技术广泛用于电梯内饰、金属壁画和装饰花板，核心价值在于高还原度图文表达与批量可复制性。",
            en: "Stainless steel etching is a chemical subtraction process that uses protective masks to control where corrosion occurs, creating permanent relief patterns on metal surfaces. It is widely used in elevator interiors, metal murals, and decorative panels, valued for high-fidelity graphic expression and repeatable production.",
          },
        ],
      },
      {
        heading: { zh: "核心对比：感光 vs 丝印", en: "Core Comparison: Photochemical vs Silk Screen" },
        paragraphs: [
          {
            zh: "感光蚀刻以胶片曝光成膜，边缘更锐利、细线表现更好，且可支持更深蚀刻。丝印蚀刻依赖网板印刷，适合大批量标准图案，但在极细线条和边缘精度上存在天然限制，深度通常不及感光路线。",
            en: "Photochemical etching forms the resist through film exposure, delivering sharper edges, stronger fine-line capability, and deeper etch potential. Silk screen etching uses mesh printing and is efficient for large-volume standard patterns, but has inherent limits in ultra-fine detail and maximum depth.",
          },
        ],
      },
      {
        heading: { zh: "场景排雷：拼接与超宽板红线", en: "Application Red Lines: Seam Alignment and Ultra-Wide Panels" },
        paragraphs: [
          {
            zh: "涉及巨幅拼接壁画或跨板连续线条时，应优先感光蚀刻以降低错位和锯齿风险。当板宽达到超宽规格时，工艺选择也常受设备物理边界限制。相对简单的常规门花且批量大时，丝印蚀刻在成本端更有优势。",
            en: "For large mural assemblies or continuous lines across panel seams, photochemical etching is preferred to reduce misalignment and jagged-edge risk. Ultra-wide panel requirements may also force process selection due to equipment limits. For simpler standard door patterns at high volume, silk screen etching often provides better cost efficiency.",
          },
        ],
      },
      {
        heading: { zh: "工艺叠加玩法", en: "Process Combination Strategies" },
        paragraphs: [
          {
            zh: "蚀刻可与电镀、做旧和多色填漆组合，实现从金属高光到复古层次再到彩色图文的多维表达。若项目要求深槽填色，需预留足够蚀刻深度并在设计阶段提前锁定配套工艺路径。",
            en: "Etching can be combined with plating, patina, and multi-color infill to create effects ranging from premium metallic highlights to vintage depth and colored graphics. For deep-groove color filling, adequate etch depth and compatible finishing paths must be defined at design stage.",
          },
        ],
      },
      {
        heading: { zh: "模具成本与交期", en: "Tooling Cost and Lead Time" },
        paragraphs: [
          {
            zh: "感光胶片开模成本较低，适合高定和中小批量，但耐用性有限。丝印网板开模投入更高，却适合长期大批量复用，单位成本可被显著摊薄。项目应按预计订单规模选择成本结构最优路线。",
            en: "Photochemical film tooling is relatively low-cost and suitable for custom or medium-volume orders, though durability is limited. Silk screen tooling requires higher upfront investment but supports long-term mass reuse and lower amortized unit cost. Process choice should match expected order scale.",
          },
        ],
      },
      {
        heading: { zh: "常见误区", en: "Common Misconceptions" },
        paragraphs: [
          {
            zh: "蚀刻并非越深越好。过深蚀刻会增加时间和成本，同时可能引发侧向腐蚀导致线条变粗。多数装饰场景控制在适中深度即可，只有特定填色和高立体需求才需要深蚀刻方案。",
            en: "Deeper etching is not always better. Excessive depth increases processing time and cost and may cause lateral corrosion that thickens and blurs lines. For most decorative applications, moderate depth is sufficient, with deep etching reserved for specific infill or strong relief requirements.",
          },
        ],
      },
      {
        heading: { zh: "项目案例与采购结论", en: "Project Case and Procurement Conclusion" },
        paragraphs: [
          {
            zh: "超长高精度图案项目通常更依赖感光路线以保障跨板拼接一致性，而标准化大批量图案可优先丝印以优化成本。结论是先明确图纸精度底线、拼接要求和订单规模，再匹配工艺与模具策略，才能兼顾画质和预算。",
            en: "Long-span, high-precision graphic projects generally rely on photochemical routes to secure seam continuity, while standardized high-volume patterns can prioritize silk screen for cost optimization. The key conclusion is to define precision threshold, seam requirement, and order scale first, then align process and tooling strategy for both visual quality and budget performance.",
          },
        ],
      },
    ],
    faq: [
      {
        q: { zh: "蚀刻本身会让不锈钢变彩色吗？", en: "Does etching itself create color on stainless steel?" },
        a: {
          zh: "不会，蚀刻主要形成凹凸纹理。若要彩色效果，需叠加电镀、做旧或填漆工艺。",
          en: "No. Etching mainly creates texture depth. Color effects require additional processes such as plating, patina treatment, or paint infill.",
        },
      },
      {
        q: { zh: "丝印蚀刻为什么深度有限？", en: "Why is silk screen etching depth limited?" },
        a: {
          zh: "因为丝印保护层耐腐蚀时间有限，过度延长蚀刻会导致保护失效并损伤非目标区域。",
          en: "Because the screen-printed resist has limited corrosion endurance, excessive etching time can break protection and damage non-target areas.",
        },
      },
      {
        q: { zh: "可以用201做高精密感光蚀刻吗？", en: "Can 201 be used for high-precision photochemical etching?" },
        a: {
          zh: "不建议，高精密蚀刻更应使用质量稳定的304或316以降低废品风险。",
          en: "Not recommended. High-precision etching should use stable 304 or 316 to reduce scrap risk.",
        },
      },
      {
        q: { zh: "深蚀刻会影响板材强度吗？", en: "Does deep etching affect panel strength?" },
        a: {
          zh: "会。蚀刻本质是减薄局部金属，深度越大对刚性影响越明显，需与基材厚度联动评估。",
          en: "Yes. Etching removes metal thickness locally, so deeper etching reduces stiffness and must be evaluated together with base thickness.",
        },
      },
      {
        q: { zh: "JPEG图片可以直接做蚀刻吗？", en: "Can a JPEG image be used directly for etching production?" },
        a: {
          zh: "通常不行，出模需要高精度矢量文件，复杂图像需先进行矢量化处理。",
          en: "Usually no. Tooling requires precise vector artwork, and complex images should be vectorized before production.",
        },
      },
    ],
  },
];
