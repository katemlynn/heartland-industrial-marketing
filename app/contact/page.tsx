import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Get a Free Audit | Heartland Industrial Marketing",
  "Tell us about your operation. We'll do a quick teardown of your current marketing presence and walk you through what we'd fix first on the call."
);

export default function ContactPage() {
  return (
    <div className="bg-steel">
      <PageHeader
        eyebrow="Free Audit"
        title="Get a free audit"
        description="Tell us about your operation. We'll do a quick teardown of your current marketing presence and walk you through what we'd fix first on the call."
      />

      <div className="mx-auto max-w-2xl px-6 pb-24 lg:px-14">
        <ul className="mb-10 space-y-2.5 font-body text-sm text-white/62">
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 h-[5px] w-[5px] shrink-0 bg-brand" />
            Direct call with a senior strategist, not a salesperson
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 h-[5px] w-[5px] shrink-0 bg-brand" />
            The audit happens before the call, so we have something concrete to show you
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-1.5 h-[5px] w-[5px] shrink-0 bg-brand" />
            If we&apos;re not a fit, we&apos;ll tell you on the call
          </li>
        </ul>

        <div className="border border-white/16 bg-white/[0.02] p-8">
          <ContactForm />
        </div>

        <p className="mt-4 text-center font-body text-xs text-white/40">
          We respond within one business day.
        </p>
      </div>
    </div>
  );
}
