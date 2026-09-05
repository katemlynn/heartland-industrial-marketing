import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Audit | Heartland Industrial Marketing",
  description:
    "Tell us about your operation. We'll do a quick teardown of your current marketing presence and walk you through what we'd fix first on the call.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        Free Audit
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-steel sm:text-4xl">
        Get a free audit + 30-minute call.
      </h1>
      <p className="mt-4 max-w-xl text-steel-light">
        Tell us about your operation. We&apos;ll do a quick teardown of your
        current marketing presence and walk you through what we&apos;d fix
        first on the call.
      </p>

      <ul className="mt-6 space-y-2 text-sm text-steel-light">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          Direct call with a founder, not a salesperson
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          The audit happens before the call, so we have something concrete to show you
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          If we&apos;re not a fit, we&apos;ll tell you on the call
        </li>
      </ul>

      <div className="mt-10 rounded-lg border border-black/10 p-8">
        <ContactForm />
      </div>

      <p className="mt-4 text-center text-xs text-steel-light">
        We respond within one business day.
      </p>
    </div>
  );
}
