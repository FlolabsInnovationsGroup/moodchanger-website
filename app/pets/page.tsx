import Link from "next/link";
import PageLayout from "../components/PageLayout";

export default function PetsPage() {
  const canvaEmbed =
    "https://www.canva.com/design/DAGYja1TUd4/0uXWmOksp8B2tV22841r9g/view?embed";

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
            MoodChanger for Pets
          </h1>
          <p className="mb-4 text-xl font-semibold text-[#FDE035] lg:text-2xl">
            Smart AI Pet Health Monitoring
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            One app for the whole family—humans and animals. Track health, emotions, and activities together with personalized insights to improve overall well-being.
          </p>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="group relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-[#FDE035]/30 hover:shadow-[#FDE035]/20">
            <div className="relative w-full overflow-hidden rounded-2xl pt-[45%]">
              <iframe
                src={canvaEmbed}
                className="absolute left-0 top-0 h-full w-full border-0 z-0"
                allowFullScreen
                title="MoodChanger for Pets Presentation"
              />
            </div>
            
            {/* Presentation overlay controls */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#FDE035] animate-pulse" />
                <span className="text-sm font-medium text-white/90">Pets Presentation</span>
              </div>
              <a
                href={canvaEmbed}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 rounded-full bg-[#FDE035]/20 px-4 py-2.5 text-sm font-medium text-[#0d2430] transition-all duration-300 hover:bg-[#FDE035]/30 hover:scale-105"
              >
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Open presentation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Ecosystem Section */}
      <section className="py-16 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-transparent">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-3xl font-bold text-center text-white lg:text-4xl">
            A Unified Ecosystem for Your Whole Family
          </h2>
          <p className="mb-12 text-center text-white/70 max-w-3xl mx-auto text-lg">
            MoodChanger brings together human and pet wellness in one intelligent platform
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Emotional Monitoring</h3>
              <p className="text-white/70 text-sm">AI detects stress, happiness, and relaxation through voice and behavior analysis for both pets and people</p>
            </div>

            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Health Tracking</h3>
              <p className="text-white/70 text-sm">Integrated data on activity, hydration, nutrition, and behavior creates a complete wellness picture</p>
            </div>

            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Smart Recommendations</h3>
              <p className="text-white/70 text-sm">Personalized routines and insights for both owners and pets based on real-time patterns</p>
            </div>

            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Cross-Species Connection</h3>
              <p className="text-white/70 text-sm">Shared data strengthens the human-pet bond by revealing how you affect each other&rsquo;s wellness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          {/* Description */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              Our Vision for Pet Wellness
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Understanding Pet Behavior</h3>
                    <p className="text-white/70">AI detects early health and emotional issues before they become serious</p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Integrated Pet Care</h3>
                    <p className="text-white/70">Smart devices work together in one unified system</p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Tailored AI Insights</h3>
                    <p className="text-white/70">Real-time data creates personalized recommendations for your pet</p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Connected Thriving</h3>
                    <p className="text-white/70">Humans and pets benefit from shared wellness technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold text-white text-center">
              Understanding Your Pet&rsquo;s World
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Behavior Tracking */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Behavior Patterns</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Track subtle changes in eating, sleeping, playfulness, and social behavior that indicate emotional state.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Energy level changes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Appetite variations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Social interaction patterns</span>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Environmental Factors</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Understand how weather, household changes, schedules, and visitors affect your pet&rsquo;s comfort.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Weather sensitivity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Routine disruptions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Household dynamics</span>
                  </div>
                </div>
              </div>

              {/* Stress & Anxiety */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Stress & Anxiety Detection</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Identify early warning signs of stress before they become behavioral problems. Track triggers and recovery patterns.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Stress trigger identification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Calming activity effectiveness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Recovery time patterns</span>
                  </div>
                </div>
              </div>

              {/* Health Insights */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.636 4.636a9 9 0 1212.728 0M12 7v5l3 3" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Health Pattern Awareness</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Notice behavioral changes that might indicate health issues. Share meaningful data with your vet.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Gradual behavior changes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Vet-ready reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Timeline visualization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pet Types */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold text-white text-center">
              For All Your Family Members
            </h3>
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FDE035]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#FDE035]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.5 12a7.5 7.5 0 0015 0A7.5 7.5 0 004.5 12z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Dogs</h4>
                  <p className="text-white/60 text-sm">Separation anxiety, exercise needs, social behavior</p>
                </div>
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FDE035]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#FDE035]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Cats</h4>
                  <p className="text-white/60 text-sm">Territory stress, hiding behavior, social preferences</p>
                </div>
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FDE035]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#FDE035]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Other Pets</h4>
                  <p className="text-white/60 text-sm">Birds, rabbits, reptiles—any companion animal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flomad Smart Devices Section */}
      <section className="py-16 border-t border-white/10 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-12 text-3xl font-bold text-white text-center">
            Flomad Smart Pet Devices
          </h3>
          <p className="mb-12 text-center text-white/70 max-w-3xl mx-auto">
            Seamless integration across devices with real-time data sharing and centralized control through one app
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Collar */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Smart Communication Collar</h4>
              <p className="text-white/70 mb-4">Tracks health, vocalizations, hazards, and location with GPS and health metrics powered by AI</p>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Vocalization analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>GPS tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Hazard detection</span>
                </div>
              </div>
            </div>

            {/* Smart Feeder */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Smart Feeder</h4>
              <p className="text-white/70 mb-4">Portion control with camera monitoring, facial recognition, and food freshness tracking</p>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Automated portions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Pet recognition</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Freshness alerts</span>
                </div>
              </div>
            </div>

            {/* Water Tracker */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Water Tracker</h4>
              <p className="text-white/70 mb-4">Monitors hydration levels with smart reminders and usage patterns for optimal pet health</p>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Hydration tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Smart alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Pattern analysis</span>
                </div>
              </div>
            </div>

            {/* Smart Litter Box */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Smart Litter Box</h4>
              <p className="text-white/70 mb-4">Weight, motion, odor, and temperature sensors provide early health detection and automatic hygiene</p>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Health alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Auto-cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Behavior monitoring</span>
                </div>
              </div>
            </div>

            {/* Calming System */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Calming System</h4>
              <p className="text-white/70 mb-4">Smart noise-canceling and calming music that adapts to your pet&rsquo;s stress levels</p>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Adaptive audio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Stress detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Anxiety reduction</span>
                </div>
              </div>
            </div>

            {/* Interactive Robots */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Interactive Robots</h4>
              <p className="text-white/70 mb-4">Adaptive play sessions that keep pets active with cognitive stimulation and activity tracking</p>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Custom play plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Mental stimulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FDE035]"></div>
                  <span>Training tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Pets */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-12 text-2xl font-semibold text-white text-center">
            Simple Daily Observations
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-[#2aa68a] font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Quick daily check-in</h4>
                <p className="text-white/70">Note your pet&rsquo;s energy, appetite, social behavior, and any unusual signs (2 minutes)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-[#2aa68a] font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Environmental context</h4>
                <p className="text-white/70">Track household changes, weather, visitors, schedule disruptions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-[#2aa68a] font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Pattern recognition</h4>
                <p className="text-white/70">&ldquo;Your dog shows anxiety 2 days before thunderstorms&rdquo; or &ldquo;Your cat is most playful after morning sun&rdquo;</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-[#2aa68a] font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Actionable insights</h4>
                <p className="text-white/70">Preventive care suggestions and early intervention strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-white">Your Pet&rsquo;s Privacy Matters</h3>
            <p className="text-white/70 mb-6">
              We believe your pet&rsquo;s behavioral data is as private as your own. Your observations and insights stay with you.
            </p>
            <p className="text-white/70">
              Optional: Share relevant patterns with your veterinarian to support better care.
            </p>
          </div>
          
          <div className="inline-flex items-center gap-3 rounded-full bg-[#FDE035]/50 px-8 py-4 text-lg font-semibold text-[#0d2430]/70 cursor-not-allowed">
            Coming Soon
          </div>
          
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#FDE035] hover:text-[#FDE035]/80 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}