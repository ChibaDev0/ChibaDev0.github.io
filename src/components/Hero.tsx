"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { HERO_CONTENT } from "@/constants/hero";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const GLOW_SIZE = 288;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const shouldReduceMotion = usePrefersReducedMotion();

  const mouseX = useMotionValue(-GLOW_SIZE);
  const mouseY = useMotionValue(-GLOW_SIZE);
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - bounds.left - GLOW_SIZE / 2);
    mouseY.set(event.clientY - bounds.top - GLOW_SIZE / 2);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[calc(100dvh_-_4rem)] items-center overflow-hidden px-6 py-24"
    >
      <div
        aria-hidden
        className="bg-primary/30 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="bg-secondary/20 absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl"
      />

      <motion.div
        aria-hidden
        className="bg-accent/20 absolute top-24 right-[15%] h-40 w-40 rounded-full blur-2xl"
        animate={shouldReduceMotion ? undefined : { y: [0, -24, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          x: glowX,
          y: glowY,
          backgroundImage:
            "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={itemVariants}
          className="border-border bg-card text-foreground/80 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
        >
          <span className="bg-accent h-1.5 w-1.5 rounded-full" />
          {HERO_CONTENT.badge}
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="from-primary via-secondary to-accent bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
        >
          {HERO_CONTENT.heading}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-foreground/70 mt-6 max-w-xl text-base sm:text-lg"
        >
          {HERO_CONTENT.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={HERO_CONTENT.primaryCta.href}
            className="from-primary to-secondary w-full rounded-full bg-gradient-to-r px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            {HERO_CONTENT.primaryCta.label}
          </a>
          <a
            href={HERO_CONTENT.secondaryCta.href}
            className="border-border text-foreground hover:bg-card w-full rounded-full border px-8 py-3 text-sm font-medium transition-colors sm:w-auto"
          >
            {HERO_CONTENT.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
