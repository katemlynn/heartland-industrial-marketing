"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const REVENUE_RANGES = [
  "Under $1M revenue",
  "$1M to $5M",
  "$5M to $20M",
  "$20M+",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-brand/30 bg-brand/10 p-6">
        <p className="font-bold text-cream">Thanks for reaching out!</p>
        <p className="mt-1 font-body text-sm text-white/65">
          We received your info and will follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-body text-sm font-medium text-cream">
            Full name
          </label>
          <input id="name" name="name" type="text" required className="field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-body text-sm font-medium text-cream">
            Email
          </label>
          <input id="email" name="email" type="email" required className="field" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block font-body text-sm font-medium text-cream">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" className="field" />
        </div>
        <div>
          <label htmlFor="revenue" className="mb-1.5 block font-body text-sm font-medium text-cream">
            How big is your operation right now?
          </label>
          <select id="revenue" name="revenue" defaultValue="" className="field">
            <option value="" disabled>
              Pick a range
            </option>
            {REVENUE_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-body text-sm font-medium text-cream">
          Tell us about your operation
        </label>
        <textarea id="message" name="message" rows={5} required className="field" />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-red-400">{errorMessage}</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn btn-solid disabled:opacity-60">
        <span>{status === "submitting" ? "Sending..." : "Get My Free Audit"}</span>
      </button>
    </form>
  );
}
