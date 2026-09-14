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

  const title = `${post.title} | Heartland Industrial Marketing`;

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="bg-steel">
      <div className="mx-auto max-w-2xl px-6 py-24 lg:px-14">
        <Link href="/blog" className="text-sm font-semibold text-brand hover:text-white">
          &larr; Back to Blog
        </Link>

        <time className="mt-8 block font-label text-[11px] font-medium tracking-[0.18em] text-white/40 uppercase">
          {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-2.5 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
          {post.title}
        </h1>

        <div
          className="prose prose-invert mt-9 max-w-none font-body prose-headings:font-sans prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-cream prose-p:text-white/62 prose-a:text-brand prose-a:no-underline hover:prose-a:text-white prose-strong:text-cream prose-li:text-white/62 prose-blockquote:border-brand prose-blockquote:text-white/70"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </div>
  );
}
