/**
 * Primary navigation, mirroring the header of the original HTML build.
 *
 * Items whose `submenu` entries point at anchors on their own page render as
 * in-page links when the user is already on that page (matching the original
 * Wearables.html / SmartDevices.html headers) and as cross-page links otherwise.
 */
export type NavLink = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  /** Anchor ids on the item's own page, in order. */
  submenu?: NavLink[];
  /** Two-column dropdown, as the Wearables menu is in the original. */
  wide?: boolean;
};

export const navItems: NavItem[] = [
  {
    label: "Wearables",
    href: "/wearables",
    wide: true,
    submenu: [
      { label: "Smart Glasses", href: "#smart-glasses" },
      { label: "EEG Hardware", href: "#eeg-hardware" },
      { label: "Smart Ring", href: "#smart-ring" },
      { label: "Brain Monitor", href: "#brain-monitor" },
      { label: "Smart Foot Pods", href: "#smart-foot-pods" },
      { label: "Smart Insoles", href: "#smart-insoles" },
      { label: "Smart Watch", href: "#smart-watch" },
      { label: "Exoskeleton", href: "#exoskeleton" },
      { label: "Smart Gloves", href: "#smart-gloves" },
      { label: "Smart Shirt", href: "#smart-shirt" },
      { label: "Smart Suit", href: "#smart-suit" },
      { label: "Smart Posture Trainer", href: "#smart-posture-trainer" },
    ],
  },
  {
    label: "Smart Devices",
    href: "/smart-devices",
    submenu: [
      { label: "AI Health Insights", href: "#ai-insights" },
      { label: "Smart Scale", href: "#smart-scale" },
      { label: "Smart Bottle", href: "#smart-bottle" },
      { label: "Smart Robots", href: "#smart-robots" },
    ],
  },
  {
    label: "People",
    href: "/people",
    submenu: [
      { label: "Allergies", href: "#allergies" },
      { label: "Stuttering", href: "#stuttering" },
      { label: "Cognitive Loss", href: "#cognitive" },
    ],
  },
  { label: "Athletes", href: "/athletes" },
  { label: "Pets", href: "/pets" },
];

/** Footer "Navigation" column. */
export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Wearables", href: "/wearables" },
  { label: "Smart Devices", href: "/smart-devices" },
  { label: "People", href: "/people" },
  { label: "Athletes", href: "/athletes" },
  { label: "Pets", href: "/pets" },
];

/** Footer "Projects" column — all external FloLabs properties. */
export const footerProjects: NavLink[] = [
  { label: "Athletic Performance Intelligence", href: "https://www.athleticperformanceintelligence.com/" },
  { label: "CAIPO", href: "https://www.caipo.ai/" },
  { label: "Connecting the Dots", href: "https://www.youtube.com/@flolabsinnovation" },
  { label: "Cosmos Intelligence", href: "http://cosmosintelligence.org/" },
  { label: "Flo Travel", href: "https://www.flomadtravel.com/" },
  { label: "FloBrain", href: "https://www.flobrain.ai/" },
  { label: "FloLabs Innovations Group", href: "https://www.flolabsinnovations.com/" },
  { label: "FloLabs International", href: "https://www.flolabs.international/" },
  { label: "FloStudios", href: "https://www.flostudios.ai/" },
  { label: "Hephaestus International", href: "https://hephaestus.international/" },
  { label: "Innovation Bootcamp University", href: "https://www.bootcampuniversity.org/" },
  { label: "MoodChanger", href: "https://www.moodchanger.ai/" },
  { label: "Legal & Ethics Ventures Institute", href: "https://www.legalethicsventuresinstitute.com/" },
  { label: "RoboCollective", href: "https://www.robocollective.ai/" },
  { label: "Space Ventures Institute", href: "https://www.spaceventuresinstitute.com/" },
  { label: "TARRL", href: "https://tarrl.org/" },
];

/** Footer "Company" column. */
export const footerCompany: NavLink[] = [
  { label: "Careers", href: "https://www.flolabsinnovations.com/" },
  { label: "Contact Us", href: "https://www.flolabsinnovations.com/" },
  { label: "Merch", href: "https://flolabsrd.notion.site/merch-background" },
];
