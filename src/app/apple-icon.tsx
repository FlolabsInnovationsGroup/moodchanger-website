import { ImageResponse } from "next/og";
import { brand, logoDataUri } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iOS. Apple applies its own mask, so this stays square. */
export default async function AppleIcon() {
  const logo = await logoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: brand.ink,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain <img> */}
        <img src={logo} width={132} height={132} alt="" />
      </div>
    ),
    size,
  );
}
