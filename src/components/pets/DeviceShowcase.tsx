"use client";

import { useAutoRotate } from "@/hooks/useAutoRotate";

type Device = {
  /** Matches the `data-dev` hook that supplies the photo in pets.css. */
  key: string;
  name: string;
  desc: string;
  tags: string[];
};

const devices: Device[] = [
  {
    key: "collar",
    name: "Smart Communication Collar",
    desc: "Tracks health, vocalizations, hazards, and location with GPS and health metrics powered by AI.",
    tags: ["Vocalization analysis", "GPS tracking", "Hazard detection"],
  },
  {
    key: "feeder",
    name: "Smart Feeder",
    desc: "Portion control with camera monitoring, facial recognition, and food freshness tracking.",
    tags: ["Automated portions", "Pet recognition", "Freshness alerts"],
  },
  {
    key: "water",
    name: "Water Tracker",
    desc: "Monitors hydration levels with smart reminders and usage patterns for optimal pet health.",
    tags: ["Hydration tracking", "Smart alerts", "Pattern analysis"],
  },
  {
    key: "litter",
    name: "Smart Litter Box",
    desc: "Weight, motion, odor, and temperature sensors provide early health detection and automatic hygiene.",
    tags: ["Health alerts", "Auto-cleaning", "Behavior monitoring"],
  },
  {
    key: "calming",
    name: "Calming System",
    desc: "Smart noise-canceling and calming music that adapts to your pet’s stress levels.",
    tags: ["Adaptive audio", "Stress detection", "Anxiety reduction"],
  },
  {
    key: "robots",
    name: "Interactive Robots",
    desc: "Adaptive play sessions that keep pets active with cognitive stimulation and activity tracking.",
    tags: ["Custom play plans", "Mental stimulation", "Training tracking"],
  },
];

/** Auto-advance interval for the device showcase, in ms. */
const DWELL_MS = 7000;

/**
 * Two-thirds image stage plus a one-third accordion of product names. The
 * selected device's photo fills the stage and its detail expands in the list.
 */
export default function DeviceShowcase() {
  const { active, containerRef, itemHandlers } = useAutoRotate(devices.length, DWELL_MS);

  return (
    <div className="dev-show reveal" data-devshow ref={containerRef}>
      <div className="dev-show-inner wrap">
        <div className="dev-stage">
          <div className="dev-bgs">
            {devices.map((d, i) => (
              <div
                className={`dev-bg${i === active ? " on" : ""}`}
                data-i={i}
                data-dev={d.key}
                key={d.key}
                role="img"
                aria-label={d.name}
              />
            ))}
          </div>
          <div className="dev-stage-scrim" />
        </div>

        <div className="dev-side">
          <div className="dev-list" role="tablist">
            {devices.map((d, i) => (
              <button
                className={`dev-tab${i === active ? " on" : ""}`}
                type="button"
                role="tab"
                aria-selected={i === active}
                data-i={i}
                key={d.key}
                {...itemHandlers(i)}
              >
                <span className="dt-name">{d.name}</span>
                <span className="dt-detail">
                  <span className="desc">{d.desc}</span>
                  <span className="dtags">
                    {d.tags.map((t) => (
                      <span className="dtag" key={t}>
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
