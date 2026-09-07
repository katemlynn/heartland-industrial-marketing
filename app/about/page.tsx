import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About | Heartland Industrial Marketing",
  "One industry, done well. Heartland Industrial Marketing partners with metals manufacturers and material suppliers to build marketing that drives real pipeline."
);

export default function AboutPage() {
  return (
    <div className="bg-steel">
      <PageHeader eyebrow="About Us" title="One industry. Done well." />

      <div className="mx-auto max-w-2xl px-6 pb-24 lg:px-14">
        <div className="space-y-6 leading-7 text-white/62">
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

        <div className="mt-12 border border-white/16 bg-white/[0.02] p-8">
          <h2 className="font-label text-[11.5px] font-semibold tracking-[0.24em] text-brand uppercase">
            Our Approach
          </h2>
          <ul className="mt-5 space-y-3.5 text-sm text-white/62">
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-[5px] w-[5px] shrink-0 bg-brand" />
              Foundation first, then demand capture, then the compounding
              channels — in that order, not all at once.
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-[5px] w-[5px] shrink-0 bg-brand" />
              Build for the specific buyer doing a specific job, not a
              generic industrial audience.
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-[5px] w-[5px] shrink-0 bg-brand" />
              Measure everything by quote requests and pipeline, not
              impressions or vanity metrics.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
