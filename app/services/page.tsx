import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import ServicesAccordion from "@/components/ServicesAccordion";
import PageHeader from "@/components/PageHeader";

export const metadata = pageMetadata(
  "Marketing Services for Metals & Material Companies | Heartland Industrial Marketing",
  "The full playbook we run for metals manufacturers and material suppliers. Engagements are bundled to fit your company, not sold à la carte."
);

const SERVICES = [
  {
    title: "Full Service Marketing",
    description:
      "When you've outgrown stitching freelancers together. We handle strategy, creative, channels, and reporting under a single retainer with one point of contact (a senior strategist, not a junior account manager).",
  },
  {
    title: "Website Design & Development",
    description:
      "Most metals websites read like brochures. We build sites that turn buyers searching today into quote requests tomorrow. Every page is built around a specific customer (residential GC, commercial developer, end owner) instead of a generic audience.",
  },
  {
    title: "Brand & Visual Identity",
    description:
      "Most metals companies have a logo from 1998 and brand assets that look like a Word doc. We refresh your visual identity so your trade-show booth, your truck graphics, your invoice, and your website all look like they belong to the same serious company.",
  },
  {
    title: "SEO",
    description:
      "Long-term, compounding traffic from buyers actively searching for what you sell. We focus on the keywords that drive quote requests, not vanity rankings. Most metals companies see results compound over three to six months.",
  },
  {
    title: "Lead Generation",
    description:
      "A complete lead engine that combines search, social, and signage into a single inbound system. We don't just turn on ads. We build the full funnel from impression to closed quote, with reporting you can actually read.",
  },
  {
    title: "Organic & Paid Social",
    description:
      "Metals companies dismiss social, then watch competitors land contracts because they showed up first on LinkedIn or Instagram. We help you build a low-effort cadence that wins attention from contractors, developers, and end-owners.",
  },
  {
    title: "Email Marketing",
    description:
      "Most metals companies sit on a list of past customers, prospects, and incomplete quotes, and never email them. We build sequences that turn that list into recurring revenue.",
  },
  {
    title: "Marketing Automation",
    description:
      "Most quote requests in metals fall through the cracks because nobody routes them, follows up, or tracks them. We install the automation that ensures every inbound lead gets the right response, fast.",
  },
  {
    title: "Signage & On-Site Presence",
    description:
      "Your shop or warehouse is on a road that hundreds of GCs and contractors drive past every week. Most metals companies underuse that visibility. We design signage and site graphics that drive quote requests from the road.",
  },
  {
    title: "Trade Shows & Events",
    description:
      "Metals trade shows are some of the highest-intent venues in the industry. But most booths look like a card table with a banner. We design the pre-event campaign, the booth itself, and the post-event follow-up so events actually pay back.",
  },
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

export default function ServicesPage() {
  return (
    <div className="bg-steel">
      <PageHeader
        eyebrow="Services"
        title="The full playbook, built for one industry."
        description="Engagements are bundled to fit your company, not sold à la carte."
      />

      <section className="border-t border-white/8 px-6 py-24 lg:px-14">
        <ServicesAccordion services={SERVICES} />
      </section>

      <section className="border-t border-white/8 px-6 py-20 text-center lg:px-14">
        <h2 className="text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
          Want to see how this fits your operation?
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-white/62">
          Tell us about your company. We&apos;ll do a quick teardown of your
          current marketing and walk you through what we&apos;d fix first on
          the call.
        </p>
        <Link href="/contact" className="btn btn-solid mt-8">
          <span>Get a Free Audit</span>
          <ArrowIcon />
        </Link>
      </section>
    </div>
  );
}
