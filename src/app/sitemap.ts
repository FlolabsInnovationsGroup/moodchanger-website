import type { MetadataRoute } from "next";
import { footerNav } from "@/lib/nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return footerNav.map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
