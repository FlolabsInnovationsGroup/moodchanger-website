import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Brand palette shared by the generated icon and social preview images. */
export const brand = {
  ink: "#0a1a22",
  inkBrand: "#0d2430",
  yellow: "#FDE035",
  white: "#ffffff",
  muted: "rgba(255,255,255,.66)",
} as const;

const fontDir = join(process.cwd(), "src/app/_og-fonts");

/**
 * Schibsted Grotesk, vendored as TTF so image generation never depends on
 * network access at build time (satori cannot read woff2).
 */
export async function ogFonts() {
  const [regular, semibold, extrabold] = await Promise.all([
    readFile(join(fontDir, "SchibstedGrotesk-Regular.ttf")),
    readFile(join(fontDir, "SchibstedGrotesk-SemiBold.ttf")),
    readFile(join(fontDir, "SchibstedGrotesk-ExtraBold.ttf")),
  ]);
  return [
    { name: "Schibsted Grotesk", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Schibsted Grotesk", data: semibold, weight: 600 as const, style: "normal" as const },
    { name: "Schibsted Grotesk", data: extrabold, weight: 800 as const, style: "normal" as const },
  ];
}

/** The FloLabs mark as a data URI, for embedding in generated images. */
export async function logoDataUri() {
  const svg = await readFile(join(process.cwd(), "public/assets/flomadlogo.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}
