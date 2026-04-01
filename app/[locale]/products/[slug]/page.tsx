import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { isLocale, locales } from "@/lib/i18n";
import { ApplicationImageCarousel } from "@/components/application/ApplicationImageCarousel";
import {
  getProductDocument,
  getProductSeriesImages,
  localizeFieldLabel,
} from "@/lib/product-content";
import { buildMetadata } from "@/lib/seo";
import { productBySlug, products } from "@/lib/site-data";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

type SeriesCard = {
  title: string;
  lines: string[];
};

function headingColorClass(title: string, locale: "zh" | "en") {
  void title;
  void locale;
  return "text-[#f5e5c5]";
}

function canonicalizeHeading(title: string, locale: "zh" | "en") {
  const normalized = title.trim();
  if (locale === "zh") {
    if (/^什么是/.test(normalized)) return "核心介绍";
    if (/优势/.test(normalized) && !/工艺优势/.test(normalized)) return "核心优势";
    if (/应用场景|应用/.test(normalized)) return "应用场景";

    const zhAliasMap: Record<string, string> = {
      "规格参数": "技术参数",
      "制造流程": "工艺流程",
      "常见问题": "FAQ",
    };
    return zhAliasMap[normalized] ?? normalized;
  }

  const enAliasMap: Record<string, string> = {
    Specifications: "Technical Parameters",
    "Manufacturing Process": "Manufacturing Process",
    "Common Questions": "FAQ",
    "Core Advantages": "Core Advantages",
  };
  if (/^What is\b/i.test(normalized)) return "Core Introduction";
  if (/^Applications? of\b/i.test(normalized)) return "Applications";
  if (/^Advantages? of\b/i.test(normalized)) return "Core Advantages";
  return enAliasMap[normalized] ?? normalized;
}

