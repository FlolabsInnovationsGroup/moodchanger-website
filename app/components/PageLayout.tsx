import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0d2430] text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-[9999] border-b border-white/10 bg-[#0d2430] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-20 py-10">
          <Link href="/" className="flex items-baseline font-bold tracking-[0.2em]">
            <span className="text-2xl text-white">MOOD</span>
            <span className="text-2xl text-[#FDE035]">CHANGER</span>
            <span className="text-2xl text-white">.AI</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Navigation />
            <div className="flex items-center">
              <Image
                src="/flomadlogo.svg"
                alt="Flo Labs"
                width={32}
                height={32}
                className="opacity-80 hover:opacity-100 transition-opacity brightness-0 invert"
                style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(68%) saturate(1158%) hue-rotate(358deg) brightness(103%) contrast(96%)' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-16 text-sm text-white/70 md:flex-row">
          <div className="flex items-center gap-2">
            <span>A</span>
            <Link
              href="https://flomadlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#FDE035] transition-colors hover:text-[#FDE035]/80"
            >
              Flo Labs
            </Link>
            <span>product</span>
          </div>
          <div className="text-center text-xs text-white/50">
            <p>
              Powered by{" "}
              <a 
                href="https://caipo.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FDE035] hover:text-[#FDE035]/80 transition-colors"
              >
                CAIPO AI
              </a>
            </p>
            <p className="mt-1">CAIPO is the intelligent layer that helps MoodChanger understand patterns in your daily life.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}