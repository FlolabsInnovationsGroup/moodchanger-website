import Link from "next/link";
import PageLayout from "../../components/PageLayout";

export default function CognitiveLossPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
            MoodChanger for Cognitive Support
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            Gentle daily structure for independence and peace of mind.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* For You or Someone You Care For */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              For You or Someone You Care For
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Early cognitive changes can make daily routines harder. MoodChanger provides simple prompts 
              and context without pressure.
            </p>
          </div>

          {/* How It Helps */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-semibold text-white lg:text-3xl">
              How It Helps
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Routine reminders</h3>
                  <p className="text-white/70">medications, appointments, daily activities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Context cards</h3>
                  <p className="text-white/70">&ldquo;Today is Tuesday. You have lunch with Sarah at noon.&rdquo;</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mood check-ins</h3>
                  <p className="text-white/70">&ldquo;How are you feeling?&rdquo; with simple responses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Optional caregiver sharing</h3>
                  <p className="text-white/70">Private link to share routine updates with a trusted person</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Pattern awareness</h3>
                  <p className="text-white/70">Notice which days or activities feel easier</p>
                </div>
              </div>
            </div>
          </div>

          {/* This Is Not Medical Monitoring */}
          <div className="mb-16">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">
                This Is Not Medical Monitoring
              </h2>
              <p className="text-white/70 leading-relaxed">
                MoodChanger is a daily companion tool, not a medical device. It doesn&rsquo;t diagnose, treat, or monitor 
                cognitive conditions. Always work with healthcare professionals for medical care.
              </p>
            </div>
          </div>

          {/* Privacy & Control */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              Privacy & Control
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-3 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">
                  You control what&rsquo;s shared and with whom
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-3 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">
                  Data is never sold or used for advertising
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-3 flex-shrink-0"></div>
                <p className="text-white/80 leading-relaxed">
                  Cancel or delete anytime
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#FDE035]/50 px-8 py-4 text-lg font-semibold text-[#0d2430]/70 cursor-not-allowed">
              Coming Soon
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6">
              <p className="text-white/60 text-sm leading-relaxed">
                <strong>Disclaimer:</strong> MoodChanger is not a substitute for medical advice, diagnosis, or treatment. 
                If you&rsquo;re experiencing cognitive changes, consult a healthcare provider.
              </p>
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
