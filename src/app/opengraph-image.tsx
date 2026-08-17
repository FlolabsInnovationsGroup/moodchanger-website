import { ImageResponse } from "next/og";
import { brand, logoDataUri, ogFonts } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card used by Discord, LinkedIn, Facebook, WhatsApp, X and
 * anything else that reads Open Graph. Brand ink background, the FloLabs mark,
 * the MoodChanger.ai wordmark with its yellow accent, and the site tagline.
 */
export default async function OpenGraphImage() {
  const [fonts, logo] = await Promise.all([ogFonts(), logoDataUri()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // extra bottom padding lifts the centred block clear of the byline
          padding: "0 92px 78px",
          backgroundColor: brand.ink,
          backgroundImage: `radial-gradient(900px 520px at 82% 8%, rgba(253,224,53,.18), transparent 62%), radial-gradient(760px 520px at 8% 96%, rgba(157,82,235,.20), transparent 60%), linear-gradient(160deg, ${brand.inkBrand} 0%, ${brand.ink} 70%)`,
          fontFamily: "Schibsted Grotesk",
        }}
      >
        {/* brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain <img> */}
          <img src={logo} width={96} height={96} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 600,
              color: brand.white,
              letterSpacing: "-0.02em",
            }}
          >
            <span>Mood</span>
            <span style={{ color: brand.yellow }}>Changer</span>
            <span>.ai</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 132,
            height: 6,
            backgroundColor: brand.yellow,
            borderRadius: 3,
            margin: "48px 0 34px",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            color: brand.yellow,
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            maxWidth: 980,
          }}
        >
          {site.tagline}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 34,
            fontWeight: 400,
            color: brand.muted,
            maxWidth: 940,
            lineHeight: 1.35,
          }}
        >
          All your AI in one app — to boost productivity, wellness, and lifestyle.
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 92,
            bottom: 56,
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,.46)",
            letterSpacing: "0.06em",
          }}
        >
          by {site.parent}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
