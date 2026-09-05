import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Heartland Industrial Marketing",
  description:
    "Brand strategy, content, and demand generation services for industrial and manufacturing companies.",
};

const SERVICES = [
  {
    title: "Brand Strategy & Positioning",
    description:
      "We clarify who you serve, what makes you different, and how to say it clearly across your website, sales materials, and trade show presence.",
    items: [
      "Messaging and positioning workshops",
      "Competitive and market analysis",
      "Brand guidelines and voice",
    ],
  },
  {
    title: "Content & Case Studies",
    description:
      "Technical buyers do their homework. We create the content that earns their trust before your sales team ever picks up the phone.",
    items: [
      "Case studies and customer stories",
      "Spec sheets and technical content",
      "Blog and resource content",
    ],
  },
  {
    title: "Digital & Trade Show Campaigns",
    description:
      "Industrial sales cycles are long. We build campaigns designed to stay in front of buyers from first search to final RFQ.",
    items: [
      "Search and LinkedIn advertising",
      "Email nurture campaigns",
      "Trade show and event marketing",
    ],
  },
  {
    title: "Website Design & Management",
    description:
      "A website that holds up to technical scrutiny and makes it easy for procurement and engineering to find what they need.",
    items: [
      "Website design and development",
      "Ongoing content updates",
      "SEO for industrial search terms",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        Services
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-steel sm:text-4xl">
        Marketing built for industrial companies
      </h1>
      <p className="mt-4 max-w-2xl text-steel-light">
        Whether you&apos;re a manufacturer, distributor, or industrial
        service provider, we build marketing programs around how your buyers
        actually make decisions.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.title} className="rounded-lg border border-black/10 p-8">
            <h2 className="text-xl font-semibold text-steel">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-steel-light">
              {service.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-steel-light">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-steel px-8 py-10 text-center text-white">
        <h2 className="text-xl font-bold">
          Not sure where to start?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-white/80">
          Tell us about your business and goals, and we&apos;ll recommend a
          plan that fits.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
