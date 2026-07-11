import { siteConfig } from "@/constants/site";

export const HERO_CONTENT = {
  badge: "Available for opportunities",
  heading: "Developer",
  description: `Hi, I'm ${siteConfig.name} — I love trying new things and I'm always working to grow and improve myself.`,
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Get in Touch", href: "#contact" },
} as const;
