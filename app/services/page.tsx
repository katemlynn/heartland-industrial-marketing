import Link from "next/link";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Marketing Services for Metals & Material Companies | Heartland Industrial Marketing",
  "The full playbook we run for metals manufacturers and material suppliers. Engagements are bundled to fit your company, not sold à la carte."
);

const SERVICES = [
  {
    title: "Full Service Marketing",
    tagline: "Everything below, run as one playbook.",
    description:
      "When you've outgrown stitching freelancers together. We handle strategy, creative, channels, and reporting under a single retainer with one point of contact (a senior strategist, not a junior account manager).",
    items: [
      "Quarterly strategy and playbook",
      "Execution across all signed-up channels",
      "Monthly reporting and review call",
      "Direct access to senior strategists",
    ],
  },
  {
    title: "Website Design & Development",
    tagline: "A site built to convert your specific buyer.",
    description:
      "Most metals websites read like brochures. We build sites that turn buyers searching today into quote requests tomorrow. Every page is built around a specific customer (residential GC, commercial developer, end owner) instead of a generic audience.",
    items: [
      "Custom design and build",
      "Conversion-focused page architecture",
      "Quote-request forms and lead routing",
      "Hosting and ongoing updates",
    ],
  },
  {
    title: "Brand & Visual Identity",
    tagline: "Look as serious as your product.",
    description:
      "Most metals companies have a logo from 1998 and brand assets that look like a Word doc. We refresh your visual identity so your trade-show booth, your truck graphics, your invoice, and your website all look like they belong to the same serious company.",
    items: [
      "Logo refresh or full identity system",
      "Color palette and typography",
      "Brand guidelines document",
      "Templates: proposals, invoices, quote forms",
    ],
  },
  {
    title: "SEO",
    tagline: "Get found when buyers search.",
    description:
      "Long-term, compounding traffic from buyers actively searching for what you sell. We focus on the keywords that drive quote requests, not vanity rankings. Most metals companies see results compound over three to six months.",
    items: [
      "Keyword research focused on commercial intent",
      "On-page optimization and technical SEO",
      "Google Business Profile management",
      "Content production for service and location pages",
    ],
  },
  {
    title: "Lead Generation",
    tagline: "Quote requests on a predictable schedule.",
    description:
      "A complete lead engine that combines search, social, and signage into a single inbound system. We don't just turn on ads. We build the full funnel from impression to closed quote, with reporting you can actually read.",
    items: [
      "Channel strategy across search, social, and signage",
      "Landing pages and conversion forms",
      "Lead routing and CRM integration",
      "Weekly reporting dashboard",
    ],
  },
  {
    title: "Organic & Paid Social",
    tagline: "Show up where buyers and contractors are.",
    description:
      "Metals companies dismiss social, then watch competitors land contracts because they showed up first on LinkedIn or Instagram. We help you build a low-effort cadence that wins attention from contractors, developers, and end-owners.",
    items: [
      "Content strategy and posting calendar",
      "Photography and short-form video direction",
      "Paid amplification on LinkedIn and Meta",
      "Performance reporting",
    ],
  },
  {
    title: "Email Marketing",
    tagline: "Stay top-of-mind without lifting a finger.",
    description:
      "Most metals companies sit on a list of past customers, prospects, and incomplete quotes, and never email them. We build sequences that turn that list into recurring revenue.",
    items: [
      "List segmentation and CRM hygiene",
      "Welcome and nurture sequences",
      "Quote follow-up automation",
      "Monthly newsletter (we write it)",
    ],
  },
  {
    title: "Marketing Automation",
    tagline: "Make every lead get the right follow-up.",
    description:
      "Most quote requests in metals fall through the cracks because nobody routes them, follows up, or tracks them. We install the automation that ensures every inbound lead gets the right response, fast.",
    items: [
      "CRM setup or audit (HubSpot, Salesforce, Zoho)",
      "Lead routing rules",
      "Quote follow-up workflows",
      "Notification and SLA tracking",
    ],
  },
  {
    title: "Signage & On-Site Presence",
    tagline: "Your facility is a billboard. Use it.",
    description:
      "Your shop or warehouse is on a road that hundreds of GCs and contractors drive past every week. Most metals companies underuse that visibility. We design signage and site graphics that drive quote requests from the road.",
    items: [
      "Building signage design",
      "Yard signs and vehicle wraps",
      "QR code campaigns linking to quote forms",
      "Billboards",
    ],
  },
  {
    title: "Trade Shows & Events",
    tagline: "Stop having the saddest booth at FABTECH.",
    description:
      "Metals trade shows are some of the highest-intent venues in the industry. But most booths look like a card table with a banner. We design the pre-event campaign, the booth itself, and the post-event follow-up so events actually pay back.",
    items: [
      "Pre-event email and ad campaign",
      "Booth design and signage",
      "On-site lead capture",
      "Post-event follow-up sequence",
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
        The full playbook, built for metals.
      </h1>
      <p className="mt-4 max-w-2xl text-steel-light">
        Engagements are bundled to fit your company, not sold à la carte.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.title} className="rounded-lg border border-black/10 p-8">
            <h2 className="text-xl font-semibold text-steel">{service.title}</h2>
            <p className="mt-1 text-sm font-medium text-brand">{service.tagline}</p>
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
          Want to see how this fits your operation?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-white/80">
          Tell us about your company. We&apos;ll do a quick teardown of your
          current marketing and walk you through what we&apos;d fix first on
          the call.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Get a Free Audit
        </Link>
      </div>
    </div>
  );
}
