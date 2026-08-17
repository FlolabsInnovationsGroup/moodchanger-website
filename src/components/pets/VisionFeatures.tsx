"use client";

import { useAutoRotate } from "@/hooks/useAutoRotate";

type VisionItem = { title: string; body: string };

const items: VisionItem[] = [
  {
    title: "Understanding Pet Behavior",
    body: "AI detects early health and emotional issues before they become serious.",
  },
  {
    title: "Integrated Pet Care",
    body: "Smart devices work together in one unified system.",
  },
  {
    title: "Tailored AI Insights",
    body: "Real-time data creates personalized recommendations for your pet.",
  },
  {
    title: "Connected Thriving",
    body: "Humans and pets benefit from shared wellness technology.",
  },
];

/** Auto-advance interval for the vision list, in ms. */
const DWELL_MS = 6000;

/**
 * Vertical feature list where the active item expands its description and swaps
 * the photo beside it. Auto-advances while on screen; hovering holds an item.
 */
export default function VisionFeatures() {
  const { active, containerRef, itemHandlers } = useAutoRotate(items.length, DWELL_MS, 0.25);

  return (
    <section className="band paper-2 vision-feature">
      <div className="wrap" ref={containerRef}>
        <h2 className="vision-title reveal">Our Vision for Pet Wellness</h2>
        <div className="vision-layout">
          <div className="vision-list" data-visionlist>
            {items.map((item, i) => (
              <button
                className={`vfeat${i === active ? " on" : ""}`}
                type="button"
                data-i={i}
                key={item.title}
                {...itemHandlers(i)}
              >
                <span className="vbar" />
                <span className="vtext">
                  <span className="vh">{item.title}</span>
                  <span className="vp">{item.body}</span>
                </span>
              </button>
            ))}
          </div>

          {/* photos are supplied by pets.css, keyed off data-i */}
          <div className="vision-media reveal">
            {items.map((item, i) => (
              <div
                className={`vision-img${i === active ? " on" : ""}`}
                data-i={i}
                key={item.title}
                role="img"
                aria-label={item.title}
              >
                <div className="vglow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
