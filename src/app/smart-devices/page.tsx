import type { Metadata } from "next";
import "@/styles/wearables.css";
import Showcase from "@/components/showcase/Showcase";
import { smartDevices } from "@/lib/smart-devices";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `Smart Devices — ${site.name}`,
  description:
    "AI Health Insights, Smart Scale, Smart Bottle and Smart Robots — connected devices that feed CAIPO and MoodChanger.ai for healthier, calmer, more productive days.",
  path: "/smart-devices",
  socialDescription:
    "AI Health Insights, Smart Scale, Smart Bottle and Smart Robots — connected devices that feed CAIPO and MoodChanger.ai.",
});

export default function SmartDevicesPage() {
  return (
    <div className="page-wear">
      <Showcase
        items={smartDevices}
        heading="Smart Devices"
        noun="smart device"
        nounPlural="All smart devices"
        ariaLabel="Smart Devices showcase"
        detailLabel="Smart device details"
      />
    </div>
  );
}
