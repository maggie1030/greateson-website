import { NextResponse } from "next/server";

import { ADMIN_SESSION_COOKIE, createAdminSessionToken, validateAdminCredentials } from "@/lib/admin-auth";

type Payload = {
  username?: string;
  password?: string;
  rememberMe?: boolean;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const username = (body.username ?? "").trim();
  const password = (body.password ?? "").trim();
  const rememberMe = Boolean(body.rememberMe);

  if (!validateAdminCredentials(username, password)) {
    return NextResponse.json({ ok: false, message: "Invalid username or password." }, { status: 401 });
  }

  const token = createAdminSessionToken();
  if (!token) {
    return NextResponse.json({ ok: false, message: "Admin credentials are not configured." }, { status: 503 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: rememberMe ? 60 * 60 * 24 * 30 : undefined,
  });
  return response;
}

