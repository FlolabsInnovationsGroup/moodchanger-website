import type { Metadata } from "next";
import "@/styles/pets.css";
import FeatureCarousel, { type Feature } from "@/components/FeatureCarousel";
import VisionFeatures from "@/components/pets/VisionFeatures";
import DeviceShowcase from "@/components/pets/DeviceShowcase";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `Pets — ${site.name}`,
  description:
    "One app for the whole family: humans and animals. Track your pet’s health, emotions and activities with AI insights, smart collars, feeders and calming systems.",
  path: "/pets",
  socialDescription:
    "Smart AI pet health monitoring — notice anxiety, stress and behavior patterns your pet cannot tell you about.",
});

const ecosystem = [
  {
    title: "Emotional Monitoring",
    body: "AI detects stress, happiness, and relaxation through voice and behavior analysis for both pets and people.",
    path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    delay: "0",
  },
  {
    title: "Health Tracking",
    body: "Integrated data on activity, hydration, nutrition, and behavior creates a complete wellness picture.",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    delay: "70",
  },
  {
    title: "Smart Recommendations",
    body: "Personalized routines and insights for both owners and pets based on real-time patterns.",
    path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    delay: "140",
  },
  {
    title: "Cross-Species Connection",
    body: "Shared data strengthens the human-pet bond by revealing how you affect each other’s wellness.",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
    delay: "210",
  },
];

// photos are supplied by pets.css via `.feature-track .feature:nth-child(n)`
const world: Feature[] = [
  {
    num: "01",
    dotLabel: "Behavior Patterns",
    title: "Behavior Patterns",
    desc: "Track subtle changes in eating, sleeping, playfulness, and social behavior that indicate emotional state.",
    points: ["Energy level changes", "Appetite variations", "Social interaction patterns"],
    grain: true,
  },
  {
    num: "02",
    dotLabel: "Environmental Factors",
    title: "Environmental Factors",
    desc: "Understand how weather, household changes, schedules, and visitors affect your pet’s comfort.",
    points: ["Weather sensitivity", "Routine disruptions", "Household dynamics"],
    grain: true,
  },
  {
    num: "03",
    dotLabel: "Stress & Anxiety Detection",
    title: "Stress & Anxiety Detection",
    desc: "Identify early warning signs of stress before they become behavioral problems. Track triggers and recovery patterns.",
    points: [
      "Stress trigger identification",
      "Calming activity effectiveness",
      "Recovery time patterns",
    ],
    grain: true,
  },
  {
    num: "04",
    dotLabel: "Health Pattern Awareness",
    title: "Health Pattern Awareness",
    desc: "Notice behavioral changes that might indicate health issues. Share meaningful data with your vet.",
    points: ["Gradual behavior changes", "Vet-ready reports", "Timeline visualization"],
    grain: true,
  },
];

const family = [
  {
    src: "/assets/pets/family-dog.webp",
    alt: "Dog",
    title: "Dogs",
    body: "Separation anxiety, exercise needs, social behavior",
  },
  {
    src: "/assets/pets/family-cat.webp",
    alt: "Cat",
    title: "Cats",
    body: "Territory stress, hiding behavior, social preferences",
  },
];

const observations = [
  {
    n: "1",
    title: "Quick daily check-in",
    body: "Note your pet’s energy, appetite, social behavior, and any unusual signs (2 minutes)",
  },
  {
    n: "2",
    title: "Environmental context",
    body: "Track household changes, weather, visitors, schedule disruptions",
  },
  {
    n: "3",
    title: "Pattern recognition",
    body: "Your dog shows anxiety two days before thunderstorms; or “Your cat is most playful after morning sun”",
  },
  {
    n: "4",
    title: "Actionable insights",
    body: "Preventive care suggestions and early intervention strategies",
  },
];

