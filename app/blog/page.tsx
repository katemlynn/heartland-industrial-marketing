import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";
import PageHeader from "@/components/PageHeader";

export const metadata = pageMetadata(
  "Marketing Insights for Metals & Material Companies | Heartland Industrial Marketing",
  "Practical playbooks for metals manufacturers and material suppliers. No agency BS, no SEO filler — just what we'd actually do for your operation."
);

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-steel">
      <PageHeader
        eyebrow="Resources"
        title="Insights for metals marketers."
        description="Practical playbooks for metals manufacturers and material suppliers. No agency BS, no SEO filler — just what we'd actually do for your operation."
      />

      <div className="mx-auto max-w-2xl px-6 pb-24 lg:px-14">
        <div className="border-t border-white/16">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-white/16 py-9">
              <time className="font-label text-[11px] font-medium tracking-[0.18em] text-white/40 uppercase">
                {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2.5 text-xl font-extrabold tracking-tight text-cream">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-white/58">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-block text-sm font-semibold text-brand hover:text-white"
              >
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
