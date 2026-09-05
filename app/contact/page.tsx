import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Heartland Industrial Marketing",
  description:
    "Request a quote or ask a question — Heartland Industrial Marketing responds quickly to industrial and manufacturing companies.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        Contact
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-steel sm:text-4xl">
        Let&apos;s talk about your marketing
      </h1>
      <p className="mt-4 max-w-xl text-steel-light">
        Tell us a bit about your business and what you&apos;re looking for.
        We&apos;ll follow up within one business day.
      </p>

      <div className="mt-10 rounded-lg border border-black/10 p-8">
        <ContactForm />
      </div>
    </div>
  );
}
