import Link from "next/link";
import Reveal from "@/components/Reveal";

// Shared layout for single-service landing pages (e.g. /services/seo-for-manufacturers).
// Each page supplies its copy as data; the section order and styling live here
// so every service page reads as part of the same site.

interface Problem {
  label: string;
  title: string;
  description: string;
}

interface Offering {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

interface Step {
  when: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface RelatedLink {
  href: string;
  label: string;
}

export interface ServiceLandingProps {
  eyebrow: string;
  title: string;
  intro: string;
  problemsHeading: string;
  problems: Problem[];
  offeringsHeading: string;
  offeringsIntro: string;
  offerings: Offering[];
  stepsHeading: string;
  stepsIntro: string;
  steps: Step[];
  proofHeading: string;
  proofText: string;
  stats: Stat[];
  testimonial: { quote: string; name: string };
  faqs: Faq[];
  related: RelatedLink[];
  ctaHeading: string;
  ctaText: string;
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

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
      {children}
    </p>
  );
}

export default function ServiceLanding(props: ServiceLandingProps) {
  return (
    <div className="bg-steel text-white">
      {/* ---------- HERO ---------- */}
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
          <Eyebrow>{props.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-cream sm:text-5xl">
            {props.title}
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-white/68">{props.intro}</p>
          <div className="mt-10 flex flex-wrap gap-[18px]">
            <Link href="/contact" className="btn btn-solid">
              <span>Get a Free Audit</span>
              <ArrowIcon />
            </Link>
            <Link href="/services" className="btn btn-ghost">
              <span>See All Services</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- PROBLEMS ---------- */}
      <section className="bg-tan px-6 py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Sound Familiar?</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {props.problemsHeading}
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {props.problems.map((problem, index) => (
              <Reveal key={problem.title} delay={index * 90}>
                <div className="h-full border border-black/12 p-8">
                  <span className="font-label text-sm font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-label text-[11.5px] font-medium tracking-[0.24em] text-ink/45 uppercase">
                    {problem.label}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
                    {problem.title}
                  </h3>
                  <p className="mt-2.5 font-body text-[15px] leading-relaxed text-ink/60">
                    {problem.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE DO ---------- */}
      <section className="px-6 py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
            {props.offeringsHeading}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-white/62">{props.offeringsIntro}</p>
          <div className="mt-11 grid gap-5 sm:grid-cols-2">
            {props.offerings.map((offering, index) => (
              <Reveal key={offering.title} delay={(index % 2) * 90}>
                <div className="h-full border border-white/16 bg-white/[0.02] p-7">
                  <span className="font-label text-xs font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-cream">
                    {offering.title}
                  </h3>
                  <p className="mt-2.5 font-body text-[15px] leading-relaxed text-white/60">
                    {offering.description}
                  </p>
                  {offering.href && (
                    <Link
                      href={offering.href}
                      className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand transition-colors hover:text-cream"
                    >
                      <span>{offering.linkLabel ?? "Learn more"}</span>
                      <ArrowIcon />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="bg-tan px-6 py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What to Expect</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {props.stepsHeading}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-ink/60">{props.stepsIntro}</p>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {props.steps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 90} className="border-t-[3px] border-brand pt-6">
                  <p className="font-label text-[11.5px] font-semibold tracking-[0.24em] text-ink/45 uppercase">
                    {step.when}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2.5 font-body text-[15px] leading-relaxed text-ink/60">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- PROOF ---------- */}
      <section className="px-6 py-24 lg:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Proof</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
              {props.proofHeading}
            </h2>
            <p className="mt-4 font-body leading-relaxed text-white/62">{props.proofText}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {props.stats.map((stat) => (
                <div key={stat.label} className="border border-white/16 bg-white/[0.02] p-6">
                  <p className="text-2xl font-extrabold text-brand">{stat.value}</p>
                  <p className="mt-1.5 font-body text-sm text-white/58">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/marketing-agency-for-manufacturing#case-study"
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand transition-colors hover:text-cream"
            >
              <span>Read the full case study</span>
              <ArrowIcon />
            </Link>
          </div>
          <figure className="self-center border border-white/16 bg-white/[0.02] p-8 sm:p-10">
            <div className="h-[3px] w-12 bg-brand" />
            <blockquote className="mt-6 font-body text-lg leading-relaxed text-cream">
              &ldquo;{props.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 font-mono-tag text-[13px] font-medium text-white/55">
              — {props.testimonial.name}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-tan">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-9 divide-y divide-black/12 border-t border-black/12">
            {props.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group p-7 transition-colors hover:bg-black/[0.025]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                  {faq.question}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-4 w-4 shrink-0 text-brand transition-transform group-open:rotate-90"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 font-body text-sm leading-relaxed text-steel-light">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-14 font-label text-[11.5px] font-semibold tracking-[0.24em] text-ink/45 uppercase">
            Keep Reading
          </p>
          <ul className="mt-4 space-y-3">
            {props.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 font-body font-semibold text-ink transition-colors hover:text-brand"
                >
                  <span>{link.label}</span>
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="px-6 py-20 text-center lg:px-14">
        <h2 className="text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
          {props.ctaHeading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-white/65">{props.ctaText}</p>
        <Link href="/contact" className="btn btn-solid mt-9">
          <span>Get a Free Audit</span>
          <ArrowIcon />
        </Link>
      </section>
    </div>
  );
}
