"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/icons";

type Panel = {
  key: string;
  label: string;
  blurb: string;
  href: string;
  video: string;
  poster: string;
};

const panels: Panel[] = [
  {
    key: "people",
    label: "For People",
    blurb: "Understand your routines to have personalized insights and guidance.",
    href: "/people",
    video: "/assets/people-hero.mp4",
    poster: "/assets/feature-2.webp",
  },
  {
    key: "athletes",
    label: "For Athletes",
    blurb:
      "Train your mind as precisely as your body. Pre-performance routines and recovery insights.",
    href: "/athletes",
    video: "/assets/hero.mp4",
    poster: "/assets/feature-1.webp",
  },
  {
    key: "pets",
    label: "For Pets",
    blurb:
      "Notice anxiety, stress, and negative behavior patterns that your pet cannot tell you about.",
    href: "/pets",
    video: "/assets/pets/hero-dog.mp4",
    poster: "/assets/pets/dev-collar.webp",
  },
];

/**
 * Tabbed video stage. Each clip stays `preload="none"` until its panel is
 * selected (and the initially-active one until the module nears the viewport),
 * so the home page never downloads three videos up front.
 */
export default function HowItWorks() {
  const [active, setActive] = useState(panels[0].key);
  const screen = useRef<HTMLDivElement>(null);
  const videos = useRef(new Map<string, HTMLVideoElement>());

  const play = (key: string) => {
    const v = videos.current.get(key);
    if (!v) return;
    v.muted = true;
    v.play()?.catch(() => {
      /* autoplay may be blocked until the user interacts */
    });
  };

  // Load the initially-active panel's video only when the module scrolls near.
  useEffect(() => {
    const node = screen.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      play(panels[0].key);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        play(panels[0].key);
        io.disconnect();
      },
      { rootMargin: "500px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const select = (key: string) => {
    setActive(key);
    play(key);
  };

  return (
    <div className="how-stage reveal" data-delay="80">
      <div className="how-screen" ref={screen}>
        {panels.map((p) => (
          <div
            className={`how-panel${p.key === active ? " active" : ""}`}
            data-panel={p.key}
            key={p.key}
          >
            <video
              className="how-video"
              muted
              loop
              playsInline
              preload="none"
              poster={p.poster}
              ref={(el) => {
                if (el) videos.current.set(p.key, el);
                else videos.current.delete(p.key);
              }}
            >
              <source src={p.video} type="video/mp4" />
            </video>
            <span className="tag">
              <span className="dot" />
              {p.label}
            </span>
          </div>
        ))}
      </div>

      <div className="how-tabs">
        {panels.map((p) => (
          <div
            className={`how-tab${p.key === active ? " active" : ""}`}
            data-tab={p.key}
            key={p.key}
            onClick={(e) => {
              // let the Explore link navigate instead of just switching tabs
              if ((e.target as HTMLElement).closest(".explore")) return;
              select(p.key);
            }}
          >
            <h3>{p.label}</h3>
            <p>{p.blurb}</p>
            <Link className="explore" href={p.href}>
              Explore
              <ArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