function parseSeriesCards(text: string, locale: "zh" | "en"): SeriesCard[] {
  const lines = text
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);

  const headingSet =
    locale === "zh"
      ? new Set(["核心介绍", "规格参数", "颜色体系", "工艺优势", "核心优势", "技术参数", "应用场景", "制造流程", "工艺流程", "FAQ", "常见问题"])
      : new Set(["Core Introduction", "Specifications", "Color System", "Process Advantages", "Core Advantages", "Technical Parameters", "Applications", "Manufacturing Process", "FAQ"]);

  const cards: SeriesCard[] = [];
  let current: SeriesCard | null = null;

  for (const line of lines) {
    const markdownHeading = line.match(/^#{1,6}\s*(.+)$/);
    if (markdownHeading) {
      if (current && current.lines.length) cards.push(current);
      current = {
        title: canonicalizeHeading(markdownHeading[1].trim(), locale),
        lines: [],
      };
      continue;
    }

    const plainHeading = line.replace(/^#{1,6}\s*/, "").trim();
    const looseHeadingRegex =
      locale === "zh"
        ? /^(什么是.+[?？]|核心介绍|颜色体系|工艺优势|核心优势|技术参数|规格参数|应用场景|工艺流程|制造流程|FAQ|常见问题)$/
        : /^(What is .+\?|Core Introduction|Color System|Process Advantages|Core Advantages|Technical Parameters|Specifications|Applications(?: of .+)?|Advantages?(?: of .+)?|Manufacturing Process|FAQ)$/i;

    if (looseHeadingRegex.test(plainHeading)) {
      if (current && current.lines.length) cards.push(current);
      current = {
        title: canonicalizeHeading(plainHeading, locale),
        lines: [],
      };
      continue;
    }

    if (headingSet.has(plainHeading)) {
      if (current && current.lines.length) cards.push(current);
      current = { title: canonicalizeHeading(plainHeading, locale), lines: [] };
      continue;
    }

    if (/^Q\d*[:：]/i.test(line)) {
      if (current && current.lines.length) cards.push(current);
      current = { title: "FAQ", lines: [line.replace(/^Q\d*[:：]\s*/i, "").trim()] };
      continue;
    }

    if (/^A\d*[:：]/i.test(line)) {
      if (!current || current.title !== "FAQ") {
        if (current && current.lines.length) cards.push(current);
        current = { title: "FAQ", lines: [] };
      }
      current.lines.push(line.replace(/^A\d*[:：]\s*/i, "").trim());
      continue;
    }

    if (!current) {
      current = {
        title: locale === "en" ? "Overview" : "概述",
        lines: [],
      };
    }

    const normalized = line.replace(/^[-*]\s+/, "").replace(/^#{1,6}\s*/, "").trim();
    if (normalized) current.lines.push(normalized);
  }

  if (current && current.lines.length) cards.push(current);
  if (!cards.length && text.trim()) {
    return [{ title: locale === "en" ? "Overview" : "概述", lines: [text.trim()] }];
  }
  return cards;
}

function orderSeriesCards(cards: SeriesCard[], locale: "zh" | "en"): SeriesCard[] {
  const orderedTitles =
    locale === "zh"
      ? ["核心介绍", "颜色体系", "工艺优势", "技术参数", "应用场景", "核心优势", "工艺流程", "FAQ"]
      : ["Core Introduction", "Color System", "Process Advantages", "Technical Parameters", "Applications", "Core Advantages", "Manufacturing Process", "FAQ"];

  const consumed = new Set<number>();
  const ordered: SeriesCard[] = [];

  for (const title of orderedTitles) {
    cards.forEach((card, index) => {
      if (!consumed.has(index) && card.title === title) {
        ordered.push(card);
        consumed.add(index);
      }
    });
  }

  const rest = cards.filter((_, index) => !consumed.has(index));
  return [...ordered, ...rest];
}

export async function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const product = productBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    locale,
    path: `/products/${slug}`,
    title: product.name[locale],
    description: product.advantages[locale],
    keywords:
      locale === "en"
        ? ["stainless steel decorative panels", "custom metal fabrication China", product.name.en]
        : ["不锈钢装饰板", "中国定制金属加工", product.name.zh],
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const product = productBySlug(slug);
  if (!product) notFound();

  const isEn = locale === "en";
  const isScreenPage = slug === "stainless-steel-screen";
  const productDoc = await getProductDocument(slug);
  const overviewRows = productDoc?.overview?.length
    ? productDoc.overview
    : [
        { field: isEn ? "Category" : "类别", value: { en: product.category.en, zh: product.category.zh } },
        { field: isEn ? "Material" : "材质", value: { en: product.material.en, zh: product.material.zh } },
        { field: isEn ? "Thickness" : "厚度", value: { en: product.thickness.en, zh: product.thickness.zh } },
        { field: isEn ? "Size" : "规格", value: { en: product.size.en, zh: product.size.zh } },
        { field: isEn ? "Surface Finish" : "表面工艺", value: { en: product.finish.en, zh: product.finish.zh } },
        { field: isEn ? "Applications" : "应用", value: { en: product.applications.en, zh: product.applications.zh } },
        { field: isEn ? "MOQ" : "起订量", value: { en: product.moq.en, zh: product.moq.zh } },
        { field: isEn ? "Lead Time" : "交期", value: { en: product.leadTime.en, zh: product.leadTime.zh } },
      ];

  const seriesWithImages = productDoc?.series?.length
    ? await Promise.all(
        productDoc.series.map(async (series) => ({
          series,
          images: await getProductSeriesImages(slug, series, product.image),
        })),
      )
    : [];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[locale],
    description: product.advantages[locale],
    material: product.material[locale],
    brand: { "@type": "Brand", name: "Greateson" },
    manufacturer: { "@type": "Organization", name: "Greateson" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: { "@type": "Answer", text: item.a[locale] },
    })),
  };

  return (
    <section className="section">
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <nav className="mb-4 text-sm text-zinc-400">
        <Link href={`/${locale}`} className="hover:text-[#d9bb85]">{isEn ? "Home" : "首页"}</Link>
        <span className="px-2">/</span>
        <Link href={`/${locale}/products`} className="hover:text-[#d9bb85]">{isEn ? "Products" : "产品"}</Link>
        <span className="px-2">/</span>
        <span className="text-zinc-200">{product.name[locale]}</span>
      </nav>
      <p className="eyebrow">{isEn ? "Product Detail" : "产品详情"}</p>
      <h1 className="mt-3 text-4xl">{product.name[locale]}</h1>
      <div className="mt-8">
        <h2 className="text-2xl text-[#f5e5c5]">{isEn ? "Product Overview" : "产品概述"}</h2>
        <div className="card mt-4 p-6">
          <div className="grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
            {overviewRows.map((row) => (
              <p key={row.field} className="leading-7">
                <strong>{localizeFieldLabel(row.field, locale)}:</strong> {row.value[locale]}
              </p>
            ))}
          </div>
          {isScreenPage ? (
            <>
              <div className="mt-6 border-t border-[#1d322c] pt-6">
                <h3 className="text-lg font-semibold text-[#f5e5c5]">{isEn ? "Product Advantages" : "产品优势"}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{product.advantages[locale]}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "OEM" : "来图定制"}</span>
                  <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "ODM" : "来样定制"}</span>
                  <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "Custom Fabrication" : "定制加工"}</span>
                  <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{product.material[locale]}</span>
                </div>
              </div>
              <div className="mt-6 border-t border-[#1d322c] pt-6">
                <h3 className="text-lg font-semibold text-[#f5e5c5]">{isEn ? "FAQ" : "常见问题"}</h3>
                <div className="mt-4 space-y-4">
                  {product.faq.map((item, index) => (
                    <article key={index} className="rounded-2xl border border-[#1d322c] bg-[#101916] p-5">
                      <h4 className="font-medium">{item.q[locale]}</h4>
                      <p className="mt-2 text-sm leading-7 text-zinc-300">{item.a[locale]}</p>
                    </article>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {seriesWithImages.length ? (
        <div className="mt-10 space-y-10">
          {seriesWithImages.map(({ series, images }) => (
            <section key={series.code} className="space-y-4">
              <h2 className="text-2xl text-[#f5e5c5]">{series.title[locale]}</h2>
              {(() => {
                const parsed = parseSeriesCards(series.description[locale], locale);
                const cards = orderSeriesCards(parsed, locale);
                const introTitle = locale === "en" ? "Core Introduction" : "核心介绍";
                const faqTitles = locale === "en" ? new Set(["FAQ"]) : new Set(["FAQ", "常见问题"]);
                const faqCards = cards.filter((card) => faqTitles.has(card.title));
                const contentCards = cards.filter((card) => !faqTitles.has(card.title));
                const introCard = contentCards.find((card) => card.title === introTitle) ?? contentCards[0] ?? null;
                const tailCards = introCard ? contentCards.filter((card) => card !== introCard) : contentCards;
                const isHoneycombPage = slug === "stainless-steel-honeycomb-panel";
                const isDecorativeSheetPage = slug === "stainless-steel-decorative-sheet";
                const isDoubleCurvedPage = slug === "stainless-steel-double-curved-fabrication";
                const doubleCurvedThreeCardTitles =
                  locale === "en"
                    ? ["Applications", "Manufacturing Process", "Surface Color and Treatment", "Color System"]
                    : ["应用场景", "工艺流程", "制造流程", "表面颜色和处理", "颜色和表面处理"];
                const doubleCurvedThreeCardSet = new Set(doubleCurvedThreeCardTitles);
                const tailCardsWithoutDoubleCurvedThree = isDoubleCurvedPage
                  ? tailCards.filter((card) => !doubleCurvedThreeCardSet.has(card.title))
                  : tailCards;
                const doubleCurvedThreeCards = isDoubleCurvedPage
                  ? doubleCurvedThreeCardTitles
                      .map((title) => tailCards.find((card) => card.title === title))
                      .filter((card): card is SeriesCard => Boolean(card))
                  : [];
                const processTitles = locale === "en" ? new Set(["Manufacturing Process"]) : new Set(["工艺流程", "制造流程"]);
                const processCard = isHoneycombPage
                  ? tailCardsWithoutDoubleCurvedThree.find((card) => processTitles.has(card.title)) ?? null
                  : null;
                const rowCards = tailCardsWithoutDoubleCurvedThree.slice(0, 4);
                const extraCards = tailCardsWithoutDoubleCurvedThree.slice(4);
                const upperCards = rowCards.slice(0, 2);
                const lowerCards = [...rowCards.slice(2, 4), ...extraCards].filter((card) => card !== processCard);
                const decorativeRowTitles =
                  locale === "en"
                    ? new Set(["Applications", "Manufacturing Process", "Color System", "Surface Color and Treatment"])
                    : new Set(["应用场景", "工艺流程", "制造流程", "表面颜色和处理", "颜色和表面处理"]);
                const decorativeThreeCards = isDecorativeSheetPage
                  ? lowerCards.filter((card) => decorativeRowTitles.has(card.title))
                  : [];
                const normalLowerCards = isDecorativeSheetPage
                  ? lowerCards.filter((card) => !decorativeRowTitles.has(card.title))
                  : lowerCards;

                return (
                  <div className="space-y-4">
                    <div className="grid items-start gap-6 md:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
                      <ApplicationImageCarousel images={images} alt={series.title[locale]} />
                      <div className="space-y-4">
                        {introCard ? (
                          <article className="card p-6 text-sm text-zinc-200">
                            <h3 className={`text-lg font-semibold ${headingColorClass(introCard.title, locale)}`}>{introCard.title}</h3>
                            <div className="mt-3 space-y-2">
                              {introCard.lines.map((line, index) => (
                                <p key={index} className="leading-8 text-zinc-200">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </article>
                        ) : null}

                        {upperCards.length ? (
                          <div className="grid gap-3 md:grid-cols-2">
                            {upperCards.map((card, cardIndex) => (
                              <article key={`upper-${card.title}-${cardIndex}`} className="card p-5 text-sm text-zinc-200">
                                <h3 className={`text-base font-semibold ${headingColorClass(card.title, locale)}`}>{card.title}</h3>
                                <div className="mt-2 space-y-1.5">
                                  {card.lines.map((line, index) => (
                                    <p key={index} className="leading-7 text-zinc-200">
                                      {line}
                                    </p>
                                  ))}
                                </div>
                              </article>
                            ))}
                          </div>
                        ) : null}

                        {isHoneycombPage && processCard ? (
                          <article className="card p-5 text-sm text-zinc-200">
                            <h3 className={`text-base font-semibold ${headingColorClass(processCard.title, locale)}`}>{processCard.title}</h3>
                            <div className="mt-2 space-y-1.5">
                              {processCard.lines.map((line, index) => (
                                <p key={index} className="leading-7 text-zinc-200">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </article>
                        ) : null}
                      </div>
                    </div>

                    {isDecorativeSheetPage && decorativeThreeCards.length ? (
                      <div className="grid gap-3 md:grid-cols-3">
                        {decorativeThreeCards.map((card, cardIndex) => (
                          <article key={`lower-${card.title}-${cardIndex}`} className="card p-5 text-sm text-zinc-200">
                            <h3 className={`text-base font-semibold ${headingColorClass(card.title, locale)}`}>{card.title}</h3>
                            <div className="mt-2 space-y-1.5">
                              {card.lines.map((line, index) => (
                                <p key={index} className="leading-7 text-zinc-200">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : null}

                    {isDoubleCurvedPage && doubleCurvedThreeCards.length ? (
                      <div className="grid gap-3 md:grid-cols-3">
                        {doubleCurvedThreeCards.map((card, cardIndex) => (
                          <article key={`double-curved-${card.title}-${cardIndex}`} className="card p-5 text-sm text-zinc-200">
                            <h3 className={`text-base font-semibold ${headingColorClass(card.title, locale)}`}>{card.title}</h3>
                            <div className="mt-2 space-y-1.5">
                              {card.lines.map((line, index) => (
                                <p key={index} className="leading-7 text-zinc-200">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : null}

                    {normalLowerCards.length ? (
                      <div className="grid gap-3 md:grid-cols-2">
                        {normalLowerCards.map((card, cardIndex) => (
                          <article key={`lower-${card.title}-${cardIndex}`} className="card p-5 text-sm text-zinc-200">
                            <h3 className={`text-base font-semibold ${headingColorClass(card.title, locale)}`}>{card.title}</h3>
                            <div className="mt-2 space-y-1.5">
                              {card.lines.map((line, index) => (
                                <p key={index} className="leading-7 text-zinc-200">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : null}

                    {faqCards.length ? (
                      <section className="space-y-3">
                        <h3 className="text-base font-semibold text-[#f5e5c5]">FAQ</h3>
                        <div className="grid gap-3 md:grid-cols-2">
                          {faqCards.map((card, cardIndex) => {
                            const [question, ...answerParts] = card.lines;
                            return (
                                <article
                                  key={`faq-${cardIndex}`}
                                  className={`card p-5 text-sm text-zinc-200 ${
                                    isHoneycombPage && faqCards.length === 1 ? "md:col-span-2" : ""
                                  }`}
                                >
                                {question ? <p className="font-medium text-[#f5e5c5]">{question}</p> : null}
                                {answerParts.length ? (
                                  <p className="mt-2 leading-7 text-zinc-300">{answerParts.join(" ")}</p>
                                ) : null}
                              </article>
                            );
                          })}
                        </div>
                      </section>
                    ) : null}
                  </div>
                );
              })()}
            </section>
          ))}
        </div>
      ) : !isScreenPage ? (
        <div className="card mt-10 p-6">
          <h2 className="text-2xl text-[#f5e5c5]">{isEn ? "Why this product" : "产品优势"}</h2>
          <p className="mt-3 text-zinc-300">{product.advantages[locale]}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "OEM" : "来图定制"}</span>
            <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "ODM" : "来样定制"}</span>
            <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{isEn ? "Custom Fabrication" : "定制加工"}</span>
            <span className="rounded-full border border-[#3a4f46] px-3 py-1 text-zinc-300">{product.material[locale]}</span>
          </div>
        </div>
      ) : null}

      {!isScreenPage ? (
        <div className="mt-10">
          <h2 className="text-2xl text-[#f5e5c5]">{isEn ? "FAQ" : "常见问题"}</h2>
          <div className="mt-4 space-y-4">
            {product.faq.map((item, index) => (
              <article key={index} className="card p-5">
                <h3 className="font-medium">{item.q[locale]}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.a[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href={`/${locale}/applications`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Related applications" : "相关应用场景"}
        </Link>
        <Link href={`/${locale}/cases`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Project case studies" : "工程案例"}
        </Link>
        <Link href={`/${locale}/quote`} className="rounded-full border border-[#3a4f46] px-4 py-2 text-zinc-200 hover:border-[#d9bb85]">
          {isEn ? "Request quote" : "获取报价"}
        </Link>
      </div>
    </section>
  );
}
