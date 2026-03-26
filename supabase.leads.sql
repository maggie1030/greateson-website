create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company_name text not null,
  contact_person text not null,
  email text not null,
  phone text not null,
  wechat_id text,
  project_details text not null,
  source_page text,
  locale text not null default 'zh',
  status text not null default 'new',
  wechat_status text not null default 'wechat_not_added',
  notes text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_wechat_status_idx on public.leads (wechat_status);

