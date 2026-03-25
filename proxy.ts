import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "zh"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/en${pathname === "/" ? "" : pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
