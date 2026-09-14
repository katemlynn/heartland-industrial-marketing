import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";
import PageHeader from "@/components/PageHeader";

export const metadata = pageMetadata(
  "Marketing Insights for Metals & Material Companies | Heartland Industrial Marketing",
  "Practical playbooks for metals manufacturers and material suppliers. No agency BS, no SEO filler — just what we'd actually do for your operation."
);

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
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

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-steel">
      <PageHeader
        eyebrow="Resources"
        title="Insights for metals marketers."
        description="Practical playbooks for metals manufacturers and material suppliers. No agency BS, no SEO filler — just what we'd actually do for your operation."
      />

      <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-14">
        <div className="border-t border-white/16">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 border-b border-white/16 px-4 py-9 -mx-4 transition-colors hover:bg-white/[0.03] sm:grid sm:grid-cols-[64px_1fr] sm:gap-8"
            >
              <span className="font-label text-sm font-semibold text-white/25 transition-colors group-hover:text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <time className="font-label text-[11px] font-medium tracking-[0.18em] text-white/40 uppercase">
                  {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-cream transition-colors group-hover:text-brand sm:text-[26px]">
                  {post.title}
                </h2>
                <p className="mt-2.5 max-w-2xl font-body text-[15px] leading-relaxed text-white/58">
                  {post.excerpt}
                </p>
                <span className="mt-4 flex items-center gap-2 font-body text-sm font-semibold text-brand">
                  Read article
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
