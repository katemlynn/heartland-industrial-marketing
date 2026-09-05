import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Heartland Industrial Marketing",
  description:
    "Marketing insights and resources for manufacturers and industrial companies.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        Resources
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-steel sm:text-4xl">
        Blog
      </h1>
      <p className="mt-4 text-steel-light">
        Marketing insights for manufacturers, distributors, and industrial
        service companies.
      </p>

      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-black/10 pb-10">
            <time className="text-xs uppercase tracking-wide text-steel-light">
              {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="mt-2 text-xl font-semibold text-steel">
              <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-6 text-steel-light">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
