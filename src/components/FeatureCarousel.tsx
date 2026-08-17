"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type Feature = {
  /** Zero-padded index shown in the media corner and above the heading. */
  num: string;
  /** Anchor id, when the slide is deep-linkable (People conditions). */
  id?: string;
  /** Overrides the generated dot aria-label (e.g. "Allergies"). */
  dotLabel?: string;
  title: string;
  desc: ReactNode;
  points: string[];
  /** Foreground photo. Pets supplies its media via CSS backgrounds instead. */
  image?: { src: string; alt: string };
  /** Adds the dotted texture overlay — used by the Pets carousel. */
  grain?: boolean;
};

/**
 * One-capability-at-a-time carousel used by Athletes, People and Pets.
 *
 * The bullet stagger replays on every slide change and is armed only once the
 * carousel scrolls into view, matching `initCarousel` in athletes.js.
 */
export default function FeatureCarousel({
  features,
  label = "capability",
  index: controlledIndex,
  onIndexChange,
}: {
  features: Feature[];
  label?: string;
  /** Supply both to drive the carousel from outside (People deep-links to it). */
  index?: number;
  onIndexChange?: (index: number) => void;
}) {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(0);
  const index = controlledIndex ?? uncontrolledIndex;
  const setIndex = (next: number) => {
    if (controlledIndex === undefined) setUncontrolledIndex(next);
    onIndexChange?.(next);
  };
  const carousel = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const armed = useRef(false);

  // Replay the per-slide bullet stagger. Done via classList (not React state)
  // because the transition only restarts after a forced reflow.
  const animatePoints = (idx: number) => {
    const slides = track.current?.children;
    if (!slides) return;
    for (const slide of Array.from(slides)) slide.classList.remove("show-points");
    const active = slides[idx] as HTMLElement | undefined;
    if (!active) return;
    void active.offsetWidth;
    active.classList.add("show-points");
  };

  useEffect(() => {
    if (armed.current) animatePoints(index);
  }, [index]);

  // Arm the stagger the first time the carousel nears the viewport.
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion:reduce)").matches;
    if (reduce) {
      armed.current = true;
      for (const slide of Array.from(track.current?.children ?? []))
        slide.classList.add("show-points");
      return;
    }

    let raf = 0;
    let frames = 0;
    const check = () => {
      if (armed.current || !carousel.current) return;
      const r = carousel.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.8 && r.bottom > 0) {
        armed.current = true;
        animatePoints(index);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    const loop = () => {
      check();
      if (!armed.current && frames++ < 240) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("scroll", check);
      cancelAnimationFrame(raf);
    };
    // deliberately runs once — `index` is read through the closure only to seed
    // the very first stagger, and re-arming on every change would replay it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (n: number) => setIndex(((n % features.length) + features.length) % features.length);

  return (
    <div className="feature-carousel reveal" data-delay="120" ref={carousel}>
      <div
        className="feature-track"
        ref={track}
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {features.map((f) => (
          <article className="feature reveal" id={f.id} key={f.num}>
            <div className="media">
              {f.image && (
                <div className="zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element -- fills a CSS-sized frame; sizing is handled by the design's aspect-ratio */}
                  <img src={f.image.src} alt={f.image.alt} loading="lazy" />
                </div>
              )}
              {f.grain && <div className="grain" />}
              <div className="vig" />
              <span className="idx">{f.num}</span>
            </div>
            <div className="copy">
              <span className="fnum">{f.num}</span>
              <h3>{f.title}</h3>
              <p className="desc">{f.desc}</p>
              <ul className="points">
                {f.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-nav">
        <button
          className="cbtn prev"
          type="button"
          aria-label={`Previous ${label}`}
          onClick={() => go(index - 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="carousel-dots" role="tablist">
          {features.map((f, i) => (
            <button
              key={f.num}
              className={i === index ? "on" : undefined}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={
                f.dotLabel ?? `${label.charAt(0).toUpperCase()}${label.slice(1)} ${i + 1}`
              }
              onClick={() => go(i)}
            />
          ))}
        </div>

        <button
          className="cbtn next"
          type="button"
          aria-label={`Next ${label}`}
          onClick={() => go(index + 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
