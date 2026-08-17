import type { Metadata } from "next";
import FeatureCarousel, { type Feature } from "@/components/FeatureCarousel";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `Athletes — ${site.name}`,
  description:
    "Train your mind as precisely as your body. MoodChanger.ai helps athletes track readiness, build resilience, recover smarter, and stay focused with real-time insights.",
  path: "/athletes",
  socialDescription:
    "Track readiness, build resilience, recover smarter and stay focused with real-time insights across individual and team sports.",
});

const features: Feature[] = [
  {
    num: "01",
    title: "Pre-Performance Preparation",
    desc: "Build a sustainable routine that prepares your mind and body before every session, so you start focused, steady, and ready to perform.",
    points: [
      "Pre-session routine tracking",
      "Mental and physical readiness check-ins",
      "Confidence and consistency trends",
    ],
    image: { src: "/assets/feature-1.webp", alt: "Athlete preparing to lift" },
  },
  {
    num: "02",
    title: "Recovery and Training Load",
    desc: "Balance effort and recovery with clearer insights into your levels of fatigue, workload, and your capacity to train without losing momentum.",
    points: [
      "Sleep and recovery correlation",
      "Training load and fatigue patterns",
      "Recovery optimization guidance",
    ],
    image: { src: "/assets/feature-2.webp", alt: "Athlete resting and recovering" },
  },
  {
    num: "03",
    title: "Performance Readiness",
    desc: "Understand how pressure, environment, and mindset affect decisions and execution, so you can stay composed when performance matters most.",
    points: [
      "Pressure response patterns",
      "Environmental performance factors",
      "Focus and resilience strategies",
    ],
    image: { src: "/assets/feature-3.webp", alt: "Athlete supported under pressure" },
  },
  {
    num: "04",
    title: "Coordinated Performance",
    desc: "Strengthen your individual impact while improving team coordination through clearer communication and leadership awareness, built on shared performance patterns.",
    points: ["Leadership moments", "Communication patterns", "Team coordination signals"],
    image: { src: "/assets/feature-4.webp", alt: "Team celebrating together" },
  },
];

const steps = [
  {
    n: "1",
    title: "Pre-performance check-in",
    body: "Check in before every session. Log confidence, energy, focus, and readiness so you step in prepared to perform.",
  },
  {
    n: "2",
    title: "Performance correlation",
    body: "See how your mental state impacts your results, and identify the conditions that lead to stronger performance.",
  },
  {
    n: "3",
    title: "Analyze your performance patterns",
    body: "Uncover the habits behind your best days, like quality sleep, routines, and repeat what works.",
  },
  {
    n: "4",
    title: "Optimization recommendations",
    body: "Get personalized training guidance based on your patterns to train smarter, recover faster, and compete with confidence.",
  },
];

export default function AthletesPage() {
  return (
    <main>
      {/* ---------------------------------------------------------- HERO */}
      <section className="hero">
        <div className="hero-media" data-parallax="0.16">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/feature-1.webp"
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-inner">
          <h1 className="reveal" data-delay="80">
            MoodChanger.ai for <span className="accent">Athletes</span>
          </h1>
          <p className="lede reveal" data-delay="200">
            Performance depends on both mind and body. MoodChanger.ai helps athletes track
            readiness, build resilience, recover smarter, and stay focused with real-time insights.
          </p>
          <a className="hero-cta reveal" data-delay="280" href={site.demoMailto}>
            Request a demo
          </a>
        </div>

        <div className="scrollcue">
          <span>Scroll</span>
          <span className="track" />
        </div>
      </section>

      {/* ---------------------------------------------------- STATEMENT */}
      <section className="band paper" id="performance">
        <div className="wrap">
          <div className="statement">
            <div className="section-head">
              <h2 className="reveal" data-delay="60">
                AI-Powered Athletic Performance
              </h2>
            </div>

            <div className="statement-body">
              <p className="lead-line reveal" data-delay="80">
                <a
                  className="caipo caipo-link"
                  href="https://www.caipo.ai/"
                  target="_blank"
                  rel="noopener"
                >
                  CAIPO
                </a>{" "}
                combines pre-, in-, and post-session signals to monitor workload, fatigue, recovery,
                and readiness, then turns that data into{" "}
                <span className="mk">AI-powered actionable insights</span> for smarter training and
                more consistent performance.
              </p>
              <div className="signal reveal" data-delay="160">
                <span className="pulse" />
                <span>
                  Real-time biometrics + AI-powered actionable insights <span className="ar">=</span>{" "}
                  <span className="ans">stronger readiness, recovery, and performance</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- FEATURES */}
      <section className="band dark" id="excellence">
        <div className="wrap">
          <div className="section-head center">
            <h2 className="reveal" data-delay="60">
              Built for Athletic Excellence
            </h2>
            <p className="sub reveal" data-delay="120">
              Train smarter, recover faster, and compete with confidence. MoodChanger.ai helps you
              turn daily data into winning habits for both mind and body.
            </p>
          </div>

          <FeatureCarousel features={features} />
        </div>
      </section>

      {/* ----------------------------------------------------- TRACKING */}
      <section className="band paper-2" id="tracking">
        <div className="wrap">
          <div className="track-grid">
            <div className="track-aside">
              <h2
                className="reveal"
                data-delay="60"
                style={{
                  fontSize: "clamp(2rem,4.6vw,3.9rem)",
                  fontWeight: 500,
                  letterSpacing: "-.03em",
                }}
              >
                Athletic Performance Tracking
              </h2>
              <p
                className="reveal"
                data-delay="120"
                style={{
                  marginTop: 22,
                  color: "var(--muted-l)",
                  fontSize: "1.12rem",
                  lineHeight: 1.6,
                }}
              >
                Turn daily check-ins into a competitive edge. Track your mindset, connect it to
                results, and get clear actions to improve every session.
              </p>
              <div className="meter reveal" data-delay="180">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="steps">
              {steps.map((s) => (
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

      {/* ------------------------------------------------------ CLOSING */}
      <section className="closing">
        <div className="closing-media" data-parallax="0.1">
          <video
            className="closing-video"
            muted
            loop
            playsInline
            preload="none"
            poster="/assets/feature-4.webp"
          >
            <source src="/assets/closing.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="inner">
          <span className="closing-rule reveal" data-rev="fade" aria-hidden="true" />
          <h3 className="reveal" data-delay="60">
            All Sports, <span className="accent">All Levels</span>
          </h3>
          <p className="reveal" data-delay="140">
            From first training sessions to elite competition, MoodChanger.ai supports your journey
            across individual and team sports.
          </p>
          <p className="privacy reveal" data-delay="200">
            <span className="lock">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" strokeLinecap="round" />
              </svg>
            </span>
            Your data stays private and is only shared with your permission.
          </p>
        </div>
      </section>
    </main>
  );
}
