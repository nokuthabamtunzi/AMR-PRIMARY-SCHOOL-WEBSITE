# AMR Sisters Primary School Website

This project is a premium, mobile-first school website for AMR Sisters Primary School in Zimbabwe, built with:
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

## Local setup

1. Install dependencies:
   npm install

2. Copy `.env.example` to `.env.local` and add your Supabase values:
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=

3. Run the app locally:
   npm run dev

4. Open http://localhost:3000

## Add your photos

Place your school photos in `public/images/amr/` using names such as:
- amr-hero-1.jpg
- amr-hero-2.jpg
- amr-hero-3.jpg
- campus-1.jpg
- class-1.jpg
- students-1.jpg

These are used by the homepage, about page, campus life, gallery, and other sections. You can replace them later without changing code.

## Supabase setup

1. Create a Supabase project.
2. Create a public storage bucket called `amr-gallery`.
3. Import the SQL from `supabase.sql`.
4. Use the project URL and anon key for environment variables.

## Admin login and phone uploads

1. Visit `/admin`.
2. Sign in with a Supabase Auth email/password account.
3. Use the Gallery Manager to drag and drop photos from your mobile browser.
4. Each upload is stored in the `amr-gallery` bucket and inserted into the `gallery` table.

## Deployment to Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Add the environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
4. Deploy.

## Notes

- The project is intentionally designed to be rich and premium, with strong emphasis on whitespace, luxury school branding, and mobile responsiveness.
- The admin section is protected and intended for photo uploads and content management.
