import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy | Heartland Industrial Marketing",
  "How Heartland Industrial Marketing collects, uses, and protects information submitted through this website."
);

const EFFECTIVE_DATE = "September 8, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-steel">
      <PageHeader eyebrow="Legal" title="Privacy Policy" />

      <div className="mx-auto max-w-2xl px-6 pb-24 lg:px-14">
        <p className="mb-10 text-sm text-white/40">Effective {EFFECTIVE_DATE}</p>

        <div className="prose prose-invert max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-cream prose-p:text-white/62 prose-a:text-brand prose-a:no-underline hover:prose-a:text-white prose-strong:text-cream prose-li:text-white/62">
          <p>
            Heartland Industrial Marketing (&quot;Heartland,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
            heartlandindustrialmarketing.com (the &quot;Site&quot;). This
            policy explains what information we collect through the Site,
            how we use it, and the choices you have.
          </p>

          <h2>Information We Collect</h2>
          <p>
            The only information we collect directly is what you choose to
            give us. When you submit the &quot;Get a Free Audit&quot; form on
            our Contact page, we collect:
          </p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number, if you provide one</li>
            <li>Your company&apos;s approximate revenue range, if you select one</li>
            <li>Whatever you write in the message field</li>
          </ul>
          <p>
            We do not use cookies, analytics, or advertising tracking
            technology on this Site at this time. If that changes — for
            example, if we add site analytics or ad-tracking pixels in the
            future — we will update this policy to describe what&apos;s
            added before it goes live.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information you submit only to:</p>
          <ul>
            <li>Respond to your request and follow up about a potential free audit or consultation</li>
            <li>Understand your business well enough to have a useful call with you</li>
            <li>Keep an internal record of inquiries so we can track our own follow-up</li>
          </ul>
          <p>
            We do not sell, rent, or share your information with third
            parties for their own marketing purposes.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use{" "}
            <a href="https://resend.com" target="_blank" rel="noopener noreferrer">
              Resend
            </a>{" "}
            to deliver the email notification generated when you submit the
            contact form. Resend processes the contents of that email
            (including your name, email, and message) solely to deliver it
            to us, under{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resend&apos;s own privacy policy
            </a>
            . This Site is hosted on infrastructure provided by our hosting
            and domain providers, who may process standard technical data
            (like IP addresses) as part of normal web hosting — we don&apos;t
            separately access or use that data ourselves.
          </p>

          <h2>Data Retention</h2>
          <p>
            We keep contact form submissions for as long as reasonably
            necessary to respond to your inquiry and maintain a record of
            past conversations, unless you ask us to delete it sooner.
          </p>

          <h2>Your Rights</h2>
          <p>
            You can ask us what information we have about you, ask us to
            correct it, or ask us to delete it, at any time. To do so,
            email us at{" "}
            <a href="mailto:kate@sittonbuildinggroup.com">
              kate@sittonbuildinggroup.com
            </a>
            . We&apos;ll respond within a reasonable time.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable steps to protect the information you submit,
            including relying on reputable third-party providers (like
            Resend) that maintain their own security practices. No method of
            transmission over the internet is 100% secure, so we can&apos;t
            guarantee absolute security.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            This Site is intended for business owners and professionals. It
            is not directed at, and we do not knowingly collect information
            from, anyone under the age of 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy as the Site changes — for example, if
            we add analytics or new third-party tools. We&apos;ll update the
            effective date above when we do.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this policy or your information? Email{" "}
            <a href="mailto:kate@sittonbuildinggroup.com">
              kate@sittonbuildinggroup.com
            </a>{" "}
            or use our{" "}
            <a href="/contact">contact form</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
