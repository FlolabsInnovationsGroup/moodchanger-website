"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Rich from "@/components/Rich";
import Footer from "@/components/site/Footer";
import { SHOWCASE_HOME_EVENT } from "@/components/site/Header";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import type { ShowcaseItem } from "@/lib/showcase-types";

/** Autoplay interval for the full-screen carousel, in ms. */
const SLIDE_MS = 5200;

/**
 * Full-screen product showcase with a focused detail overlay, shared by
 * /wearables and /smart-devices. Ported from wearables.js.
 *
 * The showcase auto-advances until the pointer is over it or the detail view is
 * open. Clicking a slide — or following a `#product-id` link from the header —
 * opens that product's detail panel and reflects it in the URL hash.
 */
export default function Showcase({
  items,
  heading,
  noun,
  nounPlural,
  ariaLabel,
  detailLabel,
}: {
  items: ShowcaseItem[];
  /** Page-level H1, visually hidden — slide titles stay as H2. */
  heading: string;
  /** e.g. "wearable" — used in control labels. */
  noun: string;
  /** e.g. "All wearables" — the detail view's back button. */
  nounPlural: string;
  ariaLabel: string;
  detailLabel: string;
}) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const paused = useRef(false);
  const detail = useRef<HTMLDivElement>(null);

  const ids = items.map((i) => i.id);

  /* ---------------------------------------------------------- showcase */
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion:reduce)").matches) return;
    if (open) return;
    let start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      if (paused.current) start = now;
      else if (now - start >= SLIDE_MS) {
        start = now;
        setIndex((i) => (i + 1) % count);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [count, open, index]);

  /* ------------------------------------------------------------ detail */
  const openDetail = useCallback(
    (idx: number) => {
      const next = ((idx % count) + count) % count;
      setDetailIndex(next);
      setOpen(true);
      history.replaceState(null, "", `#${ids[next]}`);
    },
    // `ids` is derived from a static module, so its identity churn is irrelevant
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count],
  );

  const closeDetail = useCallback(() => {
    setOpen(false);
    setIndex(detailIndex); // sync the showcase back to where the visitor was
    history.replaceState(null, "", location.pathname + location.search);
  }, [detailIndex]);

  const stepDetail = useCallback(
    (dir: number) => {
      setDetailIndex((current) => {
        const next = ((current + dir) % count + count) % count;
        history.replaceState(null, "", `#${ids[next]}`);
        return next;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count],
  );

  // lock the page behind the overlay and reset its scroll on each product
  useEffect(() => {
    document.body.classList.toggle("detail-open", open);
    return () => document.body.classList.remove("detail-open");
  }, [open]);

  useEffect(() => {
    if (detail.current) detail.current.scrollTop = 0;
  }, [detailIndex, open]);

  /* --------------------------------------------------------- deep links */
  useEffect(() => {
    const fromHash = () => {
      const id = location.hash.replace("#", "");
      const k = ids.indexOf(id);
      if (k !== -1) openDetail(k);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDetail]);

  // header submenu links are in-page anchors while on this route
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']");
      const id = a?.getAttribute("href")?.slice(1);
      if (!id) return;
      const k = ids.indexOf(id);
      if (k === -1) return;
      e.preventDefault();
      openDetail(k);
      document.body.classList.remove("nav-open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDetail]);

  // pressing the header trigger for this section returns to the showcase
  useEffect(() => {
    const onHome = () => {
      const reduce = window.matchMedia?.("(prefers-reduced-motion:reduce)").matches;
      setOpen(false);
      history.replaceState(null, "", location.pathname + location.search);
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    };
    window.addEventListener(SHOWCASE_HOME_EVENT, onHome);
    return () => window.removeEventListener(SHOWCASE_HOME_EVENT, onHome);
  }, []);

  /* ---------------------------------------------------------- keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open) {
        if (e.key === "Escape") closeDetail();
        else if (e.key === "ArrowRight") stepDetail(1);
        else if (e.key === "ArrowLeft") stepDetail(-1);
      } else {
        if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
        else if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeDetail, stepDetail, count]);

  const current = items[detailIndex];

  return (
    <>
      <main>
        <section
          className="showcase"
          aria-label={ariaLabel}
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          // freeze autoplay the instant a press begins, so the slide cannot
          // change between pointerdown and click and open the wrong product
          onPointerDown={() => (paused.current = true)}
        >
          <h1 className="sr-only">{heading}</h1>
          <div className="show-track">
            {items.map((item, i) => (
              <div
                className={`show-slide${i === index ? " active" : ""}`}
                data-w={item.id}
                key={item.id}
              >
                <div
                  className="shot"
                  style={
                    item.shot
                      ? { background: `#08141c url(${item.shot}) center/cover no-repeat` }
                      : undefined
                  }
                  onClick={() => openDetail(index)}
                />
                <div className="scrim" />
                <div className="show-content" onClick={() => openDetail(index)}>
                  <h2 className="show-name">{item.name}</h2>
                  <Rich className="show-intro" html={item.intro} />
                  <span className="show-cta">
                    View details
                    <ArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="show-controls">
            <button
              className="sbtn prev"
              type="button"
              aria-label={`Previous ${noun}`}
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
            >
              <ArrowLeft />
            </button>
            <button
              className="sbtn next"
              type="button"
              aria-label={`Next ${noun}`}
              onClick={() => setIndex((i) => (i + 1) % count)}
            >
              <ArrowRight />
            </button>
          </div>

          <div className="show-dots">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.name}
                className={i === index ? "on" : undefined}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="show-strip">
            <div className="fill" />
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------- DETAIL
          A fixed, scrollable overlay. It carries its own copy of the footer
          because the visitor scrolls inside it, not the page behind it. */}
      <div
        className={`detail${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={detailLabel}
        aria-hidden={!open}
        ref={detail}
      >
        <div className="detail-bar">
          <div className="row">
            <button className="detail-close" type="button" onClick={closeDetail}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {nounPlural}
            </button>
            <div className="detail-where">
              <span className="nm">{current.detail.name}</span>
            </div>
            <div className="detail-arrows">
              <button
                className="dbtn prev"
                type="button"
                aria-label={`Previous ${noun}`}
                onClick={() => stepDetail(-1)}
              >
                <ArrowLeft />
              </button>
              <button
                className="dbtn next"
                type="button"
                aria-label={`Next ${noun}`}
                onClick={() => stepDetail(1)}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="detail-stage">
          {items.map((item, i) => (
            <article
              className={`detail-panel${i === detailIndex ? " active" : ""}`}
              data-w={item.id}
              key={item.id}
            >
              <div className="dp-hero">
                <div
                  className="shot"
                  style={
                    item.shot
                      ? { background: `#08141c url(${item.shot}) center/cover no-repeat` }
                      : undefined
                  }
                />
                <div className="scrim" />
                <div className="dp-headtext">
                  <h2 className="dp-title">{item.detail.title}</h2>
                  <Rich className="dp-intro" html={item.detail.intro} />
                </div>
              </div>

              <div className="dp-body">
                <div className="wear-mc">
                  <div className="wear-mc-inner">
                    <Rich as="h3" className="wear-mc-title" html={item.detail.mcTitle} />
                    <Rich className="wear-mc-body" html={item.detail.mcBody} />
                    {item.detail.tagline && (
                      <Rich className="wear-tagline" html={item.detail.tagline} />
                    )}
                  </div>
                </div>

                <div className="wear-block">
                  <div className="block-head">
                    <span className="eyebrow">Core Capabilities</span>
                    <span className="ln" />
                  </div>
                  <div className="cap-grid">
                    {item.capabilities.map((c) => (
                      <article className="cap" key={c.title}>
                        <span className="cap-mark">
                          <StrokeIcon markup={c.icon} />
                        </span>
                        <h4>{c.title}</h4>
                        <p>{c.body}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="wear-block">
                  <div className="block-head">
                    <span className="eyebrow">Features and Applications</span>
                    <span className="ln" />
                  </div>
                  <div className="app-grid">
                    {item.applications.map((a) => (
                      <article className="app" key={a.title}>
                        <span className="app-ic">
                          <StrokeIcon markup={a.icon} />
                        </span>
                        <div className="app-txt">
                          <h4>{a.title}</h4>
                          <p>{a.body}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}

/** 24×24 stroke icon whose inner markup comes from the showcase data. */
function StrokeIcon({ markup }: { markup: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
