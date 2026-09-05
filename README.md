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
for example, home page copy is in `app/page.tsx`, and the About page copy
(currently placeholder text marked with a `TODO(Kate)` comment) is in
`app/about/page.tsx`.

## Contact form

The "Request a Quote" form on `/contact` submits to `app/api/contact/route.ts`.
Right now, submissions are only logged to the server console — no emails are
sent yet. To actually receive leads by email, you'll need to:

1. Choose an email-sending service (e.g. [Resend](https://resend.com),
   Postmark, or SendGrid) and create an account with them.
2. Add your API key to a `.env.local` file in this project (this file is
   already excluded from git via `.gitignore`, so your key stays private).
3. Update `app/api/contact/route.ts` to send an email using that provider's
   API instead of just logging to the console.

This is intentionally left as a manual step since it involves creating an
account and handling an API key.

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
