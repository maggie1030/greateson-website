import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ADMIN_SESSION_COOKIE, isAdminConfigured, isValidAdminSessionToken } from "@/lib/admin-auth";

const locales = ["en", "zh"];
const adminRoutePattern = /^\/(en|zh)\/admin(\/|$)/;

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

  if (adminRoutePattern.test(pathname)) {
    if (!isAdminConfigured()) {
      return new NextResponse("Admin credentials are not configured.", { status: 503 });
    }

    const isLoginPage = pathname === "/zh/admin/login" || pathname === "/en/admin/login";
    if (!isLoginPage) {
      const sessionToken = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
      if (!isValidAdminSessionToken(sessionToken)) {
        const locale = pathname.startsWith("/zh/") || pathname === "/zh/admin" ? "zh" : "en";
        const loginUrl = new URL(`/${locale}/admin/login`, request.url);
        loginUrl.searchParams.set("next", pathname);
        return NextResponse.redirect(loginUrl);
      }
    }

  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
