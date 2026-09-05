import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Heartland Industrial Marketing",
  description:
    "Heartland Industrial Marketing partners with metals manufacturers and material suppliers to build marketing that drives real pipeline.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        About Us
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-steel sm:text-4xl">
        Marketing partners who speak metals
      </h1>

      <div className="mt-8 space-y-6 text-steel-light leading-7">
        <p>
          {/* TODO(Kate): Replace this placeholder copy with your real founding
              story, background, and what makes Heartland different. */}
          Heartland Industrial Marketing was built for one industry: metals
          manufacturers and material suppliers. Not agencies that dabble in
          industrial clients between restaurant rebrands and app launches —
          a team that already knows the patterns, the buyers, and what
          actually moves the needle for owner-operated shops.
        </p>
        <p>
          We know the dynamic that generalist agencies miss: you sell the
          materials, a GC installs them, and the end owner never learns your
          name. We build marketing around that reality instead of pretending
          it doesn&apos;t exist — review systems that work when the customer
          isn&apos;t the one buying, websites built around the specific buyer
          searching today, and campaigns sequenced so the fast wins show up
          before the slow ones compound.
        </p>
        <p>
          When you work with Heartland, you get a founder on the call, not an
          account manager reading off a template. One team running strategy,
          creative, channels, and reporting together, so nothing falls
          through the cracks between three different freelancers who never
          talk to each other.
        </p>
      </div>

      <div className="mt-12 rounded-lg border border-black/10 p-8">
        <h2 className="text-lg font-semibold text-steel">Our approach</h2>
        <ul className="mt-4 space-y-3 text-sm text-steel-light">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            Foundation first, then demand capture, then the compounding
            channels — in that order, not all at once.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            Build for the specific buyer doing a specific job, not a generic
            industrial audience.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            Measure everything by quote requests and pipeline, not
            impressions or vanity metrics.
          </li>
        </ul>
      </div>
    </div>
  );
}
