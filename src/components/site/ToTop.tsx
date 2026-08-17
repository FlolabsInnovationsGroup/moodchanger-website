"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/icons";

/** Floating "Top" pill; appears past 60% of a viewport height of scroll. */
export default function ToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`to-top${show ? " show" : ""}`}
      href="#top"
      aria-label="Scroll to top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUp />
      Top
    </a>
  );
}
