import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MotionLayer from "@/components/site/MotionLayer";
import ToTop from "@/components/site/ToTop";
import { THEME_KEY } from "@/lib/theme";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/**
 * Sets `data-theme` before first paint so a dark-mode visitor never sees a
 * light flash. Mirrors the inline script in the original <head>.
 */
const themeScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_KEY,
)});document.documentElement.setAttribute('data-theme',(t==='dark'||t==='light')?t:'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" className={schibsted.variable} suppressHydrationWarning>
      <body id="top">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Header />
        {children}
        <Footer />
        <ToTop />
        <MotionLayer />
      </body>
    </html>
  );
}
