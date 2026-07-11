"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/constants/about";
import { siteConfig } from "@/constants/site";
import { SocialLinks } from "@/components/SocialLinks";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 md:flex-row md:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex shrink-0 flex-col items-center gap-4"
        >
          <div className="from-primary via-secondary to-accent h-32 w-32 rounded-full bg-gradient-to-br p-[3px]">
            <div className="bg-background h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/profile.webp"
                alt={siteConfig.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-center md:text-left"
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            {ABOUT_CONTENT.eyebrow}
          </span>
          <h2 className="text-foreground mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {siteConfig.name}
          </h2>
          <p className="text-foreground/70 mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            {ABOUT_CONTENT.paragraph}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
