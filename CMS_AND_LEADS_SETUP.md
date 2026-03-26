# CMS + Leads Setup

## 1) Environment variables

Copy `.env.example` to `.env.local` and fill values:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`

> `SUPABASE_SERVICE_ROLE_KEY` must be the server key from Supabase API settings, not the publishable key.

## 2) Supabase leads table

Open Supabase SQL Editor and run `supabase.leads.sql`.

## 3) Admin leads page

Use:

- `/{locale}/admin/leads`

Examples:

- `/zh/admin/leads`
- `/en/admin/leads`

Admin pages are protected by session login.
Set `ADMIN_USERNAME` and `ADMIN_PASSWORD` in `.env.local`, then sign in at:

- `/zh/admin/login`
- `/en/admin/login`

## 4) CMS articles

This project reads Sanity documents with `_type == "article"`.
Expected fields:

- `category` (`blog` or `guide`)
- `slug.current`
- `titleZh`, `titleEn`
- `excerptZh`, `excerptEn`
- `publishedAt`
- `readTimeZh`, `readTimeEn`
- `keywordsZh[]`, `keywordsEn[]`
- `sectionsZh[]`, `sectionsEn[]` (each item: `heading`, `paragraphs[]`)
- `faqZh[]`, `faqEn[]` (each item: `q`, `a`)

If Sanity has no published articles yet, pages use local fallback content.

