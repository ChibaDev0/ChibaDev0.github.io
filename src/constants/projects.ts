export interface Project {
  name: string;
  status: "Public preview" | "Login required";
  category: "Web applications" | "Tools";
  description: string;
  tech: readonly string[];
  href: string;
  image: string;
  source: string | null;
}

// Curated from GitHub metadata and a rendered-browser audit.
// Preview means the entry page rendered, not an end-to-end verification.
// Private repositories intentionally have no source-code link.
export const PROJECTS: readonly Project[] = [
  {
    name: "Dily Shop",
    status: "Public preview",
    category: "Web applications",
    description:
      "My own clothing store, featuring an interactive 3D storefront. A personal business where I bring together web development, visual design, and the customer experience.",
    tech: ["3D experience", "Interactive web", "Fashion"],
    href: "https://dilyshopth.com",
    image: "/images/projects/dilyshopth.webp",
    source: null,
  },
  {
    name: "MeowMatch",
    status: "Login required",
    category: "Web applications",
    description:
      "An experimental cat-pairing and offspring-trait planning application. A personal project exploring probability and practical interfaces—not a clinical genetics tool.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    href: "https://meowmatch-delta.vercel.app",
    image: "/images/projects/meowmatch.webp",
    source: "https://github.com/ChibaDev0/MeowMatch",
  },
  {
    name: "LINE Vault",
    status: "Login required",
    category: "Tools",
    description:
      "A Thai-language LINE OA token tool with a focused, account-based entry point. Access is limited to administrator-provisioned accounts.",
    tech: ["LINE OA", "Web tool", "Account access"],
    href: "https://get-line-token.vercel.app",
    image: "/images/projects/line-vault.webp",
    source: null,
  },
  {
    name: "Tour Partner Hub",
    status: "Login required",
    category: "Web applications",
    description:
      "A travel-agent portal for trip availability and booking management. The public entry point is available; the application is intended for signed-in users.",
    tech: ["Travel platform", "Partner portal", "Web application"],
    href: "https://tour-partner-hub.vercel.app",
    image: "/images/projects/tour-partner-hub.webp",
    source: null,
  },
  {
    name: "JustQR",
    status: "Public preview",
    category: "Tools",
    description:
      "A focused QR-code generator with URL input, color customization, a logo option, and PNG download controls. One small tool, with a clear purpose.",
    tech: ["QR codes", "Utility", "Customization"],
    href: "https://generate-qr-liard.vercel.app",
    image: "/images/projects/generate-qr.webp",
    source: null,
  },
  {
    name: "Debug Study",
    status: "Public preview",
    category: "Web applications",
    description:
      "The foundation of a student-productivity platform, with a public introduction and account entry points. An ongoing exploration of better tools for student life.",
    tech: ["Student productivity", "Platform foundation"],
    href: "https://debug-study.vercel.app",
    image: "/images/projects/debug-study.webp",
    source: null,
  },
];
