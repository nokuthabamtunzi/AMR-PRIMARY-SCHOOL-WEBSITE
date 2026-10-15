# AMR SISTERS PRIMARY SCHOOL WEBSITE

This repository contains a premium Next.js 14 + TypeScript + Tailwind CSS website for AMR Sisters Primary School (Zimbabwe).

Overview
- Next.js 14 App Router (TypeScript)
- Tailwind CSS
- Framer Motion animations
- Supabase (Auth, Database, Storage)

What I built first
1. Homepage with hero slider and key sections (hero, stats, meal system highlight, gallery preview).
2. Admin dashboard (mobile-first) with Gallery Manager: drag & drop upload to Supabase Storage `amr-gallery` and automatic DB insert into `gallery` table.

Quick start
1. Copy `.env.example` to `.env.local` and fill NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
2. Install dependencies:

   npm install

3. Run dev server:

   npm run dev

4. Open http://localhost:3000

Adding your photos
- Put your photos in /public/images/amr/ and name them like:
  - amr-hero-1.jpg
  - amr-hero-2.jpg
  - amr-hero-3.jpg
  - campus-1.jpg
  - class-1.jpg
  - students-1.jpg

Admin - Gallery Upload from Phone
- Go to /admin
- Sign in with a Supabase email/password account (create one in Supabase or use email sign up in the admin page).
- Use the Gallery Manager to drag & drop photos from your phone browser; they will upload to the `amr-gallery` storage bucket and create records in the `gallery` table.

Supabase setup
1. Create a new Supabase project.
2. Create a public storage bucket named `amr-gallery`.
3. Run the SQL in `supabase.sql` to create the required tables.
4. Create a project service role or use anon key for client operations (for production, use server-side functions / edge functions to secure writes).

Deploy to Vercel
- Set environment variables in Vercel from your Supabase project: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- Push to Git and import the repo on Vercel.

Files of interest
- app/ - Next.js App Router pages
- app/admin - Admin dashboard and gallery manager
- lib/supabaseClient.ts - Supabase client wrapper
- supabase.sql - SQL to create tables
- public/images/amr/ - placeholder folder for your images

Design
- Colors: Navy #0A1931, Gold #D4AF37, White
- Fonts: Playfair Display (headings), Inter (body)

Notes
- This is an initial commit and focuses on homepage + admin gallery upload. After you test uploads, I'll continue with the rest of pages and admin features (news, applications, messages, events, gallery filters, SEO, etc.).
