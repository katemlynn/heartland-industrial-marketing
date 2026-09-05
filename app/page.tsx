import Link from "next/link";

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
    title: "Your ads aren't paying back.",
    description:
      "Money going into Google Ads with nothing to show for it. You can't tell what's working, and the agency running it can't either.",
  },
  {
    title: "You're invisible to the people searching.",
    description:
      "The competitor across town has 240 reviews. You have 11. Quotes are reaching them, not you.",
  },
  {
    title: "You sell the materials. Someone else gets the credit.",
    description:
      "Your panels end up on a building you'll never visit, installed by a GC you didn't meet. The end owner never knows your name.",
  },
];

const COMPARISONS = [
  {
    label: "vs. a generalist agency",
    title: "They don't speak metals.",
    description: "We do. Built for one industry. We already know what moves the needle.",
  },
  {
    label: "vs. one in-house hire",
    title: "One person can't be six specialists.",
    description: "We're a team of specialists. For less than one full-time hire.",
  },
  {
    label: "vs. the cheap freelancer",
    title: "$500/month buys $500/month of effort.",
    description: "Senior marketers, month-to-month. Not earning our keep, you walk.",
  },
];

const TESTIMONIALS = [
  {
    initials: "WC",
    name: "Wade C.",
    quote:
      "We tried two agencies before this one. Both took my money and had nothing to show for it after months. Heartland got our Google profile from 14 reviews to 80+ in 90 days, and the quote requests followed. Best money we've ever spent on marketing.",
  },
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
      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            For Metals &amp; Manufacturing Companies
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Stop losing sales to competitors who just market better.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            We help metals and manufacturing companies get found, look
            credible, and win the jobs they&apos;re losing today.
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
              See What We Do
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-zinc-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-steel-light">
            Full Service Marketing
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {SERVICES.map((service) => (
              <span key={service} className="text-sm font-medium text-steel-light">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Sound Familiar?
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-steel sm:text-3xl">
          Three patterns we hear from metals owners every week.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {PAIN_POINTS.map((point) => (
            <div key={point.title} className="rounded-lg border border-black/10 p-6">
              <h3 className="text-lg font-semibold text-steel">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-steel-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Why Heartland
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Why we&apos;re a better bet than the alternatives.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {COMPARISONS.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/15 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {item.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get a Free Audit
          </Link>
        </div>
      </section>

      <section className="border-t border-black/10 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Case Study
          </p>
          <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex shrink-0 flex-col items-start rounded-lg bg-steel px-8 py-6 text-white">
              <span className="text-3xl font-bold text-brand">30 → 75</span>
              <span className="mt-1 text-sm text-white/70">
                qualified leads/month in 9 months
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-steel sm:text-2xl">
                How we doubled qualified leads for a 30-year-old Oklahoma
                metals manufacturer.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-steel-light">
                New website, call tracking, a CRM that stopped losing quotes,
                and a trade show program that actually paid back — rebuilt
                as one system, not six disconnected projects.
              </p>
              <Link
                href="/marketing-agency-for-manufacturing#case-study"
                className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Read the full case study &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Reviews
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-steel sm:text-3xl">
          Don&apos;t take our word for it.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-lg border border-black/10 p-6">
              <blockquote className="text-sm leading-6 text-steel-light">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-steel text-xs font-semibold text-white">
                  {t.initials}
                </span>
                <span className="text-sm font-semibold text-steel">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-steel sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-black/10 rounded-lg border border-black/10 bg-white">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-steel">
                  {faq.question}
                  <span className="shrink-0 text-brand group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-steel-light">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Get a free audit + 30-minute call.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Tell us about your operation. We&apos;ll do a quick teardown of
            your current marketing presence and walk you through what
            we&apos;d fix first on the call.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get My Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}
