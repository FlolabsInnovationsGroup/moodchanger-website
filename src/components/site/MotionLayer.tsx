"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion:reduce)").matches;

function playVideo(v: HTMLVideoElement | null) {
  if (!v) return;
  v.muted = true;
  v.play()?.catch(() => {
    /* autoplay blocked until the first interaction — kicked again below */
  });
}

/**
 * The site-wide motion layer, ported from `athletes.js`.
 *
 * Everything here is presentational and DOM-driven (scroll reveals, parallax,
 * video autoplay), so it stays a single effect that re-scans on navigation
 * rather than being threaded through every component as props.
 */
export default function MotionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = prefersReducedMotion();
    const cleanups: Array<() => void> = [];

    /* ---------- Scroll reveals ----------
       Rect-based + rAF (not IntersectionObserver) so content can never be left
       hidden if an observer misfires during hydration. */
    {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal, .rule, .step"),
      );
      const done = new Set<HTMLElement>();

      const show = (el: HTMLElement) => {
        if (done.has(el)) return;
        done.add(el);
        const delay = reduce ? 0 : parseFloat(el.dataset.delay || "0");
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("in");
      };

      if (reduce) {
        els.forEach(show);
      } else if (els.length) {
        const check = () => {
          const vh = window.innerHeight || document.documentElement.clientHeight;
          for (const el of els) {
            if (done.has(el)) continue;
            const r = el.getBoundingClientRect();
            if (r.top < vh * 0.86 && r.bottom > 0) show(el);
          }
        };
        check();
        window.addEventListener("scroll", check, { passive: true });
        window.addEventListener("resize", check, { passive: true });
        cleanups.push(() => {
          window.removeEventListener("scroll", check);
          window.removeEventListener("resize", check);
        });

        // keep checking for a few seconds so late layout shifts still reveal
        let frames = 0;
        let raf = 0;
        const loop = () => {
          check();
          if (done.size < els.length && frames++ < 240) raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        cleanups.push(() => cancelAnimationFrame(raf));
      }
    }

    /* ---------- Parallax ---------- */
    if (!reduce) {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      if (nodes.length) {
        let ticking = false;
        const apply = () => {
          const vh = window.innerHeight;
          for (const n of nodes) {
            const r = n.getBoundingClientRect();
            const rel = (r.top + r.height / 2 - vh / 2) / vh;
            const speed = parseFloat(n.dataset.parallax || "0.12");
            n.style.transform = `translate3d(0,${(rel * speed * 100).toFixed(2)}px,0)`;
          }
          ticking = false;
        };
        const onScroll = () => {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(apply);
        };
        apply();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        });
      }
    }

    /* ---------- Video: eager hero, lazy below-the-fold ---------- */
    {
      const heroes = Array.from(document.querySelectorAll<HTMLVideoElement>(".hero-video"));
      heroes.forEach((v) => {
        playVideo(v);
        v.addEventListener("canplay", () => playVideo(v), { once: true });
      });
      if (heroes.length) {
        const kick = () => heroes.forEach(playVideo);
        document.addEventListener("click", kick, { once: true });
        document.addEventListener("touchstart", kick, { once: true });
        cleanups.push(() => {
          document.removeEventListener("click", kick);
          document.removeEventListener("touchstart", kick);
        });
      }

      // `preload="none"` in markup means these download nothing until near view
      const lazies = Array.from(document.querySelectorAll<HTMLVideoElement>(".closing-video"));
      if (lazies.length && "IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) =>
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              playVideo(e.target as HTMLVideoElement);
              io.unobserve(e.target);
            }),
          { rootMargin: "500px 0px" },
        );
        lazies.forEach((v) => io.observe(v));
        cleanups.push(() => io.disconnect());
      } else {
        lazies.forEach(playVideo);
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
