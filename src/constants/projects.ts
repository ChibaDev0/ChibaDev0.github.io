export const PROJECTS = [
  {
    name: "Muffin Shop",
    status: "In Development",
    description:
      "E-commerce platform for premium digital accounts (Netflix, Spotify, Disney+, and more) with automated 24/7 delivery, an in-app wallet, and automatic payment-slip verification via the EasySlip API.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
    ],
    href: "https://muffin-shop-psi.vercel.app/",
  },
  {
    name: "Debug Study",
    status: "In Development",
    description:
      "A platform for students featuring a grade calculator, class scheduling with OCR, a calendar, a unified email inbox with AI-powered categorization, and multiple AI assistants.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
    href: "https://debug-study.vercel.app/",
  },
  {
    name: "JustQR",
    status: "Live",
    description:
      "A fully client-side QR code generator — paste a URL and instantly generate, preview, and download it as a PNG. No login, no database, no backend.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://justqr.vercel.app/",
  },
] as const;
