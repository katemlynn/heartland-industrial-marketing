import ServiceLanding from "@/components/ServiceLanding";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "SEO for Manufacturers & Metals Companies | Heartland",
  "SEO for metals manufacturers and material suppliers. We go after the searches that turn into quote requests, not vanity rankings. Month to month."
);

export default function SeoForManufacturersPage() {
  return (
    <ServiceLanding
      eyebrow="SEO for Manufacturers"
      title="SEO for Manufacturers & Metals Companies"
      intro="Buyers search before they call. When a GC needs a panel supplier or a fab shop that can hit a lead time, they Google it, and the quote goes to whoever shows up. We make sure that's you."
      problemsHeading="Where metals companies lose search traffic."
      problems={[
        {
          label: "Rankings",
          title: "Three competitors show up before you do.",
          description:
            "Buyers search for exactly what you make, in the area you serve, and find someone else first. Those quote requests never reach you, and you never knew they were out there.",
        },
        {
          label: "Website",
          title: "Your site reads like a brochure.",
          description:
            "One page lists everything you make. Google can't tell what you do, where you do it, or who it's for, so it doesn't send anyone.",
        },
        {
          label: "Past Agencies",
          title: "You paid for SEO and got a PDF.",
          description:
            "Rankings for terms nobody searches, traffic that never calls, and a monthly report nobody can explain. SEO that doesn't produce quote requests isn't worth paying for.",
        },
      ]}
      offeringsHeading="SEO built around quote requests."
      offeringsIntro="We focus on the searches that turn into RFQs and phone calls, not vanity rankings. Here's the work."
      offerings={[
        {
          title: "Keyword research in your buyers' language",
          description:
            "We find what your buyers actually type: product names, specs, applications, and local searches. Then we skip the high-volume terms that never turn into a quote.",
        },
        {
          title: "Capability and product pages",
          description:
            "One page per thing you make and per customer you sell to (GC, developer, end owner), each written to rank for its search and built to turn a visit into a quote request.",
        },
        {
          title: "Service-area pages",
          description:
            "If you ship or install across a region, we build pages that get you found in the towns and states you actually serve, not just the one your shop is in.",
        },
        {
          title: "Google Business Profile and reviews",
          description:
            "For local searches, your Maps listing and review count decide who gets the call. We tighten your profile and set up a steady review pipeline, even when a contractor owns the customer.",
        },
        {
          title: "Content that answers buyer questions",
          description:
            "Articles that answer what owners and buyers search before they call: specs, costs, lead times, how to pick a supplier. Useful to the reader, and it builds rankings over time.",
        },
        {
          title: "Technical fixes",
          description:
            "Page titles, speed, indexing, broken pages: the plumbing that decides whether Google can read your site at all. We fix it first, then keep it clean.",
        },
      ]}
      stepsHeading="SEO compounds. Here's the timeline."
      stepsIntro="SEO is the cheapest long-term channel, but it isn't fast. Most metals companies see results compound over three to six months."
      steps={[
        {
          when: "Month 1",
          title: "Fix the foundation",
          description:
            "Technical cleanup, your Google Business Profile, keyword research, and a plan for the pages you're missing.",
        },
        {
          when: "Months 2–3",
          title: "Build the pages",
          description:
            "Capability, product, and service-area pages go live, with call tracking so every inbound call is logged and attributed.",
        },
        {
          when: "Months 3–6",
          title: "Compound",
          description:
            "Rankings climb, content adds up, and you get one plain-English report on which searches turned into calls and quote requests.",
        },
      ]}
      proofHeading="What compounding looks like."
      proofText="For a 30-year-old Oklahoma metals manufacturer, we built out search visibility and content across their service areas as part of a full marketing rebuild. Site traffic roughly tripled year over year."
      stats={[
        { value: "+200%", label: "Site traffic, year over year" },
        { value: "30 → 75", label: "Qualified leads per month in nine months" },
      ]}
      testimonial={{
        quote:
          "We were paying a website guy, an SEO guy, and a print agency separately. None of them talked to each other. Heartland took it all over and our quote pipeline doubled in six months. One team, one report, nobody pointing fingers.",
        name: "Tom B.",
      }}
      faqs={[
        {
          question: "How long does SEO take for a manufacturing company?",
          answer:
            "Most metals companies see results compound over three to six months. The foundation work (technical fixes, your Google Business Profile, the pages you're missing) happens in the first month or two, and rankings build from there. If you need leads sooner, we run paid search alongside it.",
        },
        {
          question: "Should I invest in SEO or paid ads first?",
          answer:
            "Both, but start paid first. Paid search puts you in front of buyers looking today. SEO takes three to six months to compound but is the cheapest long-term channel. The right move is a small, disciplined paid budget for immediate leads and consistent SEO for compounding traffic.",
        },
        {
          question: "Which keywords should a manufacturer go after?",
          answer:
            "The ones that turn into quote requests: what you make, the specs and applications buyers search for, and the areas you serve. A term with 20 searches a month from buyers ready to order beats one with 2,000 from students and job seekers.",
        },
        {
          question: "Do you lock me into a long contract?",
          answer:
            "No. We work month to month. If we're not earning our keep, you walk.",
        },
      ]}
      related={[
        {
          href: "/services/lead-generation-for-manufacturers",
          label: "Lead Generation for Manufacturers",
        },
        {
          href: "/blog/how-to-market-a-steel-fabricator",
          label: "How to Market a Steel Fabricator",
        },
        {
          href: "/blog/why-your-metals-google-ads-arent-working",
          label: "Why Your Metals Google Ads Aren't Working",
        },
      ]}
      ctaHeading="Find out where you're losing search traffic."
      ctaText="Tell us about your company. We'll do a quick teardown of your current marketing, including how you show up in search, and walk you through what we'd fix first on the call."
    />
  );
}
