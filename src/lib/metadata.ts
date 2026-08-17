import type { Metadata } from "next";
import { site } from "./site";

/**
 * Builds a route's metadata.
 *
 * Next does not deep-merge `openGraph` / `twitter` from the root layout, and a
 * page that declares either of them also drops the inherited `opengraph-image`.
 * Composing them here keeps every route shipping a complete card — title,
 * description, canonical URL, type and preview image — so links unfurl the same
 * way on Discord, LinkedIn, Facebook, WhatsApp and X.
 */
export function pageMetadata({
  title,
  description,
  path,
  socialTitle = title,
  socialDescription = description,
}: {
  /** Full <title>, used verbatim (the original pages each had their own form). */
  title: string;
  description: string;
  /** Route path, e.g. "/pets". */
  path: string;
  socialTitle?: string;
  socialDescription?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title: socialTitle,
      description: socialDescription,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: ["/twitter-image"],
    },
  };
}
