# Heartland Industrial Marketing

Marketing website for Heartland Industrial Marketing, built with
[Next.js](https://nextjs.org), TypeScript, and Tailwind CSS.

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

- `app/` — pages, one folder per route (`app/services`, `app/about`,
  `app/blog`, `app/contact`). Each `page.tsx` is what renders at that URL.
- `components/` — shared pieces used across pages (`Header`, `Footer`,
  `ContactForm`).
- `content/blog/` — blog posts, written as Markdown files.
- `lib/blog.ts` — reads and parses the Markdown files in `content/blog/`.

## Adding a new blog post

Add a new `.md` file to `content/blog/`, for example
`content/blog/my-new-post.md`:

```markdown
---
title: "Your Post Title"
date: "2026-09-05"
excerpt: "A one or two sentence summary shown on the blog index page."
---

Your post content goes here, written in Markdown.
```

The filename (without `.md`) becomes the URL, e.g. `my-new-post.md` becomes
`/blog/my-new-post`. No code changes are needed — it will automatically show
up on the `/blog` index page.

## Editing page content

Each page's text lives directly in its `page.tsx` file as plain text/JSX —
for example, home page copy is in `app/page.tsx`, and the About page copy is
in `app/about/page.tsx`.

## Contact form

The "Get a Free Audit" form on `/contact` submits to
`app/api/contact/route.ts`, which sends a notification email via
[Resend](https://resend.com). Until it's configured, submissions just log to
the server console instead of failing — safe for local development, but you
do need to finish setup before real leads start submitting the form.

To turn on real email delivery:

1. Create a free account at [resend.com](https://resend.com) (free tier
   covers 3,000 emails/month — plenty for a contact form).
2. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
3. Copy `.env.example` to a new file named `.env.local` in the project root,
   and paste your API key into `RESEND_API_KEY`. `.env.local` is already
   excluded from git, so the key never gets committed.
4. Restart `npm run dev` (or redeploy, in production) so the new environment
   variable is picked up.

That's it — submissions will start arriving at the address in
`CONTACT_EMAIL_TO` (also set in `.env.local`), with the sender's own address
set as reply-to so you can just hit reply.

By default, emails send from Resend's shared `onboarding@resend.dev`
address, which works immediately but looks a little less polished. Once
you're ready, you can [verify your own domain in
Resend](https://resend.com/domains) (adds a couple of DNS records at your
domain registrar) and set `CONTACT_EMAIL_FROM` in `.env.local` to send from
an address like `leads@heartlandindustrialmarketing.com` instead.

## Building for production

```bash
npm run build
npm start
```

## Deploying

This project isn't deployed yet. The easiest option is
[Vercel](https://vercel.com/new) (made by the creators of Next.js), but any
host that supports Node.js will work. Ask before setting this up if you'd
like help — it involves creating an account on a hosting provider.
