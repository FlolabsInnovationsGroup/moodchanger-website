import Link from "next/link";
import PageLayout from "../../components/PageLayout";

export default function StutteringPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
            MoodChanger for Stuttering
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            A private space to practice, track progress, and understand your patterns.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Your Companion, Your Pace */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              Your Companion, Your Pace
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Stuttering changes with stress, fatigue, and context. MoodChanger helps you notice what affects 
              your fluency—without judgment.
            </p>
          </div>

          {/* How It Supports You */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold text-white lg:text-3xl">
              How It Supports You
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Practice breathing exercises</h3>
                  <p className="text-white/70">with guided timing</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Log speaking contexts</h3>
                  <p className="text-white/70">meetings, phone calls, casual conversation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Track what helps</h3>
                  <p className="text-white/70">sleep, prep time, specific techniques</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Private progress journal</h3>
                  <p className="text-white/70">that only you see</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Notice patterns</h3>
                  <p className="text-white/70">&ldquo;Your fluency is 40% better on days you sleep 8+ hours&rdquo;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Works Alongside Professional Support */}
          <div className="mb-16">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Works Alongside Professional Support
              </h2>
              <p className="text-white/70 leading-relaxed">
                MoodChanger is not speech therapy. It&rsquo;s a personal tool that works with your existing care plan.
              </p>
            </div>
          </div>

          {/* Your Privacy Matters */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              Your Privacy Matters
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              All data stays private. No audio recording required—just your own observations.
            </p>
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
