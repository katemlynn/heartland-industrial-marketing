import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Get a Free Audit | Heartland Industrial Marketing",
  "Tell us about your operation. We'll do a quick teardown of your current marketing presence and walk you through what we'd fix first on the call."
);

const AUDIT_AREAS = [
  {
    title: "Your website",
    description:
      "Does it tell a buyer what you make, who it's for, and how to request a quote?",
  },
  {
    title: "Search and reviews",
    description:
      "Where you show up for what you sell, and how your Google Business Profile and reviews compare to your competitors'.",
  },
  {
    title: "Ad spend",
    description:
      "If you run ads, whether the money is reaching buyers or just buying clicks.",
  },
  {
    title: "Follow-up",
    description: "What happens to a quote request after it comes in.",
  },
];

const NEXT_STEPS = [
  {
    title: "You send the form",
    description: "A few details and a short note on what you sell and who you sell to.",
  },
  {
    title: "We reply within one business day",
    description: "To set up a time for the call.",
  },
  {
    title: "We walk you through it",
    description:
      "What we found and what we'd fix first, based on your situation, not a $20K-a-month engagement you don't need.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-steel">
      <PageHeader
        eyebrow="Contact"
        title="Get a free audit"
        description="Tell us about your operation. We'll do a quick teardown of your current marketing presence and walk you through what we'd fix first on the call."
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16 lg:px-14">
        <div>
          <div className="relative border border-white/16 bg-white/[0.03] p-8 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-brand" />
            <ContactForm />
          </div>

          <p className="mt-4 text-center font-body text-xs text-white/40">
            We respond within one business day.
          </p>
        </div>

        <aside className="lg:pt-2">
          <p className="font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
            What You Get
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-cream">
            A straight answer on what to fix first.
          </h2>
          <p className="mt-3 font-body text-[15px] leading-relaxed text-white/60">
            No pitch deck. We look at your marketing the way a buyer does,
            then tell you where the quotes are going.
          </p>

          <h3 className="mt-9 font-label text-[11.5px] font-semibold tracking-[0.24em] text-white/45 uppercase">
            What we look at
          </h3>
          <ul className="mt-4 space-y-4">
            {AUDIT_AREAS.map((area) => (
              <li key={area.title} className="flex gap-3">
                <span className="mt-2 h-[5px] w-[5px] shrink-0 bg-brand" />
                <p className="font-body text-sm leading-relaxed text-white/60">
                  <span className="font-semibold text-cream">{area.title}.</span>{" "}
                  {area.description}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-9 font-label text-[11.5px] font-semibold tracking-[0.24em] text-white/45 uppercase">
            What happens next
          </h3>
          <ol className="mt-4 space-y-4">
            {NEXT_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-label text-xs font-semibold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm leading-relaxed text-white/60">
                  <span className="font-semibold text-cream">{step.title}.</span>{" "}
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  );
}
