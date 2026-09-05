import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Agency for Manufacturing & Metals Companies | Heartland Industrial Marketing",
  description:
    "We help metals companies, material suppliers, and manufacturers get found, look credible, and win the jobs they're losing today. Built for one industry.",
};

const SEGMENTS = [
  "Metal Building Manufacturers",
  "Metal Roofing Companies",
  "Steel Suppliers & Service Centers",
  "Metal Fabricators",
  "Laser Cutting & CNC Shops",
  "Foundries & Casting",
  "Material Suppliers",
  "OEMs & Contract Manufacturers",
];

const CASE_STUDY_WORK = [
  "Designed and launched a new website with full product photography and clear paths to quote",
  "Implemented call tracking so every inbound call is logged, attributed, and reviewable",
  "Stood up their CRM so quotes stop getting lost in voicemail and follow-up actually happens",
  "Optimized their trade show booth design and pre-show outreach for the events they exhibit at",
  "Built out search visibility and content to capture buyer-intent traffic across their service areas",
  "Helped them open distribution into several new geographic markets",
];

const CASE_STUDY_STATS = [
  { value: "30 → 75", label: "Qualified leads per month — 2.5× growth across nine months" },
  { value: "↑", label: "Average deal size — bigger jobs, not just more of them" },
  { value: "Multiple", label: "New markets entered — geographic expansion without overhead bloat" },
];

export default function ManufacturingPage() {
  return (
    <>
      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Marketing for Manufacturers &amp; Metals Companies
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Marketing Agency for Manufacturing &amp; Metals Companies
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            We help metals companies, material suppliers, and manufacturers
            get found, look credible, and win the jobs they&apos;re losing
            today. Built for one industry. Run by senior marketers. Month to
            month, no long contracts.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get a Free Audit
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Who We Serve
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-bold tracking-tight text-steel sm:text-3xl">
          Built for one industry. We already know what moves the needle.
        </h2>
        <p className="mt-4 max-w-2xl text-steel-light">
          Generalist agencies spend their first three months learning your
          business on your dime. We start work knowing the difference
          between a purlin and a panel, what FABTECH costs to exhibit at,
          and why your end customer often doesn&apos;t know your name.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map((segment, index) => (
            <div key={segment} className="rounded-lg border border-black/10 p-5">
              <span className="text-xs font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-sm font-semibold text-steel">{segment}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="case-study" className="border-t border-black/10 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Case Study &middot; 18 Months
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-steel sm:text-3xl">
            How we doubled qualified leads for a 30-year-old Oklahoma metals
            manufacturer.
          </h2>

          <div className="mt-6 space-y-4 text-steel-light leading-7">
            <p>
              A family-run Oklahoma metal fabricator manufactures metal
              building kits, roofing systems, and laser-cut components from
              two facilities. 30+ years in business, serving farmers,
              contractors, and developers across the region.
            </p>
            <p>
              When we started 18 months ago, their marketing presence
              wasn&apos;t matching their operation. We didn&apos;t run a few
              ads and call it a day. We rebuilt the whole engine:
            </p>
            <ul className="space-y-2">
              {CASE_STUDY_WORK.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              The work compounded. Over the past nine months, qualified
              leads grew from 30 a month to 75 a month, the average deal
              size went up, and they expanded into new territory without
              adding overhead.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {CASE_STUDY_STATS.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-black/10 bg-white p-6">
                <p className="text-2xl font-bold text-brand">{stat.value}</p>
                <p className="mt-1 text-sm text-steel-light">{stat.label}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 rounded-lg border border-black/10 bg-white p-6">
            <p className="text-steel">
              &ldquo;Heartland rebuilt our site, set up our CRM, and grew our
              qualified leads from 30 to 75 a month. They feel like part of
              our team, not a vendor.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-medium text-steel-light">
              — Owner, Oklahoma-based Metal Fabricator
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Want results like this for your operation?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Tell us about your company. We&apos;ll do a quick teardown of
            your current marketing and walk you through what we&apos;d fix
            first on the call.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get a Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
