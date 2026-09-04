/** Single source of truth for site-wide constants used by metadata and chrome. */
export const site = {
  name: "MoodChanger.ai",
  /** Canonical production origin — drives metadataBase, canonical URLs and OG. */
  url: "https://www.moodchanger.ai",
  tagline: "Transforming your wellbeing, one insight at a time",
  description:
    "All your AI in one app, powered by FloBrain, to boost productivity, wellness, and lifestyle. MoodChanger.ai turns data from your wearables and smart devices into personalized insights.",
  parent: "FloLabs Innovations Group",
  demoMailto: "mailto:hello@moodchanger.ai?subject=Request%20a%20demo",
  social: {
    youtube: "https://www.youtube.com/@flolabsinnovation",
    linkedin: "https://www.linkedin.com/company/flolabs-innovation/",
    facebook: "https://www.facebook.com/people/Flo-Labs-RD/61572285432918/",
    instagram: "https://www.instagram.com/flolabsinnovations/",
    tiktok: "https://www.tiktok.com/@flomadlabs",
    reddit: "https://www.reddit.com/user/FloLabs_Innovations/",
  },
} as const;

/** Google Preferred Sources — domain-level only, never a path. */
export const PREFERRED_SOURCE = {
  domain: "moodchanger.ai",
  brand: "MoodChanger",
  publicationUrl: "https://moodchanger.ai/",
  deeplink: `https://www.google.com/preferences/source?q=${encodeURIComponent("https://moodchanger.ai/")}`,
  storageKey: "moodchanger.preferred-source.dismissed-at",
  dismissMs: 30 * 24 * 60 * 60 * 1000,
  showAfterMs: 10_000,
  showAfterScrollPx: 320,
} as const;
