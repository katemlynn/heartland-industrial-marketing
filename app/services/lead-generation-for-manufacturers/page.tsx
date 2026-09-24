import ServiceLanding from "@/components/ServiceLanding";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Lead Generation for Manufacturers & Metals | Heartland",
  "Inbound lead generation for metals manufacturers and material suppliers. Search, ads, reviews, and follow-up in one system, tracked from click to closed quote."
);

export default function LeadGenerationForManufacturersPage() {
  return (
    <ServiceLanding
      eyebrow="Lead Generation for Manufacturers"
      title="Lead Generation for Manufacturers & Metals Companies"
      intro="More quote requests from buyers who came looking for you. We build one inbound system (search, ads, reviews, signage, and follow-up) and track every lead from first click to closed quote."
      problemsHeading="Where the leads leak out."
      problems={[
        {
          label: "Ad Spend",
          title: "You're paying for clicks, not quotes.",
          description:
            "Money goes into Google Ads every month, and nobody can tell you which clicks turned into calls, let alone jobs.",
        },
        {
          label: "Follow-Up",
          title: "Quote requests die in voicemail.",
          description:
            "A buyer calls after hours or fills in a form, and nobody gets back to them for days. By then they've ordered from whoever picked up.",
        },
        {
          label: "Outbound",
          title: "Bought lists fill a calendar, not a pipeline.",
          description:
            "Purchased contact lists and appointment setters get you meetings with people who weren't looking. Buyers already searching for what you make are closer to ordering.",
        },
      ]}
      offeringsHeading="One system, from first click to closed quote."
      offeringsIntro="We don't just turn on ads. We build the full funnel, from impression to closed quote, with reporting you can actually read."
      offerings={[
        {
          title: "Paid search",
          description:
            "Google Ads aimed at buyer-intent searches for what you make, in the areas you serve, so the budget goes to people ready to request a quote. It can start producing quote requests within a few weeks.",
        },
        {
          title: "SEO",
          description:
            "The compounding side of the system: capability, product, and service-area pages that rank for the searches your buyers make and lower your cost per lead over time.",
          href: "/services/seo-for-manufacturers",
          linkLabel: "SEO for manufacturers",
        },
        {
          title: "Google Business Profile and reviews",
          description:
            "For local searches, your Maps listing and review count decide who gets the call. We set up a steady review pipeline, even when a contractor owns the relationship.",
        },
        {
          title: "Call tracking and CRM",
          description:
            "Every inbound call logged and attributed, every quote request in one place. Nothing gets lost in voicemail, and you know which channel each lead came from.",
        },
        {
          title: "Follow-up automation",
          description:
            "Every inbound lead gets routed to the right person and a fast response, and open quotes get followed up instead of forgotten.",
        },
        {
          title: "Signage and social",
          description:
            "The road past your shop and your LinkedIn feed are both lead sources. We make them point back to the same system, so those leads get counted too.",
        },
      ]}
      stepsHeading="Fast wins first, compounding channels second."
      stepsIntro="We sequence the fast wins first so you have momentum (and revenue) while the slower channels build."
      steps={[
        {
          when: "Weeks 1–2",
          title: "Plug the leaks",
          description:
            "Call tracking, CRM, and follow-up, so every lead you already get is answered and counted.",
        },
        {
          when: "Weeks 2–6",
          title: "Turn on the fast channels",
          description:
            "Paid search and a tightened Google Business Profile, which can produce inbound quote requests within a few weeks.",
        },
        {
          when: "Months 3–6",
          title: "Build what compounds",
          description:
            "SEO, reviews, and content that keep bringing in leads without paying for every click.",
        },
      ]}
      proofHeading="From 30 leads a month to 75."
      proofText="For a 30-year-old Oklahoma metals manufacturer, we set up call tracking and a CRM, rebuilt the website, and built out search visibility across their service areas. Qualified leads went from 30 a month to 75, and the average deal size went up."
      stats={[
        { value: "30 → 75", label: "Qualified leads per month in nine months" },
        { value: "+200%", label: "Site traffic, year over year" },
      ]}
      testimonial={{
        quote:
          "Six weeks. That's how long my old agency took to do anything. Heartland had our paid search program live in two. I don't have to babysit them. The work gets done and the leads keep coming.",
        name: "Jeremy P.",
      }}
      faqs={[
        {
          question: "How fast can a manufacturer start getting leads?",
          answer:
            "Paid search and a tightened Google Business Profile can produce inbound quote requests within a few weeks. SEO and reviews compound over three to six months. Trade shows and partnerships take months to a year. We start with the fast wins so you have leads while the rest builds.",
        },
        {
          question: "Do you do cold calling or sell lead lists?",
          answer:
            "No. We build inbound: buyers who searched for what you make, saw your sign, or found you through a review, and then reached out. They're already looking, which is why they're worth more than a name on a list.",
        },
        {
          question: "How do I know which leads came from marketing?",
          answer:
            "Call tracking and form tracking tag every inbound lead with where it came from. You get one report showing calls, quote requests, and which channels produced them.",
        },
        {
          question: "How much should I spend on lead generation?",
          answer:
            "Most owner-operated metals companies should spend three to seven percent of revenue on marketing overall. We'll tell you what makes sense for your situation on the call, and we work month to month, with no long contracts.",
        },
      ]}
      related={[
        {
          href: "/services/seo-for-manufacturers",
          label: "SEO for Manufacturers",
        },
        {
          href: "/blog/why-your-metals-google-ads-arent-working",
          label: "Why Your Metals Google Ads Aren't Working",
        },
        {
          href: "/blog/how-much-should-a-metal-manufacturer-spend-on-marketing",
          label: "How Much Should a Metal Manufacturer Spend on Marketing?",
        },
      ]}
      ctaHeading="Find out where your leads are leaking."
      ctaText="Tell us about your company. We'll do a quick teardown of your current marketing and walk you through what we'd fix first on the call."
    />
  );
}
