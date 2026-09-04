"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Close, GoogleG } from "@/components/icons";
import {
  dismissPreferredSource,
  isPreferredSourceDismissed,
  isPrivateRoute,
} from "@/lib/preferred-source";
import { PREFERRED_SOURCE } from "@/lib/site";

export default function PreferredSourceChip() {
  const pathname = usePathname();
  const privatePage = isPrivateRoute(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (privatePage) {
      setOpen(false);
      return;
    }
    if (isPreferredSourceDismissed()) return;

    let shown = false;
    const show = () => {
      if (shown || isPreferredSourceDismissed()) return;
      shown = true;
      setOpen(true);
      cleanup();
    };

    const timer = window.setTimeout(show, PREFERRED_SOURCE.showAfterMs);
    const onScroll = () => {
      if (window.scrollY >= PREFERRED_SOURCE.showAfterScrollPx) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, [privatePage]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismissPreferredSource();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const hide = () => {
    dismissPreferredSource();
    setOpen(false);
  };

  if (privatePage || !open) return null;

  return (
    <aside className="ps-chip" aria-label="Add MoodChanger as a preferred source on Google">
      <button type="button" className="ps-chip-close" aria-label="Dismiss" onClick={hide}>
        <Close />
      </button>
      <p className="ps-chip-copy">
        See {PREFERRED_SOURCE.brand} <span className="ps-emph">more often</span> on Google
      </p>
      <a
        className="ps-chip-btn"
        href={PREFERRED_SOURCE.deeplink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={hide}
      >
        <GoogleG />
        Add on Google
      </a>
    </aside>
  );
}
