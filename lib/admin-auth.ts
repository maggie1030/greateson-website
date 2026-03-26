import { createHash } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "admin_session";

function getAdminCredentials() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (!username || !password) return null;
  return { username, password };
}

export function isAdminConfigured() {
  return Boolean(getAdminCredentials());
}

function buildToken(raw: string) {
  return createHash("sha256").update(raw).digest("hex");
}

export function createAdminSessionToken() {
  const credentials = getAdminCredentials();
  if (!credentials) return null;
  return buildToken(`${credentials.username}:${credentials.password}`);
}

export function validateAdminCredentials(username: string, password: string) {
  const credentials = getAdminCredentials();
  if (!credentials) return false;
  return username === credentials.username && password === credentials.password;
}

export function isValidAdminSessionToken(token: string | null | undefined) {
  if (!token) return false;
  const expected = createAdminSessionToken();
  if (!expected) return false;
  return token === expected;
}

export function readAdminSessionFromCookieHeader(cookieHeader: string | null) {
  if (!cookieHeader) return null;
  const items = cookieHeader.split(";").map((item) => item.trim());
  const match = items.find((item) => item.startsWith(`${ADMIN_SESSION_COOKIE}=`));
  if (!match) return null;
  return decodeURIComponent(match.slice(ADMIN_SESSION_COOKIE.length + 1));
}

