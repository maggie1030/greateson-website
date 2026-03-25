import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { nav } from "@/lib/site-data";

const links = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "factory", href: "/factory" },
  { key: "products", href: "/products" },
  { key: "applications", href: "/applications" },
  { key: "cases", href: "/cases" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
] as const;

export function Header({ locale }: { locale: Locale }) {
  const t = nav[locale];
  const switchLocale = locale === "en" ? "zh" : "en";
  const brand = locale === "en" ? "Greateson" : "顺佳兴";

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#0f1b17]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-wide text-white">
          {brand}
        </Link>
        <nav className="hidden gap-6 text-sm text-zinc-200 md:flex">
          {links.map((item) => (
            <Link key={item.key} href={`/${locale}${item.href}`} className="transition hover:text-[#d9bb85]">
              {t[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href={`/${locale}/quote`} className="rounded-full bg-[#d9bb85] px-4 py-2 text-sm text-[#1c1710]">
            {t.quote}
          </Link>
          <Link href={`/${switchLocale}`} className="text-sm text-zinc-300">
            {switchLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}
