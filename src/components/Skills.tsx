"use client";

import { motion, type Variants } from "framer-motion";
import { SKILL_GROUPS } from "@/constants/skills";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Skills
          </span>
          <h2 className="text-foreground mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What I Work With
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="border-border bg-card rounded-card flex flex-col gap-4 border p-6"
            >
              <h3 className="text-foreground text-base font-semibold tracking-tight">
                {group.title}
              </h3>

              {"description" in group && (
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {group.description}
                </p>
              )}

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-border text-foreground/70 rounded-full border px-3 py-1 text-xs"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