export default function PetsPage() {
  return (
    <div className="page-pets">
      <main>
        {/* -------------------------------------------------------- HERO */}
        <section className="hero pets">
          <div className="hero-media">
            <video className="hero-video" autoPlay muted loop playsInline preload="auto">
              <source src="/assets/pets/hero-dog.mp4" type="video/mp4" />
            </video>
            <div className="grid-bg" />
          </div>
          <div className="hero-inner">
            <h1 className="reveal" data-delay="80">
              MoodChanger.ai for <span className="accent">Pets</span>
            </h1>
            <p className="kicker reveal" data-delay="160">
              Smart AI Pet Health Monitoring
            </p>
            <p className="lede reveal" data-delay="240">
              One app for the whole family: humans and animals. Track health, emotions, and
              activities together with personalized insights to improve overall well-being.
            </p>
            <a className="hero-cta reveal" data-delay="320" href={site.demoMailto}>
              Request a demo
            </a>
          </div>
          <div className="scrollcue">
            <span>Scroll</span>
            <span className="track" />
          </div>
        </section>

        {/* --------------------------------------------------- ECOSYSTEM */}
        <section className="band paper-2">
          <div className="wrap">
            <div className="statement">
              <div className="section-head">
                <h2 className="reveal" data-delay="60">
                  A Unified Ecosystem for Your Whole Family
                </h2>
              </div>
              <div className="statement-body">
                <p className="lead-line reveal" data-delay="100">
                  MoodChanger.ai brings together human and pet wellness in{" "}
                  <span className="mk">one intelligent platform</span>
                </p>
              </div>
            </div>
            <div className="eco-grid">
              {ecosystem.map((c) => (
                <article className="eco-card reveal" data-delay={c.delay} key={c.title}>
                  <span className="ic-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={c.path}
                      />
                    </svg>
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ VISION */}
        <VisionFeatures />

        {/* ------------------------------------------------- PET'S WORLD */}
        <section className="band dark" id="world">
          <div className="wrap">
            <div className="section-head center">
              <h2 className="reveal" data-delay="60">
                Understanding Your Pet’s World
              </h2>
            </div>
            <FeatureCarousel features={world} label="topic" />
          </div>
        </section>

        {/* ---------------------------------------------- FAMILY MEMBERS */}
        <section className="band paper-2">
          <div className="wrap">
            <div className="section-head center">
              <h2 className="reveal">For All Your Family Members</h2>
              <p className="sub reveal" data-delay="120">
                For now, MoodChanger.ai focuses on dogs and cats, with more companions to follow.
              </p>
            </div>
            <div className="family-card reveal" data-delay="120">
              {family.map((f) => (
                <div className="family-col" key={f.title}>
                  <span className="ic-circle photo">
                    {/* eslint-disable-next-line @next/next/no-img-element -- CSS crops each animal's face via object-position */}
                    <img src={f.src} alt={f.alt} loading="lazy" />
                  </span>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ PET DEVICES */}
        <section className="band dark devices-section">
          <div className="wrap">
            <div className="section-head center">
              <h2 className="reveal">FloLabs Smart Pet Devices</h2>
              <p className="sub reveal" data-delay="120">
                Seamless integration across devices with real-time data sharing and centralized
                control through one app.
              </p>
            </div>
          </div>
          <DeviceShowcase />
        </section>

        {/* ------------------------------------------- DAILY OBSERVATIONS */}
        <section className="band paper-2" id="observations">
          <div className="wrap">
            <div className="track-grid">
              <div className="track-aside">
                <span className="eyebrow reveal">How It Works for Pets</span>
                <h2
                  className="reveal"
                  data-delay="60"
                  style={{
                    fontSize: "clamp(1.9rem,3.6vw,3rem)",
                    fontWeight: 500,
                    letterSpacing: "-.03em",
                    marginTop: 14,
                  }}
                >
                  Simple Daily Observations
                </h2>
                <div className="meter reveal" data-delay="180">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="steps">
                {observations.map((s) => (
                  <div className="step" key={s.n}>
                    <div className="n">{s.n}</div>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------- CLOSING PRIVACY */}
        <section className="closing pets">
          <div className="closing-media" data-parallax="0.1">
            <video className="closing-video" muted loop playsInline preload="none">
              <source src="/assets/pets/privacy-cat.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="inner">
            <span className="closing-rule reveal" data-rev="fade" aria-hidden="true" />
            <span className="lock reveal" data-delay="40">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <h3 className="reveal" data-delay="60">
              Your Pet’s <span className="accent">Privacy Matters</span>
            </h3>
            <p className="reveal" data-delay="140">
              We believe your pet’s behavioral data is as private as your own. Your observations and
              insights stay with you.
            </p>
            <p className="privacy reveal" data-delay="200">
              Optional: Share relevant patterns with your veterinarian to support better care.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
