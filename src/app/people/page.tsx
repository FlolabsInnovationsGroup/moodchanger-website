import type { Metadata } from "next";
import ConditionsCarousel from "@/components/people/ConditionsCarousel";
import type { Feature } from "@/components/FeatureCarousel";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `People — ${site.name}`,
  description:
    "Your daily wellbeing is unique to you. MoodChanger.ai uses AI to understand your patterns, support your health conditions, and help you build a better quality of life.",
  path: "/people",
  socialDescription:
    "Personalized AI support for people managing allergies, stuttering, cognitive loss and everyday wellbeing.",
});

const conditions: Feature[] = [
  {
    num: "01",
    id: "allergies",
    dotLabel: "Allergies",
    title: "Allergies",
    desc: "MoodChanger.ai tracks environmental triggers, symptoms, and your body's reactions in real time, helping you predict, avoid, and manage allergy flare-ups before they disrupt your day.",
    points: [
      "Environmental trigger detection & alerts",
      "Symptom pattern recognition over time",
      "Personalized avoidance recommendations",
    ],
    image: {
      src: "/assets/people-allergies.webp",
      alt: "Child managing seasonal allergies",
    },
  },
  {
    num: "02",
    id: "stuttering",
    dotLabel: "Stuttering",
    title: "Stuttering",
    desc: "Using biofeedback and stress monitoring, MoodChanger.ai helps individuals who stutter identify emotional and physiological triggers, track progress, and build confidence through guided techniques.",
    points: [
      "Stress & anxiety trigger identification",
      "Breathing & relaxation technique guidance",
      "Speech confidence progress tracking",
    ],
    image: { src: "/assets/people-stuttering.webp", alt: "Speech therapy session" },
  },
  {
    num: "03",
    id: "cognitive",
    dotLabel: "Cognitive Loss",
    title: "Cognitive Loss",
    desc: "MoodChanger.ai monitors cognitive patterns, sleep quality, and daily engagement to detect early signs of decline, support caregivers, and help individuals maintain independence and mental sharpness longer.",
    points: [
      "Early cognitive decline pattern detection",
      "Sleep quality & brain health correlation",
      "Caregiver insights & daily activity monitoring",
    ],
    image: { src: "/assets/people-cognitive.webp", alt: "Senior doing a cognitive exercise" },
  },
];

const steps = [
  {
    n: "1",
    title: "Daily health check-in",
    body: "Log your mood, energy, symptoms, and sleep every day. The more consistent you are, the smarter MoodChanger.ai gets.",
  },
  {
    n: "2",
    title: "Pattern recognition",
    body: "AI identifies patterns between your habits, environment, and symptoms, revealing what helps and what hurts.",
  },
  {
    n: "3",
    title: "Personalized insights",
    body: "Receive clear, actionable insights based on your own data, not generic advice, but guidance tailored to your unique biology.",
  },
  {
    n: "4",
    title: "Continuous improvement",
    body: "Track your progress over weeks and months, celebrate wins, and refine your routine based on what works for your body and mind.",
  },
];

export default function PeoplePage() {
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
            poster="/assets/feature-2.webp"
          >
            <source src="/assets/people-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-inner">
          <h1 className="reveal" data-delay="80">
            MoodChanger.ai for <span className="accent">People</span>
          </h1>
          <p className="lede reveal" data-delay="200">
            Your daily wellbeing is unique to you. MoodChanger.ai uses AI to understand your
            patterns, support your health conditions, and help you build a better quality of life,
            one insight at a time.
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
                AI-Powered Personal Wellbeing
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
                continuously learns from your body signals, habits, and environment to deliver{" "}
                <span className="mk">personalized AI-driven health insights</span> that fit your real
                daily life, not a one-size-fits-all plan.
              </p>
              <div className="signal reveal" data-delay="160">
                <span className="pulse" />
                <span>
                  Real-time biometrics + behavioral patterns <span className="ar">=</span>{" "}
                  <span className="ans">
                    smarter daily decisions and better long-term health outcomes
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- CONDITIONS */}
      {/* scroll-margin clears the fixed header when deep-linking a condition */}
      <section className="band dark" id="excellence" style={{ scrollMarginTop: 64 }}>
        <div className="wrap">
          <div className="section-head center">
            <h2 className="reveal" data-delay="60">
              Tailored Support for Every Condition
            </h2>
            <p className="sub reveal" data-delay="120">
              MoodChanger.ai brings personalized AI support to people managing chronic and everyday
              health challenges, putting clarity and control back in your hands.
            </p>
          </div>

          <ConditionsCarousel features={conditions} />
        </div>
      </section>

      {/* ----------------------------------------------------- TRACKING */}
      <section className="band paper-2">
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
                Your Personal Health Journey
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
                MoodChanger.ai turns daily check-ins into a clear picture of your health, helping
                you make better decisions every single day.
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
            poster="/assets/people-allergies.webp"
          >
            <source src="/assets/people-closing.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="inner">
          <span className="closing-rule reveal" data-rev="fade" aria-hidden="true" />
          <h3 className="reveal" data-delay="60">
            Every Person, <span className="accent">Every Need</span>
          </h3>
          <p className="reveal" data-delay="140">
            From managing chronic conditions to optimizing everyday wellbeing, MoodChanger.ai
            supports people of all ages and health backgrounds.
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
