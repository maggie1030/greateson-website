import { createClient } from "@supabase/supabase-js";

export type LeadStatus = "new" | "contacted" | "wechat_added" | "wechat_not_added" | "quoted" | "won" | "lost";

export const leadStatuses: LeadStatus[] = [
  "new",
  "contacted",
  "wechat_added",
  "wechat_not_added",
  "quoted",
  "won",
  "lost",
];

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
}

function getServiceRoleKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
}

export function getSupabaseServiceClient() {
  const url = getSupabaseUrl();
  const serviceRole = getServiceRoleKey();
  if (!url || !serviceRole) return null;
  return createClient(url, serviceRole, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

