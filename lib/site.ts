import type { Metadata } from "next";

export const SITE_URL = "https://heartlandindustrialmarketing.com";
export const SITE_NAME = "Heartland Industrial Marketing";

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    // A page-level `openGraph` object fully replaces the one inherited from
    // the root layout (Next.js merges metadata shallowly, per top-level
    // key), which would otherwise silently drop the shared og-image set
    // there. Re-declaring `images` here keeps every page's share card
    // pointing at the same generated image.
    openGraph: { title, description, images: ["/opengraph-image"] },
  };
}
