import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { isLocale } from "@/lib/i18n";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1f2b26_0%,#0f1714_55%)]">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
