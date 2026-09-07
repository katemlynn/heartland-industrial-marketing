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
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand hover:text-brand-dark">
        &larr; Back to Blog
      </Link>

      <time className="mt-6 block text-xs uppercase tracking-wide text-steel-light">
        {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-steel sm:text-4xl">
        {post.title}
      </h1>

      <div
        className="prose prose-neutral mt-8 max-w-none prose-headings:text-steel prose-a:text-brand"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
