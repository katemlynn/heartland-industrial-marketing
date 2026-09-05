import Link from "next/link";

const SERVICES = [
  {
    title: "Brand Strategy",
    description:
      "Positioning and messaging that speaks to plant managers, engineers, and procurement teams — not just marketers.",
  },
  {
    title: "Content & Case Studies",
    description:
      "Technical content, spec sheets, and case studies that build credibility with industrial buyers.",
  },
  {
    title: "Digital & Trade Show Campaigns",
    description:
      "Lead generation across search, LinkedIn, and trade shows, tuned for long B2B sales cycles.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-steel text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Industrial &amp; Manufacturing Marketing
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Marketing that speaks the language of the plant floor.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Heartland Industrial Marketing helps manufacturers, distributors,
            and industrial suppliers turn technical expertise into leads,
            brand trust, and long-term growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight text-steel">
          What we do
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="rounded-lg border border-black/10 p-6">
              <h3 className="text-lg font-semibold text-steel">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-steel-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-steel">
            Ready to grow your pipeline?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-steel-light">
            Tell us about your business and we&apos;ll put together a plan
            tailored to your market.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
