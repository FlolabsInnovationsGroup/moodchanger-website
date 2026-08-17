"use client";

import { useCallback, useEffect, useState } from "react";
import FeatureCarousel, { type Feature } from "@/components/FeatureCarousel";

/** Anchor ids, in slide order — these are what the People header menu links to. */
const IDS = ["allergies", "stuttering", "cognitive"];

/** Clears the fixed header when jumping to the conditions section. */
const HEADER_OFFSET = 56;

/**
 * The conditions carousel plus its deep-linking. `#allergies` / `#stuttering` /
 * `#cognitive` select the matching slide and scroll the section into view,
 * whether the visitor arrives with the hash or clicks it from the header.
 */
export default function ConditionsCarousel({ features }: { features: Feature[] }) {
  const [index, setIndex] = useState(0);

  const goToCondition = useCallback((id: string, smooth: boolean) => {
    const idx = IDS.indexOf(id);
    if (idx < 0) return;
    setIndex(idx);
    const section = document.getElementById("excellence");
    if (section) {
      window.scrollTo({
        top: Math.max(0, section.offsetTop - HEADER_OFFSET),
        behavior: smooth ? "smooth" : "auto",
      });
    }
  }, []);

  // arriving with a hash (e.g. from another page's People menu)
  useEffect(() => {
    const fromHash = (smooth: boolean) => {
      const id = window.location.hash.replace("#", "");
      if (IDS.includes(id)) goToCondition(id, smooth);
    };
    // let layout settle before measuring offsetTop
    const t = window.setTimeout(() => fromHash(false), 250);
    const onHashChange = () => fromHash(true);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [goToCondition]);

  // same-page clicks on the People menu
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href]");
      const href = a?.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const id = href.slice(1);
      if (!IDS.includes(id)) return;
      e.preventDefault();
      history.replaceState(null, "", `#${id}`);
      goToCondition(id, true);
      document.body.classList.remove("nav-open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [goToCondition]);

  return (
    <FeatureCarousel
      features={features}
      label="condition"
      index={index}
      onIndexChange={setIndex}
    />
  );
}
