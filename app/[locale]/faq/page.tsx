import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { faqEntries } from "@/lib/site-data";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/faq",
    title: locale === "en" ? "FAQ" : "常见问题",
    description:
      locale === "en"
        ? "Answers to common questions on stainless steel grades, finishes, customization, MOQ and project delivery."
        : "涵盖材质等级、表面工艺、定制、起订量与交付等常见问题解答。",
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isEn = locale === "en";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: { "@type": "Answer", text: item.a[locale] },
    })),
  };

  return (
    <section className="section">
      <JsonLd data={faqSchema} />
      <p className="eyebrow">{isEn ? "FAQ" : "常见问题"}</p>
      <h1 className="mt-3 text-4xl">{isEn ? "Frequently Asked Questions" : "常见问题解答"}</h1>
      <div className="mt-10 space-y-4">
        {faqEntries.map((item, index) => (
          <article key={index} className="card p-6">
            <h2 className="text-xl text-[#f5e5c5]">{item.q[locale]}</h2>
            <p className="mt-3 text-sm text-zinc-300">{item.a[locale]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
