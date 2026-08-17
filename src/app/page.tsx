import type { Metadata } from "next";
import "@/styles/home.css";
import HowItWorks from "@/components/home/HowItWorks";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

// the home page keeps the bare brand name, as in the original <title>
export const metadata: Metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/",
  socialDescription:
    "All your AI in one app, powered by FloBrain, to boost productivity, wellness, and lifestyle.",
});

const challenges = [
  {
    title: "Lack of Motivation",
    body: "Trouble keeping consistent exercise, sleep, and nutrition routines.",
    path: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
  },
  {
    title: "Generic Advice",
    body: "One-size-fits-all recommendations that don’t fit your unique body and emotions.",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "No Continuous Support",
    body: "Health needs are ongoing and sometimes require support outside appointments.",
    path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Disconnected Data",
    body: "Health data spread across different devices with no unified view.",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Functional Imbalance",
    body: "Lack of body and mind awareness leads to misaligned solutions.",
    path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Poor Performance Outcomes",
    body: "Reduced quality of life caused by poor planning and decision-making.",
    path: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
];

const solutions = [
  {
    title: "24/7 AI Support",
    body: "Virtual coach and companion available anytime, acting as your personal wellness assistant.",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
    delay: undefined,
  },
  {
    title: "Personalized Insights",
    body: "Real-time and historical data from wearables create recommendations tailored just for you.",
    inputs: "Sleep, activity, heart rate, mood check-ins",
    path: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    delay: "80",
  },
  {
    title: "Proactive Nudges",
    body: "Smart reminders about goals, habit tracking, and milestone celebrations keep you motivated.",
    inputs: "Changes in sleep, activity, or mood patterns",
    path: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    delay: "160",
  },
  {
    title: "Unified Platforms",
    body: "All your smart devices work together seamlessly all in one view.",
    path: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    delay: undefined,
  },
  {
    title: "Stress Management",
    body: "Neurofeedback and relaxation techniques help you improve productivity and wellbeing.",
    inputs: "Heart rate patterns and self-reported stress",
    path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    delay: "80",
  },
  {
    title: "Proactive Wellness Support",
    body: "Lifestyle tracking and actionable guidance support healthier decisions over time.",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    delay: "160",
  },
];

const Glyph = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="page-home">
      <main>
        {/* -------------------------------------------------------- HERO */}
        <section className="home-hero">
          <div className="glow" />
          <div className="grid-bg" />
          <div className="inner">
            <h1 className="head-accent">{site.tagline}</h1>
            <p className="sub">
              <span className="strong">All your AI in one app.</span>
              <br />
              Powered by <span className="caipo">FloBrain</span>,<br />
              to boost productivity, wellness, and lifestyle.
            </p>
            <a className="hero-cta" href={site.demoMailto}>
              Request a demo
            </a>
            <div className="hero-cue" aria-hidden="true">
              <span className="txt">Scroll</span>
              <span className="ln" />
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- CHALLENGE */}
        <section className="band dark" id="challenge">
          <div className="wrap">
            <div className="challenge">
              <div className="challenge-aside">
                <h2
                  className="reveal"
                  style={{
                    fontSize: "clamp(2rem,4.4vw,3.6rem)",
                    fontWeight: 500,
                    letterSpacing: "-.03em",
                  }}
                >
                  The Challenge
                </h2>
                <p className="sub reveal" data-delay="120">
                  Managing your health and wellness can be simpler with the right support.
                </p>
              </div>

              <div className="challenge-list">
                {challenges.map((c) => (
                  <article className="ch-item reveal" key={c.title}>
                    <span className="ic">
                      <Glyph d={c.path} />
                    </span>
                    <div>
                      <h3>{c.title}</h3>
                      <p>{c.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- SOLUTION */}
        <section className="band dark" id="solution">
          <div className="wrap">
            <div className="section-head center">
              <h2 className="reveal">
                The MoodChanger.ai{" "}
                <span style={{ color: "var(--yellow-txt)", fontWeight: 800 }}>Solution</span>
              </h2>
              <p className="sub reveal" data-delay="120">
                <span style={{ color: "var(--caipo)", fontWeight: 600 }}>CAIPO</span> and
                MoodChanger.ai work together to provide intelligent, personalized support.
              </p>
            </div>

            <div className="solution-grid">
              {solutions.map((s) => (
                <article className="sol reveal" data-delay={s.delay} key={s.title}>
                  <span className="ic">
                    <Glyph d={s.path} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  {s.inputs && <p className="sol-inputs">{s.inputs}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ HOW IT WORKS */}
        <section className="band dark" id="how">
          <div className="wrap">
            <div className="section-head center">
              <h2 className="reveal">How MoodChanger.ai Works</h2>
            </div>
            <HowItWorks />
          </div>
        </section>
      </main>
    </div>
  );
}
