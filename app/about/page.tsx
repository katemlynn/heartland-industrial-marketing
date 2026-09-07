import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About | Heartland Industrial Marketing",
  "One industry, done well. Heartland Industrial Marketing partners with metals manufacturers and material suppliers to build marketing that drives real pipeline."
);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        About Us
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-steel sm:text-4xl">
        One industry. Done well.
      </h1>

      <div className="mt-8 space-y-6 text-steel-light leading-7">
        <p>
          Most metals manufacturers and material suppliers end up with a
          generalist agency that spends the first three months learning the
          difference between a purlin and a panel — on the client&apos;s
          dime. Heartland exists to skip that. One industry, run well, beats
          a jack-of-all-trades agency spread thin across every vertical.
        </p>
        <p>
          That focus is also why we stay lean by design. Heartland is a
          small team of senior marketers, not a bloated retainer padded with
          account managers and overhead. You get people who&apos;ve already
          solved the problems specific to metals and manufacturing:
          contractor-installed products where the end owner never learns
          your name, sales cycles measured in months, and trade show booths
          that need to actually pay back.
        </p>
        <p>
          We&apos;d rather run a smaller book of clients well than a large
          one on autopilot. Senior marketers on your account directly,
          month to month, no long contracts — not a junior team reading
          from a generic B2B playbook.
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
