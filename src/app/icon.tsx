import { ImageResponse } from "next/og";
import { logoDataUri } from "@/lib/og";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

/** Browser-tab icon: the FloLabs mark only, no background fill. */
export default async function Icon() {
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
          background: "transparent",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain <img> */}
        <img src={logo} width={256} height={256} alt="" />
      </div>
    ),
    size,
  );
}
