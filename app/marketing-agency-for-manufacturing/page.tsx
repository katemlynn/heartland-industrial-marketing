import Link from "next/link";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Marketing Agency for Manufacturing & Metals Companies | Heartland Industrial Marketing",
  "We help metals companies, material suppliers, and manufacturers get found, look credible, and win the jobs they're losing today. Built for one industry."
);

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

export default function ManufacturingPage() {
  return (
    <div className="bg-steel text-white">
      <section className="relative overflow-hidden px-6 py-24 lg:px-14">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(244,242,238,0.05) 0px, rgba(244,242,238,0.05) 1px, transparent 1px, transparent 88px), repeating-linear-gradient(0deg, rgba(244,242,238,0.05) 0px, rgba(244,242,238,0.05) 1px, transparent 1px, transparent 88px)",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
            WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
          }}
        />
        <div className="relative z-[2] mx-auto max-w-6xl">
          <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
            &mdash; Marketing for Manufacturers &amp; Metals Companies
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-cream sm:text-5xl">
            Marketing Agency for Manufacturing &amp; Metals Companies
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-white/68">
            We help metals companies, material suppliers, and manufacturers
            get found, look credible, and win the jobs they&apos;re losing
            today. Built for one industry. No junior hand-offs. Month to
            month, no long contracts.
          </p>
          <div className="mt-10 flex flex-wrap gap-[18px]">
            <Link href="/contact" className="btn btn-solid">
              <span>Get a Free Audit</span>
              <ArrowIcon />
            </Link>
            <Link href="/services" className="btn btn-ghost">
              <span>See Our Services</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 px-6 py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
            &mdash; Who We Serve
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
            Built for one industry. We already know what moves the needle.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-white/62">
            Generalist agencies spend their first three months learning your
            business on your dime. We start work knowing the difference
            between a purlin and a panel, what FABTECH costs to exhibit at,
            and why your end customer often doesn&apos;t know your name.
          </p>
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SEGMENTS.map((segment, index) => (
              <div key={segment} className="border border-white/16 p-5">
                <span className="font-label text-xs font-semibold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1.5 text-sm font-semibold text-cream">{segment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-study" className="border-t border-white/8 px-6 py-24 lg:px-14">
        <div className="mx-auto max-w-3xl">
          <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
            &mdash; Case Study &middot; 18 Months
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
            How we doubled qualified leads for a 30-year-old Oklahoma metals
            manufacturer.
          </h2>

          <div className="mt-7 space-y-4 font-body leading-relaxed text-white/62">
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
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-[5px] w-[5px] shrink-0 bg-brand" />
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

          <div className="mt-11 grid gap-5 sm:grid-cols-3">
            {CASE_STUDY_STATS.map((stat) => (
              <div key={stat.label} className="border border-white/16 bg-white/[0.02] p-6">
                <p className="text-2xl font-extrabold text-brand">{stat.value}</p>
                <p className="mt-1.5 font-body text-sm text-white/58">{stat.label}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-11 border border-white/16 bg-white/[0.02] p-7">
            <p className="font-body text-cream">
              &ldquo;Heartland rebuilt our site, set up our CRM, and grew our
              qualified leads from 30 to 75 a month. They feel like part of
              our team, not a vendor.&rdquo;
            </p>
            <footer className="mt-3 font-body text-sm font-medium text-white/50">
              — Owner, Oklahoma-based Metal Fabricator
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="border-t border-white/8 px-6 py-20 text-center lg:px-14">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Want results like this for your operation?
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-white/65">
          Tell us about your company. We&apos;ll do a quick teardown of your
          current marketing and walk you through what we&apos;d fix first on
          the call.
        </p>
        <Link href="/contact" className="btn btn-solid mt-9">
          <span>Get a Free Audit</span>
          <ArrowIcon />
        </Link>
      </section>
    </div>
  );
}
