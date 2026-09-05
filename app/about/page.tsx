import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Heartland Industrial Marketing",
  description:
    "Heartland Industrial Marketing partners with manufacturers and industrial companies to build marketing that drives real pipeline.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        About Us
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-steel sm:text-4xl">
        Marketing partners who understand industrial buyers
      </h1>

      <div className="mt-8 space-y-6 text-steel-light leading-7">
        <p>
          {/* TODO(Kate): Replace this placeholder copy with your real founding
              story, background, and what makes Heartland different. */}
          Heartland Industrial Marketing was founded to help manufacturers,
          distributors, and industrial service companies market themselves as
          effectively as they operate. We know that industrial buying
          decisions aren&apos;t made on impulse — they&apos;re made by
          engineers, plant managers, and procurement teams who need clear,
          credible information before they&apos;ll pick up the phone.
        </p>
        <p>
          That&apos;s why we focus on marketing that respects technical
          buyers: clear positioning, real case studies, and campaigns built
          around how long industrial sales cycles actually work — not
          generic B2B playbooks borrowed from software companies.
        </p>
        <p>
          Whether you need a new website, a content engine, or a full
          marketing strategy, we work as an extension of your team to build a
          program that fits your industry, your sales process, and your
          growth goals.
        </p>
      </div>

      <div className="mt-12 rounded-lg border border-black/10 p-8">
        <h2 className="text-lg font-semibold text-steel">Our approach</h2>
        <ul className="mt-4 space-y-3 text-sm text-steel-light">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            Start with your customers&apos; buying process, not a generic
            marketing template.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            Build messaging technical buyers actually trust.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            Measure success by pipeline and revenue, not vanity metrics.
          </li>
        </ul>
      </div>
    </div>
  );
}
