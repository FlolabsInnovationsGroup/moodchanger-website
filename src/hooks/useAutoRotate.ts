"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Index rotation for the Pets vision list and device showcase.
 *
 * Advances every `dwellMs` while the container is on screen, pauses on hover
 * (pointer devices only), and stays put entirely under reduced motion.
 * Returns a ref for the container plus per-item handlers.
 */
export function useAutoRotate(count: number, dwellMs: number, threshold = 0.2) {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);
  const canHover = useRef(true);

  const stop = useCallback(() => {
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const play = useCallback(() => {
    if (window.matchMedia?.("(prefers-reduced-motion:reduce)").matches) return;
    stop();
    timer.current = window.setInterval(() => setActive((i) => (i + 1) % count), dwellMs);
  }, [count, dwellMs, stop]);

  useEffect(() => {
    canHover.current = window.matchMedia?.("(hover:hover)").matches ?? false;
    const node = containerRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      play();
      return stop;
    }
    // only rotate while the section is actually being looked at
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? play() : stop())),
      { threshold },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      stop();
    };
  }, [play, stop, threshold]);

  /** Spread onto each item so clicking selects it and hovering holds it. */
  const itemHandlers = useCallback(
    (index: number) => ({
      onClick: () => {
        setActive(index);
        play();
      },
      onMouseEnter: () => {
        if (!canHover.current) return;
        setActive(index);
        stop();
      },
      onMouseLeave: () => {
        if (canHover.current) play();
      },
    }),
    [play, stop],
  );

  return { active, containerRef, itemHandlers };
}
