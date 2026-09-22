import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  // No brand suffix: Google already shows the site name above each result,
  // and the suffix pushed every post title past the ~60 characters it shows.
  const title = post.seoTitle ?? post.title;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title,
      description: post.excerpt,
      publishedTime: post.date,
      images: ["/opengraph-image"],
    },
  };
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const formattedDate = new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-steel">
      <header className="relative overflow-hidden px-6 pt-24 pb-16 lg:px-14">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(244,242,238,0.05) 0px, rgba(244,242,238,0.05) 1px, transparent 1px, transparent 88px), repeating-linear-gradient(0deg, rgba(244,242,238,0.05) 0px, rgba(244,242,238,0.05) 1px, transparent 1px, transparent 88px)",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
            WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
          }}
        />
        <div className="relative z-[2] mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-brand hover:text-white">
            &larr; Back to Blog
          </Link>
          <p className="mt-6 font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
            Blog
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <time className="mt-5 block font-label text-[11px] font-medium tracking-[0.18em] text-white/40 uppercase">
            {formattedDate}
          </time>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 pb-24 lg:px-14">
        <div
          className="prose prose-invert max-w-none font-body prose-headings:font-sans prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-cream prose-p:text-white/62 prose-a:text-brand prose-a:no-underline hover:prose-a:text-white prose-strong:text-cream prose-li:text-white/62 prose-blockquote:border-brand prose-blockquote:text-white/70"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-16 border-t border-white/12 pt-10 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-cream sm:text-3xl">
            Want a marketing engine built for your operation?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-white/62">
            We&apos;ll do a quick teardown of your current marketing presence
            and tell you exactly what we&apos;d fix first.
          </p>
          <Link href="/contact" className="btn btn-solid mt-7">
            <span>Get a Free Audit</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
