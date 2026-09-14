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
        eyebrow="Contact"
        title="Get a free audit"
        description="Tell us about your operation. We'll do a quick teardown of your current marketing presence and walk you through what we'd fix first on the call."
      />

      <div className="mx-auto max-w-2xl px-6 pb-24 lg:px-14">
        <div className="relative border border-white/16 bg-white/[0.03] p-8 sm:p-10">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-brand" />
          <ContactForm />
        </div>

        <p className="mt-4 text-center font-body text-xs text-white/40">
          We respond within one business day.
        </p>
      </div>
    </div>
  );
}
