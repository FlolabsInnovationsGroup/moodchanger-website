import Link from "next/link";
import PageLayout from "../../components/PageLayout";

export default function AllergiesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
            MoodChanger for Allergies
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            Track how allergies really affect you—mood, sleep, focus—not just symptoms.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* The Hidden Impact */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              The Hidden Impact
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Allergies don&rsquo;t just make you sneeze. They tank your mood, wreck your sleep, and kill your focus 
              2-3 days before you even notice physical symptoms.
            </p>
          </div>

          {/* How MoodChanger Helps */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold text-white lg:text-3xl">
              How MoodChanger Helps
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-3 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">
                  Tracks your daily mood, energy, and sleep quality
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-3 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">
                  Correlates with local pollen counts and weather
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-3 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">
                  Shows you patterns like: &ldquo;Your focus drops 30% on high oak pollen days when you sleep less than 7 hours&rdquo;
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-3 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">
                  Suggests small changes: indoor workouts, air purifier timing, antihistamine scheduling
                </p>
              </div>
            </div>
          </div>

          {/* What You'll See */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold text-white lg:text-3xl">
              What You&rsquo;ll See
            </h2>
            
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8">
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Daily check-in</h3>
                  <p className="text-white/70">&ldquo;How are you feeling today?&rdquo; (1-10 scale)</p>
                </div>
                
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Pattern insights</h3>
                  <p className="text-white/70">&ldquo;Your mood drops 2 days before pollen spikes&rdquo;</p>
                </div>
                
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Environmental data</h3>
                  <p className="text-white/70">Pollen counts, air quality, weather</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Suggestions</h3>
                  <p className="text-white/70">
                    &ldquo;Try closing windows after 3pm&rdquo; or &ldquo;Your energy is higher with morning workouts during allergy season&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-16">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Not a Medical Device
              </h2>
              <p className="text-white/70 leading-relaxed">
                MoodChanger helps you notice patterns. It doesn&rsquo;t diagnose or treat allergies. 
                Work with your doctor for medical care.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#FDE035]/50 px-8 py-4 text-lg font-semibold text-[#0d2430]/70 cursor-not-allowed">
              Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* Back to People */}
      <section className="py-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">
          <Link 
            href="/people"
            className="inline-flex items-center gap-2 text-[#FDE035] hover:text-[#FDE035]/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to People
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
