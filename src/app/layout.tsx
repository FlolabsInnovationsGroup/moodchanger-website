import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MotionLayer from "@/components/site/MotionLayer";
import ToTop from "@/components/site/ToTop";
import PreferredSourceChip from "@/components/site/PreferredSourceChip";
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

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "Bglamph4aFxfF4neiz_VpKV_QSFkFwCHsdR2D9GL60g",
  },

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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Sets `data-theme` before first paint so a dark-mode visitor never sees a
 * light flash.
 */
const themeScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_KEY,
)});document.documentElement.setAttribute('data-theme',(t==='dark'||t==='light')?t:'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={schibsted.variable}
      suppressHydrationWarning>
      <head>
        {/* Google Tag Manager Header */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];

                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;

                j.src =
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;

                f.parentNode.insertBefore(j,f);

              })(window,document,'script','dataLayer','GTM-P729WQPC');
            `,
          }}
        />
      </head>

      <body id="top">
        {/* Google Tag Manager Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P729WQPC"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />

        <Header />

        {children}

        <Footer />

        <ToTop />

        <PreferredSourceChip />

        <MotionLayer />
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Schibsted_Grotesk } from "next/font/google";
// import "./globals.css";
// import { site } from "@/lib/site";
// import Header from "@/components/site/Header";
// import Footer from "@/components/site/Footer";
// import MotionLayer from "@/components/site/MotionLayer";
// import ToTop from "@/components/site/ToTop";
// import { THEME_KEY } from "@/lib/theme";

// const schibsted = Schibsted_Grotesk({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   variable: "--font-schibsted",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   metadataBase: new URL(site.url),
//   title: {
//     default: site.name,
//     template: `%s — ${site.name}`,
//   },
//   description: site.description,
//   applicationName: site.name,
//   alternates: { canonical: "/" },
//   openGraph: {
//     type: "website",
//     siteName: site.name,
//     title: site.name,
//     description: site.description,
//     url: "/",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: site.name,
//     description: site.description,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: { index: true, follow: true, "max-image-preview": "large" },
//   },
// };

// /**
//  * Sets `data-theme` before first paint so a dark-mode visitor never sees a
//  * light flash. Mirrors the inline script in the original <head>.
//  */
// const themeScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
//   THEME_KEY,
// )});document.documentElement.setAttribute('data-theme',(t==='dark'||t==='light')?t:'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html lang="en" data-theme="light" className={schibsted.variable} suppressHydrationWarning>
//       <body id="top">
//         <script dangerouslySetInnerHTML={{ __html: themeScript }} />
//         <Header />
//         {children}
//         <Footer />
//         <ToTop />
//         <MotionLayer />
//       </body>
//     </html>
//   );
// }
