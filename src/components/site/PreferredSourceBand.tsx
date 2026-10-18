"use client";

import { usePathname } from "next/navigation";
import { GoogleG } from "@/components/icons";
import { isPrivateRoute } from "@/lib/preferred-source";
import { PREFERRED_SOURCE } from "@/lib/site";

/** Closing beat before the footer: an earned ask, not a floating chip. */
export default function PreferredSourceBand() {
  const pathname = usePathname();
  if (isPrivateRoute(pathname)) return null;

  return (
    <section className="ps-band" aria-label="Add MoodChanger as a preferred website on Google">
      <div className="ps-band-inner">
        <span className="ps-band-rule" aria-hidden="true" />
        <h2 className="reveal">Support {PREFERRED_SOURCE.brand}</h2>
        <p className="reveal" data-delay="80">
          Add us as a <em>preferred website</em> on Google, so we are more likely
          to appear in your Top Stories, Discover, and AI Overviews.
        </p>
        <a
          className="mcf-ps ps-band-btn reveal"
          data-delay="140"
          href={PREFERRED_SOURCE.deeplink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleG />
          Add on Google
        </a>
      </div>
    </section>
  );
}
