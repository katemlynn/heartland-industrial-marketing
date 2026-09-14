import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const SERVICES = [
  "Full Service Marketing",
  "Website Design & Development",
  "Brand & Visual Identity",
  "SEO",
  "Lead Generation",
  "Organic & Paid Social",
  "Email Marketing",
  "Marketing Automation",
  "Signage & On-Site Presence",
  "Trade Shows & Events",
];

const PAIN_POINTS = [
  {
    label: "Ad Spend",
    title: "Your ads aren't paying back.",
    description:
      "Money going into Google Ads with nothing to show for it. You can't tell what's working, and the agency running it can't either.",
    icon: (
      <>
        <polyline
          points="1,6 8.5,13.5 13.5,8.5 23,18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="17,18 23,18 23,12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    label: "Visibility",
    title: "You're invisible to the people searching.",
    description:
      "The competitor across town has 240 reviews. You have 11. Quotes are reaching them, not you.",
    icon: (
      <>
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <line
          x1="20"
          y1="20"
          x2="14.7"
          y2="14.7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    label: "Attribution",
    title: "You sell the materials. Someone else gets the credit.",
    description:
      "Your panels end up on a building you'll never visit, installed by a GC you didn't meet. The end owner never knows your name.",
    icon: (
      <>
        <rect
          x="3"
          y="9"
          width="11"
          height="11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M15 12h6M18 9l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

const COMPARISONS = [
  {
    label: "vs. a generalist agency",
    title: "They don't speak metals.",
    description:
      "Most agencies spend the first three months learning the difference between a purlin and a panel — on your dime. We already know what moves a GC to pick up the phone.",
  },
  {
    label: "vs. one in-house hire",
    title: "One person can't be six specialists.",
    description:
      "A single hire can't cover strategist, designer, ad buyer, and copywriter. You get a full team, senior on every discipline, for less than one full-time salary.",
  },
  {
    label: "vs. the cheap freelancer",
    title: "$500/month buys $500/month of effort.",
    description:
      "Senior marketers, month-to-month, no contract keeping either of us stuck. If we're not earning our keep, you walk.",
  },
];

const TESTIMONIALS = [
  {
    initials: "JP",
    name: "Jeremy P.",
    quote:
      "Six weeks. That's how long my old agency took to do anything. Heartland had our paid search program live in two. I don't have to babysit them. The work gets done and the leads keep coming.",
  },
  {
    initials: "KD",
    name: "Karen D.",
    quote:
      "Heartland got it from minute one: we sell the materials, GCs do the install, end customers never know our name. They built the marketing for that reality, and it works.",
  },
  {
    initials: "TB",
    name: "Tom B.",
    quote:
      "We were paying a website guy, an SEO guy, and a print agency separately. None of them talked to each other. Heartland took it all over and our quote pipeline doubled in six months. One team, one report, nobody pointing fingers.",
  },
  {
    initials: "MH",
    name: "Mike H.",
    quote:
      "Our logo was from the '90s and our site looked it. Heartland refreshed everything top to bottom: site, truck wraps, even our FABTECH booth. Walked into the show finally looking like the company we actually are. Closed three accounts off that one event.",
  },
];

const FAQS = [
  {
    question: "What's the best marketing strategy for a metals company?",
    answer:
      "It depends on your business: what you sell, who you sell to, and the kinds of jobs you want to win more of. For most metals manufacturers and material suppliers, it starts with a clearly defined ideal customer and a website built to convert them. From there, the fast wins are usually the same: Google Business Profile, paid search, signage, and a steady review pipeline.",
  },
  {
    question: "How long does it take to start generating leads from marketing?",
    answer:
      "Paid search and a tightened Google Business Profile can produce inbound quote requests within a few weeks. SEO and reputation-building compound over three to six months. Trade shows and partnerships take months to a year. We sequence the fast wins first so you have momentum (and revenue) while the slower channels build.",
  },
  {
    question: "Should my company invest in SEO or paid ads first?",
    answer:
      "Both, in that order, but start paid first. Paid search puts you in front of buyers actively looking today. SEO takes three to six months to compound but is the cheapest long-term channel. Owners who try to choose one or the other usually under-invest in both. The right move is a small, disciplined paid budget for immediate leads and consistent SEO and content for compounding traffic.",
  },
  {
    question: "How much should a metals company spend on marketing?",
    answer:
      "Most owner-operated metals manufacturers and material suppliers should spend three to seven percent of revenue on marketing. Toward the lower end if you have strong word of mouth, higher if you're growing into new geographies or product lines. We tell you what makes sense for your specific situation on the call rather than selling a $20K-a-month engagement you don't need.",
  },
  {
    question: "How do I market a metals business when most of my sales go through contractors?",
    answer:
      "This is one of the most common patterns in the metals industry. The dynamic: you sell the materials, GCs install, end owners never know your name. We have specific tactics for capturing reviews, photos, and UGC from end users even when contractors own the relationship: post-install review systems, on-site QR codes that route back to you, and contractor partnership programs that share credit.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden px-6 pt-[190px] pb-32 lg:px-14 lg:pt-[210px] lg:pb-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-laser-cut.jpg"
            alt="Fiber laser cutting steel plate at a Heartland client's fabrication shop"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover [animation:heroDrift_20s_ease-in-out_infinite_alternate]"
            style={{ objectPosition: "center 60%" }}
          />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,13,15,0.55) 0%, rgba(12,13,15,0.7) 55%, rgba(12,13,15,0.94) 100%), linear-gradient(90deg, rgba(12,13,15,0.9) 0%, rgba(12,13,15,0.45) 48%, rgba(12,13,15,0.55) 100%)",
          }}
        />

        <p
          className="relative z-[2] mb-7 font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase [animation:heroRise_0.7s_ease_forwards] [animation-delay:0.1s] opacity-0"
        >
          &mdash; For Metals &amp; Manufacturing Companies
        </p>
        <h1
          className="relative z-[2] max-w-3xl text-[40px] leading-[1.05] font-extrabold tracking-tight text-cream opacity-0 [animation:heroRise_0.8s_ease_forwards] [animation-delay:0.22s] sm:text-6xl lg:text-[76px]"
        >
          Stop losing sales to competitors who just market better.
        </h1>
        <p
          className="relative z-[2] mt-8 max-w-xl font-body text-lg leading-relaxed text-white/68 opacity-0 [animation:heroRise_0.8s_ease_forwards] [animation-delay:0.36s]"
        >
          We help metals and manufacturing companies get found, look
          credible, and win the jobs they&apos;re losing today.
        </p>
        <div
          className="relative z-[2] mt-12 flex flex-wrap gap-[18px] opacity-0 [animation:heroRise_0.8s_ease_forwards] [animation-delay:0.5s]"
        >
          <Link href="/contact" className="btn btn-solid">
            <span>Get a Free Audit</span>
            <ArrowIcon />
          </Link>
          <Link href="/services" className="btn btn-ghost">
            <span>See What We Do</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className="absolute right-6 bottom-10 z-[2] hidden flex-col items-center gap-3.5 font-label text-[11px] tracking-[0.3em] text-white/50 sm:flex lg:right-14">
          <span>SCROLL</span>
          <div className="relative h-14 w-px overflow-hidden bg-white/20">
            <div className="absolute top-[-20px] left-0 h-5 w-full bg-brand [animation:scrollCue_1.8s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ---------- SERVICE TICKER ---------- */}
      <section className="border-y border-white/10 bg-ink py-4">
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
          }}
        >
          <div className="flex w-max [animation:marqueeScrollX_60s_linear_infinite] hover:[animation-play-state:paused]">
            {[...SERVICES, ...SERVICES].map((service, i) => (
              <span
                key={`${service}-${i}`}
                className="shrink-0 px-8 font-label text-xs font-medium tracking-[0.18em] whitespace-nowrap text-white/55 uppercase"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PAIN POINTS ---------- */}
      <section className="bg-tan px-6 py-24 lg:px-14">
        <p className="mx-auto max-w-6xl font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
          &mdash; Sound Familiar?
        </p>
        <h2 className="mx-auto mt-3 max-w-6xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Three patterns we hear from metals owners every week.
        </h2>
        <div className="mx-auto mt-12 max-w-6xl divide-y divide-black/12 border-t border-black/12">
          {PAIN_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 90}>
              <div className="group flex flex-col gap-4 px-4 py-10 -mx-4 transition-colors hover:bg-black/[0.02] sm:grid sm:grid-cols-[64px_1fr] sm:gap-8">
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                  <span className="font-label text-sm font-semibold text-ink/30 transition-colors group-hover:text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-brand">
                    {point.icon}
                  </svg>
                </div>
                <div>
                  <p className="mb-2 font-label text-[11.5px] font-medium tracking-[0.24em] text-ink/45 uppercase">
                    {point.label}
                  </p>
                  <h3 className="mb-2.5 text-2xl font-bold tracking-tight text-ink">
                    {point.title}
                  </h3>
                  <p className="max-w-2xl font-body text-[15px] leading-relaxed text-ink/60">
                    {point.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WHY HEARTLAND ---------- */}
      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-14">
          <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
            &mdash; Why Heartland
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why we&apos;re a better bet than the alternatives.
          </h2>
          <div className="mt-12 divide-y divide-white/12 border-t border-white/12">
            {COMPARISONS.map((item, index) => (
              <Reveal key={item.label} delay={index * 90}>
                <div className="group flex flex-col gap-2 px-4 py-8 -mx-4 transition-colors hover:bg-white/[0.03] sm:grid sm:grid-cols-[64px_1fr] sm:gap-8">
                  <span className="font-label text-sm font-semibold text-white/25 transition-colors group-hover:text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-label text-[11.5px] font-medium tracking-[0.2em] text-brand uppercase">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-xl font-bold sm:text-2xl">{item.title}</h3>
                    <p className="mt-2.5 max-w-2xl font-body text-[15px] leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/contact" className="btn btn-solid mt-12">
            <span>Get a Free Audit</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ---------- CASE STUDY TEASER ---------- */}
      <section className="border-t border-black/10 bg-tan">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-14">
          <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
            &mdash; Case Study
          </p>
          <Link
            href="/marketing-agency-for-manufacturing#case-study"
            className="group mt-7 flex flex-col gap-8 border border-black/12 p-8 transition-colors hover:border-brand/40 hover:bg-black/[0.02] sm:flex-row sm:items-center lg:p-10"
          >
            <div className="shrink-0">
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl font-bold tracking-tight text-ink/35 lg:text-4xl">
                  <CountUp end={30} />
                </span>
                <span className="text-2xl font-light text-ink/30">&rarr;</span>
                <span className="text-5xl font-black tracking-tight text-brand lg:text-6xl">
                  <CountUp end={75} />
                </span>
              </div>
              <p className="mt-2 font-body text-sm text-steel-light">
                qualified leads/month in 9 months
              </p>
            </div>
            <div className="hidden h-16 w-px shrink-0 bg-black/10 sm:block" />
            <div className="flex-1">
              <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                How we doubled qualified leads for a 30-year-old Oklahoma
                metals manufacturer.
              </h2>
              <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-steel-light">
                New website, call tracking, a CRM that stopped losing quotes,
                and a trade show program that actually paid back — rebuilt
                as one system, not six disconnected projects.
              </p>
              <span className="mt-4 flex items-center gap-2 font-body text-sm font-semibold text-brand">
                Read the case study
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="border-t border-white/8 bg-steel px-6 py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          {/* Spotlight */}
          <div className="grid gap-10 border-b border-white/12 pb-16 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[280px] overflow-hidden border border-white/10 lg:h-[380px]">
              <Image
                src="/testimonial-welder.jpg"
                alt="A welder fabricating a steel beam at a Heartland client's shop"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(21,21,26,0.05) 0%, rgba(21,21,26,0) 35%, rgba(21,21,26,0.35) 100%)",
                }}
              />
            </div>
            <div>
              <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
                &mdash; Client Spotlight
              </p>
              <p className="mt-5 font-body text-xl leading-relaxed text-white/80">
                &ldquo;We tried two agencies before this one. Both took my
                money and had nothing to show for it after months.{" "}
                <strong className="font-semibold text-cream">
                  Heartland got our Google profile from 35 reviews to 80+ in
                  4 months
                </strong>
                , and the quote requests followed. Best money we&apos;ve ever
                spent on marketing.&rdquo;
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="font-mono-tag text-sm font-medium text-cream">
                  Wade C.
                </span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="font-body text-sm text-white/50">
                  <CountUp end={35} /> &rarr; <CountUp end={80} suffix="+" />{" "}
                  Google reviews in 4 months
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
              &mdash; Reviews
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl">
              Clients love Heartland.
            </h2>
            <p className="mt-6 max-w-md font-body text-[16.5px] leading-relaxed text-white/60">
              Real feedback from metal fabricators and material suppliers
              we&apos;ve worked with.
            </p>

            <div className="mt-12 flex gap-4">
              <div className="flex-1 border border-white/16 px-7 py-6">
                <div className="text-[34px] leading-none font-black text-brand">
                  <CountUp end={25} suffix="+" />
                </div>
                <div className="mt-2.5 font-label text-[11.5px] tracking-[0.1em] text-white/55 uppercase">
                  Projects Delivered
                </div>
              </div>
              <div className="flex-1 border border-white/16 px-7 py-6">
                <div className="text-[34px] leading-none font-black text-brand">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="mt-2.5 font-label text-[11.5px] tracking-[0.1em] text-white/55 uppercase">
                  Client Satisfaction
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-[18px]">
              <Link href="/contact" className="btn btn-solid">
                <span>Get a Free Audit</span>
                <ArrowIcon />
              </Link>
              <Link href="/services" className="btn btn-ghost">
                <span>See What We Do</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div
            className="relative h-[420px] overflow-hidden lg:h-[560px]"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
            }}
          >
            <div className="group flex flex-col gap-5 [animation:marqueeScroll_34s_linear_infinite] hover:[animation-play-state:paused]">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <figure
                  key={`${t.name}-${i}`}
                  aria-hidden={i >= TESTIMONIALS.length}
                  className="border border-white/14 bg-white/[0.02] p-7"
                >
                  <figcaption className="mb-4 flex items-center gap-3.5">
                    <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-brand font-mono-tag text-xs font-medium text-brand">
                      {t.initials}
                    </span>
                    <span className="font-mono-tag text-[13px] font-medium text-cream">
                      {t.name}
                    </span>
                  </figcaption>
                  <blockquote className="font-body text-[15px] leading-relaxed text-white/66">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-black/10 bg-tan">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-14">
          <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
            &mdash; FAQ
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-9 divide-y divide-black/12 border-t border-black/12">
            {FAQS.map((faq) => (
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
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get a free audit
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-white/70">
            Tell us about your operation. We&apos;ll do a quick teardown of
            your current marketing presence and walk you through what
            we&apos;d fix first on the call.
          </p>
          <Link href="/contact" className="btn btn-solid mt-9">
            <span>Get My Free Audit</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}

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
