import type { Metadata } from "next";
import "@/styles/wearables.css";
import Showcase from "@/components/showcase/Showcase";
import { wearables } from "@/lib/wearables";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `Wearables — ${site.name}`,
  description:
    "Twelve MoodChanger.ai wearables — smart glasses, EEG hardware, rings, insoles, exoskeletons and more — each paired with CAIPO for real-time insight into focus, recovery and wellbeing.",
  path: "/wearables",
  socialDescription:
    "Smart glasses, EEG hardware, rings, insoles, exoskeletons and more — each paired with CAIPO for real-time insight into focus, recovery and wellbeing.",
});

export default function WearablesPage() {
  return (
    <div className="page-wear">
      <Showcase
        items={wearables}
        heading="Wearables"
        noun="wearable"
        nounPlural="All wearables"
        ariaLabel="Wearables showcase"
        detailLabel="Wearable details"
      />
    </div>
  );
}
